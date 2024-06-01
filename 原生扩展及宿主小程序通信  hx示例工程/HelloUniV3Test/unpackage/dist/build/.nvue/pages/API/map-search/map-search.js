import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "content": { "": { "flex": 1 } }, "map": { "": { "width": "750rpx", "height": "500rpx", "backgroundColor": "#000000" } }, "scrollview": { "": { "flex": 1 } }, "button": { "": { "marginTop": "30rpx", "marginBottom": "20rpx" } } };
let mapSearch = weex.requireModule("mapSearch");
const _sfc_main = {
  data() {
    return {
      markers: [{
        id: "1",
        latitude: 39.908692,
        longitude: 116.397477,
        title: "天安门",
        zIndex: "1",
        iconPath: "/static/gps.png",
        width: 20,
        height: 20,
        anchor: {
          x: 0.5,
          y: 1
        },
        callout: {
          content: "首都北京\n天安门",
          color: "#00BFFF",
          fontSize: 12,
          borderRadius: 2,
          borderWidth: 0,
          borderColor: "#333300",
          bgColor: "#CCFF11",
          padding: "1",
          display: "ALWAYS"
        }
      }]
    };
  },
  methods: {
    selectPoint(e) {
      formatAppLog("log", "at pages/API/map-search/map-search.nvue:46", e);
    },
    reverseGeocode() {
      var point = this.markers[0];
      mapSearch.reverseGeocode({
        point: {
          latitude: point.latitude,
          longitude: point.longitude
        }
      }, (ret) => {
        formatAppLog("log", "at pages/API/map-search/map-search.nvue:56", JSON.stringify(ret));
        uni.showModal({
          content: JSON.stringify(ret)
        });
      });
    },
    poiSearchNearBy() {
      var point = this.markers[0];
      mapSearch.poiSearchNearBy({
        point: {
          latitude: point.latitude,
          longitude: point.longitude
        },
        key: "停车场",
        radius: 1e3
      }, (ret) => {
        formatAppLog("log", "at pages/API/map-search/map-search.nvue:72", ret);
        uni.showModal({
          content: JSON.stringify(ret)
        });
      });
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
    createElementVNode("view", { class: "content" }, [
      createElementVNode("map", {
        class: "map",
        ref: "dcmap",
        markers: $data.markers,
        onTap: _cache[0] || (_cache[0] = (...args) => $options.selectPoint && $options.selectPoint(...args))
      }, null, 40, ["markers"]),
      createElementVNode("scroll-view", {
        class: "scrollview",
        scrollY: "true"
      }, [
        createVNode(_component_button, {
          class: "button",
          onClick: $options.reverseGeocode
        }, {
          default: withCtx(() => [
            createTextVNode("reverseGeocode")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.poiSearchNearBy
        }, {
          default: withCtx(() => [
            createTextVNode("poiSearchNearBy")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const mapSearch$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  mapSearch$1 as default
};
