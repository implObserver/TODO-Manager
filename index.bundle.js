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
    display: none;
}

.link-wrapper {
    display: grid;
    padding-right: 0.3vh;
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

.link>span {
    border-bottom: 0.2vh #36bb36 solid;
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

@media screen and (max-aspect-ratio:1/1.0000001) {
    
}

@media screen and (min-aspect-ratio: 1/1) and (min-width: 536px) {

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
}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: min(2vh, var(--font-size-to-folder));\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-areas: 'paths folders';\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    padding-right: 0.3vh;\n    border-left: 0.2vh #36bb36 solid;\n    cursor: pointer;\n    width: min-content;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: min-content;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n.link>span {\n    border-bottom: 0.2vh #36bb36 solid;\n}\n/*.paths {\n    display: flex;\n    width: 2vh;\n    height: 4vh;\n    border: 0.2vh #36bb36 solid;\n    background-color: #d83d71;\n    opacity: 0.5;\n    font-size: 2vh;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.4vh;\n    cursor: pointer;\n}\n\n.paths:hover {\n    opacity: 1;\n}\n\n@keyframes open {\n    from {\n        opacity: 0;\n        width: 0vh;\n    }\n\n    to {\n        opacity: 1;\n        width: 50vh;\n    }\n}*/\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.folder,\n.templateFolder,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {\n    \n}\n\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 536px) {\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: grid;\n        width: min-content;\n    }\n\n    .paths-cluster>span {\n        display: grid;\n        gap: 0.4vh;\n        grid-template-columns: min-content min-content;\n        border-radius: 0.4vh;\n        width: min-content;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   setFontSizeToFolders: () => (/* binding */ setFontSizeToFolders),
/* harmony export */   setResizeObservers: () => (/* binding */ setResizeObservers),
/* harmony export */   viewPathsTree: () => (/* binding */ viewPathsTree)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _linksOfPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");







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

const startConfig = (() => {
    let rootFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink((0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.ClusterLink)(rootFolder));
    createButtons();
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(rootFolder);
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_4__.openCluster)(rootFolder.getLink());
})();

const setButtonsListeners = (() => {
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder);
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
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forFolder(newFolder);
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
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_4__.setListenerfForLink)(link);
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
    switchCloseButtonSvg(link, (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__.getNodeArrowRight)());
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

const openCluster = (link) => {
    let cluster = link.getCluster();
    switchCloseButtonSvg(link, (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_1__.getNodeArrowDown)());
    cluster.style.display = 'grid';
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

const setListenerfForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forLinkOfMapPaths(link);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forButtonToClusterPaths(clusterClose, link);
}

const switchCloseButtonSvg = (link, child) => {
    let close = link.getNode().querySelector('.close-cluster');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(close);
    close.appendChild(child);
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
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _linksOfPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linksOfPath */ "./src/controllers/linksOfPath.js");




const setListeners = () => {
    const forFolder = (currentFolder) => {
        let node = currentFolder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.openFolder)(currentFolder);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.createFolder)();
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.openFolder)(openedFolder.getParent());
        });
    }

    const forLinkOfMapPaths = (link) => {
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.openFolder)(link.getFolder());
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
                (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_2__.openCluster)(link);
            } else {
                (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_2__.closeCluster)(link);
            }
        });
        return { close };
    }

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
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");






const start = () => {
    const rootFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_2__.RootFolder.getRootFolder();
    (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_1__.setListenerfForLink)(rootFolder.getLink());
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.setResizeObservers)();
    (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_4__.viewRootPathsThree)();
}

start();

for (let i = 0; i < 5; i++) {
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.createFolder)();
    let folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_2__.OpenedFolder.getOpenedFolder().getInnerFolders()[0];
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(folder)
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
/* harmony export */   OpenedFolder: () => (/* binding */ OpenedFolder),
/* harmony export */   RootFolder: () => (/* binding */ RootFolder)
/* harmony export */ });
/* harmony import */ var _views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/folder */ "./src/views/nodes/folder.js");
/* harmony import */ var _views_nodes_ButtonForAddFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ButtonForAddFolder */ "./src/views/nodes/ButtonForAddFolder.js");
/* harmony import */ var _views_nodes_ButtonForCloseFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ButtonForCloseFolder */ "./src/views/nodes/ButtonForCloseFolder.js");
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");





const Folder = (ids, folder = 0) => {
    let id = ids;
    let name;
    let link;
    let count = 0;
    let parent = folder;
    let cluster = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__.createCluster)();
    const node = (0,_views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__.getFolderNode)(id);
    const innerFolders = []

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

const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }
    return { getRootFolder };
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
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");


const Link = (iFolder) => {
    let folder = iFolder;
    let name = folder.getId();
    let node = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_0__.getLinkNodes)(name);

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
/* harmony import */ var _controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");




const viewRootPathsThree = () => {
    let link = _models_folderModels__WEBPACK_IMPORTED_MODULE_2__.RootFolder.getRootFolder().getLink();
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
}

const openPathsSideBar = () => {
    const container = document.querySelector('.path-container');
    _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.addClasses(container, 'open');
    return container;
}

const getLinkNodes = (name) => {
    const nodeWrapper = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.createNode('div', 'link-wrapper');
    const closeCluster = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.createNode('div', 'close-cluster');
    const arrowRight = getNodeArrowRight();
    const nodeLink = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.getNodeWithSpan('div', `/${name}`, 'link');
    closeCluster.appendChild(arrowRight);
    _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.appendChilds(nodeWrapper, closeCluster, nodeLink);
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
    (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__.setListenerfForLink)(link);
}

const createCluster = () => {
    const cluster = _helper_tools__WEBPACK_IMPORTED_MODULE_1__.Tools.createNode('div', 'paths-cluster');
    return cluster;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyRkFBMkYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLE9BQU8sS0FB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QSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saW5rc09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZm9sZGVyTW9kZWxzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvbGlua09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL3BhdGhzQ29udGFpbmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDF2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uY2hhaW4tZm9sZGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBmb250LXNpemU6IG1pbigydmgsIHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpKTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxufVxuXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcbi5uYW1lOjotd2Via2l0LXNjcm9sbGJhcixcbi5mb2xkZXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogbWluKDF2aCwgMTB2dyk7XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5wYXRocy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saW5rLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy1yaWdodDogMC4zdmg7XG4gICAgYm9yZGVyLWxlZnQ6IDAuMnZoICMzNmJiMzYgc29saWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmNsb3NlLWNsdXN0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJ2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xufVxuXG4ubGluaz5zcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xufVxuLyoucGF0aHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJ2aDtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBib3JkZXI6IDAuMnZoICMzNmJiMzYgc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4M2Q3MTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC1zaXplOiAydmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjR2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXRoczpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyBvcGVuIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDB2aDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiA1MHZoO1xuICAgIH1cbn0qL1xuXG4uZm9sZGVycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDkzdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpO1xufVxuXG4uZm9sZGVyLFxuLnRlbXBsYXRlRm9sZGVyLFxuLmJhY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcHBlciB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmljb24td3JhcHBlcj5zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG59XG5cbi50ZW1wbGF0ZUZvbGRlcj4ubmFtZSxcbi5jaGFpbi1mb2xkZXJzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBzdGFuZGFyZCBzeW50YXggKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoa29ucXVlcm9yKSBicm93c2VycyAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBJRTEwKyAqL1xufVxuXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLndyYXBwZXI+LmFycm93LWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53cmFwcGVyPi5hcnJvdy11cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIGZyb20ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzoxLzEuMDAwMDAwMSkge1xuICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSBhbmQgKG1pbi13aWR0aDogNTM2cHgpIHtcblxuICAgIC5wYXRocy1jb250YWluZXIge1xuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogOTN2aDtcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICB9XG5cbiAgICAucGF0aHMtY2x1c3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICB9XG5cbiAgICAucGF0aHMtY2x1c3Rlcj5zcGFuIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ2FwOiAwLjR2aDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40dmg7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFB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QWlEO1FBQ2pELHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFVBQVU7UUFDViw4Q0FBOEM7UUFDOUMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBmb250LXNpemU6IG1pbigydmgsIHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjN2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMnZoICMzNmJiMzYgc29saWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uY2xvc2UtY2x1c3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAydmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG59XFxuXFxuLmxpbms+c3BhbiB7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMnZoICMzNmJiMzYgc29saWQ7XFxufVxcbi8qLnBhdGhzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGJvcmRlcjogMC4ydmggIzM2YmIzNiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4M2Q3MTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYXRoczpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHdpZHRoOiAwdmg7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiA1MHZoO1xcbiAgICB9XFxufSovXFxuXFxuLmZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGhlaWdodDogOTN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdG8tZm9sZGVyKTtcXG59XFxuXFxuLmZvbGRlcixcXG4udGVtcGxhdGVGb2xkZXIsXFxuLmJhY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLXdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmljb24td3JhcHBlcj5zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJRTEwKyAqL1xcbn1cXG5cXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSBhbmQgKG1pbi13aWR0aDogNTM2cHgpIHtcXG5cXG4gICAgLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICBoZWlnaHQ6IDkzdmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XFxuICAgIH1cXG5cXG4gICAgLnBhdGhzLWNsdXN0ZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgfVxcblxcbiAgICAucGF0aHMtY2x1c3Rlcj5zcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBnYXA6IDAuNHZoO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHZoO1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBCdXR0b25Gb3JBZGRGb2xkZXIsIEJ1dHRvbkZvckNsb3NlRm9sZGVyLCBGb2xkZXIsIE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBDbHVzdGVyTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgdmlld0ZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyBvcGVuQ2x1c3Rlciwgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gXCIuL2xpbmtzT2ZQYXRoXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuY29uc3QgY3JlYXRlQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlcigpO1xuICAgIGNyZWF0ZUJ1dHRvblRvQ2xvc2VGb2xkZXIoKTtcbn1cblxuY29uc3QgY3JlYXRlQnV0dG9uVG9BZGRGb2xkZXIgPSAoKSA9PiB7XG4gICAgdmlld0ZvbGRlcihCdXR0b25Gb3JBZGRGb2xkZXIuZ2V0Tm9kZSgpLCAnYWRkJyk7XG59XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgdmlld0ZvbGRlcihCdXR0b25Gb3JDbG9zZUZvbGRlci5nZXROb2RlKCksICdjbG9zZScpO1xufVxuXG5jb25zdCBzdGFydENvbmZpZyA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICByb290Rm9sZGVyLnNldFBhcmVudChyb290Rm9sZGVyKTtcbiAgICByb290Rm9sZGVyLnNldExpbmsoQ2x1c3Rlckxpbmsocm9vdEZvbGRlcikpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKHJvb3RGb2xkZXIpO1xuICAgIG9wZW5DbHVzdGVyKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbn0pKCk7XG5cbmNvbnN0IHNldEJ1dHRvbnNMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQWRkRm9sZGVyKEJ1dHRvbkZvckFkZEZvbGRlcik7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbG9zZUZvbGRlcihCdXR0b25Gb3JDbG9zZUZvbGRlcik7XG59KSgpO1xuXG5leHBvcnQgY29uc3Qgb3BlbkZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBjbGVhckZvbGRlcnNDb250YWluZXIoKTtcbiAgICBjcmVhdGVCdXR0b25zKCk7XG4gICAgdmlld0ZvbGRlcnMoZm9sZGVyLmdldElubmVyRm9sZGVycygpKTtcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKGZvbGRlcik7XG4gICAgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyKE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSk7XG59XG5cbmNvbnN0IGNsZWFyRm9sZGVyc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVyID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCBuZXdGb2xkZXIgPSBmb2xkZXIuYWRkRm9sZGVyKGZvbGRlcik7XG4gICAgdmlld0ZvbGRlcihuZXdGb2xkZXIuZ2V0Tm9kZSgpKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JGb2xkZXIobmV3Rm9sZGVyKTtcbiAgICB2aWV3UGF0aHNUcmVlKG5ld0ZvbGRlcik7XG59XG5cblxuY29uc3Qgdmlld0ZvbGRlcnMgPSAoZm9sZGVycykgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBmb2xkZXIuZ2V0Tm9kZSgpO1xuICAgICAgICB2aWV3Rm9sZGVyKG5vZGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlc2l6ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZUZvbGRlcicpO1xuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGUgPT4ge1xuICAgICAgICBzZXRGb250U2l6ZVRvRm9sZGVycyh0ZW1wbGF0ZSk7XG4gICAgfSlcblxuICAgIHJvLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJykpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udFNpemVUb0ZvbGRlcnMgPSAodGVtcGxhdGUpID0+IHtcbiAgICBUb29scy5yZWxhdGl2ZUZvbnQodGVtcGxhdGUsICctLWZvbnQtc2l6ZS10by1mb2xkZXInKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdQYXRoc1RyZWUgPSAobmV3Rm9sZGVyKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRDbHVzdGVyKCk7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ICs9ICcxdmgnO1xuICAgIGNvbnN0IGxpbmsgPSBDbHVzdGVyTGluayhuZXdGb2xkZXIpO1xuICAgIGxpbmsuZ2V0Q2x1c3RlcigpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsobGluayk7XG4gICAgbmV3Rm9sZGVyLnNldExpbmsobGluayk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKVxuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5jb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IChmb2xkZXJzKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgbGV0IGlGb2xkZXJzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgICAgICBpZiAoaUZvbGRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLmdldElkKCkpO1xuICAgICAgICAgICAgaGFuZGxlcihpRm9sZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3QgY2xvc2VDbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd1JpZ2h0KCkpO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5jbG9zZShjbHVzdGVyLCAxLCAwLCAyMDAsICdmb3J3YXJkcycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMjAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5DbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd0Rvd24oKSk7XG4gICAgY2x1c3Rlci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5vcGVuKGNsdXN0ZXIsIDAsIDEsIDIwMCwgJ2ZvcndhcmRzJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcmZGb3JMaW5rID0gKGxpbmspID0+IHtcbiAgICBjb25zdCBjbHVzdGVyQ2xvc2UgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIHNldExpc3RlbmVycygpLmZvckxpbmtPZk1hcFBhdGhzKGxpbmspO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQ2x1c3RlclBhdGhzKGNsdXN0ZXJDbG9zZSwgbGluayk7XG59XG5cbmNvbnN0IHN3aXRjaENsb3NlQnV0dG9uU3ZnID0gKGxpbmssIGNoaWxkKSA9PiB7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoY2xvc2UpO1xuICAgIGNsb3NlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBjbG9zZUNsdXN0ZXIsIG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4vbGlua3NPZlBhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JGb2xkZXIgPSAoY3VycmVudEZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGN1cnJlbnRGb2xkZXIuZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0ZvbGRlciA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIoY3VycmVudEZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BlbmVkRm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpO1xuICAgICAgICAgICAgb3BlbkZvbGRlcihvcGVuZWRGb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JMaW5rT2ZNYXBQYXRocyA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIobGluay5nZXRGb2xkZXIoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU92ZXJOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWNmZDljJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdXNlT3V0Tm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMgPSAobm9kZSwgbGluaykgPT4ge1xuICAgICAgICBsZXQgZmxhZztcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZmxhZyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobGluay5nZXRDbHVzdGVyKCkpLmRpc3BsYXk7XG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgb3BlbkNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb3NlQ2x1c3RlcihsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IGNsb3NlIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMsIGZvckxpbmtPZk1hcFBhdGhzLCBmb3JGb2xkZXIsIGZvckJ1dHRvblRvQWRkRm9sZGVyLCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyIH1cbn0iLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9uc1wiO1xuXG5jb25zdCBUb29scyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Tm9kZVdpdGhTcGFuID0gKG5vZGVOYW1lLCB0ZXh0LCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShub2RlTmFtZSwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIHJldHVybiBzZXRVcFNwYW4obm9kZSwgdGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTm9kZSA9IChub2RlTmFtZSwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgICAgICBhZGRDbGFzc2VzKG5vZGUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIC4uLmNsYXNzZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY3VyQ2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGN1ckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFVwU3BhbiA9IChub2RlLCB0ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzcGFuID0gY3JlYXRlTm9kZSgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kQ2hpbGRzID0gKG5vZGUsIC4uLmNoaWxkcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHMpIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlLCBhdHJzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGF0ciBvZiBhdHJzKSB7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShhdHIubmFtZSwgYXRyLnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzQWZ0ZXIgPSAobm9kZSwgY2hpbGQpID0+IHtcbiAgICAgICAgd2hpbGUgKG5vZGUubGFzdENoaWxkICE9IGNoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gKG1vZGUsIC4uLm5vZGVzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IG1vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZSA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlbiA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9wZW4sIGNsb3NlIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNtb290aFZpc2liaWxpdHlHcm91cCA9ICguLi5ub2RlcykgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZSA9IChvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgc21vb3RoVmlzaWJpbGl0eSgpLmNsb3NlKG5vZGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5vcGVuKG5vZGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9wZW4sIGNsb3NlIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmdiYTJoZXggPSAocmdiYSkgPT4gYCMke3JnYmEubWF0Y2goL15yZ2JhP1xcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKykoPzosXFxzKihcXGQrXFwuezAsMX1cXGQqKSk/XFwpJC8pLnNsaWNlKDEpLm1hcCgobiwgaSkgPT4gKGkgPT09IDMgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobikgKiAyNTUpIDogcGFyc2VGbG9hdChuKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykucmVwbGFjZSgnTmFOJywgJycpKS5qb2luKCcnKX1gXG5cbiAgICBjb25zdCByZWxhdGl2ZUZvbnQgPSAobm9kZU9mUmVsYXRpdml0eSwgY3NzVmFyKSA9PiB7XG4gICAgICAgIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgbGV0IGZvbGRlckhlaWdodCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZU9mUmVsYXRpdml0eSkud2lkdGg7XG4gICAgICAgIGxldCBzaXplID0gcGFyc2VGbG9hdChmb2xkZXJIZWlnaHQucmVwbGFjZSgncHgnLCAnJykpIC8gNjtcbiAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3NpemV9cHhgKTtcbiAgICB9XG5cbiAgICB2YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXG4gICAgICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcbiAgICAgICAgdmFyIHNpYmxpbmdzID0gW107XG4gICAgICAgIHZhciBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcbiAgICAgICAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByYW5kb21fcmdiYSgpIHtcbiAgICAgICAgdmFyIG8gPSBNYXRoLnJvdW5kLCByID0gTWF0aC5yYW5kb20sIHMgPSAyNTU7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgbyhyKCkgKiBzKSArICcsJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgJzAuNCcgKyAnKSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmFuZG9tX3JnYmEsIGdldFNpYmxpbmdzLCByZWxhdGl2ZUZvbnQsIHJlbW92ZUNoaWxkc0FmdGVyLCBkaXNwbGF5TW9kZSwgc21vb3RoVmlzaWJpbGl0eUdyb3VwLCBzbW9vdGhWaXNpYmlsaXR5LCByZ2JhMmhleCwgZ2V0Tm9kZVdpdGhTcGFuLCBzZXRBdHRyaWJ1dGVzLCBjcmVhdGVOb2RlLCBhcHBlbmRDaGlsZHMsIHNldFVwU3BhbiwgcmVtb3ZlQ2hpbGRzLCBhZGRDbGFzc2VzIH07XG59KSgpO1xuXG5leHBvcnQgeyBUb29scyB9IiwiaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyLCBzZXRSZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVycydcbmltcG9ydCB7IHNldExpc3RlbmVyZkZvckxpbmsgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpbmtzT2ZQYXRoJztcbmltcG9ydCB7IE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gJy4vbW9kZWxzL2ZvbGRlck1vZGVscyc7XG5pbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgdmlld1Jvb3RQYXRoc1RocmVlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnMnO1xuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCByb290Rm9sZGVyID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCk7XG4gICAgc2V0TGlzdGVuZXJmRm9yTGluayhyb290Rm9sZGVyLmdldExpbmsoKSk7XG4gICAgc2V0UmVzaXplT2JzZXJ2ZXJzKCk7XG4gICAgdmlld1Jvb3RQYXRoc1RocmVlKCk7XG59XG5cbnN0YXJ0KCk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgbGV0IGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRJbm5lckZvbGRlcnMoKVswXTtcbiAgICBvcGVuRm9sZGVyKGZvbGRlcilcbn0iLCJpbXBvcnQgeyBnZXRGb2xkZXJOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2ZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZEZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQ2xvc2VGb2xkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNsdXN0ZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBGb2xkZXIgPSAoaWRzLCBmb2xkZXIgPSAwKSA9PiB7XG4gICAgbGV0IGlkID0gaWRzO1xuICAgIGxldCBuYW1lO1xuICAgIGxldCBsaW5rO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHBhcmVudCA9IGZvbGRlcjtcbiAgICBsZXQgY2x1c3RlciA9IGNyZWF0ZUNsdXN0ZXIoKTtcbiAgICBjb25zdCBub2RlID0gZ2V0Rm9sZGVyTm9kZShpZCk7XG4gICAgY29uc3QgaW5uZXJGb2xkZXJzID0gW11cblxuICAgIGNvbnN0IGFkZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgJHtpZH1fJHtjb3VudH1gO1xuICAgICAgICArK2NvdW50O1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKG5ld0lkLCBmb2xkZXIpO1xuICAgICAgICBpbm5lckZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICByZXR1cm4gbmV3Rm9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lckZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5hbWUgPSAodmFsKSA9PiB7XG4gICAgICAgIG5hbWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGluayA9IChub2RlKSA9PiB7XG4gICAgICAgIGxpbmsgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldENsdXN0ZXIsIGdldExpbmssIHNldExpbmssIHNldFBhcmVudCwgZ2V0UGFyZW50LCBhZGRGb2xkZXIsIGRlbCwgZ2V0Tm9kZSwgZ2V0SW5uZXJGb2xkZXJzLCBnZXRJZCwgc2V0TmFtZSwgZ2V0TmFtZSB9O1xufVxuXG5leHBvcnQgY29uc3QgUm9vdEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBGb2xkZXIoMCk7XG4gICAgY29uc3QgZ2V0Um9vdEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvb3RGb2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB7IGdldFJvb3RGb2xkZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXI7XG4gICAgY29uc3Qgc2V0T3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBvcGVuZWRGb2xkZXIgPSBmb2xkZXI7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZEZvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkRm9sZGVyLCBnZXRPcGVuZWRGb2xkZXIgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckFkZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZEZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpOyIsImltcG9ydCB7IGdldExpbmtOb2RlcyB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSAoaUZvbGRlcikgPT4ge1xuICAgIGxldCBmb2xkZXIgPSBpRm9sZGVyO1xuICAgIGxldCBuYW1lID0gZm9sZGVyLmdldElkKCk7XG4gICAgbGV0IG5vZGUgPSBnZXRMaW5rTm9kZXMobmFtZSk7XG5cbiAgICBjb25zdCBnZXRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSwgZ2V0TmFtZSwgZ2V0Rm9sZGVyIH07XG59XG5cbmV4cG9ydCBjb25zdCBDbHVzdGVyTGluayA9IChpRm9sZGVyKSA9PiB7XG4gICAgbGV0IHByb3RvdHlwZSA9IExpbmsoaUZvbGRlcik7XG4gICAgbGV0IGNsdXN0ZXIgPSBpRm9sZGVyLmdldENsdXN0ZXIoKTtcblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Q2x1c3RlciB9KTtcbn1cblxuY29uc3QgUGF0aCA9IChmb2xkZXIpID0+IHtcbiAgICBjb25zdCBuYW1lID0gZm9sZGVyLmdldElkKCk7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xufSIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXJTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVGb2xkZXInKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQ2xvc2VGb2xkZXJBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2JhY2snKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRXcmFwcGVySWNvbigpKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRXcmFwcGVySWNvbiA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGVyTm9kZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlck5vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgZm9sZGVyTm9kZUFzc2VtYmx5ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ZvbGRlcicsIGlkKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgbmFtZTogJHtpZH1gLCAnbmFtZScpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhmb2xkZXIsIGdldFdyYXBwZXJJY29uKGlkKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmV4cG9ydCBjb25zdCB2aWV3Rm9sZGVyID0gKG5vZGUsIGZsYWcgPSAnZm9sZGVyJykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIGlmIChmbGFnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmICgndGFzaycpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2ZvbGRlcicpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2FkZCcpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saW5rc09mUGF0aFwiO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCJcbmltcG9ydCB7IFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1Jvb3RQYXRoc1RocmVlID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0TGluaygpO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcwLjN2aCAjMzZiYjM2IHNvbGlkJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5QYXRoc1NpZGVCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGgtY29udGFpbmVyJyk7XG4gICAgVG9vbHMuYWRkQ2xhc3Nlcyhjb250YWluZXIsICdvcGVuJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldExpbmtOb2RlcyA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgbm9kZVdyYXBwZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnbGluay13cmFwcGVyJyk7XG4gICAgY29uc3QgY2xvc2VDbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2Nsb3NlLWNsdXN0ZXInKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICBjb25zdCBub2RlTGluayA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYC8ke25hbWV9YCwgJ2xpbmsnKTtcbiAgICBjbG9zZUNsdXN0ZXIuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKG5vZGVXcmFwcGVyLCBjbG9zZUNsdXN0ZXIsIG5vZGVMaW5rKTtcbiAgICByZXR1cm4gbm9kZVdyYXBwZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bicpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd1JpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbi8qZXhwb3J0IGNvbnN0IGdldFBhdGhzQ2x1c3RlciA9IChmb2xkZXJzLCBwTGluaykgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAncGF0aHMtY2x1c3RlcicpO1xuICAgIHBMaW5rLnNldENsdXN0ZXIoY2x1c3Rlcik7XG4gICAgY2x1c3Rlci5zdHlsZS5wYWRkaW5nTGVmdCArPSBgJHsxfXZoYDtcbiAgICBmb3IgKGxldCBmb2xkZXIgb2YgZm9sZGVycykge1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBDbHVzdGVyTGluayhmb2xkZXIpO1xuICAgICAgICBsaW5rQ2ZnKGxpbmssIGZvbGRlcik7XG4gICAgICAgIGZvbGRlci5zZXRMaW5rKGxpbmspO1xuXG4gICAgICAgIGNvbnN0IGlGb2xkZXJzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgICAgICBjbHVzdGVyLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICAgICAgaWYgKGlGb2xkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNsdXN0ZXIuYXBwZW5kQ2hpbGQoZ2V0UGF0aHNDbHVzdGVyKGlGb2xkZXJzLCBsaW5rKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59Ki9cblxuZXhwb3J0IGNvbnN0IGxpbmtDZmcgPSAobGluaywgZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2x1c3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNsdXN0ZXInKTtcbiAgICByZXR1cm4gY2x1c3Rlcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=