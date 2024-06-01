import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { openBlock, createElementBlock, normalizeStyle, renderSlot, resolveComponent, resolveDynamicComponent, normalizeClass, createElementVNode, createBlock, createCommentVNode, createVNode, toDisplayString, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_0$1 } from "../../../uni-card.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const _style_0$2 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$2 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: 20
    };
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle({ height: $data.statusBarHeight }),
    class: "uni-status-bar",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "uni-nav-bar-text": { "": { "fontSize": "34rpx" } }, "uni-nav-bar-right-text": { "": { "fontSize": 12 } }, "uni-navbar__content": { "": { "position": "relative", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-navbar-btn-text": { "": { "flexDirection": "column", "justifyContent": "flex-start", "alignItems": "center", "lineHeight": 12 } }, "uni-navbar__header": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexDirection": "row", "height": 44, "fontSize": 12 } }, "uni-navbar__header-btns": { "": { "flexWrap": "nowrap", "flexDirection": "row", "width": "120rpx", "justifyContent": "center", "alignItems": "center" } }, "uni-navbar__header-btns-left": { "": { "width": "120rpx", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-navbar__header-btns-right": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-navbar__header-container": { "": { "flex": 1, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden" } }, "uni-navbar__header-container-inner": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-navbar__placeholder-view": { "": { "height": 44 } }, "uni-navbar--fixed": { "": { "position": "fixed", "zIndex": 998, "left": 0, "right": 0 } }, "uni-navbar--shadow": { "": { "boxShadow": "0 1px 6px #ccc" } }, "uni-navbar--border": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee" } }, "uni-ellipsis-1": { "": { "overflow": "hidden", "lines": 1, "textOverflow": "ellipsis" } } };
const getVal = (val) => typeof val === "number" ? val + "px" : val;
const _sfc_main$1 = {
  name: "UniNavBar",
  components: {
    statusBar
  },
  emits: ["clickLeft", "clickRight", "clickTitle"],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true
    },
    height: {
      type: [Number, String],
      default: 44
    },
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 60
    },
    stat: {
      type: [Boolean, String],
      default: ""
    }
  },
  computed: {
    themeBgColor() {
      if (this.dark) {
        if (this.backgroundColor) {
          return this.backgroundColor;
        } else {
          return this.dark ? "#333" : "#FFF";
        }
      }
      return this.backgroundColor || "#FFF";
    },
    themeColor() {
      if (this.dark) {
        if (this.color) {
          return this.color;
        } else {
          return this.dark ? "#fff" : "#333";
        }
      }
      return this.color || "#333";
    },
    navbarHeight() {
      return getVal(this.height);
    },
    leftIconWidth() {
      return getVal(this.leftWidth);
    },
    rightIconWidth() {
      return getVal(this.rightWidth);
    }
  },
  mounted() {
    if (uni.report && this.stat && this.title !== "") {
      uni.report("title", this.title);
    }
  },
  methods: {
    onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight() {
      this.$emit("clickRight");
    },
    onClickTitle() {
      this.$emit("clickTitle");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_status_bar = resolveComponent("status-bar");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-navbar", { "uni-dark": $props.dark }]),
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
      style: normalizeStyle({ "background-color": $options.themeBgColor })
    }, [
      $props.statusBar ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("", true),
      createElementVNode("view", {
        style: normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
        class: "uni-navbar__header"
      }, [
        createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-left",
          style: normalizeStyle({ width: $options.leftIconWidth })
        }, [
          renderSlot(_ctx.$slots, "left", {}, () => [
            $props.leftIcon.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__content_view"
            }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.leftIcon,
                size: "20"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("", true),
            $props.leftText.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
            }, [
              createElementVNode("u-text", {
                style: normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
              }, toDisplayString($props.leftText), 5)
            ], 2)) : createCommentVNode("", true)
          ])
        ], 4),
        createElementVNode("view", {
          class: "uni-navbar__header-container",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            $props.title.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__header-container-inner"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-text uni-ellipsis-1",
                style: normalizeStyle({ color: $options.themeColor })
              }, toDisplayString($props.title), 5)
            ])) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-right",
          style: normalizeStyle({ width: $options.rightIconWidth })
        }, [
          renderSlot(_ctx.$slots, "right", {}, () => [
            $props.rightIcon.length ? (openBlock(), createElementBlock("view", { key: 0 }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.rightIcon,
                size: "22"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("", true),
            $props.rightText.length && !$props.rightIcon.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "uni-navbar-btn-text"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-right-text",
                style: normalizeStyle({ color: $options.themeColor })
              }, toDisplayString($props.rightText), 5)
            ])) : createCommentVNode("", true)
          ])
        ], 4)
      ], 4)
    ], 6),
    $props.fixed ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-navbar__placeholder"
    }, [
      $props.statusBar ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("", true),
      createElementVNode("view", {
        class: "uni-navbar__placeholder-view",
        style: normalizeStyle({ height: $options.navbarHeight })
      }, null, 4)
    ])) : createCommentVNode("", true)
  ], 2);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "box-bg": { "": { "backgroundColor": "#F5F5F5", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "city": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start", "marginLeft": 4 } }, "input-view": { "": { "flexDirection": "row", "flex": 1, "backgroundColor": "#f8f8f8", "height": 30, "borderRadius": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexWrap": "nowrap", "marginTop": 7, "marginRight": 0, "marginBottom": 7, "marginLeft": 0, "lineHeight": 30 } }, "input-uni-icon": { "": { "lineHeight": 30 } }, "nav-bar-input": { "": { "height": 30, "lineHeight": 30, "width": "370rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "fontSize": 12, "backgroundColor": "#f8f8f8" } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      city: "北京"
    };
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    },
    showMenu() {
      uni.showToast({
        title: "菜单"
      });
    },
    clickLeft() {
      uni.showToast({
        title: "左侧按钮"
      });
    },
    search() {
      uni.showToast({
        title: "搜索"
      });
    },
    showCity() {
      uni.showToast({
        title: "选择城市"
      });
    },
    scan() {
      uni.showToast({
        title: "扫码"
      });
    },
    confirm() {
      uni.showToast({
        title: "搜索"
      });
    }
  },
  onPullDownRefresh() {
    formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:128", "onPullDownRefresh");
    setTimeout(function() {
      uni.stopPullDownRefresh();
      formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:131", "stopPullDownRefresh");
    }, 1e3);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_nav_bar = resolveEasycom(resolveDynamicComponent("uni-nav-bar"), __easycom_0);
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0$1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_nav_bar, {
        dark: "",
        fixed: true,
        shadow: "",
        "background-color": "#007AFF",
        "status-bar": "",
        "left-icon": "left",
        "left-text": "返回",
        title: "自定义导航栏",
        onClickLeft: $options.back
      }, null, 8, ["onClickLeft"]),
      createVNode(_component_uni_card, {
        "is-full": "",
        isShadow: false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基本用法",
        subTitle: "使用 title 属性设置导航栏标题",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, { title: "标题" })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "开启阴影",
        subTitle: "使用 shadow 属性启用阴影",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              title: "开启阴影",
              onClickLeft: $options.back
            }, null, 8, ["onClickLeft"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "开启暗黑模式",
        subTitle: "使用 dark 属性设置暗黑模式",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              dark: "",
              title: "暗黑模式",
              onClickLeft: $options.back
            }, null, 8, ["onClickLeft"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "带返回箭头+右侧图标",
        subTitle: "使用 left-icon/right-icon 设置左右图标",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              "right-icon": "cart",
              title: "标题"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "左侧文字+右侧文字",
        subTitle: "使用 left-text/right-text 设置左右文字",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              leftText: "返回",
              rightText: "设置",
              title: "标题"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义颜色",
        subTitle: "使用 color/background-color 属性设置前景背景色",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createElementVNode("view", { class: "box-bg" }, [
              createVNode(_component_uni_nav_bar, {
                dark: "",
                color: "#999",
                backgroundColor: "#f5f5f5",
                shadow: "",
                "left-icon": "left",
                leftText: "返回",
                rightText: "设置",
                title: "自定义颜色"
              })
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义高度",
        subTitle: "使用 height 修改组件高度",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createElementVNode("view", { class: "box-bg" }, [
              createVNode(_component_uni_nav_bar, {
                height: "65px",
                dark: "",
                shadow: "",
                "left-icon": "left",
                leftText: "返回",
                rightText: "设置",
                title: "自定义高度"
              })
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义内容",
        subTitle: "使用 left/right/default 插槽自定义内容",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, null, {
              left: withCtx(() => [
                createElementVNode("view", { class: "city" }, [
                  createElementVNode("view", null, [
                    createElementVNode("u-text", { class: "uni-nav-bar-text" }, toDisplayString($data.city), 1)
                  ]),
                  createVNode(_component_uni_icons, {
                    type: "arrowdown",
                    color: "#666",
                    size: "18"
                  })
                ])
              ]),
              right: withCtx(() => [
                createElementVNode("view", { class: "city" }, [
                  createElementVNode("u-text", null, " 搜索 ")
                ])
              ]),
              default: withCtx(() => [
                createElementVNode("view", { class: "input-view" }, [
                  createVNode(_component_uni_icons, {
                    class: "input-uni-icon",
                    type: "search",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-input", {
                    confirmType: "search",
                    class: "nav-bar-input",
                    type: "text",
                    placeholder: "输入搜索关键词",
                    onConfirm: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
                  }, null, 32)
                ])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const navBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  navBar as default
};
