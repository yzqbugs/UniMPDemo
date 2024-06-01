import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const _style_0 = { "uni-numbox": { "": { "flexDirection": "row" } }, "uni-numbox-btns": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "backgroundColor": "#f5f5f5" } }, "uni-numbox__value": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "backgroundColor": "#f5f5f5", "width": 40, "height": 26, "textAlign": "center", "fontSize": 14, "borderLeftWidth": 0, "borderRightWidth": 0, "color": "#333333" } }, "uni-numbox__minus": { "": { "borderTopLeftRadius": 2, "borderBottomLeftRadius": 2 } }, "uni-numbox__plus": { "": { "borderTopRightRadius": 2, "borderBottomRightRadius": 2 } }, "uni-numbox--text": { "": { "lineHeight": 20, "fontSize": 20, "fontWeight": "300", "color": "#333333" } }, "uni-numbox--disabled": { ".uni-numbox ": { "!color": "#c0c0c0" } } };
const _sfc_main$1 = {
  name: "UniNumberBox",
  emits: ["change", "input", "update:modelValue", "blur", "focus"],
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: "#f5f5f5"
    },
    color: {
      type: String,
      default: "#333"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: 0
    };
  },
  watch: {
    value(val) {
      this.inputValue = +val;
    },
    modelValue(val) {
      this.inputValue = +val;
    }
  },
  created() {
    if (this.value === 1) {
      this.inputValue = +this.modelValue;
    }
    if (this.modelValue === 1) {
      this.inputValue = +this.value;
    }
  },
  methods: {
    _calcValue(type) {
      if (this.disabled) {
        return;
      }
      const scale = this._getDecimalScale();
      let value = this.inputValue * scale;
      let step = this.step * scale;
      if (type === "minus") {
        value -= step;
        if (value < this.min * scale) {
          return;
        }
        if (value > this.max * scale) {
          value = this.max * scale;
        }
      }
      if (type === "plus") {
        value += step;
        if (value > this.max * scale) {
          return;
        }
        if (value < this.min * scale) {
          value = this.min * scale;
        }
      }
      this.inputValue = (value / scale).toFixed(String(scale).length - 1);
      this.$emit("change", +this.inputValue);
      this.$emit("input", +this.inputValue);
      this.$emit("update:modelValue", +this.inputValue);
    },
    _getDecimalScale() {
      let scale = 1;
      if (~~this.step !== this.step) {
        scale = Math.pow(10, String(this.step).split(".")[1].length);
      }
      return scale;
    },
    _onBlur(event) {
      this.$emit("blur", event);
      let value = event.detail.value;
      if (!value) {
        return;
      }
      value = +value;
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
      const scale = this._getDecimalScale();
      this.inputValue = value.toFixed(String(scale).length - 1);
      this.$emit("change", +this.inputValue);
      this.$emit("input", +this.inputValue);
    },
    _onFocus(event) {
      this.$emit("focus", event);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-numbox",
    renderWhole: true
  }, [
    createElementVNode("view", {
      onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
      class: "uni-numbox__minus uni-numbox-btns",
      style: normalizeStyle({ background: $props.background })
    }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
        style: normalizeStyle({ color: $props.color })
      }, "-", 6)
    ], 4),
    createElementVNode("u-input", {
      disabled: $props.disabled,
      onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
      onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
      class: "uni-numbox__value",
      type: "number",
      modelValue: $data.inputValue,
      onInput: _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event.detail.value),
      style: normalizeStyle({ background: $props.background, color: $props.color })
    }, null, 44, ["disabled", "modelValue"]),
    createElementVNode("view", {
      onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
      class: "uni-numbox__plus uni-numbox-btns",
      style: normalizeStyle({ background: $props.background })
    }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
        style: normalizeStyle({ color: $props.color })
      }, "+", 6)
    ], 4)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      numberValue: 0,
      vModelValue: 3
    };
  },
  methods: {
    change(value) {
      this.numberValue = value;
    },
    changeValue(value) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:43", "返回数值：", value);
    },
    blur(e) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:46", "-------blur:", e);
    },
    focus(e) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:49", "-------focus:", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_number_box = resolveEasycom(resolveDynamicComponent("uni-number-box"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "page" }, [
      createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "数字输入框组件多用于购物车加减商品等场景")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基本用法",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, { onChange: $options.changeValue }, null, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "使用v-model : " + $data.vModelValue,
        subTitle: "使用 v-model 显示默认值",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            modelValue: $data.vModelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.vModelValue = $event),
            onBlur: $options.blur,
            onFocus: $options.focus,
            onChange: $options.changeValue
          }, null, 8, ["modelValue", "onBlur", "onFocus", "onChange"])
        ]),
        _: 1
      }, 8, ["title"]),
      createVNode(_component_uni_section, {
        title: "设置最小值和最大值",
        subTitle: "使用 min \\ max 属性设置最大最小值",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            min: 2,
            max: 9,
            value: 555
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "设置步长（步长0.1)",
        subTitle: "使用 step 属性设置步长",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: 1.1,
            step: 0.1
          }, null, 8, ["value", "step"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义背景",
        type: "line",
        subTitle: "使用 background 属性设置自定义背景色",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: 50,
            background: "#2979FF",
            color: "#fff"
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
          createVNode(_component_uni_number_box, { disabled: true })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "获取输入的值 : " + $data.numberValue,
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: $data.numberValue,
            onChange: $options.change
          }, null, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 8, ["title"])
    ])
  ]);
}
const numberBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  numberBox as default
};
