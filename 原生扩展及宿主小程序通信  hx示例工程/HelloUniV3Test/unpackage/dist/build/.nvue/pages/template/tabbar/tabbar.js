import { openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, toDisplayString, createCommentVNode, Fragment, renderList, withModifiers, resolveComponent, createVNode, withCtx, createBlock } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0$1 = { "view": { "": { "flexDirection": "column" } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-col": { "": { "flexDirection": "column" } }, "list-cell": { "": { "width": "750rpx", "paddingTop": 0, "paddingRight": "30rpx", "paddingBottom": 0, "paddingLeft": "30rpx" } }, "uni-list-cell-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item": { "": { "position": "relative", "flex": 1, "flexDirection": "column", "paddingTop": "20rpx", "paddingRight": "30rpx", "paddingBottom": "21rpx", "paddingLeft": "30rpx" } }, "media-item-hover": { "": { "backgroundColor": "#eeeeee" } }, "media-item-line": { "": { "position": "absolute", "left": "30rpx", "right": "30rpx", "bottom": 0, "height": "1rpx", "backgroundColor": "#ebebeb" } }, "media-image-right": { "": { "flexDirection": "row" } }, "media-image-left": { "": { "flexDirection": "row-reverse" } }, "media-title": { "": { "flex": 1, "lines": 3, "textOverflow": "ellipsis", "fontSize": "30rpx", "color": "#555555" } }, "media-title2": { "": { "flex": 1, "marginTop": "6rpx", "lineHeight": "40rpx" } }, "image-section": { "": { "marginTop": "20rpx", "flexDirection": "row", "justifyContent": "space-between" } }, "image-section-right": { "": { "marginTop": "0rpx", "marginLeft": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-section-left": { "": { "marginTop": "0rpx", "marginRight": "10rpx", "width": "225rpx", "height": "146rpx" } }, "image-list1": { "": { "width": "690rpx", "height": "481rpx" } }, "image-list2": { "": { "width": "225rpx", "height": "146rpx" } }, "image-list3": { "": { "width": "225rpx", "height": "146rpx" } }, "media-info": { "": { "flexDirection": "row", "alignItems": "center" } }, "info-text": { "": { "marginRight": "20rpx", "color": "#999999", "fontSize": "24rpx" } }, "media-foot": { "": { "marginTop": "25rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "max-close-view": { "": { "position": "relative", "alignItems": "center", "flexDirection": "row", "width": "40rpx", "height": "30rpx", "lineHeight": "30rpx", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#aaaaaa", "borderRadius": 4, "justifyContent": "center", "textAlign": "center" } }, "close-l": { "": { "position": "absolute", "width": "18rpx", "height": "1rpx", "backgroundColor": "#aaaaaa" } }, "close-h": { "": { "transform": "rotate(45deg)" } }, "close-v": { "": { "transform": "rotate(-45deg)" } } };
const _sfc_main$1 = {
  props: {
    options: {
      type: Object,
      default: function(e) {
        return {};
      }
    }
  },
  methods: {
    click() {
      this.$emit("click");
    },
    close(e) {
      this.$emit("close");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.options.title ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: "media-item view",
    hoverClass: "media-item-hover",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.click && $options.click(...args)),
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "view",
      style: normalizeStyle({ flexDirection: $props.options.article_type === 1 || $props.options.article_type === 2 ? $props.options.article_type === 2 ? "row" : "row-reverse" : "column" })
    }, [
      createElementVNode("u-text", {
        class: normalizeClass(["media-title", { "media-title2": $props.options.article_type === 1 || $props.options.article_type === 2 }])
      }, toDisplayString($props.options.title), 3),
      $props.options.image_list || $props.options.image_url ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["image-section flex-row", { "image-section-right": $props.options.article_type === 2, "image-section-left": $props.options.article_type === 1 }]),
        style: { flexDirection: "row" }
      }, [
        $props.options.image_url ? (openBlock(), createElementBlock("u-image", {
          key: 0,
          class: normalizeClass(["image-list1", { "image-list2": $props.options.article_type === 1 || $props.options.article_type === 2 }]),
          src: $props.options.image_url
        }, null, 10, ["src"])) : createCommentVNode("", true),
        $props.options.image_list ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($props.options.image_list, (source, i) => {
          return openBlock(), createElementBlock("u-image", {
            class: "image-list3",
            src: source.url,
            key: i
          }, null, 8, ["src"]);
        }), 128)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true)
    ], 4),
    createElementVNode("view", {
      class: "media-foot flex-row",
      style: { "flex-direction": "row" }
    }, [
      createElementVNode("view", {
        class: "media-info flex-row",
        style: { "flex-direction": "row" }
      }, [
        createElementVNode("u-text", { class: "info-text" }, toDisplayString($props.options.source), 1),
        createElementVNode("u-text", { class: "info-text" }, toDisplayString($props.options.comment_count) + "条评论", 1),
        createElementVNode("u-text", { class: "info-text" }, toDisplayString($props.options.datetime), 1)
      ]),
      createElementVNode("view", {
        class: "max-close-view",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.close && $options.close(...args), ["stop"]))
      }, [
        createElementVNode("view", { class: "close-l close-h" }),
        createElementVNode("view", { class: "close-l close-v" })
      ])
    ]),
    createElementVNode("view", {
      class: "media-item-line",
      style: { "position": "absolute" }
    })
  ])) : createCommentVNode("", true);
}
const mediaItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "tabs": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "backgroundColor": "#ffffff" } }, "scroll-h": { "": { "width": "750rpx", "height": "80rpx", "flexDirection": "row" } }, "line-h": { "": { "height": "1rpx", "backgroundColor": "#cccccc" } }, "uni-tab-item": { "": { "flexWrap": "nowrap", "paddingLeft": "34rpx", "paddingRight": "34rpx" } }, "uni-tab-item-title": { "": { "color": "#555555", "fontSize": "30rpx", "height": "80rpx", "lineHeight": "80rpx", "flexWrap": "nowrap" } }, "uni-tab-item-title-active": { "": { "color": "#007AFF" } }, "swiper-box": { "": { "flex": 1 } }, "swiper-item": { "": { "flex": 1, "flexDirection": "row" } }, "scroll-v": { "": { "flex": 1, "flexDirection": "column", "width": 100 } }, "update-tips": { "": { "position": "absolute", "left": 0, "top": 41, "right": 0, "paddingTop": 5, "paddingBottom": 5, "backgroundColor": "#FDDD9B", "alignItems": "center", "justifyContent": "center", "textAlign": "center" } }, "update-tips-text": { "": { "fontSize": 14, "color": "#ffffff" } }, "refresh": { "": { "width": 100, "height": 64, "justifyContent": "center" } }, "refresh-view": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "justifyContent": "center" } }, "refresh-icon": { "": { "width": 30, "height": 30, "transitionDuration": 500, "transitionProperty": "transform", "transform": "rotate(0deg)", "transformOrigin": "15px 15px" } }, "refresh-icon-active": { "": { "transform": "rotate(180deg)" } }, "loading-icon": { "": { "width": 20, "height": 20, "marginRight": 5, "color": "#999999" } }, "loading-text": { "": { "marginLeft": 2, "fontSize": 16, "color": "#999999" } }, "loading-more": { "": { "alignItems": "center", "justifyContent": "center", "paddingTop": 10, "paddingBottom": 10, "textAlign": "center" } }, "loading-more-text": { "": { "fontSize": "28rpx", "color": "#999999" } }, "@TRANSITION": { "refresh-icon": { "duration": 500, "property": "transform" } } };
const MAX_CACHE_DATA = 100;
const MAX_CACHE_PAGE = 3;
const newsData = {
  data0: {
    "datetime": "40分钟前",
    "article_type": 0,
    "title": "uni-app行业峰会频频亮相，开发者反响热烈!",
    "source": "DCloud",
    "comment_count": 639
  },
  data1: {
    "datetime": "一天前",
    "article_type": 1,
    "title": "DCloud完成B2轮融资，uni-app震撼发布!",
    "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",
    "source": "DCloud",
    "comment_count": 11395
  },
  data2: {
    "datetime": "一天前",
    "article_type": 2,
    "title": "中国技术界小奇迹：HBuilder开发者突破200万",
    "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",
    "source": "DCloud",
    "comment_count": 11395
  },
  data3: {
    "article_type": 3,
    "image_list": [{
      "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",
      "width": 563,
      "height": 316
    }, {
      "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",
      "width": 641,
      "height": 360
    }, {
      "url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",
      "width": 640,
      "height": 360
    }],
    "datetime": "5分钟前",
    "title": "uni-app 支持使用 npm 安装第三方包，生态更趋丰富",
    "source": "DCloud",
    "comment_count": 11
  },
  data4: {
    "datetime": "2小时前",
    "article_type": 4,
    "title": "uni-app 支持原生小程序自定义组件，更开放、更自由",
    "image_url": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",
    "source": "DCloud",
    "comment_count": 69
  }
};
const _sfc_main = {
  components: {
    mediaItem
  },
  data() {
    return {
      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabBars: [{
        name: "关注",
        id: "guanzhu"
      }, {
        name: "推荐",
        id: "tuijian"
      }, {
        name: "体育",
        id: "tiyu"
      }, {
        name: "热点",
        id: "redian"
      }, {
        name: "财经",
        id: "caijing"
      }, {
        name: "娱乐",
        id: "yule"
      }, {
        name: "军事",
        id: "junshi"
      }, {
        name: "历史",
        id: "lishi"
      }, {
        name: "本地",
        id: "bendi"
      }],
      scrollInto: "",
      showTips: false,
      navigateFlag: false,
      pulling: false,
      refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
    };
  },
  onLoad() {
    setTimeout(() => {
      this.tabBars.forEach((tabBar) => {
        this.newsList.push({
          data: [],
          isLoading: false,
          refreshText: "",
          loadingText: "加载更多..."
        });
      });
      this.getList(0);
    }, 350);
  },
  methods: {
    getList(index) {
      let activeTab = this.newsList[index];
      let list = [];
      for (let i = 1; i <= 10; i++) {
        let item = Object.assign({}, newsData["data" + Math.floor(Math.random() * 5)]);
        item.id = this.newGuid();
        list.push(item);
      }
      activeTab.data = activeTab.data.concat(list);
    },
    goDetail(e) {
      if (this.navigateFlag) {
        return;
      }
      this.navigateFlag = true;
      uni.navigateTo({
        url: "./detail/detail?title=" + e.title
      });
      setTimeout(() => {
        this.navigateFlag = false;
      }, 200);
    },
    close(index1, index2) {
      uni.showModal({
        content: "是否删除本条信息？",
        success: (res) => {
          if (res.confirm) {
            this.newsList[index1].data.splice(index2, 1);
          }
        }
      });
    },
    loadMore(e) {
      setTimeout(() => {
        this.getList(this.tabIndex);
      }, 500);
    },
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    ontabchange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.newsList[index].data.length === 0) {
        this.getList(index);
      }
      if (this.tabIndex === index) {
        return;
      }
      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
        }
      }
      this.tabIndex = index;
      this.scrollInto = this.tabBars[index].id;
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
      }
    },
    clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "加载更多...";
    },
    refreshData() {
    },
    onrefresh(e) {
      var tab = this.newsList[this.tabIndex];
      if (!tab.refreshFlag) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "正在刷新...";
      setTimeout(() => {
        this.refreshData();
        this.pulling = true;
        tab.refreshing = false;
        tab.refreshFlag = false;
        tab.refreshText = "已刷新";
        setTimeout(() => {
          this.pulling = false;
        }, 500);
      }, 2e3);
    },
    onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "释放立即刷新";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "下拉可以刷新";
      }
    },
    newGuid() {
      let s4 = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };
      return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_media_item = resolveComponent("media-item");
  const _component_swiper_item = resolveComponent("swiper-item");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "tabs" }, [
      createElementVNode("scroll-view", {
        id: "tab-bar",
        class: "scroll-h",
        scrollX: true,
        showScrollbar: false,
        scrollIntoView: $data.scrollInto
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabBars, (tab, index) => {
          return openBlock(), createElementBlock("view", {
            key: tab.id,
            class: "uni-tab-item",
            id: tab.id,
            "data-current": index,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args))
          }, [
            createElementVNode("u-text", {
              class: normalizeClass(["uni-tab-item-title", $data.tabIndex == index ? "uni-tab-item-title-active" : ""])
            }, toDisplayString(tab.name), 3)
          ], 8, ["id", "data-current"]);
        }), 128))
      ], 8, ["scrollIntoView"]),
      createElementVNode("view", { class: "line-h" }),
      createVNode(_component_swiper, {
        current: $data.tabIndex,
        class: "swiper-box",
        style: { "flex": "1" },
        duration: 300,
        onChange: $options.ontabchange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.newsList, (tab, index1) => {
            return openBlock(), createBlock(_component_swiper_item, {
              class: "swiper-item",
              key: index1
            }, {
              default: withCtx(() => [
                createElementVNode("list", {
                  class: "scroll-v list",
                  enableBackToTop: "true",
                  scrollY: "",
                  loadmoreoffset: "15",
                  onLoadmore: ($event) => $options.loadMore(index1)
                }, [
                  createElementVNode("refresh", {
                    class: "refresh",
                    onRefresh: ($event) => $options.onrefresh(index1),
                    onPullingdown: _cache[1] || (_cache[1] = (...args) => $options.onpullingdown && $options.onpullingdown(...args)),
                    display: tab.refreshing ? "show" : "hide"
                  }, [
                    createElementVNode("div", { class: "refresh-view" }, [
                      createElementVNode("u-image", {
                        class: normalizeClass(["refresh-icon", { "refresh-icon-active": tab.refreshFlag }]),
                        src: $data.refreshIcon,
                        style: normalizeStyle({ width: tab.refreshing || $data.pulling ? 0 : "30px" })
                      }, null, 14, ["src"]),
                      tab.refreshing ? (openBlock(), createElementBlock("loading-indicator", {
                        key: 0,
                        class: "loading-icon",
                        animating: "true"
                      })) : createCommentVNode("", true),
                      createElementVNode("u-text", { class: "loading-text" }, toDisplayString(tab.refreshText), 1)
                    ])
                  ], 40, ["onRefresh", "display"]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(tab.data, (newsitem, index2) => {
                    return openBlock(), createElementBlock("cell", {
                      key: newsitem.id
                    }, [
                      createVNode(_component_media_item, {
                        options: newsitem,
                        onClose: ($event) => $options.close(index1, index2),
                        onClick: ($event) => $options.goDetail(newsitem)
                      }, null, 8, ["options", "onClose", "onClick"])
                    ]);
                  }), 128)),
                  tab.isLoading || tab.data.length > 4 ? (openBlock(), createElementBlock("cell", {
                    key: 0,
                    class: "loading-more"
                  }, [
                    createElementVNode("u-text", { class: "loading-more-text" }, toDisplayString(tab.loadingText), 1)
                  ])) : createCommentVNode("", true)
                ], 40, ["onLoadmore"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }, 8, ["current", "onChange"])
    ])
  ]);
}
const tabbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  tabbar as default
};
