(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=306)})({306:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(307);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},307:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.BasqueCountry.1.04-03-2017 11:58:11
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"BasqueCountry",revision:1,standaloneInit:true,baseWidth:600,baseHeight:465,baseScaleFactor:10,entities:{"ES.PA.AL":{outlines:[[M,2828,1729,Q,2760,1729,2731,1796,2727,1817,2744,1847,2794,1926,2773,2019,2769,2040,2739,2044,2668,2053,2592,2044,2563,2040,2533,2032,2382,1990,2235,1956,2210,1952,2184,1943,2092,1922,2003,1872,1932,1834,1890,1767,1844,1687,1835,1586,1827,1498,1835,1409,1856,1207,1701,1165,1713,1195,1684,1233,1671,1250,1650,1254,1625,1262,1600,1275,1528,1304,1499,1405,1495,1426,1490,1439,1482,1485,1419,1464,1301,1414,1188,1464,1196,1485,1175,1523,1171,1544,1163,1561,1154,1586,1141,1599,1095,1653,1095,1758,1095,1788,1108,1813,1125,1847,1120,1905,1108,2011,1129,2048,1141,2069,1146,2086,1154,2112,1167,2133,1226,2212,1301,2288,1331,2259,1343,2204,1390,2023,1507,1964,1516,2090,1621,2120,1642,2128,1659,2128,1713,2141,1734,2170,1806,2271,1684,2280,1537,2284,1448,2347,1507,2389,1596,2402,L,1625,2406,Q,1612,2482,1549,2528,1406,2641,1272,2763,1217,2809,1125,2831,1200,2831,1175,2936,1171,2965,1154,2995,1087,3150,1129,3213,1200,3201,1268,3222,1301,3230,1322,3264,1360,3318,1406,3352,1507,3419,1625,3461,1713,3491,1802,3503,1877,3516,1936,3558,1961,3579,1982,3600,2029,3642,2020,3726,2020,3756,2020,3785,2024,3840,1995,3865,2008,3869,2029,3882,2050,3894,2054,3911,2079,4008,2109,4063,2121,4084,2125,4113,2134,4201,2180,4231,2197,4142,2239,4084,2298,4008,2357,3978,2382,3966,2390,3953,2407,3920,2466,3945,2487,3953,2504,3957,2584,3999,2563,4142,2559,4172,2571,4193,2596,4239,2676,4243,2693,4248,2710,4256,2773,4294,2794,4378,2807,4437,2828,4491,2886,4647,3063,4588,3088,4580,3097,4567,3114,4533,3177,4546,3206,4550,3214,4563,3244,4613,3324,4605,3383,4597,3442,4576,3471,4567,3500,4559,3530,4550,3547,4563,3576,4588,3614,4613,3677,4475,3761,4369,3807,4315,3765,4180,3677,4168,3589,4180,3433,4201,3378,4084,3374,4067,3374,4050,3374,4037,3378,4016,3387,3991,3395,3966,3404,3949,3404,3928,3437,3777,3618,3760,3648,3756,3669,3768,3694,3785,3715,3802,3736,3814,3748,3827,3799,3882,3883,3899,4030,3924,4022,3785,4018,3726,3997,3667,3988,3638,3992,3617,4013,3550,4060,3491,4076,3478,4076,3461,4076,3449,4068,3428,4043,3360,4034,3289,4030,3259,4047,3247,4060,3230,4081,3217,4118,3188,4173,3163,4249,3133,4274,3087,4303,3045,4282,2969,4282,2952,4274,2931,4249,2860,4245,2788,4240,2721,4253,2667,4211,2683,4148,2675,4118,2671,4097,2658,3992,2595,3912,2524,3900,2511,3891,2490,3875,2431,3795,2423,3715,2418,3643,2389,3618,2376,3597,2364,3555,2334,3505,2339,3336,2355,3210,2360,3042,2368,3025,2229,3021,2200,3025,2179,3034,2158,3059,2137,3185,2040,3214,1935,3227,1905,3219,1880,3206,1834,3198,1809,3193,1817,3185,1817,3034,1788,2882,1737,Q,2857,1729,2828,1729,Z],[M,771,2620,Q,713,2759,814,2868,881,2944,1003,2868,1036,2847,1091,2835,1112,2835,1125,2831,1112,2805,1099,2788,1007,2658,885,2595,Q,801,2553,771,2620,Z]],label:"Álava",shortLabel:"AL",labelPosition:[252,300.1],labelAlignment:[CEN,MID]},"ES.PA.BI":{outlines:[[M,3021,383,Q,2857,320,2718,232,2651,190,2592,106,2550,43,2479,47,2357,55,2235,68,2092,85,1978,135,1856,190,1760,316,1718,371,1621,400,1558,421,1507,442,1482,421,1444,430,1411,430,1369,451,1301,484,1238,514,1213,526,1184,518,1154,514,1125,505,1099,501,1074,501,1108,560,1083,652,1074,690,982,699,952,703,940,720,923,737,910,753,801,779,645,758,523,741,431,783,406,795,376,800,284,812,229,863,191,901,158,947,149,964,132,976,73,1022,57,1081,27,1203,48,1338,57,1384,61,1430,69,1506,95,1594,128,1556,200,1527,364,1464,553,1363,574,1355,591,1350,666,1334,671,1279,675,1207,692,1140,729,1161,746,1170,952,1313,1095,1380,1125,1397,1141,1418,1154,1439,1167,1447,1179,1451,1188,1464,1301,1414,1419,1464,1482,1485,1490,1439,1495,1426,1499,1405,1528,1304,1600,1275,1625,1262,1650,1254,1671,1250,1684,1233,1713,1195,1701,1165,1856,1207,1835,1409,1827,1498,1835,1586,1844,1687,1890,1767,1932,1834,2003,1872,2092,1922,2184,1943,2210,1952,2235,1956,2382,1990,2533,2032,2563,2040,2592,2044,2668,2053,2739,2044,2769,2040,2773,2019,2794,1926,2744,1847,2727,1817,2731,1796,2760,1729,2828,1729,2857,1729,2882,1737,3034,1788,3185,1817,3193,1817,3198,1809,L,3202,1805,Q,3206,1796,3210,1788,3210,1746,3210,1699,3210,1670,3223,1657,3332,1561,3328,1439,3328,1409,3315,1388,3286,1346,3294,1292,3315,1203,3357,1144,3475,972,3631,854,3618,779,3593,703,3576,644,3547,589,3534,564,3521,547,3496,518,3463,509,3345,467,3210,467,3181,467,3160,455,Q,3093,409,3021,383,Z]],label:"Biscay",shortLabel:"BI",labelPosition:[247.9,104.7],labelAlignment:[CEN,MID]},"ES.PA.GU":{outlines:[[M,5401,493,Q,5334,568,5178,594,5060,615,4943,636,4884,644,4829,657,4749,669,4703,686,4531,749,4358,737,4236,732,4110,711,3988,690,3862,665,3736,644,3622,581,3605,573,3584,564,3547,556,3521,547,3534,564,3547,589,3576,644,3593,703,3618,779,3631,854,3475,972,3357,1144,3315,1203,3294,1292,3286,1346,3315,1388,3328,1409,3328,1439,3332,1561,3223,1657,3210,1670,3210,1699,3210,1746,3210,1788,3206,1796,3202,1805,L,3198,1809,Q,3206,1834,3219,1880,3227,1905,3214,1935,3185,2040,3059,2137,3034,2158,3025,2179,3021,2200,3025,2229,3042,2368,3210,2360,3336,2355,3505,2339,3555,2334,3597,2364,3618,2376,3643,2389,3715,2418,3795,2423,3875,2431,3891,2490,3900,2511,3912,2524,3992,2595,4097,2658,4118,2671,4148,2675,4211,2683,4253,2667,4295,2641,4308,2587,4312,2570,4316,2549,4320,2536,4329,2528,4350,2482,4371,2444,4383,2423,4413,2414,4476,2406,4531,2435,4631,2486,4737,2490,4804,2494,4850,2431,4913,2347,4972,2259,4989,2229,4989,2200,4989,2170,4968,2141,4922,2074,4913,1994,4905,1876,5001,1863,5018,1863,5035,1855,5157,1813,5224,1746,5237,1729,5241,1699,5245,1603,5224,1548,5279,1468,5308,1401,5245,1287,5329,1216,5472,1102,5653,1073,5750,1056,5851,1069,5868,1073,5880,1056,5889,901,5838,812,5838,737,5884,716,5893,711,5897,711,5918,699,5935,694,5956,690,5956,673,5956,661,5948,640,5939,615,5927,594,5910,573,5889,547,5809,455,5729,354,5666,266,5590,324,Q,5477,409,5401,493,Z]],label:"Guipúzcoa",shortLabel:"GU",labelPosition:[406.9,148.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"basquecountry",type:"maps"}}})});