import { f as formatAppLog } from "../../../uni-app.es.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const _style_0 = { "content": { "": { "flex": 1 } }, "map": { "": { "width": "750rpx", "height": 250, "backgroundColor": "#f0f0f0" } }, "scrollview": { "": { "flex": 1, "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "list-item": { "": { "flexDirection": "row", "flexWrap": "nowrap", "alignItems": "center", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "list-text": { "": { "flex": 1 } }, "button": { "": { "marginTop": 5, "marginBottom": 5 } } };
const testMarkers = [
  {
    id: 0,
    latitude: 39.989631,
    longitude: 116.481018,
    title: "方恒国际 阜通东大街6号",
    zIndex: "1",
    rotate: 0,
    width: 20,
    height: 20,
    anchor: {
      x: 0.5,
      y: 1
    },
    callout: {
      content: "方恒国际 阜通东大街6号",
      color: "#00BFFF",
      fontSize: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#333300",
      bgColor: "#CCFF99",
      padding: "5",
      display: "ALWAYS"
    }
  },
  {
    id: 1,
    latitude: 39.908692,
    longitude: 116.397477,
    title: "天安门",
    zIndex: "1",
    iconPath: "/static/location.png",
    width: 40,
    height: 40,
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
  }
];
const testPolyline = [
  {
    points: [
      {
        latitude: 39.925539,
        longitude: 116.279037
      },
      {
        latitude: 39.925539,
        longitude: 116.520285
      }
    ],
    color: "#FFCCFF",
    width: 7,
    dottedLine: true,
    arrowLine: true,
    borderColor: "#000000",
    borderWidth: 2
  },
  {
    points: [
      {
        latitude: 39.938698,
        longitude: 116.275177
      },
      {
        latitude: 39.966069,
        longitude: 116.289253
      },
      {
        latitude: 39.944226,
        longitude: 116.306076
      },
      {
        latitude: 39.966069,
        longitude: 116.322899
      },
      {
        latitude: 39.938698,
        longitude: 116.336975
      }
    ],
    color: "#CCFFFF",
    width: 5,
    dottedLine: true,
    arrowLine: true,
    borderColor: "#CC0000",
    borderWidth: 3
  }
];
const testPolygons = [
  {
    points: [
      {
        latitude: 39.781892,
        longitude: 116.293413
      },
      {
        latitude: 39.7876,
        longitude: 116.391842
      },
      {
        latitude: 39.733187,
        longitude: 116.417932
      },
      {
        latitude: 39.704653,
        longitude: 116.338255
      }
    ],
    fillColor: "#FFCCFF",
    strokeWidth: 3,
    strokeColor: "#CC99CC",
    zIndex: 11
  },
  {
    points: [
      {
        latitude: 39.8876,
        longitude: 116.518932
      },
      {
        latitude: 39.781892,
        longitude: 116.518932
      },
      {
        latitude: 39.781892,
        longitude: 116.428932
      },
      {
        latitude: 39.8876,
        longitude: 116.428932
      }
    ],
    fillColor: "#CCFFFF",
    strokeWidth: 5,
    strokeColor: "#CC0000",
    zIndex: 3
  }
];
const testCircles = [
  {
    latitude: 39.996441,
    longitude: 116.411146,
    radius: 15e3,
    strokeWidth: 5,
    color: "#CCFFFF",
    fillColor: "#CC0000"
  },
  {
    latitude: 40.096441,
    longitude: 116.511146,
    radius: 12e3,
    strokeWidth: 3,
    color: "#CCFFFF",
    fillColor: "#FFCCFF"
  },
  {
    latitude: 39.896441,
    longitude: 116.311146,
    radius: 9e3,
    strokeWidth: 1,
    color: "#CCFFFF",
    fillColor: "#CC0000"
  }
];
const testIncludePoints = [
  {
    latitude: 39.989631,
    longitude: 116.481018
  },
  {
    latitude: 39.908692,
    longitude: 116.397477
  }
];
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
  onReady() {
    this.map = uni.createMapContext("map1", this);
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
      this.enable3D = e.detail.value;
    },
    changeShowCompass(e) {
      this.showCompass = e.detail.value;
    },
    changeEnableOverlooking(e) {
      this.enableOverlooking = e.detail.value;
    },
    changeEnableZoom(e) {
      this.enableZoom = e.detail.value;
    },
    changeEnableScroll(e) {
      this.enableScroll = e.detail.value;
    },
    changeEnableRotate(e) {
      this.enableRotate = e.detail.value;
    },
    changeEnableSatellite(e) {
      this.enableSatellite = e.detail.value;
    },
    changeEnableTraffic(e) {
      this.enableTraffic = e.detail.value;
    },
    addMarkers() {
      this.markers = testMarkers;
    },
    addPolyline() {
      this.polyline = testPolyline;
    },
    addPolygons() {
      this.polygons = testPolygons;
    },
    addCircles() {
      this.circles = testCircles;
    },
    includePoint() {
      this.includePoints = testIncludePoints;
    },
    handleGetCenterLocation() {
      this.map.getCenterLocation({
        success: (ret) => {
          formatAppLog("log", "at pages/API/map/map.nvue:341", JSON.stringify(ret));
          uni.showModal({
            content: JSON.stringify(ret)
          });
        }
      });
    },
    handleGetRegion() {
      this.map.getRegion({
        success: (ret) => {
          formatAppLog("log", "at pages/API/map/map.nvue:351", JSON.stringify(ret));
          uni.showModal({
            content: JSON.stringify(ret)
          });
        }
      });
    },
    handleTranslateMarker() {
      this.map.translateMarker({
        markerId: 1,
        destination: {
          latitude: 39.989631,
          longitude: 116.481018
        },
        duration: 2e3
      }, (ret) => {
        formatAppLog("log", "at pages/API/map/map.nvue:368", JSON.stringify(ret));
        uni.showModal({
          content: JSON.stringify(ret)
        });
      });
    },
    maptap(e) {
      uni.showModal({
        content: JSON.stringify(e)
      });
    },
    onmarkertap(e) {
      uni.showModal({
        content: JSON.stringify(e)
      });
    },
    oncontroltap(e) {
      uni.showModal({
        content: JSON.stringify(e)
      });
    },
    oncallouttap(e) {
      uni.showModal({
        content: JSON.stringify(e)
      });
    },
    onupdated(e) {
      formatAppLog("log", "at pages/API/map/map.nvue:396", JSON.stringify(e));
    },
    onregionchange(e) {
      formatAppLog("log", "at pages/API/map/map.nvue:399", JSON.stringify(e));
    },
    onpoitap(e) {
      uni.showModal({
        content: JSON.stringify(e)
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
        id: "map1",
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
        includePoints: $data.includePoints,
        onTap: _cache[0] || (_cache[0] = (...args) => $options.maptap && $options.maptap(...args)),
        onControltap: _cache[1] || (_cache[1] = (...args) => $options.oncontroltap && $options.oncontroltap(...args)),
        onMarkertap: _cache[2] || (_cache[2] = (...args) => $options.onmarkertap && $options.onmarkertap(...args)),
        onCallouttap: _cache[3] || (_cache[3] = (...args) => $options.oncallouttap && $options.oncallouttap(...args)),
        onPoitap: _cache[4] || (_cache[4] = (...args) => $options.onpoitap && $options.onpoitap(...args)),
        onUpdated: _cache[5] || (_cache[5] = (...args) => $options.onupdated && $options.onupdated(...args)),
        onRegionchange: _cache[6] || (_cache[6] = (...args) => $options.onregionchange && $options.onregionchange(...args))
      }, null, 40, ["controls", "scale", "longitude", "latitude", "showLocation", "enable3D", "rotate", "skew", "showCompass", "enableOverlooking", "enableZoom", "enableScroll", "enableRotate", "enableSatellite", "enableTraffic", "markers", "polyline", "circles", "polygons", "includePoints"]),
      createElementVNode("scroll-view", {
        class: "scrollview",
        scrollY: "true"
      }, [
        createVNode(_component_button, {
          class: "button",
          onClick: $options.changeScale
        }, {
          default: withCtx(() => [
            createTextVNode("changeScale")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.changeRotate
        }, {
          default: withCtx(() => [
            createTextVNode("changeRotate")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.changeSkew
        }, {
          default: withCtx(() => [
            createTextVNode("skew")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.addMarkers
        }, {
          default: withCtx(() => [
            createTextVNode("addMarkers")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.addPolyline
        }, {
          default: withCtx(() => [
            createTextVNode("addPolyline")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.addPolygons
        }, {
          default: withCtx(() => [
            createTextVNode("addPolygons")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.addCircles
        }, {
          default: withCtx(() => [
            createTextVNode("addCircles")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.includePoint
        }, {
          default: withCtx(() => [
            createTextVNode("includePoints")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.handleGetCenterLocation
        }, {
          default: withCtx(() => [
            createTextVNode("getCenterLocation")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.handleGetRegion
        }, {
          default: withCtx(() => [
            createTextVNode("getRegion")
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_button, {
          class: "button",
          onClick: $options.handleTranslateMarker
        }, {
          default: withCtx(() => [
            createTextVNode("translateMarker")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  map as default
};
