import { openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "content": { "": { "textAlign": "center", "height": "400rpx" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx" } }, "title": { "": { "fontSize": "36rpx", "color": "#8f8f94" } }, "text": { "": { "color": "#4CD964", "fontFamily": "unincomponents" } }, "video": { "": { "width": "750rpx", "height": "400rpx", "backgroundColor": "#808080" } }, "coverview": { "": { "position": "absolute", "left": 0, "right": 0, "top": "0rpx", "height": "150rpx", "borderWidth": "10rpx", "borderColor": "#4CD964" } } };
const _sfc_main = {
  data() {
    return {
      title: "cover-view",
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", null, [
      createElementVNode("u-video", {
        ref: "video",
        id: "myVideo",
        class: "video",
        src: $data.src,
        controls: "true"
      }, [
        createElementVNode("u-scalable", { style: { position: "absolute", left: "0", right: "0", top: "0", bottom: "0" } }, [
          createElementVNode("cover-view", {
            class: "coverview",
            style: { "overflow-y": "scroll" }
          }, [
            createElementVNode("u-text", { class: "text" }, toDisplayString(" 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view 我是可以滚动的cover-view"))
          ])
        ])
      ], 8, ["src"])
    ])
  ]);
}
const coverView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  coverView as default
};
