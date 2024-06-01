import "vue";
const isString = (val) => typeof val === "string";
function getCurrentSubNVue() {
  return uni.getSubNVueById(plus.webview.currentWebview().id);
}
function requireNativePlugin(name) {
  return weex.requireModule(name);
}
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function resolveEasycom(component, easycom) {
  return isString(component) ? easycom : component;
}
export {
  requireNativePlugin as a,
  formatAppLog as f,
  getCurrentSubNVue as g,
  resolveEasycom as r
};
