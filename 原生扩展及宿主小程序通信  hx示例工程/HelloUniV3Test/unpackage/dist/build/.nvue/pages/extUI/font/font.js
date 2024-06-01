import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main = {};
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
          createElementVNode("u-text", { class: "uni-h6" }, "字体辅助样式提供了常见的字体样式类")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h1",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h1" }, "一级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h2",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h2" }, "二级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h3",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h3" }, "三级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h4",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h4" }, "四级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h5",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h5" }, "五级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-h6",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "六级标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-subtitle",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-subtitle" }, "副标题")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-body",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-body" }, "uni-ui 是 DCloud 官方面向 uni-app 开发者提供的一套 ui 解决方案")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: ".uni-caption",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
            createElementVNode("u-text", { class: "uni-caption" }, "标注说明文字")
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const font = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  font as default
};
