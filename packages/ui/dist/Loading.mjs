import React from "react";
import './Loading.css';var Loading = function Loading2(props) {
  if (!props.showLoading) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "common-loading"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loading-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mask"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "circular1",
    viewBox: "25 25 50 50"
  }, /* @__PURE__ */ React.createElement("circle", {
    className: "path",
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "circular2",
    viewBox: "25 25 50 50"
  }, /* @__PURE__ */ React.createElement("circle", {
    className: "path",
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "loader-text"
  }, "正在加载...")))));
};
export {
  Loading as default
};
