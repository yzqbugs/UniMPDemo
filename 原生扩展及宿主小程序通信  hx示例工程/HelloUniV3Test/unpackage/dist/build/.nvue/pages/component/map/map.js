import { _ as __easycom_3, a as __easycom_4 } from "../../../uni-list.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../uni-icons.js";
import "../../../uni-badge.js";
const _style_0 = { "content": { "": { "flex": 1 } }, "map": { "": { "width": "750rpx", "height": 250, "backgroundColor": "#f0f0f0" } }, "line": { "": { "height": 4 } }, "scrollview": { "": { "flex": 1 } } };
const _sfc_main = {
  data() {
    return {
      location: {
        longitude: 116.397477,
        latitude: 39.908692
      },
      controls: [{
        id: 1,
        position: {
          left: 5,
          top: 180,
          width: 30,
          height: 30
        },
        iconPath: "/static/logo.png",
        clickable: true
      }],
      showLocation: false,
      scale: 13,
      showCompass: true,
      enable3D: true,
      enableOverlooking: true,
      enableZoom: true,
      enableScroll: true,
      enableRotate: true,
      enableSatellite: false,
      enableTraffic: false,
      polyline: [],
      markers: [],
      polygons: [],
      circles: [],
      includePoints: [],
      rotate: 0,
      skew: 0
    };
  },
  onLoad() {
  },
  methods: {
    changeScale() {
      this.scale = this.scale == 9 ? 15 : 9;
    },
    changeRotate() {
      this.rotate = this.rotate == 90 ? 0 : 90;
    },
    changeSkew() {
      this.skew = this.skew == 30 ? 0 : 30;
    },
    enableThreeD(e) {
      this.enable3D = e.value;
    },
    changeShowCompass(e) {
      this.showCompass = e.value;
    },
    changeEnableOverlooking(e) {
      this.enableOverlooking = e.value;
    },
    changeEnableZoom(e) {
      this.enableZoom = e.value;
    },
    changeEnableScroll(e) {
      this.enableScroll = e.value;
    },
    changeEnableRotate(e) {
      this.enableRotate = e.value;
    },
    changeEnableSatellite(e) {
      this.enableSatellite = e.value;
    },
    changeEnableTraffic(e) {
      this.enableTraffic = e.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
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
        ref: "map1",
        controls: $data.controls,
        scale: $data.scale,
        longitude: $data.location.longitude,
        latitude: $data.location.latitude,
        showLocation: $data.showLocation,
        enable3D: $data.enable3D,
        rotate: $data.rotate,
        skew: $data.skew,
        showCompass: $data.showCompass,
        enableOverlooking: $data.enableOverlooking,
        enableZoom: $data.enableZoom,
        enableScroll: $data.enableScroll,
        enableRotate: $data.enableRotate,
        enableSatellite: $data.enableSatellite,
        enableTraffic: $data.enableTraffic,
        markers: $data.markers,
        polyline: $data.polyline,
        circles: $data.circles,
        polygons: $data.polygons,
        includePoints: $data.includePoints
      }, null, 8, ["controls", "scale", "longitude", "latitude", "showLocation", "enable3D", "rotate", "skew", "showCompass", "enableOverlooking", "enableZoom", "enableScroll", "enableRotate", "enableSatellite", "enableTraffic", "markers", "polyline", "circles", "polygons", "includePoints"]),
      createElementVNode("view", { class: "line" }),
      createVNode(_component_uni_list, { class: "scrollview" }, {
        default: withCtx(() => [
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enable3D,
            title: "显示3D楼块",
            onSwitchChange: $options.enableThreeD
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.showCompass,
            title: "显示指南针",
            onSwitchChange: $options.changeShowCompass
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enableZoom,
            title: "是否支持缩放",
            onSwitchChange: $options.changeEnableZoom
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enableScroll,
            title: "是否支持拖动",
            onSwitchChange: $options.changeEnableScroll
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enableRotate,
            title: "是否支持旋转",
            onSwitchChange: $options.changeEnableRotate
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enableSatellite,
            title: "是否开启卫星图",
            onSwitchChange: $options.changeEnableSatellite
          }, null, 8, ["switch-checked", "onSwitchChange"]),
          createVNode(_component_uni_list_item, {
            "show-arrow": false,
            "show-switch": true,
            "switch-checked": $data.enableTraffic,
            title: "是否开启实时路况",
            onSwitchChange: $options.changeEnableTraffic
          }, null, 8, ["switch-checked", "onSwitchChange"])
        ]),
        _: 1
      })
    ])
  ]);
}
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  map as default
};
