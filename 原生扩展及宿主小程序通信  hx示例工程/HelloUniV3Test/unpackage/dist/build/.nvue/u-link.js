import { openBlock, createElementBlock, toDisplayString } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _sfc_main = {
  name: "u-link",
  props: {
    href: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    inWhiteList: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openURL() {
      plus.runtime.openURL(this.href);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", {
    style: { "text-decoration": "underline" },
    href: $props.href,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.openURL && $options.openURL(...args)),
    inWhiteList: $props.inWhiteList
  }, toDisplayString($props.text), 9, ["href", "inWhiteList"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __easycom_0 as _
};
