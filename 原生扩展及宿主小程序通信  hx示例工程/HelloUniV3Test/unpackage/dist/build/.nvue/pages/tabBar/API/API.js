import { _ as __easycom_0$1 } from "../../../u-link.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createVNode, withCtx, createTextVNode, createBlock, Fragment, createCommentVNode, renderList, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _sfc_main$2 = {
  name: "page-head",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "common-page-head",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "common-page-head-title" }, [
      createElementVNode("u-text", null, toDisplayString($props.title), 1)
    ])
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _style_0$1 = { "button": { "": { "marginTop": "30rpx", "marginLeft": 0, "marginRight": 0 } }, "btn-area": { "": { "paddingTop": "30rpx" } } };
const _sfc_main$1 = {
  data() {
    return {
      title: "tababr",
      hasSetTabBarBadge: false,
      hasShownTabBarRedDot: false,
      hasCustomedStyle: false,
      hasCustomedItem: false,
      hasHiddenTabBar: false
    };
  },
  destroyed() {
    if (this.hasSetTabBarBadge) {
      uni.removeTabBarBadge({
        index: 1
      });
    }
    if (this.hasShownTabBarRedDot) {
      uni.hideTabBarRedDot({
        index: 1
      });
    }
    if (this.hasHiddenTabBar) {
      uni.showTabBar();
    }
    if (this.hasCustomedStyle) {
      uni.setTabBarStyle({
        color: "#7A7E83",
        selectedColor: "#007AFF",
        backgroundColor: "#F8F8F8",
        borderStyle: "black"
      });
    }
    if (this.hasCustomedItem) {
      let tabBarOptions = {
        index: 1,
        text: "接口",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      uni.setTabBarItem(tabBarOptions);
    }
  },
  methods: {
    navigateBack() {
      this.$emit("unmount");
    },
    setTabBarBadge() {
      if (this.hasShownTabBarRedDot) {
        uni.hideTabBarRedDot({
          index: 1
        });
        this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
      }
      if (!this.hasSetTabBarBadge) {
        uni.setTabBarBadge({
          index: 1,
          text: "1"
        });
      } else {
        uni.removeTabBarBadge({
          index: 1
        });
      }
      this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
    },
    showTabBarRedDot() {
      if (this.hasSetTabBarBadge) {
        uni.removeTabBarBadge({
          index: 1
        });
        this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
      }
      if (!this.hasShownTabBarRedDot) {
        uni.showTabBarRedDot({
          index: 1
        });
      } else {
        uni.hideTabBarRedDot({
          index: 1
        });
      }
      this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
    },
    hideTabBar() {
      if (!this.hasHiddenTabBar) {
        uni.hideTabBar();
      } else {
        uni.showTabBar();
      }
      this.hasHiddenTabBar = !this.hasHiddenTabBar;
    },
    customStyle() {
      if (this.hasCustomedStyle) {
        uni.setTabBarStyle({
          color: "#7A7E83",
          selectedColor: "#007AFF",
          backgroundColor: "#F8F8F8",
          borderStyle: "black"
        });
      } else {
        uni.setTabBarStyle({
          color: "#FFF",
          selectedColor: "#007AFF",
          backgroundColor: "#000000",
          borderStyle: "black"
        });
      }
      this.hasCustomedStyle = !this.hasCustomedStyle;
    },
    customItem() {
      let tabBarOptions = {
        index: 1,
        text: "接口",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      if (this.hasCustomedItem) {
        uni.setTabBarItem(tabBarOptions);
      } else {
        tabBarOptions.text = "API";
        uni.setTabBarItem(tabBarOptions);
      }
      this.hasCustomedItem = !this.hasCustomedItem;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_head = resolveEasycom(resolveDynamicComponent("page-head"), __easycom_0);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "uni-padding-wrap",
    renderWhole: true
  }, [
    createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.setTabBarBadge
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasSetTabBarBadge ? "设置tab徽标" : "移除tab徽标"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.showTabBarRedDot
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasShownTabBarRedDot ? "显示红点" : "移除红点"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customStyle
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasCustomedStyle ? "自定义Tab样式" : "移除自定义样式"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customItem
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasCustomedItem ? "自定义Tab信息" : "移除自定义信息"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.hideTabBar
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasHiddenTabBar ? "隐藏TabBar" : "显示TabBar"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createElementVNode("view", { class: "btn-area" }, [
      createVNode(_component_button, {
        class: "button",
        type: "primary",
        onClick: $options.navigateBack
      }, {
        default: withCtx(() => [
          createTextVNode("返回上一级")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])
  ]);
}
const setTabBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
const _sfc_main = {
  components: {
    setTabBar
  },
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    let mediaPages = [
      {
        name: "图片",
        url: "image"
      },
      {
        name: "音频",
        url: "inner-audio"
      },
      {
        name: "录音",
        url: "voice"
      },
      {
        name: "背景音频",
        url: "background-audio"
      },
      {
        name: "视频",
        url: "video"
      },
      {
        name: "文件",
        url: "file"
      },
      {
        name: "保存媒体到本地",
        url: "save-media"
      }
    ];
    const list = [
      {
        id: "page",
        name: "界面",
        open: false,
        pages: [
          {
            name: "设置导航条",
            url: "set-navigation-bar-title"
          },
          {
            name: "原生子窗体",
            url: "subnvue"
          },
          {
            name: "页面跳转",
            url: "navigator"
          },
          {
            name: "设置TabBar",
            url: "set-tabbar"
          },
          {
            name: "下拉刷新",
            url: "pull-down-refresh"
          },
          {
            name: "创建动画",
            url: "animation"
          },
          {
            name: "创建绘画",
            url: "canvas"
          },
          {
            name: "节点信息",
            url: "get-node-info"
          },
          {
            name: "节点布局交互状态",
            url: "intersection-observer"
          },
          {
            name: "显示操作菜单",
            url: "action-sheet"
          },
          {
            name: "显示模态弹窗",
            url: "modal"
          },
          {
            name: "显示加载提示框",
            url: "show-loading"
          },
          {
            name: "显示消息提示框",
            url: "toast"
          }
        ]
      },
      {
        id: "device",
        name: "设备",
        open: false,
        pages: [
          {
            name: "获取设备网络状态",
            url: "get-network-type"
          },
          {
            name: "获取设备系统信息",
            url: "get-system-info"
          },
          {
            name: "打电话",
            url: "make-phone-call"
          },
          {
            name: "震动",
            url: "vibrate"
          },
          {
            name: "添加手机联系人",
            url: "add-phone-contact"
          },
          {
            name: "扫码",
            url: "scan-code"
          },
          {
            name: "剪贴板",
            url: "clipboard"
          },
          {
            name: "屏幕亮度",
            url: "brightness"
          },
          {
            name: "蓝牙",
            url: "bluetooth"
          },
          {
            name: "生物认证",
            url: "soter"
          },
          {
            name: "iBeacon",
            url: "ibeacon"
          },
          {
            name: "监听加速度传感器",
            url: "on-accelerometer-change"
          },
          {
            name: "监听罗盘数据",
            url: "on-compass-change"
          },
          {
            name: "监听距离传感器",
            url: "/platforms/app-plus/proximity/proximity"
          },
          {
            name: "监听方向传感器",
            url: "/platforms/app-plus/orientation/orientation"
          }
        ]
      },
      {
        id: "network",
        name: "网络",
        open: false,
        pages: [
          {
            name: "发起一个请求",
            url: "request"
          },
          {
            name: "上传文件",
            url: "upload-file"
          },
          {
            name: "下载文件",
            url: "download-file"
          }
        ]
      },
      {
        id: "websocket",
        name: "websocket",
        open: false,
        pages: [
          {
            name: "socketTask",
            url: "websocket-socketTask"
          },
          {
            name: "全局websocket",
            url: "websocket-global"
          }
        ]
      },
      {
        id: "media",
        name: "媒体",
        open: false,
        pages: mediaPages
      },
      {
        id: "location",
        name: "位置",
        open: false,
        pages: [
          {
            name: "获取当前位置",
            url: "get-location"
          },
          {
            name: "使用地图查看位置",
            url: "open-location"
          },
          {
            name: "使用地图选择位置",
            url: "choose-location"
          },
          {
            name: "地图控制",
            url: "map"
          },
          {
            name: "地图搜索",
            url: "map-search"
          }
        ]
      },
      {
        id: "storage",
        name: "数据",
        open: false,
        pages: [
          {
            name: "数据存储（key-value）",
            url: "storage"
          },
          {
            name: "SQLite",
            url: "sqlite"
          }
        ]
      },
      {
        url: "rewarded-video-ad",
        name: "激励视频广告",
        open: false
      },
      {
        url: "full-screen-video-ad",
        name: "全屏视频广告",
        open: false
      },
      {
        id: "login",
        name: "登录",
        open: false,
        pages: [
          {
            name: "登录",
            url: "login"
          },
          {
            name: "获取用户信息",
            url: "get-user-info"
          }
        ]
      },
      {
        id: "share",
        name: "分享",
        open: false,
        pages: [{
          name: "分享",
          url: "share"
        }]
      },
      {
        id: "payment",
        name: "支付",
        open: false,
        pages: [{
          name: "发起支付",
          url: "request-payment"
        }]
      },
      {
        id: "speech",
        name: "语音",
        open: false,
        pages: [{
          name: "语音识别",
          url: "/platforms/app-plus/speech/speech"
        }]
      },
      {
        id: "push",
        name: "推送",
        open: false,
        pages: [{
          name: "推送",
          url: "/platforms/app-plus/push/push"
        }]
      }
    ];
    return {
      showSetTabBarPage: false,
      list,
      notForPc: [{
        name: "设置TabBar",
        url: "set-tabbar"
      }]
    };
  },
  onShareAppMessage() {
    return {
      title: "欢迎体验uni-app",
      path: "/pages/tabBar/API/API"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  onLoad() {
  },
  onReady() {
  },
  onShow() {
    this.navigateFlag = false;
    this.leaveSetTabBarPage();
  },
  onHide() {
    this.leaveSetTabBarPage();
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
      if (e === "set-tabbar") {
        this.showSetTabBarPage = true;
        return;
      }
      let url = ~e.indexOf("platform") ? e : "/pages/API/" + e + "/" + e;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    },
    leaveSetTabBarPage() {
      this.showSetTabBarPage = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_set_tab_bar = resolveComponent("set-tab-bar");
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      $data.showSetTabBarPage ? (openBlock(), createBlock(_component_set_tab_bar, {
        key: 0,
        onUnmount: $options.leaveSetTabBarPage
      }, null, 8, ["onUnmount"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-header-logo"
        }, [
          createElementVNode("u-image", {
            class: "uni-header-image",
            src: "/static/apiIndex.png"
          })
        ])) : createCommentVNode("", true),
        !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "uni-hello-text"
        }, [
          createElementVNode("u-text", { class: "hello-text" }, "以下将演示uni-app接口能力，详细文档见："),
          createVNode(_component_u_link, {
            class: "hello-link",
            href: "https://uniapp.dcloud.io/api/",
            text: "https://uniapp.dcloud.io/api/",
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
                  class: normalizeClass([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": item2.name === "设置TabBar" && $props.hasLeftWin }, "uni-navigate-item"]),
                  key,
                  url: item.url,
                  onClick: ($event) => $options.goDetailPage(item.id, item2.url)
                }, [
                  createElementVNode("u-text", { class: "uni-navigate-text" }, toDisplayString(item2.name ? item2.name : item2), 1),
                  createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "")
                ], 10, ["url", "onClick"]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]);
        }), 128))
      ], 64))
    ])
  ]);
}
const API = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  API as default
};
