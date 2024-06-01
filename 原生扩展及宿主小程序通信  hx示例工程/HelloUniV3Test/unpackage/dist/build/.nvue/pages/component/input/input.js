import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, normalizeClass } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "nvue-page-root": { "": { "backgroundColor": "#F8F8F8", "paddingBottom": 20 } }, "page-title": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": "35rpx", "paddingRight": "35rpx", "paddingBottom": "35rpx", "paddingLeft": "35rpx" } }, "page-title__wrapper": { "": { "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20, "borderBottomColor": "#D8D8D8", "borderBottomWidth": 1 } }, "page-title__text": { "": { "fontSize": 16, "height": 48, "lineHeight": 48, "color": "#BEBEBE" } }, "title": { "": { "paddingTop": 5, "paddingRight": 13, "paddingBottom": 5, "paddingLeft": 13 } }, "uni-form-item__title": { "": { "fontSize": 16, "lineHeight": 24 } }, "uni-input-wrapper": { "": { "paddingTop": 8, "paddingRight": 13, "paddingBottom": 8, "paddingLeft": 13, "flexDirection": "row", "flexWrap": "nowrap", "backgroundColor": "#FFFFFF" } }, "uni-input": { "": { "height": 28, "lineHeight": 28, "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "flex": 1, "backgroundColor": "#FFFFFF" } }, "uni-icon": { "": { "fontFamily": "uniicons", "fontSize": 24, "fontWeight": "normal", "fontStyle": "normal", "width": 24, "height": 24, "lineHeight": 24, "color": "#999999" } }, "uni-eye-active": { "": { "color": "#007AFF" } } };
const _sfc_main = {
  data() {
    return {
      title: "input",
      focus: false,
      inputValue: "",
      showClearIcon: false,
      inputClearValue: "",
      changeValue: "",
      showPassword: true,
      src: "../../../static/eye-1.png",
      platform: "",
      isNvue: false
    };
  },
  methods: {
    onKeyInput: function(event) {
      this.inputValue = event.detail.value;
    },
    replaceInput: function(event) {
      var value = event.detail.value;
      if (value === "11") {
        this.changeValue = "2";
      }
    },
    hideKeyboard: function(event) {
      if (event.detail.value === "123") {
        uni.hideKeyboard();
      }
    },
    clearInput: function(event) {
      this.inputClearValue = event.detail.value;
      if (event.detail.value.length > 0) {
        this.showClearIcon = true;
      } else {
        this.showClearIcon = false;
      }
    },
    clearIcon: function() {
      this.inputClearValue = "";
      this.showClearIcon = false;
    },
    changePassword: function() {
      this.showPassword = !this.showPassword;
    },
    onFocus() {
      this.$mp.page.$getAppWebview().setStyle({
        softinputNavBar: "none"
      });
    },
    onBlur() {
      this.$mp.page.$getAppWebview().setStyle({
        softinputNavBar: "auto"
      });
    }
  },
  onLoad() {
    this.platform = uni.getSystemInfoSync().platform;
    this.isNvue = true;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "nvue-page-root" }, [
      createElementVNode("view", { class: "page-title" }, [
        createElementVNode("view", { class: "page-title__wrapper" }, [
          createElementVNode("u-text", { class: "page-title__text" }, toDisplayString($data.title), 1)
        ])
      ]),
      createElementVNode("view", { class: "uni-common-mt" }, [
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "可自动聚焦的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              focus: "",
              placeholder: "自动获得焦点"
            })
          ])
        ]),
        $data.platform === "ios" && !$data.isNvue ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-form-item uni-column"
        }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "隐藏 iOS 软键盘上的导航条")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "触摸其他地方收起键盘",
              onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args))
            }, null, 32)
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "键盘右下角按钮显示为搜索")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              confirmType: "search",
              placeholder: "键盘右下角按钮显示为搜索"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "键盘右下角按钮显示为发送")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              confirmType: "send",
              placeholder: "键盘右下角按钮显示为发送"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "控制最大输入长度的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              maxlength: "10",
              placeholder: "最大输入长度为10"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "实时获取输入值：" + toDisplayString($data.inputValue), 1)
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.onKeyInput && $options.onKeyInput(...args)),
              placeholder: "输入同步到view中"
            }, null, 32)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "控制输入的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              onInput: [
                _cache[3] || (_cache[3] = (...args) => $options.replaceInput && $options.replaceInput(...args)),
                _cache[4] || (_cache[4] = ($event) => $data.changeValue = $event.detail.value)
              ],
              modelValue: $data.changeValue,
              placeholder: "连续的两个1会变成2"
            }, null, 40, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "控制键盘的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              ref: "input1",
              onInput: _cache[5] || (_cache[5] = (...args) => $options.hideKeyboard && $options.hideKeyboard(...args)),
              placeholder: "输入123自动收起键盘"
            }, null, 544)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "数字输入的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "number",
              placeholder: "这是一个数字输入框"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "密码输入的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              password: "",
              type: "text",
              placeholder: "这是一个密码输入框"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "带小数点的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "digit",
              placeholder: "带小数点的数字键盘"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "身份证输入的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "idcard",
              placeholder: "身份证输入键盘"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "控制占位符颜色的 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholderStyle: "color:#F76260",
              placeholder: "占位符字体是红色的"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "带清除按钮的输入框")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "带清除按钮的输入框",
              value: $data.inputClearValue,
              onInput: _cache[6] || (_cache[6] = (...args) => $options.clearInput && $options.clearInput(...args))
            }, null, 40, ["value"]),
            $data.showClearIcon ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-icon",
              onClick: _cache[7] || (_cache[7] = (...args) => $options.clearIcon && $options.clearIcon(...args))
            }, "")) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "可查看密码的输入框")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "请输入密码",
              password: $data.showPassword
            }, null, 8, ["password"]),
            createElementVNode("u-text", {
              class: normalizeClass(["uni-icon", [!$data.showPassword ? "uni-eye-active" : ""]]),
              onClick: _cache[8] || (_cache[8] = (...args) => $options.changePassword && $options.changePassword(...args))
            }, "", 2)
          ])
        ])
      ])
    ])
  ]);
}
const input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  input as default
};
