import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { _ as __easycom_3, a as __easycom_4 } from "../../../uni-list.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-badge.js";
const _style_0 = { "container": { "": { "overflow": "hidden" } }, "custom-cover": { "": { "flex": 1, "flexDirection": "row", "position": "relative" } }, "cover-content": { "": { "position": "absolute", "bottom": 0, "left": 0, "right": 0, "height": 40, "backgroundColor": "rgba(0,0,0,0.4)", "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingLeft": 15, "fontSize": 14, "color": "#ffffff" } }, "card-actions": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "alignItems": "center", "height": 45, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "card-actions-item": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "card-actions-item-text": { "": { "fontSize": 12, "color": "#666666", "marginLeft": 5 } }, "cover-image": { "": { "flex": 1, "height": 150 } }, "no-border": { "": { "borderWidth": 0 } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
      avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
      extraIcon: {
        color: "#4cd964",
        size: "22",
        type: "gear-filled"
      }
    };
  },
  methods: {
    onClick(e) {
      formatAppLog("log", "at pages/extUI/card/card.nvue:129", e);
    },
    actionsClick(text) {
      uni.showToast({
        title: text,
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基础卡片",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, { "is-shadow": false }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "卡片标题+额外信息",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "基础卡片",
            extra: "额外信息"
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "双标题卡片",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "基础卡片",
            "sub-title": "副标题",
            extra: "额外信息",
            thumbnail: $data.avatar,
            onClick: $options.onClick
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。")
            ]),
            _: 1
          }, 8, ["thumbnail", "onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "通栏卡片",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "基础卡片",
            isFull: true,
            "sub-title": "副标题",
            extra: "额外信息",
            thumbnail: $data.avatar
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。")
            ]),
            _: 1
          }, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "卡片封面图+操作栏",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            cover: $data.cover,
            onClick: $options.onClick
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。"),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.actionsClick("分享"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "分享")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.actionsClick("点赞"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "点赞")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.actionsClick("评论"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "评论")
                ])
              ])
            ]),
            _: 1
          }, 8, ["cover", "onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自定义卡片内容",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "基础卡片",
            "sub-title": "副标题",
            extra: "额外信息",
            padding: "10px 0",
            thumbnail: $data.avatar
          }, {
            title: withCtx(() => [
              createVNode(_component_uni_list, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_list_item, {
                    "show-switch": true,
                    title: "自定义标题"
                  })
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createElementVNode("u-image", {
                style: { "width": "100%" },
                src: $data.cover
              }, null, 8, ["src"]),
              createElementVNode("u-text", { class: "uni-body uni-mt-5" }, "卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。"),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.actionsClick("分享"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "分享")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.actionsClick("点赞"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "点赞")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[5] || (_cache[5] = ($event) => $options.actionsClick("评论"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "评论")
                ])
              ])
            ]),
            _: 1
          }, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "卡片+列表",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            padding: "0",
            spacing: "0"
          }, {
            cover: withCtx(() => [
              createElementVNode("view", { class: "custom-cover" }, [
                createElementVNode("u-image", {
                  class: "cover-image",
                  mode: "aspectFill",
                  src: $data.cover
                }, null, 8, ["src"]),
                createElementVNode("view", { class: "cover-content" }, [
                  createElementVNode("u-text", { class: "uni-subtitle uni-white" }, "今日新闻热点")
                ])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_uni_list, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_list_item, {
                    title: "今日新闻",
                    showArrow: ""
                  }),
                  createVNode(_component_uni_list_item, {
                    title: "今日新闻",
                    showArrow: ""
                  })
                ]),
                _: 1
              }),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions no-border"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[6] || (_cache[6] = ($event) => $options.actionsClick("分享"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "分享")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[7] || (_cache[7] = ($event) => $options.actionsClick("点赞"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "点赞")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[8] || (_cache[8] = ($event) => $options.actionsClick("评论"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "评论")
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  card as default
};
