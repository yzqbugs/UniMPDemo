import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../uni-load-more.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-i18n.es.js";
const _style_0 = { "uni-list-item": { "": { "borderBottomStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#eeeeee", "fontSize": 14 } }, "uni-list-item__container": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#666666" } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      status: "more",
      statusTypes: [{
        value: "more",
        text: "加载前",
        checked: true
      }, {
        value: "loading",
        text: "加载中",
        checked: false
      }, {
        value: "noMore",
        text: "没有更多",
        checked: false
      }],
      contentText: {
        contentdown: "查看更多",
        contentrefresh: "加载中",
        contentnomore: "没有更多"
      }
    };
  },
  methods: {
    onChange(e) {
      this.status = e.detail.value;
    },
    clickLoadMore(e) {
      uni.showToast({
        icon: "none",
        title: "当前状态：" + e.detail.status
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0$1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_radio = resolveComponent("radio");
  const _component_radio_group = resolveComponent("radio-group");
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
          createElementVNode("u-text", { class: "uni-h6" }, "加载更多组件用于页面加载更多数据时，页面底部显示内容等场景")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基本用法",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, { status: $data.status }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "修改默认文字",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            status: $data.status,
            "content-text": $data.contentText
          }, null, 8, ["status", "content-text"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "改变颜色",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            color: "#007AFF",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "指定加载图标样式 - 按平台自动选择样式",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            iconType: "auto",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "指定加载图标样式 - 环形",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            iconType: "circle",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "改变组件状态",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_radio_group, {
            class: "uni-list",
            onChange: $options.onChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.statusTypes, (item, index) => {
                return openBlock(), createElementBlock("view", {
                  key: index,
                  class: "uni-list-item"
                }, [
                  createElementVNode("view", { class: "uni-list-item__container" }, [
                    createElementVNode("view", { class: "uni-list-item__content" }, [
                      createElementVNode("u-text", { class: "uni-list-item__content-title" }, toDisplayString(item.text), 1)
                    ]),
                    createElementVNode("view", { class: "uni-list-item__extra" }, [
                      createVNode(_component_radio, {
                        value: item.value,
                        checked: item.checked
                      }, null, 8, ["value", "checked"])
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      })
    ])
  ]);
}
const loadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  loadMore as default
};
