import { openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, normalizeStyle, toDisplayString, createCommentVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
const _sfc_main = {
  name: "UniSection",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    titleFontSize: {
      type: String,
      default: "14px"
    },
    titleColor: {
      type: String,
      default: "#333"
    },
    subTitle: {
      type: String,
      default: ""
    },
    subTitleFontSize: {
      type: String,
      default: "12px"
    },
    subTitleColor: {
      type: String,
      default: "#999"
    },
    padding: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    _padding() {
      if (typeof this.padding === "string") {
        return this.padding;
      }
      return this.padding ? "10px" : "";
    }
  },
  watch: {
    title(newVal) {
      if (uni.report && newVal !== "") {
        uni.report("title", newVal);
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-section",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-section-header",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.type ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["uni-section-header__decoration", $props.type])
      }, null, 2)) : renderSlot(_ctx.$slots, "decoration", { key: 1 }),
      createElementVNode("view", { class: "uni-section-header__content" }, [
        createElementVNode("u-text", {
          style: normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
          class: normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
        }, toDisplayString($props.title), 7),
        $props.subTitle ? (openBlock(), createElementBlock("u-text", {
          key: 0,
          style: normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
          class: "uni-section-header__content-sub"
        }, toDisplayString($props.subTitle), 5)) : createCommentVNode("", true)
      ]),
      createElementVNode("view", { class: "uni-section-header__slot-right" }, [
        renderSlot(_ctx.$slots, "right")
      ])
    ]),
    createElementVNode("view", {
      class: "uni-section-content",
      style: normalizeStyle({ padding: $options._padding })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
