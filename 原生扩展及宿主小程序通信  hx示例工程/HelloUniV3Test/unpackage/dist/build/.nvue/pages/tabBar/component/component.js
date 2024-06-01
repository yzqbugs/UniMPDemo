import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
var domModule = weex.requireModule("dom");
domModule.addRule("fontFace", {
  "fontFamily": "uniicons",
  "src": "url('/static/uni.ttf')"
});
const _sfc_main = {
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    return {
      list: [
        {
          id: "view",
          name: "视图容器",
          open: false,
          pages: [
            "view",
            "scroll-view",
            "swiper",
            "movable-view",
            "cover-view"
          ]
        },
        {
          id: "content",
          name: "基础内容",
          open: false,
          pages: ["text", "rich-text", "progress"]
        },
        {
          id: "form",
          name: "表单组件",
          open: false,
          pages: [
            "button",
            "checkbox",
            "form",
            "input",
            "label",
            "picker",
            "picker-view",
            "radio",
            "slider",
            "switch",
            "textarea",
            "editor"
          ]
        },
        {
          id: "nav",
          name: "导航",
          open: false,
          pages: ["navigator"]
        },
        {
          id: "media",
          name: "媒体组件",
          open: false,
          pages: [
            "image",
            "video"
          ]
        },
        {
          id: "map",
          name: "地图",
          open: false,
          pages: ["map"]
        },
        {
          id: "canvas",
          name: "画布",
          open: false,
          pages: ["canvas"]
        },
        {
          id: "web-view",
          name: "网页",
          open: false,
          pages: [{
            name: "网络网页",
            url: "/pages/component/web-view/web-view"
          }, {
            name: "本地网页",
            url: "/pages/component/web-view-local/web-view-local"
          }]
        },
        {
          id: "ad",
          url: "ad",
          name: "AD组件",
          open: false
        }
      ]
    };
  },
  onShareAppMessage() {
    return {
      title: "欢迎体验uni-app",
      path: "/pages/tabBar/component/component"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  methods: {
    triggerCollapse(e, id) {
      if (!this.list[e].pages) {
        this.goDetailPage("", this.list[e].url);
        return;
      }
      for (var i = 0; i < this.list.length; ++i) {
        if (e === i) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    },
    goDetailPage(panel, e) {
      if (typeof e === "string") {
        const url = "/pages/component/" + e + "/" + e;
        if (this.hasLeftWin) {
          uni.reLaunch({
            url
          });
        } else {
          uni.navigateTo({
            url
          });
        }
      } else {
        if (this.hasLeftWin) {
          uni.reLaunch({
            url: e.url
          });
        } else {
          uni.navigateTo({
            url: e.url
          });
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-header-logo"
      }, [
        createElementVNode("u-image", {
          class: "uni-header-image",
          src: "/static/componentIndex.png"
        })
      ])) : createCommentVNode("", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "uni-app内置组件，展示样式仅供参考，文档详见："),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://uniapp.dcloud.io/component/",
          text: "https://uniapp.dcloud.io/component/",
          inWhiteList: true
        }, null, 8, ["href", "text"])
      ])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
        return openBlock(), createElementBlock("view", {
          class: "uni-panel",
          key: item.id
        }, [
          createElementVNode("view", {
            class: normalizeClass(["uni-panel-h", item.open ? "uni-panel-h-on" : ""]),
            onClick: ($event) => $options.triggerCollapse(index, item.id)
          }, [
            createElementVNode("u-text", { class: "uni-panel-text" }, toDisplayString(item.name), 1),
            createElementVNode("u-text", {
              class: normalizeClass(["uni-panel-icon uni-icon", item.open ? "uni-panel-icon-on" : ""])
            }, toDisplayString(item.pages ? "" : ""), 3)
          ], 10, ["onClick"]),
          item.open ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "uni-panel-c"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.pages, (item2, key) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass([{ "left-win-active": $props.leftWinActive === (item2.url ? item2.url.split("/")[3] : item2) && $props.hasLeftWin }, "uni-navigate-item"]),
                key,
                onClick: ($event) => $options.goDetailPage(item.id, item2)
              }, [
                createElementVNode("u-text", { class: "uni-navigate-text" }, toDisplayString(item2.name ? item2.name : item2), 1),
                createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "")
              ], 10, ["onClick"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ]);
      }), 128))
    ])
  ]);
}
const component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  component as default
};
