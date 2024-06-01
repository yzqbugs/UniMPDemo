import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "page": { "": { "flex": 1 } }, "swiper": { "": { "flex": 1, "backgroundColor": "#007AFF" } }, "swiper-item": { "": { "flex": 1 } }, "video": { "": { "flex": 1 } } };
const videoData = [
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"
  },
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"
  },
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"
  },
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"
  },
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"
  },
  {
    src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"
  }
];
const _sfc_main = {
  data() {
    return {
      circular: true,
      videoList: [
        {
          id: "video0",
          src: "",
          img: ""
        },
        {
          id: "video1",
          src: "",
          img: ""
        },
        {
          id: "video2",
          src: "",
          img: ""
        }
      ],
      videoDataList: []
    };
  },
  onLoad(e) {
  },
  onReady() {
    this.init();
    this.getData();
  },
  methods: {
    init() {
      this._videoIndex = 0;
      this._videoContextList = [];
      for (var i = 0; i < this.videoList.length; i++) {
        this._videoContextList.push(uni.createVideoContext("video" + i, this));
      }
      this._videoDataIndex = 0;
    },
    getData(e) {
      this.videoDataList = videoData;
      setTimeout(() => {
        this.updateVideo(true);
      }, 200);
    },
    onSwiperChange(e) {
      let currentIndex = e.detail.current;
      if (currentIndex === this._videoIndex) {
        return;
      }
      let isNext = false;
      if (currentIndex === 0 && this._videoIndex === this.videoList.length - 1) {
        isNext = true;
      } else if (currentIndex === this.videoList.length - 1 && this._videoIndex === 0) {
        isNext = false;
      } else if (currentIndex > this._videoIndex) {
        isNext = true;
      }
      if (isNext) {
        this._videoDataIndex++;
      } else {
        this._videoDataIndex--;
      }
      if (this._videoDataIndex < 0) {
        this._videoDataIndex = this.videoDataList.length - 1;
      } else if (this._videoDataIndex >= this.videoDataList.length) {
        this._videoDataIndex = 0;
      }
      this.circular = this._videoDataIndex != 0;
      if (this._videoIndex >= 0) {
        this._videoContextList[this._videoIndex].pause();
        this._videoContextList[this._videoIndex].seek(0);
      }
      this._videoIndex = currentIndex;
      setTimeout(() => {
        this.updateVideo(isNext);
      }, 200);
    },
    getNextIndex(isNext) {
      let index = this._videoIndex + (isNext ? 1 : -1);
      if (index < 0) {
        return this.videoList.length - 1;
      } else if (index >= this.videoList.length) {
        return 0;
      }
      return index;
    },
    getNextDataIndex(isNext) {
      let index = this._videoDataIndex + (isNext ? 1 : -1);
      if (index < 0) {
        return this.videoDataList.length - 1;
      } else if (index >= this.videoDataList.length) {
        return 0;
      }
      return index;
    },
    updateVideo(isNext) {
      this.$set(this.videoList[this._videoIndex], "src", this.videoDataList[this._videoDataIndex].src);
      this.$set(this.videoList[this.getNextIndex(isNext)], "src", this.videoDataList[this.getNextDataIndex(isNext)].src);
      setTimeout(() => {
        this._videoContextList[this._videoIndex].play();
      }, 200);
      formatAppLog("log", "at pages/template/swiper-vertical/swiper-vertical.nvue:139", "v:" + this._videoIndex + " d:" + this._videoDataIndex + "; next v:" + this.getNextIndex(
        isNext
      ) + " next d:" + this.getNextDataIndex(isNext));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "page" }, [
      createVNode(_component_swiper, {
        class: "swiper",
        circular: $data.circular,
        vertical: true,
        onChange: $options.onSwiperChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.videoList, (item) => {
            return openBlock(), createBlock(_component_swiper_item, {
              key: item.id
            }, {
              default: withCtx(() => [
                createElementVNode("u-video", {
                  class: "video",
                  id: item.id,
                  ref_for: true,
                  ref: item.id,
                  src: item.src,
                  controls: false,
                  loop: true,
                  showCenterPlayBtn: false
                }, null, 8, ["id", "src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["circular", "onChange"])
    ])
  ]);
}
const swiperVertical = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  swiperVertical as default
};
