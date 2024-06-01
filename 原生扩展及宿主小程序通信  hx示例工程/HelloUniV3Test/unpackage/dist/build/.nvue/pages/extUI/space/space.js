import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-data-checkbox.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-cloud.es.js";
import "../../../uni-load-more.js";
import "../../../uni-i18n.es.js";
const _style_0 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 70, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
const _sfc_main = {
  data() {
    return {
      paddingClass: "uni-pa-5",
      marginClass: "uni-ma-5",
      formData: {
        margin: ["t", "r", "l", "b"],
        marginSize: "5",
        padding: ["t", "r", "l", "b"],
        paddingSize: "5"
      },
      directionData: [{
        value: "t",
        text: "上"
      }, {
        value: "r",
        text: "右"
      }, {
        value: "b",
        text: "下"
      }, {
        value: "l",
        text: "左"
      }],
      sizeData: [{
        value: "0",
        text: "0"
      }, {
        value: "2",
        text: "4px"
      }, {
        value: "5",
        text: "10px"
      }, {
        value: "10",
        text: "20px"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e, type) {
      let {
        margin,
        marginSize,
        padding,
        paddingSize
      } = this.formData;
      this.marginClass = "";
      this.paddingClass = "";
      margin.forEach((v) => {
        this.marginClass += `uni-m${v}-${marginSize} `;
      });
      padding.forEach((v) => {
        this.marginClass += `uni-p${v}-${paddingSize} `;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_data_checkbox = resolveEasycom(resolveDynamicComponent("uni-data-checkbox"), __easycom_1);
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
          createElementVNode("view", { class: "header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "使用间距辅助类对元素快速应用"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "margin"),
            createElementVNode("u-text", { class: "uni-h6" }, " 或 "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "padding"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-h6" }, "样式， 范围是从 0 到 16。")
          ]),
          createElementVNode("view", { class: "header uni-mt-5" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "规则为"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-${property}${direction}-${size}")
          ]),
          createElementVNode("view", { class: "uni-mt-5" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "各值的含义请参考文档")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "效果展示",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "margin" }, [
            createElementVNode("view", {
              class: normalizeClass(["margin-item uni-border-4-bg", [$data.paddingClass, $data.marginClass]])
            }, [
              createElementVNode("view", { class: "box uni-primary-bg" }, [
                createElementVNode("u-text", { class: "uni-white uni-body" }, "通过下面的选项控制边距")
              ])
            ], 2)
          ]),
          createElementVNode("view", { class: "actions uni-mt-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "外边距"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.margin,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.margin = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "外边距大小"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.marginSize,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.marginSize = $event),
              localdata: $data.sizeData,
              onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions" }, [
            createElementVNode("u-text", { class: "action-label" }, "内边距"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.padding,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.padding = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[5] || (_cache[5] = ($event) => $options.change($event, 2))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "内边距大小"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.paddingSize,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.formData.paddingSize = $event),
              localdata: $data.sizeData,
              onChange: _cache[7] || (_cache[7] = ($event) => $options.change($event, 3))
            }, null, 8, ["modelValue", "localdata"])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const space = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  space as default
};
