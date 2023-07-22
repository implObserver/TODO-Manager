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
    --font-size-to-folder: 0;
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

.chain-folders {
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    font-size: min(2vh, var(--font-size-to-folder));
    height: min-content;
    overflow-x: scroll;

}

.paths-container::-webkit-scrollbar,
.name::-webkit-scrollbar,
.folders::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
}

::-webkit-scrollbar {
    height: min(1vh, 10vw);

}

::-webkit-scrollbar-thumb {
    background-color: #37f037;

}

::-webkit-scrollbar-track {
    background-color: #b2bad4;
}

.content {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-areas: 'paths folders';
    max-width: inherit;
    max-height: inherit;
}

.paths-container {
    grid-area: paths;
    display: grid;
    grid-template-rows: repeat(auto-fit, min-content);
    justify-content: start;
    align-content: start;
    max-width: 30vw;
    width: min-content;
    height: 93vh;
    max-height: inherit;
    overflow: scroll;
    background-color: #e9f5e9;
}

.paths-cluster {
    display: grid;
    width: min-content;
}

.paths-cluster>span {
    display: grid;
    gap: 0.4vh;
    grid-template-columns: min-content min-content;
    border-radius: 0.4vh;
    width: min-content;
}

.open {
    display: grid !important;
}

.link-wrapper {
    display: flex;
    padding: 0.3vh;
    flex-direction: column;
    border-top: 0.2vh #36bb36 solid;
    border-left: 0.2vh #36bb36 solid;
    cursor: pointer;
    width: min-content;
}

.close-cluster {
    display: flex;
    width: 2vh;
    height: min-content;
    z-index: 100;
}

.close-cluster :hover {
    background-color: #37f037;
}

/*.paths {
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

@keyframes open {
    from {
        opacity: 0;
        width: 0vh;
    }

    to {
        opacity: 1;
        width: 50vh;
    }
}*/

.folders {
    display: grid;
    grid-area: folders;
    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));
    grid-template-rows: min-content;
    justify-items: center;
    align-content: start;
    align-items: center;
    max-width: inherit;
    overflow: scroll;
    height: 93vh;
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

.icon-wrapper {
    grid-area: center;
    display: grid;
    justify-content: center;
    max-width: inherit;
    max-height: inherit;
}

.icon-wrapper>svg {
    display: flex;
    width: 20vh;
    max-width: inherit;
    max-height: inherit;
    min-width: 50px;
}

.name {
    grid-area: center;
    display: flex;
    justify-content: start;
    align-items: center;
    align-content: center;
    text-align: start;
    height: min-content;
    max-width: 60%;
    max-height: inherit;
    overflow: scroll;

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
    width: min-content;
}

.wrapper>.arrow-down {
    display: none;
}

.wrapper>.arrow-up {
    display: none;
}

.wrapper>.arrow-right {
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

@media screen and (min-aspect-ratio: 1/1) {}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: min(2vh, var(--font-size-to-folder));\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-areas: 'paths folders';\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    grid-area: paths;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, min-content);\n    justify-content: start;\n    align-content: start;\n    max-width: 30vw;\n    width: min-content;\n    height: 93vh;\n    max-height: inherit;\n    overflow: scroll;\n    background-color: #e9f5e9;\n}\n\n.paths-cluster {\n    display: grid;\n    width: min-content;\n}\n\n.paths-cluster>span {\n    display: grid;\n    gap: 0.4vh;\n    grid-template-columns: min-content min-content;\n    border-radius: 0.4vh;\n    width: min-content;\n}\n\n.open {\n    display: grid !important;\n}\n\n.link-wrapper {\n    display: flex;\n    padding: 0.3vh;\n    flex-direction: column;\n    border-top: 0.2vh #36bb36 solid;\n    border-left: 0.2vh #36bb36 solid;\n    cursor: pointer;\n    width: min-content;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: min-content;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n/*.paths {\n    display: flex;\n    width: 2vh;\n    height: 4vh;\n    border: 0.2vh #36bb36 solid;\n    background-color: #d83d71;\n    opacity: 0.5;\n    font-size: 2vh;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.4vh;\n    cursor: pointer;\n}\n\n.paths:hover {\n    opacity: 1;\n}\n\n@keyframes open {\n    from {\n        opacity: 0;\n        width: 0vh;\n    }\n\n    to {\n        opacity: 1;\n        width: 50vh;\n    }\n}*/\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.folder,\n.templateFolder,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) {}"],"sourceRoot":""}]);
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
/* harmony export */   RootFolder: () => (/* binding */ RootFolder),
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   openFolder: () => (/* binding */ openFolder),
/* harmony export */   setFontSizeToFolders: () => (/* binding */ setFontSizeToFolders),
/* harmony export */   setResizeObservers: () => (/* binding */ setResizeObservers),
/* harmony export */   viewPathsTree: () => (/* binding */ viewPathsTree)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");
/* harmony import */ var _linksOfPath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");








const createButtons = () => {
    createButtonToAddFolder();
    createButtonToCloseFolder();
}

const createButtonToAddFolder = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder.getNode(), 'add');
}

const createButtonToCloseFolder = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder.getNode(), 'close');
}

const RootFolder = (() => {
    let rootFolder = (0,_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.Folder)(0);
    const getRootFolder = () => {
        return rootFolder;
    }
    return { getRootFolder };
})();

const startConfig = (() => {
    let rootFolder = RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink((0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.ClusterLink)(rootFolder));
    createButtons();
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder);
})();

const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
    viewFolders(folder.getInnerFolders());
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(folder);
    openClusterWhenAddingFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(folders);
}

const createFolder = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder(folder);
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewFolder)(newFolder.getNode());
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forFolder(newFolder);
    viewPathsTree(newFolder);
}


const viewFolders = (folders) => {
    for (let folder of folders) {
        const node = folder.getNode();
        (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewFolder)(node);
    }
}

const setResizeObservers = () => {
    const template = document.querySelector('.templateFolder');
    const ro = new ResizeObserver(e => {
        setFontSizeToFolders(template);
    })

    ro.observe(document.querySelector('.templateFolder'));
}

const setFontSizeToFolders = (template) => {
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.relativeFont(template, '--font-size-to-folder');
}

const viewPathsTree = (newFolder) => {
    let container = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder().getCluster();
    container.style.paddingLeft += '1vh';
    const link = (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.ClusterLink)(newFolder);
    link.getNode().appendChild(link.getCluster());
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_5__.setListenerfForLink)(link);
    newFolder.setLink(link);
    container.appendChild(link.getNode())
    openClusterWhenAddingFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
}

const openClusterWhenAddingFolder = (folder) => {
    let cluster = folder.getCluster();
    let button = folder.getLink().getNode().querySelector('.close-cluster');
    if (folder.getId() !== 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
        openClusterWhenAddingFolder(folder.getParent());
    } else if (folder.getId() === 0) {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
    }
}

const handler = (folders) => {
    for (let folder of folders) {
        let iFolders = folder.getInnerFolders();
        if (iFolders.length > 0) {
            console.log(folder.getId());
            handler(iFolders);
        } else {
            console.log(folder.getId());
        }
    }
}

/***/ }),

/***/ "./src/controllers/linksOfPath.js":
/*!****************************************!*\
  !*** ./src/controllers/linksOfPath.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCluster: () => (/* binding */ closeCluster),
/* harmony export */   openCluster: () => (/* binding */ openCluster),
/* harmony export */   setListenerfForLink: () => (/* binding */ setListenerfForLink)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");




const closeCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(close);
    close.appendChild((0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__.getNodeArrowRight)());
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

const openCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(close);
    close.appendChild((0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__.getNodeArrowDown)());
    cluster.style.display = 'grid';
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

const setListenerfForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forLinkOfMapPaths(link);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forButtonToClusterPaths(clusterClose, link);
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
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _linksOfPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linksOfPath */ "./src/controllers/linksOfPath.js");






const setListeners = () => {
    const forFolder = (currentFolder) => {
        let node = currentFolder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.openFolder)(currentFolder);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.createFolder)();
            //window.scrollTo(0, document.body.scrollHeight);
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.openFolder)(openedFolder.getParent());
        });
    }

    const forLinkOfMapPaths = (link) => {
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.openFolder)(link.getFolder());
        });
        const mouseOverNode = node.addEventListener('mouseover', e => {
            e.stopPropagation();
            node.style.backgroundColor = '#9cfd9c';
        });
        const mouseOutNode = node.addEventListener('mouseout', e => {
            e.stopPropagation();
            node.style.backgroundColor = '#e9f5e9';
        });
    }

    const forButtonToClusterPaths = (node, link) => {
        let flag;
        const clickNode = node.addEventListener('click', e => {
            flag = document.defaultView.getComputedStyle(link.getCluster()).display;
            if (flag === 'none') {
                (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_4__.openCluster)(link);
            } else {
                (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_4__.closeCluster)(link);
            }
        });
        return { close };
    }

    const forFolders = (() => {

    })();

    return { forButtonToClusterPaths, forLinkOfMapPaths, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
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

    var getSiblings = function (elem) {

        // Setup siblings array and get the first sibling
        var siblings = [];
        var sibling = elem.parentNode.firstChild;

        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }

        return siblings;

    };

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '0.4' + ')';
    }

    return { random_rgba, getSiblings, relativeFont, removeChildsAfter, displayMode, smoothVisibilityGroup, smoothVisibility, rgba2hex, getNodeWithSpan, setAttributes, createNode, appendChilds, setUpSpan, removeChilds, addClasses };
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");





const start = () => {
    const rootFolder = _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder();
    (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_1__.setListenerfForLink)(rootFolder.getLink());
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.setResizeObservers)();
    (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__.viewRootPathsThree)();
}

start();

for (let i = 0; i < 0; i++) {
    //createFolder();
}

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
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");





const Folder = (ids, folder = 0) => {
    let id = ids;
    let count = 0;
    let name;
    let parent = folder;
    const innerFolders = []
    const node = (0,_views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__.getFolderNode)(id);
    let link;
    let cluster = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__.createCluster)();

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

    const setLink = (node) => {
        link = node;
    }

    const getLink = () => {
        return link;
    }

    const getCluster = () => {
        return cluster;
    }

    return { getCluster, getLink, setLink, setParent, getParent, addFolder, del, getNode, getInnerFolders, getId, setName, getName };
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
/* harmony export */   ClusterLink: () => (/* binding */ ClusterLink),
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");



const Link = (iFolder) => {
    let folder = iFolder;
    let name = folder.getId();
    let node = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__.getLinkNodes)(name);

    const getFolder = () => {
        return folder;
    }

    const getName = () => {
        return name;
    }

    const getNode = () => {
        return node;
    }

    return { getNode, getName, getFolder };
}

const ClusterLink = (iFolder) => {
    let prototype = Link(iFolder);
    let cluster = iFolder.getCluster();

    const getCluster = () => {
        return cluster;
    }

    return Object.assign({}, prototype, { getCluster });
}

const Path = (folder) => {
    const name = folder.getId();
    const path = [];
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

/***/ "./src/views/nodes/folders.js":
/*!************************************!*\
  !*** ./src/views/nodes/folders.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewFolder: () => (/* binding */ viewFolder)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const wrapper = document.querySelector('.wrapper');

const viewFolder = (node, flag = 'folder') => {
    let content = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');
    if (flag === 'close') {
        content.appendChild(node);
    } else if (true) {
        content.insertBefore(node, content.lastChild);
    } else {}
}

/***/ }),

/***/ "./src/views/nodes/pathsContainers.js":
/*!********************************************!*\
  !*** ./src/views/nodes/pathsContainers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCluster: () => (/* binding */ createCluster),
/* harmony export */   getLinkNodes: () => (/* binding */ getLinkNodes),
/* harmony export */   getNodeArrowDown: () => (/* binding */ getNodeArrowDown),
/* harmony export */   getNodeArrowRight: () => (/* binding */ getNodeArrowRight),
/* harmony export */   linkCfg: () => (/* binding */ linkCfg),
/* harmony export */   openPathsSideBar: () => (/* binding */ openPathsSideBar),
/* harmony export */   viewRootPathsThree: () => (/* binding */ viewRootPathsThree)
/* harmony export */ });
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");




const viewRootPathsThree = () => {
    let link = _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().getLink();
    //link.getNode().style.backgroundColor = '#e9f5e9';
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
}

const openPathsSideBar = () => {
    const container = document.querySelector('.path-container');
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.addClasses(container, 'open');
    return container;
}

const getLinkNodes = (name) => {
    const nodeWrapper = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'link-wrapper');
    const closeCluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'close-cluster');
    const arrowDown = document.querySelector('.arrow-down').cloneNode(true);
    closeCluster.appendChild(arrowDown);
    const nodeLink = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.getNodeWithSpan('div', `/${name}`, 'link');
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.appendChilds(nodeWrapper, closeCluster, nodeLink);
    return nodeWrapper;
}

const getNodeArrowDown = () => {
    return document.querySelector('.arrow-down').cloneNode(true);
}

const getNodeArrowRight = () => {
    return document.querySelector('.arrow-right').cloneNode(true);
}

/*export const getPathsCluster = (folders, pLink) => {
    const cluster = Tools.createNode('div', 'paths-cluster');
    pLink.setCluster(cluster);
    cluster.style.paddingLeft += `${1}vh`;
    for (let folder of folders) {

        const link = ClusterLink(folder);
        linkCfg(link, folder);
        folder.setLink(link);

        const iFolders = folder.getInnerFolders();
        cluster.appendChild(link.getNode());
        if (iFolders.length > 0) {
            cluster.appendChild(getPathsCluster(iFolders, link));
        }
    }
    return cluster;
}*/

const linkCfg = (link, folder) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_1__.setListenerfForLink)(link);
}

const createCluster = () => {
    const cluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'paths-cluster');
    return cluster;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsT0FBTywyRkFBMkYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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YnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3M/MjJhYiIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xpbmtzT2ZQYXRoLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2hlbHBlci90b29scy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9mb2xkZXJNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9saW5rT2ZQYXRoLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZEZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQ2xvc2VGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvZm9sZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZDRiMjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5jaGFpbi1mb2xkZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcikpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG59XG5cbi5wYXRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLm5hbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xuXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1hcmVhOiBwYXRocztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBtYXgtd2lkdGg6IDMwdnc7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbn1cblxuLnBhdGhzLWNsdXN0ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4ucGF0aHMtY2x1c3Rlcj5zcGFuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC40dmg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjR2aDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5vcGVuIHtcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMC4zdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItdG9wOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0OiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5jbG9zZS1jbHVzdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAydmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcbn1cblxuLyoucGF0aHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJ2aDtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBib3JkZXI6IDAuMnZoICMzNmJiMzYgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4M2Q3MTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjR2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoczpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBvcGVuIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDB2aDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiA1MHZoO1xuICAgIH1cbn0qL1xuXG4uZm9sZGVycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDkzdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpO1xufVxuXG4uZm9sZGVyLFxuLnRlbXBsYXRlRm9sZGVyLFxuLmJhY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcHBlciB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmljb24td3JhcHBlcj5zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG59XG5cbi50ZW1wbGF0ZUZvbGRlcj4ubmFtZSxcbi5jaGFpbi1mb2xkZXJzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBzdGFuZGFyZCBzeW50YXggKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoa29ucXVlcm9yKSBicm93c2VycyAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBJRTEwKyAqL1xufVxuXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLndyYXBwZXI+LmFycm93LWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53cmFwcGVyPi5hcnJvdy11cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIGZyb20ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzoxLzEuMDAwMDAwMSkge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge31gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JB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Q0o7O0FBRUEsa0RBQWtEOztBQUVsRCwyQ0FBMkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXZoO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcikpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxufVxcblxcbi5wYXRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi5uYW1lOjotd2Via2l0LXNjcm9sbGJhcixcXG4uZm9sZGVyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IG1pbigxdmgsIDEwdncpO1xcblxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBwYXRocztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDkzdmg7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XFxufVxcblxcbi5wYXRocy1jbHVzdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ucGF0aHMtY2x1c3Rlcj5zcGFuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjR2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLm9wZW4ge1xcbiAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjN2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXRvcDogMC4ydmggIzM2YmIzNiBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMnZoICMzNmJiMzYgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uY2xvc2UtY2x1c3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAydmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG59XFxuXFxuLyoucGF0aHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYm9yZGVyOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgzZDcxO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhdGhzOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgd2lkdGg6IDB2aDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDUwdmg7XFxuICAgIH1cXG59Ki9cXG5cXG4uZm9sZGVycyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZm9sZGVycztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpO1xcbn1cXG5cXG4uZm9sZGVyLFxcbi50ZW1wbGF0ZUZvbGRlcixcXG4uYmFjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2VudGVyJztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24td3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uaWNvbi13cmFwcGVyPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMHZoO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLm5hbWUge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxufVxcblxcbi50ZW1wbGF0ZUZvbGRlcj4ubmFtZSxcXG4uY2hhaW4tZm9sZGVycyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBzdGFuZGFyZCBzeW50YXggKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogd2Via2l0IChzYWZhcmksIGNocm9tZSkgYnJvd3NlcnMgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogbW96aWxsYSBicm93c2VycyAqL1xcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoa29ucXVlcm9yKSBicm93c2VycyAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIElFMTArICovXFxufVxcblxcbi53cmFwcGVyPi5mb2xkZXJTdmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy1kb3duIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndyYXBwZXI+LmFycm93LXVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLndyYXBwZXI+LmFycm93LXJpZ2h0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRlbXBsYXRlRm9sZGVyOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkRm9sZGVyLCBCdXR0b25Gb3JDbG9zZUZvbGRlciwgRm9sZGVyLCBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgQ2x1c3RlckxpbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2xpbmtPZlBhdGhcIjtcbmltcG9ydCB7IHZpZXdGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgbGlua0NmZyB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyZkZvckxpbmsgfSBmcm9tIFwiLi9saW5rc09mUGF0aFwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY3JlYXRlQnV0dG9uVG9BZGRGb2xkZXIoKTtcbiAgICBjcmVhdGVCdXR0b25Ub0Nsb3NlRm9sZGVyKCk7XG59XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIHZpZXdGb2xkZXIoQnV0dG9uRm9yQWRkRm9sZGVyLmdldE5vZGUoKSwgJ2FkZCcpO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIHZpZXdGb2xkZXIoQnV0dG9uRm9yQ2xvc2VGb2xkZXIuZ2V0Tm9kZSgpLCAnY2xvc2UnKTtcbn1cblxuZXhwb3J0IGNvbnN0IFJvb3RGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCByb290Rm9sZGVyID0gRm9sZGVyKDApO1xuICAgIGNvbnN0IGdldFJvb3RGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByb290Rm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXRSb290Rm9sZGVyIH07XG59KSgpO1xuXG5jb25zdCBzdGFydENvbmZpZyA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICByb290Rm9sZGVyLnNldFBhcmVudChyb290Rm9sZGVyKTtcbiAgICByb290Rm9sZGVyLnNldExpbmsoQ2x1c3Rlckxpbmsocm9vdEZvbGRlcikpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKHJvb3RGb2xkZXIpO1xufSkoKTtcblxuY29uc3Qgc2V0QnV0dG9uc0xpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRGb2xkZXIoQnV0dG9uRm9yQWRkRm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0Nsb3NlRm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyKTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBvcGVuRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGNsZWFyRm9sZGVyc0NvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICB2aWV3Rm9sZGVycyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIoZm9sZGVyKTtcbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbn1cblxuY29uc3QgY2xlYXJGb2xkZXJzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGxldCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoZm9sZGVycyk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXIgPSAoZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKSA9PiB7XG4gICAgbGV0IG5ld0ZvbGRlciA9IGZvbGRlci5hZGRGb2xkZXIoZm9sZGVyKTtcbiAgICB2aWV3Rm9sZGVyKG5ld0ZvbGRlci5nZXROb2RlKCkpO1xuICAgIHNldExpc3RlbmVycygpLmZvckZvbGRlcihuZXdGb2xkZXIpO1xuICAgIHZpZXdQYXRoc1RyZWUobmV3Rm9sZGVyKTtcbn1cblxuXG5jb25zdCB2aWV3Rm9sZGVycyA9IChmb2xkZXJzKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGZvbGRlci5nZXROb2RlKCk7XG4gICAgICAgIHZpZXdGb2xkZXIobm9kZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0UmVzaXplT2JzZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZSA9PiB7XG4gICAgICAgIHNldEZvbnRTaXplVG9Gb2xkZXJzKHRlbXBsYXRlKTtcbiAgICB9KVxuXG4gICAgcm8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXInKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZVRvRm9sZGVycyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIFRvb2xzLnJlbGF0aXZlRm9udCh0ZW1wbGF0ZSwgJy0tZm9udC1zaXplLXRvLWZvbGRlcicpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld1BhdGhzVHJlZSA9IChuZXdGb2xkZXIpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldENsdXN0ZXIoKTtcbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ0xlZnQgKz0gJzF2aCc7XG4gICAgY29uc3QgbGluayA9IENsdXN0ZXJMaW5rKG5ld0ZvbGRlcik7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsobGluayk7XG4gICAgbmV3Rm9sZGVyLnNldExpbmsobGluayk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKVxuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5jb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IChmb2xkZXJzKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgbGV0IGlGb2xkZXJzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgICAgICBpZiAoaUZvbGRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLmdldElkKCkpO1xuICAgICAgICAgICAgaGFuZGxlcihpRm9sZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3QgY2xvc2VDbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBjbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGNsb3NlKTtcbiAgICBjbG9zZS5hcHBlbmRDaGlsZChnZXROb2RlQXJyb3dSaWdodCgpKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkuY2xvc2UoY2x1c3RlciwgMSwgMCwgMjAwLCAnZm9yd2FyZHMnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2x1c3Rlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDIwMCk7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuQ2x1c3RlciA9IChsaW5rKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBsaW5rLmdldENsdXN0ZXIoKTtcbiAgICBsZXQgY2xvc2UgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIFRvb2xzLnJlbW92ZUNoaWxkcyhjbG9zZSk7XG4gICAgY2xvc2UuYXBwZW5kQ2hpbGQoZ2V0Tm9kZUFycm93RG93bigpKTtcbiAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4oY2x1c3RlciwgMCwgMSwgMjAwLCAnZm9yd2FyZHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyZkZvckxpbmsgPSAobGluaykgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yTGlua09mTWFwUGF0aHMobGluayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMoY2x1c3RlckNsb3NlLCBsaW5rKTtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyB0aHJlZVBhdGhzQ2xvc2VUb2dnbGUgfSBmcm9tIFwiLi4vbW9kZWxzL2xpbmtPZlBhdGhcIjtcbmltcG9ydCB7IGNyZWF0ZUZvbGRlciwgb3BlbkZvbGRlciB9IGZyb20gXCIuL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgYWRkTGlua1RvUGF0aCwgY2xvc2VDbHVzdGVyLCBvcGVuQ2x1c3RlciwgcmVtb3ZlTGlua0luUGF0aCB9IGZyb20gXCIuL2xpbmtzT2ZQYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9yRm9sZGVyID0gKGN1cnJlbnRGb2xkZXIpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBjdXJyZW50Rm9sZGVyLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tGb2xkZXIgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGN1cnJlbnRGb2xkZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0FkZEZvbGRlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUZvbGRlcigpO1xuICAgICAgICAgICAgLy93aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IG9wZW5lZEZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIob3BlbmVkRm9sZGVyLmdldFBhcmVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTGlua09mTWFwUGF0aHMgPSAobGluaykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJyk7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGxpbmsuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbW91c2VPdmVyTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljZmQ5Yyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU91dE5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2U5ZjVlOSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzID0gKG5vZGUsIGxpbmspID0+IHtcbiAgICAgICAgbGV0IGZsYWc7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGZsYWcgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGxpbmsuZ2V0Q2x1c3RlcigpKS5kaXNwbGF5O1xuICAgICAgICAgICAgaWYgKGZsYWcgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZW5DbHVzdGVyKGxpbmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZUNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBjbG9zZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGZvckZvbGRlcnMgPSAoKCkgPT4ge1xuXG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7IGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzLCBmb3JMaW5rT2ZNYXBQYXRocywgZm9yRm9sZGVyLCBmb3JCdXR0b25Ub0FkZEZvbGRlciwgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciB9XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcblxuY29uc3QgVG9vbHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5vZGVXaXRoU3BhbiA9IChub2RlTmFtZSwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZU5vZGUobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gc2V0VXBTcGFuKG5vZGUsIHRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5vZGUgPSAobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgYWRkQ2xhc3Nlcyhub2RlLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcFNwYW4gPSAobm9kZSwgdGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3BhbiA9IGNyZWF0ZU5vZGUoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZENoaWxkcyA9IChub2RlLCAuLi5jaGlsZHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgICAgICBmb3IgKGxldCBhdHIgb2YgYXRycykge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkc0FmdGVyID0gKG5vZGUsIGNoaWxkKSA9PiB7XG4gICAgICAgIHdoaWxlIChub2RlLmxhc3RDaGlsZCAhPSBjaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IChtb2RlLCAuLi5ub2RlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBtb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAgPSAoLi4ubm9kZXMpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5jbG9zZShub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJnYmEyaGV4ID0gKHJnYmEpID0+IGAjJHtyZ2JhLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkK1xcLnswLDF9XFxkKikpP1xcKSQvKS5zbGljZSgxKS5tYXAoKG4sIGkpID0+IChpID09PSAzID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG4pICogMjU1KSA6IHBhcnNlRmxvYXQobikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpLnJlcGxhY2UoJ05hTicsICcnKSkuam9pbignJyl9YFxuXG4gICAgY29uc3QgcmVsYXRpdmVGb250ID0gKG5vZGVPZlJlbGF0aXZpdHksIGNzc1ZhcikgPT4ge1xuICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgIGxldCBmb2xkZXJIZWlnaHQgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGVPZlJlbGF0aXZpdHkpLndpZHRoO1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlRmxvYXQoZm9sZGVySGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKSAvIDY7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHtzaXplfXB4YCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuICAgICAgICB2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2libGluZ3M7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tX3JnYmEoKSB7XG4gICAgICAgIHZhciBvID0gTWF0aC5yb3VuZCwgciA9IE1hdGgucmFuZG9tLCBzID0gMjU1O1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArICcwLjQnICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJhbmRvbV9yZ2JhLCBnZXRTaWJsaW5ncywgcmVsYXRpdmVGb250LCByZW1vdmVDaGlsZHNBZnRlciwgZGlzcGxheU1vZGUsIHNtb290aFZpc2liaWxpdHlHcm91cCwgc21vb3RoVmlzaWJpbGl0eSwgcmdiYTJoZXgsIGdldE5vZGVXaXRoU3Bhbiwgc2V0QXR0cmlidXRlcywgY3JlYXRlTm9kZSwgYXBwZW5kQ2hpbGRzLCBzZXRVcFNwYW4sIHJlbW92ZUNoaWxkcywgYWRkQ2xhc3NlcyB9O1xufSkoKTtcblxuZXhwb3J0IHsgVG9vbHMgfSIsImltcG9ydCB7IFJvb3RGb2xkZXIsIFJvb3RMaW5rLCBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIsIHNldFJlc2l6ZU9ic2VydmVycywgdmlld1BhdGhzVHJlZSB9IGZyb20gJy4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzJ1xuaW1wb3J0IHsgYWRkTGlua1RvUGF0aCwgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlua3NPZlBhdGgnO1xuaW1wb3J0ICcuL3ZpZXdzL2Nzcy9tYWluLmNzcydcbmltcG9ydCB7IHZpZXdSb290UGF0aHNUaHJlZSB9IGZyb20gJy4vdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzJztcblxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdEZvbGRlciA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsocm9vdEZvbGRlci5nZXRMaW5rKCkpO1xuICAgIHNldFJlc2l6ZU9ic2VydmVycygpO1xuICAgIHZpZXdSb290UGF0aHNUaHJlZSgpO1xufVxuXG5zdGFydCgpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDA7IGkrKykge1xuICAgIC8vY3JlYXRlRm9sZGVyKCk7XG59IiwiaW1wb3J0IHsgZ2V0Rm9sZGVyTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDbHVzdGVyLCBnZXRQYXRoc0NsdXN0ZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBGb2xkZXIgPSAoaWRzLCBmb2xkZXIgPSAwKSA9PiB7XG4gICAgbGV0IGlkID0gaWRzO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IHBhcmVudCA9IGZvbGRlcjtcbiAgICBjb25zdCBpbm5lckZvbGRlcnMgPSBbXVxuICAgIGNvbnN0IG5vZGUgPSBnZXRGb2xkZXJOb2RlKGlkKTtcbiAgICBsZXQgbGluaztcbiAgICBsZXQgY2x1c3RlciA9IGNyZWF0ZUNsdXN0ZXIoKTtcblxuICAgIGNvbnN0IGFkZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgJHtpZH1fJHtjb3VudH1gO1xuICAgICAgICArK2NvdW50O1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKG5ld0lkLCBmb2xkZXIpO1xuICAgICAgICBpbm5lckZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICByZXR1cm4gbmV3Rm9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lckZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5hbWUgPSAodmFsKSA9PiB7XG4gICAgICAgIG5hbWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGluayA9IChub2RlKSA9PiB7XG4gICAgICAgIGxpbmsgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldENsdXN0ZXIsIGdldExpbmssIHNldExpbmssIHNldFBhcmVudCwgZ2V0UGFyZW50LCBhZGRGb2xkZXIsIGRlbCwgZ2V0Tm9kZSwgZ2V0SW5uZXJGb2xkZXJzLCBnZXRJZCwgc2V0TmFtZSwgZ2V0TmFtZSB9O1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkRm9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQWRkRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JDbG9zZUZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXI7XG4gICAgY29uc3Qgc2V0T3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBvcGVuZWRGb2xkZXIgPSBmb2xkZXI7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZEZvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkRm9sZGVyLCBnZXRPcGVuZWRGb2xkZXIgfVxufSkoKTsiLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IGdldExpbmtOb2RlcyB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSAoaUZvbGRlcikgPT4ge1xuICAgIGxldCBmb2xkZXIgPSBpRm9sZGVyO1xuICAgIGxldCBuYW1lID0gZm9sZGVyLmdldElkKCk7XG4gICAgbGV0IG5vZGUgPSBnZXRMaW5rTm9kZXMobmFtZSk7XG5cbiAgICBjb25zdCBnZXRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSwgZ2V0TmFtZSwgZ2V0Rm9sZGVyIH07XG59XG5cbmV4cG9ydCBjb25zdCBDbHVzdGVyTGluayA9IChpRm9sZGVyKSA9PiB7XG4gICAgbGV0IHByb3RvdHlwZSA9IExpbmsoaUZvbGRlcik7XG4gICAgbGV0IGNsdXN0ZXIgPSBpRm9sZGVyLmdldENsdXN0ZXIoKTtcblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Q2x1c3RlciB9KTtcbn1cblxuY29uc3QgUGF0aCA9IChmb2xkZXIpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZm9sZGVyLmdldElkKCk7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xufSIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXJTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVGb2xkZXInKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQ2xvc2VGb2xkZXJBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2JhY2snKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRXcmFwcGVySWNvbigpKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRXcmFwcGVySWNvbiA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGVyTm9kZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlck5vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgZm9sZGVyTm9kZUFzc2VtYmx5ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ZvbGRlcicsIGlkKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgbmFtZTogJHtpZH1gLCAnbmFtZScpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhmb2xkZXIsIGdldFdyYXBwZXJJY29uKGlkKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmV4cG9ydCBjb25zdCB2aWV3Rm9sZGVyID0gKG5vZGUsIGZsYWcgPSAnZm9sZGVyJykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIGlmIChmbGFnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmICgndGFzaycpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2ZvbGRlcicpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2FkZCcpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUm9vdEZvbGRlciB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyZkZvckxpbmsgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvbGlua3NPZlBhdGhcIjtcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiXG5cbmV4cG9ydCBjb25zdCB2aWV3Um9vdFBhdGhzVGhyZWUgPSAoKSA9PiB7XG4gICAgbGV0IGxpbmsgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKS5nZXRMaW5rKCk7XG4gICAgLy9saW5rLmdldE5vZGUoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2U5ZjVlOSc7XG4gICAgbGluay5nZXROb2RlKCkuc3R5bGUuYm9yZGVyID0gJzAuM3ZoICMzNmJiMzYgc29saWQnO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Q2x1c3RlcigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQobGluay5nZXROb2RlKCkpO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhdGhzU2lkZUJhciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aC1jb250YWluZXInKTtcbiAgICBUb29scy5hZGRDbGFzc2VzKGNvbnRhaW5lciwgJ29wZW4nKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TGlua05vZGVzID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBub2RlV3JhcHBlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLXdyYXBwZXInKTtcbiAgICBjb25zdCBjbG9zZUNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnY2xvc2UtY2x1c3RlcicpO1xuICAgIGNvbnN0IGFycm93RG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1kb3duJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb3NlQ2x1c3Rlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xuICAgIGNvbnN0IG5vZGVMaW5rID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgLyR7bmFtZX1gLCAnbGluaycpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhub2RlV3JhcHBlciwgY2xvc2VDbHVzdGVyLCBub2RlTGluayk7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm9kZUFycm93RG93biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWRvd24nKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dSaWdodCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXJpZ2h0JykuY2xvbmVOb2RlKHRydWUpO1xufVxuXG4vKmV4cG9ydCBjb25zdCBnZXRQYXRoc0NsdXN0ZXIgPSAoZm9sZGVycywgcExpbmspID0+IHtcbiAgICBjb25zdCBjbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNsdXN0ZXInKTtcbiAgICBwTGluay5zZXRDbHVzdGVyKGNsdXN0ZXIpO1xuICAgIGNsdXN0ZXIuc3R5bGUucGFkZGluZ0xlZnQgKz0gYCR7MX12aGA7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcblxuICAgICAgICBjb25zdCBsaW5rID0gQ2x1c3RlckxpbmsoZm9sZGVyKTtcbiAgICAgICAgbGlua0NmZyhsaW5rLCBmb2xkZXIpO1xuICAgICAgICBmb2xkZXIuc2V0TGluayhsaW5rKTtcblxuICAgICAgICBjb25zdCBpRm9sZGVycyA9IGZvbGRlci5nZXRJbm5lckZvbGRlcnMoKTtcbiAgICAgICAgY2x1c3Rlci5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgICAgIGlmIChpRm9sZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbHVzdGVyLmFwcGVuZENoaWxkKGdldFBhdGhzQ2x1c3RlcihpRm9sZGVycywgbGluaykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbHVzdGVyO1xufSovXG5cbmV4cG9ydCBjb25zdCBsaW5rQ2ZnID0gKGxpbmssIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJmRm9yTGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsdXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdwYXRocy1jbHVzdGVyJyk7XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9