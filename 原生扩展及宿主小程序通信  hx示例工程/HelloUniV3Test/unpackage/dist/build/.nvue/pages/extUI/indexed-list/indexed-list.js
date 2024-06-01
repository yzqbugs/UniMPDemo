import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { resolveDynamicComponent, openBlock, createElementBlock, toDisplayString, createCommentVNode, Fragment, renderList, createElementVNode, normalizeClass, createVNode, resolveComponent, withModifiers } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0$1 = { "uni-indexed-list__list": { "": { "backgroundColor": "#ffffff", "flexDirection": "column", "borderTopStyle": "solid", "borderTopWidth": 1, "borderTopColor": "#DEDEDE" } }, "uni-indexed-list__item": { "": { "fontSize": 14, "flex": 1, "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-container": { "": { "paddingLeft": 15, "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-border": { "": { "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "height": 50, "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 0, "borderBottomStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#DEDEDE" } }, "uni-indexed-list__item-border--last": { "": { "borderBottomWidth": 0 } }, "uni-indexed-list__item-content": { "": { "flex": 1, "fontSize": 14, "color": "#191919" } }, "uni-indexed-list": { "": { "flexDirection": "row" } }, "uni-indexed-list__title-wrapper": { "": { "backgroundColor": "#f7f7f7" } }, "uni-indexed-list__title": { "": { "paddingTop": 6, "paddingRight": 12, "paddingBottom": 6, "paddingLeft": 12, "lineHeight": 24, "fontSize": 16, "fontWeight": "500" } } };
const _sfc_main$2 = {
  name: "UniIndexedList",
  emits: ["itemClick"],
  props: {
    loaded: {
      type: Boolean,
      default: false
    },
    idx: {
      type: Number,
      default: 0
    },
    list: {
      type: Object,
      default() {
        return {};
      }
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(idx, index) {
      this.$emit("itemClick", {
        idx,
        index
      });
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  return openBlock(), createElementBlock("view", { renderWhole: true }, [
    $props.loaded || $props.list.itemIndex < 15 ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-indexed-list__title-wrapper"
    }, [
      $props.list.items && $props.list.items.length > 0 ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "uni-indexed-list__title"
      }, toDisplayString($props.list.key), 1)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    ($props.loaded || $props.list.itemIndex < 15) && $props.list.items && $props.list.items.length > 0 ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-indexed-list__list"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.list.items, (item, index) => {
        return openBlock(), createElementBlock("view", {
          key: index,
          class: "uni-indexed-list__item",
          hoverClass: "uni-indexed-list__item--hover"
        }, [
          createElementVNode("view", {
            class: "uni-indexed-list__item-container",
            onClick: ($event) => $options.onClick($props.idx, index)
          }, [
            createElementVNode("view", {
              class: normalizeClass(["uni-indexed-list__item-border", { "uni-indexed-list__item-border--last": index === $props.list.items.length - 1 }])
            }, [
              $props.showSelect ? (openBlock(), createElementBlock("view", {
                key: 0,
                style: { "margin-right": "20rpx" }
              }, [
                createVNode(_component_uni_icons, {
                  type: item.checked ? "checkbox-filled" : "circle",
                  color: item.checked ? "#007aff" : "#C0C0C0",
                  size: "24"
                }, null, 8, ["type", "color"])
              ])) : createCommentVNode("", true),
              createElementVNode("u-text", { class: "uni-indexed-list__item-content" }, toDisplayString(item.name), 1)
            ], 2)
          ], 8, ["onClick"])
        ]);
      }), 128))
    ])) : createCommentVNode("", true)
  ]);
}
const indexedListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]]]);
const _style_0 = { "uni-indexed-list": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row" } }, "uni-indexed-list__scroll": { "": { "flex": 1 } }, "uni-indexed-list__menu": { "": { "width": 24, "flexDirection": "column" } }, "uni-indexed-list__menu-item": { "": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__menu-text": { "": { "fontSize": 12, "textAlign": "center", "color": "#aaaaaa" } }, "uni-indexed-list__menu-text--active": { "": { "borderRadius": 16, "width": 16, "height": 16, "lineHeight": 16, "backgroundColor": "#007aff", "color": "#ffffff" } }, "uni-indexed-list__alert-wrapper": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__alert": { "": { "width": 80, "height": 80, "borderRadius": 80, "textAlign": "center", "lineHeight": 80, "fontSize": 35, "color": "#ffffff", "backgroundColor": "rgba(0,0,0,0.5)" } } };
const dom = weex.requireModule("dom");
function throttle(func, delay) {
  var prev = Date.now();
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}
function touchMove(e) {
  let pageY = e.touches[0].pageY;
  let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
  if (this.touchmoveIndex === index) {
    return false;
  }
  let item = this.lists[index];
  if (item) {
    dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
      animated: false
    });
    this.touchmoveIndex = index;
  }
}
const throttleTouchMove = throttle(touchMove, 40);
const _sfc_main$1 = {
  name: "UniIndexedList",
  components: {
    indexedListItem
  },
  emits: ["click"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    showSelect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lists: [],
      winHeight: 0,
      itemHeight: 0,
      winOffsetY: 0,
      touchmove: false,
      touchmoveIndex: -1,
      scrollViewId: "",
      touchmovable: true,
      loaded: false,
      isPC: false
    };
  },
  watch: {
    options: {
      handler: function() {
        this.setList();
      },
      deep: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.setList();
    }, 50);
    setTimeout(() => {
      this.loaded = true;
    }, 300);
  },
  methods: {
    setList() {
      this.lists = [];
      this.options.forEach((value, index) => {
        if (value.data.length === 0) {
          return;
        }
        let indexBefore = index;
        let items = value.data.map((item) => {
          let obj = {};
          obj["key"] = value.letter;
          obj["name"] = item;
          obj["itemIndex"] = index;
          index++;
          obj.checked = item.checked ? item.checked : false;
          return obj;
        });
        this.lists.push({
          title: value.letter,
          key: value.letter,
          items,
          itemIndex: indexBefore
        });
      });
      dom.getComponentRect(this.$refs["list"], (res) => {
        this.winOffsetY = res.size.top;
        this.winHeight = res.size.height;
        this.itemHeight = this.winHeight / this.lists.length;
      });
    },
    touchStart(e) {
      this.touchmove = true;
      let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
      let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
      let item = this.lists[index];
      if (item) {
        this.scrollViewId = "uni-indexed-list-" + index;
        this.touchmoveIndex = index;
        dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
          animated: false
        });
      }
    },
    touchMove(e) {
      throttleTouchMove.call(this, e);
    },
    touchEnd() {
      this.touchmove = false;
    },
    /**
     * 兼容 PC @tian
     */
    mousedown(e) {
      if (!this.isPC)
        return;
      this.touchStart(e);
    },
    mousemove(e) {
      if (!this.isPC)
        return;
      this.touchMove(e);
    },
    mouseleave(e) {
      if (!this.isPC)
        return;
      this.touchEnd(e);
    },
    onClick(e) {
      let {
        idx,
        index
      } = e;
      let obj = {};
      for (let key in this.lists[idx].items[index]) {
        obj[key] = this.lists[idx].items[index][key];
      }
      let select = [];
      if (this.showSelect) {
        this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked;
        this.lists.forEach((value, idx2) => {
          value.items.forEach((item, index2) => {
            if (item.checked) {
              let obj2 = {};
              for (let key in this.lists[idx2].items[index2]) {
                obj2[key] = this.lists[idx2].items[index2][key];
              }
              select.push(obj2);
            }
          });
        });
      }
      this.$emit("click", {
        item: obj,
        select
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_indexed_list_item = resolveComponent("indexed-list-item");
  return openBlock(), createElementBlock("view", {
    class: "uni-indexed-list",
    ref: "list",
    id: "list",
    renderWhole: true
  }, [
    createElementVNode("list", {
      class: "uni-indexed-list__scroll",
      scrollable: "true",
      showScrollbar: "false"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.lists, (list, idx) => {
        return openBlock(), createElementBlock("cell", {
          key: idx,
          ref_for: true,
          ref: "uni-indexed-list-" + idx
        }, [
          createVNode(_component_indexed_list_item, {
            list,
            loaded: $data.loaded,
            idx,
            showSelect: $props.showSelect,
            onItemClick: $options.onClick
          }, null, 8, ["list", "loaded", "idx", "showSelect", "onItemClick"])
        ]);
      }), 128))
    ]),
    createElementVNode("view", {
      class: "uni-indexed-list__menu",
      onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchStart && $options.touchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["stop", "prevent"])),
      onTouchend: _cache[2] || (_cache[2] = (...args) => $options.touchEnd && $options.touchEnd(...args)),
      onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
      onMousemove: _cache[4] || (_cache[4] = withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop", "prevent"])),
      onMouseleave: _cache[5] || (_cache[5] = withModifiers((...args) => $options.mouseleave && $options.mouseleave(...args), ["stop"]))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.lists, (list, key) => {
        return openBlock(), createElementBlock("view", {
          key,
          class: normalizeClass(["uni-indexed-list__menu-item", $data.touchmoveIndex == key ? "uni-indexed-list__menu--active" : ""])
        }, [
          createElementVNode("u-text", {
            class: normalizeClass(["uni-indexed-list__menu-text", $data.touchmoveIndex == key ? "uni-indexed-list__menu-text--active" : ""])
          }, toDisplayString(list.key), 3)
        ], 2);
      }), 128))
    ], 32),
    $data.touchmove ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-indexed-list__alert-wrapper"
    }, [
      createElementVNode("u-text", { class: "uni-indexed-list__alert" }, toDisplayString($data.lists[$data.touchmoveIndex].key), 1)
    ])) : createCommentVNode("", true)
  ], 512);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]]]);
const airport = {
  "list": [{
    "letter": "A",
    "data": [
      "阿克苏机场",
      "阿拉山口机场",
      "阿勒泰机场",
      "阿里昆莎机场",
      "安庆天柱山机场",
      "澳门国际机场"
    ]
  }, {
    "letter": "B",
    "data": [
      "保山机场",
      "包头机场",
      "北海福成机场",
      "北京南苑机场",
      "北京首都国际机场"
    ]
  }, {
    "letter": "C",
    "data": [
      "长白山机场",
      "长春龙嘉国际机场",
      "常德桃花源机场",
      "昌都邦达机场",
      "长沙黄花国际机场",
      "长治王村机场",
      "常州奔牛机场",
      "成都双流国际机场",
      "赤峰机场"
    ]
  }, {
    "letter": "D",
    "data": [
      "大理机场",
      "大连周水子国际机场",
      "大庆萨尔图机场",
      "大同东王庄机场",
      "达州河市机场",
      "丹东浪头机场",
      "德宏芒市机场",
      "迪庆香格里拉机场",
      "东营机场",
      "敦煌机场"
    ]
  }, {
    "letter": "E",
    "data": [
      "鄂尔多斯机场",
      "恩施许家坪机场",
      "二连浩特赛乌苏国际机场"
    ]
  }, {
    "letter": "F",
    "data": [
      "阜阳西关机场",
      "福州长乐国际机场"
    ]
  }, {
    "letter": "G",
    "data": [
      "赣州黄金机场",
      "格尔木机场",
      "固原六盘山机场",
      "广元盘龙机场",
      "广州白云国际机场",
      "桂林两江国际机场",
      "贵阳龙洞堡国际机场"
    ]
  }, {
    "letter": "H",
    "data": [
      "哈尔滨太平国际机场",
      "哈密机场",
      "海口美兰国际机场",
      "海拉尔东山国际机场",
      "邯郸机场",
      "汉中机场",
      "杭州萧山国际机场",
      "合肥骆岗国际机场",
      "和田机场",
      "黑河机场",
      "呼和浩特白塔国际机场",
      "淮安涟水机场",
      "黄山屯溪国际机场"
    ]
  }, {
    "letter": "I",
    "data": []
  }, {
    "letter": "J",
    "data": [
      "济南遥墙国际机场",
      "济宁曲阜机场",
      "鸡西兴凯湖机场",
      "佳木斯东郊机场",
      "嘉峪关机场",
      "锦州小岭子机场",
      "景德镇机场",
      "井冈山机场",
      "九江庐山机场",
      "九寨黄龙机场"
    ]
  }, {
    "letter": "K",
    "data": [
      "喀什机场",
      "克拉玛依机场",
      "库车龟兹机场",
      "库尔勒机场",
      "昆明巫家坝国际机场"
    ]
  }, {
    "letter": "L",
    "data": [
      "拉萨贡嘎机场",
      "兰州中川机场",
      "丽江三义机场",
      "黎平机场",
      "连云港白塔埠机场",
      "临沧机场",
      "临沂机场",
      "林芝米林机场",
      "柳州白莲机场",
      "龙岩冠豸山机场",
      "泸州蓝田机场",
      "洛阳北郊机场"
    ]
  }, {
    "letter": "M",
    "data": [
      "满洲里西郊机场",
      "绵阳南郊机场",
      "漠河古莲机场",
      "牡丹江海浪机场"
    ]
  }, {
    "letter": "N",
    "data": [
      "南昌昌北国际机场",
      "南充高坪机场",
      "南京禄口国际机场",
      "南宁吴圩机场",
      "南通兴东机场",
      "南阳姜营机场",
      "宁波栎社国际机场"
    ]
  }, {
    "letter": "O",
    "data": []
  }, {
    "letter": "P",
    "data": [
      "普洱思茅机场"
    ]
  }, {
    "letter": "Q",
    "data": [
      "齐齐哈尔三家子机场",
      "秦皇岛山海关机场",
      "青岛流亭国际机场",
      "衢州机场",
      "泉州晋江机场"
    ]
  }, {
    "letter": "R",
    "data": [
      "日喀则和平机场"
    ]
  }, {
    "letter": "S",
    "data": [
      "三亚凤凰国际机场",
      "汕头外砂机场",
      "上海虹桥国际机场",
      "上海浦东国际机场",
      "深圳宝安国际机场",
      "沈阳桃仙国际机场",
      "石家庄正定国际机场",
      "苏南硕放国际机场"
    ]
  }, {
    "letter": "T",
    "data": [
      "塔城机场",
      "太原武宿国际机场",
      "台州路桥机场 (黄岩机场)",
      "唐山三女河机场",
      "腾冲驼峰机场",
      "天津滨海国际机场",
      "通辽机场",
      "铜仁凤凰机场"
    ]
  }, {
    "letter": "U",
    "data": []
  }, {
    "letter": "V",
    "data": []
  }, {
    "letter": "W",
    "data": [
      "万州五桥机场",
      "潍坊机场",
      "威海大水泊机场",
      "文山普者黑机场",
      "温州永强国际机场",
      "乌海机场",
      "武汉天河国际机场",
      "乌兰浩特机场",
      "乌鲁木齐地窝堡国际机场",
      "武夷山机场",
      "梧州长洲岛机场"
    ]
  }, {
    "letter": "X",
    "data": [
      "西安咸阳国际机场",
      "西昌青山机场",
      "锡林浩特机场",
      "西宁曹家堡机场",
      "西双版纳嘎洒机场",
      "厦门高崎国际机场",
      "香港国际机场",
      "襄阳刘集机场",
      "兴义机场",
      "徐州观音机场"
    ]
  }, {
    "letter": "Y",
    "data": [
      "延安二十里堡机场",
      "盐城机场",
      "延吉朝阳川机场",
      "烟台莱山国际机场",
      "宜宾菜坝机场",
      "宜昌三峡机场",
      "伊春林都机场",
      "伊宁机场",
      "义乌机场",
      "银川河东机场",
      "永州零陵机场",
      "榆林榆阳机场",
      "玉树巴塘机场",
      "运城张孝机场"
    ]
  }, {
    "letter": "Z",
    "data": [
      "湛江机场",
      "昭通机场",
      "郑州新郑国际机场",
      "芷江机场",
      "重庆江北国际机场",
      "中卫香山机场",
      "舟山朱家尖机场",
      "珠海三灶机场"
    ]
  }]
};
const _sfc_main = {
  components: {},
  data() {
    return {
      list: airport.list
    };
  },
  methods: {
    bindClick(e) {
      formatAppLog("log", "at pages/extUI/indexed-list/indexed-list.nvue:16", "点击item，返回数据" + JSON.stringify(e));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_indexed_list = resolveEasycom(resolveDynamicComponent("uni-indexed-list"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_uni_indexed_list, {
      options: $data.list,
      "show-select": true,
      onClick: $options.bindClick
    }, null, 8, ["options", "onClick"])
  ]);
}
const indexedList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  indexedList as default
};
