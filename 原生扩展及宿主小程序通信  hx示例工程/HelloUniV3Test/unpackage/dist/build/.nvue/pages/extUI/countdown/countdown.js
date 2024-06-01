import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, normalizeStyle, toDisplayString, createCommentVNode, createElementVNode, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
const en = {
  "uni-countdown.day": "day",
  "uni-countdown.h": "h",
  "uni-countdown.m": "m",
  "uni-countdown.s": "s"
};
const zhHans = {
  "uni-countdown.day": "天",
  "uni-countdown.h": "时",
  "uni-countdown.m": "分",
  "uni-countdown.s": "秒"
};
const zhHant = {
  "uni-countdown.day": "天",
  "uni-countdown.h": "時",
  "uni-countdown.m": "分",
  "uni-countdown.s": "秒"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0 = { "uni-countdown": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-countdown__splitor": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "fontSize": 14, "color": "#333333" } }, "uni-countdown__number": { "": { "borderRadius": 3, "textAlign": "center", "fontSize": 14 } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$1 = {
  name: "UniCountdown",
  emits: ["timeup"],
  props: {
    showDay: {
      type: Boolean,
      default: true
    },
    showColon: {
      type: Boolean,
      default: true
    },
    start: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333"
    },
    fontSize: {
      type: Number,
      default: 14
    },
    splitorColor: {
      type: String,
      default: "#333"
    },
    day: {
      type: Number,
      default: 0
    },
    hour: {
      type: Number,
      default: 0
    },
    minute: {
      type: Number,
      default: 0
    },
    second: {
      type: Number,
      default: 0
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timer: null,
      syncFlag: false,
      d: "00",
      h: "00",
      i: "00",
      s: "00",
      leftTime: 0,
      seconds: 0
    };
  },
  computed: {
    dayText() {
      return t("uni-countdown.day");
    },
    hourText(val) {
      return t("uni-countdown.h");
    },
    minuteText(val) {
      return t("uni-countdown.m");
    },
    secondText(val) {
      return t("uni-countdown.s");
    },
    timeStyle() {
      const {
        color,
        backgroundColor,
        fontSize
      } = this;
      return {
        color,
        backgroundColor,
        fontSize: `${fontSize}px`,
        width: `${fontSize * 22 / 14}px`,
        // 按字体大小为 14px 时的比例缩放
        lineHeight: `${fontSize * 20 / 14}px`,
        borderRadius: `${fontSize * 3 / 14}px`
      };
    },
    splitorStyle() {
      const { splitorColor, fontSize, backgroundColor } = this;
      return {
        color: splitorColor,
        fontSize: `${fontSize * 12 / 14}px`,
        margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
      };
    }
  },
  watch: {
    day(val) {
      this.changeFlag();
    },
    hour(val) {
      this.changeFlag();
    },
    minute(val) {
      this.changeFlag();
    },
    second(val) {
      this.changeFlag();
    },
    start: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) {
          this.startData();
        } else {
          if (!oldVal)
            return;
          clearInterval(this.timer);
        }
      }
    }
  },
  created: function(e) {
    this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
    this.countDown();
  },
  unmounted() {
    clearInterval(this.timer);
  },
  methods: {
    toSeconds(timestamp, day, hours, minutes, seconds) {
      if (timestamp) {
        return timestamp - parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10);
      }
      return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
    },
    timeUp() {
      clearInterval(this.timer);
      this.$emit("timeup");
    },
    countDown() {
      let seconds = this.seconds;
      let [day, hour, minute, second] = [0, 0, 0, 0];
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24));
        hour = Math.floor(seconds / (60 * 60)) - day * 24;
        minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
        second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      } else {
        this.timeUp();
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      this.d = day;
      this.h = hour;
      this.i = minute;
      this.s = second;
    },
    startData() {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      if (this.seconds <= 0) {
        this.seconds = this.toSeconds(0, 0, 0, 0, 0);
        this.countDown();
        return;
      }
      clearInterval(this.timer);
      this.countDown();
      this.timer = setInterval(() => {
        this.seconds--;
        if (this.seconds < 0) {
          this.timeUp();
          return;
        }
        this.countDown();
      }, 1e3);
    },
    update() {
      this.startData();
    },
    changeFlag() {
      if (!this.syncFlag) {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        this.startData();
        this.syncFlag = true;
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-countdown",
    renderWhole: true
  }, [
    $props.showDay ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.d), 5)) : createCommentVNode("", true),
    $props.showDay ? (openBlock(), createElementBlock("u-text", {
      key: 1,
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($options.dayText), 5)) : createCommentVNode("", true),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.h), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($props.showColon ? ":" : $options.hourText), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.i), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($props.showColon ? ":" : $options.minuteText), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.s), 5),
    !$props.showColon ? (openBlock(), createElementBlock("u-text", {
      key: 2,
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($options.secondText), 5)) : createCommentVNode("", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      testHour: 1,
      testMinute: 0,
      testSecond: 0,
      start: false,
      timeupSecond: 10
    };
  },
  mounted() {
    setTimeout(() => {
      this.testHour = 1;
      this.testMinute = 1;
      this.testSecond = 0;
      this.start = true;
    }, 3e3);
    setTimeout(() => {
      this.start = false;
    }, 1e4);
  },
  methods: {
    timeup() {
      uni.showToast({
        title: "时间到"
      });
      this.timeupSecond = 29;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_countdown = resolveEasycom(resolveDynamicComponent("uni-countdown"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, { "is-full": "" }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "一般用法",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            day: 1,
            hour: 1,
            minute: 12,
            second: 40
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "不显示天数",
        subTitle: "设置 show-day = false 不显示天",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            hour: 12,
            minute: 12,
            second: 12
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "文字分隔符",
        subTitle: "设置 show-colon 属性设置分隔符样式",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            minute: 30,
            second: 0,
            "show-colon": false
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "修改颜色",
        subTitle: "设置 color \\ background 属性设置组件颜色",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            day: 1,
            hour: 2,
            minute: 30,
            second: 0,
            color: "#FFFFFF",
            "background-color": "#007AFF"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "修改字体大小",
        subTitle: "设置 font-size 属性设置组件大小",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "font-size": 30,
            day: 1,
            hour: 2,
            minute: 30,
            second: 0
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "修改颜色 + 字体大小",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "font-size": 30,
            day: 1,
            hour: 2,
            minute: 30,
            second: 0,
            color: "#FFFFFF",
            "background-color": "#007AFF"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "自由控制开始/暂停",
        subTitle: "设置 start 属性控制是否自动开启",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            start: $data.start,
            day: 1,
            hour: 1,
            minute: 12,
            second: 40
          }, null, 8, ["start"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "倒计时回调事件",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            second: $data.timeupSecond,
            onTimeup: $options.timeup
          }, null, 8, ["second", "onTimeup"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "动态赋值",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            hour: $data.testHour,
            minute: $data.testMinute,
            second: $data.testSecond
          }, null, 8, ["hour", "minute", "second"])
        ]),
        _: 1
      })
    ])
  ]);
}
const countdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  countdown as default
};
