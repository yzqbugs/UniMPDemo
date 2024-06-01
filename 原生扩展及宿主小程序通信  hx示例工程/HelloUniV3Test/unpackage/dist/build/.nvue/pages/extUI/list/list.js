import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as __easycom_3, a as __easycom_4 } from "../../../uni-list.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-icons.js";
import "../../../uni-badge.js";
const _style_0 = { "slot-box": { "": { "flexDirection": "row", "alignItems": "center" } }, "slot-image": { "": { "marginRight": 10, "width": 30, "height": 30 } }, "slot-text": { "": { "flex": 1, "fontSize": 14, "color": "#4cd964", "marginRight": 10 } } };
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
      formatAppLog("log", "at pages/extUI/list/list.nvue:125", "执行click事件", e.data);
      uni.showToast({
        title: "点击反馈"
      });
    },
    switchChange(e) {
      uni.showToast({
        title: "change:" + e.value,
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
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
          createElementVNode("u-text", { class: "uni-h6" }, "列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "基础用法",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "列表文字" }),
              createVNode(_component_uni_list_item, {
                title: "列表文字",
                rightText: "右侧文字"
              }),
              createVNode(_component_uni_list_item, {
                title: "列表文字",
                note: "列表描述信息",
                rightText: "右侧文字"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "禁用列表",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                disabled: true,
                title: "列表禁用状态",
                rightText: "右侧文字"
              }),
              createVNode(_component_uni_list_item, {
                disabled: true,
                title: "列表禁用状态",
                rightText: "右侧文字"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "显示右侧箭头",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                showArrow: "",
                title: "列表文字"
              }),
              createVNode(_component_uni_list_item, {
                showArrow: "",
                title: "列表文字",
                rightText: "右侧文字"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "开启点击反馈",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                title: "弹窗提示",
                clickable: "",
                onClick: $options.onClick
              }, null, 8, ["onClick"]),
              createVNode(_component_uni_list_item, {
                title: "页面跳转",
                to: `./chat`,
                onClick: $options.onClick
              }, null, 8, ["to", "onClick"]),
              createVNode(_component_uni_list_item, {
                title: "关闭当前页面打开新页面",
                showArrow: "",
                link: "redirectTo",
                to: "./chat",
                onClick: $options.onClick
              }, null, 8, ["onClick"]),
              createVNode(_component_uni_list_item, {
                title: "打开错误页面(查看控制台)",
                showArrow: "",
                link: "redirectTo",
                to: "./chats",
                onClick: $options.onClick
              }, null, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "不显示分隔线",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, { border: false }, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "列表文字" }),
              createVNode(_component_uni_list_item, {
                border: false,
                title: "列表文字",
                note: "列表描述信息",
                rightText: "右侧文字"
              }),
              createVNode(_component_uni_list_item, {
                border: false,
                title: "列表文字",
                note: "列表描述信息",
                rightText: "右侧文字"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "分隔线通栏",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, { "border-full": "" }, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "列表文字" }),
              createVNode(_component_uni_list_item, {
                title: "列表文字",
                note: "列表描述信息",
                rightText: "右侧文字"
              }),
              createVNode(_component_uni_list_item, {
                title: "列表文字",
                note: "列表描述信息",
                rightText: "右侧文字"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "文字溢出隐藏",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                ellipsis: "1",
                title: "超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
              }),
              createVNode(_component_uni_list_item, {
                ellipsis: "2",
                title: "超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",
                rightText: "二行显示"
              }),
              createVNode(_component_uni_list_item, {
                ellipsis: "1",
                title: "全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",
                note: "列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字",
                showArrow: "",
                rightText: "一行显示"
              }),
              createVNode(_component_uni_list_item, {
                title: "全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",
                showArrow: "",
                rightText: "全部"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "显示图标或图片",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                "show-extra-icon": true,
                showArrow: "",
                "extra-icon": $data.extraIcon,
                title: "列表左侧带扩展图标"
              }, null, 8, ["extra-icon"]),
              createVNode(_component_uni_list_item, {
                title: "列表左侧带略缩图",
                note: "列表描述信息",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "sm",
                rightText: "小图"
              }),
              createVNode(_component_uni_list_item, {
                title: "列表左侧带略缩图",
                note: "列表描述信息",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "base",
                rightText: "默认"
              }),
              createVNode(_component_uni_list_item, {
                title: "列表左侧带略缩图",
                note: "列表描述信息",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "lg",
                rightText: "大图"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "使用插槽",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, null, {
                body: withCtx(() => [
                  createElementVNode("view", { class: "slot-box" }, [
                    createElementVNode("u-text", { class: "slot-text" }, "使用 body 插槽")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_uni_list_item, {
                title: "自定义右侧插槽",
                note: "列表描述信息",
                link: ""
              }, {
                footer: withCtx(() => [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    src: "/static/logo.png",
                    mode: "widthFix"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_uni_list_item, null, {
                header: withCtx(() => [
                  createElementVNode("view", { class: "slot-box" }, [
                    createElementVNode("u-image", {
                      class: "slot-image",
                      src: "/static/logo.png",
                      mode: "widthFix"
                    })
                  ])
                ]),
                body: withCtx(() => [
                  createElementVNode("u-text", { class: "slot-box slot-text" }, "自定义两侧插槽")
                ]),
                footer: withCtx(() => [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    src: "/static/logo.png",
                    mode: "widthFix"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  list as default
};
