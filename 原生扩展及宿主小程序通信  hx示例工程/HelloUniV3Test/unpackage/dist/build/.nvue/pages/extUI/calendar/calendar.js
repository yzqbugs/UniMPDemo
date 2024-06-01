import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, toDisplayString, resolveComponent, withModifiers, createVNode, withCtx, Fragment, renderList, resolveDynamicComponent, createTextVNode } from "vue";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
var calendar$1 = {
  /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex
      */
  lunarInfo: [
    19416,
    19168,
    42352,
    21717,
    53856,
    55632,
    91476,
    22176,
    39632,
    21970,
    // 1900-1909
    19168,
    42422,
    42192,
    53840,
    119381,
    46400,
    54944,
    44450,
    38320,
    84343,
    // 1910-1919
    18800,
    42160,
    46261,
    27216,
    27968,
    109396,
    11104,
    38256,
    21234,
    18800,
    // 1920-1929
    25958,
    54432,
    59984,
    28309,
    23248,
    11104,
    100067,
    37600,
    116951,
    51536,
    // 1930-1939
    54432,
    120998,
    46416,
    22176,
    107956,
    9680,
    37584,
    53938,
    43344,
    46423,
    // 1940-1949
    27808,
    46416,
    86869,
    19872,
    42416,
    83315,
    21168,
    43432,
    59728,
    27296,
    // 1950-1959
    44710,
    43856,
    19296,
    43748,
    42352,
    21088,
    62051,
    55632,
    23383,
    22176,
    // 1960-1969
    38608,
    19925,
    19152,
    42192,
    54484,
    53840,
    54616,
    46400,
    46752,
    103846,
    // 1970-1979
    38320,
    18864,
    43380,
    42160,
    45690,
    27216,
    27968,
    44870,
    43872,
    38256,
    // 1980-1989
    19189,
    18800,
    25776,
    29859,
    59984,
    27480,
    23232,
    43872,
    38613,
    37600,
    // 1990-1999
    51552,
    55636,
    54432,
    55888,
    30034,
    22176,
    43959,
    9680,
    37584,
    51893,
    // 2000-2009
    43344,
    46240,
    47780,
    44368,
    21977,
    19360,
    42416,
    86390,
    21168,
    43312,
    // 2010-2019
    31060,
    27296,
    44368,
    23378,
    19296,
    42726,
    42208,
    53856,
    60005,
    54576,
    // 2020-2029
    23200,
    30371,
    38608,
    19195,
    19152,
    42192,
    118966,
    53840,
    54560,
    56645,
    // 2030-2039
    46496,
    22224,
    21938,
    18864,
    42359,
    42160,
    43600,
    111189,
    27936,
    44448,
    // 2040-2049
    /** Add By JJonline@JJonline.Cn**/
    84835,
    37744,
    18936,
    18800,
    25776,
    92326,
    59984,
    27424,
    108228,
    43744,
    // 2050-2059
    41696,
    53987,
    51552,
    54615,
    54432,
    55888,
    23893,
    22176,
    42704,
    21972,
    // 2060-2069
    21200,
    43448,
    43344,
    46240,
    46758,
    44368,
    21920,
    43940,
    42416,
    21168,
    // 2070-2079
    45683,
    26928,
    29495,
    27296,
    44368,
    84821,
    19296,
    42352,
    21732,
    53600,
    // 2080-2089
    59752,
    54560,
    55968,
    92838,
    22224,
    19168,
    43476,
    41680,
    53584,
    62034,
    // 2090-2099
    54560
  ],
  // 2100
  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
  Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
  Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
  /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
  Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
  /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
  solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
  /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
  sTermInfo: [
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "9778397bd19801ec9210c965cc920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd197c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bcf97c3598082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd19801ec9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bd07f1487f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b97bd197c36c9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b70c9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "977837f0e37f149b0723b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0723b06bd",
    "7f07e7f0e37f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e37f14998083b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14898082b0723b02d5",
    "7f07e7f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66aa89801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e26665b66a449801e9808297c35",
    "665f67f0e37f1489801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722"
  ],
  /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
  nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
  /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
  nStr2: ["初", "十", "廿", "卅"],
  /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
  nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
  /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
  lYearDays: function(y) {
    var i;
    var sum = 348;
    for (i = 32768; i > 8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
  leapMonth: function(y) {
    return this.lunarInfo[y - 1900] & 15;
  },
  /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
  leapDays: function(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
    }
    return 0;
  },
  /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
  monthDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
  },
  /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
  solarDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var ms = m - 1;
    if (ms == 1) {
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
  toGanZhiYear: function(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0)
      ganKey = 10;
    if (zhiKey == 0)
      zhiKey = 12;
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
  toAstro: function(cMonth, cDay) {
    var s = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "座";
  },
  /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
  toGanZhi: function(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
  getTerm: function(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [
      parseInt("0x" + _table.substr(0, 5)).toString(),
      parseInt("0x" + _table.substr(5, 5)).toString(),
      parseInt("0x" + _table.substr(10, 5)).toString(),
      parseInt("0x" + _table.substr(15, 5)).toString(),
      parseInt("0x" + _table.substr(20, 5)).toString(),
      parseInt("0x" + _table.substr(25, 5)).toString()
    ];
    var _calday = [
      _info[0].substr(0, 1),
      _info[0].substr(1, 2),
      _info[0].substr(3, 1),
      _info[0].substr(4, 2),
      _info[1].substr(0, 1),
      _info[1].substr(1, 2),
      _info[1].substr(3, 1),
      _info[1].substr(4, 2),
      _info[2].substr(0, 1),
      _info[2].substr(1, 2),
      _info[2].substr(3, 1),
      _info[2].substr(4, 2),
      _info[3].substr(0, 1),
      _info[3].substr(1, 2),
      _info[3].substr(3, 1),
      _info[3].substr(4, 2),
      _info[4].substr(0, 1),
      _info[4].substr(1, 2),
      _info[4].substr(3, 1),
      _info[4].substr(4, 2),
      _info[5].substr(0, 1),
      _info[5].substr(1, 2),
      _info[5].substr(3, 1),
      _info[5].substr(4, 2)
    ];
    return parseInt(_calday[n - 1]);
  },
  /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
  toChinaMonth: function(m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var s = this.nStr3[m - 1];
    s += "月";
    return s;
  },
  /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
  toChinaDay: function(d) {
    var s;
    switch (d) {
      case 10:
        s = "初十";
        break;
      case 20:
        s = "二十";
        break;
      case 30:
        s = "三十";
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
  getAnimal: function(y) {
    return this.Animals[(y - 4) % 12];
  },
  /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:381',calendar.solar2lunar(1987,11,01));
      */
  solar2lunar: function(y, m, d) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    if (!y) {
      var objDate = /* @__PURE__ */ new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    var isTodayObj = /* @__PURE__ */ new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    if (nWeek == 0) {
      nWeek = 7;
    }
    var year = i;
    var leap = this.leapMonth(i);
    var isLeap = false;
    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year);
      } else {
        temp = this.monthDays(year, i);
      }
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    var month = i;
    var day = offset + 1;
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);
    var firstNode = this.getTerm(y, m * 2 - 1);
    var secondNode = this.getTerm(y, m * 2);
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    var astro = this.toAstro(m, d);
    return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "闰" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "星期" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
  },
  /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:__f__('log','at uni_modules/uni-calendar/components/uni-calendar/calendar.js:500',calendar.lunar2solar(1987,9,10));
      */
  lunar2solar: function(y, m, d, isLeapMonth) {
    var isLeapMonth = !!isLeapMonth;
    var leapMonth = this.leapMonth(y);
    this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    }
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    var day = this.monthDays(y, m);
    var _day = day;
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    }
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    if (isLeapMonth) {
      offset += day;
    }
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 864e5 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  }
};
class Calendar {
  constructor({
    date,
    selected,
    startDate,
    endDate,
    range
  } = {}) {
    this.date = this.getDate(/* @__PURE__ */ new Date());
    this.selected = selected || [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.range = range;
    this.cleanMultipleStatus();
    this.weeks = {};
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  setDate(date) {
    this.selectDate = this.getDate(date);
    this._getWeek(this.selectDate.fullDate);
  }
  /**
   * 清理多选状态
   */
  cleanMultipleStatus() {
    this.multipleStatus = {
      before: "",
      after: "",
      data: []
    };
  }
  /**
   * 重置开始日期
   */
  resetSatrtDate(startDate) {
    this.startDate = startDate;
  }
  /**
   * 重置结束日期
   */
  resetEndDate(endDate) {
    this.endDate = endDate;
  }
  /**
   * 获取任意时间
   */
  getDate(date, AddDayCount = 0, str = "day") {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (typeof date !== "object") {
      date = date.replace(/-/g, "/");
    }
    const dd = new Date(date);
    switch (str) {
      case "day":
        dd.setDate(dd.getDate() + AddDayCount);
        break;
      case "month":
        if (dd.getDate() === 31) {
          dd.setDate(dd.getDate() + AddDayCount);
        } else {
          dd.setMonth(dd.getMonth() + AddDayCount);
        }
        break;
      case "year":
        dd.setFullYear(dd.getFullYear() + AddDayCount);
        break;
    }
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return {
      fullDate: y + "-" + m + "-" + d,
      year: y,
      month: m,
      date: d,
      day: dd.getDay()
    };
  }
  /**
   * 获取上月剩余天数
   */
  _getLastMonthDays(firstDay, full) {
    let dateArr = [];
    for (let i = firstDay; i > 0; i--) {
      const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
      dateArr.push({
        date: beforeDate,
        month: full.month - 1,
        lunar: this.getlunar(full.year, full.month - 1, beforeDate),
        disable: true
      });
    }
    return dateArr;
  }
  /**
   * 获取本月天数
   */
  _currentMonthDys(dateData, full) {
    let dateArr = [];
    let fullDate = this.date.fullDate;
    for (let i = 1; i <= dateData; i++) {
      let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
      let isDay = fullDate === nowDate;
      let info = this.selected && this.selected.find((item) => {
        if (this.dateEqual(nowDate, item.date)) {
          return item;
        }
      });
      let disableBefore = true;
      let disableAfter = true;
      if (this.startDate) {
        disableBefore = this.dateCompare(this.startDate, nowDate);
      }
      if (this.endDate) {
        disableAfter = this.dateCompare(nowDate, this.endDate);
      }
      let multiples = this.multipleStatus.data;
      let checked = false;
      let multiplesStatus = -1;
      if (this.range) {
        if (multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, nowDate);
          });
        }
        if (multiplesStatus !== -1) {
          checked = true;
        }
      }
      let data = {
        fullDate: nowDate,
        year: full.year,
        date: i,
        multiple: this.range ? checked : false,
        beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
        afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
        month: full.month,
        lunar: this.getlunar(full.year, full.month, i),
        disable: !(disableBefore && disableAfter),
        isDay
      };
      if (info) {
        data.extraInfo = info;
      }
      dateArr.push(data);
    }
    return dateArr;
  }
  /**
   * 获取下月天数
   */
  _getNextMonthDays(surplus, full) {
    let dateArr = [];
    for (let i = 1; i < surplus + 1; i++) {
      dateArr.push({
        date: i,
        month: Number(full.month) + 1,
        lunar: this.getlunar(full.year, Number(full.month) + 1, i),
        disable: true
      });
    }
    return dateArr;
  }
  /**
   * 获取当前日期详情
   * @param {Object} date
   */
  getInfo(date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
    return dateInfo;
  }
  /**
   * 比较时间大小
   */
  dateCompare(startDate, endDate) {
    startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
    endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
    if (startDate <= endDate) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 比较时间是否相等
   */
  dateEqual(before, after) {
    before = new Date(before.replace("-", "/").replace("-", "/"));
    after = new Date(after.replace("-", "/").replace("-", "/"));
    if (before.getTime() - after.getTime() === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * 获取日期范围内所有日期
   * @param {Object} begin
   * @param {Object} end
   */
  geDateAll(begin, end) {
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = /* @__PURE__ */ new Date();
    db.setFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = /* @__PURE__ */ new Date();
    de.setFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
    for (var k = unixDb; k <= unixDe; ) {
      k = k + 24 * 60 * 60 * 1e3;
      arr.push(this.getDate(new Date(parseInt(k))).fullDate);
    }
    return arr;
  }
  /**
   * 计算阴历日期显示
   */
  getlunar(year, month, date) {
    return calendar$1.solar2lunar(year, month, date);
  }
  /**
   * 设置打点
   */
  setSelectInfo(data, value) {
    this.selected = value;
    this._getWeek(data);
  }
  /**
   *  获取多选状态
   */
  setMultiple(fullDate) {
    let {
      before,
      after
    } = this.multipleStatus;
    if (!this.range)
      return;
    if (before && after) {
      this.multipleStatus.before = "";
      this.multipleStatus.after = "";
      this.multipleStatus.data = [];
    } else {
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
    }
    this._getWeek(fullDate);
  }
  /**
   * 获取每周数据
   * @param {Object} dateData
   */
  _getWeek(dateData) {
    const {
      fullDate,
      year,
      month,
      date,
      day
    } = this.getDate(dateData);
    let firstDay = new Date(year, month - 1, 1).getDay();
    let currentDay = new Date(year, month, 0).getDate();
    let dates = {
      lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
      // 上个月末尾几天
      currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
      // 本月天数
      nextMonthDays: [],
      // 下个月开始几天
      weeks: []
    };
    let canlender = [];
    const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
    dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
    canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
    let weeks = {};
    for (let i = 0; i < canlender.length; i++) {
      if (i % 7 === 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender[i];
    }
    this.canlender = canlender;
    this.weeks = weeks;
  }
  //静态方法
  // static init(date) {
  // 	if (!this.instance) {
  // 		this.instance = new Calendar(date);
  // 	}
  // 	return this.instance;
  // }
}
const en = {
  "uni-calender.ok": "ok",
  "uni-calender.cancel": "cancel",
  "uni-calender.today": "today",
  "uni-calender.MON": "MON",
  "uni-calender.TUE": "TUE",
  "uni-calender.WED": "WED",
  "uni-calender.THU": "THU",
  "uni-calender.FRI": "FRI",
  "uni-calender.SAT": "SAT",
  "uni-calender.SUN": "SUN"
};
const zhHans = {
  "uni-calender.ok": "确定",
  "uni-calender.cancel": "取消",
  "uni-calender.today": "今日",
  "uni-calender.SUN": "日",
  "uni-calender.MON": "一",
  "uni-calender.TUE": "二",
  "uni-calender.WED": "三",
  "uni-calender.THU": "四",
  "uni-calender.FRI": "五",
  "uni-calender.SAT": "六"
};
const zhHant = {
  "uni-calender.ok": "確定",
  "uni-calender.cancel": "取消",
  "uni-calender.today": "今日",
  "uni-calender.SUN": "日",
  "uni-calender.MON": "一",
  "uni-calender.TUE": "二",
  "uni-calender.WED": "三",
  "uni-calender.THU": "四",
  "uni-calender.FRI": "五",
  "uni-calender.SAT": "六"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$2 = { "uni-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "uni-calendar-item__weeks-box-text": { "": { "fontSize": 14, "color": "#333333" } }, "uni-calendar-item__weeks-lunar-text": { "": { "fontSize": 12, "color": "#333333" } }, "uni-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "100rpx", "height": "100rpx" } }, "uni-calendar-item__weeks-box-circle": { "": { "position": "absolute", "top": 5, "right": 5, "width": 8, "height": 8, "borderRadius": 8, "backgroundColor": "#dd524d" } }, "uni-calendar-item--disable": { "": { "backgroundColor": "rgba(249,249,249,0.3)", "color": "#c0c0c0" } }, "uni-calendar-item--isDay-text": { "": { "color": "#007aff" } }, "uni-calendar-item--isDay": { "": { "backgroundColor": "#007aff", "opacity": 0.8, "color": "#ffffff" } }, "uni-calendar-item--extra": { "": { "color": "#dd524d", "opacity": 0.8 } }, "uni-calendar-item--checked": { "": { "backgroundColor": "#007aff", "color": "#ffffff", "opacity": 0.8 } }, "uni-calendar-item--multiple": { "": { "backgroundColor": "#007aff", "color": "#ffffff", "opacity": 0.8 } }, "uni-calendar-item--before-checked": { "": { "backgroundColor": "#ff5a5f", "color": "#ffffff" } }, "uni-calendar-item--after-checked": { "": { "backgroundColor": "#ff5a5f", "color": "#ffffff" } } };
const { t: t$1 } = initVueI18n(messages);
const _sfc_main$2 = {
  emits: ["change"],
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    todayText() {
      return t$1("uni-calender.today");
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-calendar-item__weeks-box", {
      "uni-calendar-item--disable": $props.weeks.disable,
      "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
      "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
      "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
      "uni-calendar-item--multiple": $props.weeks.multiple,
      "uni-calendar-item--after-checked": $props.weeks.afterMultiple
    }]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
    renderWhole: true
  }, [
    createElementVNode("view", { class: "uni-calendar-item__weeks-box-item" }, [
      $props.selected && $props.weeks.extraInfo ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "uni-calendar-item__weeks-box-circle"
      })) : createCommentVNode("", true),
      createElementVNode("u-text", {
        class: normalizeClass(["uni-calendar-item__weeks-box-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.date), 3),
      !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple
        }])
      }, toDisplayString($options.todayText), 3)) : createCommentVNode("", true),
      $props.lunar && !$props.weeks.extraInfo ? (openBlock(), createElementBlock("u-text", {
        key: 2,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "初一" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn), 3)) : createCommentVNode("", true),
      $props.weeks.extraInfo && $props.weeks.extraInfo.info ? (openBlock(), createElementBlock("u-text", {
        key: 3,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--extra": $props.weeks.extraInfo.info,
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.extraInfo.info), 3)) : createCommentVNode("", true)
    ])
  ], 2);
}
const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "uni-calendar": { "": { "flexDirection": "column" } }, "uni-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "uni-calendar--mask-show": { "": { "opacity": 1 } }, "uni-calendar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(460px)" } }, "uni-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "uni-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "uni-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 50, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar--fixed-top": { "": { "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--fixed-width": { "": { "width": 50 } }, "uni-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "height": 25, "lineHeight": 25, "fontSize": 12, "borderTopLeftRadius": 25, "borderBottomLeftRadius": 25, "color": "#333333", "backgroundColor": "#f1f1f1" } }, "uni-calendar__header-text": { "": { "textAlign": "center", "width": 100, "fontSize": 14, "color": "#333333" } }, "uni-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "width": 50, "height": 50 } }, "uni-calendar__header-btn": { "": { "width": 10, "height": 10, "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": 2, "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": 2 } }, "uni-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "uni-calendar--right": { "": { "transform": "rotate(135deg)" } }, "uni-calendar__weeks": { "": { "position": "relative", "flexDirection": "row" } }, "uni-calendar__weeks-item": { "": { "flex": 1 } }, "uni-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 45, "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar__weeks-day-text": { "": { "fontSize": 14 } }, "uni-calendar__box": { "": { "position": "relative" } }, "uni-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "uni-calendar__box-bg-text": { "": { "fontSize": 200, "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "@TRANSITION": { "uni-calendar__mask": { "property": "opacity", "duration": 300 }, "uni-calendar--fixed": { "property": "transform", "duration": 300 } } };
const { t } = initVueI18n(messages);
const _sfc_main$1 = {
  components: {
    calendarItem
  },
  emits: ["close", "confirm", "change", "monthSwitch"],
  props: {
    date: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    range: {
      type: Boolean,
      default: false
    },
    insert: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    clearDate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      weeks: [],
      calendar: {},
      nowDate: "",
      aniMaskShow: false
    };
  },
  computed: {
    /**
     * for i18n
     */
    okText() {
      return t("uni-calender.ok");
    },
    cancelText() {
      return t("uni-calender.cancel");
    },
    todayText() {
      return t("uni-calender.today");
    },
    monText() {
      return t("uni-calender.MON");
    },
    TUEText() {
      return t("uni-calender.TUE");
    },
    WEDText() {
      return t("uni-calender.WED");
    },
    THUText() {
      return t("uni-calender.THU");
    },
    FRIText() {
      return t("uni-calender.FRI");
    },
    SATText() {
      return t("uni-calender.SAT");
    },
    SUNText() {
      return t("uni-calender.SUN");
    }
  },
  watch: {
    date(newVal) {
      this.init(newVal);
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    }
  },
  created() {
    this.cale = new Calendar({
      // date: new Date(),
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range
    });
    this.init(this.date);
  },
  methods: {
    // 取消穿透
    clean() {
    },
    bindDateChange(e) {
      const value = e.detail.value + "-1";
      formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:220", this.cale.getDate(value));
      this.init(value);
    },
    /**
     * 初始化日期显示
     * @param {Object} date
     */
    init(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    /**
     * 打开日历弹窗
     */
    open() {
      if (this.clearDate && !this.insert) {
        this.cale.cleanMultipleStatus();
        this.init(this.date);
      }
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true;
        }, 50);
      });
    },
    /**
     * 关闭日历弹窗
     */
    close() {
      this.aniMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.$emit("close");
        }, 300);
      });
    },
    /**
     * 确认按钮
     */
    confirm() {
      this.setEmit("confirm");
      this.close();
    },
    /**
     * 变化触发
     */
    change() {
      if (!this.insert)
        return;
      this.setEmit("change");
    },
    /**
     * 选择月份触发
     */
    monthSwitch() {
      let {
        year,
        month
      } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month)
      });
    },
    /**
     * 派发事件
     * @param {Object} name
     */
    setEmit(name) {
      let {
        year,
        month,
        date,
        fullDate,
        lunar,
        extraInfo
      } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {}
      });
    },
    /**
     * 选择天触发
     * @param {Object} weeks
     */
    choiceDate(weeks) {
      if (weeks.disable)
        return;
      this.calendar = weeks;
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
    /**
     * 回到今天
     */
    backtoday() {
      formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:327", this.cale.getDate(/* @__PURE__ */ new Date()).fullDate);
      let date = this.cale.getDate(/* @__PURE__ */ new Date()).fullDate;
      this.init(date);
      this.change();
    },
    /**
     * 上个月
     */
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
      this.setDate(preDate);
      this.monthSwitch();
    },
    /**
     * 下个月
     */
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker = resolveComponent("picker");
  const _component_calendar_item = resolveComponent("calendar-item");
  return openBlock(), createElementBlock("view", {
    class: "uni-calendar",
    renderWhole: true
  }, [
    !$props.insert && $data.show ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
    }, null, 2)) : createCommentVNode("", true),
    $props.insert || $data.show ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow }])
    }, [
      !$props.insert ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-calendar__header uni-calendar--fixed-top"
      }, [
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
        }, [
          createElementVNode("u-text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, toDisplayString($options.cancelText), 1)
        ]),
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
        }, [
          createElementVNode("u-text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, toDisplayString($options.okText), 1)
        ])
      ])) : createCommentVNode("", true),
      createElementVNode("view", { class: "uni-calendar__header" }, [
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
        ]),
        createVNode(_component_picker, {
          mode: "date",
          value: $props.date,
          fields: "month",
          onChange: $options.bindDateChange
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "uni-calendar__header-text" }, toDisplayString(($data.nowDate.year || "") + " / " + ($data.nowDate.month || "")), 1)
          ]),
          _: 1
        }, 8, ["value", "onChange"]),
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
        ]),
        createElementVNode("u-text", {
          class: "uni-calendar__backtoday",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.backtoday && $options.backtoday(...args))
        }, toDisplayString($options.todayText), 1)
      ]),
      createElementVNode("view", { class: "uni-calendar__box" }, [
        $props.showMonth ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-calendar__box-bg"
        }, [
          createElementVNode("u-text", { class: "uni-calendar__box-bg-text" }, toDisplayString($data.nowDate.month), 1)
        ])) : createCommentVNode("", true),
        createElementVNode("view", { class: "uni-calendar__weeks" }, [
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SUNText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.monText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.TUEText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.WEDText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.THUText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.FRIText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SATText), 1)
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.weeks, (item, weekIndex) => {
          return openBlock(), createElementBlock("view", {
            class: "uni-calendar__weeks",
            key: weekIndex
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item, (weeks, weeksIndex) => {
              return openBlock(), createElementBlock("view", {
                class: "uni-calendar__weeks-item",
                key: weeksIndex
              }, [
                createVNode(_component_calendar_item, {
                  class: "uni-calendar-item--hook",
                  weeks,
                  calendar: $data.calendar,
                  selected: $props.selected,
                  lunar: $props.lunar,
                  onChange: $options.choiceDate
                }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange"])
              ]);
            }), 128))
          ]);
        }), 128))
      ])
    ], 2)) : createCommentVNode("", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "example-body": { "": { "flexDirection": "row" } }, "calendar-button": { "": { "flex": 1, "fontWeight": "bold", "fontSize": "32rpx" } } };
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = /* @__PURE__ */ new Date();
  }
  if (typeof date !== "object") {
    date = date.replace(/-/g, "/");
  }
  const dd = new Date(date);
  dd.setDate(dd.getDate() + AddDayCount);
  const y = dd.getFullYear();
  const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return {
    fullDate: y + "-" + m + "-" + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay()
  };
}
const _sfc_main = {
  components: {},
  data() {
    return {
      showCalendar: false,
      info: {
        lunar: true,
        range: true,
        insert: false,
        selected: []
      }
    };
  },
  onReady() {
    this.$nextTick(() => {
      this.showCalendar = true;
    });
    setTimeout(() => {
      this.info.date = getDate(/* @__PURE__ */ new Date(), -30).fullDate;
      this.info.startDate = getDate(/* @__PURE__ */ new Date(), -60).fullDate;
      this.info.endDate = getDate(/* @__PURE__ */ new Date(), 30).fullDate;
      this.info.selected = [
        {
          date: getDate(/* @__PURE__ */ new Date(), -3).fullDate,
          info: "打卡"
        },
        {
          date: getDate(/* @__PURE__ */ new Date(), -2).fullDate,
          info: "签到",
          data: {
            custom: "自定义信息",
            name: "自定义消息头"
          }
        },
        {
          date: getDate(/* @__PURE__ */ new Date(), -1).fullDate,
          info: "已打卡"
        }
      ];
    }, 2e3);
  },
  methods: {
    open() {
      this.$refs.calendar.open();
    },
    close() {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:90", "弹窗关闭");
    },
    change(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:93", "change 返回:", e);
      if (this.info.selected.length > 5)
        return;
      this.info.selected.push({
        date: e.fulldate,
        info: "打卡"
      });
    },
    confirm(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:102", "confirm 返回:", e);
    },
    monthSwitch(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:105", "monthSwitchs 返回:", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_calendar = resolveEasycom(resolveDynamicComponent("uni-calendar"), __easycom_1);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    $data.showCalendar ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "calendar-content"
    }, [
      createElementVNode("u-text", { class: "example-info" }, "日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等。"),
      createVNode(_component_uni_section, {
        title: "插入模式",
        type: "line"
      }),
      createElementVNode("view", null, [
        createVNode(_component_uni_calendar, {
          class: "uni-calendar--hook",
          selected: $data.info.selected,
          showMonth: false,
          onChange: $options.change,
          onMonthSwitch: $options.monthSwitch
        }, null, 8, ["selected", "onChange", "onMonthSwitch"])
      ]),
      createVNode(_component_uni_section, {
        class: "hideOnPc",
        title: "弹出模式",
        type: "line"
      }),
      createElementVNode("view", { class: "example-body hideOnPc" }, [
        createVNode(_component_button, {
          class: "calendar-button",
          type: "button",
          onClick: $options.open
        }, {
          default: withCtx(() => [
            createTextVNode("打开日历")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createVNode(_component_uni_calendar, {
        ref: "calendar",
        class: "uni-calendar--hook",
        "clear-date": true,
        date: $data.info.date,
        insert: $data.info.insert,
        lunar: $data.info.lunar,
        startDate: $data.info.startDate,
        endDate: $data.info.endDate,
        range: $data.info.range,
        onConfirm: $options.confirm,
        onClose: $options.close
      }, null, 8, ["date", "insert", "lunar", "startDate", "endDate", "range", "onConfirm", "onClose"])
    ])) : createCommentVNode("", true)
  ]);
}
const calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  calendar as default
};
