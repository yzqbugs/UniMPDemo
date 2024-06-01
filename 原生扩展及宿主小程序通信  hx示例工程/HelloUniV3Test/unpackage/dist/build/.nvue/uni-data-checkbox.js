import { B as Bs } from "./uni-cloud.es.js";
import { _ as __easycom_0 } from "./uni-load-more.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, normalizeStyle, createBlock, toDisplayString, Fragment, normalizeClass, withCtx, renderList, createVNode, createElementVNode, createCommentVNode } from "vue";
import { r as resolveEasycom } from "./uni-app.es.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _style_0 = { "uni-data-loading": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 36, "paddingLeft": 10, "color": "#999999" } }, "uni-data-checklist": { "": { "position": "relative", "zIndex": 0, "flex": 1 } }, "checklist-group": { ".uni-data-checklist ": { "flexDirection": "row", "flexWrap": "wrap" }, ".uni-data-checklist .is-list": { "flexDirection": "column" } }, "checklist-box": { ".uni-data-checklist .checklist-group ": { "flexDirection": "row", "alignItems": "center", "position": "relative", "marginTop": 5, "marginRight": 25, "marginBottom": 5, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--button": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "transitionProperty": "borderColor", "transitionDuration": 200 }, ".uni-data-checklist .checklist-group .is--button.is-disable": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--button.is-checked": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "backgroundColor": "#f5f5f5" }, ".uni-data-checklist .checklist-group .is--tag.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag.is-checked": { "backgroundColor": "#2979ff", "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--list": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 0, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--list.is-list-border": { "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "absolute", "opacity": 0 } }, "checklist-content": { ".uni-data-checklist .checklist-group .checklist-box ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "checklist-text": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "fontSize": 14, "color": "#666666", "marginLeft": 5, "lineHeight": 14 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag ": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#666666" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { "color": "#ffffff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkobx__list": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "borderRightWidth": 1, "borderRightColor": "#007aff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#007aff", "borderBottomStyle": "solid", "height": 12, "width": 6, "left": -5, "transformOrigin": "center", "transform": "rotate(45deg)", "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": { "opacity": 1, "borderColor": "#2979ff" } }, "checkbox__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 4, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkbox__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": { "position": "absolute", "top": 2, "left": 5, "height": 8, "width": 4, "borderRightWidth": 1, "borderRightColor": "#ffffff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#ffffff", "borderBottomStyle": "solid", "opacity": 0, "transformOrigin": "center", "transform": "rotate(40deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" } }, "radio__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "justifyContent": "center", "alignItems": "center", "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 16, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff" } }, "radio__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .radio__inner ": { "width": 8, "height": 8, "borderRadius": 10, "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .radio__inner ": { "opacity": 1 } }, "@TRANSITION": { "checklist-box": { "property": "borderColor", "duration": 200 } } };
const _sfc_main = {
  name: "uniDataChecklist",
  mixins: [Bs.mixinDatacom || {}],
  emits: ["input", "update:modelValue", "change"],
  props: {
    mode: {
      type: String,
      default: "default"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    // TODO vue3
    modelValue: {
      type: [Array, String, Number],
      default() {
        return "";
      }
    },
    localdata: {
      type: Array,
      default() {
        return [];
      }
    },
    min: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: [Number, String],
      default: ""
    },
    wrap: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: "left"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    selectedTextColor: {
      type: String,
      default: ""
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    map: {
      type: Object,
      default() {
        return {
          text: "text",
          value: "value"
        };
      }
    }
  },
  watch: {
    localdata: {
      handler(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      deep: true
    },
    mixinDatacomResData(newVal) {
      this.range = newVal;
      this.dataList = this.getDataList(this.getSelectedValue(newVal));
    },
    value(newVal) {
      this.dataList = this.getDataList(newVal);
    },
    modelValue(newVal) {
      this.dataList = this.getDataList(newVal);
    }
  },
  data() {
    return {
      dataList: [],
      range: [],
      contentText: {
        contentdown: "查看更多",
        contentrefresh: "加载中",
        contentnomore: "没有更多"
      },
      isLocal: true,
      styles: {
        selectedColor: "#2979ff",
        selectedTextColor: "#666"
      },
      isTop: 0
    };
  },
  computed: {
    dataValue() {
      if (this.value === "")
        return this.modelValue;
      if (this.modelValue === "")
        return this.value;
      return this.value;
    }
  },
  created() {
    if (this.localdata && this.localdata.length !== 0) {
      this.isLocal = true;
      this.range = this.localdata;
      this.dataList = this.getDataList(this.getSelectedValue(this.range));
    } else {
      if (this.collection) {
        this.isLocal = false;
        this.loadData();
      }
    }
  },
  methods: {
    loadData() {
      this.mixinDatacomGet().then((res) => {
        this.mixinDatacomResData = res.result.data;
        if (this.mixinDatacomResData.length === 0) {
          this.isLocal = false;
          this.mixinDatacomErrorMessage = this.emptyText;
        } else {
          this.isLocal = true;
        }
      }).catch((err) => {
        this.mixinDatacomErrorMessage = err.message;
      });
    },
    /**
     * 获取父元素实例
     */
    getForm(name = "uniForms") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    chagne(e) {
      const values = e.detail.value;
      let detail = {
        value: [],
        data: []
      };
      if (this.multiple) {
        this.range.forEach((item) => {
          if (values.includes(item[this.map.value] + "")) {
            detail.value.push(item[this.map.value]);
            detail.data.push(item);
          }
        });
      } else {
        const range = this.range.find((item) => item[this.map.value] + "" === values);
        if (range) {
          detail = {
            value: range[this.map.value],
            data: range
          };
        }
      }
      this.$emit("input", detail.value);
      this.$emit("update:modelValue", detail.value);
      this.$emit("change", {
        detail
      });
      if (this.multiple) {
        this.dataList = this.getDataList(detail.value, true);
      } else {
        this.dataList = this.getDataList(detail.value);
      }
    },
    /**
     * 获取渲染的新数组
     * @param {Object} value 选中内容
     */
    getDataList(value) {
      let dataList = JSON.parse(JSON.stringify(this.range));
      let list = [];
      if (this.multiple) {
        if (!Array.isArray(value)) {
          value = [];
        }
      }
      dataList.forEach((item, index) => {
        item.disabled = item.disable || item.disabled || false;
        if (this.multiple) {
          if (value.length > 0) {
            let have = value.find((val) => val === item[this.map.value]);
            item.selected = have !== void 0;
          } else {
            item.selected = false;
          }
        } else {
          item.selected = value === item[this.map.value];
        }
        list.push(item);
      });
      return this.setRange(list);
    },
    /**
     * 处理最大最小值
     * @param {Object} list
     */
    setRange(list) {
      let selectList = list.filter((item) => item.selected);
      let min = Number(this.min) || 0;
      let max = Number(this.max) || "";
      list.forEach((item, index) => {
        if (this.multiple) {
          if (selectList.length <= min) {
            let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
            if (have !== void 0) {
              item.disabled = true;
            }
          }
          if (selectList.length >= max && max !== "") {
            let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
            if (have === void 0) {
              item.disabled = true;
            }
          }
        }
        this.setStyles(item, index);
        list[index] = item;
      });
      return list;
    },
    /**
     * 设置 class
     * @param {Object} item
     * @param {Object} index
     */
    setStyles(item, index) {
      item.styleBackgroud = this.setStyleBackgroud(item);
      item.styleIcon = this.setStyleIcon(item);
      item.styleIconText = this.setStyleIconText(item);
      item.styleRightIcon = this.setStyleRightIcon(item);
    },
    /**
     * 获取选中值
     * @param {Object} range
     */
    getSelectedValue(range) {
      if (!this.multiple)
        return this.dataValue;
      let selectedArr = [];
      range.forEach((item) => {
        if (item.selected) {
          selectedArr.push(item[this.map.value]);
        }
      });
      return this.dataValue.length > 0 ? this.dataValue : selectedArr;
    },
    /**
     * 设置背景样式
     */
    setStyleBackgroud(item) {
      let styles = {};
      let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
      if (this.mode !== "list") {
        styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
      }
      if (this.mode === "tag") {
        styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
      }
      let classles = "";
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleIcon(item) {
      let styles = {};
      let classles = "";
      let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
      styles["background-color"] = item.selected ? selectedColor : "#fff";
      styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
      if (!item.selected && item.disabled) {
        styles["background-color"] = "#F2F6FC";
        styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleIconText(item) {
      let styles = {};
      let classles = "";
      let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
      if (this.mode === "tag") {
        styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
      } else {
        styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
      }
      if (!item.selected && item.disabled) {
        styles.color = "#999";
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    },
    setStyleRightIcon(item) {
      let styles = {};
      let classles = "";
      if (this.mode === "list") {
        styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
      }
      for (let i in styles) {
        classles += `${i}:${styles[i]};`;
      }
      return classles;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  const _component_checkbox = resolveComponent("checkbox");
  const _component_label = resolveComponent("label");
  const _component_checkbox_group = resolveComponent("checkbox-group");
  const _component_radio = resolveComponent("radio");
  const _component_radio_group = resolveComponent("radio-group");
  return openBlock(), createElementBlock("view", {
    class: "uni-data-checklist",
    style: normalizeStyle({ "margin-top": $data.isTop + "px" }),
    renderWhole: true
  }, [
    !$data.isLocal ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-data-loading"
    }, [
      !_ctx.mixinDatacomErrorMessage ? (openBlock(), createBlock(_component_uni_load_more, {
        key: 0,
        status: "loading",
        iconType: "snow",
        iconSize: 18,
        "content-text": $data.contentText
      }, null, 8, ["content-text"])) : (openBlock(), createElementBlock("u-text", { key: 1 }, toDisplayString(_ctx.mixinDatacomErrorMessage), 1))
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $props.multiple ? (openBlock(), createBlock(_component_checkbox_group, {
        key: 0,
        class: normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
        onChange: $options.chagne
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataList, (item, index) => {
            return openBlock(), createBlock(_component_label, {
              class: normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: normalizeStyle(item.styleBackgroud),
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_checkbox, {
                  class: "hidden",
                  hidden: "",
                  disabled: $props.disabled || !!item.disabled,
                  value: item[$props.map.value] + "",
                  checked: item.selected
                }, null, 8, ["disabled", "value", "checked"]),
                $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "checkbox__inner",
                  style: normalizeStyle(item.styleIcon)
                }, [
                  createElementVNode("view", { class: "checkbox__inner-icon" })
                ], 4)) : createCommentVNode("", true),
                createElementVNode("view", {
                  class: normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                }, [
                  createElementVNode("u-text", {
                    class: "checklist-text",
                    style: normalizeStyle(item.styleIconText)
                  }, toDisplayString(item[$props.map.text]), 5),
                  $props.mode === "list" && $props.icon === "right" ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    class: "checkobx__list",
                    style: normalizeStyle(item.styleBackgroud)
                  }, null, 4)) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class", "onChange"])) : (openBlock(), createBlock(_component_radio_group, {
        key: 1,
        class: normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
        onChange: $options.chagne
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.dataList, (item, index) => {
            return openBlock(), createBlock(_component_label, {
              class: normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
              style: normalizeStyle(item.styleBackgroud),
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_radio, {
                  class: "hidden",
                  hidden: "",
                  disabled: $props.disabled || item.disabled,
                  value: item[$props.map.value] + "",
                  checked: item.selected
                }, null, 8, ["disabled", "value", "checked"]),
                $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "radio__inner",
                  style: normalizeStyle(item.styleBackgroud)
                }, [
                  createElementVNode("view", {
                    class: "radio__inner-icon",
                    style: normalizeStyle(item.styleIcon)
                  }, null, 4)
                ], 4)) : createCommentVNode("", true),
                createElementVNode("view", {
                  class: normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                }, [
                  createElementVNode("u-text", {
                    class: "checklist-text",
                    style: normalizeStyle(item.styleIconText)
                  }, toDisplayString(item[$props.map.text]), 5),
                  $props.mode === "list" && $props.icon === "right" ? (openBlock(), createElementBlock("view", {
                    key: 0,
                    style: normalizeStyle(item.styleRightIcon),
                    class: "checkobx__list"
                  }, null, 4)) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class", "style"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["class", "onChange"]))
    ], 64))
  ], 4);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
