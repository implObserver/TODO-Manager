"use strict";
(self["webpackChunktodo_manager"] = self["webpackChunktodo_manager"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    box-sizing: border-box;
}

:root {
    --font-size-to-folder: 2vh;
}

html {
    font-family: Roboto;
}

.wrapper {
    display: grid;
    grid-template-rows: min-content 1fr;
    max-width: 100%;
    max-height: 100%;
}

span {
    padding-left: 1vh;
    padding-right: 1vh;
    height: min-content;
    width: min-content;
}

.header {
    display: grid;
    grid-template-columns: min-content min-content;
    gap: 1vh;
    height: 7vh;
    justify-content: center;
    align-items: center;
    background-color: #b2d4b2;
    max-width: inherit;
}

.paths {
    display: flex;
    width: 2vh;
    height: 4vh;
    border: 0.2vh #36bb36 solid;
    background-color: #d83d71;
    opacity: 0.5;
    font-size: 2vh;
    justify-content: center;
    align-items: center;
    border-radius: 0.4vh;
    cursor: pointer;
}

.paths:hover {
    opacity: 1;
}

.chain-folders {
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    font-size: 3vh;
    height: min-content;
    overflow-x: scroll;

}

::-webkit-scrollbar {
    height: 1vh;
}

::-webkit-scrollbar-thumb {
    background-color: #37f037;

}

::-webkit-scrollbar-track {
    background-color: #b2bad4;
}

.link-wrapper {
    display: flex;
    width: min-content;
    background-color: #9cfd9c;
    border: 0.2vh #36bb36 solid;
    border-radius: 0.4vh;
}

.link-wrapper:last-child {
    background-color: #b2bad4;
}

.link-wrapper :hover {
    background-color: #37f037;
}

.link-wrapper:last-child :hover {
    background-color: #96a1c2;
}

.content {
    display: grid;
    max-width: inherit;
    max-height: inherit;
}

.folders {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vh, 1fr));
    grid-template-rows: min-content;
    justify-items: center;
    justify-content: center;
    align-content: start;
    align-items: center;
    max-width: inherit;
    max-height: inherit;
    background-color: #e9f5e9;
    font-size: var(--font-size-to-folder);
}

.folder,
.templateFolder,
.back {
    display: grid;
    grid-template-rows: 1fr min-content;
    grid-template-areas: 'center';
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    max-width: inherit;
    max-height: inherit;
    cursor: pointer;
}

.folder:hover {
    z-index: 100;
}

.icon-wrapper {
    grid-area: center;
    display: flex;
    justify-content: center;
    max-width: inherit;
    max-height: inherit;
}

.icon-wrapper>svg {
    display: flex;
    width: 80vh;
    max-width: inherit;
    max-height: inherit;
}

.name {
    grid-area: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    height: min-content;
    max-width: 60%;
    max-height: inherit;
    pointer-events: none;
}

.templateFolder>.name,
.chain-folders {
    user-select: none;
    /* standard syntax */
    -webkit-user-select: none;
    /* webkit (safari, chrome) browsers */
    -moz-user-select: none;
    /* mozilla browsers */
    -khtml-user-select: none;
    /* webkit (konqueror) browsers */
    -ms-user-select: none;
    /* IE10+ */
}

.wrapper>.folderSvg {
    display: none;
}

.templateFolder:hover {
    animation-fill-mode: forwards;
    animation: 15s infinite alternate dash;
}

@keyframes dash {
    from {
        stroke-dashoffset: 0;
    }

    to {
        stroke-dashoffset: 100;
    }
}

@media screen and (max-aspect-ratio:1/1.0000001) {}

@media screen and (min-aspect-ratio: 1/1) {}

@media screen and (max-height: 450px) {
    .folders {
        grid-template-columns: repeat(auto-fit, minmax(min(80vh, 100vw), 1fr));
    }
}

@media screen and (max-width: 280px) {
    .wrapper {
        max-width: 100vw;
    }

    .folders {
        grid-template-columns: repeat(auto-fit, minmax(min(80vh, 100vw), 1fr));
    }
}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,QAAQ;IACR,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,WAAW;IACX,2BAA2B;IAC3B,yBAAyB;IACzB,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,0DAA0D;IAC1D,+BAA+B;IAC/B,qBAAqB;IACrB,uBAAuB;IACvB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;;;IAGI,aAAa;IACb,mCAAmC;IACnC,6BAA6B;IAC7B,qBAAqB;IACrB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;IACpB,yBAAyB;IACzB,qCAAqC;IACrC,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;IACxB,gCAAgC;IAChC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI;QACI,oBAAoB;IACxB;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA,kDAAkD;;AAElD,2CAA2C;;AAE3C;IACI;QACI,sEAAsE;IAC1E;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,sEAAsE;IAC1E;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 2vh;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.paths {\n    display: flex;\n    width: 2vh;\n    height: 4vh;\n    border: 0.2vh #36bb36 solid;\n    background-color: #d83d71;\n    opacity: 0.5;\n    font-size: 2vh;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.4vh;\n    cursor: pointer;\n}\n\n.paths:hover {\n    opacity: 1;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: 3vh;\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n::-webkit-scrollbar {\n    height: 1vh;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.link-wrapper {\n    display: flex;\n    width: min-content;\n    background-color: #9cfd9c;\n    border: 0.2vh #36bb36 solid;\n    border-radius: 0.4vh;\n}\n\n.link-wrapper:last-child {\n    background-color: #b2bad4;\n}\n\n.link-wrapper :hover {\n    background-color: #37f037;\n}\n\n.link-wrapper:last-child :hover {\n    background-color: #96a1c2;\n}\n\n.content {\n    display: grid;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.folders {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20vh, 1fr));\n    grid-template-rows: min-content;\n    justify-items: center;\n    justify-content: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.folder,\n.templateFolder,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.folder:hover {\n    z-index: 100;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: flex;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 80vh;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    text-align: center;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    pointer-events: none;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}\n\n@media screen and (max-height: 450px) {\n    .folders {\n        grid-template-columns: repeat(auto-fit, minmax(min(80vh, 100vw), 1fr));\n    }\n}\n\n@media screen and (max-width: 280px) {\n    .wrapper {\n        max-width: 100vw;\n    }\n\n    .folders {\n        grid-template-columns: repeat(auto-fit, minmax(min(80vh, 100vw), 1fr));\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/views/css/main.css":
/*!********************************!*\
  !*** ./src/views/css/main.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/foldersControllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/foldersControllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   openFolder: () => (/* binding */ openFolder),
/* harmony export */   setFontSizeToFolders: () => (/* binding */ setFontSizeToFolders)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_nodes_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/content */ "./src/views/nodes/content.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");





const openFolder = (folder) => {
    let content = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(content);
    createButtons();
    viewsCfg(folder);
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(folder);
}

const createFolder = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder(folder);
    (0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.viewFolder)(newFolder.getNode());
    setFontSizeToFolders();
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forFolder(newFolder);

}

const createButtons = () => {
    createButtonToAddFolder();
    createButtonToCloseFolder();
}

const createButtonToAddFolder = () => {
    ;(0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.viewFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder.getNode(), 'add');
}

const setButtonsListeners = (() => {
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder);
})();

const createButtonToCloseFolder = () => {
    (0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.viewFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder.getNode(), 'close');
}

const viewsCfg = (folder) => {
    viewFolders(folder.getInnerFolders());
    setFontSizeToFolders();
}

const viewFolders = (folders) => {
    for (let folder of folders) {
        const node = folder.getNode();
        (0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.viewFolder)(node);
    }
}

const setFontSizeToFolders = () => {
    let template = document.querySelector('.templateFolder');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.relativeFont(template, '--font-size-to-folder');
}



/***/ }),

/***/ "./src/controllers/linksOfPath.js":
/*!****************************************!*\
  !*** ./src/controllers/linksOfPath.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLink: () => (/* binding */ getLink)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _views_nodes_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/content */ "./src/views/nodes/content.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");





const getLink = () => {
    let link = (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.Link)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder());
    link.setNode((0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.getLinkNodes)(link.getName()));
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forLinkOfPath(link);
    return link;
}

/***/ }),

/***/ "./src/controllers/listeners.js":
/*!**************************************!*\
  !*** ./src/controllers/listeners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setListeners: () => (/* binding */ setListeners)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_nodes_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/content */ "./src/views/nodes/content.js");
/* harmony import */ var _views_nodes_pathsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/pathsContainer */ "./src/views/nodes/pathsContainer.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foldersControllers */ "./src/controllers/foldersControllers.js");






const setListeners = () => {
    const forFolder = (currentFolder) => {
        let node = currentFolder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.openFolder)(currentFolder);
            (0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.addLinkToPath)(currentFolder);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.createFolder)();
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder();
            (0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_2__.removeLinkInPath)();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.openFolder)(openedFolder.getParent());
        });
    }

    const forLinkOfPath = (link) => {
        let path = document.querySelector('.chain-folders');
        let node = link.getNode();
        const clickNode = node.addEventListener('click', e => {
            _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChildsAfter(path, node);
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.openFolder)(link.getFolder());
        });
    }

    const forButtonToOpenPaths = () => {
        let node = document.querySelector('paths');
        const clickPaths = node.addEventListener('click', e => {
            let container = (0,_views_nodes_pathsContainer__WEBPACK_IMPORTED_MODULE_3__.getPathsContainer)();

        });
    }

    const forWIndow = (() => {
        const resize = window.addEventListener('resize', e => {
            ;(0,_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.setFontSizeToFolders)();
        });
    })();

    return { forFolder, forButtonToAddFolder, forButtonToCloseFolder, forLinkOfPath }
}

/***/ }),

/***/ "./src/helper/tools.js":
/*!*****************************!*\
  !*** ./src/helper/tools.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tools: () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _views_animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/animations/animations */ "./src/views/animations/animations.js");


const Tools = (() => {
    const getNodeWithSpan = (nodeName, text, ...classNames) => {
        let node = createNode(nodeName, ...classNames);
        return setUpSpan(node, text);
    }

    const createNode = (nodeName, ...classNames) => {
        let node = document.createElement(nodeName);
        addClasses(node, ...classNames);
        return node;
    }

    const addClasses = (node, ...classes) => {
        for (let curClass of classes) {
            node.classList.add(curClass);
        }
    }

    const setUpSpan = (node, text) => {
        let span = createNode('span');
        span.textContent = text;
        node.appendChild(span);
        return node;
    }

    const appendChilds = (node, ...childs) => {
        for (let child of childs) {
            node.appendChild(child);
        }
    }

    const setAttributes = (e, atrs) => {
        for (let atr of atrs) {
            e.setAttribute(atr.name, atr.val);
        }
    }

    const removeChilds = (node) => {
        if (node !== null) {
            while (node.firstChild) {
                node.removeChild(node.lastChild);
            }
        }
    }

    const removeChildsAfter = (node, child) => {
        while (node.lastChild != child) {
            node.removeChild(node.lastChild);
        }
    }

    const displayMode = (mode, ...nodes) => {
        for (let node of nodes) {
            node.style.display = mode;
        }
    }

    const smoothVisibility = () => {
        const close = (e, op1, op2, dur, fill) => {
            return _views_animations_animations__WEBPACK_IMPORTED_MODULE_0__.Animations.opacity(e, op1, op2, dur, fill).finished.then(() => {
                e.style.visibility = 'hidden';
            });
        }
        const open = (e, op1, op2, dur, fill) => {
            e.style.visibility = 'visible';
            return _views_animations_animations__WEBPACK_IMPORTED_MODULE_0__.Animations.opacity(e, op1, op2, dur, fill);
        }
        return { open, close };
    };

    const smoothVisibilityGroup = (...nodes) => {
        const close = (op1, op2, dur, fill) => {
            for (let node of nodes) {
                smoothVisibility().close(node, op1, op2, dur, fill);
            }
        }
        const open = (op1, op2, dur, fill) => {
            for (let node of nodes) {
                smoothVisibility().open(node, op1, op2, dur, fill);
            }
        }
        return { open, close };
    }

    const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

    const relativeFont = (nodeOfRelativity, cssVar) => {
        var r = document.querySelector(':root');
        let folderHeight = document.defaultView.getComputedStyle(nodeOfRelativity).width;
        let size = parseFloat(folderHeight.replace('px', '')) / 6;
        r.style.setProperty(cssVar, `${size}px`);
    }

    return { relativeFont, removeChildsAfter, displayMode, smoothVisibilityGroup, smoothVisibility, rgba2hex, getNodeWithSpan, setAttributes, createNode, appendChilds, setUpSpan, removeChilds, addClasses };
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _views_nodes_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/nodes/content */ "./src/views/nodes/content.js");





let zeroFolder = (0,_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.Folder)(0);
zeroFolder.setParent(zeroFolder);
(0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(zeroFolder);
(0,_views_nodes_content__WEBPACK_IMPORTED_MODULE_3__.addLinkToPath)(zeroFolder);

/***/ }),

/***/ "./src/models/folderModels.js":
/*!************************************!*\
  !*** ./src/models/folderModels.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonForAddFolder: () => (/* binding */ ButtonForAddFolder),
/* harmony export */   ButtonForCloseFolder: () => (/* binding */ ButtonForCloseFolder),
/* harmony export */   Folder: () => (/* binding */ Folder),
/* harmony export */   OpenedFolder: () => (/* binding */ OpenedFolder)
/* harmony export */ });
/* harmony import */ var _views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/folder */ "./src/views/nodes/folder.js");
/* harmony import */ var _views_nodes_ButtonForAddFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ButtonForAddFolder */ "./src/views/nodes/ButtonForAddFolder.js");
/* harmony import */ var _views_nodes_ButtonForCloseFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ButtonForCloseFolder */ "./src/views/nodes/ButtonForCloseFolder.js");




const Folder = (ids, folder = 0) => {
    let id = ids;
    let count = 0;
    let name;
    let parent = folder;
    const innerFolders = []
    const node = (0,_views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__.getFolderNode)(id);

    const addFolder = (folder) => {
        const newId = `${id}_${count}`;
        ++count;
        let newFolder = Folder(newId, folder);
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        console.log(undefined);
    }

    const getNode = () => {
        return node;
    }

    const getId = () => {
        return id;
    }

    const getInnerFolders = () => {
        return innerFolders;
    }

    const setParent = (newParent) => {
        parent = newParent;
    }

    const getParent = () => {
        return parent;
    }

    const setName = (val) => {
        name = val;
    }

    const getName = () => {
        return name;
    }

    return { setParent, getParent, addFolder, del, getNode, getInnerFolders, getId, setName, getName };
}

const ButtonForAddFolder = (() => {
    const node = (0,_views_nodes_ButtonForAddFolder__WEBPACK_IMPORTED_MODULE_1__.getButtonForAddFolder)();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();

const ButtonForCloseFolder = (() => {
    const node = (0,_views_nodes_ButtonForCloseFolder__WEBPACK_IMPORTED_MODULE_2__.getButtonForCloseFolder)();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();

const OpenedFolder = (() => {
    let openedFolder;
    const setOpenedFolder = (folder) => {
        openedFolder = folder;
    }
    const getOpenedFolder = () => {
        return openedFolder;
    }
    return { setOpenedFolder, getOpenedFolder }
})();

/***/ }),

/***/ "./src/models/linkOfPath.js":
/*!**********************************!*\
  !*** ./src/models/linkOfPath.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
const Link = (iFolder) => {
    let folder = iFolder;
    let name = folder.getId();
    let node;

    const getFolder = () => {
        return folder;
    }

    const getName = () => {
        return name;
    }

    const setNode = (val) => {
        node = val;
    }

    const getNode = () => {
        return node;
    }

    return { getNode, getName, setNode, getFolder };
}

/***/ }),

/***/ "./src/views/animations/animations.js":
/*!********************************************!*\
  !*** ./src/views/animations/animations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
const Animations = (() => {
    const transform = (() => {
        const x = (e, x0, x1, dur, fill = 'none') => {
            return e.animate([{ left: `${x0}` }, { left: `${x1}` }], { duration: dur, fill: fill });
        }

        const y = (e, y0, y1, dur, fill = 'none') => {
            return e.animate([{ top: `${y0}` }, { top: `${y1}` }], { duration: dur, fill: fill });
        }

        const rotate = (e, rotate1, rotate2, dur, fill = 'none') => {
            return e.animate([{ transform: `rotate(${rotate1}deg)` }, { transform: `rotate(${rotate2}deg)` }], { duration: dur, fill: fill });
        }

        return { x, y, rotate };
    })();

    const background = (e, color1, color2, dur, fill = 'none') => {
        return e.animate([{ background: color1 }, { background: color2 }], { duration: dur, fill: fill });
    }

    const opacity = (e, opacity1, opacity2, dur, fill = 'none') => {
        return e.animate([{ opacity: opacity1 }, { opacity: opacity2 }], { duration: dur, fill: fill });
    }

    const custom = (e, dur, fill = 'none', ...keyFrames) => {
        return e.animate(...keyFrames, { duration: dur, fill: fill });
    }

    return { transform, background, opacity, custom };
})();

/***/ }),

/***/ "./src/views/nodes/ButtonForAddFolder.js":
/*!***********************************************!*\
  !*** ./src/views/nodes/ButtonForAddFolder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getButtonForAddFolder: () => (/* binding */ getButtonForAddFolder)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getSvgInWrapper = () => {
    let wrapperIcon = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.templateFolderSvg');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


const getButtonForAddFolder = () => {
    const folder = buttonForAddNodeAssembly();
    return folder;
}

const buttonForAddNodeAssembly = () => {
    const folder = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'templateFolder');
    const name = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.getNodeWithSpan('div', `Add...`, 'name');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(folder, getSvgInWrapper(), name);
    return folder;
}

/***/ }),

/***/ "./src/views/nodes/ButtonForCloseFolder.js":
/*!*************************************************!*\
  !*** ./src/views/nodes/ButtonForCloseFolder.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getButtonForCloseFolder: () => (/* binding */ getButtonForCloseFolder)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getWrapperIcon = () => {
    let wrapperIcon = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.arrow-left');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


const getButtonForCloseFolder = () => {
    const folder = buttonForCloseFolderAssembly();
    return folder;
}

const buttonForCloseFolderAssembly = () => {
    const folder = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'back');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(folder, getWrapperIcon());
    return folder;
}

/***/ }),

/***/ "./src/views/nodes/content.js":
/*!************************************!*\
  !*** ./src/views/nodes/content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLinkToPath: () => (/* binding */ addLinkToPath),
/* harmony export */   getLinkNodes: () => (/* binding */ getLinkNodes),
/* harmony export */   removeLinkInPath: () => (/* binding */ removeLinkInPath),
/* harmony export */   viewFolder: () => (/* binding */ viewFolder)
/* harmony export */ });
/* harmony import */ var _controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/linkOfPath */ "./src/models/linkOfPath.js");





const wrapper = document.querySelector('.wrapper');

const viewFolder = (node, flag = 'folder') => {
    let content = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');
    if (flag === 'close') {
        content.appendChild(node);
    } else if (true) {
        content.insertBefore(node, content.lastChild);
    } else {}
}

const addLinkToPath = () => {
    let link = (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__.getLink)();
    let path = document.querySelector('.chain-folders');
    path.appendChild(link.getNode());
    path.scrollLeft = path.scrollWidth;
}

const getLinkNodes = (name) => {
    let nodeWrapper = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.createNode('div', 'link-wrapper');
    let nodeLink = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.getNodeWithSpan('div', `/${name}`, 'link');
    nodeWrapper.appendChild(nodeLink);
    return nodeWrapper;
}

const removeLinkInPath = () => {
    let path = document.querySelector('.chain-folders');
    path.removeChild(path.lastChild);
}

/***/ }),

/***/ "./src/views/nodes/folder.js":
/*!***********************************!*\
  !*** ./src/views/nodes/folder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFolderNode: () => (/* binding */ getFolderNode)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getWrapperIcon = () => {
    let wrapperIcon = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.folderSvg').cloneNode(true);
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}

const getFolderNode = (id) => {
    const folder = folderNodeAssembly(id);
    return folder;
}

const folderNodeAssembly = (id) => {
    const folder = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'folder', id);
    const name = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.getNodeWithSpan('div', `name: ${id}`, 'name');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(folder, getWrapperIcon(id), name);
    return folder;
}

/***/ }),

/***/ "./src/views/nodes/pathsContainer.js":
/*!*******************************************!*\
  !*** ./src/views/nodes/pathsContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPathsContainer: () => (/* binding */ getPathsContainer)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getPathsContainer = () => {
    let container = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'paths-container');
    return container;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFB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Y2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcz8yMmFiIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlua3NPZlBhdGguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvaGVscGVyL3Rvb2xzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2ZvbGRlck1vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2xpbmtPZlBhdGguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDJ2aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZDRiMjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5wYXRocyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnZoO1xuICAgIGhlaWdodDogNHZoO1xuICAgIGJvcmRlcjogMC4ydmggIzM2YmIzNiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgzZDcxO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhdGhzOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2hhaW4tZm9sZGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBmb250LXNpemU6IDN2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDF2aDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4ubGluay13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNmZDljO1xuICAgIGJvcmRlcjogMC4ydmggIzM2YmIzNiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjR2aDtcbn1cblxuLmxpbmstd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4ubGluay13cmFwcGVyIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcbn1cblxuLmxpbmstd3JhcHBlcjpsYXN0LWNoaWxkIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2YTFjMjtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5mb2xkZXJzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjB2aCwgMWZyKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XG59XG5cbi5mb2xkZXIsXG4udGVtcGxhdGVGb2xkZXIsXG4uYmFjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2VudGVyJztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9sZGVyOmhvdmVyIHtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pY29uLXdyYXBwZXI+c3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA4MHZoO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ubmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXG4uY2hhaW4tZm9sZGVycyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogbW96aWxsYSBicm93c2VycyAqL1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogSUUxMCsgKi9cbn1cblxuLndyYXBwZXI+LmZvbGRlclN2ZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRlbXBsYXRlRm9sZGVyOmhvdmVyIHtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgICBmcm9tIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5mb2xkZXJzIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oODB2aCwgMTAwdncpLCAxZnIpKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIH1cblxuICAgIC5mb2xkZXJzIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oODB2aCwgMTAwdncpLCAxZnIpKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwREFBMEQ7SUFDMUQsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUEsa0RBQWtEOztBQUVsRCwyQ0FBMkM7O0FBRTNDO0lBQ0k7UUFDSSxzRUFBc0U7SUFDMUU7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksc0VBQXNFO0lBQzFFO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMnZoO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZDRiMjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbn1cXG5cXG4ucGF0aHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYm9yZGVyOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgzZDcxO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhdGhzOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGZvbnQtc2l6ZTogM3ZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IDF2aDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4ubGluay13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNmZDljO1xcbiAgICBib3JkZXI6IDAuMnZoICMzNmJiMzYgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHZoO1xcbn1cXG5cXG4ubGluay13cmFwcGVyOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4ubGluay13cmFwcGVyIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxufVxcblxcbi5saW5rLXdyYXBwZXI6bGFzdC1jaGlsZCA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZhMWMyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwdmgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpO1xcbn1cXG5cXG4uZm9sZGVyLFxcbi50ZW1wbGF0ZUZvbGRlcixcXG4uYmFjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2VudGVyJztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvbGRlcjpob3ZlciB7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmljb24td3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uaWNvbi13cmFwcGVyPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MHZoO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJRTEwKyAqL1xcbn1cXG5cXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRlbXBsYXRlRm9sZGVyOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge31cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcXG4gICAgLmZvbGRlcnMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oODB2aCwgMTAwdncpLCAxZnIpKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuXFxuICAgIC5mb2xkZXJzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDgwdmgsIDEwMHZ3KSwgMWZyKSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBhZGRMaW5rVG9QYXRoLCB2aWV3Rm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2NvbnRlbnRcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGNvbnRlbnQpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICB2aWV3c0NmZyhmb2xkZXIpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIoZm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvbGRlciA9IChmb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpID0+IHtcbiAgICBsZXQgbmV3Rm9sZGVyID0gZm9sZGVyLmFkZEZvbGRlcihmb2xkZXIpO1xuICAgIHZpZXdGb2xkZXIobmV3Rm9sZGVyLmdldE5vZGUoKSk7XG4gICAgc2V0Rm9udFNpemVUb0ZvbGRlcnMoKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JGb2xkZXIobmV3Rm9sZGVyKTtcblxufVxuXG5jb25zdCBjcmVhdGVCdXR0b25zID0gKCkgPT4ge1xuICAgIGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlcigpO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3Rm9sZGVyKEJ1dHRvbkZvckFkZEZvbGRlci5nZXROb2RlKCksICdhZGQnKTtcbn1cblxuY29uc3Qgc2V0QnV0dG9uc0xpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRGb2xkZXIoQnV0dG9uRm9yQWRkRm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0Nsb3NlRm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyKTtcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgdmlld0ZvbGRlcihCdXR0b25Gb3JDbG9zZUZvbGRlci5nZXROb2RlKCksICdjbG9zZScpO1xufVxuXG5jb25zdCB2aWV3c0NmZyA9IChmb2xkZXIpID0+IHtcbiAgICB2aWV3Rm9sZGVycyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIHNldEZvbnRTaXplVG9Gb2xkZXJzKCk7XG59XG5cbmNvbnN0IHZpZXdGb2xkZXJzID0gKGZvbGRlcnMpID0+IHtcbiAgICBmb3IgKGxldCBmb2xkZXIgb2YgZm9sZGVycykge1xuICAgICAgICBjb25zdCBub2RlID0gZm9sZGVyLmdldE5vZGUoKTtcbiAgICAgICAgdmlld0ZvbGRlcihub2RlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZVRvRm9sZGVycyA9ICgpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXInKTtcbiAgICBUb29scy5yZWxhdGl2ZUZvbnQodGVtcGxhdGUsICctLWZvbnQtc2l6ZS10by1mb2xkZXInKTtcbn1cblxuIiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2xpbmtPZlBhdGhcIjtcbmltcG9ydCB7IGdldExpbmtOb2RlcyB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9jb250ZW50XCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IGdldExpbmsgPSAoKSA9PiB7XG4gICAgbGV0IGxpbmsgPSBMaW5rKE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSk7XG4gICAgbGluay5zZXROb2RlKGdldExpbmtOb2RlcyhsaW5rLmdldE5hbWUoKSkpO1xuICAgIHNldExpc3RlbmVycygpLmZvckxpbmtPZlBhdGgobGluayk7XG4gICAgcmV0dXJuIGxpbms7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgYWRkTGlua1RvUGF0aCwgcmVtb3ZlTGlua0luUGF0aCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9jb250ZW50XCI7XG5pbXBvcnQgeyBnZXRQYXRoc0NvbnRhaW5lciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyLCBzZXRGb250U2l6ZVRvRm9sZGVycyB9IGZyb20gXCIuL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvckZvbGRlciA9IChjdXJyZW50Rm9sZGVyKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gY3VycmVudEZvbGRlci5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrRm9sZGVyID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgb3BlbkZvbGRlcihjdXJyZW50Rm9sZGVyKTtcbiAgICAgICAgICAgIGFkZExpbmtUb1BhdGgoY3VycmVudEZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IG9wZW5lZEZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgICAgIHJlbW92ZUxpbmtJblBhdGgoKTtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIob3BlbmVkRm9sZGVyLmdldFBhcmVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTGlua09mUGF0aCA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBwYXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWluLWZvbGRlcnMnKTtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgVG9vbHMucmVtb3ZlQ2hpbGRzQWZ0ZXIocGF0aCwgbm9kZSk7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGxpbmsuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub09wZW5QYXRocyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwYXRocycpO1xuICAgICAgICBjb25zdCBjbGlja1BhdGhzID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGdldFBhdGhzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yV0luZG93ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xuICAgICAgICAgICAgc2V0Rm9udFNpemVUb0ZvbGRlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IGZvckZvbGRlciwgZm9yQnV0dG9uVG9BZGRGb2xkZXIsIGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIsIGZvckxpbmtPZlBhdGggfVxufSIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5cbmNvbnN0IFRvb2xzID0gKCgpID0+IHtcbiAgICBjb25zdCBnZXROb2RlV2l0aFNwYW4gPSAobm9kZU5hbWUsIHRleHQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVOb2RlKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIHNldFVwU3Bhbihub2RlLCB0ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOb2RlID0gKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgICAgIGFkZENsYXNzZXMobm9kZSwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY3VyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VXBTcGFuID0gKG5vZGUsIHRleHQpID0+IHtcbiAgICAgICAgbGV0IHNwYW4gPSBjcmVhdGVOb2RlKCdzcGFuJyk7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcykge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGUsIGF0cnMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgYXRyIG9mIGF0cnMpIHtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHNBZnRlciA9IChub2RlLCBjaGlsZCkgPT4ge1xuICAgICAgICB3aGlsZSAobm9kZS5sYXN0Q2hpbGQgIT0gY2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU1vZGUgPSAobW9kZSwgLi4ubm9kZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNtb290aFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eUdyb3VwID0gKC4uLm5vZGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkuY2xvc2Uobm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlbiA9IChvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4obm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZ2JhMmhleCA9IChyZ2JhKSA9PiBgIyR7cmdiYS5tYXRjaCgvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLykuc2xpY2UoMSkubWFwKChuLCBpKSA9PiAoaSA9PT0gMyA/IE1hdGgucm91bmQocGFyc2VGbG9hdChuKSAqIDI1NSkgOiBwYXJzZUZsb2F0KG4pKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKS5yZXBsYWNlKCdOYU4nLCAnJykpLmpvaW4oJycpfWBcblxuICAgIGNvbnN0IHJlbGF0aXZlRm9udCA9IChub2RlT2ZSZWxhdGl2aXR5LCBjc3NWYXIpID0+IHtcbiAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICBsZXQgZm9sZGVySGVpZ2h0ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlT2ZSZWxhdGl2aXR5KS53aWR0aDtcbiAgICAgICAgbGV0IHNpemUgPSBwYXJzZUZsb2F0KGZvbGRlckhlaWdodC5yZXBsYWNlKCdweCcsICcnKSkgLyA2O1xuICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7c2l6ZX1weGApO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlbGF0aXZlRm9udCwgcmVtb3ZlQ2hpbGRzQWZ0ZXIsIGRpc3BsYXlNb2RlLCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAsIHNtb290aFZpc2liaWxpdHksIHJnYmEyaGV4LCBnZXROb2RlV2l0aFNwYW4sIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZU5vZGUsIGFwcGVuZENoaWxkcywgc2V0VXBTcGFuLCByZW1vdmVDaGlsZHMsIGFkZENsYXNzZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRvb2xzIH0iLCJpbXBvcnQgeyBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVycydcbmltcG9ydCB7IEZvbGRlciB9IGZyb20gJy4vbW9kZWxzL2ZvbGRlck1vZGVscyc7XG5pbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgYWRkTGlua1RvUGF0aCB9IGZyb20gJy4vdmlld3Mvbm9kZXMvY29udGVudCc7XG5cbmxldCB6ZXJvRm9sZGVyID0gRm9sZGVyKDApO1xuemVyb0ZvbGRlci5zZXRQYXJlbnQoemVyb0ZvbGRlcik7XG5vcGVuRm9sZGVyKHplcm9Gb2xkZXIpO1xuYWRkTGlua1RvUGF0aCh6ZXJvRm9sZGVyKTsiLCJpbXBvcnQgeyBnZXRGb2xkZXJOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2ZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZEZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQ2xvc2VGb2xkZXJcIjtcblxuZXhwb3J0IGNvbnN0IEZvbGRlciA9IChpZHMsIGZvbGRlciA9IDApID0+IHtcbiAgICBsZXQgaWQgPSBpZHM7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgcGFyZW50ID0gZm9sZGVyO1xuICAgIGNvbnN0IGlubmVyRm9sZGVycyA9IFtdXG4gICAgY29uc3Qgbm9kZSA9IGdldEZvbGRlck5vZGUoaWQpO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdJZCA9IGAke2lkfV8ke2NvdW50fWA7XG4gICAgICAgICsrY291bnQ7XG4gICAgICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIobmV3SWQsIGZvbGRlcik7XG4gICAgICAgIGlubmVyRm9sZGVycy5wdXNoKG5ld0ZvbGRlcik7XG4gICAgICAgIHJldHVybiBuZXdGb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyRm9sZGVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyRm9sZGVycztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRQYXJlbnQsIGdldFBhcmVudCwgYWRkRm9sZGVyLCBkZWwsIGdldE5vZGUsIGdldElubmVyRm9sZGVycywgZ2V0SWQsIHNldE5hbWUsIGdldE5hbWUgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckFkZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZEZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgT3BlbmVkRm9sZGVyID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkRm9sZGVyO1xuICAgIGNvbnN0IHNldE9wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgb3BlbmVkRm9sZGVyID0gZm9sZGVyO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRGb2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB7IHNldE9wZW5lZEZvbGRlciwgZ2V0T3BlbmVkRm9sZGVyIH1cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IExpbmsgPSAoaUZvbGRlcikgPT4ge1xuICAgIGxldCBmb2xkZXIgPSBpRm9sZGVyO1xuICAgIGxldCBuYW1lID0gZm9sZGVyLmdldElkKCk7XG4gICAgbGV0IG5vZGU7XG5cbiAgICBjb25zdCBnZXRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Tm9kZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbm9kZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXROb2RlLCBnZXROYW1lLCBzZXROb2RlLCBnZXRGb2xkZXIgfTtcbn0iLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LCB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZEZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3RlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JDbG9zZUZvbGRlckFzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdiYWNrJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0V3JhcHBlckljb24oKSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBnZXRMaW5rIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpbmtzT2ZQYXRoXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5leHBvcnQgY29uc3Qgdmlld0ZvbGRlciA9IChub2RlLCBmbGFnID0gJ2ZvbGRlcicpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4obm9kZSwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcbiAgICBpZiAoZmxhZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoJ3Rhc2snKSB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9IGVsc2UgaWYgKCdmb2xkZXInKSB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9IGVsc2UgaWYgKCdhZGQnKSB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkTGlua1RvUGF0aCA9ICgpID0+IHtcbiAgICBsZXQgbGluayA9IGdldExpbmsoKTtcbiAgICBsZXQgcGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFpbi1mb2xkZXJzJyk7XG4gICAgcGF0aC5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgcGF0aC5zY3JvbGxMZWZ0ID0gcGF0aC5zY3JvbGxXaWR0aDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldExpbmtOb2RlcyA9IChuYW1lKSA9PiB7XG4gICAgbGV0IG5vZGVXcmFwcGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2xpbmstd3JhcHBlcicpO1xuICAgIGxldCBub2RlTGluayA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYC8ke25hbWV9YCwgJ2xpbmsnKTtcbiAgICBub2RlV3JhcHBlci5hcHBlbmRDaGlsZChub2RlTGluayk7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlTGlua0luUGF0aCA9ICgpID0+IHtcbiAgICBsZXQgcGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFpbi1mb2xkZXJzJyk7XG4gICAgcGF0aC5yZW1vdmVDaGlsZChwYXRoLmxhc3RDaGlsZCk7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJOb2RlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gZm9sZGVyTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBmb2xkZXJOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZm9sZGVyJywgaWQpO1xuICAgIGNvbnN0IG5hbWUgPSBUb29scy5nZXROb2RlV2l0aFNwYW4oJ2RpdicsIGBuYW1lOiAke2lkfWAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0V3JhcHBlckljb24oaWQpLCBuYW1lKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiXG5cbmV4cG9ydCBjb25zdCBnZXRQYXRoc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNvbnRhaW5lcicpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9