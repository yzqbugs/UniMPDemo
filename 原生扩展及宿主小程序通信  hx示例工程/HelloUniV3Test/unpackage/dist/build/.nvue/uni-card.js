import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, createCommentVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
const _sfc_main = {
  name: "UniCard",
  emits: ["click"],
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: "10px"
    },
    margin: {
      type: String,
      default: "15px"
    },
    spacing: {
      type: String,
      default: "0 10px"
    },
    extra: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: ""
    },
    isFull: {
      // 内容区域是否通栏
      type: Boolean,
      default: false
    },
    isShadow: {
      // 是否开启阴影
      type: Boolean,
      default: true
    },
    shadow: {
      type: String,
      default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(type) {
      this.$emit("click", type);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
    style: normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "cover", {}, () => [
      $props.cover ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__cover"
      }, [
        createElementVNode("u-image", {
          class: "uni-card__cover-image",
          mode: "widthFix",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
          src: $props.cover
        }, null, 8, ["src"])
      ])) : createCommentVNode("", true)
    ]),
    renderSlot(_ctx.$slots, "title", {}, () => [
      $props.title || $props.extra ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-card__header"
      }, [
        createElementVNode("view", {
          class: "uni-card__header-box",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
        }, [
          $props.thumbnail ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-card__header-avatar"
          }, [
            createElementVNode("u-image", {
              class: "uni-card__header-avatar-image",
              src: $props.thumbnail,
              mode: "aspectFit"
            }, null, 8, ["src"])
          ])) : createCommentVNode("", true),
          createElementVNode("view", { class: "uni-card__header-content" }, [
            createElementVNode("u-text", { class: "uni-card__header-content-title uni-ellipsis" }, toDisplayString($props.title), 1),
            $props.title && $props.subTitle ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-card__header-content-subtitle uni-ellipsis"
            }, toDisplayString($props.subTitle), 1)) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("view", {
          class: "uni-card__header-extra",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
        }, [
          createElementVNode("u-text", { class: "uni-card__header-extra-text" }, toDisplayString($props.extra), 1)
        ])
      ])) : createCommentVNode("", true)
    ]),
    createElementVNode("view", {
      class: "uni-card__content",
      style: normalizeStyle({ padding: $props.padding }),
      onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4),
    createElementVNode("view", {
      class: "uni-card__actions",
      onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
    }, [
      renderSlot(_ctx.$slots, "actions")
    ])
  ], 6);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
