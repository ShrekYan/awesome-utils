import React from "react";
import { useNetworkState } from "react-use";
import './Network.css';var _a$test;
var a = {
  test123: null
};
console.log(a === null || a === void 0 ? void 0 : a.test123);
console.log((_a$test = a === null || a === void 0 ? void 0 : a.test123) !== null && _a$test !== void 0 ? _a$test : "true");
var Network = function Network2() {
  var _useNetworkState = useNetworkState(), online = _useNetworkState.online;
  var handleRefresh = function handleRefresh2() {
    location.reload();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, !online && /* @__PURE__ */ React.createElement("div", {
    className: "network-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "network"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, "无网络连接，请尝试刷新页面。", /* @__PURE__ */ React.createElement("div", {
    className: "refresh",
    onClick: handleRefresh
  }, "刷新页面")))));
};
export {
  Network as default
};
