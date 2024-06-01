import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "icon-content": { "": { "display": "flex", "flexWrap": "wrap", "flexDirection": "row", "justifyContent": "center" } }, "icon-item": { ".icon-content ": { "width": "187rpx", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "textAlign": "center", "flexDirection": "column" } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      iconClassList: [{
        "name": "arrow-down",
        "unicode": "e6be"
      }, {
        "name": "arrow-left",
        "unicode": "e6bc"
      }, {
        "name": "arrow-right",
        "unicode": "e6bb"
      }, {
        "name": "arrow-up",
        "unicode": "e6bd"
      }, {
        "name": "bottom",
        "unicode": "e6b8"
      }, {
        "name": "left",
        "unicode": "e6b7"
      }, {
        "name": "right",
        "unicode": "e6b5"
      }, {
        "name": "top",
        "unicode": "e6b6"
      }, {
        "name": "back",
        "unicode": "e6b9"
      }, {
        "name": "forward",
        "unicode": "e6ba"
      }, {
        "name": "checkmarkempty",
        "unicode": "e65c"
      }, {
        "name": "closeempty",
        "unicode": "e66c"
      }, {
        "name": "color",
        "unicode": "e6cf"
      }, {
        "name": "color-filled",
        "unicode": "e6c9"
      }, {
        "name": "wallet",
        "unicode": "e6b1"
      }, {
        "name": "wallet-filled",
        "unicode": "e6c2"
      }, {
        "name": "tune",
        "unicode": "e6aa"
      }, {
        "name": "tune-filled",
        "unicode": "e6ca"
      }, {
        "name": "settings",
        "unicode": "e560"
      }, {
        "name": "settings-filled",
        "unicode": "e6ce"
      }, {
        "name": "folder-add",
        "unicode": "e6a9"
      }, {
        "name": "folder-add-filled",
        "unicode": "e6c8"
      }, {
        "name": "calendar",
        "unicode": "e6a8"
      }, {
        "name": "calendar-filled",
        "unicode": "e6c0"
      }, {
        "name": "vip",
        "unicode": "e6a8"
      }, {
        "name": "vip-filled",
        "unicode": "e6c6"
      }, {
        "name": "notification",
        "unicode": "e6a6"
      }, {
        "name": "notification-filled",
        "unicode": "e6c1"
      }, {
        "name": "gift",
        "unicode": "e6a4"
      }, {
        "name": "gift-filled",
        "unicode": "e6c4"
      }, {
        "name": "medal",
        "unicode": "e6a2"
      }, {
        "name": "medal-filled",
        "unicode": "e6c3"
      }, {
        "name": "fire",
        "unicode": "e6a1"
      }, {
        "name": "fire-filled",
        "unicode": "e6c5"
      }, {
        "name": "camera",
        "unicode": "e301"
      }, {
        "name": "camera-filled",
        "unicode": "e7ef"
      }, {
        "name": "cart",
        "unicode": "e7f5"
      }, {
        "name": "cart-filled",
        "unicode": "e7f4"
      }, {
        "name": "chat",
        "unicode": "e263"
      }, {
        "name": "chat-filled",
        "unicode": "e847"
      }, {
        "name": "chatboxes",
        "unicode": "e203"
      }, {
        "name": "chatboxes-filled",
        "unicode": "e233"
      }, {
        "name": "chatbubble",
        "unicode": "e202"
      }, {
        "name": "chatbubble-filled",
        "unicode": "e232"
      }, {
        "name": "minus",
        "unicode": "e410"
      }, {
        "name": "minus-filled",
        "unicode": "e440"
      }, {
        "name": "plus",
        "unicode": "e409"
      }, {
        "name": "plus-filled",
        "unicode": "e439"
      }, {
        "name": "checkbox",
        "unicode": "e7fa"
      }, {
        "name": "checkbox-filled",
        "unicode": "e442"
      }, {
        "name": "close",
        "unicode": "e404"
      }, {
        "name": "clear",
        "unicode": "e434"
      }, {
        "name": "circle",
        "unicode": "e411"
      }, {
        "name": "circle-filled",
        "unicode": "e441"
      }, {
        "name": "help",
        "unicode": "e505"
      }, {
        "name": "help-filled",
        "unicode": "e535"
      }, {
        "name": "info",
        "unicode": "e504"
      }, {
        "name": "info-filled",
        "unicode": "e534"
      }, {
        "name": "smallcircle",
        "unicode": "e868"
      }, {
        "name": "smallcircle-filled",
        "unicode": "e801"
      }, {
        "name": "upload",
        "unicode": "e402"
      }, {
        "name": "upload-filled",
        "unicode": "e8b1"
      }, {
        "name": "download",
        "unicode": "e403"
      }, {
        "name": "download-filled",
        "unicode": "e8a4"
      }, {
        "name": "cloud-download",
        "unicode": "e8e4"
      }, {
        "name": "cloud-download-filled",
        "unicode": "e8e9"
      }, {
        "name": "cloud-upload",
        "unicode": "e8e6"
      }, {
        "name": "cloud-upload-filled",
        "unicode": "e8e5"
      }, {
        "name": "email",
        "unicode": "e201"
      }, {
        "name": "email-filled",
        "unicode": "e231"
      }, {
        "name": "mail-open",
        "unicode": "e84e"
      }, {
        "name": "mail-open-filled",
        "unicode": "e84d"
      }, {
        "name": "eye",
        "unicode": "e824"
      }, {
        "name": "eye-filled",
        "unicode": "e568"
      }, {
        "name": "eye-slash",
        "unicode": "e823"
      }, {
        "name": "eye-slash-filled",
        "unicode": "e822"
      }, {
        "name": "hand-down",
        "unicode": "e83c"
      }, {
        "name": "hand-down-filled",
        "unicode": "e83b"
      }, {
        "name": "hand-up",
        "unicode": "e83f"
      }, {
        "name": "hand-up-filled",
        "unicode": "e83d"
      }, {
        "name": "gear",
        "unicode": "e502"
      }, {
        "name": "gear-filled",
        "unicode": "e532"
      }, {
        "name": "flag",
        "unicode": "e508"
      }, {
        "name": "flag-filled",
        "unicode": "e825"
      }, {
        "name": "heart",
        "unicode": "e840"
      }, {
        "name": "heart-filled",
        "unicode": "e83e"
      }, {
        "name": "home",
        "unicode": "e500"
      }, {
        "name": "home-filled",
        "unicode": "e530"
      }, {
        "name": "image",
        "unicode": "e363"
      }, {
        "name": "image-filled",
        "unicode": "e877"
      }, {
        "name": "images",
        "unicode": "e87b"
      }, {
        "name": "images-filled",
        "unicode": "e87a"
      }, {
        "name": "locked",
        "unicode": "e506"
      }, {
        "name": "locked-filled",
        "unicode": "e856"
      }, {
        "name": "location",
        "unicode": "e303"
      }, {
        "name": "location-filled",
        "unicode": "e333"
      }, {
        "name": "map",
        "unicode": "e364"
      }, {
        "name": "map-filled",
        "unicode": "e85c"
      }, {
        "name": "map-pin",
        "unicode": "e85e"
      }, {
        "name": "map-pin-ellipse",
        "unicode": "e864"
      }, {
        "name": "mic",
        "unicode": "e302"
      }, {
        "name": "mic-filled",
        "unicode": "e332"
      }, {
        "name": "micoff",
        "unicode": "e360"
      }, {
        "name": "micoff-filled",
        "unicode": "e892"
      }, {
        "name": "more",
        "unicode": "e507"
      }, {
        "name": "more-filled",
        "unicode": "e537"
      }, {
        "name": "navigate",
        "unicode": "e501"
      }, {
        "name": "navigate-filled",
        "unicode": "e884"
      }, {
        "name": "paperplane",
        "unicode": "e503"
      }, {
        "name": "paperplane-filled",
        "unicode": "e86e"
      }, {
        "name": "contact",
        "unicode": "e100"
      }, {
        "name": "contact-filled",
        "unicode": "e130"
      }, {
        "name": "auth",
        "unicode": "e6ab"
      }, {
        "name": "auth-filled",
        "unicode": "e6cc"
      }, {
        "name": "staff",
        "unicode": "e6a7"
      }, {
        "name": "staff-filled",
        "unicode": "e6cb"
      }, {
        "name": "person",
        "unicode": "e101"
      }, {
        "name": "person-filled",
        "unicode": "e131"
      }, {
        "name": "personadd",
        "unicode": "e102"
      }, {
        "name": "personadd-filled",
        "unicode": "e132"
      }, {
        "name": "phone",
        "unicode": "e200"
      }, {
        "name": "phone-filled",
        "unicode": "e230"
      }, {
        "name": "refresh",
        "unicode": "e407"
      }, {
        "name": "refresh-filled",
        "unicode": "e437"
      }, {
        "name": "redo",
        "unicode": "e405"
      }, {
        "name": "redo-filled",
        "unicode": "e7d9"
      }, {
        "name": "undo",
        "unicode": "e406"
      }, {
        "name": "undo-filled",
        "unicode": "e7d6"
      }, {
        "name": "qq",
        "unicode": "e264"
      }, {
        "name": "weibo",
        "unicode": "e260"
      }, {
        "name": "weixin",
        "unicode": "e261"
      }, {
        "name": "pyq",
        "unicode": "e262"
      }, {
        "name": "sound",
        "unicode": "e590"
      }, {
        "name": "sound-filled",
        "unicode": "e8a1"
      }, {
        "name": "videocam",
        "unicode": "e300"
      }, {
        "name": "videocam-filled",
        "unicode": "e8af"
      }, {
        "name": "trash",
        "unicode": "e401"
      }, {
        "name": "trash-filled",
        "unicode": "e8dc"
      }, {
        "name": "refreshempty",
        "unicode": "e461"
      }, {
        "name": "reload",
        "unicode": "e462"
      }, {
        "name": "star",
        "unicode": "e408"
      }, {
        "name": "star-filled",
        "unicode": "e438"
      }, {
        "name": "starhalf",
        "unicode": "e463"
      }, {
        "name": "spinner-cycle",
        "unicode": "e465"
      }, {
        "name": "link",
        "unicode": "e6a5"
      }, {
        "name": "font",
        "unicode": "e6a3"
      }, {
        "name": "scan",
        "unicode": "e612"
      }, {
        "name": "search",
        "unicode": "e466"
      }, {
        "name": "compose",
        "unicode": "e400"
      }, {
        "name": "bars",
        "unicode": "e563"
      }, {
        "name": "list",
        "unicode": "e562"
      }, {
        "name": "loop",
        "unicode": "e565"
      }, {
        "name": "paperclip",
        "unicode": "e567"
      }, {
        "name": "plusempty",
        "unicode": "e468"
      }, {
        "name": "pulldown",
        "unicode": "e588"
      }, {
        "name": "headphones",
        "unicode": "e8bf"
      }, {
        "name": "shop",
        "shop": "e609"
      }, {
        "name": "shop-filled",
        "unicode": "e6cd"
      }],
      activeIndex: -1,
      checked: false
    };
  },
  methods: {
    change(e) {
      this.checked = e.detail.value === "false" || !e.detail.value ? false : true;
    },
    switchActive(index, item) {
      this.activeIndex = index;
      uni.setClipboardData({
        data: !this.checked ? item.name : item.unicode,
        success: () => {
          uni.showToast({
            icon: "none",
            title: `${!this.checked ? "图标名称" : "unicode"}复制成功`
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_switch = resolveComponent("switch");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
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
          createElementVNode("u-text", { class: "uni-h6" }, "图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "图标",
        type: "line"
      }, {
        right: withCtx(() => [
          createElementVNode("view", null, [
            createVNode(_component_switch, {
              checked: $data.checked,
              onChange: $options.change
            }, null, 8, ["checked", "onChange"])
          ])
        ]),
        default: withCtx(() => [
          createElementVNode("view", { class: "icon-content" }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.iconClassList, (item, index) => {
              return openBlock(), createElementBlock("view", {
                key: index,
                class: "icon-item",
                onClick: ($event) => $options.switchActive(index, item)
              }, [
                createVNode(_component_uni_icons, {
                  type: item.name,
                  color: $data.activeIndex === index ? "#007aff" : "#5e6d82",
                  size: "30"
                }, null, 8, ["type", "color"]),
                createElementVNode("u-text", {
                  style: normalizeStyle({ color: $data.activeIndex === index ? "#007aff" : "#5e6d82" }),
                  class: "uni-mt-5 uni-subtitle"
                }, toDisplayString($data.checked ? item.unicode : item.name), 5)
              ], 8, ["onClick"]);
            }), 128))
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  icons as default
};
