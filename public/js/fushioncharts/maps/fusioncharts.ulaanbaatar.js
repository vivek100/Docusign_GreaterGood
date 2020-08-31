(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=480)})({480:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(481);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},481:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts, Inc.
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts, Inc.
 * @meta package_map_pack
 * @id fusionmaps.Ulaanbaatar.1.04-06-2017 03:52:53
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Ulaanbaatar",revision:1,standaloneInit:true,baseWidth:700,baseHeight:477,baseScaleFactor:10,entities:{"MN.UB.BN":{outlines:[[M,6813,1771,Q,6794,1767,6783,1768,6772,1769,6750,1762,6727,1755,6722,1755,6696,1755,6679,1747,6659,1747,6648,1746,6627,1745,6619,1742,6616,1741,6607,1740,6596,1738,6589,1739,6587,1739,6573,1734,6571,1733,6568,1734,6559,1729,6555,1728,6548,1727,6538,1728,6527,1728,6524,1728,6521,1728,6506,1723,6493,1720,6490,1720,6472,1721,6464,1720,6458,1720,6450,1716,6439,1711,6434,1710,L,6427,1710,Q,6427,1713,6421,1728,6416,1743,6413,1754,6401,1782,6391,1815,6385,1833,6369,1872,6363,1893,6345,1935,L,6329,1991,Q,6322,2008,6309,2044,6298,2072,6291,2099,6288,2110,6284,2128,6280,2145,6274,2158,6267,2178,6260,2190,6259,2192,6256,2202,6253,2211,6251,2215,6250,2221,6243,2241,6239,2253,6232,2271,6228,2285,6221,2305,6215,2321,6209,2333,6205,2341,6202,2362,6198,2384,6196,2388,L,6167,2452,Q,6143,2488,6119,2529,6100,2565,6091,2578,6076,2598,6076,2598,6073,2603,6073,2616,6073,2627,6076,2637,6078,2648,6083,2670,6082,2680,6086,2696,6089,2706,6094,2729,6096,2737,6102,2758,6108,2774,6109,2790,L,6116,2817,Q,6118,2823,6119,2835,6121,2846,6125,2852,6125,2857,6129,2884,6129,2884,6134,2899,6138,2914,6138,2919,6139,2926,6139,2944,6139,2961,6144,2976,6148,2986,6155,3028,6158,3041,6158,3057,6158,3062,6160,3071,6161,3076,6162,3085,6165,3108,6168,3115,6171,3123,6173,3131,6173,3136,6174,3144,L,6174,3154,Q,6174,3172,6178,3185,6179,3188,6183,3215,6184,3228,6188,3247,6189,3251,6190,3263,6191,3272,6192,3276,6196,3287,6202,3308,6207,3331,6209,3339,6213,3349,6218,3370,6223,3389,6231,3401,6239,3417,6249,3449,6254,3467,6265,3495,6274,3520,6286,3536,6291,3542,6306,3544,6323,3546,6329,3550,6333,3553,6355,3556,6357,3556,6370,3562,6375,3564,6386,3565,6393,3567,6412,3570,6431,3573,6442,3580,6452,3585,6491,3592,6510,3596,6513,3599,6519,3604,6536,3604,6542,3601,6546,3595,6548,3592,6558,3586,6567,3579,6582,3569,6604,3556,6608,3554,6612,3552,6619,3546,6626,3540,6629,3538,6640,3527,6675,3511,6683,3505,6685,3492,6685,3471,6685,3470,6685,3447,6681,3437,6676,3424,6674,3392,6674,3385,6670,3372,6667,3360,6667,3354,6668,3347,6667,3336,6667,3328,6667,3324,6666,3322,6666,3321,L,6658,3273,Q,6658,3259,6656,3244,6655,3237,6653,3230,6650,3224,6650,3221,6650,3214,6660,3206,6669,3199,6688,3187,L,6700,3185,Q,6706,3179,6708,3178,6714,3175,6717,3172,6720,3169,6727,3159,6733,3150,6748,3120,6763,3091,6767,3082,6768,3081,6768,3080,L,6768,3080,Q,6781,3044,6791,3023,6810,2987,6817,2967,6822,2953,6829,2939,6833,2931,6842,2914,6848,2902,6859,2874,6860,2873,6861,2872,L,6873,2844,6881,2813,Q,6886,2795,6901,2755,6905,2736,6907,2729,6909,2722,6913,2712,6919,2699,6919,2698,6925,2681,6927,2674,6931,2661,6932,2650,L,6933,2650,Q,6932,2640,6941,2627,6951,2613,6951,2606,6951,2599,6937,2558,6922,2509,6920,2502,6907,2463,6904,2449,6901,2440,6899,2424,6898,2411,6896,2404,6896,2402,6895,2401,6891,2384,6889,2374,6885,2343,6884,2337,6885,2312,6882,2307,6876,2297,6873,2281,6869,2263,6863,2220,6857,2187,6853,2169,6853,2169,6853,2168,6851,2157,6846,2126,6841,2088,6839,2074,6835,2048,6828,2025,6826,2015,6826,1990,6826,1966,6827,1962,6832,1952,6838,1931,6838,1930,6838,1929,6883,1806,6883,1783,6883,1777,6864,1775,6850,1774,6839,1776,Q,6833,1776,6813,1771,Z]],label:"Baganuur",shortLabel:"BN",labelPosition:[651.2,265.7],labelAlignment:[CEN,MID]},"MN.UB.BK":{outlines:[[M,3645,4128,Q,3637,4128,3622,4131,3603,4135,3593,4136,3555,4138,3540,4136,3526,4134,3515,4139,3503,4145,3498,4145,3491,4145,3482,4140,3468,4133,3454,4126,3441,4120,3424,4109,3410,4099,3410,4099,3409,4099,3308,4154,3303,4156,3282,4165,3263,4173,3262,4175,3253,4181,3251,4193,3248,4212,3245,4218,3241,4235,3232,4261,3224,4281,3224,4295,3224,4316,3271,4401,3294,4443,3323,4491,3324,4492,3325,4494,3335,4514,3356,4552,3375,4591,3387,4619,3393,4634,3404,4653,3418,4676,3421,4681,3429,4700,3435,4711,3448,4735,3452,4735,L,3470,4735,Q,3501,4725,3557,4705,3607,4689,3652,4676,3751,4648,3828,4629,3830,4628,3832,4628,L,3860,4621,Q,3892,4612,3892,4603,3856,4515,3846,4496,3824,4455,3807,4388,3806,4377,3799,4363,3789,4347,3785,4338,3772,4313,3761,4282,3730,4198,3725,4178,3718,4156,3713,4143,3703,4121,3695,4121,3693,4121,3684,4125,3675,4129,3670,4128,Q,3652,4129,3645,4128,Z]],label:"Bagakhangai",shortLabel:"BK",labelPosition:[355.8,441.7],labelAlignment:[CEN,MID]},"MN.UB.BG":{outlines:[[M,1696,1685,Q,1692,1678,1682,1673,1673,1668,1672,1663,1661,1663,1659,1665,1650,1672,1645,1674,L,1625,1701,Q,1619,1710,1615,1717,1608,1728,1609,1732,1609,1740,1604,1748,1601,1752,1601,1764,1601,1777,1605,1787,1609,1796,1609,1806,1609,1819,1606,1820,1595,1821,1579,1822,1544,1828,1531,1829,L,1531,1829,Q,1518,1828,1511,1828,1499,1828,1492,1829,1488,1830,1472,1835,1461,1838,1452,1838,1420,1839,1407,1838,1396,1836,1389,1840,1381,1843,1381,1852,L,1381,1968,Q,1378,1975,1378,1982,1378,1986,1378,1997,1381,1997,1386,1996,L,1415,1977,Q,1418,1976,1432,1967,1444,1960,1450,1960,1472,1962,1482,1953,1492,1937,1502,1925,1522,1898,1527,1893,1529,1889,1531,1887,1534,1883,1538,1883,1541,1883,1548,1884,1554,1884,1560,1882,1569,1878,1580,1877,1587,1877,1596,1877,1603,1876,1610,1868,1619,1859,1621,1857,1625,1857,1632,1853,1641,1848,1643,1848,1648,1847,1665,1847,1691,1847,1702,1854,1713,1860,1747,1860,1755,1860,1759,1859,1763,1857,1774,1852,1777,1849,1786,1849,1785,1848,1780,1843,1777,1839,1765,1841,L,1741,1841,1741,1815,Q,1742,1815,1749,1812,L,1750,1793,Q,1752,1788,1756,1783,1758,1781,1758,1777,1758,1769,1750,1762,1739,1753,1737,1750,1735,1747,1729,1743,1723,1740,1723,1738,1719,1726,1717,1720,Z]],label:"Bayangol",shortLabel:"BG",labelPosition:[166.3,177.6],labelAlignment:[CEN,MID]},"MN.UB.BZ":{outlines:[[M,2722,700,Q,2713,694,2701,678,2686,660,2679,651,2654,622,2642,612,2638,612,2624,613,2612,613,2605,609,2594,603,2579,598,2568,594,2556,586,2547,581,2508,563,2482,551,2471,538,2428,474,2415,455,2406,443,2392,415,2382,394,2369,381,2327,435,2308,459,2274,501,2232,501,2208,501,2154,438,2100,374,2089,374,2077,383,2062,391,2032,408,2013,409,2001,408,1999,408,1988,408,1979,435,1976,445,1973,465,1972,465,1971,465,1972,484,1976,494,1980,503,1980,519,L,1980,554,Q,1987,571,2018,613,2059,677,2059,679,2073,699,2100,750,L,2117,780,Q,2119,785,2128,797,2136,807,2139,814,2154,835,2159,843,L,2176,875,Q,2176,876,2185,887,2190,895,2191,902,2192,910,2192,951,L,2191,1023,Q,2191,1039,2194,1052,2197,1069,2200,1085,2200,1087,2200,1088,2199,1102,2201,1117,2203,1136,2208,1147,2210,1151,2209,1163,2209,1175,2210,1179,2212,1191,2216,1203,2220,1212,2220,1218,2220,1236,2211,1247,2196,1261,2186,1275,L,2165,1303,Q,2163,1305,2152,1320,L,2139,1332,Q,2135,1340,2123,1355,2111,1371,2103,1377,2095,1383,2082,1400,2065,1420,2065,1425,2065,1431,2074,1442,2079,1448,2087,1455,2091,1459,2097,1472,L,2104,1478,Q,2108,1482,2108,1485,2108,1488,2104,1490,2098,1492,2096,1493,2082,1496,2078,1497,2069,1500,2057,1504,2047,1508,2036,1510,2017,1513,2014,1514,2e3,1517,1994,1522,L,1974,1526,Q,1968,1525,1963,1529,1959,1533,1956,1533,L,1919,1556,Q,1902,1561,1901,1562,1898,1564,1882,1572,1873,1576,1866,1586,1859,1597,1860,1608,1862,1617,1856,1628,1853,1632,1853,1642,1853,1646,1853,1651,1853,1670,1857,1680,1859,1687,1859,1696,1859,1705,1859,1707,1860,1708,1864,1719,1867,1728,1867,1731,1866,1740,1869,1746,1871,1752,1871,1758,1871,1761,1869,1768,1869,1773,1869,1785,1868,1797,1869,1806,1869,1814,1865,1819,1863,1821,1863,1832,1863,1843,1868,1849,1876,1860,1881,1874,L,1906,1934,Q,1922,1985,1941,2032,1940,2037,1946,2050,1952,2064,1952,2070,1952,2079,1934,2112,1922,2133,1916,2160,1914,2172,1897,2213,1881,2250,1881,2260,1881,2274,1891,2283,1892,2285,1897,2295,1901,2304,1904,2308,1906,2313,1916,2331,1924,2347,1924,2349,1924,2351,1918,2368,1916,2370,1912,2382,1912,2388,1911,2395,1906,2413,1903,2422,1902,2425,1902,2443,1902,2444,1902,2459,1902,2463,1904,2468,1905,2474,1905,2476,L,1909,2476,Q,1910,2484,1913,2495,L,1920,2515,Q,1921,2520,1926,2532,1931,2543,1933,2549,L,1933,2549,Q,1937,2568,1969,2619,1972,2624,1984,2627,2006,2631,2006,2631,2017,2634,2045,2639,2064,2644,2089,2648,2103,2651,2129,2656,2136,2657,2150,2664,2163,2670,2168,2670,2184,2670,2197,2684,2205,2693,2208,2703,2213,2719,2214,2723,2229,2754,2239,2755,2256,2756,2324,2755,2351,2754,2366,2754,2379,2754,2382,2755,2383,2755,2383,2755,L,2473,2755,Q,2496,2750,2507,2739,2518,2728,2541,2715,2564,2701,2590,2684,2617,2667,2648,2645,2679,2624,2684,2624,2698,2624,2711,2638,2718,2645,2734,2664,2750,2681,2785,2721,2786,2721,2787,2723,2794,2731,2805,2744,2804,2736,2806,2726,2809,2715,2809,2708,2809,2698,2813,2685,2818,2667,2818,2664,2818,2657,2822,2642,2827,2627,2828,2621,2829,2616,2831,2601,2832,2588,2833,2584,2835,2569,2835,2567,2836,2566,2836,2557,2836,2546,2833,2541,2828,2533,2826,2521,2823,2504,2820,2497,2819,2495,2819,2484,2819,2470,2821,2463,2827,2452,2829,2438,2830,2434,2835,2417,2835,2415,2836,2404,2836,2396,2838,2393,2839,2388,2842,2382,2845,2373,2846,2370,2847,2366,2848,2356,2849,2348,2851,2344,2855,2333,2860,2316,2864,2298,2867,2291,2868,2271,2876,2245,2885,2216,2887,2206,2887,2205,2887,2204,2888,2193,2892,2183,2893,2176,2893,2164,2893,2160,2898,2144,2902,2127,2903,2125,2909,2110,2916,2085,L,2922,2068,Q,2924,2056,2924,2051,L,2924,2049,Q,2926,2039,2929,2031,2930,2023,2933,2011,2934,2e3,2937,1989,2940,1978,2942,1972,2946,1960,2948,1953,2948,1938,2949,1935,2954,1920,2956,1916,2958,1908,2967,1908,2976,1908,2988,1918,2988,1918,2998,1923,3006,1926,3013,1933,3021,1940,3033,1956,3046,1972,3049,1976,3053,1980,3070,1996,3084,2008,3096,2024,3100,2029,3109,2041,3118,2053,3121,2056,3125,2058,3137,2072,3149,2086,3150,2086,3150,2086,3178,2064,3186,2060,3191,2054,3196,2048,3201,2046,3221,2034,3228,2028,3234,2023,3250,2010,3266,1998,3271,1994,3272,1992,3281,1985,3282,1984,3284,1978,3285,1973,3287,1971,3291,1955,3291,1947,3291,1944,3294,1935,3299,1925,3299,1920,L,3301,1896,Q,3303,1894,3307,1884,3307,1883,3310,1877,3313,1871,3315,1870,3316,1868,3322,1857,3327,1849,3332,1847,3342,1840,3353,1822,3367,1798,3373,1791,3384,1776,3411,1736,3413,1733,3417,1724,3422,1717,3427,1714,3438,1697,3438,1694,3438,1690,3430,1686,3426,1683,3422,1682,3393,1666,3342,1631,3319,1617,3307,1607,3297,1601,3291,1597,3281,1591,3281,1583,3281,1575,3290,1560,3298,1544,3300,1540,3312,1509,3320,1489,3321,1479,3327,1461,L,3326,1461,Q,3302,1410,3279,1353,3244,1267,3236,1250,3218,1225,3205,1209,3181,1177,3173,1157,3168,1142,3165,1134,3160,1120,3150,1111,3141,1104,3132,1093,3123,1080,3118,1075,3106,1061,3082,1040,3055,1018,3047,1010,3e3,962,2986,942,2982,940,2977,934,2970,925,2968,924,2951,907,2948,902,2935,889,2928,881,2916,867,2910,853,2897,824,2873,800,2845,776,2832,764,2817,750,2780,731,Q,2732,707,2722,700,Z]],label:"Bayanzürkh",shortLabel:"BZ",labelPosition:[264.5,156.5],labelAlignment:[CEN,MID]},"MN.UB.CH":{outlines:[[M,1750,1001,Q,1745,979,1745,978,1740,967,1738,950,1738,949,1737,948,1731,932,1730,905,1726,873,1726,856,1726,840,1727,836,1731,818,1731,812,1725,788,1725,783,1714,766,1709,758,1702,746,1690,731,1681,720,1676,710,1675,716,1673,720,1672,722,1661,733,1651,744,1647,751,1642,759,1625,789,1624,792,1619,797,1613,806,1610,810,1606,816,1599,824,1592,831,1589,835,1577,857,1574,862,1566,871,1565,873,1564,876,1564,885,1564,892,1566,898,1570,906,1571,913,1573,929,1577,941,1577,943,1579,954,1580,963,1582,966,1583,970,1589,977,1593,985,1593,1002,1593,1006,1594,1008,1593,1020,1598,1032,1601,1041,1603,1064,1605,1079,1610,1096,1613,1106,1619,1125,1623,1137,1630,1156,1636,1182,1638,1186,1641,1193,1648,1214,1650,1220,1659,1239,1659,1240,1660,1240,1663,1253,1666,1261,1668,1264,1668,1277,1668,1290,1666,1298,1664,1301,1659,1315,1657,1323,1657,1360,1657,1361,1653,1371,1649,1380,1649,1383,1649,1392,1646,1409,1645,1412,1645,1420,1645,1430,1644,1433,1645,1436,1642,1441,1639,1448,1639,1455,L,1640,1464,Q,1639,1480,1639,1545,1639,1546,1639,1614,1639,1622,1644,1628,1648,1633,1657,1640,1662,1644,1669,1647,1674,1651,1674,1657,1674,1660,1672,1663,1673,1668,1682,1673,1692,1678,1696,1685,L,1717,1720,Q,1719,1726,1723,1738,1723,1740,1729,1743,1735,1747,1737,1750,1739,1753,1750,1762,1758,1769,1758,1777,1758,1781,1756,1783,1752,1788,1750,1793,L,1750,1800,1761,1800,Q,1775,1804,1799,1804,L,1815,1804,1815,1801,Q,1812,1792,1812,1785,1813,1777,1812,1773,1808,1765,1807,1763,1805,1758,1806,1750,1782,1746,1775,1746,L,1774,1740,Q,1774,1733,1776,1730,1778,1728,1785,1718,1785,1717,1788,1707,1790,1698,1792,1695,1794,1692,1801,1687,1805,1683,1804,1679,L,1804,1650,Q,1804,1649,1804,1647,1804,1639,1810,1627,1817,1614,1815,1603,1815,1598,1815,1594,1816,1586,1820,1581,1823,1576,1823,1570,1823,1559,1824,1556,1824,1554,1823,1529,1823,1515,1830,1510,1832,1509,1849,1504,1861,1501,1861,1493,1861,1484,1857,1481,1852,1478,1852,1475,L,1867,1443,Q,1869,1420,1869,1408,1874,1401,1874,1393,1874,1389,1870,1382,1867,1374,1867,1370,L,1869,1357,Q,1869,1349,1861,1336,1850,1315,1849,1312,1840,1294,1839,1289,1834,1277,1833,1264,1833,1246,1833,1237,1832,1234,1830,1229,1827,1224,1825,1217,1823,1206,1816,1195,1808,1181,1807,1179,1803,1175,1800,1172,1797,1169,1795,1166,1792,1162,1791,1161,1789,1158,1787,1153,1780,1145,1779,1140,L,1773,1123,Q,1756,1084,1758,1066,1760,1043,1756,1026,Q,1751,1010,1750,1001,Z]],label:"Chingeltei",shortLabel:"CH",labelPosition:[173.3,142.5],labelAlignment:[CEN,MID]},"MN.UB.KH":{outlines:[[M,1596,1877,Q,1587,1877,1580,1877,1569,1878,1560,1882,1554,1884,1548,1884,1541,1883,1538,1883,1534,1883,1531,1887,1529,1889,1527,1893,1522,1898,1502,1925,1492,1937,1482,1953,1472,1962,1450,1960,1444,1960,1432,1967,1418,1976,1415,1977,L,1386,1996,Q,1381,1997,1378,1997,1377,1997,1376,1997,1367,1997,1366,1995,1365,1993,1364,1991,1363,1990,1360,1990,L,1349,1990,1339,1988,Q,1334,1978,1331,1976,1322,1974,1322,1973,1319,1967,1318,1967,L,1314,1967,Q,1310,1967,1309,1967,1308,1968,1307,1975,1300,1974,1298,1975,1296,1976,1290,1981,1285,1985,1278,1985,1270,1984,1266,1985,1258,1985,1255,1986,1244,1993,1243,1994,1224,1993,1218,1995,1214,1995,1210,1999,1204,2003,1201,2004,1198,2005,1190,2006,1184,2007,1180,2008,1177,2010,1171,2011,1165,2011,1161,2013,1155,2015,1150,2020,1147,2023,1142,2023,1138,2023,1132,2018,1125,2014,1123,2014,1113,2014,1111,2028,1109,2042,1107,2042,1106,2042,1097,2036,1088,2030,1086,2028,L,1051,2013,Q,1034,2004,1021,1999,1011,1994,1009,1991,1004,1985,999,1985,995,1984,995,1986,987,1986,986,1987,985,1988,977,1995,975,1996,971,1996,968,1996,966,1996,L,950,2003,Q,922,2012,921,2012,911,2014,900,2030,894,2038,883,2056,878,2062,868,2077,860,2090,851,2098,847,2101,839,2101,829,2101,825,2102,L,798,2107,611,2107,Q,606,2118,564,2192,512,2283,503,2306,503,2331,505,2386,L,502,2480,Q,493,2496,493,2520,494,2554,495,2563,495,2567,495,2567,495,2572,496,2582,496,2596,498,2601,503,2622,503,2643,503,2655,501,2689,501,2719,506,2728,553,2740,637,2763,L,665,2769,689,2738,Q,691,2735,693,2732,699,2724,706,2714,712,2705,723,2693,734,2681,746,2668,769,2641,769,2635,769,2624,750,2592,L,731,2564,Q,731,2556,739,2556,751,2556,755,2558,755,2559,760,2564,764,2569,766,2569,768,2569,773,2563,779,2557,785,2557,795,2557,808,2576,821,2595,840,2596,852,2596,876,2595,897,2595,913,2601,929,2607,955,2613,981,2618,989,2621,1004,2627,1027,2638,1046,2648,1064,2653,1101,2663,1189,2709,1321,2776,1334,2782,L,1349,2789,Q,1365,2799,1370,2797,1375,2795,1389,2781,1404,2767,1413,2757,1422,2746,1436,2734,L,1618,2571,Q,1618,2571,1618,2570,1649,2538,1655,2538,1658,2538,1668,2544,1679,2550,1693,2550,1700,2550,1714,2554,1729,2559,1735,2559,1747,2560,1755,2565,1760,2569,1766,2579,1771,2587,1778,2602,1783,2612,1791,2612,1794,2612,1820,2596,1839,2588,1862,2577,1871,2573,1904,2564,1925,2558,1933,2549,1931,2543,1926,2532,1921,2520,1920,2515,L,1913,2495,Q,1910,2484,1909,2476,L,1905,2476,Q,1905,2474,1904,2468,1902,2463,1902,2459,1902,2444,1902,2443,1902,2425,1903,2422,1906,2413,1911,2395,1912,2388,1912,2382,1916,2370,1918,2368,1924,2351,1924,2349,1924,2347,1916,2331,1906,2313,1904,2308,1901,2304,1897,2295,1892,2285,1891,2283,1881,2274,1881,2260,1881,2250,1897,2213,1914,2172,1916,2160,1922,2133,1934,2112,1952,2079,1952,2070,1952,2064,1946,2050,1940,2037,1941,2032,1922,1985,1906,1934,L,1881,1874,Q,1876,1860,1868,1849,1848,1849,1838,1849,1819,1848,1805,1849,1793,1849,1787,1849,1786,1849,1786,1849,1777,1849,1774,1852,1763,1857,1759,1859,1755,1860,1747,1860,1713,1860,1702,1854,1691,1847,1665,1847,1648,1847,1643,1848,1641,1848,1632,1853,1625,1857,1621,1857,1619,1859,1610,1868,Q,1603,1876,1596,1877,Z]],label:"Khan Uul",shortLabel:"KH",labelPosition:[122.2,232.2],labelAlignment:[CEN,MID]},"MN.UB.NA":{outlines:[[M,3863,1515,Q,3843,1520,3833,1526,3824,1532,3818,1532,L,3810,1535,Q,3803,1542,3798,1546,3790,1554,3784,1554,3772,1555,3766,1555,3760,1554,3752,1556,3744,1558,3727,1548,3710,1538,3704,1534,3702,1532,3697,1523,3692,1514,3691,1512,3690,1508,3682,1506,3672,1502,3667,1499,3656,1491,3645,1484,3632,1477,3623,1471,3619,1468,3602,1449,3588,1433,3583,1433,3580,1433,3560,1438,3541,1443,3527,1442,3518,1441,3499,1445,3475,1451,3473,1451,3472,1451,3417,1452,3381,1452,3366,1461,L,3327,1461,Q,3321,1479,3320,1489,3312,1509,3300,1540,3298,1544,3290,1560,3281,1575,3281,1583,3281,1591,3291,1597,3297,1601,3307,1607,3319,1617,3342,1631,3393,1666,3422,1682,3426,1683,3430,1686,3438,1690,3438,1694,3438,1697,3427,1714,3422,1717,3417,1724,3413,1733,3411,1736,3384,1776,3373,1791,3367,1798,3353,1822,3342,1840,3332,1847,3327,1849,3322,1857,3316,1868,3315,1870,3313,1871,3310,1877,3307,1883,3307,1884,3303,1894,3301,1896,L,3299,1920,Q,3299,1925,3294,1935,3291,1944,3291,1947,3291,1955,3287,1971,3285,1973,3284,1978,3282,1984,3281,1985,3272,1992,3271,1994,3266,1998,3250,2010,3234,2023,3228,2028,3221,2034,3201,2046,3196,2048,3191,2054,3186,2060,3178,2064,3150,2086,3150,2086,3149,2086,3137,2072,3125,2058,3121,2056,3118,2053,3109,2041,3100,2029,3096,2024,3084,2008,3070,1996,3053,1980,3049,1976,3046,1972,3033,1956,3021,1940,3013,1933,3006,1926,2998,1923,2988,1918,2988,1918,2976,1908,2967,1908,2958,1908,2956,1916,2954,1920,2949,1935,2948,1938,2948,1953,2946,1960,2942,1972,2940,1978,2937,1989,2934,2e3,2933,2011,2930,2023,2929,2031,2926,2039,2924,2049,L,2924,2051,Q,2924,2056,2922,2068,L,2916,2085,Q,2909,2110,2903,2125,2902,2127,2898,2144,2893,2160,2893,2164,2893,2176,2892,2183,2888,2193,2887,2204,2887,2205,2887,2206,2885,2216,2876,2245,2868,2271,2867,2291,2864,2298,2860,2316,2855,2333,2851,2344,2849,2348,2848,2356,2847,2366,2846,2370,2845,2373,2842,2382,2839,2388,2838,2393,2836,2396,2836,2404,2835,2415,2835,2417,2830,2434,2829,2438,2827,2452,2821,2463,2819,2470,2819,2484,2819,2495,2820,2497,2823,2504,2826,2521,2828,2533,2833,2541,2836,2546,2836,2557,2836,2566,2835,2567,2835,2569,2833,2584,2832,2588,2831,2601,2829,2616,2828,2621,2827,2627,2822,2642,2818,2657,2818,2664,2818,2667,2813,2685,2809,2698,2809,2708,2809,2715,2806,2726,2804,2736,2805,2744,2814,2753,2825,2764,2852,2791,2857,2796,2863,2801,2875,2816,2887,2830,2895,2837,2912,2854,2932,2878,2962,2908,3014,2957,3070,3017,3085,3037,3087,3049,3087,3074,3086,3099,3086,3108,L,3086,3112,Q,3095,3111,3149,3113,3204,3114,3221,3118,3238,3122,3282,3122,3305,3122,3350,3121,3355,3121,3377,3121,3395,3121,3406,3122,3413,3122,3430,3126,3446,3130,3452,3130,3467,3130,3524,3134,3561,3136,3569,3135,3567,3134,3566,3134,3569,3134,3571,3134,3627,3134,3630,3130,3630,3104,3637,3061,3640,3041,3640,3002,3640,2963,3643,2948,3650,2926,3650,2915,L,3651,2796,Q,3651,2789,3653,2786,3655,2780,3658,2773,3658,2762,3659,2757,3658,2748,3668,2744,3674,2741,3688,2736,3717,2718,3753,2689,3756,2686,3790,2665,3797,2660,3806,2654,3813,2649,3819,2646,3825,2643,3833,2636,L,3833,2461,Q,3834,2455,3836,2445,3837,2436,3840,2426,3845,2404,3849,2395,3862,2349,3869,2331,3869,2329,3870,2327,3872,2310,3880,2290,3887,2262,3892,2249,3893,2240,3897,2230,3902,2218,3906,2210,3909,2201,3908,2190,3907,2179,3908,2166,3908,2152,3908,2136,3908,2119,3908,2110,3908,2100,3958,2068,L,3989,2047,Q,3999,2042,4002,2034,4003,2030,4004,2027,4006,2023,4010,2023,L,4049,2025,Q,4058,2025,4065,2018,4072,2010,4072,2002,4070,1967,4075,1955,4077,1947,4084,1940,4087,1937,4098,1927,4102,1923,4102,1888,4103,1875,4103,1870,4103,1861,4100,1858,4094,1850,4085,1844,4083,1842,4083,1834,4083,1829,4087,1826,4091,1824,4091,1819,4091,1813,4086,1810,4079,1807,4077,1802,4071,1796,4064,1785,4057,1773,4051,1766,4047,1763,4043,1752,4039,1739,4037,1735,4036,1733,4016,1697,4007,1681,4007,1662,4007,1645,4020,1622,4022,1619,4031,1607,L,4041,1596,Q,4041,1593,4035,1591,4029,1589,4030,1575,4030,1561,4018,1560,4018,1560,4004,1559,3997,1558,3992,1555,3985,1550,3981,1548,3974,1544,3966,1542,3946,1533,3915,1522,Q,3883,1511,3863,1515,Z]],label:"Nalaikh",shortLabel:"NA",labelPosition:[345.4,228.4],labelAlignment:[CEN,MID]},"MN.UB.SK":{outlines:[[M,1398,299,Q,1371,291,1351,286,1321,277,1294,269,1292,269,1290,269,1252,271,1225,270,1171,270,1147,263,1141,261,1110,258,1106,258,1095,255,1083,252,1077,251,1075,250,1047,235,1019,221,1016,221,1002,221,943,239,886,255,880,256,880,257,880,257,879,264,859,249,840,235,820,214,806,199,798,191,791,183,775,181,759,180,714,169,668,158,651,154,648,153,647,153,513,119,441,116,432,115,414,111,398,107,392,107,380,107,366,103,352,98,345,98,308,98,293,72,287,59,285,54,280,45,274,45,269,45,219,63,168,82,162,84,150,88,102,102,71,111,48,120,49,146,73,197,76,202,113,276,125,300,154,350,178,396,189,429,247,604,252,614,258,624,250,631,243,638,209,672,176,705,172,712,169,718,184,734,199,750,213,764,234,788,263,827,326,911,356,947,358,950,386,981,409,1007,409,1012,409,1018,361,1099,348,1126,345,1143,344,1152,344,1192,344,1223,345,1273,345,1274,345,1276,343,1294,352,1314,357,1328,373,1354,378,1365,392,1404,404,1432,413,1444,425,1458,478,1504,520,1541,533,1568,525,1570,511,1578,496,1587,496,1589,496,1595,504,1606,542,1680,564,1732,593,1799,593,1806,593,1812,577,1832,571,1844,556,1868,540,1891,540,1893,538,1898,538,1925,L,538,1953,Q,538,1956,541,1967,543,1972,544,1976,544,1979,545,1981,L,544,1984,Q,544,1993,578,2047,612,2100,612,2105,612,2106,611,2107,L,798,2107,825,2102,Q,829,2101,839,2101,847,2101,851,2098,860,2090,868,2077,878,2062,883,2056,894,2038,900,2030,911,2014,921,2012,922,2012,950,2003,L,966,1996,Q,968,1996,971,1996,975,1996,977,1995,985,1988,986,1987,987,1986,995,1986,995,1984,999,1985,1004,1985,1009,1991,1011,1994,1021,1999,1034,2004,1051,2013,L,1086,2028,Q,1088,2030,1097,2036,1106,2042,1107,2042,1109,2042,1111,2028,1113,2014,1123,2014,1125,2014,1132,2018,1138,2023,1142,2023,1147,2023,1150,2020,1155,2015,1161,2013,1165,2011,1171,2011,1177,2010,1180,2008,1184,2007,1190,2006,1198,2005,1201,2004,1204,2003,1210,1999,1214,1995,1218,1995,1224,1993,1243,1994,1244,1993,1255,1986,1258,1985,1266,1985,1270,1984,1278,1985,1285,1985,1290,1981,1296,1976,1298,1975,1300,1974,1307,1975,1308,1968,1309,1967,1310,1967,1314,1967,L,1318,1967,Q,1319,1967,1322,1973,1322,1974,1331,1976,1334,1978,1339,1988,L,1349,1990,1360,1990,Q,1363,1990,1364,1991,1365,1993,1366,1995,1367,1997,1376,1997,1377,1997,1378,1997,1378,1986,1378,1982,1378,1975,1381,1968,L,1381,1852,Q,1381,1843,1389,1840,1396,1836,1407,1838,1420,1839,1452,1838,1461,1838,1472,1835,1488,1830,1492,1829,1499,1828,1511,1828,1518,1828,1531,1829,L,1531,1829,Q,1544,1828,1579,1822,1595,1821,1606,1820,1609,1819,1609,1806,1609,1796,1605,1787,1601,1777,1601,1764,1601,1752,1604,1748,1609,1740,1609,1732,1608,1728,1615,1717,1619,1710,1625,1701,L,1645,1674,Q,1650,1672,1659,1665,1661,1663,1672,1663,1674,1660,1674,1657,1674,1651,1669,1647,1662,1644,1657,1640,1648,1633,1644,1628,1639,1622,1639,1614,1639,1546,1639,1545,1639,1480,1640,1464,L,1639,1455,Q,1639,1448,1642,1441,1645,1436,1644,1433,1645,1430,1645,1420,1645,1412,1646,1409,1649,1392,1649,1383,1649,1380,1653,1371,1657,1361,1657,1360,1657,1323,1659,1315,1664,1301,1666,1298,1668,1290,1668,1277,1668,1264,1666,1261,1663,1253,1660,1240,1659,1240,1659,1239,1650,1220,1648,1214,1641,1193,1638,1186,1636,1182,1630,1156,1623,1137,1619,1125,1613,1106,1610,1096,1605,1079,1603,1064,1601,1041,1598,1032,1593,1020,1594,1008,1593,1006,1593,1002,1593,985,1589,977,1583,970,1582,966,1580,963,1579,954,1577,943,1577,941,1573,929,1571,913,1570,906,1566,898,1564,892,1564,885,1564,876,1565,873,1566,871,1574,862,1577,857,1589,835,1592,831,1599,824,1606,816,1610,810,1613,806,1619,797,1624,792,1625,789,1642,759,1647,751,1651,744,1661,733,1672,722,1673,720,1675,716,1676,710,1677,700,1677,685,1676,656,1677,647,L,1675,637,Q,1678,609,1679,597,1678,584,1678,575,1678,561,1680,557,1681,554,1684,549,1687,544,1688,538,1689,534,1691,529,1695,522,1695,521,1696,512,1702,504,1706,496,1707,489,1701,485,1695,479,1683,466,1674,460,1666,454,1656,446,1639,431,1634,423,1621,403,1593,380,1576,366,1554,353,1532,339,1511,333,1490,326,1480,324,1470,322,1448,314,Q,1426,306,1398,299,Z]],label:"Songino Khairkhan",shortLabel:"SK",labelPosition:[87.8,107.6],labelAlignment:[CEN,MID]},"MN.UB.SU":{outlines:[[M,1976,494,Q,1972,484,1971,465,1949,465,1937,466,1932,466,1923,470,1915,474,1910,474,1906,474,1875,473,1855,472,1844,475,1825,479,1815,481,1797,484,1779,485,1749,485,1744,490,1739,495,1724,494,1715,493,1707,489,1706,496,1702,504,1696,512,1695,521,1695,522,1691,529,1689,534,1688,538,1687,544,1684,549,1681,554,1680,557,1678,561,1678,575,1678,584,1679,597,1678,609,1675,637,L,1677,647,Q,1676,656,1677,685,1677,700,1676,710,1681,720,1690,731,1702,746,1709,758,1714,766,1725,783,1725,788,1731,812,1731,818,1727,836,1726,840,1726,856,1726,873,1730,905,1731,932,1737,948,1738,949,1738,950,1740,967,1745,978,1745,979,1750,1001,1751,1010,1756,1026,1760,1043,1758,1066,1756,1084,1773,1123,L,1779,1140,Q,1780,1145,1787,1153,1789,1158,1791,1161,1792,1162,1795,1166,1797,1169,1800,1172,1803,1175,1807,1179,1808,1181,1816,1195,1823,1206,1825,1217,1827,1224,1830,1229,1832,1234,1833,1237,1833,1246,1833,1264,1834,1277,1839,1289,1840,1294,1849,1312,1850,1315,1861,1336,1869,1349,1869,1357,L,1867,1370,Q,1867,1374,1870,1382,1874,1389,1874,1393,1874,1401,1869,1408,1869,1420,1867,1443,L,1852,1475,Q,1852,1478,1857,1481,1861,1484,1861,1493,1861,1501,1849,1504,1832,1509,1830,1510,1823,1515,1823,1529,1824,1554,1824,1556,1823,1559,1823,1570,1823,1576,1820,1581,1816,1586,1815,1594,1815,1598,1815,1603,1817,1614,1810,1627,1804,1639,1804,1647,1804,1649,1804,1650,L,1804,1679,Q,1805,1683,1801,1687,1794,1692,1792,1695,1790,1698,1788,1707,1785,1717,1785,1718,1778,1728,1776,1730,1774,1733,1774,1740,L,1775,1746,Q,1782,1746,1806,1750,1805,1758,1807,1763,1808,1765,1812,1773,1813,1777,1812,1785,1812,1792,1815,1801,L,1815,1804,1799,1804,Q,1775,1804,1761,1800,L,1750,1800,1749,1812,Q,1742,1815,1741,1815,L,1741,1841,1765,1841,Q,1777,1839,1780,1843,1785,1848,1786,1849,1786,1849,1787,1849,1793,1849,1805,1849,1819,1848,1838,1849,1848,1849,1868,1849,1863,1843,1863,1832,1863,1821,1865,1819,1869,1814,1869,1806,1868,1797,1869,1785,1869,1773,1869,1768,1871,1761,1871,1758,1871,1752,1869,1746,1866,1740,1867,1731,1867,1728,1864,1719,1860,1708,1859,1707,1859,1705,1859,1696,1859,1687,1857,1680,1853,1670,1853,1651,1853,1646,1853,1642,1853,1632,1856,1628,1862,1617,1860,1608,1859,1597,1866,1586,1873,1576,1882,1572,1898,1564,1901,1562,1902,1561,1919,1556,L,1956,1533,Q,1959,1533,1963,1529,1968,1525,1974,1526,L,1994,1522,Q,2e3,1517,2014,1514,2017,1513,2036,1510,2047,1508,2057,1504,2069,1500,2078,1497,2082,1496,2096,1493,2098,1492,2104,1490,2108,1488,2108,1485,2108,1482,2104,1478,L,2097,1472,Q,2091,1459,2087,1455,2079,1448,2074,1442,2065,1431,2065,1425,2065,1420,2082,1400,2095,1383,2103,1377,2111,1371,2123,1355,2135,1340,2139,1332,L,2152,1320,Q,2163,1305,2165,1303,L,2186,1275,Q,2196,1261,2211,1247,2220,1236,2220,1218,2220,1212,2216,1203,2212,1191,2210,1179,2209,1175,2209,1163,2210,1151,2208,1147,2203,1136,2201,1117,2199,1102,2200,1088,2200,1087,2200,1085,2197,1069,2194,1052,2191,1039,2191,1023,L,2192,951,Q,2192,910,2191,902,2190,895,2185,887,2176,876,2176,875,L,2159,843,Q,2154,835,2139,814,2136,807,2128,797,2119,785,2117,780,L,2100,750,Q,2073,699,2059,679,2059,677,2018,613,1987,571,1980,554,L,1980,519,Q,1980,503,1976,494,Z]],label:"Sükhbaatar",shortLabel:"SU",labelPosition:[196.1,104.5],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"ulaanbaatar",type:"maps"}}})});