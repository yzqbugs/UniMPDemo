import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-data-checkbox.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-cloud.es.js";
import "../../../uni-load-more.js";
import "../../../uni-i18n.es.js";
const _style_0 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 50, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
const _sfc_main = {
  data() {
    return {
      radiusClass: "uni-radius-lg",
      formData: {
        direction: ["t", "b"],
        size: "lg"
      },
      directionData: [{
        value: "t",
        text: "左上+右上"
      }, {
        value: "r",
        text: "右上+右下"
      }, {
        value: "b",
        text: "左下+右下"
      }, {
        value: "l",
        text: "右上+左下"
      }, {
        value: "tl",
        text: "左上"
      }, {
        value: "tr",
        text: "右上"
      }, {
        value: "bl",
        text: "左下"
      }, {
        value: "br",
        text: "右下"
      }],
      sizeData: [{
        value: "0",
        text: "无"
      }, {
        value: "sm",
        text: "小"
      }, {
        value: "lg",
        text: "常规"
      }, {
        value: "xl",
        text: "大"
      }, {
        value: "circle",
        text: "圆"
      }, {
        value: "pill",
        text: "最大化"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e, type) {
      let {
        direction,
        size
      } = this.formData;
      this.radiusClass = "";
      direction.forEach((v) => {
        this.radiusClass += `uni-radius-${v}-${size} `;
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
            createElementVNode("u-text", { class: "uni-h6" }, "使用边框半径辅助样式对元素快速应用"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "border-radius"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-h6" }, "样式。")
          ]),
          createElementVNode("view", { class: "uni-mt-5 header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "规则为"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-radius-${direction}-${size}")
          ]),
          createElementVNode("view", { class: "uni-mt-5 header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "如果需要四边，则不需要指定"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "direction")
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
              class: normalizeClass(["box uni-primary-bg uni-ma-5", [$data.radiusClass]])
            }, [
              createElementVNode("u-text", { class: "uni-white" }, "通过下面的选项控制圆角")
            ], 2)
          ]),
          createElementVNode("view", { class: "actions uni-mt-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "位置"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.direction,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.direction = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "大小"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.size,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.size = $event),
              localdata: $data.sizeData,
              onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 2))
            }, null, 8, ["modelValue", "localdata"])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const radius = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  radius as default
};
