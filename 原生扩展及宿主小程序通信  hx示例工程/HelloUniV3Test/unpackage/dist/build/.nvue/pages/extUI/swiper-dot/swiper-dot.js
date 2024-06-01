import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { openBlock, createElementBlock, renderSlot, normalizeStyle, Fragment, renderList, createCommentVNode, normalizeClass, createElementVNode, toDisplayString, resolveComponent, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const _style_0$1 = { "uni-swiper__warp": { "": { "flex": 1, "flexDirection": "column", "position": "relative", "overflow": "hidden" } }, "uni-swiper__dots-box": { "": { "position": "absolute", "bottom": 10, "left": 0, "right": 0, "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-item": { "": { "width": 8, "borderRadius": 100, "marginLeft": 6, "backgroundColor": "rgba(0,0,0,0.4)", "marginTop:first-child": 0, "marginRight:first-child": 0, "marginBottom:first-child": 0, "marginLeft:first-child": 0 } }, "uni-swiper__dots-default": { "": { "borderRadius": 100 } }, "uni-swiper__dots-long": { "": { "borderRadius": 50 } }, "uni-swiper__dots-bar": { "": { "borderRadius": 50 } }, "uni-swiper__dots-nav": { "": { "bottom": 0, "paddingTop": 8, "paddingRight": 0, "paddingBottom": 8, "paddingLeft": 0, "flex": 1, "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center", "backgroundColor": "rgba(0,0,0,0.2)" } }, "uni-swiper__dots-nav-item": { "": { "fontSize": 14, "color": "#ffffff", "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15 } }, "uni-swiper__dots-indexes": { "": { "justifyContent": "center", "alignItems": "center" } }, "uni-swiper__dots-indexes-text": { "": { "color": "#ffffff", "fontSize": 12, "lineHeight": 14 } } };
const _sfc_main$1 = {
  name: "UniSwiperDot",
  emits: ["clickItem"],
  props: {
    info: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    dotsStyles: {
      type: Object,
      default() {
        return {};
      }
    },
    // 类型 ：default(默认) indexes long nav
    mode: {
      type: String,
      default: "default"
    },
    // 只在 nav 模式下生效，变量名称
    field: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dots: {
        width: 6,
        height: 6,
        bottom: 10,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, .3)",
        border: "1px rgba(0, 0, 0, .3) solid",
        selectedBackgroundColor: "#333",
        selectedBorder: "1px rgba(0, 0, 0, .9) solid"
      }
    };
  },
  watch: {
    dotsStyles(newVal) {
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    mode(newVal) {
      if (newVal === "indexes") {
        this.dots.width = 14;
        this.dots.height = 14;
      } else {
        this.dots.width = 6;
        this.dots.height = 6;
      }
    }
  },
  created() {
    if (this.mode === "indexes") {
      this.dots.width = 12;
      this.dots.height = 12;
    }
    this.dots = Object.assign(this.dots, this.dotsStyles);
  },
  methods: {
    clickItem(index) {
      this.$emit("clickItem", index);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-swiper__warp",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.mode === "default" ? (openBlock(), createElementBlock("view", {
      style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
      class: "uni-swiper__dots-box",
      key: "default"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.info, (item, index) => {
        return openBlock(), createElementBlock("view", {
          onClick: ($event) => $options.clickItem(index),
          style: normalizeStyle({
            "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
            "height": $data.dots.width / 2 + "px",
            "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
            "border-radius": "0px"
          }),
          key: index,
          class: "uni-swiper__dots-item uni-swiper__dots-bar"
        }, null, 12, ["onClick"]);
      }), 128))
    ], 4)) : createCommentVNode("", true),
    $props.mode === "dot" ? (openBlock(), createElementBlock("view", {
      style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
      class: "uni-swiper__dots-box",
      key: "dot"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.info, (item, index) => {
        return openBlock(), createElementBlock("view", {
          onClick: ($event) => $options.clickItem(index),
          style: normalizeStyle({
            "width": $data.dots.width + "px",
            "height": $data.dots.height + "px",
            "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
            "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
          }),
          key: index,
          class: "uni-swiper__dots-item"
        }, null, 12, ["onClick"]);
      }), 128))
    ], 4)) : createCommentVNode("", true),
    $props.mode === "round" ? (openBlock(), createElementBlock("view", {
      style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
      class: "uni-swiper__dots-box",
      key: "round"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.info, (item, index) => {
        return openBlock(), createElementBlock("view", {
          onClick: ($event) => $options.clickItem(index),
          class: normalizeClass([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
          style: normalizeStyle({
            "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
            "height": $data.dots.height + "px",
            "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
            "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
          }),
          key: index
        }, null, 14, ["onClick"]);
      }), 128))
    ], 4)) : createCommentVNode("", true),
    $props.mode === "nav" ? (openBlock(), createElementBlock("view", {
      key: "nav",
      style: normalizeStyle({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
      class: "uni-swiper__dots-box uni-swiper__dots-nav"
    }, [
      createElementVNode("u-text", {
        style: normalizeStyle({ "color": $props.dotsStyles.color }),
        class: "uni-swiper__dots-nav-item"
      }, toDisplayString($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]), 5)
    ], 4)) : createCommentVNode("", true),
    $props.mode === "indexes" ? (openBlock(), createElementBlock("view", {
      key: "indexes",
      style: normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
      class: "uni-swiper__dots-box"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.info, (item, index) => {
        return openBlock(), createElementBlock("view", {
          onClick: ($event) => $options.clickItem(index),
          style: normalizeStyle({
            "width": $data.dots.width + "px",
            "height": $data.dots.height + "px",
            "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
            "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
            "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
          }),
          key: index,
          class: "uni-swiper__dots-item uni-swiper__dots-indexes"
        }, [
          createElementVNode("u-text", { class: "uni-swiper__dots-indexes-text" }, toDisplayString(index + 1), 1)
        ], 12, ["onClick"]);
      }), 128))
    ], 4)) : createCommentVNode("", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "swiper-box": { "": { "height": 200 } }, "swiper-item": { "": { "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 200, "color": "#ffffff" } }, "swiper-item0": { "": { "backgroundColor": "#cee1fd" } }, "swiper-item1": { "": { "backgroundColor": "#b2cef7" } }, "swiper-item2": { "": { "backgroundColor": "#cee1fd" } }, "image": { "": { "width": "750rpx" } }, "uni-bg-red": { "": { "backgroundColor": "#ff5a5f" } }, "uni-bg-green": { "": { "backgroundColor": "#09bb07" } }, "uni-bg-blue": { "": { "backgroundColor": "#007aff" } }, "example-body": { "": { "flexDirection": "row", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "example-body-item": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "marginTop": "15rpx", "marginRight": "15rpx", "marginBottom": "15rpx", "marginLeft": "15rpx", "paddingTop": "15rpx", "paddingRight": "15rpx", "paddingBottom": "15rpx", "paddingLeft": "15rpx", "height": "60rpx", "flex": 1, "borderColor": "#e5e5e5", "borderStyle": "solid", "borderWidth": 1, "borderRadius": 5 } }, "example-body-item-text": { "": { "fontSize": "28rpx", "color": "#333333" } }, "example-body-dots": { "": { "width": "16rpx", "height": "16rpx", "borderRadius": 50, "backgroundColor": "#333333", "marginLeft": "10rpx" } }, "active": { "": { "borderStyle": "solid", "borderColor": "#007aff", "borderWidth": 1 } }, "@FONT-FACE": [{ "uni-swiper-dot-box": { "": { "width": 400, "marginTop": 8 } }, "image": { "": { "width": 100 } } }] };
const _sfc_main = {
  components: {},
  data() {
    return {
      info: [
        {
          colorClass: "uni-bg-red",
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
          content: "内容 A"
        },
        {
          colorClass: "uni-bg-green",
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
          content: "内容 B"
        },
        {
          colorClass: "uni-bg-blue",
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
          content: "内容 C"
        }
      ],
      dotStyle: [
        {
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(0, 0, 0, .9)",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        },
        {
          backgroundColor: "rgba(255, 90, 95,0.3)",
          border: "1px rgba(255, 90, 95,0.3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(255, 90, 95,0.9)",
          selectedBorder: "1px rgba(255, 90, 95,0.9) solid"
        },
        {
          backgroundColor: "rgba(83, 200, 249,0.3)",
          border: "1px rgba(83, 200, 249,0.3) solid",
          color: "#fff",
          selectedBackgroundColor: "rgba(83, 200, 249,0.9)",
          selectedBorder: "1px rgba(83, 200, 249,0.9) solid"
        }
      ],
      modeIndex: -1,
      styleIndex: -1,
      current: 0,
      mode: "default",
      dotsStyles: {},
      swiperDotIndex: 0
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
    selectStyle(index) {
      this.dotsStyles = this.dotStyle[index];
      this.styleIndex = index;
    },
    selectMode(mode, index) {
      this.mode = mode;
      this.modeIndex = index;
      this.styleIndex = -1;
      this.dotsStyles = this.dotStyle[0];
    },
    clickItem(e) {
      this.swiperDotIndex = e;
    },
    onBanner(index) {
      formatAppLog("log", "at pages/extUI/swiper-dot/swiper-dot.nvue:124", 22222, index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_uni_swiper_dot = resolveEasycom(resolveDynamicComponent("uni-swiper-dot"), __easycom_0);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content" }, [
      createVNode(_component_uni_swiper_dot, {
        class: "uni-swiper-dot-box",
        onClickItem: $options.clickItem,
        info: $data.info,
        current: $data.current,
        mode: $data.mode,
        "dots-styles": $data.dotsStyles,
        field: "content"
      }, {
        default: withCtx(() => [
          createVNode(_component_swiper, {
            class: "swiper-box",
            onChange: $options.change,
            current: $data.swiperDotIndex
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(3, (item, index) => {
                return createVNode(_component_swiper_item, { key: index }, {
                  default: withCtx(() => [
                    createElementVNode("view", {
                      class: normalizeClass(["swiper-item", "swiper-item" + index])
                    }, [
                      createElementVNode("u-text", { style: { "color": "#fff", "font-size": "32px" } }, toDisplayString(index + 1), 1)
                    ], 2)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ]),
            _: 1
          }, 8, ["onChange", "current"])
        ]),
        _: 1
      }, 8, ["onClickItem", "info", "current", "mode", "dots-styles"]),
      createVNode(_component_uni_section, {
        title: "模式选择",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            createElementVNode("view", {
              class: normalizeClass([{ active: $data.modeIndex === 0 }, "example-body-item"]),
              onClick: _cache[0] || (_cache[0] = ($event) => $options.selectMode("default", 0))
            }, [
              createElementVNode("u-text", { class: "example-body-item-text" }, "default")
            ], 2),
            createElementVNode("view", {
              class: normalizeClass([{ active: $data.modeIndex === 1 }, "example-body-item"]),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.selectMode("dot", 1))
            }, [
              createElementVNode("u-text", { class: "example-body-item-text" }, "dot")
            ], 2),
            createElementVNode("view", {
              class: normalizeClass([{ active: $data.modeIndex === 2 }, "example-body-item"]),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.selectMode("round", 2))
            }, [
              createElementVNode("u-text", { class: "example-body-item-text" }, "round")
            ], 2),
            createElementVNode("view", {
              class: normalizeClass([{ active: $data.modeIndex === 3 }, "example-body-item"]),
              onClick: _cache[3] || (_cache[3] = ($event) => $options.selectMode("nav", 3))
            }, [
              createElementVNode("u-text", { class: "example-body-item-text" }, "nav")
            ], 2),
            createElementVNode("view", {
              class: normalizeClass([{ active: $data.modeIndex === 4 }, "example-body-item"]),
              onClick: _cache[4] || (_cache[4] = ($event) => $options.selectMode("indexes", 4))
            }, [
              createElementVNode("u-text", { class: "example-body-item-text" }, "indexes")
            ], 2)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "颜色样式选择",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "example-body" }, [
            $data.mode !== "nav" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($data.dotStyle, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass([{ active: $data.styleIndex === index }, "example-body-item"]),
                key: index,
                onClick: ($event) => $options.selectStyle(index)
              }, [
                createElementVNode("view", {
                  style: normalizeStyle({ "background-color": item.selectedBackgroundColor, border: item.selectedBorder }),
                  class: "example-body-dots"
                }, null, 4),
                createElementVNode("view", {
                  style: normalizeStyle({ "background-color": item.backgroundColor, border: item.border }),
                  class: "example-body-dots"
                }, null, 4),
                createElementVNode("view", {
                  style: normalizeStyle({ "background-color": item.backgroundColor, border: item.border }),
                  class: "example-body-dots"
                }, null, 4)
              ], 10, ["onClick"]);
            }), 128)) : createCommentVNode("", true),
            $data.mode === "nav" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($data.dotStyle, (item, index) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass([{ active: $data.styleIndex === index }, "example-body-item"]),
                key: index,
                style: normalizeStyle({ "background-color": item.selectedBackgroundColor }),
                onClick: ($event) => $options.selectStyle(index)
              }, [
                createElementVNode("u-text", {
                  class: "example-body-item-text",
                  style: normalizeStyle({ color: item.color })
                }, "内容", 4)
              ], 14, ["onClick"]);
            }), 128)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const swiperDot = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  swiperDot as default
};
