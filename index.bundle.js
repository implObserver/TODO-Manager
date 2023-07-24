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
    overflow: hidden;
    cursor: pointer;
    width: inherit;
    min-width: 100%;
}

.link-body {
    display: grid;
    grid-template-columns: min-content 1fr max-content;

}

.link {
    display: flex;
    align-items: center;
}

.delete-link {
    display: flex;
    justify-content: end;
    width: 3vh;
    height: 100%;
}

.delete-link :hover {
    display: flex;
    justify-content: center;
    background-color: red;
}

.close-cluster {
    display: flex;
    width: 2vh;
    height: 100%;
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
    padding: 1vh;
    height: 93vh;
    background-color: #e9f5e9;
    font-size: var(--font-size-to-folder);
}

.folder,
.task,
.templateFolder,
.templateTask,
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

.icon-wrapper>.templateTaskSvg,
.icon-wrapper>.taskSvg {
    display: flex;
    max-width: inherit;
    max-height: inherit;
    align-self: center;
    align-items: center;
    justify-self: center;
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

.templateTask:hover {
    animation-fill-mode: forwards;
    animation: 5s infinite alternate dash;
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
        display: flex;
        justify-self: end;
        width: max-content;
    }

}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: min(2vh, var(--font-size-to-folder));\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-areas: 'paths folders';\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    overflow: hidden;\n    cursor: pointer;\n    width: inherit;\n    min-width: 100%;\n}\n\n.link-body {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n\n}\n\n.link {\n    display: flex;\n    align-items: center;\n}\n\n.delete-link {\n    display: flex;\n    justify-content: end;\n    width: 3vh;\n    height: 100%;\n}\n\n.delete-link :hover {\n    display: flex;\n    justify-content: center;\n    background-color: red;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: 100%;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n/*.paths {\n    display: flex;\n    width: 2vh;\n    height: 4vh;\n    border: 0.2vh #36bb36 solid;\n    background-color: #d83d71;\n    opacity: 0.5;\n    font-size: 2vh;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.4vh;\n    cursor: pointer;\n}\n\n.paths:hover {\n    opacity: 1;\n}\n\n@keyframes open {\n    from {\n        opacity: 0;\n        width: 0vh;\n    }\n\n    to {\n        opacity: 1;\n        width: 50vh;\n    }\n}*/\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    padding: 1vh;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.folder,\n.task,\n.templateFolder,\n.templateTask,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.icon-wrapper>.templateTaskSvg,\n.icon-wrapper>.taskSvg {\n    display: flex;\n    max-width: inherit;\n    max-height: inherit;\n    align-self: center;\n    align-items: center;\n    justify-self: center;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n.templateTask:hover {\n    animation-fill-mode: forwards;\n    animation: 5s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 536px) {\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: flex;\n        justify-self: end;\n        width: max-content;\n    }\n\n}"],"sourceRoot":""}]);
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
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getCustomLink: () => (/* binding */ getCustomLink),
/* harmony export */   openFolder: () => (/* binding */ openFolder),
/* harmony export */   setFontSizeToFolders: () => (/* binding */ setFontSizeToFolders),
/* harmony export */   setResizeObservers: () => (/* binding */ setResizeObservers),
/* harmony export */   viewLink: () => (/* binding */ viewLink)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _linksOfPath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");








const createButtons = () => {
    createButtonForAddTask();
    createButtonToAddFolder();
    createButtonToCloseFolder();
}

const createButtonForAddTask = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(_models_taskModels__WEBPACK_IMPORTED_MODULE_3__.ButtonForAddTask.getNode(), 'add');
}

const createButtonToAddFolder = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder.getNode(), 'add');
}

const createButtonToCloseFolder = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder.getNode(), 'close');
}

const viewLinkOpenedFolder = (folder) => {
    let openedFolderLink = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder().getLink().getNode();
    openedFolderLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    folder.getLink().getNode().querySelector('.link').style.backgroundColor = '#60d0e4';
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(folder);
}

const startConfig = (() => {
    let rootFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink((0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.ClusterLink)(rootFolder));
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(rootFolder);
    createButtons();
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_5__.openCluster)(rootFolder.getLink());
    viewLinkOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToAddTask(_models_taskModels__WEBPACK_IMPORTED_MODULE_3__.ButtonForAddTask);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder);
})();

const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
    viewElements(folder.getInnerFolders());
    viewElements(folder.getInnerTasks());
    viewLinkOpenedFolder(folder);
    openClusterWhenAddingFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(folders);
}

const createFolder = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder();
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(newFolder.getNode());
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forFolder(newFolder);
    viewLink(newFolder);
}

const createTask = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_3__.Task)(taskId);
    folder.addTask(task);
    viewLink(task, 'task');
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(task.getNode(), 'task');
}

const viewElements = (elements) => {
    for (let element of elements) {
        const node = element.getNode();
        (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_4__.viewElement)(node);
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

const viewLink = (element, type = 'folder') => {
    let link = type === 'folder' ? getCustomLink(element) : (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.TaskLink)(element);
    let container = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder().getCluster();
    container.style.paddingLeft += '1vh';
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_5__.setListenerfForLink)(link);
    element.setLink(link);
    container.appendChild(link.getNode());
    openClusterWhenAddingFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
}

const getCustomLink = (folder) => {
    const link = (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_2__.ClusterLink)(folder);
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
    return link;
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
    if (clusterClose !== null) {
        (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forButtonToClusterPaths(clusterClose, link);
    }
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forButtonToDeleteLink(link);
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

    const forButtonToAddTask = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.createTask)();
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
        let color;
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.openFolder)(link.getFolder());
            color = document.defaultView.getComputedStyle(node).backgroundColor;
        });
        const mouseOverNode = node.addEventListener('mouseover', e => {
            e.stopPropagation();
            color = document.defaultView.getComputedStyle(node).backgroundColor;
            node.style.backgroundColor = '#9cfd9c';
        });
        const mouseOutNode = node.addEventListener('mouseout', e => {
            e.stopPropagation();
            node.style.backgroundColor = color;
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

    const forButtonToDeleteLink = (link) => {
        let node = link.getNode().querySelector('.delete-link');
        const clickNode = node.addEventListener('click', e => {
            
            let element = link.getElement();
            if (confirm('Вы действительно хотите удалить папку и всё ее содержимое?')) {
                element.del(element);
            } else {
            }
        })
    }

    return { forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLinkOfMapPaths, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
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
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '1' + ')';
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

for (let i = 0; i < 0; i++) {
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.createFolder)();
    let folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_2__.OpenedFolder.getOpenedFolder().getInnerFolders()[0];
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(folder)
}

/***/ }),

/***/ "./src/models/element.js":
/*!*******************************!*\
  !*** ./src/models/element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");


const Element = (ids) => {
    let id = ids;
    let name;
    let link;
    let parent = _folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder();

    const getId = () => {
        return id;
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

    const setParent = (newParent) => {
        parent = newParent;
    }

    const getParent = () => {
        return parent;
    }

    return {
        getId, setName, getName, setLink, getLink, setParent, getParent,
    }
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
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element */ "./src/models/element.js");







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

const Folder = (id) => {
    const prototype = (0,_element__WEBPACK_IMPORTED_MODULE_5__.Element)(id);
    let cluster = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__.createCluster)();
    const node = (0,_views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__.getFolderNode)(id);
    let innerFolders = []
    let innerTasks = [];
    let folderCount = 0;
    let taskCount = 0;

    const addFolder = () => {
        const newId = `${prototype.getId()}_${folderCount}`;
        setFolderCount();
        let newFolder = Folder(newId);
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        let filter = prototype.getParent().getInnerFolders().filter((folder) => folder !== prototype.getLink().getFolder());
        prototype.getParent().getCluster().removeChild(prototype.getLink().getNode());
        prototype.getParent().setInnerFolders(filter);
        setInnerFolders([]);
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.openFolder)(prototype.getParent());
    }

    const setInnerFolders = (arr) => {
        innerFolders = arr;
    }

    const getInnerFolders = () => {
        return innerFolders;
    }

    const getCluster = () => {
        return cluster;
    }

    const getNode = () => {
        return node;
    }

    const addTask = (task) => {
        ++taskCount;
        innerTasks.push(task);
    }

    const removeTask = (task) => {
        innerTasks = innerTasks.filter((e) => e !== task);
    }

    const getInnerTasks = () => {
        return innerTasks;
    }

    const setFolderCount = () => {
        ++folderCount;
    }

    const setTaskCount = () => {
        ++taskCount;
    }

    const getTaskCount = () => {
        return taskCount;
    }

    return Object.assign({}, prototype, { removeTask, getTaskCount, setTaskCount, setFolderCount, addTask, getInnerTasks, addFolder, del, setInnerFolders, getInnerFolders, getCluster, getNode });
}

/*export const Folder = (ids, folder = 0) => {
    let id = ids;
    let name;
    let link;
    let count = 0;
    let parent = folder;
    let cluster = createCluster();
    const node = getFolderNode(id);
    let innerFolders = []

    const addFolder = (folder) => {
        const newId = `${id}_${count}`;
        ++count;
        let newFolder = Folder(newId, folder);
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        let filter = parent.getInnerFolders().filter((folder) => folder !== link.getFolder());
        setInnerFolders([]);
        parent.getCluster().removeChild(link.getNode());
        parent.setInnerFolders(filter);
        openFolder(parent);
    }

    const setInnerFolders = (arr) => {
        innerFolders = arr;
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

    return { setInnerFolders, getCluster, getLink, setLink, setParent, getParent, addFolder, del, getNode, getInnerFolders, getId, setName, getName };
}*/

const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }
    return { getRootFolder };
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
/* harmony export */   FolderLink: () => (/* binding */ FolderLink),
/* harmony export */   TaskLink: () => (/* binding */ TaskLink)
/* harmony export */ });
/* harmony import */ var _views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/pathsContainers */ "./src/views/nodes/pathsContainers.js");


const Link = (iElement) => {
    let element = iElement;
    let name = element.getId();
    let node;

    const getElement = () => {
        return element;
    }

    const getName = () => {
        return name;
    }

    const getNode = () => {
        return node;
    }

    const setNode = (iNode) => {
        node = iNode;
    }

    return { setNode, getNode, getName, getElement };
}

const FolderLink = (folder) => {
    let prototype = Link(folder);
    prototype.setNode((0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_0__.getFolderLinkNode)(prototype.getName()));
    const getFolder = () => {
        return prototype.getElement();
    }
    return Object.assign({}, prototype, { getFolder });
}

const TaskLink = (task) => {
    let prototype = Link(task);
    prototype.setNode((0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_0__.getTaskLinkNode)(prototype.getName()));
    const getTask = () => {
        return prototype.getElement();
    }

    return Object.assign({}, prototype, { getTask });
}

const ClusterLink = (folder) => {
    let prototype = FolderLink(folder);
    let cluster = folder.getCluster();
    const getCluster = () => {
        return cluster;
    }

    return Object.assign({}, prototype, { getCluster });
}

/***/ }),

/***/ "./src/models/taskModels.js":
/*!**********************************!*\
  !*** ./src/models/taskModels.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonForAddTask: () => (/* binding */ ButtonForAddTask),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ButtonForAddTask */ "./src/views/nodes/ButtonForAddTask.js");
/* harmony import */ var _views_nodes_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/task */ "./src/views/nodes/task.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element */ "./src/models/element.js");
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");






const Task = (id) => {
    const prototype = (0,_element__WEBPACK_IMPORTED_MODULE_3__.Element)(id);
    const node = (0,_views_nodes_task__WEBPACK_IMPORTED_MODULE_2__.getTaskNode)(id);

    const getNode = () => {
        return node;
    }

    const del = (e) => {
        let parent = _folderModels__WEBPACK_IMPORTED_MODULE_4__.OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(parent);
    }

    return Object.assign({}, prototype, { del, getNode });
}

const ButtonForAddTask = (() => {
    const node = (0,_views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_1__.getButtonForAddTask)();
    const getNode = () => {
        return node;
    }
    return { getNode };
})();

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

/***/ "./src/views/nodes/ButtonForAddTask.js":
/*!*********************************************!*\
  !*** ./src/views/nodes/ButtonForAddTask.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getButtonForAddTask: () => (/* binding */ getButtonForAddTask)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getSvgInWrapper = () => {
    let wrapperIcon = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.templateTaskSvg');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}


const getButtonForAddTask = () => {
    const folder = buttonForAddTaskAssembly();
    return folder;
}

const buttonForAddTaskAssembly = () => {
    const task = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'templateTask');
    const name = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.getNodeWithSpan('div', `Add...`, 'name');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(task, getSvgInWrapper(), name);
    return task;
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


const getSvgInWrapper = () => {
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
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(folder, getSvgInWrapper());
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
/* harmony export */   viewElement: () => (/* binding */ viewElement)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _ButtonForAddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonForAddTask */ "./src/views/nodes/ButtonForAddTask.js");





const wrapper = document.querySelector('.wrapper');

const viewElement = (node, flag = 'folder') => {
    console.log(flag)
    let content = document.querySelector('.folders');
    let innerTasks = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder().getInnerTasks();
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');
    if (flag === 'close') {
        content.appendChild(node);
    } else if (flag === 'task') {
        content.insertBefore(node, content.lastChild);
    } else if (flag === 'folder') {
        let lastNode = innerTasks.length > 0 ? innerTasks.at(0).getNode() : content.lastChild;
        console.log(lastNode)
        content.insertBefore(node, lastNode);
    } else if (flag === 'add') {
        content.insertBefore(node, content.firstChild);
    }
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
/* harmony export */   getFolderLinkNode: () => (/* binding */ getFolderLinkNode),
/* harmony export */   getNodeArrowDown: () => (/* binding */ getNodeArrowDown),
/* harmony export */   getNodeArrowRight: () => (/* binding */ getNodeArrowRight),
/* harmony export */   getTaskLinkNode: () => (/* binding */ getTaskLinkNode),
/* harmony export */   getTaskSvg: () => (/* binding */ getTaskSvg),
/* harmony export */   linkCfg: () => (/* binding */ linkCfg),
/* harmony export */   openPathsSideBar: () => (/* binding */ openPathsSideBar),
/* harmony export */   viewRootPathsThree: () => (/* binding */ viewRootPathsThree)
/* harmony export */ });
/* harmony import */ var _controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/linksOfPath */ "./src/controllers/linksOfPath.js");
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");





const viewRootPathsThree = () => {
    let link = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.RootFolder.getRootFolder().getLink();
    link.getNode().style.border = '0.3vh #36bb36 solid';
    link.getNode().appendChild(link.getCluster());
    document.querySelector('.paths-container').appendChild(link.getNode());
    document.querySelector('.delete-link').style.display = 'none';
}

const openPathsSideBar = () => {
    const container = document.querySelector('.path-container');
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.addClasses(container, 'open');
    return container;
}

const getTemplateLinkNode = (name, node) => {
    const nodeWrapper = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'link-wrapper');
    const linkBody = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'link-body');
    const nodeLink = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.getNodeWithSpan('div', `${name}`, 'link');
    const del = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'delete-link');
    del.appendChild(document.querySelector('.delete').cloneNode(true));
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.appendChilds(linkBody, node, nodeLink, del);
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.appendChilds(nodeWrapper, linkBody);
    let color = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.random_rgba();
    nodeWrapper.style.borderLeft = `0.3vh ${color} solid`;
    nodeWrapper.style.borderTop = `0.3vh ${color} solid`;
    setBorderColor(nodeWrapper);
    return nodeWrapper;
}

const setBorderColor = (node) => {
    let color = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.random_rgba();
    node.style.borderLeft = `0.3vh ${color} solid`;
    node.style.borderTop = `0.3vh ${color} solid`;
}

const getFolderLinkNode = (name) => {
    let template = getTemplateLinkNode(`\\${name}`, forFolder());
    return template;
}

const getTaskLinkNode = (name) => {
    let template = getTemplateLinkNode(name, forTask());
    return template;
}

const forFolder = () => {
    const closeCluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'close-cluster');
    const arrowRight = getNodeArrowRight();
    closeCluster.appendChild(arrowRight);
    return closeCluster;
}

const forTask = () => {
    const taskPreview = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'task-preview');
    const taskIcon = getNodeArrowRight();
    taskPreview.appendChild(taskIcon);
    return taskPreview;
}

const getTaskSvg = () => {
    return document.querySelector('.taskSvg').cloneNode(true);
}

const getNodeArrowDown = () => {
    return document.querySelector('.arrow-down').cloneNode(true);
}

const getNodeArrowRight = () => {
    return document.querySelector('.arrow-right').cloneNode(true);
}

const linkCfg = (link, folder) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_controllers_linksOfPath__WEBPACK_IMPORTED_MODULE_0__.setListenerfForLink)(link);
}

const createCluster = () => {
    const cluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'paths-cluster');
    return cluster;
}

/***/ }),

/***/ "./src/views/nodes/task.js":
/*!*********************************!*\
  !*** ./src/views/nodes/task.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTaskNode: () => (/* binding */ getTaskNode)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");


const getWrapperIcon = () => {
    let wrapperIcon = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'icon-wrapper');
    let icon = document.querySelector('.taskSvg').cloneNode(true);
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(wrapperIcon, icon);
    return wrapperIcon;
}

const getTaskNode = (id) => {
    const task = taskNodeAssembly(id);
    return task;
}

const taskNodeAssembly = (id) => {
    const task = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('div', 'task', id);
    const name = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.getNodeWithSpan('div', `name: ${id}`, 'name');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(task, getWrapperIcon(id), name);
    return task;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTywyRkFBMkYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFP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QUFDQSxJQUFJLGdEQUFLO0FBQ1QsSUFBSSxnREFBSztBQUNULGdCQUFnQixnREFBSztBQUNyQiw0Q0FBNEMsT0FBTztBQUNuRCwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0RBQUs7QUFDckIscUNBQXFDLE9BQU87QUFDNUMsb0NBQW9DLE9BQU87QUFDM0M7O0FBRU87QUFDUCw0Q0FBNEMsS0FBSztBQUNqRDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGdEQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxJQUFJLDZFQUFtQjtBQUN2Qjs7QUFFTztBQUNQLG9CQUFvQixnREFBSztBQUN6QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRjJDOztBQUUzQztBQUNBLHNCQUFzQixnREFBSztBQUMzQjtBQUNBLElBQUksZ0RBQUs7QUFDVDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCLGlCQUFpQixnREFBSyxpQ0FBaUMsR0FBRztBQUMxRCxJQUFJLGdEQUFLO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saW5rc09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2ZvbGRlck1vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2xpbmtPZlBhdGguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy90YXNrTW9kZWxzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZEZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQ2xvc2VGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvZm9sZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZDRiMjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5jaGFpbi1mb2xkZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcikpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG59XG5cbi5wYXRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLm5hbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xuXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG5cbn1cblxuLmxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHdpZHRoOiAzdmg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsZXRlLWxpbmsgOmhvdmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNsb3NlLWNsdXN0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJ2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uY2xvc2UtY2x1c3RlciA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XG59XG5cbi8qLnBhdGhzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAydmg7XG4gICAgaGVpZ2h0OiA0dmg7XG4gICAgYm9yZGVyOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODNkNzE7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGF0aHM6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgb3BlbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiAwdmg7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDogNTB2aDtcbiAgICB9XG59Ki9cblxuLmZvbGRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XG59XG5cbi5mb2xkZXIsXG4udGFzayxcbi50ZW1wbGF0ZUZvbGRlcixcbi50ZW1wbGF0ZVRhc2ssXG4uYmFjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2VudGVyJztcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi13cmFwcGVyIHtcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uaWNvbi13cmFwcGVyPnN2ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMjB2aDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5pY29uLXdyYXBwZXI+LnRlbXBsYXRlVGFza1N2Zyxcbi5pY29uLXdyYXBwZXI+LnRhc2tTdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5uYW1lIHtcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi50ZW1wbGF0ZUZvbGRlcj4ubmFtZSxcbi5jaGFpbi1mb2xkZXJzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBzdGFuZGFyZCBzeW50YXggKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoa29ucXVlcm9yKSBicm93c2VycyAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBJRTEwKyAqL1xufVxuXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLndyYXBwZXI+LmFycm93LWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53cmFwcGVyPi5hcnJvdy11cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG4udGVtcGxhdGVUYXNrOmhvdmVyIHtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IDVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIGZyb20ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzoxLzEuMDAwMDAwMSkge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkgYW5kIChtaW4td2lkdGg6IDUzNnB4KSB7XG5cbiAgICAucGF0aHMtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBwYXRocztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgICAgIG1heC13aWR0aDogMzB2dztcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IDkzdmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XG4gICAgfVxuXG4gICAgLnBhdGhzLWNsdXN0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsUUFBUTtJQUNSLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEOztBQUV0RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDOztBQUVBOzs7OztJQUtJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQSxrREFBa0Q7O0FBRWxEOztJQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixpREFBaUQ7UUFDakQsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBmb250LXNpemU6IG1pbigydmgsIHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi5saW5rLWJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG5cXG59XFxuXFxuLmxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLWxpbmsgOmhvdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG59XFxuXFxuLyoucGF0aHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgYm9yZGVyOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgzZDcxO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhdGhzOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGVuIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgd2lkdGg6IDB2aDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDUwdmg7XFxuICAgIH1cXG59Ki9cXG5cXG4uZm9sZGVycyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZm9sZGVycztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBoZWlnaHQ6IDkzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XFxufVxcblxcbi5mb2xkZXIsXFxuLnRhc2ssXFxuLnRlbXBsYXRlRm9sZGVyLFxcbi50ZW1wbGF0ZVRhc2ssXFxuLmJhY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLXdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmljb24td3JhcHBlcj5zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5pY29uLXdyYXBwZXI+LnRlbXBsYXRlVGFza1N2ZyxcXG4uaWNvbi13cmFwcGVyPi50YXNrU3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogSUUxMCsgKi9cXG59XFxuXFxuLndyYXBwZXI+LmZvbGRlclN2ZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLndyYXBwZXI+LmFycm93LWRvd24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XFxufVxcblxcbi50ZW1wbGF0ZVRhc2s6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIGFuZCAobWluLXdpZHRoOiA1MzZweCkge1xcblxcbiAgICAucGF0aHMtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogcGF0aHM7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICAgIGhlaWdodDogOTN2aDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcXG4gICAgfVxcblxcbiAgICAucGF0aHMtY2x1c3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIEZvbGRlciwgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IENsdXN0ZXJMaW5rLCBUYXNrTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkVGFzaywgVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgb3BlbkNsdXN0ZXIsIHNldExpc3RlbmVyZkZvckxpbmsgfSBmcm9tIFwiLi9saW5rc09mUGF0aFwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY3JlYXRlQnV0dG9uRm9yQWRkVGFzaygpO1xuICAgIGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlcigpO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25Gb3JBZGRUYXNrID0gKCkgPT4ge1xuICAgIHZpZXdFbGVtZW50KEJ1dHRvbkZvckFkZFRhc2suZ2V0Tm9kZSgpLCAnYWRkJyk7XG59XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIHZpZXdFbGVtZW50KEJ1dHRvbkZvckFkZEZvbGRlci5nZXROb2RlKCksICdhZGQnKTtcbn1cblxuY29uc3QgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JDbG9zZUZvbGRlci5nZXROb2RlKCksICdjbG9zZScpO1xufVxuXG5jb25zdCB2aWV3TGlua09wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgb3BlbmVkRm9sZGVyTGluayA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRMaW5rKCkuZ2V0Tm9kZSgpO1xuICAgIG9wZW5lZEZvbGRlckxpbmsucXVlcnlTZWxlY3RvcignLmxpbmsnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2U5ZjVlOSc7XG4gICAgZm9sZGVyLmdldExpbmsoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzYwZDBlNCc7XG4gICAgT3BlbmVkRm9sZGVyLnNldE9wZW5lZEZvbGRlcihmb2xkZXIpO1xufVxuXG5jb25zdCBzdGFydENvbmZpZyA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICByb290Rm9sZGVyLnNldFBhcmVudChyb290Rm9sZGVyKTtcbiAgICByb290Rm9sZGVyLnNldExpbmsoQ2x1c3Rlckxpbmsocm9vdEZvbGRlcikpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIG9wZW5DbHVzdGVyKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbiAgICB2aWV3TGlua09wZW5lZEZvbGRlcihyb290Rm9sZGVyKTtcbn0pKCk7XG5cbmNvbnN0IHNldEJ1dHRvbnNMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQWRkRm9sZGVyKEJ1dHRvbkZvckFkZEZvbGRlcik7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRUYXNrKEJ1dHRvbkZvckFkZFRhc2spO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQ2xvc2VGb2xkZXIoQnV0dG9uRm9yQ2xvc2VGb2xkZXIpO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IG9wZW5Gb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgY2xlYXJGb2xkZXJzQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJUYXNrcygpKTtcbiAgICB2aWV3TGlua09wZW5lZEZvbGRlcihmb2xkZXIpO1xuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5jb25zdCBjbGVhckZvbGRlcnNDb250YWluZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycycpO1xuICAgIFRvb2xzLnJlbW92ZUNoaWxkcyhmb2xkZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvbGRlciA9IChmb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpID0+IHtcbiAgICBsZXQgbmV3Rm9sZGVyID0gZm9sZGVyLmFkZEZvbGRlcigpO1xuICAgIHZpZXdFbGVtZW50KG5ld0ZvbGRlci5nZXROb2RlKCkpO1xuICAgIHNldExpc3RlbmVycygpLmZvckZvbGRlcihuZXdGb2xkZXIpO1xuICAgIHZpZXdMaW5rKG5ld0ZvbGRlcik7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCB0YXNrSWQgPSBmb2xkZXIuZ2V0VGFza0NvdW50KCk7XG4gICAgbGV0IHRhc2sgPSBUYXNrKHRhc2tJZCk7XG4gICAgZm9sZGVyLmFkZFRhc2sodGFzayk7XG4gICAgdmlld0xpbmsodGFzaywgJ3Rhc2snKTtcbiAgICB2aWV3RWxlbWVudCh0YXNrLmdldE5vZGUoKSwgJ3Rhc2snKTtcbn1cblxuY29uc3Qgdmlld0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBjb25zdCBub2RlID0gZWxlbWVudC5nZXROb2RlKCk7XG4gICAgICAgIHZpZXdFbGVtZW50KG5vZGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlc2l6ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZUZvbGRlcicpO1xuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGUgPT4ge1xuICAgICAgICBzZXRGb250U2l6ZVRvRm9sZGVycyh0ZW1wbGF0ZSk7XG4gICAgfSlcblxuICAgIHJvLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJykpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udFNpemVUb0ZvbGRlcnMgPSAodGVtcGxhdGUpID0+IHtcbiAgICBUb29scy5yZWxhdGl2ZUZvbnQodGVtcGxhdGUsICctLWZvbnQtc2l6ZS10by1mb2xkZXInKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rID0gKGVsZW1lbnQsIHR5cGUgPSAnZm9sZGVyJykgPT4ge1xuICAgIGxldCBsaW5rID0gdHlwZSA9PT0gJ2ZvbGRlcicgPyBnZXRDdXN0b21MaW5rKGVsZW1lbnQpIDogVGFza0xpbmsoZWxlbWVudCk7XG4gICAgbGV0IGNvbnRhaW5lciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRDbHVzdGVyKCk7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ICs9ICcxdmgnO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsobGluayk7XG4gICAgZWxlbWVudC5zZXRMaW5rKGxpbmspO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyKE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDdXN0b21MaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBDbHVzdGVyTGluayhmb2xkZXIpO1xuICAgIGxpbmsuZ2V0Q2x1c3RlcigpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIHJldHVybiBsaW5rO1xufVxuXG5jb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IChmb2xkZXJzKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgbGV0IGlGb2xkZXJzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgICAgICBpZiAoaUZvbGRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLmdldElkKCkpO1xuICAgICAgICAgICAgaGFuZGxlcihpRm9sZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3QgY2xvc2VDbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd1JpZ2h0KCkpO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5jbG9zZShjbHVzdGVyLCAxLCAwLCAyMDAsICdmb3J3YXJkcycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMjAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5DbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd0Rvd24oKSk7XG4gICAgY2x1c3Rlci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5vcGVuKGNsdXN0ZXIsIDAsIDEsIDIwMCwgJ2ZvcndhcmRzJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcmZGb3JMaW5rID0gKGxpbmspID0+IHtcbiAgICBjb25zdCBjbHVzdGVyQ2xvc2UgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIHNldExpc3RlbmVycygpLmZvckxpbmtPZk1hcFBhdGhzKGxpbmspO1xuICAgIGlmIChjbHVzdGVyQ2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMoY2x1c3RlckNsb3NlLCBsaW5rKTtcbiAgICB9XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9EZWxldGVMaW5rKGxpbmspO1xufVxuXG5jb25zdCBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyA9IChsaW5rLCBjaGlsZCkgPT4ge1xuICAgIGxldCBjbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGNsb3NlKTtcbiAgICBjbG9zZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUZvbGRlciwgY3JlYXRlVGFzaywgb3BlbkZvbGRlciB9IGZyb20gXCIuL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgY2xvc2VDbHVzdGVyLCBvcGVuQ2x1c3RlciB9IGZyb20gXCIuL2xpbmtzT2ZQYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9yRm9sZGVyID0gKGN1cnJlbnRGb2xkZXIpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBjdXJyZW50Rm9sZGVyLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tGb2xkZXIgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGN1cnJlbnRGb2xkZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0FkZEZvbGRlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUZvbGRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0FkZFRhc2sgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUYXNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BlbmVkRm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpO1xuICAgICAgICAgICAgb3BlbkZvbGRlcihvcGVuZWRGb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JMaW5rT2ZNYXBQYXRocyA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb3BlbkZvbGRlcihsaW5rLmdldEZvbGRlcigpKTtcbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU92ZXJOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb2xvciA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljZmQ5Yyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU91dE5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMgPSAobm9kZSwgbGluaykgPT4ge1xuICAgICAgICBsZXQgZmxhZztcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZmxhZyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobGluay5nZXRDbHVzdGVyKCkpLmRpc3BsYXk7XG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgb3BlbkNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb3NlQ2x1c3RlcihsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IGNsb3NlIH07XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9EZWxldGVMaW5rID0gKGxpbmspID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGxpbmsuZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC/0LDQv9C60YMg0Lgg0LLRgdGRINC10LUg0YHQvtC00LXRgNC20LjQvNC+0LU/JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRlbChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZm9yQnV0dG9uVG9BZGRUYXNrLCBmb3JCdXR0b25Ub0RlbGV0ZUxpbmssIGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzLCBmb3JMaW5rT2ZNYXBQYXRocywgZm9yRm9sZGVyLCBmb3JCdXR0b25Ub0FkZEZvbGRlciwgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciB9XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcblxuY29uc3QgVG9vbHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5vZGVXaXRoU3BhbiA9IChub2RlTmFtZSwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZU5vZGUobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gc2V0VXBTcGFuKG5vZGUsIHRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5vZGUgPSAobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgYWRkQ2xhc3Nlcyhub2RlLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcFNwYW4gPSAobm9kZSwgdGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3BhbiA9IGNyZWF0ZU5vZGUoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZENoaWxkcyA9IChub2RlLCAuLi5jaGlsZHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgICAgICBmb3IgKGxldCBhdHIgb2YgYXRycykge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkc0FmdGVyID0gKG5vZGUsIGNoaWxkKSA9PiB7XG4gICAgICAgIHdoaWxlIChub2RlLmxhc3RDaGlsZCAhPSBjaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IChtb2RlLCAuLi5ub2RlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBtb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAgPSAoLi4ubm9kZXMpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5jbG9zZShub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJnYmEyaGV4ID0gKHJnYmEpID0+IGAjJHtyZ2JhLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkK1xcLnswLDF9XFxkKikpP1xcKSQvKS5zbGljZSgxKS5tYXAoKG4sIGkpID0+IChpID09PSAzID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG4pICogMjU1KSA6IHBhcnNlRmxvYXQobikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpLnJlcGxhY2UoJ05hTicsICcnKSkuam9pbignJyl9YFxuXG4gICAgY29uc3QgcmVsYXRpdmVGb250ID0gKG5vZGVPZlJlbGF0aXZpdHksIGNzc1ZhcikgPT4ge1xuICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgIGxldCBmb2xkZXJIZWlnaHQgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGVPZlJlbGF0aXZpdHkpLndpZHRoO1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlRmxvYXQoZm9sZGVySGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKSAvIDY7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHtzaXplfXB4YCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuICAgICAgICB2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2libGluZ3M7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tX3JnYmEoKSB7XG4gICAgICAgIHZhciBvID0gTWF0aC5yb3VuZCwgciA9IE1hdGgucmFuZG9tLCBzID0gMjU1O1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArICcxJyArICcpJztcbiAgICB9XG5cbiAgICByZXR1cm4geyByYW5kb21fcmdiYSwgZ2V0U2libGluZ3MsIHJlbGF0aXZlRm9udCwgcmVtb3ZlQ2hpbGRzQWZ0ZXIsIGRpc3BsYXlNb2RlLCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAsIHNtb290aFZpc2liaWxpdHksIHJnYmEyaGV4LCBnZXROb2RlV2l0aFNwYW4sIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZU5vZGUsIGFwcGVuZENoaWxkcywgc2V0VXBTcGFuLCByZW1vdmVDaGlsZHMsIGFkZENsYXNzZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRvb2xzIH0iLCJpbXBvcnQgeyBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIsIHNldFJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzJ1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlua3NPZlBhdGgnO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSAnLi9tb2RlbHMvZm9sZGVyTW9kZWxzJztcbmltcG9ydCAnLi92aWV3cy9jc3MvbWFpbi5jc3MnXG5pbXBvcnQgeyB2aWV3Um9vdFBhdGhzVGhyZWUgfSBmcm9tICcuL3ZpZXdzL25vZGVzL3BhdGhzQ29udGFpbmVycyc7XG5cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbiAgICBzZXRSZXNpemVPYnNlcnZlcnMoKTtcbiAgICB2aWV3Um9vdFBhdGhzVGhyZWUoKTtcbn1cblxuc3RhcnQoKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAwOyBpKyspIHtcbiAgICBjcmVhdGVGb2xkZXIoKTtcbiAgICBsZXQgZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyRm9sZGVycygpWzBdO1xuICAgIG9wZW5Gb2xkZXIoZm9sZGVyKVxufSIsImltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgRWxlbWVudCA9IChpZHMpID0+IHtcbiAgICBsZXQgaWQgPSBpZHM7XG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IGxpbms7XG4gICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKG5vZGUpID0+IHtcbiAgICAgICAgbGluayA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldElkLCBzZXROYW1lLCBnZXROYW1lLCBzZXRMaW5rLCBnZXRMaW5rLCBzZXRQYXJlbnQsIGdldFBhcmVudCxcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0Rm9sZGVyTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDbHVzdGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3BhdGhzQ29udGFpbmVyc1wiO1xuaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXI7XG4gICAgY29uc3Qgc2V0T3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBvcGVuZWRGb2xkZXIgPSBmb2xkZXI7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZEZvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkRm9sZGVyLCBnZXRPcGVuZWRGb2xkZXIgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IEZvbGRlciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IEVsZW1lbnQoaWQpO1xuICAgIGxldCBjbHVzdGVyID0gY3JlYXRlQ2x1c3RlcigpO1xuICAgIGNvbnN0IG5vZGUgPSBnZXRGb2xkZXJOb2RlKGlkKTtcbiAgICBsZXQgaW5uZXJGb2xkZXJzID0gW11cbiAgICBsZXQgaW5uZXJUYXNrcyA9IFtdO1xuICAgIGxldCBmb2xkZXJDb3VudCA9IDA7XG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XG5cbiAgICBjb25zdCBhZGRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gYCR7cHJvdG90eXBlLmdldElkKCl9XyR7Zm9sZGVyQ291bnR9YDtcbiAgICAgICAgc2V0Rm9sZGVyQ291bnQoKTtcbiAgICAgICAgbGV0IG5ld0ZvbGRlciA9IEZvbGRlcihuZXdJZCk7XG4gICAgICAgIGlubmVyRm9sZGVycy5wdXNoKG5ld0ZvbGRlcik7XG4gICAgICAgIHJldHVybiBuZXdGb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKCkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyID0gcHJvdG90eXBlLmdldFBhcmVudCgpLmdldElubmVyRm9sZGVycygpLmZpbHRlcigoZm9sZGVyKSA9PiBmb2xkZXIgIT09IHByb3RvdHlwZS5nZXRMaW5rKCkuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICBwcm90b3R5cGUuZ2V0UGFyZW50KCkuZ2V0Q2x1c3RlcigpLnJlbW92ZUNoaWxkKHByb3RvdHlwZS5nZXRMaW5rKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcHJvdG90eXBlLmdldFBhcmVudCgpLnNldElubmVyRm9sZGVycyhmaWx0ZXIpO1xuICAgICAgICBzZXRJbm5lckZvbGRlcnMoW10pO1xuICAgICAgICBvcGVuRm9sZGVyKHByb3RvdHlwZS5nZXRQYXJlbnQoKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5uZXJGb2xkZXJzID0gKGFycikgPT4ge1xuICAgICAgICBpbm5lckZvbGRlcnMgPSBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5uZXJGb2xkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICArK3Rhc2tDb3VudDtcbiAgICAgICAgaW5uZXJUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBpbm5lclRhc2tzID0gaW5uZXJUYXNrcy5maWx0ZXIoKGUpID0+IGUgIT09IHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lclRhc2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEZvbGRlckNvdW50ID0gKCkgPT4ge1xuICAgICAgICArK2ZvbGRlckNvdW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRhc2tDb3VudCA9ICgpID0+IHtcbiAgICAgICAgKyt0YXNrQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0NvdW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza0NvdW50O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgcmVtb3ZlVGFzaywgZ2V0VGFza0NvdW50LCBzZXRUYXNrQ291bnQsIHNldEZvbGRlckNvdW50LCBhZGRUYXNrLCBnZXRJbm5lclRhc2tzLCBhZGRGb2xkZXIsIGRlbCwgc2V0SW5uZXJGb2xkZXJzLCBnZXRJbm5lckZvbGRlcnMsIGdldENsdXN0ZXIsIGdldE5vZGUgfSk7XG59XG5cbi8qZXhwb3J0IGNvbnN0IEZvbGRlciA9IChpZHMsIGZvbGRlciA9IDApID0+IHtcbiAgICBsZXQgaWQgPSBpZHM7XG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IGxpbms7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgcGFyZW50ID0gZm9sZGVyO1xuICAgIGxldCBjbHVzdGVyID0gY3JlYXRlQ2x1c3RlcigpO1xuICAgIGNvbnN0IG5vZGUgPSBnZXRGb2xkZXJOb2RlKGlkKTtcbiAgICBsZXQgaW5uZXJGb2xkZXJzID0gW11cblxuICAgIGNvbnN0IGFkZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgJHtpZH1fJHtjb3VudH1gO1xuICAgICAgICArK2NvdW50O1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKG5ld0lkLCBmb2xkZXIpO1xuICAgICAgICBpbm5lckZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICByZXR1cm4gbmV3Rm9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlciA9IHBhcmVudC5nZXRJbm5lckZvbGRlcnMoKS5maWx0ZXIoKGZvbGRlcikgPT4gZm9sZGVyICE9PSBsaW5rLmdldEZvbGRlcigpKTtcbiAgICAgICAgc2V0SW5uZXJGb2xkZXJzKFtdKTtcbiAgICAgICAgcGFyZW50LmdldENsdXN0ZXIoKS5yZW1vdmVDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgICAgIHBhcmVudC5zZXRJbm5lckZvbGRlcnMoZmlsdGVyKTtcbiAgICAgICAgb3BlbkZvbGRlcihwYXJlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElubmVyRm9sZGVycyA9IChhcnIpID0+IHtcbiAgICAgICAgaW5uZXJGb2xkZXJzID0gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5uZXJGb2xkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFBhcmVudCA9IChuZXdQYXJlbnQpID0+IHtcbiAgICAgICAgcGFyZW50ID0gbmV3UGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBhcmVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROYW1lID0gKHZhbCkgPT4ge1xuICAgICAgICBuYW1lID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAobm9kZSkgPT4ge1xuICAgICAgICBsaW5rID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGluaztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDbHVzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRJbm5lckZvbGRlcnMsIGdldENsdXN0ZXIsIGdldExpbmssIHNldExpbmssIHNldFBhcmVudCwgZ2V0UGFyZW50LCBhZGRGb2xkZXIsIGRlbCwgZ2V0Tm9kZSwgZ2V0SW5uZXJGb2xkZXJzLCBnZXRJZCwgc2V0TmFtZSwgZ2V0TmFtZSB9O1xufSovXG5cbmV4cG9ydCBjb25zdCBSb290Rm9sZGVyID0gKCgpID0+IHtcbiAgICBsZXQgcm9vdEZvbGRlciA9IEZvbGRlcigwKTtcbiAgICBjb25zdCBnZXRSb290Rm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcm9vdEZvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Um9vdEZvbGRlciB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckFkZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZEZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpOyIsImltcG9ydCB7IGdldEZvbGRlckxpbmtOb2RlLCBnZXRUYXNrTGlua05vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzXCI7XG5cbmNvbnN0IExpbmsgPSAoaUVsZW1lbnQpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGlFbGVtZW50O1xuICAgIGxldCBuYW1lID0gZWxlbWVudC5nZXRJZCgpO1xuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgZ2V0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Tm9kZSA9IChpTm9kZSkgPT4ge1xuICAgICAgICBub2RlID0gaU5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0Tm9kZSwgZ2V0Tm9kZSwgZ2V0TmFtZSwgZ2V0RWxlbWVudCB9O1xufVxuXG5leHBvcnQgY29uc3QgRm9sZGVyTGluayA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgcHJvdG90eXBlID0gTGluayhmb2xkZXIpO1xuICAgIHByb3RvdHlwZS5zZXROb2RlKGdldEZvbGRlckxpbmtOb2RlKHByb3RvdHlwZS5nZXROYW1lKCkpKTtcbiAgICBjb25zdCBnZXRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90b3R5cGUuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldEZvbGRlciB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2tMaW5rID0gKHRhc2spID0+IHtcbiAgICBsZXQgcHJvdG90eXBlID0gTGluayh0YXNrKTtcbiAgICBwcm90b3R5cGUuc2V0Tm9kZShnZXRUYXNrTGlua05vZGUocHJvdG90eXBlLmdldE5hbWUoKSkpO1xuICAgIGNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90b3R5cGUuZ2V0RWxlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0VGFzayB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENsdXN0ZXJMaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBwcm90b3R5cGUgPSBGb2xkZXJMaW5rKGZvbGRlcik7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Q2x1c3RlciB9KTtcbn0iLCJpbXBvcnQgeyBvcGVuRm9sZGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRUYXNrXCI7XG5pbXBvcnQgeyBnZXRUYXNrTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy90YXNrXCI7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChpZCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldFRhc2tOb2RlKGlkKTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9IChlKSA9PiB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCk7XG4gICAgICAgIHBhcmVudC5yZW1vdmVUYXNrKGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmdldE5vZGUoKSk7XG4gICAgICAgIHBhcmVudC5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQoZS5nZXRMaW5rKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgb3BlbkZvbGRlcihwYXJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZGVsLCBnZXROb2RlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkVGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZFRhc2soKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTsiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LCB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZEZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3RlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVUYXNrU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5KCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVUYXNrJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHRhc2ssIGdldFN2Z0luV3JhcHBlcigpLCBuYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0U3ZnSW5XcmFwcGVyID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JDbG9zZUZvbGRlckFzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdiYWNrJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCkpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJOb2RlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gZm9sZGVyTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBmb2xkZXJOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZm9sZGVyJywgaWQpO1xuICAgIGNvbnN0IG5hbWUgPSBUb29scy5nZXROb2RlV2l0aFNwYW4oJ2RpdicsIGBuYW1lOiAke2lkfWAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0V3JhcHBlckljb24oaWQpLCBuYW1lKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi9CdXR0b25Gb3JBZGRUYXNrXCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5leHBvcnQgY29uc3Qgdmlld0VsZW1lbnQgPSAobm9kZSwgZmxhZyA9ICdmb2xkZXInKSA9PiB7XG4gICAgY29uc29sZS5sb2coZmxhZylcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgbGV0IGlubmVyVGFza3MgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0SW5uZXJUYXNrcygpO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5vcGVuKG5vZGUsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG4gICAgaWYgKGZsYWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICd0YXNrJykge1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShub2RlLCBjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfSBlbHNlIGlmIChmbGFnID09PSAnZm9sZGVyJykge1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSBpbm5lclRhc2tzLmxlbmd0aCA+IDAgPyBpbm5lclRhc2tzLmF0KDApLmdldE5vZGUoKSA6IGNvbnRlbnQubGFzdENoaWxkO1xuICAgICAgICBjb25zb2xlLmxvZyhsYXN0Tm9kZSlcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgbGFzdE5vZGUpO1xuICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ2FkZCcpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saW5rc09mUGF0aFwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCJcbmltcG9ydCB7IFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1Jvb3RQYXRoc1RocmVlID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0TGluaygpO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcwLjN2aCAjMzZiYjM2IHNvbGlkJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhdGhzU2lkZUJhciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aC1jb250YWluZXInKTtcbiAgICBUb29scy5hZGRDbGFzc2VzKGNvbnRhaW5lciwgJ29wZW4nKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBnZXRUZW1wbGF0ZUxpbmtOb2RlID0gKG5hbWUsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlV3JhcHBlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLXdyYXBwZXInKTtcbiAgICBjb25zdCBsaW5rQm9keSA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLWJvZHknKTtcbiAgICBjb25zdCBub2RlTGluayA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYCR7bmFtZX1gLCAnbGluaycpO1xuICAgIGNvbnN0IGRlbCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdkZWxldGUtbGluaycpO1xuICAgIGRlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMobGlua0JvZHksIG5vZGUsIG5vZGVMaW5rLCBkZWwpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhub2RlV3JhcHBlciwgbGlua0JvZHkpO1xuICAgIGxldCBjb2xvciA9IFRvb2xzLnJhbmRvbV9yZ2JhKCk7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyTGVmdCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbiAgICBzZXRCb3JkZXJDb2xvcihub2RlV3JhcHBlcik7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5jb25zdCBzZXRCb3JkZXJDb2xvciA9IChub2RlKSA9PiB7XG4gICAgbGV0IGNvbG9yID0gVG9vbHMucmFuZG9tX3JnYmEoKTtcbiAgICBub2RlLnN0eWxlLmJvcmRlckxlZnQgPSBgMC4zdmggJHtjb2xvcn0gc29saWRgO1xuICAgIG5vZGUuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlckxpbmtOb2RlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZUxpbmtOb2RlKGBcXFxcJHtuYW1lfWAsIGZvckZvbGRlcigpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrTGlua05vZGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlTGlua05vZGUobmFtZSwgZm9yVGFzaygpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmNvbnN0IGZvckZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnY2xvc2UtY2x1c3RlcicpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBnZXROb2RlQXJyb3dSaWdodCgpO1xuICAgIGNsb3NlQ2x1c3Rlci5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0KTtcbiAgICByZXR1cm4gY2xvc2VDbHVzdGVyO1xufVxuXG5jb25zdCBmb3JUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tQcmV2aWV3ID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2stcHJldmlldycpO1xuICAgIGNvbnN0IHRhc2tJY29uID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICB0YXNrUHJldmlldy5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG4gICAgcmV0dXJuIHRhc2tQcmV2aWV3O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza1N2ZyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bicpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd1JpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rQ2ZnID0gKGxpbmssIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJmRm9yTGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsdXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdwYXRocy1jbHVzdGVyJyk7XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza05vZGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gdGFza05vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IHRhc2tOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2snLCBpZCk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYG5hbWU6ICR7aWR9YCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHModGFzaywgZ2V0V3JhcHBlckljb24oaWQpLCBuYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=