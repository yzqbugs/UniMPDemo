import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString, createCommentVNode, createVNode, resolveComponent, renderSlot, withModifiers, withCtx } from "vue";
import { _ as __easycom_0 } from "../../../uni-load-more.js";
import { _ as __easycom_1$1 } from "../../../uni-icons.js";
import { B as Bs } from "../../../uni-cloud.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import "../../../uni-i18n.es.js";
const dataPicker$1 = {
  props: {
    localdata: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    spaceInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    collection: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    field: {
      type: String,
      default: ""
    },
    orderby: {
      type: String,
      default: ""
    },
    where: {
      type: [String, Object],
      default: ""
    },
    pageData: {
      type: String,
      default: "add"
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    getcount: {
      type: [Boolean, String],
      default: false
    },
    getone: {
      type: [Boolean, String],
      default: false
    },
    gettree: {
      type: [Boolean, String],
      default: false
    },
    manual: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    modelValue: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    preload: {
      type: Boolean,
      default: false
    },
    stepSearh: {
      type: Boolean,
      default: true
    },
    selfField: {
      type: String,
      default: ""
    },
    parentField: {
      type: String,
      default: ""
    },
    multiple: {
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
  data() {
    return {
      loading: false,
      errorMessage: "",
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      },
      dataList: [],
      selected: [],
      selectedIndex: 0,
      page: {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }
    };
  },
  computed: {
    isLocaldata() {
      return !this.collection.length;
    },
    postField() {
      let fields = [this.field];
      if (this.parentField) {
        fields.push(`${this.parentField} as parent_value`);
      }
      return fields.join(",");
    },
    dataValue() {
      let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
      return isModelValue ? this.modelValue : this.value;
    },
    hasValue() {
      if (typeof this.dataValue === "number") {
        return true;
      }
      return this.dataValue != null && this.dataValue.length > 0;
    }
  },
  created() {
    this.$watch(() => {
      var al = [];
      [
        "pageCurrent",
        "pageSize",
        "spaceInfo",
        "value",
        "modelValue",
        "localdata",
        "collection",
        "action",
        "field",
        "orderby",
        "where",
        "getont",
        "getcount",
        "gettree"
      ].forEach((key) => {
        al.push(this[key]);
      });
      return al;
    }, (newValue, oldValue) => {
      for (let i = 2; i < newValue.length; i++) {
        if (newValue[i] != oldValue[i]) {
          break;
        }
      }
      if (newValue[0] != oldValue[0]) {
        this.page.current = this.pageCurrent;
      }
      this.page.size = this.pageSize;
      this.onPropsChange();
    });
    this._treeData = [];
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
    },
    getCommand(options = {}) {
      let db = Bs.database(this.spaceInfo);
      const action = options.action || this.action;
      if (action) {
        db = db.action(action);
      }
      const collection = options.collection || this.collection;
      db = db.collection(collection);
      const where = options.where || this.where;
      if (!(!where || !Object.keys(where).length)) {
        db = db.where(where);
      }
      const field = options.field || this.field;
      if (field) {
        db = db.field(field);
      }
      const orderby = options.orderby || this.orderby;
      if (orderby) {
        db = db.orderBy(orderby);
      }
      const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
      const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
      const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
      const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
      const getOptions = {
        getCount,
        getTree
      };
      if (options.getTreePath) {
        getOptions.getTreePath = options.getTreePath;
      }
      db = db.skip(size * (current - 1)).limit(size).get(getOptions);
      return db;
    },
    getNodeData(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        where: this._pathWhere()
      }).then((res) => {
        this.loading = false;
        this.selected = res.result.data;
        callback && callback();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    getTreePath(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        getTreePath: {
          startWith: `${this.selfField}=='${this.dataValue}'`
        }
      }).then((res) => {
        this.loading = false;
        let treePath = [];
        this._extractTreePath(res.result.data, treePath);
        this.selected = treePath;
        callback && callback();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    loadData() {
      if (this.isLocaldata) {
        this._processLocalData();
        return;
      }
      if (this.dataValue != null) {
        this._loadNodeData((data) => {
          this._treeData = data;
          this._updateBindData();
          this._updateSelected();
        });
        return;
      }
      if (this.stepSearh) {
        this._loadNodeData((data) => {
          this._treeData = data;
          this._updateBindData();
        });
      } else {
        this._loadAllData((data) => {
          this._treeData = [];
          this._extractTree(data, this._treeData, null);
          this._updateBindData();
        });
      }
    },
    _loadAllData(callback) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        gettree: true,
        startwith: `${this.selfField}=='${this.dataValue}'`
      }).then((res) => {
        this.loading = false;
        callback(res.result.data);
        this.onDataChange();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    _loadNodeData(callback, pw) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.getCommand({
        field: this.postField,
        where: pw || this._postWhere(),
        pageSize: 500
      }).then((res) => {
        this.loading = false;
        callback(res.result.data);
        this.onDataChange();
      }).catch((err) => {
        this.loading = false;
        this.errorMessage = err;
      });
    },
    _pathWhere() {
      let result = [];
      let where_field = this._getParentNameByField();
      if (where_field) {
        result.push(`${where_field} == '${this.dataValue}'`);
      }
      if (this.where) {
        return `(${this.where}) && (${result.join(" || ")})`;
      }
      return result.join(" || ");
    },
    _postWhere() {
      let result = [];
      let selected = this.selected;
      let parentField = this.parentField;
      if (parentField) {
        result.push(`${parentField} == null || ${parentField} == ""`);
      }
      if (selected.length) {
        for (var i = 0; i < selected.length - 1; i++) {
          result.push(`${parentField} == '${selected[i].value}'`);
        }
      }
      let where = [];
      if (this.where) {
        where.push(`(${this.where})`);
      }
      if (result.length) {
        where.push(`(${result.join(" || ")})`);
      }
      return where.join(" && ");
    },
    _nodeWhere() {
      let result = [];
      let selected = this.selected;
      if (selected.length) {
        result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
      }
      if (this.where) {
        return `(${this.where}) && (${result.join(" || ")})`;
      }
      return result.join(" || ");
    },
    _getParentNameByField() {
      const fields = this.field.split(",");
      let where_field = null;
      for (let i = 0; i < fields.length; i++) {
        const items = fields[i].split("as");
        if (items.length < 2) {
          continue;
        }
        if (items[1].trim() === "value") {
          where_field = items[0].trim();
          break;
        }
      }
      return where_field;
    },
    _isTreeView() {
      return this.parentField && this.selfField;
    },
    _updateSelected() {
      var dl = this.dataList;
      var sl = this.selected;
      let textField = this.map.text;
      let valueField = this.map.value;
      for (var i = 0; i < sl.length; i++) {
        var value = sl[i].value;
        var dl2 = dl[i];
        for (var j = 0; j < dl2.length; j++) {
          var item2 = dl2[j];
          if (item2[valueField] === value) {
            sl[i].text = item2[textField];
            break;
          }
        }
      }
    },
    _updateBindData(node) {
      const {
        dataList,
        hasNodes
      } = this._filterData(this._treeData, this.selected);
      let isleaf = this._stepSearh === false && !hasNodes;
      if (node) {
        node.isleaf = isleaf;
      }
      this.dataList = dataList;
      this.selectedIndex = dataList.length - 1;
      if (!isleaf && this.selected.length < dataList.length) {
        this.selected.push({
          value: null,
          text: "请选择"
        });
      }
      return {
        isleaf,
        hasNodes
      };
    },
    _filterData(data, paths) {
      let dataList = [];
      let hasNodes = true;
      dataList.push(data.filter((item) => {
        return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
      }));
      for (let i = 0; i < paths.length; i++) {
        var value = paths[i].value;
        var nodes = data.filter((item) => {
          return item.parent_value === value;
        });
        if (nodes.length) {
          dataList.push(nodes);
        } else {
          hasNodes = false;
        }
      }
      return {
        dataList,
        hasNodes
      };
    },
    _extractTree(nodes, result, parent_value) {
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
          child.parent_value = parent_value;
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTree(children, result, node[valueField]);
        }
      }
    },
    _extractTreePath(nodes, result) {
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let child = {};
        for (let key in node) {
          if (key !== "children") {
            child[key] = node[key];
          }
        }
        result.push(child);
        let children = node.children;
        if (children) {
          this._extractTreePath(children, result);
        }
      }
    },
    _findNodePath(key, nodes, path = []) {
      let textField = this.map.text;
      let valueField = this.map.value;
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        let children = node.children;
        let text = node[textField];
        let value = node[valueField];
        path.push({
          value,
          text
        });
        if (value === key) {
          return path;
        }
        if (children) {
          const p = this._findNodePath(key, children, path);
          if (p.length) {
            return p;
          }
        }
        path.pop();
      }
      return [];
    },
    _processLocalData() {
      this._treeData = [];
      this._extractTree(this.localdata, this._treeData);
      var inputValue = this.dataValue;
      if (inputValue === void 0) {
        return;
      }
      if (Array.isArray(inputValue)) {
        inputValue = inputValue[inputValue.length - 1];
        if (typeof inputValue === "object" && inputValue[this.map.value]) {
          inputValue = inputValue[this.map.value];
        }
      }
      this.selected = this._findNodePath(inputValue, this.localdata);
    }
  }
};
const _style_0$2 = { "uni-data-pickerview": { "": { "flex": 1, "flexDirection": "column", "overflow": "hidden", "height": 100 } }, "error-text": { "": { "color": "#DD524D" } }, "loading-cover": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(255,255,255,0.5)", "flexDirection": "column", "alignItems": "center", "zIndex": 1001 } }, "error-message": { "": { "backgroundColor": "#ffffff", "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "opacity": 0.9, "zIndex": 102 } }, "selected-area": { "": { "width": "750rpx" } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#f8f8f8" } }, "selected-item": { "": { "marginLeft": 10, "marginRight": 10, "paddingTop": 12, "paddingRight": 0, "paddingBottom": 12, "paddingLeft": 0, "textAlign": "center" } }, "selected-item-text-overflow": { "": { "width": 168, "overflow": "hidden" } }, "selected-item-active": { "": { "borderBottomWidth": 2, "borderBottomStyle": "solid", "borderBottomColor": "#007aff" } }, "selected-item-text": { "": { "color": "#007aff" } }, "tab-c": { "": { "position": "relative", "flex": 1, "flexDirection": "row", "overflow": "hidden" } }, "list": { "": { "flex": 1 } }, "item": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flexDirection": "row", "justifyContent": "space-between" } }, "is-disabled": { "": { "opacity": 0.5 } }, "item-text": { "": { "color": "#333333" } }, "item-text-overflow": { "": { "width": 280, "overflow": "hidden" } }, "check": { "": { "marginRight": 5, "borderWidth": 2, "borderStyle": "solid", "borderColor": "#007aff", "borderLeftWidth": 0, "borderLeftStyle": "solid", "borderLeftColor": "#000000", "borderTopWidth": 0, "borderTopStyle": "solid", "borderTopColor": "#000000", "height": 12, "width": 6, "transformOrigin": "center", "transform": "rotate(45deg)" } } };
const _sfc_main$2 = {
  name: "UniDataPickerView",
  emits: ["nodeclick", "change", "datachange", "update:modelValue"],
  mixins: [dataPicker$1],
  props: {
    managedMode: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  created() {
    if (this.managedMode) {
      return;
    }
    this.$nextTick(() => {
      this.load();
    });
  },
  methods: {
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.load();
    },
    load() {
      if (this.isLocaldata) {
        this.loadData();
      } else if (this.dataValue.length) {
        this.getTreePath((res) => {
          this.loadData();
        });
      }
    },
    handleSelect(index) {
      this.selectedIndex = index;
    },
    handleNodeClick(item, i, j) {
      if (item.disable) {
        return;
      }
      const node = this.dataList[i][j];
      const text = node[this.map.text];
      const value = node[this.map.value];
      if (i < this.selected.length - 1) {
        this.selected.splice(i, this.selected.length - i);
        this.selected.push({
          text,
          value
        });
      } else if (i === this.selected.length - 1) {
        this.selected.splice(i, 1, {
          text,
          value
        });
      }
      if (node.isleaf) {
        this.onSelectedChange(node, node.isleaf);
        return;
      }
      const {
        isleaf,
        hasNodes
      } = this._updateBindData();
      if (!this._isTreeView() && !hasNodes) {
        this.onSelectedChange(node, true);
        return;
      }
      if (this.isLocaldata && (!hasNodes || isleaf)) {
        this.onSelectedChange(node, true);
        return;
      }
      if (!isleaf && !hasNodes) {
        this._loadNodeData((data) => {
          if (!data.length) {
            node.isleaf = true;
          } else {
            this._treeData.push(...data);
            this._updateBindData(node);
          }
          this.onSelectedChange(node, node.isleaf);
        }, this._nodeWhere());
        return;
      }
      this.onSelectedChange(node, false);
    },
    updateData(data) {
      this._treeData = data.treeData;
      this.selected = data.selected;
      if (!this._treeData.length) {
        this.loadData();
      } else {
        this._updateBindData();
      }
    },
    onDataChange() {
      this.$emit("datachange");
    },
    onSelectedChange(node, isleaf) {
      if (isleaf) {
        this._dispatchEvent();
      }
      if (node) {
        this.$emit("nodeclick", node);
      }
    },
    _dispatchEvent() {
      this.$emit("change", this.selected.slice(0));
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "uni-data-pickerview",
    renderWhole: true
  }, [
    createElementVNode("scroll-view", {
      class: "selected-area",
      scrollX: "true",
      scrollY: "false",
      showScrollbar: false
    }, [
      createElementVNode("view", { class: "selected-list" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item, index) => {
          return openBlock(), createElementBlock(Fragment, null, [
            item.text ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: normalizeClass(["selected-item", { "selected-item-active": index == _ctx.selectedIndex, "selected-item-text-overflow": $props.ellipsis }]),
              onClick: ($event) => $options.handleSelect(index)
            }, [
              createElementVNode("u-text", { class: "" }, toDisplayString(item.text), 1)
            ], 10, ["onClick"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ])
    ]),
    createElementVNode("view", { class: "tab-c" }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataList, (child, i) => {
        return openBlock(), createElementBlock(Fragment, null, [
          i == _ctx.selectedIndex ? (openBlock(), createElementBlock("scroll-view", {
            class: "list",
            key: i,
            scrollY: true
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(child, (item, j) => {
              return openBlock(), createElementBlock("view", {
                class: normalizeClass(["item", { "is-disabled": !!item.disable }]),
                onClick: ($event) => $options.handleNodeClick(item, i, j)
              }, [
                createElementVNode("u-text", { class: "item-text item-text-overflow" }, toDisplayString(item[_ctx.map.text]), 1),
                _ctx.selected.length > i && item[_ctx.map.value] == _ctx.selected[i].value ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "check"
                })) : createCommentVNode("", true)
              ], 10, ["onClick"]);
            }), 256))
          ])) : createCommentVNode("", true)
        ], 64);
      }), 256)),
      _ctx.loading ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "loading-cover"
      }, [
        createVNode(_component_uni_load_more, {
          class: "load-more",
          contentText: _ctx.loadMore,
          status: "loading"
        }, null, 8, ["contentText"])
      ])) : createCommentVNode("", true),
      _ctx.errorMessage ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "error-message"
      }, [
        createElementVNode("u-text", { class: "error-text" }, toDisplayString(_ctx.errorMessage), 1)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "uni-data-tree": { "": { "flex": 1, "position": "relative", "fontSize": 14 } }, "error-text": { "": { "color": "#DD524D" } }, "input-value": { "": { "flexDirection": "row", "alignItems": "center", "flexWrap": "nowrap", "fontSize": 14, "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden", "height": 35 } }, "input-value-border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5", "borderRadius": 5 } }, "selected-area": { "": { "flex": 1, "overflow": "hidden", "flexDirection": "row" } }, "load-more": { "": { "width": 40 } }, "selected-list": { "": { "flexDirection": "row", "flexWrap": "nowrap" } }, "selected-item": { "": { "flexDirection": "row" } }, "text-color": { "": { "color": "#333333" } }, "placeholder": { "": { "color": "#808080", "fontSize": 12 } }, "input-split-line": { "": { "opacity": 0.5 } }, "arrow-area": { "": { "position": "relative", "width": 20, "justifyContent": "center", "transform": "rotate(-45deg)", "transformOrigin": "center" } }, "input-arrow": { "": { "width": 7, "height": 7, "borderLeftWidth": 1, "borderLeftStyle": "solid", "borderLeftColor": "#999999", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#999999" } }, "uni-data-tree-cover": { "": { "position": "fixed", "left": 0, "top": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.4)", "flexDirection": "column", "zIndex": 100 } }, "uni-data-tree-dialog": { "": { "position": "fixed", "left": 0, "top": 20, "right": 0, "bottom": 0, "backgroundColor": "#FFFFFF", "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "flexDirection": "column", "zIndex": 102, "overflow": "hidden", "width": "750rpx" } }, "dialog-caption": { "": { "position": "relative", "flexDirection": "row" } }, "title-area": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "dialog-title": { "": { "lineHeight": 44 } }, "dialog-close": { "": { "position": "absolute", "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "dialog-close-plus": { "": { "width": 16, "height": 2, "backgroundColor": "#666666", "borderRadius": 2, "transform": "rotate(45deg)" } }, "dialog-close-rotate": { "": { "position": "absolute", "transform": "rotate(-45deg)" } }, "picker-view": { "": { "flex": 1, "overflow": "hidden" } }, "icon-clear": { "": { "display": "flex", "alignItems": "center" } } };
const _sfc_main$1 = {
  name: "UniDataPicker",
  emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue"],
  mixins: [dataPicker$1],
  components: {
    DataPickerView
  },
  props: {
    options: {
      type: [Object, Array],
      default() {
        return {};
      }
    },
    popupTitle: {
      type: String,
      default: "请选择"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    heightMobile: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    split: {
      type: String,
      default: "/"
    },
    ellipsis: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isOpened: false,
      inputSelected: []
    };
  },
  created() {
    this.form = this.getForm("uniForms");
    this.formItem = this.getForm("uniFormsItem");
    if (this.formItem) {
      if (this.formItem.name) {
        this.rename = this.formItem.name;
        this.form.inputChildrens.push(this);
      }
    }
    this.$nextTick(() => {
      this.load();
    });
  },
  methods: {
    clear() {
      this.inputSelected.splice(0);
      this._dispatchEvent([]);
    },
    onPropsChange() {
      this._treeData = [];
      this.selectedIndex = 0;
      this.load();
    },
    load() {
      if (this.readonly) {
        this._processReadonly(this.localdata, this.dataValue);
        return;
      }
      if (this.isLocaldata) {
        this.loadData();
        this.inputSelected = this.selected.slice(0);
      } else if (!this.parentField && !this.selfField && this.hasValue) {
        this.getNodeData(() => {
          this.inputSelected = this.selected.slice(0);
        });
      } else if (this.hasValue) {
        this.getTreePath(() => {
          this.inputSelected = this.selected.slice(0);
        });
      }
    },
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
    show() {
      this.isOpened = true;
      setTimeout(() => {
        this.$refs.pickerView.updateData({
          treeData: this._treeData,
          selected: this.selected,
          selectedIndex: this.selectedIndex
        });
      }, 200);
      this.$emit("popupopened");
    },
    hide() {
      this.isOpened = false;
      this.$emit("popupclosed");
    },
    handleInput() {
      if (this.readonly) {
        return;
      }
      this.show();
    },
    handleClose(e) {
      this.hide();
    },
    onnodeclick(e) {
      this.$emit("nodeclick", e);
    },
    ondatachange(e) {
      this._treeData = this.$refs.pickerView._treeData;
    },
    onchange(e) {
      this.hide();
      this.$nextTick(() => {
        this.inputSelected = e;
      });
      this._dispatchEvent(e);
    },
    _processReadonly(dataList, value) {
      var isTree = dataList.findIndex((item2) => {
        return item2.children;
      });
      if (isTree > -1) {
        let inputValue;
        if (Array.isArray(value)) {
          inputValue = value[value.length - 1];
          if (typeof inputValue === "object" && inputValue.value) {
            inputValue = inputValue.value;
          }
        } else {
          inputValue = value;
        }
        this.inputSelected = this._findNodePath(inputValue, this.localdata);
        return;
      }
      if (!this.hasValue) {
        this.inputSelected = [];
        return;
      }
      let result = [];
      for (let i = 0; i < value.length; i++) {
        var val = value[i];
        var item = dataList.find((v) => {
          return v.value == val;
        });
        if (item) {
          result.push(item);
        }
      }
      if (result.length) {
        this.inputSelected = result;
      }
    },
    _filterForArray(data, valueArray) {
      var result = [];
      for (let i = 0; i < valueArray.length; i++) {
        var value = valueArray[i];
        var found = data.find((item) => {
          return item.value == value;
        });
        if (found) {
          result.push(found);
        }
      }
      return result;
    },
    _dispatchEvent(selected) {
      let item = {};
      if (selected.length) {
        var value = new Array(selected.length);
        for (var i = 0; i < selected.length; i++) {
          value[i] = selected[i].value;
        }
        item = selected[selected.length - 1];
      } else {
        item.value = "";
      }
      if (this.formItem) {
        this.formItem.setValue(item.value);
      }
      this.$emit("input", item.value);
      this.$emit("update:modelValue", item.value);
      this.$emit("change", {
        detail: {
          value: selected
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  const _component_data_picker_view = resolveComponent("data-picker-view");
  return openBlock(), createElementBlock("view", {
    class: "uni-data-tree",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: "uni-data-tree-input",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.handleInput && $options.handleInput(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $data.inputSelected,
        error: _ctx.errorMessage
      }, () => [
        createElementVNode("view", {
          class: normalizeClass(["input-value", { "input-value-border": $props.border }])
        }, [
          _ctx.errorMessage ? (openBlock(), createElementBlock("u-text", {
            key: 0,
            class: "selected-area error-text"
          }, toDisplayString(_ctx.errorMessage), 1)) : _ctx.loading && !$data.isOpened ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "selected-area"
          }, [
            createVNode(_component_uni_load_more, {
              class: "load-more",
              contentText: _ctx.loadMore,
              status: "loading"
            }, null, 8, ["contentText"])
          ])) : $data.inputSelected.length ? (openBlock(), createElementBlock("scroll-view", {
            key: 2,
            class: "selected-area",
            scrollX: "true"
          }, [
            createElementVNode("view", { class: "selected-list" }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.inputSelected, (item, index) => {
                return openBlock(), createElementBlock("view", {
                  class: "selected-item",
                  key: index
                }, [
                  createElementVNode("u-text", { class: "text-color" }, toDisplayString(item.text), 1),
                  index < $data.inputSelected.length - 1 ? (openBlock(), createElementBlock("u-text", {
                    key: 0,
                    class: "input-split-line"
                  }, toDisplayString($props.split), 1)) : createCommentVNode("", true)
                ]);
              }), 128))
            ])
          ])) : (openBlock(), createElementBlock("u-text", {
            key: 3,
            class: "selected-area placeholder"
          }, toDisplayString($props.placeholder), 1)),
          $props.clearIcon && !$props.readonly && $data.inputSelected.length ? (openBlock(), createElementBlock("view", {
            key: 4,
            class: "icon-clear",
            onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
          }, [
            createVNode(_component_uni_icons, {
              type: "clear",
              color: "#c0c4cc",
              size: "24"
            })
          ])) : createCommentVNode("", true),
          (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (openBlock(), createElementBlock("view", {
            key: 5,
            class: "arrow-area"
          }, [
            createElementVNode("view", { class: "input-arrow" })
          ])) : createCommentVNode("", true)
        ], 2)
      ])
    ]),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-data-tree-cover",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClose && $options.handleClose(...args))
    })) : createCommentVNode("", true),
    $data.isOpened ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-data-tree-dialog"
    }, [
      createElementVNode("view", { class: "uni-popper__arrow" }),
      createElementVNode("view", { class: "dialog-caption" }, [
        createElementVNode("view", { class: "title-area" }, [
          createElementVNode("u-text", { class: "dialog-title" }, toDisplayString($props.popupTitle), 1)
        ]),
        createElementVNode("view", {
          class: "dialog-close",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
        }, [
          createElementVNode("view", {
            class: "dialog-close-plus",
            "data-id": "close"
          }),
          createElementVNode("view", {
            class: "dialog-close-plus dialog-close-rotate",
            "data-id": "close"
          })
        ])
      ]),
      createVNode(_component_data_picker_view, {
        class: "picker-view",
        ref: "pickerView",
        modelValue: _ctx.dataValue,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dataValue = $event),
        localdata: _ctx.localdata,
        preload: _ctx.preload,
        collection: _ctx.collection,
        field: _ctx.field,
        orderby: _ctx.orderby,
        where: _ctx.where,
        "step-searh": _ctx.stepSearh,
        "self-field": _ctx.selfField,
        "parent-field": _ctx.parentField,
        "managed-mode": true,
        map: _ctx.map,
        ellipsis: $props.ellipsis,
        onChange: $options.onchange,
        onDatachange: $options.ondatachange,
        onNodeclick: $options.onnodeclick
      }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
    ])) : createCommentVNode("", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "title": { "": { "fontSize": 14, "fontWeight": "bold", "marginTop": 20, "marginRight": 0, "marginBottom": 5, "marginLeft": 0 } }, "data-pickerview": { "": { "height": 400, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#e5e5e5" } }, "popper__arrow": { "": { "top": -6, "left": 50, "marginRight": 3, "borderTopWidth": 0, "borderBottomColor": "#EBEEF5" } } };
const _sfc_main = {
  data() {
    return {
      classes: "1-2",
      dataTree: [
        {
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0",
          children: [
            {
              text: "2.1班",
              value: "2-1"
            },
            {
              text: "2.2班",
              value: "2-2"
            }
          ]
        },
        {
          text: "三年级",
          value: "3-0",
          disable: true
        }
      ]
    };
  },
  methods: {
    onnodeclick(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:71", e);
    },
    onpopupopened(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:74", "popupopened");
    },
    onpopupclosed(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:77", "popupclosed");
    },
    onchange(e) {
      formatAppLog("log", "at pages/extUI/data-picker/data-picker.nvue:80", "---------onchange:", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0$1);
  const _component_uni_data_picker = resolveEasycom(resolveDynamicComponent("uni-data-picker"), __easycom_1);
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
        "is-full": "",
        "is-shadow": false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "标签组件多用于商品分类、重点内容显示等场景。")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "本地数据",
        type: "line",
        padding: "",
        style: { "height": "calc(100vh - 100px)" }
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_data_picker, {
            placeholder: "请选择班级",
            "popup-title": "请选择所在地区",
            localdata: $data.dataTree,
            modelValue: $data.classes,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.classes = $event),
            onChange: $options.onchange,
            onNodeclick: $options.onnodeclick,
            onPopupopened: $options.onpopupopened,
            onPopupclosed: $options.onpopupclosed
          }, null, 8, ["localdata", "modelValue", "onChange", "onNodeclick", "onPopupopened", "onPopupclosed"])
        ]),
        _: 1
      })
    ])
  ]);
}
const dataPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  dataPicker as default
};
