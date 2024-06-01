import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "video": { "": { "width": "750rpx", "height": "400rpx", "backgroundColor": "#808080" } }, "btn": { "": { "marginTop": 5, "marginBottom": 5 } } };
const _sfc_main = {
  data() {
    return {
      src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",
      fil: true,
      list: [{
        text: "要显示的文本",
        color: "#FF0000",
        time: 9
      }]
    };
  },
  onReady() {
    this.context = uni.createVideoContext("video1", this);
  },
  methods: {
    onstart(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:36", "onstart:" + JSON.stringify(e));
    },
    onpause(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:39", "onpause:" + JSON.stringify(e));
    },
    onfinish(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:42", "onfinish:" + JSON.stringify(e));
    },
    onfail(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:45", "onfail:" + JSON.stringify(e));
    },
    fullscreenchange(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:48", "fullscreenchange:" + JSON.stringify(e));
    },
    waiting(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:51", "waiting:" + JSON.stringify(e));
    },
    timeupdate(e) {
      formatAppLog("log", "at pages/component/video/video.nvue:54", "timeupdate:" + JSON.stringify(e));
    },
    play() {
      this.context.play();
    },
    pause() {
      this.context.pause();
    },
    seek() {
      this.context.seek(20);
    },
    stop() {
      this.context.stop();
    },
    fullScreen() {
      this.context.requestFullScreen({
        direction: 90
      });
    },
    exitFullScreen() {
      this.context.exitFullScreen();
    },
    sendDanmu() {
      this.context.sendDanmu({
        text: "要显示的弹幕文本",
        color: "#FF0000"
      });
    },
    playbackRate() {
      this.context.playbackRate(2);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("div", null, [
      createElementVNode("u-video", {
        id: "video1",
        class: "video",
        src: $data.src,
        autoplay: "false",
        duration: "",
        controls: "true",
        danmuList: $data.list,
        danmuBtn: "true",
        enableDanmu: "true",
        loop: true,
        muted: "true",
        initialTime: "",
        direction: "-90",
        showMuteBtn: "true",
        onPlay: _cache[0] || (_cache[0] = (...args) => $options.onstart && $options.onstart(...args)),
        onPause: _cache[1] || (_cache[1] = (...args) => $options.onpause && $options.onpause(...args)),
        onEnded: _cache[2] || (_cache[2] = (...args) => $options.onfinish && $options.onfinish(...args)),
        onError: _cache[3] || (_cache[3] = (...args) => $options.onfail && $options.onfail(...args)),
        onWaiting: _cache[4] || (_cache[4] = (...args) => $options.waiting && $options.waiting(...args)),
        onTimeupdate: _cache[5] || (_cache[5] = (...args) => $options.timeupdate && $options.timeupdate(...args)),
        onFullscreenchange: _cache[6] || (_cache[6] = (...args) => $options.fullscreenchange && $options.fullscreenchange(...args))
      }, null, 40, ["src", "danmuList"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.play
      }, {
        default: withCtx(() => [
          createTextVNode("播放")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.pause
      }, {
        default: withCtx(() => [
          createTextVNode("暂停")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.seek
      }, {
        default: withCtx(() => [
          createTextVNode("跳转到指定位置")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.stop
      }, {
        default: withCtx(() => [
          createTextVNode("停止")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.fullScreen
      }, {
        default: withCtx(() => [
          createTextVNode("全屏")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.exitFullScreen
      }, {
        default: withCtx(() => [
          createTextVNode("退出全屏")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.playbackRate
      }, {
        default: withCtx(() => [
          createTextVNode("设置倍速")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.sendDanmu
      }, {
        default: withCtx(() => [
          createTextVNode("发送弹幕")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])
  ]);
}
const video = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  video as default
};
