var aoi = ee.FeatureCollection("users/s1090176/aoi"),
    Water = 
    /* color: #2771d6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([37.019467498851945, -1.2437582445341975]),
            {
              "Class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02062621314638, -1.2441014863781252]),
            {
              "Class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([37.025947715831926, -1.2424281819674026]),
            {
              "Class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([37.025690223766496, -1.241183929282541]),
            {
              "Class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([37.00706496436708, -1.2435008131219427]),
            {
              "Class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([37.00852408607118, -1.2467187039688066]),
            {
              "Class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([37.00891032416933, -1.2408406870595166]),
            {
              "Class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([37.014231826854875, -1.2516098905200062]),
            {
              "Class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([37.0121289749872, -1.2479200488772433]),
            {
              "Class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([37.009511138988664, -1.2486923417429465]),
            {
              "Class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([37.01766505439394, -1.2391244752766304]),
            {
              "Class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02006831367128, -1.2377944103800156]),
            {
              "Class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([37.0236732025873, -1.2375369783874497]),
            {
              "Class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([37.025990631176164, -1.236421439464385]),
            {
              "Class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02508940894716, -1.2352200893306788]),
            {
              "Class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81664588266325, -1.3463931903180228]),
            {
              "Class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81870581918669, -1.3486992521258399]),
            {
              "Class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81337358766508, -1.345921251818568]),
            {
              "Class": 0,
              "system:index": "17"
            })]),
    GUI = 
    /* color: #74b533 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([36.74397934451271, -1.3203297246045753]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76449287905861, -1.3141515481303654]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([36.753077397491225, -1.3084882062685468]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7487858630674, -1.3308411700875007]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76737252999343, -1.3457353342423015]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77471105385818, -1.3459498517697361]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77762929726638, -1.3399433538794387]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([36.698188866377905, -1.3309336847440278]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([36.67080887675388, -1.3222671087529494]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([36.68110855937107, -1.319220928806635]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([36.70183667063816, -1.3271581504208632]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([36.67454251170261, -1.323532773969907]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.693870713707426, -1.3298590546251066]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.69120996236465, -1.3306313226343296]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([36.73006275789186, -1.3467627662819817]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.71628693239137, -1.3367662328255125]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.70122364656373, -1.3397694875109516]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7015240539734, -1.3362084851220786]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([36.694400106829846, -1.3347068560604536]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77974181722962, -1.3552206753453142]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78926902365052, -1.3553064820236402]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([36.773390346282355, -1.351445178491361]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76523643087708, -1.3617419742208252]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([36.720664432361524, -1.3459711970294748]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([36.720364024951856, -1.3468292669429605]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([36.90159311753319, -1.4104629356470102]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([36.88631525498436, -1.403083721249504]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([36.940388588724595, -1.430283732555277]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([36.8495296101887, -1.3537018139463672]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83682666829417, -1.359193438671981]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81519733479808, -1.334995874186318]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83682666829417, -1.336540406740275]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([36.8275569539387, -1.333794570417898]),
            {
              "Class": 1,
              "system:index": "32"
            })]),
    Builtup_areas = 
    /* color: #8b3054 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([36.86061788799708, -1.305039899926265]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([36.851262342953135, -1.3110464824812866]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([36.848515760921885, -1.3099309753801933]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83920313122218, -1.3011785178472617]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83456827404444, -1.302465645864562]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([36.871732962154795, -1.3053831336021975]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86452318432276, -1.3107890578097467]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85315061809962, -1.3117329481426234]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([36.86091829540675, -1.314135576473599]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([36.864995253109385, -1.3210860239735336]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([36.85512472393458, -1.3171817626413456]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83579049520344, -1.2958793038751286]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([36.8368633788094, -1.2945063637226246]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([36.814676145838206, -1.298582277624765]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81330285482258, -1.2978099997052772]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81527696065754, -1.296994817201089]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79806790761799, -1.2944205549384025]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([36.805492262171214, -1.2916317678714901]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83191082908783, -1.3017744761528645]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([36.795617701337804, -1.2801014984117873]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([36.795059801862706, -1.2797153566787014]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79304278068351, -1.2761971737683173]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79604685478019, -1.27701236292031]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([36.82535803489493, -1.2860223310266905]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([36.826302172468175, -1.2835338668147065]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([36.827546717451085, -1.2826328705543768]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([36.83424151115226, -1.2846493855543017]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([36.844755770490636, -1.2780849798316265]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([36.842781664655675, -1.2776559331208386]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7654050815117, -1.2982929508223031]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([36.767572306395735, -1.2979068118478523]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76422490954515, -1.2939167056626415]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76613464236375, -1.2954398114535177]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76770105242845, -1.2956114289500562]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76478280902025, -1.2955256202032372]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76336660266038, -1.2953325505122846]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([36.761800192595686, -1.2945602716014177]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([36.759547137023176, -1.294903506701959]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([36.756328486205305, -1.292436503383995]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7564357745659, -1.2911708224904141]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([36.756843470336165, -1.290076758837299]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74716606021043, -1.290913395790851]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74647941470262, -1.2895404529531318]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7489255893242, -1.2876955598488977]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([36.745835684539045, -1.287352323775145]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([36.744119070769514, -1.28941173952411]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74201621890184, -1.2882533183701617]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74128665804979, -1.2884249363521416]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([36.75326003909227, -1.2839199604982623]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7544187533867, -1.2814314942401128]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([36.752873800994124, -1.2815173034616993]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([36.74823894381639, -1.2825470138964583]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([36.767808340789045, -1.2852929063627245]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7743743884575, -1.2924150511707009]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([36.76810874819871, -1.2904414467739633]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7668642032158, -1.2903556378523922]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78046836733934, -1.288596554322557]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78089752078172, -1.2867087560123334]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([36.783815764189924, -1.284263197033539]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78261413455125, -1.2845635289640909]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([36.7864765155327, -1.2872236102355796]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([36.79222717166063, -1.28756684632666]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([36.78171291232225, -1.2962335422774982]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([36.776777647734846, -1.3007384962901396]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([36.77385940432664, -1.2973061511037556]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([36.8915728734414, -1.2695484047447978]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([36.89268867239159, -1.2685615939348673]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([36.891615788785636, -1.2672315439869104]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([36.89350406393212, -1.266416351745696]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([36.895392339078604, -1.2644427273633452]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([36.89543525442284, -1.2652150153439707]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81792799600339, -1.2650523293779246]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81728426583982, -1.263164513790279]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81912962564206, -1.256299718288767]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([36.82470862039304, -1.259517593431973]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([36.82912890084958, -1.2596034033814485]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([36.815052667939426, -1.256042288105962]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80895868905759, -1.2558277629342551]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80089060434079, -1.2533392696564032]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([36.81492392190671, -1.2607618374226737]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([36.80492464669919, -1.2639797070533165]),
            {
              "Class": 2,
              "system:index": "80"
            })]),
    Bareground_shrubs = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([36.93127374035068, -1.28618039387617]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([36.927368444025, -1.2767842841519539]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([36.93642358165928, -1.277470759087712]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([36.94281796795078, -1.296091321431471]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([36.948781010277415, -1.2526298758634886]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([36.93783759749665, -1.2539599332703042]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([36.866873675833105, -1.3472227362980782]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([36.93313496733701, -1.3283451317773285]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([37.094081664020706, -1.2652157713702916]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([37.07605721944063, -1.2564631608306323]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([37.074168944294144, -1.2624698575075564]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([37.080863737995315, -1.245651072051093]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([37.070134901935745, -1.2774865383407288]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([37.02481629842012, -1.2511429322376735]),
            {
              "Class": 3,
              "system:index": "13"
            })]);