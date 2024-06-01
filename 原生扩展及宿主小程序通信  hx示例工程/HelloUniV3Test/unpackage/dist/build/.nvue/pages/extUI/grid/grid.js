import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot, createCommentVNode, resolveDynamicComponent, resolveComponent, createVNode, withCtx, Fragment, renderList, createBlock, toDisplayString, createTextVNode } from "vue";
import { a as requireNativePlugin, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2$1 } from "../../../uni-section.js";
import { _ as __easycom_5 } from "../../../uni-badge.js";
const _style_0$2 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
const _sfc_main$2 = {
  name: "UniGridItem",
  inject: ["grid"],
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      column: 0,
      showBorder: true,
      square: true,
      highlight: true,
      left: 0,
      top: 0,
      openNum: 2,
      width: 0,
      borderColor: "#e5e5e5"
    };
  },
  created() {
    this.column = this.grid.column;
    this.showBorder = this.grid.showBorder;
    this.square = this.grid.square;
    this.highlight = this.grid.highlight;
    this.top = this.hor === 0 ? this.grid.hor : this.hor;
    this.left = this.ver === 0 ? this.grid.ver : this.ver;
    this.borderColor = this.grid.borderColor;
    this.grid.children.push(this);
    this.width = this.grid.width;
  },
  beforeDestroy() {
    this.grid.children.forEach((item, index) => {
      if (item === this) {
        this.grid.children.splice(index, 1);
      }
    });
  },
  methods: {
    _onClick() {
      this.grid.change({
        detail: {
          index: this.index
        }
      });
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.width ? (openBlock(), createElementBlock("view", {
    key: 0,
    style: normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
    class: "uni-grid-item",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
      style: normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4)) : createCommentVNode("", true);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
const dom = requireNativePlugin("dom");
const _sfc_main$1 = {
  name: "UniGrid",
  emits: ["change"],
  props: {
    // 每列显示个数
    column: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "#D2D2D2"
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      width: 0
    };
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this._getSize((width) => {
          this.children.forEach((item, index) => {
            item.width = width;
          });
        });
      }, 50);
    },
    change(e) {
      this.$emit("change", e);
    },
    _getSize(fn) {
      dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
        this.width = parseInt((ret.size.width - 1) / this.column) + "px";
        fn(this.width);
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-grid-wrap",
    renderWhole: true
  }, [
    createElementVNode("view", {
      id: $data.elId,
      ref: "uni-grid",
      class: normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
      style: normalizeStyle({ "border-left-color": $props.borderColor })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 14, ["id"])
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "image": { "": { "width": 25, "height": 25 } }, "text": { "": { "fontSize": 14, "marginTop": 5 } }, "grid-dynamic-box": { "": { "marginBottom": 15 } }, "grid-item-box": { "": { "flex": 1, "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } }, "grid-item-box-row": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 15, "paddingRight": 0, "paddingBottom": 15, "paddingLeft": 0 } }, "grid-dot": { "": { "position": "absolute", "top": 5, "right": 15 } }, "swiper": { "": { "height": 420 } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      dynamicList: [],
      list: [
        {
          url: "/static/c1.png",
          text: "Grid 1",
          badge: "0",
          type: "primary"
        },
        {
          url: "/static/c2.png",
          text: "Grid 2",
          badge: "1",
          type: "success"
        },
        {
          url: "/static/c3.png",
          text: "Grid 3",
          badge: "99",
          type: "warning"
        },
        {
          url: "/static/c4.png",
          text: "Grid 4",
          badge: "2",
          type: "error"
        },
        {
          url: "/static/c5.png",
          text: "Grid 5"
        },
        {
          url: "/static/c6.png",
          text: "Grid 6"
        },
        {
          url: "/static/c7.png",
          text: "Grid 7"
        },
        {
          url: "/static/c8.png",
          text: "Grid 8"
        },
        {
          url: "/static/c9.png",
          text: "Grid 9"
        }
      ]
    };
  },
  methods: {
    change(e) {
      let {
        index
      } = e.detail;
      this.list[index].badge && this.list[index].badge++;
      uni.showToast({
        title: `点击第${index + 1}个宫格`,
        icon: "none"
      });
    },
    add() {
      if (this.dynamicList.length < 9) {
        this.dynamicList.push({
          url: `/static/c${this.dynamicList.length + 1}.png`,
          text: `Grid ${this.dynamicList.length + 1}`,
          color: this.dynamicList.length % 2 === 0 ? "#f5f5f5" : "#fff"
        });
      } else {
        uni.showToast({
          title: "最多添加9个",
          icon: "none"
        });
      }
    },
    del() {
      this.dynamicList.splice(this.dynamicList.length - 1, 1);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_2);
  const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_3);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2$1);
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  const _component_button = resolveComponent("button");
  const _component_uni_badge = resolveEasycom(resolveDynamicComponent("uni-badge"), __easycom_5);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "warp" }, [
      createVNode(_component_uni_card, {
        "is-full": "",
        "is-shadow": false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "宫格组件主要使用场景如：商品推荐列表、热门内容等")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基础样式",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_grid, {
            column: 4,
            highlight: true,
            onChange: $options.change
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(4, (item, index) => {
                return createVNode(_component_uni_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      createVNode(_component_uni_icons, {
                        type: "image",
                        size: 30,
                        color: "#777"
                      }),
                      createElementVNode("u-text", { class: "text" }, "文本信息")
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 64))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义列数",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_grid, {
            column: 4,
            highlight: true,
            onChange: $options.change
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(8, (item, index) => {
                return createVNode(_component_uni_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", {
                      class: "grid-item-box",
                      style: { "background-color": "#fff" }
                    }, [
                      createVNode(_component_uni_icons, {
                        type: "image",
                        size: 30,
                        color: "#777"
                      }),
                      createElementVNode("u-text", { class: "text" }, "文本信息")
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 64))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "滑动视图",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_swiper, {
            class: "swiper",
            "indicator-dots": true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_grid, {
                    column: 3,
                    highlight: true,
                    onChange: $options.change
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                        return openBlock(), createBlock(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "grid-item-box" }, [
                              createElementVNode("u-image", {
                                src: item.url,
                                class: "image",
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["onChange"])
                ]),
                _: 1
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_grid, {
                    column: 3,
                    highlight: true,
                    onChange: $options.change
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                        return openBlock(), createBlock(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "grid-item-box" }, [
                              createElementVNode("u-image", {
                                src: item.url,
                                class: "image",
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["onChange"])
                ]),
                _: 1
              }),
              createVNode(_component_swiper_item, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_grid, {
                    column: 3,
                    highlight: true,
                    onChange: $options.change
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                        return openBlock(), createBlock(_component_uni_grid_item, {
                          index,
                          key: index
                        }, {
                          default: withCtx(() => [
                            createElementVNode("view", { class: "grid-item-box" }, [
                              createElementVNode("u-image", {
                                src: item.url,
                                class: "image",
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["index"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["onChange"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "动态加载",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "grid-dynamic-box" }, [
            createVNode(_component_uni_grid, {
              column: 3,
              highlight: true,
              onChange: $options.change
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.dynamicList, (item, index) => {
                  return openBlock(), createBlock(_component_uni_grid_item, {
                    index,
                    key: index
                  }, {
                    default: withCtx(() => [
                      createElementVNode("view", {
                        class: "grid-item-box",
                        style: normalizeStyle({ "backgroundColor": item.color })
                      }, [
                        createElementVNode("u-image", {
                          src: item.url,
                          class: "image",
                          mode: "aspectFill"
                        }, null, 8, ["src"]),
                        createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1)
                      ], 4)
                    ]),
                    _: 2
                  }, 1032, ["index"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["onChange"])
          ]),
          createVNode(_component_button, {
            type: "primary",
            onClick: $options.add
          }, {
            default: withCtx(() => [
              createTextVNode("点击添加一个宫格")
            ]),
            _: 1
          }, 8, ["onClick"]),
          $data.dynamicList.length !== 0 ? (openBlock(), createBlock(_component_button, {
            key: 0,
            type: "primary",
            style: { "margin-top": "15px" },
            onClick: $options.del
          }, {
            default: withCtx(() => [
              createTextVNode("点击删除一个宫格")
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "无边框带角标（3列）",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_grid, {
            column: 3,
            "show-border": false,
            square: false,
            onChange: $options.change
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                return openBlock(), createBlock(_component_uni_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "grid-item-box" }, [
                      createElementVNode("u-image", {
                        class: "image",
                        src: item.url,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1),
                      item.badge ? (openBlock(), createElementBlock("view", {
                        key: 0,
                        class: "grid-dot"
                      }, [
                        createVNode(_component_uni_badge, {
                          text: item.badge,
                          type: item.type
                        }, null, 8, ["text", "type"])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "矩形宫格（3列）",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_grid, {
            column: 3,
            square: false,
            highlight: false,
            onChange: $options.change
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                return openBlock(), createBlock(_component_uni_grid_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createElementVNode("view", { class: "grid-item-box" }, [
                      createElementVNode("u-image", {
                        src: item.url,
                        class: "image",
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      createElementVNode("u-text", { class: "text" }, toDisplayString(item.text), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "边框颜色（4列 无文字）",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_grid, {
            column: 4,
            "border-color": "#03a9f4",
            onChange: $options.change
          }, {
            default: withCtx(() => [
              createVNode(_component_uni_grid_item, { index: 0 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "grid-item-box" }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: "/static/c1.png",
                      mode: "aspectFill"
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_uni_grid_item, { index: 1 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "grid-item-box" }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: "/static/c2.png",
                      mode: "aspectFill"
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_uni_grid_item, { index: 2 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "grid-item-box" }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: "/static/c3.png",
                      mode: "aspectFill"
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_uni_grid_item, { index: 3 }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "grid-item-box" }, [
                    createElementVNode("u-image", {
                      class: "image",
                      src: "/static/c4.png",
                      mode: "aspectFill"
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      })
    ])
  ]);
}
const grid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  grid as default
};
