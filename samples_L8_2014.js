var aoi = ee.FeatureCollection("users/s1090176/aoi"),
    l8raw = ee.ImageCollection("LANDSAT/LC08/C02/T1_RT"),
    Water = 
    /* color: #1c62c2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([37.02848948286589, -1.2412026474200792]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02660120771941, -1.237684412549266]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02505625532683, -1.2351100913932789]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02325381086882, -1.244377635846814]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02600039290007, -1.2415458895961078]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02179468916472, -1.2406877840725086]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([37.020764720903, -1.2394864358719053]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([37.01964892195281, -1.238199276480761]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([37.00608767317351, -1.2415458895961078]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([37.01664484785613, -1.248839775281832]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([36.812721299748524, -1.3486323361338202]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80765728912841, -1.3591865634530902]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79564099274169, -1.3734304067955432]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.871601152043446, -1.381238742777835]),
            {
              "Class": 0,
              "system:index": "13"
            })]),
    GUI = /* color: #47c12c */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([36.74693107006705, -1.3221791896895123]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([36.745815271116854, -1.3177171781994308]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74864768383658, -1.3163442499777471]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([36.75723075268424, -1.317459754215476]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([36.769247049070955, -1.3272418468587517]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([36.786499017454744, -1.3461194598649158]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78203582165396, -1.3426013702785962]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77508353588736, -1.3429445987540167]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77259444592154, -1.3481788270243433]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76735877392447, -1.3459478458564156]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([36.749776168722754, -1.322765416918251]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([36.73664407338584, -1.3160723982609244]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.66875199880088, -1.3176169426255915]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79599599446738, -1.3044024766679714]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79174737538779, -1.3055179862261832]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79140405263389, -1.307791908023134]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79548101033652, -1.3017424134188922]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.790717407126074, -1.3036731047663541]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([36.828015917865244, -1.2452933525221592]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([36.830247515765635, -1.2406595859567027]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83556901845118, -1.246494698080943]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80381166371485, -1.2466663188303237]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([36.780911047198984, -1.3506030315791144]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77953775618336, -1.3452830014862145]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76528986189625, -1.3523191678365747]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([36.766663152911875, -1.3574675693221774]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85331604446738, -1.209019574222739]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([36.852114414828705, -1.208333081493088]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85906670059531, -1.2039566862672613]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85443184341757, -1.2032701922604268]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88799164261191, -1.1969201145198647]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76569811371988, -1.3620056663323188]),
            {
              "Class": 1,
              "system:index": "31"
            })]),
    Builtup_areas = 
    /* color: #ff5144 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([36.894960336073, -1.3358742773571808]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([36.8909262937146, -1.3277225646234216]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([36.883802346571045, -1.3300393699312643]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([36.87942498145874, -1.3178546658910242]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([36.87521927772339, -1.3187127455979466]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92259781776245, -1.3183695137506675]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92165368018921, -1.3156236572699223]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92019455848511, -1.3150230007616883]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([36.892042092664795, -1.3163959297108794]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88766472755249, -1.3166533538047032]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85337356229784, -1.3213657068670288]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86152747770311, -1.3187914696034764]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86667731901171, -1.3147584925392521]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85865214963915, -1.3262996541609053]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85311607023241, -1.3264283656979425]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.866505657634754, -1.334494275303307]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86384490629198, -1.3331642601108997]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88648643733713, -1.283944052785408]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88657226802561, -1.287848365614924]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88953342677805, -1.2842872893174406]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88399734737131, -1.280897826545535]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86863365413401, -1.2892213093652587]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([36.858763124959204, -1.2925678566532632]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([36.753156279177446, -1.2836231324080023]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([36.75264129504659, -1.2867980689682994]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([36.746461485476274, -1.286454832773749]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74483070239522, -1.272124680593626]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([36.75581703052022, -1.2807914289063682]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([36.751439665407915, -1.2675767713051638]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76156768664815, -1.268949725895656]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79100761279561, -1.2776164848961178]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([36.799161528200884, -1.2652599087834044]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80482635364034, -1.2642301914426561]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81890258655049, -1.2668044840280641]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([36.842334364504595, -1.2692929644294406]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([36.84696922168233, -1.305675988198421]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([36.737964247317095, -1.305761796600086]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([36.73805007800557, -1.294006018365537]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([36.743972395510454, -1.2879993952854143]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([36.750667189211626, -1.2896297658098392]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([36.75452957019307, -1.2848244602192909]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([36.71865234240987, -1.2818211396329877]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74723396167256, -1.2786461968974019]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7573619829128, -1.2747847747654955]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80379638537862, -1.2698078221446814]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80594215259053, -1.2694645836792404]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([36.803624724001665, -1.2647450501640973]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80216560229756, -1.2661180062551496]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([36.82019004687764, -1.272124680593626]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([36.818387602419634, -1.281392093547204]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([36.828601454348345, -1.282164376449858]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([36.84448013171651, -1.2834515141031577]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([36.845595930666704, -1.2775306755440394]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83512458667256, -1.2711807755505313]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81306609973409, -1.2727253472594575]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([36.822593306154985, -1.2634579031690505]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([36.835553740114946, -1.2785603875797371]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83924445971944, -1.2771874381070882]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([36.84739837512471, -1.272124680593626]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85040244922139, -1.2749563936500152]),
            {
              "Class": 2,
              "system:index": "59"
            })]),
    Bareground_shrubs = 
    /* color: #e2decd */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([37.05090293750264, -1.245437778571323]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([37.05339202746846, -1.2436357593053287]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([37.06120262011983, -1.2488701928106913]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([37.06815490588643, -1.2397742853088296]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([37.068069075197954, -1.247497227652183]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([37.06068763598897, -1.2610552270725048]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([37.06566581592061, -1.2582234988259136]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([37.06111678943135, -1.252989083979682]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([37.04652557239034, -1.2503289675057123]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([37.04171905383565, -1.2484411412756635]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([37.03622588977315, -1.2316222661752538]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([37.017085646242876, -1.2337675367926808]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.96309814319112, -1.2379722621819471]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.97674522265889, -1.2335959152069034]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([36.967389677614946, -1.240289148834155]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.964900587649126, -1.2387445579578324]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.96833381518819, -1.2314506444512239]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.99159393176534, -1.2373715875340683]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([36.992366407961626, -1.2390019898331122]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([36.98171062159207, -1.2270742373312422]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([36.96669025110867, -1.2345826897463863]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([36.957635113474396, -1.23381039275988]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([36.93757675376208, -1.254137036448249]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([36.95002220359118, -1.2546518971636689]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([36.930967790749385, -1.2496749060096715]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92461631980212, -1.2372323869463926]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([36.89643103478949, -1.3923628791134854]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([36.89540106652777, -1.387471969329447]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([36.91050726769964, -1.3916764362463825]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92939001916449, -1.4125270487394113]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([36.91282469628851, -1.4224803617366188]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([36.92432600854437, -1.4257409204656035]),
            {
              "Class": 3,
              "system:index": "31"
            })]);