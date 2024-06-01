import { a as requireNativePlugin, r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle, withModifiers, createVNode, withCtx } from "vue";
import { _ as __easycom_1$1 } from "../../../uni-icons.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const _style_0 = { "uni-rate": { "": { "lineHeight": 1, "fontSize": 0, "flexDirection": "row" } }, "uni-rate__icon": { "": { "position": "relative", "lineHeight": 1, "fontSize": 0 } }, "uni-rate__icon-on": { "": { "overflow": "hidden", "position": "absolute", "top": 0, "left": 0, "lineHeight": 1, "textAlign": "left" } } };
const dom = requireNativePlugin("dom");
const _sfc_main$1 = {
  name: "UniRate",
  props: {
    isFill: {
      // 星星的类型，是否镂空
      type: [Boolean, String],
      default: true
    },
    color: {
      // 星星未选中的颜色
      type: String,
      default: "#ececec"
    },
    activeColor: {
      // 星星选中状态颜色
      type: String,
      default: "#ffca3e"
    },
    disabledColor: {
      // 星星禁用状态颜色
      type: String,
      default: "#c0c0c0"
    },
    size: {
      // 星星的大小
      type: [Number, String],
      default: 24
    },
    value: {
      // 当前评分
      type: [Number, String],
      default: 0
    },
    modelValue: {
      // 当前评分
      type: [Number, String],
      default: 0
    },
    max: {
      // 最大评分
      type: [Number, String],
      default: 5
    },
    margin: {
      // 星星的间距
      type: [Number, String],
      default: 0
    },
    disabled: {
      // 是否可点击
      type: [Boolean, String],
      default: false
    },
    readonly: {
      // 是否只读
      type: [Boolean, String],
      default: false
    },
    allowHalf: {
      // 是否显示半星
      type: [Boolean, String],
      default: false
    },
    touchable: {
      // 是否支持滑动手势
      type: [Boolean, String],
      default: true
    }
  },
  data() {
    return {
      valueSync: "",
      userMouseFristMove: true,
      userRated: false,
      userLastRate: 1
    };
  },
  watch: {
    value(newVal) {
      this.valueSync = Number(newVal);
    },
    modelValue(newVal) {
      this.valueSync = Number(newVal);
    }
  },
  computed: {
    stars() {
      const value = this.valueSync ? this.valueSync : 0;
      const starList = [];
      const floorValue = Math.floor(value);
      const ceilValue = Math.ceil(value);
      for (let i = 0; i < this.max; i++) {
        if (floorValue > i) {
          starList.push({
            activeWitch: "100%"
          });
        } else if (ceilValue - 1 === i) {
          starList.push({
            activeWitch: (value - floorValue) * 100 + "%"
          });
        } else {
          starList.push({
            activeWitch: "0"
          });
        }
      }
      return starList;
    },
    marginNumber() {
      return Number(this.margin);
    }
  },
  created() {
    this.valueSync = Number(this.value || this.modelValue);
    this._rateBoxLeft = 0;
    this._oldValue = null;
  },
  mounted() {
    setTimeout(() => {
      this._getSize();
    }, 100);
  },
  methods: {
    touchstart(e) {
      if (this.readonly || this.disabled)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateCount(clientX || screenX);
    },
    touchmove(e) {
      if (this.readonly || this.disabled || !this.touchable)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateCount(clientX || screenX);
    },
    /**
     * 兼容 PC @tian
     */
    mousedown(e) {
    },
    mousemove(e) {
    },
    mouseleave(e) {
    },
    /**
     * 获取星星个数
     */
    _getRateCount(clientX) {
      this._getSize();
      const size = Number(this.size);
      if (isNaN(size)) {
        return new Error("size 属性只能设置为数字");
      }
      const rateMoveRange = clientX - this._rateBoxLeft;
      let index = parseInt(rateMoveRange / (size + this.marginNumber));
      index = index < 0 ? 0 : index;
      index = index > this.max ? this.max : index;
      const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
      let value = 0;
      if (this._oldValue === index && !this.PC)
        return;
      this._oldValue = index;
      if (this.allowHalf) {
        if (range > size / 2) {
          value = index + 1;
        } else {
          value = index + 0.5;
        }
      } else {
        value = index + 1;
      }
      value = Math.max(0.5, Math.min(value, this.max));
      this.valueSync = value;
      this._onChange();
    },
    /**
     * 触发动态修改
     */
    _onChange() {
      this.$emit("input", this.valueSync);
      this.$emit("update:modelValue", this.valueSync);
      this.$emit("change", {
        value: this.valueSync
      });
    },
    /**
     * 获取星星距离屏幕左侧距离
     */
    _getSize() {
      dom.getComponentRect(this.$refs["uni-rate"], (ret) => {
        const size = ret.size;
        if (size) {
          this._rateBoxLeft = size.left;
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  return openBlock(), createElementBlock("view", { renderWhole: true }, [
    createElementVNode("view", {
      ref: "uni-rate",
      class: "uni-rate"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.stars, (star, index) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
          style: normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
          key: index,
          onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
          onTouchmove: _cache[1] || (_cache[1] = withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
          onMousedown: _cache[2] || (_cache[2] = withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
          onMousemove: _cache[3] || (_cache[3] = withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
          onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
        }, [
          createVNode(_component_uni_icons, {
            color: $props.color,
            size: $props.size,
            type: $props.isFill ? "star-filled" : "star"
          }, null, 8, ["color", "size", "type"]),
          createElementVNode("view", {
            style: normalizeStyle({ width: star.activeWitch.replace("%", "") * $props.size / 100 + "px" }),
            class: "uni-rate__icon-on"
          }, [
            createVNode(_component_uni_icons, {
              style: { "text-align": "left" },
              color: $props.disabled ? "#ccc" : $props.activeColor,
              size: $props.size,
              type: "star-filled"
            }, null, 8, ["color", "size"])
          ], 4)
        ], 38);
      }), 128))
    ], 512)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      rateValue: 0
    };
  },
  onLoad() {
    setTimeout(() => {
      this.rateValue = 3;
    }, 1e3);
  },
  methods: {
    onChange(e) {
      formatAppLog("log", "at pages/extUI/rate/rate.nvue:55", "rate发生改变:" + JSON.stringify(e));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_rate = resolveEasycom(resolveDynamicComponent("uni-rate"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, {
        "is-full": "",
        "is-shadow": false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基本用法",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            modelValue: $data.rateValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.rateValue = $event),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "不支持滑动手势选择评分",
        subTitle: "设置 touchable 属性控制是否开启手势选择",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            touchable: false,
            value: 5,
            onChange: $options.onChange
          }, null, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "设置尺寸大小",
        subTitle: "设置 size 属性控制组件大小",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            size: "18",
            value: 5
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "设置评分数",
        subTitle: "设置 max 属性控制组件最大星星数量",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            max: 10,
            value: 5
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "设置星星间隔",
        subTitle: "设置 margin 属性控制星星间隔",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 4,
            margin: "20"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "设置颜色",
        subTitle: "使用 color 属性设置星星颜色",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 3,
            color: "#bbb",
            "active-color": "red"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "半星",
        subTitle: "使用 allow-half 属性设置是否显示半星",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            "allow-half": "",
            value: 3.5
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "只读状态",
        subTitle: "使用 readonly 属性设置组件只读",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            readonly: true,
            value: 2
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "禁用状态",
        subTitle: "使用 disabled 属性设置组件禁用",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            disabled: true,
            disabledColor: "#ccc",
            value: 3
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "未选中的星星为镂空状态",
        subTitle: "使用 is-fill 属性设置星星镂空",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 3,
            "is-fill": false
          })
        ]),
        _: 1
      })
    ])
  ]);
}
const rate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  rate as default
};
