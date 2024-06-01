import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "box": { "": { "display": "flex", "flexDirection": "column", "fontSize": 14, "overflow": "hidden" } }, "item-box": { ".box ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "row", "height": 50, "overflow": "hidden" } }, "item": { ".box .item-box ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1, "height": 50 } }, "box-base": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "height": 50 } } };
const _sfc_main = {
  data() {
    return {};
  },
  computed: {},
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
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
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "主色",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5" }, [
            createElementVNode("view", { class: "box uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-primary-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "primary")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-primary-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-primary-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "辅助色",
        "sub-title": "除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5" }, [
            createElementVNode("view", { class: "box uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-success-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "success")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-success-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-success-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-warning-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "warning")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-warning-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-warning-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-error-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "error")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-error-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-error-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-info-bg uni-white" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "info")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-info-disable-bg uni-white" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-info-light-bg uni-white" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "中性色",
        "sub-title": "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-main-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "main-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-base-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "base-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-secondary-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "secondary-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-extra-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "extra-color")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "分隔线",
        "sub-title": "主要用于边框颜色",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-border-4-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color uni-white" }, "border-4")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-3-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color uni-white" }, "border-3")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-2-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "border-2")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-1-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "border-1")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "常规色",
        "sub-title": "通用颜色,如黑色白色",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-white-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "white")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-black-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "black")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-transparent-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "transparent")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-bg-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "bg-color")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "阴影",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-sm uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-sm")
          ]),
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-base uni-secondary-color uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-base")
          ]),
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-lg uni-secondary-color uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-lg")
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  color as default
};
