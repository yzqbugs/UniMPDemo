import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
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
      hideList: [
        "ucharts",
        "nav-city-dropdown"
      ],
      list: [
        {
          id: "navbar",
          name: "顶部原生导航标题栏",
          open: false,
          pages: [
            {
              name: "导航栏带自定义按钮",
              url: "nav-button"
            },
            {
              name: "导航栏带红点和角标",
              url: "nav-dot"
            },
            {
              name: "导航栏带城市选择",
              url: "nav-city-dropdown"
            },
            {
              name: "导航栏带搜索框",
              url: "nav-search-input"
            },
            {
              name: "透明渐变样式",
              url: "nav-transparent"
            },
            {
              name: "导航栏带图片",
              url: "nav-image"
            }
          ]
        },
        {
          name: "顶部选项卡",
          url: "tabbar"
        },
        {
          name: "组件通讯",
          url: "component-communication"
        },
        // {
        // 	name: 'uCharts 图表',
        // 	url: 'ucharts'
        // },
        {
          name: "列表到详情示例",
          url: "list2detail-list"
        },
        {
          name: "swiper-list",
          url: "swiper-list-nvue"
        },
        {
          name: "GlobalData和vuex",
          url: "global"
        },
        {
          name: "问题反馈",
          url: "/platforms/app-plus/feedback/feedback"
        },
        {
          name: "打开外部应用",
          url: "scheme"
        }
        // {
        // 	name: '微信自定义组件示例（vant ui）',
        // 	url: 'vant-button'
        // }
      ]
    };
  },
  onShareAppMessage() {
    return {
      title: "欢迎体验uni-app",
      path: "/pages/tabBar/template/template"
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
        this.goDetailPage(this.list[e].url);
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
    goDetailPage(e) {
      let path = e.url ? e.url : e;
      let url = ~path.indexOf("platform") ? path : "/pages/template/" + path + "/" + path;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
      return false;
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
          src: "/static/templateIndex.png"
        })
      ])) : createCommentVNode("", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "以下是部分模板示例，更多模板见插件市场："),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://ext.dcloud.net.cn",
          text: "https://ext.dcloud.net.cn",
          inWhiteList: true
        }, null, 8, ["text"])
      ])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
          key: item.id
        }, [
          createElementVNode("view", {
            class: normalizeClass([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin, "uni-panel-h-on": item.open }, "uni-panel-h"]),
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
                class: normalizeClass([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": $data.hideList.indexOf(item2.url) !== -1 && $props.hasLeftWin }, "uni-navigate-item"]),
                key,
                onClick: ($event) => $options.goDetailPage(item2)
              }, [
                createElementVNode("u-text", { class: "uni-navigate-text" }, toDisplayString(item2.name ? item2.name : item2), 1),
                createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "")
              ], 10, ["onClick"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ], 2);
      }), 128))
    ])
  ]);
}
const template = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  template as default
};
