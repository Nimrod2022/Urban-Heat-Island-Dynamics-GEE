// Define the region of interest (AOI)
var aoi = aoi ;
//cloud free composite landsat 8
var image = ee.Algorithms.Landsat.simpleComposite({
  collection:l8raw.filterDate('2022-01-01', '2022-01-31'),
  asFloat:true
});
// Set visualization parameters for true color image
var trueColorVis = {min:0, max:0.3, bands:['B4', 'B3', 'B2']};
// Add the composite image to the map with true color visualization
Map.addLayer(image.clip(aoi), trueColorVis, 'composite');
Map.setCenter(36.8219, -1.2921, 10);
// Training data variable
var label = "Class";
var bands = ['B1', 'B2', 'B3', 'B4', 'B5'];
var input = image.select(bands);
// Merge separate feature collections for each land cover class into one
//0= water; 1 = Green urban infrustructure (GUI); 2 = built-up areas 3= Bare ground
var training = Water.merge(Builtup_areas).merge(GUI).merge(Bareground_shrubs);
// Overlay the training points on the Landsat image and extract training data
var trainImage = input.sampleRegions({
  collection: training,
  properties:[label],
  scale:30
});
// Print training data to the console for debugging
print(trainImage);
// Split the training data into two sets: one for training the classifier and another for testing the classifier
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random', 0.8));
// Create a classifier using the CART algorithm and train it using the training set
var classifier = ee.Classifier.smileCart().train(trainSet, label, bands);
// Classify the input image using the trained classifier
var classified = input.classify(classifier);
// Define visualization parameters for the classified image
var landcoverPalette =[
  'blue',
  'green',
  'red',
  'grey',
  ];
 Map.addLayer(classified.clip(aoi), {palette:landcoverPalette, min:0, max:3}, 'classification'); 
 
 

//****************** LAND SURFACE TEMPERATURE ESTIMATION *****************//

// Set filter variables for selecting Landsat 8 images
var DATE_RANGE = ee.Filter.dayOfYear(1, 31);
var YEAR_RANGE = ee.Filter.calendarRange(2022, 2022,'year');
var STUDYBOUNDS = aoi;
var DISPLAY = true;
// Set the basemap to display as satellite
Map.setOptions('SATELLITE');
// Assign a variable to the sensor-specific bands 
var LC08_bands = ['ST_B10', 'QA_PIXEL']; // Landsat 8 surface temperature (ST) & QA_Pixel bands

// Create a cloud mask function to be applied to the Landsat 8 images
function cloudMask(image) {
  var qa = image.select('QA_PIXEL');
  var mask = qa.bitwiseAnd(1 << 3)
    .or(qa.bitwiseAnd(1 << 4));
  return image.updateMask(mask.not());
}
/* Import Landsat 8 Collection 2, Tier 1, Level 2 image collection and
filter it by the study area bounds, date range, and cloud cover
 */
var L8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
  .select('ST_B10', 'QA_PIXEL')
  .filterBounds(STUDYBOUNDS)
  .filter(DATE_RANGE)
  .filter(YEAR_RANGE)
  .map(cloudMask);
  
// Filter the collections by the CLOUD_COVER property so each image contains less than 20% cloud cover.	
var filtered_L8 = L8.filter(ee.Filter.lt('CLOUD_COVER', 20));
// Use print statements to print the argument to the console.
print(filtered_L8, 'Landsat 8 ST');
// Create a funtion using Landsat scale factors for deriving ST in Kelvin and Celsius
function applyScaleFactors(image) {
// Select the thermal band and apply scale factors for converting to Kelvin and then Celsius
  var thermalBands = image.select('ST_B10').multiply(0.00341802).add(149.0) // Scale factors for Kelvin
  .subtract(273.15); // Scale factor for degrees Celsius
  // Add the converted thermal band as a new band to the image and return it.
  return image.addBands(thermalBands, null, true);
}
print(filtered_L8, 'Landsat ST (Celsius)');

// Define a variable to apply scale factors to the filtered image collection.
var landsatST = filtered_L8.map(applyScaleFactors);

// Using the print statement to tracking progress in the console tab.
print("... Computing mean ST across image collection");


//****************** CALCULATE MEAN SURFACE TEMPERATURE *****************//

/* Variable to calculate mean ST for each pixel geography 
    throughout the filtered image collection.*/
var mean_LandsatST = landsatST.mean();

// Define a variable to use the clip funtion to subset imagery to the aoi.
var clip_mean_ST = mean_LandsatST.clip(STUDYBOUNDS);

// Use a print statement to print the argument to the console.
print(clip_mean_ST, 'Mean ST clipped to study area');

// Define a variable to select the temperature band.
var values_ST = clip_mean_ST.select("ST_B10"); 

var chartOptions = {
  title: 'Histogram of Land Surface Temperature (Celsius)',
  subtitle: ' ',
  hAxis: {title: 'Temperature (Celsius)'},
  vAxis: {title: 'Count'},
  chartArea: {width: '70%', height: '70%'},
  titleTextStyle: {
    fontSize: 15, 
    bold: true, 
    textAlign: 'center', // center align the title
    // add the following option to center the chart title vertically
    // (adjust the value as needed)
    top: '50%' 
  },
  subtitleTextStyle: {fontSize: 16, bold: false, textAlign: 'center'}
};

// Define a variable to output a histogram of mean ST values within your aoi.
var histogram_ST_values = ui.Chart.image.histogram(values_ST, STUDYBOUNDS, 30)
  .setOptions(chartOptions); // add the chart options to the chart object

// Use print statement to output the histogram values of mean ST to the console tab.
print(histogram_ST_values);

// Add the image to the map window, defining min/max values, a palette for 
// symbology, assign a name to the visualization, and display the result.
Map.addLayer(clip_mean_ST, {
  bands: "ST_B10", 
  min: 28, max: 47, 
  palette: ['blue','white','red']}, "ST", DISPLAY);

print('... Mean/Min/Max ST for Nairobi');

// Define the colors for each class.
var colorWater = 'blue';
var colorGUI = 'green';
var colorBuiltupAreas = 'red';
var colorBaregroundShrubs = 'grey';

// Compute the mean, min, and max for each class.
var statsWater = clip_mean_ST.reduceRegion({
  reducer: ee.Reducer.mean().combine({
    reducer2: ee.Reducer.minMax(),
    sharedInputs: true
  }),
  geometry: Water,
  scale: 30,
  maxPixels: 1e9
});
var statsGUI = clip_mean_ST.reduceRegion({
  reducer: ee.Reducer.mean().combine({
    reducer2: ee.Reducer.minMax(),
    sharedInputs: true
  }),
  geometry: GUI,
  scale: 30,
  maxPixels: 1e9
});
var statsBuiltupAreas = clip_mean_ST.reduceRegion({
  reducer: ee.Reducer.mean().combine({
    reducer2: ee.Reducer.minMax(),
    sharedInputs: true
  }),
  geometry: Builtup_areas,
  scale: 30,
  maxPixels: 1e9
});
var statsBaregroundShrubs = clip_mean_ST.reduceRegion({
  reducer: ee.Reducer.mean().combine({
    reducer2: ee.Reducer.minMax(),
    sharedInputs: true
  }),
  geometry: Bareground_shrubs,
  scale: 30,
  maxPixels: 1e9
});
// Display the Meantemp
print(statsWater);
print(statsGUI);
print(statsBuiltupAreas);
print(statsBaregroundShrubs);


// Create a FeatureCollection with a feature for each class.
var allStats = ee.FeatureCollection([
  ee.Feature(null, statsWater).set('class', 'Water').set('style', {color: colorWater}),
  ee.Feature(null, statsGUI).set('class', 'GUI').set('style', {color: colorGUI}),
  ee.Feature(null, statsBuiltupAreas).set('class', 'Built-up Areas').set('style', {color: colorBuiltupAreas}),
  ee.Feature(null, statsBaregroundShrubs).set('class', 'Bareground/Shrubs').set('style', {color: colorBaregroundShrubs})
]);

// Create a list of the properties to display in the chart.
var propertiesToDisplay = ['ST_B10_max', 'ST_B10_mean', 'ST_B10_min'];

// Filter the feature collection to only include the properties to display.
var filteredStats = allStats.select(propertiesToDisplay);

// Create a chart of the filtered statistics for all classes.
var chartFiltered = ui.Chart.feature.byProperty(filteredStats)
  .setChartType('ColumnChart')
  .setOptions({
    title: 'Temperature Class Statistics',
    
    legend: {position: 'bottom', maxLines: 4},
    hAxis: {title: 'Classes'},
    vAxis: {title: 'Temp (°C)'},
    series: {
      0: {color: colorWater, labelInLegend: 'Water'},
      1: {color: colorGUI, labelInLegend: 'GUI'},
      2: {color: colorBuiltupAreas, labelInLegend: 'Built-up Areas'},
      3: {color: colorBaregroundShrubs, labelInLegend: 'Bareground/shrubs'},
    },
    titleTextStyle: {
    fontSize: 20, 
    bold: true, 
    textAlign: 'center', // center align the title
    // add the following option to center the chart title vertically
    // (adjust the value as needed)
    top: '50%' 
  },
  subtitleTextStyle: {fontSize: 16, bold: false, textAlign: 'center'},
    tooltip: {'isHtml': true}
  });

// Display the chart.
print(chartFiltered);


//****************** AREA OF CLASSIFIED IMAGE *****************// 

//Select the class from the classified image
var Water = classified.select('classification').eq(0);
var GUI = classified.select('classification').eq(1);
var Builtup_areas = classified.select('classification').eq(2);
var Bareground_shrubs = classified.select('classification').eq(3);

//Calculate the pixel area in square kilometer
var area_WT = Water.multiply(ee.Image.pixelArea()).divide(1000*1000);
var area_GUI = GUI.multiply(ee.Image.pixelArea()).divide(1000*1000);
var area_BA = Builtup_areas.multiply(ee.Image.pixelArea()).divide(1000*1000);
var area_BG = Bareground_shrubs.multiply(ee.Image.pixelArea()).divide(1000*1000);

//Reducing the statistics for study area
var statWT = area_WT.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e9
});


var statFA = area_GUI.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e9
});

var statBA = area_BA.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e9
});

var statBG = area_BG.reduceRegion ({
  reducer: ee.Reducer.sum(),
  geometry: aoi,
  scale: 30,
  maxPixels: 1e9
});

//Get the sq km area for vegetation
print ('Water Areas (in sq.km)', statWT);
print ('GUI (in sq.km)', statFA);
print ('Built-up Area (in sq.km)', statBA);
print ('Bareground/shrubs Area (in sq.km)', statBG);



// Export LST layer with default visualization
Export.image.toDrive({
  image: clip_mean_ST.select('ST_B10'),
  description: 'LST_image_22',
  folder: 'GEE Exports',
  fileNamePrefix: 'LST_22',
  fileFormat: 'GEOTIFF',
  scale: 30,
  region: STUDYBOUNDS
});


// Export the classified image to Google Drive as a GeoTIFF
Export.image.toDrive({
  image: classified,
  description: 'classified_image_22',
  folder: 'GEE Exports',
  scale: 30,
  region: aoi,
  crs: 'EPSG:4326',
  maxPixels: 1e13,
  fileFormat: 'GEOTIFF',
  formatOptions: {
    cloudOptimized: true
  },
  
});


