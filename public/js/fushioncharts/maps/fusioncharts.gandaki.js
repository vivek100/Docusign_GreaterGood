(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=520)})({520:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(521);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},521:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Gandaki.1.01-17-2017 02:22:16
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Gandaki",revision:1,standaloneInit:true,baseWidth:600,baseHeight:458,baseScaleFactor:10,entities:{"NP.GA.GO":{outlines:[[M,5516,977,Q,5501,983,5494,986,5483,992,5476,999,5465,1009,5459,1014,5448,1023,5441,1032,5420,1055,5410,1066,5394,1083,5386,1098,5385,1099,5385,1101,5370,1125,5353,1140,5346,1147,5337,1160,5326,1175,5322,1179,5282,1220,5277,1224,5258,1238,5232,1238,5228,1238,5199,1220,5193,1216,5180,1210,5166,1204,5161,1201,5155,1198,5143,1196,5124,1192,5123,1191,5108,1187,5105,1186,5098,1182,5089,1182,L,5071,1182,Q,5066,1183,5062,1187,5057,1192,5053,1193,5032,1198,5013,1213,5005,1218,4996,1227,4989,1234,4979,1241,4967,1249,4962,1253,4955,1260,4950,1269,4946,1276,4935,1278,4922,1279,4916,1279,4903,1280,4894,1285,4888,1289,4879,1301,4873,1308,4843,1337,L,4814,1363,Q,4798,1349,4796,1348,4784,1339,4779,1336,4759,1318,4720,1292,4714,1289,4706,1278,4699,1270,4689,1269,4685,1268,4674,1262,4664,1257,4658,1259,4652,1259,4620,1256,4606,1254,4600,1249,4597,1246,4593,1246,4585,1248,4582,1247,4572,1247,4566,1247,4555,1246,4545,1241,4540,1239,4527,1239,4514,1240,4505,1240,L,4505,1240,Q,4503,1238,4481,1240,4473,1240,4470,1240,4467,1240,4463,1241,4448,1247,4445,1248,4443,1248,4428,1248,4415,1248,4413,1248,4408,1245,4399,1241,4384,1236,4375,1230,4335,1210,4326,1202,4318,1196,4298,1196,4274,1197,4264,1197,4248,1196,4245,1184,4243,1178,4242,1176,4240,1174,4238,1172,4235,1169,4235,1161,4235,1157,4238,1156,4242,1153,4243,1151,4245,1146,4247,1135,4248,1132,4259,1121,L,4271,1108,Q,4278,1100,4294,1079,4298,1075,4297,1066,4297,1056,4296,1052,4292,1030,4290,1021,4289,1018,4285,1009,4280,1e3,4279,997,4259,962,4252,948,L,4221,897,Q,4206,873,4206,853,4208,828,4208,816,4208,799,4205,795,4196,789,4185,779,4174,769,4164,765,4157,763,4150,759,4144,754,4141,752,4140,751,4139,750,L,4139,750,Q,4124,750,4102,743,4062,728,4050,724,4042,722,4009,709,4006,707,3997,706,3987,705,3987,705,3984,704,3982,700,3980,698,3979,698,3977,697,3971,697,3965,697,3964,698,3960,701,3954,705,3937,710,3935,711,3926,718,3921,722,3912,730,3903,730,3899,730,3880,739,3875,741,3870,744,3863,748,3862,748,3843,755,3830,760,3819,765,3813,768,3804,771,3792,770,3780,769,3767,770,3743,771,3733,771,3709,771,3703,771,3694,770,3683,773,3683,773,3677,779,3672,784,3666,783,3659,782,3654,786,3650,789,3649,789,3644,789,3638,785,3633,781,3632,780,3629,778,3626,778,3621,778,3619,778,3617,777,3609,774,3609,791,3609,831,3609,840,3617,854,3622,861,3631,873,3634,878,3639,889,3640,891,3643,900,L,3650,908,Q,3656,920,3672,944,3677,953,3698,977,3701,982,3709,996,3715,1008,3721,1016,3730,1030,3740,1054,3747,1068,3757,1093,3763,1108,3778,1130,3788,1148,3788,1169,3787,1170,3787,1172,3787,1197,3780,1226,3777,1236,3767,1254,3765,1260,3759,1270,3755,1276,3755,1286,3755,1300,3761,1311,3764,1317,3775,1333,3781,1341,3788,1358,3796,1378,3799,1382,3827,1435,3839,1473,3839,1474,3840,1475,3841,1493,3840,1535,3841,1577,3851,1601,3856,1615,3864,1635,3870,1650,3871,1666,3872,1677,3885,1694,3888,1699,3891,1703,3900,1715,3904,1720,3904,1721,3905,1722,3905,1735,3911,1745,3917,1754,3932,1767,3949,1781,3970,1805,3983,1818,3999,1832,4015,1845,4027,1854,4038,1862,4054,1872,4067,1891,4095,1919,4122,1947,4126,1951,4138,1965,4147,1971,4154,1975,4168,1991,4178,2e3,4187,2013,4198,2028,4201,2032,4219,2052,4225,2059,4236,2072,4241,2086,4243,2092,4247,2101,4252,2109,4254,2117,4256,2122,4258,2132,4261,2138,4266,2143,4267,2145,4267,2148,4267,2156,4268,2169,4268,2179,4264,2188,4260,2196,4261,2209,4261,2224,4260,2229,L,4222,2261,Q,4220,2263,4214,2265,4205,2269,4202,2271,4191,2276,4189,2277,4186,2278,4185,2280,4183,2282,4183,2284,4150,2315,4138,2348,4135,2355,4134,2369,4134,2377,4134,2393,4133,2397,4125,2415,4119,2427,4119,2436,4119,2448,4125,2466,4129,2482,4128,2503,4126,2527,4134,2585,4134,2591,4123,2621,4112,2649,4113,2659,4113,2668,4104,2700,4104,2706,4104,2720,4103,2733,4099,2741,4091,2751,4090,2760,4089,2765,4091,2781,4091,2787,4087,2800,4082,2813,4081,2819,4080,2835,4073,2860,4069,2873,4063,2893,4062,2895,4062,2897,4059,2905,4052,2915,4040,2934,4038,2938,L,4021,2960,Q,4020,2965,4020,2972,4019,2977,4011,2984,L,3964,3014,3918,3051,Q,3903,3063,3870,3086,3851,3096,3842,3103,3826,3114,3824,3127,3823,3135,3816,3141,3808,3146,3806,3147,3796,3159,3788,3166,L,3771,3185,Q,3760,3198,3748,3203,3735,3205,3730,3207,3723,3208,3717,3212,3711,3217,3699,3219,3685,3222,3676,3224,3657,3231,3642,3231,3633,3230,3626,3233,3621,3234,3609,3241,L,3579,3246,Q,3572,3245,3550,3250,3521,3251,3516,3252,3516,3252,3515,3253,3511,3256,3511,3273,3511,3283,3515,3290,3519,3298,3519,3311,3519,3322,3515,3332,3510,3345,3509,3353,3508,3358,3509,3364,3509,3376,3509,3377,3509,3384,3501,3399,3493,3417,3494,3450,3494,3467,3495,3498,3495,3500,3495,3502,3495,3521,3495,3523,3494,3530,3488,3542,3483,3550,3471,3580,3465,3593,3444,3621,3436,3633,3436,3652,3436,3666,3437,3670,3438,3680,3443,3688,3444,3690,3444,3708,3445,3727,3446,3730,3447,3735,3455,3742,3460,3747,3475,3761,3479,3761,3490,3772,L,3497,3778,Q,3498,3780,3499,3783,3501,3787,3504,3788,3521,3798,3558,3817,L,3607,3840,Q,3679,3884,3706,3905,3722,3916,3753,3934,3762,3940,3775,3950,L,3801,3963,Q,3806,3966,3810,3974,3813,3979,3817,3986,3818,3988,3832,4011,3848,4049,3856,4060,3858,4059,3859,4058,L,3894,4036,Q,3901,4031,3909,4024,3917,4018,3926,4011,3935,4005,3944,4005,3947,4005,3959,4001,3963,4e3,3969,3997,3974,3996,3977,3996,L,3993,3995,Q,3997,3994,4009,3989,4019,3985,4025,3985,4029,3985,4037,3989,4045,3994,4050,3994,4062,3994,4071,4007,4095,4045,4098,4050,4100,4052,4103,4057,4107,4063,4112,4066,4122,4073,4130,4085,4132,4088,4144,4102,4155,4116,4157,4121,4158,4125,4165,4137,4168,4142,4173,4148,4177,4152,4178,4157,4182,4170,4188,4175,4191,4177,4195,4183,4199,4188,4204,4192,4223,4210,4237,4225,4247,4235,4266,4257,4313,4301,4337,4310,L,4361,4310,Q,4372,4310,4389,4306,4408,4301,4416,4295,4418,4293,4445,4281,4448,4280,4456,4273,4462,4268,4471,4264,4489,4254,4495,4247,4498,4243,4504,4237,4509,4231,4509,4223,4509,4218,4514,4209,4516,4205,4517,4197,4519,4189,4522,4184,4525,4180,4525,4174,4525,4168,4525,4167,4522,4164,4518,4158,4516,4155,4515,4150,4513,4142,4512,4140,4506,4126,4503,4105,4502,4101,4491,4070,4486,4051,4486,4041,4485,4039,4485,4037,4484,4020,4481,4002,4476,3983,4474,3973,4473,3968,4466,3943,4464,3937,4464,3930,4464,3918,4464,3913,4464,3911,4464,3910,4461,3892,4456,3881,4453,3873,4453,3855,4453,3841,4454,3837,4456,3828,4460,3821,4464,3814,4468,3807,4473,3800,4483,3783,4494,3766,4502,3757,4508,3747,4514,3744,4519,3741,4527,3726,4533,3711,4546,3698,4556,3689,4581,3671,4598,3659,4618,3639,4632,3624,4642,3619,4643,3619,4644,3618,L,4659,3605,Q,4660,3604,4676,3592,4683,3587,4685,3575,4686,3565,4689,3557,4691,3552,4696,3544,4699,3539,4698,3532,4697,3521,4697,3520,4697,3516,4699,3511,4708,3494,4705,3467,4703,3448,4729,3430,4760,3410,4763,3396,4764,3390,4764,3386,4764,3380,4768,3377,4772,3373,4775,3371,4776,3368,4777,3361,4777,3352,4784,3340,4790,3329,4790,3321,4787,3314,4793,3301,4800,3287,4799,3280,4798,3277,4804,3266,4810,3255,4810,3252,4814,3239,4813,3229,4812,3220,4823,3210,4829,3204,4844,3193,4851,3186,4873,3181,4878,3178,4885,3173,4890,3170,4894,3170,L,4909,3178,Q,4910,3179,4924,3183,4926,3185,4937,3192,4941,3194,4945,3199,4948,3204,4950,3204,4959,3204,4964,3195,4967,3194,4986,3186,4991,3183,5004,3181,5006,3180,5008,3177,5011,3174,5018,3174,5025,3174,5028,3178,5031,3180,5033,3183,5034,3185,5034,3185,5037,3185,5038,3184,5040,3182,5043,3182,5046,3181,5049,3181,L,5054,3166,Q,5057,3153,5067,3139,5074,3130,5084,3109,5092,3093,5103,3091,5117,3088,5133,3074,5152,3057,5154,3056,5165,3049,5176,3038,5189,3025,5192,3015,5194,2955,5194,2933,5193,2908,5199,2895,5201,2890,5202,2875,5203,2860,5203,2858,5203,2844,5203,2838,5204,2826,5208,2820,5215,2809,5216,2798,5216,2796,5216,2781,5216,2773,5219,2766,5225,2757,5227,2752,5233,2733,5235,2725,5235,2723,5235,2721,5235,2711,5239,2705,5244,2702,5246,2699,5246,2691,5248,2689,5251,2670,5278,2660,5287,2655,5297,2642,5307,2629,5316,2626,5331,2621,5345,2614,5355,2608,5364,2606,5375,2602,5380,2591,5384,2577,5387,2570,5388,2558,5408,2531,5413,2523,5417,2510,5420,2495,5422,2489,5435,2453,5435,2444,5435,2439,5433,2432,5431,2425,5431,2420,5431,2415,5440,2396,5441,2389,5443,2384,5446,2375,5451,2371,5465,2360,5496,2331,5502,2325,5514,2310,5519,2303,5523,2301,5534,2298,5536,2297,5537,2296,5546,2290,5553,2285,5559,2282,5567,2277,5585,2277,L,5602,2274,Q,5614,2267,5616,2267,5625,2266,5643,2266,5648,2265,5653,2262,5660,2258,5664,2257,5669,2254,5670,2253,5672,2251,5671,2248,5671,2245,5671,2240,5672,2233,5672,2231,5672,2227,5677,2218,5681,2209,5681,2202,5680,2195,5681,2186,5682,2175,5682,2171,5682,2154,5686,2144,5692,2136,5692,2132,L,5693,2121,Q,5693,2111,5693,2106,5693,2097,5698,2089,5701,2083,5707,2074,5711,2066,5713,2056,5713,2053,5717,2047,5721,2042,5721,2039,5721,2025,5722,2013,5722,2007,5724,1997,5727,1983,5728,1979,5728,1974,5732,1963,5736,1952,5736,1946,5735,1933,5739,1922,5745,1909,5746,1902,5749,1888,5749,1875,5749,1862,5749,1856,5755,1843,5757,1837,L,5757,1825,Q,5753,1816,5758,1807,5765,1793,5766,1788,5766,1784,5770,1780,5771,1778,5776,1772,5777,1771,5779,1765,5781,1759,5784,1755,5786,1752,5792,1739,5798,1726,5803,1718,5810,1709,5812,1702,5815,1693,5816,1681,5816,1657,5820,1639,5823,1623,5831,1601,5834,1579,5844,1561,5848,1555,5851,1544,5854,1535,5855,1531,5855,1528,5856,1527,L,5856,1527,Q,5856,1515,5863,1501,5872,1483,5874,1477,5879,1457,5893,1420,5895,1414,5916,1403,5924,1397,5924,1382,5924,1369,5925,1352,5926,1330,5926,1322,5926,1314,5924,1308,5919,1300,5915,1290,5912,1285,5912,1273,L,5912,1243,Q,5912,1235,5919,1231,5921,1229,5929,1222,5938,1214,5941,1209,5945,1197,5945,1196,5948,1191,5951,1187,5952,1185,5952,1180,5952,1169,5933,1150,5906,1123,5901,1115,5877,1083,5847,1036,5833,1016,5814,996,5793,975,5777,968,5767,963,5756,954,5744,944,5739,938,5736,932,5727,932,5719,932,5717,932,5705,932,5698,932,5692,931,5688,932,5686,932,5686,932,5651,932,5645,933,5640,934,5603,946,5592,946,5583,948,5580,948,5573,952,5565,956,5564,957,5563,957,5554,956,5550,955,5533,965,Q,5525,972,5516,977,Z]],label:"Gorkha",shortLabel:"GO",labelPosition:[469.4,250.4],labelAlignment:[CEN,MID]},"NP.GA.KS":{outlines:[[M,2417,1567,Q,2391,1550,2384,1548,2381,1547,2359,1547,2354,1549,2353,1548,L,2352,1548,Q,2348,1549,2335,1548,2313,1548,2307,1549,2305,1549,2301,1554,2297,1560,2292,1561,2290,1562,2274,1560,2259,1558,2238,1541,2218,1526,2191,1496,2186,1492,2171,1473,2154,1453,2152,1451,2117,1418,2108,1408,2102,1402,2099,1399,2094,1393,2091,1386,2088,1379,2083,1375,2081,1372,2072,1366,2027,1342,2015,1334,1992,1318,1967,1306,1950,1298,1911,1284,1903,1281,1892,1281,1881,1281,1878,1280,1871,1277,1865,1274,1854,1267,1850,1265,1836,1257,1821,1242,1814,1236,1795,1236,1784,1236,1777,1241,1770,1246,1755,1247,1737,1245,1731,1244,1721,1244,1709,1252,1701,1256,1689,1258,1672,1260,1670,1261,1657,1264,1652,1270,1648,1274,1637,1274,1607,1274,1572,1255,1552,1246,1537,1241,1519,1237,1506,1233,1506,1233,1506,1234,1500,1239,1499,1250,1498,1257,1498,1258,1497,1260,1493,1260,1489,1260,1487,1258,L,1478,1251,Q,1475,1248,1468,1247,1461,1247,1459,1246,1450,1243,1445,1237,1441,1233,1432,1233,1424,1233,1423,1234,1422,1234,1411,1240,1397,1245,1390,1249,1389,1249,1389,1250,1387,1250,1387,1251,1375,1257,1373,1259,L,1357,1269,Q,1353,1270,1325,1286,1314,1290,1308,1292,1300,1295,1301,1303,1302,1308,1296,1317,1290,1326,1290,1335,1290,1337,1299,1359,1307,1369,1311,1384,1315,1393,1326,1409,1335,1424,1334,1434,1334,1443,1343,1458,1352,1473,1353,1484,1353,1502,1357,1511,1361,1520,1361,1530,1361,1533,1361,1544,1361,1553,1356,1557,1352,1560,1343,1563,1335,1566,1332,1568,L,1310,1586,Q,1291,1600,1290,1601,1286,1605,1268,1617,1254,1628,1248,1636,1243,1641,1209,1671,1182,1695,1169,1714,1163,1723,1149,1733,1135,1744,1130,1752,L,1112,1773,Q,1111,1774,1102,1782,1096,1787,1093,1792,1090,1795,1086,1803,1082,1810,1080,1812,1066,1825,1063,1827,1053,1833,1051,1847,1050,1854,1050,1870,1050,1871,1050,1873,1050,1878,1049,1885,1049,1892,1047,1899,1045,1905,1038,1915,1032,1924,1030,1930,1023,1954,1004,1997,1002,1999,990,2002,977,2005,973,2005,967,2004,966,2005,963,2005,961,2008,958,2011,953,2014,949,2016,947,2017,942,2024,929,2048,928,2050,923,2070,917,2083,917,2088,917,2095,919,2096,921,2098,933,2105,L,959,2119,Q,968,2124,983,2134,997,2142,1010,2142,1017,2141,1024,2146,1033,2151,1036,2151,1040,2152,1048,2152,1056,2153,1061,2155,1070,2159,1080,2172,1093,2189,1095,2189,1106,2204,1115,2219,1120,2226,1135,2245,1143,2260,1165,2299,1168,2306,1181,2328,1182,2330,1185,2341,1187,2351,1190,2355,1195,2362,1195,2370,1194,2383,1194,2385,1195,2389,1199,2399,1203,2408,1203,2414,1203,2415,1198,2442,1197,2444,1191,2455,1189,2458,1189,2466,1189,2475,1196,2478,1201,2480,1214,2485,1224,2490,1249,2498,L,1326,2549,Q,1329,2551,1335,2558,1343,2567,1343,2572,1343,2591,1330,2611,1325,2621,1303,2647,1294,2656,1281,2681,1275,2689,1274,2691,1274,2692,1273,2700,1271,2703,1270,2709,1269,2711,1267,2712,1269,2717,1275,2723,1283,2730,1286,2735,1289,2741,1297,2749,1306,2756,1313,2759,1325,2763,1340,2773,1361,2786,1371,2791,L,1390,2800,Q,1394,2801,1407,2803,1429,2815,1443,2813,1449,2812,1461,2817,1475,2823,1485,2824,1495,2824,1525,2835,1533,2837,1560,2849,1570,2852,1579,2853,1584,2853,1595,2854,1608,2856,1628,2863,1651,2873,1669,2878,L,1711,2888,Q,1714,2889,1739,2898,1744,2899,1753,2901,1761,2902,1767,2905,1784,2912,1796,2912,1797,2912,1797,2912,1826,2912,1830,2913,1833,2914,1844,2919,1853,2923,1859,2923,1868,2922,1889,2931,1900,2936,1917,2944,1923,2946,1932,2945,1936,2945,1940,2947,1942,2947,1946,2949,1951,2951,1976,2964,1983,2966,2009,2965,2012,2965,2018,2965,2024,2965,2027,2968,2033,2975,2046,2975,2065,2974,2080,2975,2084,2975,2090,2982,2096,2991,2100,2994,2121,3006,2154,3037,2164,3047,2173,3064,2175,3068,2175,3078,2175,3090,2176,3094,2182,3115,2186,3125,2188,3130,2188,3155,2188,3158,2189,3169,2190,3181,2187,3184,L,2187,3203,Q,2187,3203,2188,3204,2194,3205,2208,3204,2213,3204,2236,3204,2250,3204,2258,3198,2262,3195,2270,3194,2275,3193,2281,3192,2289,3187,2292,3185,2298,3182,2302,3182,2308,3182,2310,3183,2313,3184,2319,3190,2324,3195,2328,3195,2331,3195,2338,3195,2344,3196,2357,3199,2361,3199,2374,3204,2388,3204,2391,3205,2395,3207,2408,3216,2410,3218,2416,3218,2418,3219,2424,3220,2432,3221,2444,3224,2461,3223,2463,3223,2472,3223,2481,3226,2482,3226,2491,3231,2498,3235,2502,3235,L,2525,3235,Q,2533,3235,2544,3239,2556,3244,2561,3245,2600,3246,2614,3246,L,2681,3245,2690,3241,Q,2699,3237,2702,3237,L,2707,3236,Q,2703,3197,2703,3179,2706,3036,2706,2977,2706,2974,2707,2972,2708,2948,2703,2928,2700,2911,2688,2883,L,2667,2837,Q,2660,2823,2650,2815,2644,2810,2644,2800,2644,2797,2650,2772,2655,2745,2659,2737,2663,2724,2665,2704,2666,2685,2667,2675,2668,2674,2669,2673,2681,2656,2682,2628,2682,2588,2686,2577,2688,2568,2688,2551,2686,2532,2686,2522,2686,2518,2689,2510,2693,2500,2693,2499,2695,2492,2695,2477,2695,2468,2691,2461,2687,2452,2685,2438,2683,2430,2683,2416,L,2685,2397,Q,2685,2394,2685,2392,2685,2364,2681,2327,2675,2286,2673,2271,2672,2259,2664,2240,2663,2237,2663,2225,2663,2211,2663,2208,2661,2194,2654,2175,2648,2160,2648,2149,2648,2144,2661,2117,2671,2097,2674,2089,2674,2088,2676,2086,2716,2029,2758,1934,2772,1901,2799,1864,2815,1843,2853,1797,L,2884,1755,Q,2878,1754,2873,1753,2861,1749,2834,1752,2815,1753,2786,1747,L,2747,1739,Q,2716,1739,2699,1731,2689,1727,2681,1724,2669,1719,2663,1718,2655,1718,2642,1713,2632,1708,2627,1709,2623,1709,2611,1703,2599,1696,2596,1696,2569,1692,2534,1668,2521,1658,2498,1635,2475,1611,2466,1603,2456,1596,2449,1590,Q,2443,1585,2417,1567,Z]],label:"Kaski",shortLabel:"KS",labelPosition:[190,223.9],labelAlignment:[CEN,MID]},"NP.GA.LM":{outlines:[[M,3856,1713,Q,3834,1718,3825,1722,3822,1723,3818,1728,3814,1733,3813,1733,3799,1735,3793,1738,3765,1747,3755,1748,3744,1749,3722,1755,3692,1767,3680,1766,3673,1766,3664,1769,3650,1774,3647,1775,3637,1778,3628,1778,3616,1778,3608,1778,3579,1778,3575,1774,3567,1758,3553,1733,3536,1705,3532,1697,3524,1688,3520,1684,3514,1677,3516,1665,L,3490,1665,Q,3482,1670,3478,1673,3470,1677,3462,1677,L,3446,1674,Q,3438,1674,3431,1676,3423,1679,3416,1680,3394,1680,3386,1684,3365,1691,3358,1697,3348,1705,3345,1715,3341,1728,3340,1729,3327,1745,3307,1790,3297,1812,3270,1812,3264,1812,3253,1810,3240,1806,3232,1801,L,3183,1801,Q,3170,1799,3147,1793,3122,1785,3105,1776,3071,1757,3062,1754,3053,1750,3021,1750,3019,1747,2961,1753,2902,1758,2902,1756,2893,1756,2884,1755,L,2853,1797,Q,2815,1843,2799,1864,2772,1901,2758,1934,2716,2029,2676,2086,2674,2088,2674,2089,2671,2097,2661,2117,2648,2144,2648,2149,2648,2160,2654,2175,2661,2194,2663,2208,2663,2211,2663,2225,2663,2237,2664,2240,2672,2259,2673,2271,2675,2286,2681,2327,2685,2364,2685,2392,2685,2394,2685,2397,L,2683,2416,Q,2683,2430,2685,2438,2687,2452,2691,2461,2695,2468,2695,2477,2695,2492,2693,2499,2693,2500,2689,2510,2686,2518,2686,2522,2686,2532,2688,2551,2688,2568,2686,2577,2682,2588,2682,2628,2681,2656,2669,2673,2668,2674,2667,2675,2666,2685,2665,2704,2663,2724,2659,2737,2655,2745,2650,2772,2644,2797,2644,2800,2644,2810,2650,2815,2660,2823,2667,2837,L,2688,2883,Q,2700,2911,2703,2928,2708,2948,2707,2972,2706,2974,2706,2977,2706,3036,2703,3179,2703,3197,2707,3236,L,2723,3233,Q,2735,3230,2767,3229,2787,3228,2801,3220,2802,3219,2804,3217,2810,3217,2821,3216,2836,3216,2850,3208,2863,3199,2864,3198,2866,3197,2876,3196,2880,3195,2890,3191,2900,3187,2905,3187,2908,3187,2917,3185,2925,3183,2930,3183,2936,3183,2954,3174,2964,3169,2981,3165,2999,3162,3007,3158,3018,3156,3028,3149,3031,3146,3037,3145,3040,3145,3049,3143,3056,3141,3068,3136,3087,3127,3089,3127,3101,3121,3109,3115,3119,3108,3131,3108,L,3184,3108,Q,3188,3109,3194,3108,3200,3107,3252,3109,3303,3111,3314,3118,3330,3128,3336,3130,3337,3131,3346,3135,3352,3140,3357,3141,3361,3141,3366,3144,3367,3144,3378,3150,3390,3152,3397,3157,3402,3160,3413,3169,L,3469,3209,Q,3471,3210,3475,3216,3478,3221,3481,3223,3487,3228,3499,3238,3503,3241,3508,3248,3512,3253,3515,3253,3516,3252,3516,3252,3521,3251,3550,3250,3572,3245,3579,3246,L,3609,3241,Q,3621,3234,3626,3233,3633,3230,3642,3231,3657,3231,3676,3224,3685,3222,3699,3219,3711,3217,3717,3212,3723,3208,3730,3207,3735,3205,3748,3203,3760,3198,3771,3185,L,3788,3166,Q,3796,3159,3806,3147,3808,3146,3816,3141,3823,3135,3824,3127,3826,3114,3842,3103,3851,3096,3870,3086,3903,3063,3918,3051,L,3964,3014,4011,2984,Q,4019,2977,4020,2972,4020,2965,4021,2960,L,4038,2938,Q,4040,2934,4052,2915,4059,2905,4062,2897,4062,2895,4063,2893,4069,2873,4073,2860,4080,2835,4081,2819,4082,2813,4087,2800,4091,2787,4091,2781,4089,2765,4090,2760,4091,2751,4099,2741,4103,2733,4104,2720,4104,2706,4104,2700,4113,2668,4113,2659,4112,2649,4123,2621,4134,2591,4134,2585,4126,2527,4128,2503,4129,2482,4125,2466,4119,2448,4119,2436,4119,2427,4125,2415,4133,2397,4134,2393,4134,2377,4134,2369,4135,2355,4138,2348,4150,2315,4183,2284,4183,2282,4185,2280,4186,2278,4189,2277,4191,2276,4202,2271,4205,2269,4214,2265,4220,2263,4222,2261,L,4260,2229,Q,4261,2224,4261,2209,4260,2196,4264,2188,4268,2179,4268,2169,4267,2156,4267,2148,4267,2145,4266,2143,4261,2138,4258,2132,4256,2122,4254,2117,4252,2109,4247,2101,4243,2092,4241,2086,4236,2072,4225,2059,4219,2052,4201,2032,4198,2028,4187,2013,4178,2e3,4168,1991,4154,1975,4147,1971,4138,1965,4126,1951,4122,1947,4095,1919,4067,1891,4054,1872,4038,1862,4027,1854,4015,1845,3999,1832,3983,1818,3970,1805,3949,1781,3932,1767,3917,1754,3911,1745,3905,1735,3905,1722,3904,1721,3904,1720,3900,1715,3891,1703,Q,3877,1709,3856,1713,Z]],label:"Lamjung",shortLabel:"LM",labelPosition:[336.6,245.9],labelAlignment:[CEN,MID]},"NP.GA.MN":{outlines:[[M,3132,249,Q,3117,244,3106,245,3101,246,3084,240,3066,236,3058,232,3036,221,3005,198,2998,191,2994,187,2987,180,2981,179,2976,178,2969,179,2956,179,2955,179,2951,179,2928,169,2905,160,2896,156,2877,146,2872,135,2865,120,2864,109,2862,96,2861,95,2854,85,2854,82,2854,69,2853,65,2850,61,2843,59,L,2822,44,Q,2815,39,2809,39,2806,38,2794,38,2778,38,2777,42,2773,46,2772,47,2769,51,2766,51,2740,51,2738,51,2735,52,2732,58,2728,64,2727,64,L,2709,64,Q,2703,64,2700,72,2697,77,2692,76,2687,75,2683,76,2673,78,2666,78,2665,78,2664,78,2640,79,2630,79,2622,79,2609,84,2596,89,2589,90,2579,90,2567,98,2551,107,2542,110,2524,115,2496,130,2489,134,2485,138,2482,142,2476,143,2470,145,2457,146,2444,146,2434,139,2424,132,2421,132,2418,132,2413,136,2406,141,2404,141,2397,142,2393,142,2384,143,2383,144,2374,151,2357,155,2340,161,2337,162,2332,165,2314,172,2300,177,2291,184,2279,193,2270,205,2260,220,2254,229,2240,247,2240,248,2234,255,2223,264,L,2198,282,Q,2178,295,2176,298,2169,308,2158,322,2147,339,2145,344,2136,361,2121,375,2120,376,2119,378,2109,388,2089,406,2059,431,2053,437,2049,440,2044,448,2039,453,2036,456,2033,458,2027,458,L,2016,458,Q,2002,459,1996,464,1989,469,1978,469,1968,469,1944,449,1908,419,1907,419,1879,399,1870,395,L,1849,384,Q,1838,376,1832,376,1828,376,1827,379,1826,382,1820,383,L,1805,384,Q,1797,384,1794,384,1788,384,1784,387,1778,392,1755,393,1749,393,1747,393,1743,393,1742,395,1742,402,1740,408,1742,419,1736,430,1730,442,1730,451,1730,457,1719,477,1716,489,1715,492,1715,492,1715,502,1715,515,1724,525,1732,534,1732,539,1732,548,1726,553,1715,563,1710,569,1696,588,1688,606,1682,618,1663,632,1634,652,1631,655,1607,670,1553,713,1519,739,1515,743,1511,746,1503,747,1494,749,1493,750,L,1472,758,Q,1411,783,1372,808,1358,815,1353,818,1343,824,1341,834,L,1341,885,Q,1341,886,1341,927,1341,933,1343,942,1346,951,1348,956,1348,957,1349,957,1349,957,1349,958,1352,965,1364,991,1367,999,1375,1010,1378,1017,1390,1022,1393,1024,1398,1029,1403,1033,1408,1036,1423,1043,1426,1045,L,1443,1059,Q,1446,1061,1451,1063,1456,1065,1459,1068,1468,1076,1471,1085,1477,1100,1478,1103,1484,1110,1490,1119,1495,1125,1497,1136,1498,1138,1498,1144,1498,1149,1501,1153,1504,1159,1510,1169,1511,1171,1511,1177,1511,1182,1512,1186,1514,1190,1519,1198,1521,1201,1521,1206,1521,1213,1506,1233,1519,1237,1537,1241,1552,1246,1572,1255,1607,1274,1637,1274,1648,1274,1652,1270,1657,1264,1670,1261,1672,1260,1689,1258,1701,1256,1709,1252,1721,1244,1731,1244,1737,1245,1755,1247,1770,1246,1777,1241,1784,1236,1795,1236,1814,1236,1821,1242,1836,1257,1850,1265,1854,1267,1865,1274,1871,1277,1878,1280,1881,1281,1892,1281,1903,1281,1911,1284,1950,1298,1967,1306,1992,1318,2015,1334,2027,1342,2072,1366,2081,1372,2083,1375,2088,1379,2091,1386,2094,1393,2099,1399,2102,1402,2108,1408,2117,1418,2152,1451,2154,1453,2171,1473,2186,1492,2191,1496,2218,1526,2238,1541,2259,1558,2274,1560,2290,1562,2292,1561,2297,1560,2301,1554,2305,1549,2307,1549,2313,1548,2335,1548,2348,1549,2352,1548,2354,1548,2359,1547,2381,1547,2384,1548,2391,1550,2417,1567,2443,1585,2449,1590,2456,1596,2466,1603,2475,1611,2498,1635,2521,1658,2534,1668,2569,1692,2596,1696,2599,1696,2611,1703,2623,1709,2627,1709,2632,1708,2642,1713,2655,1718,2663,1718,2669,1719,2681,1724,2689,1727,2699,1731,2716,1739,2747,1739,L,2786,1747,Q,2815,1753,2834,1752,2861,1749,2873,1753,2878,1754,2884,1755,2893,1756,2902,1756,2902,1758,2961,1753,3019,1747,3021,1750,3053,1750,3062,1754,3071,1757,3105,1776,3122,1785,3147,1793,3170,1799,3183,1801,L,3232,1801,Q,3240,1806,3253,1810,3264,1812,3270,1812,3297,1812,3307,1790,3327,1745,3340,1729,3341,1728,3345,1715,3348,1705,3358,1697,3365,1691,3386,1684,3394,1680,3416,1680,3423,1679,3431,1676,3438,1674,3446,1674,L,3462,1677,Q,3470,1677,3478,1673,3482,1670,3490,1665,L,3516,1665,Q,3514,1677,3520,1684,3524,1688,3532,1697,3536,1705,3553,1733,3567,1758,3575,1774,3579,1778,3608,1778,3616,1778,3628,1778,3637,1778,3647,1775,3650,1774,3664,1769,3673,1766,3680,1766,3692,1767,3722,1755,3744,1749,3755,1748,3765,1747,3793,1738,3799,1735,3813,1733,3814,1733,3818,1728,3822,1723,3825,1722,3834,1718,3856,1713,3877,1709,3891,1703,3888,1699,3885,1694,3872,1677,3871,1666,3870,1650,3864,1635,3856,1615,3851,1601,3841,1577,3840,1535,3841,1493,3840,1475,3839,1474,3839,1473,3827,1435,3799,1382,3796,1378,3788,1358,3781,1341,3775,1333,3764,1317,3761,1311,3755,1300,3755,1286,3755,1276,3759,1270,3765,1260,3767,1254,3777,1236,3780,1226,3787,1197,3787,1172,3787,1170,3788,1169,3788,1148,3778,1130,3763,1108,3757,1093,3747,1068,3740,1054,3730,1030,3721,1016,3715,1008,3709,996,3701,982,3698,977,3677,953,3672,944,3656,920,3650,908,L,3643,900,Q,3640,891,3639,889,3634,878,3631,873,3622,861,3617,854,3609,840,3609,831,3609,791,3609,774,3607,773,3606,773,3598,770,3593,770,3589,771,3579,766,3569,761,3564,761,3561,760,3550,755,3538,749,3534,745,3518,736,3505,722,3502,719,3496,716,3493,713,3490,709,3482,696,3481,695,3479,693,3468,692,3459,691,3456,687,3455,685,3448,685,3442,685,3441,684,3437,678,3428,678,3421,678,3417,681,3413,684,3405,684,3393,684,3389,684,3383,684,3379,687,3376,690,3375,696,3374,697,3364,705,3359,709,3353,712,3351,713,3348,717,3346,720,3344,720,3338,720,3337,715,3335,709,3330,708,L,3330,679,Q,3336,673,3337,666,3338,661,3338,652,3340,647,3348,637,3350,633,3350,630,3350,629,3350,628,3350,626,3350,623,3350,608,3350,604,3349,599,3349,587,3349,579,3351,577,3355,574,3358,568,3359,566,3369,548,L,3390,508,3391,465,Q,3393,428,3393,416,3393,405,3392,402,3391,398,3380,388,3376,384,3365,365,3362,359,3356,354,3348,347,3348,347,3339,334,3335,328,3333,327,3332,326,3331,325,3329,323,3324,317,3323,316,3311,310,3308,307,3288,289,3275,279,3269,274,3265,274,3259,272,3256,271,3240,261,3238,260,3236,259,3227,259,3219,260,3216,257,3208,252,3204,251,3201,250,3195,250,3186,251,3179,251,3164,252,3162,251,L,3162,251,Q,3140,251,3132,249,Z]],label:"Manang",shortLabel:"MN",labelPosition:[261.6,92.5],labelAlignment:[CEN,MID]},"NP.GA.SY":{outlines:[[M,1767,2905,Q,1761,2902,1753,2901,1744,2899,1739,2898,1714,2889,1711,2888,L,1669,2878,Q,1651,2873,1628,2863,1608,2856,1595,2854,1584,2853,1579,2853,1570,2852,1560,2849,1533,2837,1525,2835,1495,2824,1485,2824,1475,2823,1461,2817,1449,2812,1443,2813,1429,2815,1407,2803,1394,2801,1390,2800,L,1371,2791,Q,1361,2786,1340,2773,1325,2763,1313,2759,1306,2756,1297,2749,1289,2741,1286,2735,1283,2730,1275,2723,1269,2717,1267,2712,1265,2713,1262,2713,1260,2713,1244,2701,1230,2688,1228,2687,1210,2674,1202,2669,1191,2662,1181,2662,1177,2662,1163,2668,1149,2673,1141,2672,1135,2671,1131,2674,1128,2675,1123,2681,1114,2690,1113,2696,1113,2713,1110,2717,1106,2724,1104,2731,1102,2736,1101,2743,1097,2752,1095,2765,1095,2768,1089,2773,1083,2779,1083,2785,1083,2789,1086,2793,1088,2794,1091,2796,1094,2799,1100,2807,1110,2816,1112,2819,1112,2821,1112,2830,1112,2843,1108,2852,1104,2858,1105,2865,L,1105,2928,Q,1105,2932,1102,2939,1099,2948,1098,2952,L,1098,2976,Q,1097,2980,1082,2990,1069,2998,1063,3003,1061,3005,1060,3006,1054,3011,1034,3028,1017,3041,1005,3058,L,992,3071,Q,984,3082,983,3093,984,3108,981,3114,978,3119,978,3129,978,3143,997,3155,1009,3162,1011,3167,1011,3169,1011,3185,1011,3203,1004,3217,1001,3221,1001,3232,1001,3238,1002,3249,1001,3260,1002,3267,1002,3271,996,3281,989,3292,990,3304,990,3307,991,3309,991,3335,990,3343,989,3347,984,3351,981,3353,976,3356,969,3361,958,3371,952,3375,944,3387,941,3393,934,3404,929,3412,920,3421,911,3431,907,3436,899,3445,894,3455,L,881,3480,Q,866,3497,848,3508,815,3525,801,3525,790,3525,781,3531,772,3537,763,3537,760,3537,757,3536,752,3534,746,3532,L,731,3521,Q,696,3506,688,3501,675,3493,645,3494,631,3494,624,3490,616,3485,602,3485,592,3485,589,3493,587,3497,584,3507,575,3522,569,3534,559,3552,555,3562,554,3566,548,3571,544,3577,544,3584,544,3585,544,3587,544,3593,544,3600,543,3608,536,3611,529,3613,523,3620,514,3629,512,3631,502,3637,486,3641,471,3647,454,3651,449,3652,436,3653,428,3653,417,3658,411,3660,397,3660,382,3661,381,3661,376,3661,342,3670,320,3676,305,3674,297,3673,284,3677,271,3681,262,3680,231,3677,219,3684,L,180,3695,143,3712,Q,129,3712,115,3725,96,3743,85,3749,74,3754,60,3769,44,3787,44,3799,44,3809,47,3813,49,3818,59,3825,62,3827,76,3831,86,3833,90,3838,91,3839,91,3839,97,3844,110,3851,111,3852,115,3853,119,3854,121,3856,128,3861,130,3861,136,3861,146,3855,155,3848,162,3848,178,3847,180,3847,184,3847,202,3842,215,3838,255,3837,296,3837,304,3834,322,3829,418,3830,428,3830,440,3827,450,3823,457,3824,466,3824,472,3821,475,3820,480,3820,484,3819,487,3818,503,3817,505,3818,511,3820,518,3824,524,3827,528,3828,531,3828,552,3830,562,3831,570,3839,574,3842,587,3848,601,3854,604,3856,612,3863,636,3874,640,3876,667,3898,679,3906,696,3920,699,3923,713,3929,725,3935,731,3935,740,3934,750,3940,760,3946,768,3946,781,3946,789,3942,794,3937,796,3936,801,3932,805,3933,810,3933,822,3931,827,3930,832,3924,838,3917,840,3916,871,3893,877,3890,880,3889,917,3889,L,947,3889,Q,954,3889,977,3897,992,3900,1003,3902,1006,3902,1018,3901,1027,3901,1030,3902,1062,3910,1085,3919,L,1106,3923,Q,1118,3925,1132,3935,1149,3946,1156,3949,1157,3950,1166,3952,1175,3954,1177,3956,1200,3974,1217,3985,1243,4001,1255,4011,1263,4018,1274,4027,1282,4035,1293,4039,1307,4059,1317,4037,1320,4037,1325,4040,1328,4041,1334,4046,1338,4048,1348,4048,1354,4048,1362,4047,L,1393,4047,Q,1393,4046,1394,4047,L,1395,4047,Q,1402,4046,1436,4045,1480,4045,1502,4046,1507,4046,1521,4040,1535,4035,1543,4036,1557,4038,1598,4037,1599,4037,1603,4037,1609,4037,1623,4037,1648,4037,1668,4036,1672,4036,1679,4040,1687,4045,1691,4045,1694,4046,1704,4046,1710,4046,1714,4047,1717,4049,1724,4053,1731,4057,1736,4057,1739,4057,1742,4058,1750,4050,1749,4038,1748,4032,1752,4028,1758,4020,1759,4019,1779,3988,1788,3973,1794,3962,1814,3963,1818,3963,1822,3960,1825,3957,1826,3957,1830,3956,1839,3956,1845,3956,1852,3950,1859,3945,1863,3945,1873,3945,1874,3942,1875,3941,1875,3930,1875,3918,1867,3907,1859,3897,1862,3879,1863,3859,1861,3852,1856,3841,1856,3835,1856,3827,1856,3821,1856,3813,1857,3809,1857,3807,1858,3802,1857,3794,1860,3787,1862,3782,1871,3771,1880,3761,1884,3757,1889,3750,1887,3735,1886,3727,1886,3712,1886,3696,1888,3693,1894,3684,1895,3677,1893,3671,1893,3669,1894,3665,1896,3664,1896,3663,1897,3663,1909,3653,1926,3644,1930,3641,1936,3640,1942,3639,1945,3637,1949,3633,1965,3628,1976,3624,1979,3617,1981,3614,1980,3608,1979,3601,1982,3597,1984,3593,1987,3589,1990,3585,1992,3583,1993,3580,1998,3575,2e3,3573,2e3,3568,L,2004,3541,Q,2004,3518,2e3,3480,1994,3471,1988,3467,1985,3466,1973,3459,1960,3453,1951,3445,1941,3438,1936,3435,1922,3426,1903,3419,L,1889,3410,Q,1877,3401,1872,3402,1858,3402,1837,3393,1814,3384,1809,3383,1804,3381,1802,3377,1800,3372,1798,3369,1789,3362,1789,3357,1789,3340,1788,3336,1785,3333,1784,3330,1781,3326,1781,3323,1781,3316,1785,3311,1792,3303,1795,3294,1799,3281,1818,3264,1824,3255,1828,3250,1831,3246,1841,3246,1843,3246,1849,3242,1856,3237,1860,3237,1862,3236,1874,3236,1875,3236,1876,3236,1881,3236,1891,3231,1903,3225,1909,3225,1926,3223,1934,3217,1940,3212,1950,3212,L,1972,3213,Q,1986,3213,1992,3211,2004,3206,2015,3204,L,2188,3204,Q,2187,3203,2187,3203,L,2187,3184,Q,2190,3181,2189,3169,2188,3158,2188,3155,2188,3130,2186,3125,2182,3115,2176,3094,2175,3090,2175,3078,2175,3068,2173,3064,2164,3047,2154,3037,2121,3006,2100,2994,2096,2991,2090,2982,2084,2975,2080,2975,2065,2974,2046,2975,2033,2975,2027,2968,2024,2965,2018,2965,2012,2965,2009,2965,1983,2966,1976,2964,1951,2951,1946,2949,1942,2947,1940,2947,1936,2945,1932,2945,1923,2946,1917,2944,1900,2936,1889,2931,1868,2922,1859,2923,1853,2923,1844,2919,1833,2914,1830,2913,1826,2912,1797,2912,1797,2912,1796,2912,Q,1784,2912,1767,2905,Z]],label:"Syangja",shortLabel:"SY",labelPosition:[134.2,347.2],labelAlignment:[CEN,MID]},"NP.GA.TN":{outlines:[[M,3378,3150,Q,3367,3144,3366,3144,3361,3141,3357,3141,3352,3140,3346,3135,3337,3131,3336,3130,3330,3128,3314,3118,3303,3111,3252,3109,3200,3107,3194,3108,3188,3109,3184,3108,L,3131,3108,Q,3119,3108,3109,3115,3101,3121,3089,3127,3087,3127,3068,3136,3056,3141,3049,3143,3040,3145,3037,3145,3031,3146,3028,3149,3018,3156,3007,3158,2999,3162,2981,3165,2964,3169,2954,3174,2936,3183,2930,3183,2925,3183,2917,3185,2908,3187,2905,3187,2900,3187,2890,3191,2880,3195,2876,3196,2866,3197,2864,3198,2863,3199,2850,3208,2836,3216,2821,3216,2810,3217,2804,3217,2802,3219,2801,3220,2787,3228,2767,3229,2735,3230,2723,3233,L,2702,3237,Q,2699,3237,2690,3241,L,2681,3245,2614,3246,Q,2600,3246,2561,3245,2556,3244,2544,3239,2533,3235,2525,3235,L,2502,3235,Q,2498,3235,2491,3231,2482,3226,2481,3226,2472,3223,2463,3223,2461,3223,2444,3224,2432,3221,2424,3220,2418,3219,2416,3218,2410,3218,2408,3216,2395,3207,2391,3205,2388,3204,2374,3204,2361,3199,2357,3199,2344,3196,2338,3195,2331,3195,2328,3195,2324,3195,2319,3190,2313,3184,2310,3183,2308,3182,2302,3182,2298,3182,2292,3185,2289,3187,2281,3192,2275,3193,2270,3194,2262,3195,2258,3198,2250,3204,2236,3204,2213,3204,2208,3204,2194,3205,2188,3204,L,2015,3204,Q,2004,3206,1992,3211,1986,3213,1972,3213,L,1950,3212,Q,1940,3212,1934,3217,1926,3223,1909,3225,1903,3225,1891,3231,1881,3236,1876,3236,1875,3236,1874,3236,1862,3236,1860,3237,1856,3237,1849,3242,1843,3246,1841,3246,1831,3246,1828,3250,1824,3255,1818,3264,1799,3281,1795,3294,1792,3303,1785,3311,1781,3316,1781,3323,1781,3326,1784,3330,1785,3333,1788,3336,1789,3340,1789,3357,1789,3362,1798,3369,1800,3372,1802,3377,1804,3381,1809,3383,1814,3384,1837,3393,1858,3402,1872,3402,1877,3401,1889,3410,L,1903,3419,Q,1922,3426,1936,3435,1941,3438,1951,3445,1960,3453,1973,3459,1985,3466,1988,3467,1994,3471,2e3,3480,2004,3518,2004,3541,L,2e3,3568,Q,2e3,3573,1998,3575,1993,3580,1992,3583,1990,3585,1987,3589,1984,3593,1982,3597,1979,3601,1980,3608,1981,3614,1979,3617,1976,3624,1965,3628,1949,3633,1945,3637,1942,3639,1936,3640,1930,3641,1926,3644,1909,3653,1897,3663,1896,3663,1896,3664,1894,3665,1893,3669,1893,3671,1895,3677,1894,3684,1888,3693,1886,3696,1886,3712,1886,3727,1887,3735,1889,3750,1884,3757,1880,3761,1871,3771,1862,3782,1860,3787,1857,3794,1858,3802,1857,3807,1857,3809,1856,3813,1856,3821,1856,3827,1856,3835,1856,3841,1861,3852,1863,3859,1862,3879,1859,3897,1867,3907,1875,3918,1875,3930,1875,3941,1874,3942,1873,3945,1863,3945,1859,3945,1852,3950,1845,3956,1839,3956,1830,3956,1826,3957,1825,3957,1822,3960,1818,3963,1814,3963,1794,3962,1788,3973,1779,3988,1759,4019,1758,4020,1752,4028,1748,4032,1749,4038,1750,4050,1742,4058,1745,4058,1748,4059,1752,4060,1759,4063,1767,4066,1786,4066,1807,4066,1812,4067,1821,4068,1837,4075,1854,4078,1872,4085,1879,4088,1901,4089,1922,4090,1932,4094,1945,4099,1985,4099,1999,4098,2011,4104,2021,4110,2032,4110,2037,4111,2039,4111,2042,4110,2042,4109,2079,4109,2095,4104,2112,4099,2150,4099,L,2191,4099,Q,2195,4099,2206,4099,2216,4099,2227,4097,2229,4096,2239,4092,2248,4089,2250,4089,L,2275,4089,Q,2276,4089,2302,4089,2306,4089,2314,4092,2324,4095,2329,4096,2344,4097,2384,4098,2400,4098,2422,4097,2439,4097,2448,4101,2449,4102,2460,4103,L,2471,4110,Q,2478,4115,2487,4115,2498,4116,2501,4117,2519,4124,2543,4126,2577,4129,2588,4131,2592,4132,2602,4136,2609,4140,2616,4139,L,2647,4139,Q,2661,4139,2674,4143,2688,4149,2701,4149,L,2829,4149,Q,2837,4150,2854,4150,2870,4150,2874,4150,2879,4151,2886,4157,2890,4160,2896,4166,2903,4172,2922,4188,2938,4203,2944,4214,2952,4232,2959,4242,2969,4256,2975,4269,L,2996,4327,Q,2996,4332,2996,4342,2996,4351,2997,4357,2998,4362,3001,4370,3005,4377,3005,4382,3007,4403,3031,4446,3033,4451,3041,4460,3045,4465,3052,4473,L,3061,4485,Q,3063,4487,3072,4496,3076,4502,3088,4523,3101,4542,3112,4543,3118,4536,3121,4532,3126,4527,3132,4524,L,3160,4504,Q,3172,4495,3185,4476,3192,4468,3207,4468,3215,4468,3229,4469,3243,4471,3244,4472,3246,4473,3250,4477,3254,4480,3257,4481,L,3274,4481,Q,3281,4481,3304,4483,3310,4482,3317,4485,3327,4488,3336,4489,3350,4491,3368,4502,3371,4503,3403,4508,3408,4510,3417,4514,3426,4516,3434,4516,3444,4514,3449,4519,3452,4521,3454,4525,3455,4527,3458,4527,3464,4527,3465,4524,3466,4520,3467,4515,3467,4514,3475,4509,3478,4505,3478,4502,3478,4496,3475,4492,3468,4485,3465,4479,3464,4477,3460,4466,3457,4456,3454,4452,3448,4443,3443,4428,3432,4396,3432,4396,3424,4374,3415,4346,3402,4308,3402,4294,3402,4286,3408,4283,3419,4279,3429,4273,3440,4268,3446,4267,3454,4266,3464,4260,3470,4256,3481,4254,3487,4254,3498,4253,3503,4252,3514,4248,3520,4246,3525,4246,L,3541,4246,Q,3551,4246,3558,4243,3562,4240,3573,4233,3575,4233,3579,4231,3584,4230,3587,4227,3605,4216,3616,4208,3622,4204,3632,4198,3644,4193,3648,4192,3652,4192,3665,4191,3677,4191,3681,4190,3689,4188,3691,4179,3696,4162,3696,4162,3702,4148,3722,4138,3733,4132,3755,4126,3776,4118,3798,4106,3800,4105,3831,4086,3835,4083,3845,4072,3852,4064,3856,4060,3848,4049,3832,4011,3818,3988,3817,3986,3813,3979,3810,3974,3806,3966,3801,3963,L,3775,3950,Q,3762,3940,3753,3934,3722,3916,3706,3905,3679,3884,3607,3840,L,3558,3817,Q,3521,3798,3504,3788,3501,3787,3499,3783,3498,3780,3497,3778,L,3490,3772,Q,3479,3761,3475,3761,3460,3747,3455,3742,3447,3735,3446,3730,3445,3727,3444,3708,3444,3690,3443,3688,3438,3680,3437,3670,3436,3666,3436,3652,3436,3633,3444,3621,3465,3593,3471,3580,3483,3550,3488,3542,3494,3530,3495,3523,3495,3521,3495,3502,3495,3500,3495,3498,3494,3467,3494,3450,3493,3417,3501,3399,3509,3384,3509,3377,3509,3376,3509,3364,3508,3358,3509,3353,3510,3345,3515,3332,3519,3322,3519,3311,3519,3298,3515,3290,3511,3283,3511,3273,3511,3256,3515,3253,3512,3253,3508,3248,3503,3241,3499,3238,3487,3228,3481,3223,3478,3221,3475,3216,3471,3210,3469,3209,L,3413,3169,Q,3402,3160,3397,3157,Q,3390,3152,3378,3150,Z]],label:"Tanahu",shortLabel:"TN",labelPosition:[279.9,371.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"gandaki",type:"maps"}}})});