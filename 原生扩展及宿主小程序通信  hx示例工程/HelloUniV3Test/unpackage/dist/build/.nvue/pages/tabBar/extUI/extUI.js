import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
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
        "load-more"
      ],
      lists: [
        {
          name: "uni-badge 数字角标",
          url: "badge"
        },
        {
          name: "uni-breadcrumb 面包屑",
          url: "breadcrumb"
        },
        // {
        // 	name: "uni-calendar 日历",
        // 	url: "calendar"
        // },
        {
          name: "uni-card 卡片",
          url: "card"
        },
        {
          name: "uni-collapse 折叠面板",
          url: "collapse"
        },
        {
          name: "uni-countdown 倒计时",
          url: "countdown"
        },
        {
          name: "uni-data-checkbox 数据选择器",
          url: "data-checkbox"
        },
        {
          name: "uni-data-picker 数据驱动的picker选择器",
          url: "data-picker"
        },
        {
          name: "uni-data-select 数据驱动的下拉框",
          url: "data-select"
        },
        {
          name: "uni-dateformat 日期格式化",
          url: "dateformat"
        },
        {
          name: "uni-datetime-picker 日期选择器",
          url: "datetime-picker"
        },
        {
          name: "uni-drawer 抽屉",
          url: "drawer"
        },
        {
          name: "uni-easyinput 增强输入框",
          url: "easyinput"
        },
        {
          name: "uni-fab 悬浮按钮",
          url: "fab"
        },
        {
          name: "uni-fav 收藏按钮",
          url: "fav"
        },
        {
          name: "uni-forms 表单",
          url: "forms"
        },
        {
          name: "uni-goods-nav 商品导航",
          url: "goods-nav"
        },
        {
          name: "uni-grid 宫格",
          url: "grid"
        },
        {
          name: "uni-group 分组",
          url: "group"
        },
        {
          name: "uni-icons 图标",
          url: "icons"
        },
        {
          name: "uni-indexed-list 索引列表",
          url: "indexed-list"
        },
        {
          name: "uni-link 超链接",
          url: "link"
        },
        {
          name: "uni-list 列表",
          url: "list"
        },
        {
          name: "uni-load-more 加载更多",
          url: "load-more"
        },
        {
          name: "uni-nav-bar 自定义导航栏",
          url: "nav-bar"
        },
        {
          name: "uni-notice-bar 通告栏",
          url: "notice-bar"
        },
        {
          name: "uni-number-box 数字输入框",
          url: "number-box"
        },
        {
          name: "uni-pagination 分页器",
          url: "pagination"
        },
        {
          name: "uni-popup 弹出层",
          url: "popup"
        },
        {
          name: "uni-rate 评分",
          url: "rate"
        },
        {
          name: "uni-row 布局-行",
          url: "row"
        },
        {
          name: "uni-search-bar 搜索栏",
          url: "search-bar"
        },
        {
          name: "uni-section 标题栏",
          url: "section"
        },
        {
          name: "uni-segmented-control 分段器",
          url: "segmented-control"
        },
        {
          name: "uni-steps 步骤条",
          url: "steps"
        },
        {
          name: "uni-swipe-action 滑动操作",
          url: "swipe-action"
        },
        {
          name: "uni-swiper-dot 轮播图指示点",
          url: "swiper-dot"
        },
        {
          name: "uni-tag 标签",
          url: "tag"
        },
        {
          name: "uni-title 章节标题",
          url: "title"
        },
        {
          name: "uni-tooltip 文字提示",
          url: "tooltip"
        },
        {
          name: "uni-transition 过渡动画",
          url: "transition"
        }
      ]
    };
  },
  onLoad() {
  },
  onReady() {
    uni.preloadPage({
      url: "/pages/extUI/calendar/calendar",
      success() {
        formatAppLog("log", "at pages/tabBar/extUI/extUI.nvue:230", "preloadPage /pages/extUI/calendar/calendar");
      },
      fail() {
      }
    });
  },
  onShareAppMessage() {
    return {
      title: "欢迎体验uni-app",
      path: "/pages/tabBar/extUI/extUI"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  methods: {
    goDetailPage(path) {
      const url = "/pages/extUI/" + path + "/" + path;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
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
          src: "/static/extuiIndex.png"
        })
      ])) : createCommentVNode("", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "以下是uni-app扩展组件示例，更多组件见插件市场："),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://ext.dcloud.net.cn/",
          text: "https://ext.dcloud.net.cn",
          inWhiteList: true
        }, null, 8, ["href", "text"])
      ])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.lists, (item) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
          key: item.url
        }, [
          createElementVNode("view", {
            class: normalizeClass([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin }, "uni-panel-h"]),
            onClick: ($event) => $options.goDetailPage(item.url)
          }, [
            createElementVNode("u-text", { class: "uni-panel-text" }, toDisplayString(item.name), 1),
            createElementVNode("u-text", { class: "uni-panel-icon uni-icon" }, "")
          ], 10, ["onClick"])
        ], 2);
      }), 128))
    ])
  ]);
}
const extUI = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  extUI as default
};
