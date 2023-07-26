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
    border-radius: 1vh 0 0 1vh;
}

.delete-link,
.task-link-svg {
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

.content>.opened-task {
    display: grid;
    grid-area: folders;
    background-color: white;
    z-index: 100;
    visibility: visible;
}

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

.opened-task {
    display: none;
    grid-template-rows: min-content 1fr;
    padding: 10vh;
    gap: 5vh;
}

.template-input {
    display: none;
}

.template-task {
    display: none;
}

.task-header>.task-input {
    outline: none;
}

.task-body>.task-input {
    display: flex;
    height: min-content;
    outline: none;
}

.task-input::placeholder {
    opacity: 0.5;
}

.title {
    font-size: 3rem;
}

.task-header {
   
}

.task-body {
    
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

}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: min(2vh, var(--font-size-to-folder));\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-areas: 'paths folders';\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    overflow: hidden;\n    cursor: pointer;\n    width: inherit;\n    min-width: 100%;\n}\n\n.link-body {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n\n}\n\n.link {\n    display: flex;\n    align-items: center;\n    border-radius: 1vh 0 0 1vh;\n}\n\n.delete-link,\n.task-link-svg {\n    display: flex;\n    justify-content: end;\n    width: 3vh;\n    height: 100%;\n}\n\n.delete-link :hover {\n    display: flex;\n    justify-content: center;\n    background-color: red;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: 100%;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n.content>.opened-task {\n    display: grid;\n    grid-area: folders;\n    background-color: white;\n    z-index: 100;\n    visibility: visible;\n}\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    padding: 1vh;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.opened-task {\n    display: none;\n    grid-template-rows: min-content 1fr;\n    padding: 10vh;\n    gap: 5vh;\n}\n\n.template-input {\n    display: none;\n}\n\n.template-task {\n    display: none;\n}\n\n.task-header>.task-input {\n    outline: none;\n}\n\n.task-body>.task-input {\n    display: flex;\n    height: min-content;\n    outline: none;\n}\n\n.task-input::placeholder {\n    opacity: 0.5;\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.task-header {\n   \n}\n\n.task-body {\n    \n}\n\n\n.folder,\n.task,\n.templateFolder,\n.templateTask,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.icon-wrapper>.templateTaskSvg,\n.icon-wrapper>.taskSvg {\n    display: flex;\n    max-width: inherit;\n    max-height: inherit;\n    align-self: center;\n    align-items: center;\n    justify-self: center;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n.templateTask:hover {\n    animation-fill-mode: forwards;\n    animation: 5s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 536px) {\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: flex;\n        justify-self: end;\n        width: max-content;\n    }\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/controllers/commonControllers.js":
/*!**********************************************!*\
  !*** ./src/controllers/commonControllers.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createButtonToAddFolder: () => (/* binding */ createButtonToAddFolder),
/* harmony export */   createButtonToAddTask: () => (/* binding */ createButtonToAddTask),
/* harmony export */   createButtonToCloseFolder: () => (/* binding */ createButtonToCloseFolder),
/* harmony export */   createButtons: () => (/* binding */ createButtons),
/* harmony export */   viewElements: () => (/* binding */ viewElements)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");








const createButtonToAddFolder = () => {
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.ButtonForAddFolder.getNode(), 'add').forOldElement();
}

const createButtonToCloseFolder = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.ButtonForCloseFolder.getNode(), 'close').forOldElement();
}

const createButtonToAddTask = () => {
    ;(0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.ButtonForAddTask.getNode(), 'add').forOldElement();
}


const createButtons = () => {
    createButtonToCloseFolder();
    createButtonToAddFolder();
    createButtonToAddTask();
}

const setButtonsListeners = () => {
    ;(0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToAddTask(_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.ButtonForAddTask);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.ButtonForCloseFolder);
};

const viewElements = (elements) => {
    for (let element of elements) {
        const node = element.getNode();
        (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(node).forOldElement();
    }
}

const startConfig = (() => {
    let rootFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder();
    rootFolder.setParent(rootFolder);
    rootFolder.setLink((0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.ClusterLink)(rootFolder));
    _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.setOpenedFolder(rootFolder);
    createButtons();
    setButtonsListeners();
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_5__.openCluster)(rootFolder.getLink());
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_4__.viewLinkOpenedFolder)(rootFolder);
})();

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
/* harmony export */   setResizeObservers: () => (/* binding */ setResizeObservers)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _commonControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonControllers */ "./src/controllers/commonControllers.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskControllers */ "./src/controllers/taskControllers.js");










const openFolder = (folder) => {
    (0,_taskControllers__WEBPACK_IMPORTED_MODULE_8__.hiddenOpenedTask)();
    _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask()
    clearFoldersContainer();
    (0,_commonControllers__WEBPACK_IMPORTED_MODULE_5__.createButtons)();
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_4__.viewLinkOpenedFolder)(folder);
    (0,_commonControllers__WEBPACK_IMPORTED_MODULE_5__.viewElements)(folder.getInnerFolders());
    (0,_commonControllers__WEBPACK_IMPORTED_MODULE_5__.viewElements)(folder.getInnerTasks());
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_6__.openClusterWhenAddingFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
}

const clearFoldersContainer = () => {
    let folders = document.querySelector('.folders');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(folders);
}

const createFolder = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder()) => {
    let newFolder = folder.addFolder();
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(newFolder.getNode()).forNewElement();
    (0,_listeners__WEBPACK_IMPORTED_MODULE_7__.setListeners)().forFolder(newFolder);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_6__.addLinkToPath)(newFolder);
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

/***/ }),

/***/ "./src/controllers/linksControllers.js":
/*!*********************************************!*\
  !*** ./src/controllers/linksControllers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLinkToPath: () => (/* binding */ addLinkToPath),
/* harmony export */   closeCluster: () => (/* binding */ closeCluster),
/* harmony export */   getCustomLink: () => (/* binding */ getCustomLink),
/* harmony export */   openCluster: () => (/* binding */ openCluster),
/* harmony export */   openClusterWhenAddingFolder: () => (/* binding */ openClusterWhenAddingFolder),
/* harmony export */   setListenerfForLink: () => (/* binding */ setListenerfForLink)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");





const closeCluster = (link) => {
    let cluster = link.getCluster();
    switchCloseButtonSvg(link, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowRight)());
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

const openCluster = (link) => {
    let cluster = link.getCluster();
    switchCloseButtonSvg(link, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowDown)());
    cluster.style.display = 'grid';
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

const setListenerfForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forLink(link);
    if (clusterClose !== null) {
        (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToClusterPaths(clusterClose, link);
    }
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToDeleteLink(link);
}

const switchCloseButtonSvg = (link, child) => {
    let close = link.getNode().querySelector('.close-cluster');
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(close);
    close.appendChild(child);
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

const addLinkToPath = (element, type = 'folder') => {
    let link = type === 'folder' ? getCustomLink(element) : (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.TaskLink)(element);
    setListenerfForLink(link);
    element.setLink(link);
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.viewLink)(link);
}

const getCustomLink = (folder) => {
    const link = (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.ClusterLink)(folder);
    link.getCluster().style.display = 'none';
    link.getNode().appendChild(link.getCluster());
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
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskControllers */ "./src/controllers/taskControllers.js");






const setListeners = () => {
    const forFolder = (folder) => {
        let node = folder.getNode();
        const clickFolder = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(folder);
        });
    }

    const forTask = (task) => {
        let node = task.getNode();
        const clickTask = node.addEventListener('dblclick', e => {
            (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.openTask)(task);
        });
    }

    const forButtonToAddFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.createFolder)();
        });
    }

    const forButtonToAddTask = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.createTask)();
        });
    }

    const forButtonToCloseFolder = (button) => {
        let node = button.getNode();
        const clickButton = node.addEventListener('dblclick', e => {
            let openedFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder();
            (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(openedFolder.getParent());
        });
    }

    const forLink = (link) => {
        let color;
        let node = link.getNode().querySelector('.link');
        const clickNode = node.addEventListener('click', e => {
            e.stopPropagation();
            try {
                (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(link.getFolder());
            } catch {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.openTask)(link.getTask());
            }
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
                (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.openCluster)(link);
            } else {
                (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.closeCluster)(link);
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

    const forTitleInput = (input, content) => {
        let container = content.querySelector('.task-body');
        const pressKeys = input.addEventListener('keyup', e => {
            e.preventDefault();

            if (e.keyCode === 13) {
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().getNewInput();
                container.insertBefore(newInput, container.firstChild);
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().activateInput(newInput);
                forInput(newInput);
            }

            if (e.keyCode === 40) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().setNextinput();
            }
        })
    }

    const forInput = (input) => {
        let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
        task.setInput(input);
        const pressKeysUp = input.addEventListener('keyup', e => {
            e.preventDefault();
            if (e.keyCode === 13) {
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().getNewInput();
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().viewNewInput(input, newInput);
                forInput(newInput);
            }
        })

        const pressKeysDown = input.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                if (input.value === '') {
                    (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().removeInput();
                }
            }

            if (e.keyCode === 38) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().setPreviousInput();
            }

            if (e.keyCode === 40) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().setNextinput();
            }
        })

        const leftClick = input.addEventListener('click', e => {
            ;(0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().activateInput(input);
        })
    }

    return { forTitleInput, forTask, forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLink, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}

/***/ }),

/***/ "./src/controllers/taskControllers.js":
/*!********************************************!*\
  !*** ./src/controllers/taskControllers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   hiddenOpenedTask: () => (/* binding */ hiddenOpenedTask),
/* harmony export */   openTask: () => (/* binding */ openTask),
/* harmony export */   removeOpenedTask: () => (/* binding */ removeOpenedTask),
/* harmony export */   taskContentHandler: () => (/* binding */ taskContentHandler),
/* harmony export */   visibleOpenedTask: () => (/* binding */ visibleOpenedTask)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");







const taskContentHandler = () => {
    let count = 0;
    let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
    let content = task.getContent();
    let container = content.querySelector('.task-body');

    const getNewInput = () => {
        let input = document.querySelector('.template-input').cloneNode();
        input.className = 'task-input';
        return input;
    }

    const viewNewInput = (input, newInput) => {
        input.parentNode.insertBefore(newInput, input.nextSibling);
        activateInput(newInput);
    }

    const activateInput = (input) => {
        _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedInput.setOpenedInput(input);
    }

    const getData = () => {
        const input = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedInput.getOpenedInput();
        let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
        let content = task.getContent();
        let container = content.querySelector('.task-body');
        const inputs = task.getInputs();
        const index = inputs.indexOf(input);
        return { input, task, content, container, inputs, index };
    }

    const setPreviousInput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index - 1];
        activateInput(oldInput);
    }

    const setNextinput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index + 1];
        activateInput(oldInput);
    }

    const removeInput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index - 1];
        data.task.removeInput(data.input);
        data.container.removeChild(data.input);
        setTimeout(() => {
            activateInput(oldInput);
        }, 1);
    }

    return { setNextinput, setPreviousInput, removeInput, getNewInput, viewNewInput, activateInput };
}

const openTask = (task) => {
    let content = document.querySelector('.content');
    removeOpenedTask();
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_3__.viewLinkOpenedTask)(task);
    visibleOpenedTask();
    content.appendChild(task.getContent());
    const input = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask().getContent().querySelector('.task-input');
    input.style.border = '1px red solid'
    //setListeners().forTitleInput(input);
}

const removeOpenedTask = () => {
    let content = document.querySelector('.content');
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        content.removeChild(openedTask.getContent());
    }
}

const hiddenOpenedTask = () => {
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'hidden';
    }
}

const visibleOpenedTask = () => {
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'visible';
    }
}

const createTask = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_1__.Task)(taskId);
    folder.addTask(task);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forTask(task);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_4__.addLinkToPath)(task, 'task');
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_2__.viewElement)(task.getNode(), 'task').forNewElement();
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
/* harmony import */ var _controllers_linksControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/nodes/links */ "./src/views/nodes/links.js");






const start = () => {
    const rootFolder = _models_folderModels__WEBPACK_IMPORTED_MODULE_2__.RootFolder.getRootFolder();
    (0,_controllers_linksControllers__WEBPACK_IMPORTED_MODULE_1__.setListenerfForLink)(rootFolder.getLink());
    (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.setResizeObservers)();
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_4__.viewRootPathsThree)();
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
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
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
    let cluster = (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_3__.createCluster)();
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
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   TaskLink: () => (/* binding */ TaskLink)
/* harmony export */ });
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");


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
    let type = 'folder';
    let prototype = Link(folder);
    prototype.setNode((0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_0__.getFolderLinkNode)(prototype.getName()));
    const getFolder = () => {
        return prototype.getElement();
    }
    const getType = () => {
        return type;
    }
    return Object.assign({}, prototype, { getFolder, getType });
}

const TaskLink = (task) => {
    let type = 'task';
    let prototype = Link(task);
    prototype.setNode((0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_0__.getTaskLinkNode)(prototype.getName()));
    const getTask = () => {
        return prototype.getElement();
    }
    const getType = () => {
        return type;
    }
    return Object.assign({}, prototype, { getTask, getType });
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
/* harmony export */   OpenedInput: () => (/* binding */ OpenedInput),
/* harmony export */   OpenedTask: () => (/* binding */ OpenedTask),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/ButtonForAddTask */ "./src/views/nodes/ButtonForAddTask.js");
/* harmony import */ var _views_nodes_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/task */ "./src/views/nodes/task.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element */ "./src/models/element.js");
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");








const OpenedTask = (() => {
    let openedTask;
    const setOpenedTask = (task) => {
        openedTask = task;
    }
    const getOpenedTask = () => {
        return openedTask;
    }

    return { setOpenedTask, getOpenedTask }
})();

const OpenedInput = (() => {
    let openedInput = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('input', 'plug');

    const setOpenedInput = (input) => {
        disableInput();
        openedInput = input;
        activateInput();
    }
    const getOpenedInput = () => {
        return openedInput;
    }

    const activateInput = () => {
        openedInput.placeholder = 'Add comment...';
        openedInput.focus();
    }

    const disableInput = () => {
        openedInput.placeholder = '';
    }
    return { setOpenedInput, getOpenedInput }
})();

const Task = (id) => {
    const prototype = (0,_element__WEBPACK_IMPORTED_MODULE_5__.Element)(id);
    const node = (0,_views_nodes_task__WEBPACK_IMPORTED_MODULE_4__.getTaskNode)(id);
    let inputs = [];

    const getNode = () => {
        return node;
    }

    const setInput = (input) => {
        inputs.push(input);
    }

    const removeInput = (input) => {
        inputs = inputs.filter((e) => e !== input);
    }

    const getInputs = () => {
        return inputs;
    }

    const setContent = () => {
        const content = document.querySelector('.template-task').cloneNode(true);
        content.className = 'opened-task';
        setTitleInput(content);
        return content;
    };

    const setTitleInput = (content) => {
        const input = content.querySelector('.task-input');
        setInput(input);
        (0,_controllers_listeners__WEBPACK_IMPORTED_MODULE_1__.setListeners)().forTitleInput(input, content);
    }

    const content = setContent();

    const getContent = () => {
        return content;
    }

    const del = (e) => {
        let parent = _folderModels__WEBPACK_IMPORTED_MODULE_6__.OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(parent);
    }

    return Object.assign({}, prototype, { getInputs, setInput, removeInput, getContent, del, getNode });
}

const ButtonForAddTask = (() => {
    const node = (0,_views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_3__.getButtonForAddTask)();
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
    let content = document.querySelector('.folders');
    let innerTasks = _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder().getInnerTasks();
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(node, 0, 1, 500, 'forwards');

    const forOldElement = () => {
        content.insertBefore(node, content.lastChild);
    }

    const forNewElement = () => {
        if (flag === 'task') {
            content.insertBefore(node, content.lastChild);
        } else if (flag === 'folder') {
            let lastNode = innerTasks.length > 0 ? innerTasks.at(0).getNode() : content.lastChild;
            content.insertBefore(node, lastNode);
        }
    }

    return { forNewElement, forOldElement };
}


/***/ }),

/***/ "./src/views/nodes/links.js":
/*!**********************************!*\
  !*** ./src/views/nodes/links.js ***!
  \**********************************/
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
/* harmony export */   viewLink: () => (/* binding */ viewLink),
/* harmony export */   viewLinkOpenedFolder: () => (/* binding */ viewLinkOpenedFolder),
/* harmony export */   viewLinkOpenedTask: () => (/* binding */ viewLinkOpenedTask),
/* harmony export */   viewRootPathsThree: () => (/* binding */ viewRootPathsThree)
/* harmony export */ });
/* harmony import */ var _controllers_linksControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/taskModels */ "./src/models/taskModels.js");






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
    const taskIcon = getTaskSvg();
    taskPreview.appendChild(taskIcon);
    return taskPreview;
}

const getTaskSvg = () => {
    return document.querySelector('.task-link-svg').cloneNode(true);
}

const getNodeArrowDown = () => {
    return document.querySelector('.arrow-down').cloneNode(true);
}

const getNodeArrowRight = () => {
    return document.querySelector('.arrow-right').cloneNode(true);
}

const linkCfg = (link, folder) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_controllers_linksControllers__WEBPACK_IMPORTED_MODULE_0__.setListenerfForLink)(link);
}

const createCluster = () => {
    const cluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'paths-cluster');
    return cluster;
}

const viewLink = (link) => {
    let container = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder().getCluster();
    let innerTasks = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder().getInnerTasks();
    container.style.paddingLeft += '1vh';
    if (innerTasks.length > 0 && link.getType() === 'folder') {
        let lastNode = innerTasks.at(0).getLink().getNode();
        container.insertBefore(link.getNode(), lastNode);
    } else {
        container.appendChild(link.getNode());
    }
    (0,_controllers_linksControllers__WEBPACK_IMPORTED_MODULE_0__.openClusterWhenAddingFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder());
}

const viewLinkOpenedFolder = (folder) => {
    let openedFolderLink = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder().getLink().getNode();
    openedFolderLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    folder.getLink().getNode().querySelector('.link').style.backgroundColor = '#60d0e4';
    _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.setOpenedFolder(folder);
}

const viewLinkOpenedTask = (task) => {
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_4__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        let openedTaskLink = _models_taskModels__WEBPACK_IMPORTED_MODULE_4__.OpenedTask.getOpenedTask().getLink().getNode();
        openedTaskLink.querySelector('.link').style.backgroundColor = '#e9f5e9';
    }
    task.getLink().getNode().querySelector('.link').style.backgroundColor = '#ffe5b6';
    _models_taskModels__WEBPACK_IMPORTED_MODULE_4__.OpenedTask.setOpenedTask(task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLDJGQUEyRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLE1BQU0sT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFB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QUFLLGlDQUFpQyxHQUFHO0FBQzFELElBQUksZ0RBQUs7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3M/MjJhYiIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9jb21tb25Db250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saW5rc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvaGVscGVyL3Rvb2xzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9mb2xkZXJNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9saW5rT2ZQYXRoLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvdGFza01vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2xpbmtzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGdhcDogMXZoO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyZDRiMjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5jaGFpbi1mb2xkZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcikpO1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuXG59XG5cbi5wYXRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLm5hbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xuXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG5cbn1cblxuLmxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxdmggMCAwIDF2aDtcbn1cblxuLmRlbGV0ZS1saW5rLFxuLnRhc2stbGluay1zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgd2lkdGg6IDN2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kZWxldGUtbGluayA6aG92ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2xvc2UtY2x1c3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcbn1cblxuLmNvbnRlbnQ+Lm9wZW5lZC10YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogZm9sZGVycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZvbGRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XG59XG5cbi5vcGVuZWQtdGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBwYWRkaW5nOiAxMHZoO1xuICAgIGdhcDogNXZoO1xufVxuXG4udGVtcGxhdGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZW1wbGF0ZS10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1oZWFkZXI+LnRhc2staW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi50YXNrLWJvZHk+LnRhc2staW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50YXNrLWhlYWRlciB7XG4gICBcbn1cblxuLnRhc2stYm9keSB7XG4gICAgXG59XG5cblxuLmZvbGRlcixcbi50YXNrLFxuLnRlbXBsYXRlRm9sZGVyLFxuLnRlbXBsYXRlVGFzayxcbi5iYWNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjZW50ZXInO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pY29uLXdyYXBwZXI+c3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNTBweDtcbn1cblxuLmljb24td3JhcHBlcj4udGVtcGxhdGVUYXNrU3ZnLFxuLmljb24td3JhcHBlcj4udGFza1N2ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLm5hbWUge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxuLmNoYWluLWZvbGRlcnMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChzYWZhcmksIGNocm9tZSkgYnJvd3NlcnMgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIElFMTArICovXG59XG5cbi53cmFwcGVyPi5mb2xkZXJTdmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XG59XG5cbi50ZW1wbGF0ZVRhc2s6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XG59XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSBhbmQgKG1pbi13aWR0aDogNTM2cHgpIHtcblxuICAgIC5wYXRocy1jb250YWluZXIge1xuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogOTN2aDtcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICB9XG5cbiAgICAucGF0aHMtY2x1c3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTs7O0lBR0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrREFBa0Q7O0FBRXREOztBQUVBO0lB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ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGdhcDogMXZoO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXgtd2lkdGg6IDcwdnc7XFxuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcikpO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxufVxcblxcbi5wYXRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi5uYW1lOjotd2Via2l0LXNjcm9sbGJhcixcXG4uZm9sZGVyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBoZWlnaHQ6IG1pbigxdmgsIDEwdncpO1xcblxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpbmstd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpbmstYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xcblxcbn1cXG5cXG4ubGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2aCAwIDAgMXZoO1xcbn1cXG5cXG4uZGVsZXRlLWxpbmssXFxuLnRhc2stbGluay1zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLWxpbmsgOmhvdmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMnZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcXG59XFxuXFxuLmNvbnRlbnQ+Lm9wZW5lZC10YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9sZGVycyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZm9sZGVycztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBoZWlnaHQ6IDkzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XFxufVxcblxcbi5vcGVuZWQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBwYWRkaW5nOiAxMHZoO1xcbiAgICBnYXA6IDV2aDtcXG59XFxuXFxuLnRlbXBsYXRlLWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRlbXBsYXRlLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1oZWFkZXI+LnRhc2staW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1ib2R5Pi50YXNrLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2staW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgXFxufVxcblxcbi50YXNrLWJvZHkge1xcbiAgICBcXG59XFxuXFxuXFxuLmZvbGRlcixcXG4udGFzayxcXG4udGVtcGxhdGVGb2xkZXIsXFxuLnRlbXBsYXRlVGFzayxcXG4uYmFjayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnY2VudGVyJztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24td3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4uaWNvbi13cmFwcGVyPnN2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMHZoO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG59XFxuXFxuLmljb24td3JhcHBlcj4udGVtcGxhdGVUYXNrU3ZnLFxcbi5pY29uLXdyYXBwZXI+LnRhc2tTdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJRTEwKyAqL1xcbn1cXG5cXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuLnRlbXBsYXRlVGFzazpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHt9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkgYW5kIChtaW4td2lkdGg6IDUzNnB4KSB7XFxuXFxuICAgIC5wYXRocy1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBwYXRocztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jbHVzdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBDbHVzdGVyTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgdmlld0xpbmtPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JBZGRGb2xkZXIuZ2V0Tm9kZSgpLCAnYWRkJykuZm9yT2xkRWxlbWVudCgpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JDbG9zZUZvbGRlci5nZXROb2RlKCksICdjbG9zZScpLmZvck9sZEVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvblRvQWRkVGFzayA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JBZGRUYXNrLmdldE5vZGUoKSwgJ2FkZCcpLmZvck9sZEVsZW1lbnQoKTtcbn1cblxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjcmVhdGVCdXR0b25Ub0Nsb3NlRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9BZGRGb2xkZXIoKTtcbiAgICBjcmVhdGVCdXR0b25Ub0FkZFRhc2soKTtcbn1cblxuY29uc3Qgc2V0QnV0dG9uc0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0FkZEZvbGRlcihCdXR0b25Gb3JBZGRGb2xkZXIpO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQWRkVGFzayhCdXR0b25Gb3JBZGRUYXNrKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0Nsb3NlRm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyKTtcbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IHtcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBlbGVtZW50LmdldE5vZGUoKTtcbiAgICAgICAgdmlld0VsZW1lbnQobm9kZSkuZm9yT2xkRWxlbWVudCgpO1xuICAgIH1cbn1cblxuY29uc3Qgc3RhcnRDb25maWcgPSAoKCkgPT4ge1xuICAgIGxldCByb290Rm9sZGVyID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCk7XG4gICAgcm9vdEZvbGRlci5zZXRQYXJlbnQocm9vdEZvbGRlcik7XG4gICAgcm9vdEZvbGRlci5zZXRMaW5rKENsdXN0ZXJMaW5rKHJvb3RGb2xkZXIpKTtcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKHJvb3RGb2xkZXIpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICBzZXRCdXR0b25zTGlzdGVuZXJzKCk7XG4gICAgb3BlbkNsdXN0ZXIocm9vdEZvbGRlci5nZXRMaW5rKCkpO1xuICAgIHZpZXdMaW5rT3BlbmVkRm9sZGVyKHJvb3RGb2xkZXIpO1xufSkoKTsiLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBPcGVuZWRUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucywgdmlld0VsZW1lbnRzIH0gZnJvbSBcIi4vY29tbW9uQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciwgYWRkTGlua1RvUGF0aCB9IGZyb20gXCIuL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgaGlkZGVuT3BlbmVkVGFzayB9IGZyb20gXCIuL3Rhc2tDb250cm9sbGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBoaWRkZW5PcGVuZWRUYXNrKCk7XG4gICAgT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKClcbiAgICBjbGVhckZvbGRlcnNDb250YWluZXIoKTtcbiAgICBjcmVhdGVCdXR0b25zKCk7XG4gICAgdmlld0xpbmtPcGVuZWRGb2xkZXIoZm9sZGVyKTtcbiAgICB2aWV3RWxlbWVudHMoZm9sZGVyLmdldElubmVyRm9sZGVycygpKTtcbiAgICB2aWV3RWxlbWVudHMoZm9sZGVyLmdldElubmVyVGFza3MoKSk7XG4gICAgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyKE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSk7XG59XG5cbmNvbnN0IGNsZWFyRm9sZGVyc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVyID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCBuZXdGb2xkZXIgPSBmb2xkZXIuYWRkRm9sZGVyKCk7XG4gICAgdmlld0VsZW1lbnQobmV3Rm9sZGVyLmdldE5vZGUoKSkuZm9yTmV3RWxlbWVudCgpO1xuICAgIHNldExpc3RlbmVycygpLmZvckZvbGRlcihuZXdGb2xkZXIpO1xuICAgIGFkZExpbmtUb1BhdGgobmV3Rm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlc2l6ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZUZvbGRlcicpO1xuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGUgPT4ge1xuICAgICAgICBzZXRGb250U2l6ZVRvRm9sZGVycyh0ZW1wbGF0ZSk7XG4gICAgfSlcblxuICAgIHJvLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJykpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udFNpemVUb0ZvbGRlcnMgPSAodGVtcGxhdGUpID0+IHtcbiAgICBUb29scy5yZWxhdGl2ZUZvbnQodGVtcGxhdGUsICctLWZvbnQtc2l6ZS10by1mb2xkZXInKTtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IENsdXN0ZXJMaW5rLCBUYXNrTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgZ2V0Tm9kZUFycm93RG93biwgZ2V0Tm9kZUFycm93UmlnaHQsIHZpZXdMaW5rIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2xpbmtzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IGNsb3NlQ2x1c3RlciA9IChsaW5rKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBsaW5rLmdldENsdXN0ZXIoKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhsaW5rLCBnZXROb2RlQXJyb3dSaWdodCgpKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkuY2xvc2UoY2x1c3RlciwgMSwgMCwgMjAwLCAnZm9yd2FyZHMnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2x1c3Rlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDIwMCk7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuQ2x1c3RlciA9IChsaW5rKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBsaW5rLmdldENsdXN0ZXIoKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhsaW5rLCBnZXROb2RlQXJyb3dEb3duKCkpO1xuICAgIGNsdXN0ZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3BlbihjbHVzdGVyLCAwLCAxLCAyMDAsICdmb3J3YXJkcycpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0TGlzdGVuZXJmRm9yTGluayA9IChsaW5rKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JMaW5rKGxpbmspO1xuICAgIGlmIChjbHVzdGVyQ2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMoY2x1c3RlckNsb3NlLCBsaW5rKTtcbiAgICB9XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9EZWxldGVMaW5rKGxpbmspO1xufVxuXG5jb25zdCBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyA9IChsaW5rLCBjaGlsZCkgPT4ge1xuICAgIGxldCBjbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGNsb3NlKTtcbiAgICBjbG9zZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpbmtUb1BhdGggPSAoZWxlbWVudCwgdHlwZSA9ICdmb2xkZXInKSA9PiB7XG4gICAgbGV0IGxpbmsgPSB0eXBlID09PSAnZm9sZGVyJyA/IGdldEN1c3RvbUxpbmsoZWxlbWVudCkgOiBUYXNrTGluayhlbGVtZW50KTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKGxpbmspO1xuICAgIGVsZW1lbnQuc2V0TGluayhsaW5rKTtcbiAgICB2aWV3TGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbUxpbmsgPSAoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgbGluayA9IENsdXN0ZXJMaW5rKGZvbGRlcik7XG4gICAgbGluay5nZXRDbHVzdGVyKCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgcmV0dXJuIGxpbms7XG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZElucHV0LCBPcGVuZWRUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGNsb3NlQ2x1c3Rlciwgb3BlbkNsdXN0ZXIgfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBvcGVuVGFzaywgdGFza0NvbnRlbnRIYW5kbGVyIH0gZnJvbSBcIi4vdGFza0NvbnRyb2xsZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9yRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGZvbGRlci5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrRm9sZGVyID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgb3BlbkZvbGRlcihmb2xkZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSB0YXNrLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tUYXNrID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgb3BlblRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkVGFzayA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBvcGVuZWRGb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCk7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKG9wZW5lZEZvbGRlci5nZXRQYXJlbnQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckxpbmsgPSAobGluaykgPT4ge1xuICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgIGxldCBub2RlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb3BlbkZvbGRlcihsaW5rLmdldEZvbGRlcigpKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIG9wZW5UYXNrKGxpbmsuZ2V0VGFzaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU92ZXJOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb2xvciA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljZmQ5Yyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU91dE5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMgPSAobm9kZSwgbGluaykgPT4ge1xuICAgICAgICBsZXQgZmxhZztcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZmxhZyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobGluay5nZXRDbHVzdGVyKCkpLmRpc3BsYXk7XG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgb3BlbkNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb3NlQ2x1c3RlcihsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IGNsb3NlIH07XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9EZWxldGVMaW5rID0gKGxpbmspID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGxpbmsuZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINC/0LDQv9C60YMg0Lgg0LLRgdGRINC10LUg0YHQvtC00LXRgNC20LjQvNC+0LU/JykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRlbChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZm9yVGl0bGVJbnB1dCA9IChpbnB1dCwgY29udGVudCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IHByZXNzS2V5cyA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0lucHV0ID0gdGFza0NvbnRlbnRIYW5kbGVyKCkuZ2V0TmV3SW5wdXQoKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0lucHV0LCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuYWN0aXZhdGVJbnB1dChuZXdJbnB1dCk7XG4gICAgICAgICAgICAgICAgZm9ySW5wdXQobmV3SW5wdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnNldE5leHRpbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvcklucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGxldCB0YXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgICAgIHRhc2suc2V0SW5wdXQoaW5wdXQpO1xuICAgICAgICBjb25zdCBwcmVzc0tleXNVcCA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGxldCBuZXdJbnB1dCA9IHRhc2tDb250ZW50SGFuZGxlcigpLmdldE5ld0lucHV0KCk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkudmlld05ld0lucHV0KGlucHV0LCBuZXdJbnB1dCk7XG4gICAgICAgICAgICAgICAgZm9ySW5wdXQobmV3SW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByZXNzS2V5c0Rvd24gPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5yZW1vdmVJbnB1dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5zZXRQcmV2aW91c0lucHV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuc2V0TmV4dGlucHV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGVmdENsaWNrID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLmFjdGl2YXRlSW5wdXQoaW5wdXQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGZvclRpdGxlSW5wdXQsIGZvclRhc2ssIGZvckJ1dHRvblRvQWRkVGFzaywgZm9yQnV0dG9uVG9EZWxldGVMaW5rLCBmb3JCdXR0b25Ub0NsdXN0ZXJQYXRocywgZm9yTGluaywgZm9yRm9sZGVyLCBmb3JCdXR0b25Ub0FkZEZvbGRlciwgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciB9XG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZElucHV0LCBPcGVuZWRUYXNrLCBUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZFRhc2sgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IGFkZExpbmtUb1BhdGggfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IHRhc2tDb250ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCB0YXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgbGV0IGNvbnRlbnQgPSB0YXNrLmdldENvbnRlbnQoKTtcbiAgICBsZXQgY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG5cbiAgICBjb25zdCBnZXROZXdJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLWlucHV0JykuY2xvbmVOb2RlKCk7XG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHZpZXdOZXdJbnB1dCA9IChpbnB1dCwgbmV3SW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3SW5wdXQsIGlucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgYWN0aXZhdGVJbnB1dChuZXdJbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBPcGVuZWRJbnB1dC5zZXRPcGVuZWRJbnB1dChpbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBPcGVuZWRJbnB1dC5nZXRPcGVuZWRJbnB1dCgpO1xuICAgICAgICBsZXQgdGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgICAgICBsZXQgY29udGVudCA9IHRhc2suZ2V0Q29udGVudCgpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRhc2suZ2V0SW5wdXRzKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5wdXRzLmluZGV4T2YoaW5wdXQpO1xuICAgICAgICByZXR1cm4geyBpbnB1dCwgdGFzaywgY29udGVudCwgY29udGFpbmVyLCBpbnB1dHMsIGluZGV4IH07XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJldmlvdXNJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXQgPSBkYXRhLmlucHV0c1tkYXRhLmluZGV4IC0gMV07XG4gICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5leHRpbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXQgPSBkYXRhLmlucHV0c1tkYXRhLmluZGV4ICsgMV07XG4gICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gZ2V0RGF0YSgpO1xuICAgICAgICBjb25zdCBvbGRJbnB1dCA9IGRhdGEuaW5wdXRzW2RhdGEuaW5kZXggLSAxXTtcbiAgICAgICAgZGF0YS50YXNrLnJlbW92ZUlucHV0KGRhdGEuaW5wdXQpO1xuICAgICAgICBkYXRhLmNvbnRhaW5lci5yZW1vdmVDaGlsZChkYXRhLmlucHV0KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmF0ZUlucHV0KG9sZElucHV0KTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0TmV4dGlucHV0LCBzZXRQcmV2aW91c0lucHV0LCByZW1vdmVJbnB1dCwgZ2V0TmV3SW5wdXQsIHZpZXdOZXdJbnB1dCwgYWN0aXZhdGVJbnB1dCB9O1xufVxuXG5leHBvcnQgY29uc3Qgb3BlblRhc2sgPSAodGFzaykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICByZW1vdmVPcGVuZWRUYXNrKCk7XG4gICAgdmlld0xpbmtPcGVuZWRUYXNrKHRhc2spO1xuICAgIHZpc2libGVPcGVuZWRUYXNrKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrLmdldENvbnRlbnQoKSk7XG4gICAgY29uc3QgaW5wdXQgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKTtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHJlZCBzb2xpZCdcbiAgICAvL3NldExpc3RlbmVycygpLmZvclRpdGxlSW5wdXQoaW5wdXQpO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlT3BlbmVkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IG9wZW5lZFRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICBpZiAob3BlbmVkVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQob3BlbmVkVGFzay5nZXRDb250ZW50KCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhpZGRlbk9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IG9wZW5lZFRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICBpZiAob3BlbmVkVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wZW5lZFRhc2suZ2V0Q29udGVudCgpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB2aXNpYmxlT3BlbmVkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgb3BlbmVkVGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgIGlmIChvcGVuZWRUYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3BlbmVkVGFzay5nZXRDb250ZW50KCkuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUYXNrID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCB0YXNrSWQgPSBmb2xkZXIuZ2V0VGFza0NvdW50KCk7XG4gICAgbGV0IHRhc2sgPSBUYXNrKHRhc2tJZCk7XG4gICAgZm9sZGVyLmFkZFRhc2sodGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yVGFzayh0YXNrKTtcbiAgICBhZGRMaW5rVG9QYXRoKHRhc2ssICd0YXNrJyk7XG4gICAgdmlld0VsZW1lbnQodGFzay5nZXROb2RlKCksICd0YXNrJykuZm9yTmV3RWxlbWVudCgpO1xufSIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5cbmNvbnN0IFRvb2xzID0gKCgpID0+IHtcbiAgICBjb25zdCBnZXROb2RlV2l0aFNwYW4gPSAobm9kZU5hbWUsIHRleHQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVOb2RlKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIHNldFVwU3Bhbihub2RlLCB0ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOb2RlID0gKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgICAgIGFkZENsYXNzZXMobm9kZSwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY3VyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VXBTcGFuID0gKG5vZGUsIHRleHQpID0+IHtcbiAgICAgICAgbGV0IHNwYW4gPSBjcmVhdGVOb2RlKCdzcGFuJyk7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcykge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGUsIGF0cnMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgYXRyIG9mIGF0cnMpIHtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHNBZnRlciA9IChub2RlLCBjaGlsZCkgPT4ge1xuICAgICAgICB3aGlsZSAobm9kZS5sYXN0Q2hpbGQgIT0gY2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU1vZGUgPSAobW9kZSwgLi4ubm9kZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNtb290aFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eUdyb3VwID0gKC4uLm5vZGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkuY2xvc2Uobm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlbiA9IChvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4obm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZ2JhMmhleCA9IChyZ2JhKSA9PiBgIyR7cmdiYS5tYXRjaCgvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLykuc2xpY2UoMSkubWFwKChuLCBpKSA9PiAoaSA9PT0gMyA/IE1hdGgucm91bmQocGFyc2VGbG9hdChuKSAqIDI1NSkgOiBwYXJzZUZsb2F0KG4pKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKS5yZXBsYWNlKCdOYU4nLCAnJykpLmpvaW4oJycpfWBcblxuICAgIGNvbnN0IHJlbGF0aXZlRm9udCA9IChub2RlT2ZSZWxhdGl2aXR5LCBjc3NWYXIpID0+IHtcbiAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICBsZXQgZm9sZGVySGVpZ2h0ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlT2ZSZWxhdGl2aXR5KS53aWR0aDtcbiAgICAgICAgbGV0IHNpemUgPSBwYXJzZUZsb2F0KGZvbGRlckhlaWdodC5yZXBsYWNlKCdweCcsICcnKSkgLyA2O1xuICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7c2l6ZX1weGApO1xuICAgIH1cblxuICAgIHZhciBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cbiAgICAgICAgLy8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xuICAgICAgICB2YXIgc2libGluZ3MgPSBbXTtcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICAgICAgICB3aGlsZSAoc2libGluZykge1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJhbmRvbV9yZ2JhKCkge1xuICAgICAgICB2YXIgbyA9IE1hdGgucm91bmQsIHIgPSBNYXRoLnJhbmRvbSwgcyA9IDI1NTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArIG8ocigpICogcykgKyAnLCcgKyAnMScgKyAnKSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmFuZG9tX3JnYmEsIGdldFNpYmxpbmdzLCByZWxhdGl2ZUZvbnQsIHJlbW92ZUNoaWxkc0FmdGVyLCBkaXNwbGF5TW9kZSwgc21vb3RoVmlzaWJpbGl0eUdyb3VwLCBzbW9vdGhWaXNpYmlsaXR5LCByZ2JhMmhleCwgZ2V0Tm9kZVdpdGhTcGFuLCBzZXRBdHRyaWJ1dGVzLCBjcmVhdGVOb2RlLCBhcHBlbmRDaGlsZHMsIHNldFVwU3BhbiwgcmVtb3ZlQ2hpbGRzLCBhZGRDbGFzc2VzIH07XG59KSgpO1xuXG5leHBvcnQgeyBUb29scyB9IiwiaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyLCBzZXRSZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVycydcbmltcG9ydCB7IHNldExpc3RlbmVyZkZvckxpbmsgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2xpbmtzQ29udHJvbGxlcnMnO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSAnLi9tb2RlbHMvZm9sZGVyTW9kZWxzJztcbmltcG9ydCAnLi92aWV3cy9jc3MvbWFpbi5jc3MnXG5pbXBvcnQgeyB2aWV3Um9vdFBhdGhzVGhyZWUgfSBmcm9tICcuL3ZpZXdzL25vZGVzL2xpbmtzJztcblxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdEZvbGRlciA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsocm9vdEZvbGRlci5nZXRMaW5rKCkpO1xuICAgIHNldFJlc2l6ZU9ic2VydmVycygpO1xuICAgIHZpZXdSb290UGF0aHNUaHJlZSgpO1xufVxuXG5zdGFydCgpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDA7IGkrKykge1xuICAgIGNyZWF0ZUZvbGRlcigpO1xuICAgIGxldCBmb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0SW5uZXJGb2xkZXJzKClbMF07XG4gICAgb3BlbkZvbGRlcihmb2xkZXIpXG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKGlkcykgPT4ge1xuICAgIGxldCBpZCA9IGlkcztcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgbGluaztcbiAgICBsZXQgcGFyZW50ID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpO1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROYW1lID0gKHZhbCkgPT4ge1xuICAgICAgICBuYW1lID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAobm9kZSkgPT4ge1xuICAgICAgICBsaW5rID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGluaztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SWQsIHNldE5hbWUsIGdldE5hbWUsIHNldExpbmssIGdldExpbmssIHNldFBhcmVudCwgZ2V0UGFyZW50LFxuICAgIH1cbn0iLCJpbXBvcnQgeyBnZXRGb2xkZXJOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2ZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZEZvbGRlclwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQ2xvc2VGb2xkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNsdXN0ZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgT3BlbmVkRm9sZGVyID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkRm9sZGVyO1xuICAgIGNvbnN0IHNldE9wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgb3BlbmVkRm9sZGVyID0gZm9sZGVyO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRGb2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB7IHNldE9wZW5lZEZvbGRlciwgZ2V0T3BlbmVkRm9sZGVyIH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBGb2xkZXIgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBFbGVtZW50KGlkKTtcbiAgICBsZXQgY2x1c3RlciA9IGNyZWF0ZUNsdXN0ZXIoKTtcbiAgICBjb25zdCBub2RlID0gZ2V0Rm9sZGVyTm9kZShpZCk7XG4gICAgbGV0IGlubmVyRm9sZGVycyA9IFtdXG4gICAgbGV0IGlubmVyVGFza3MgPSBbXTtcbiAgICBsZXQgZm9sZGVyQ291bnQgPSAwO1xuICAgIGxldCB0YXNrQ291bnQgPSAwO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJZCA9IGAke3Byb3RvdHlwZS5nZXRJZCgpfV8ke2ZvbGRlckNvdW50fWA7XG4gICAgICAgIHNldEZvbGRlckNvdW50KCk7XG4gICAgICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIobmV3SWQpO1xuICAgICAgICBpbm5lckZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICByZXR1cm4gbmV3Rm9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlciA9IHByb3RvdHlwZS5nZXRQYXJlbnQoKS5nZXRJbm5lckZvbGRlcnMoKS5maWx0ZXIoKGZvbGRlcikgPT4gZm9sZGVyICE9PSBwcm90b3R5cGUuZ2V0TGluaygpLmdldEZvbGRlcigpKTtcbiAgICAgICAgcHJvdG90eXBlLmdldFBhcmVudCgpLmdldENsdXN0ZXIoKS5yZW1vdmVDaGlsZChwcm90b3R5cGUuZ2V0TGluaygpLmdldE5vZGUoKSk7XG4gICAgICAgIHByb3RvdHlwZS5nZXRQYXJlbnQoKS5zZXRJbm5lckZvbGRlcnMoZmlsdGVyKTtcbiAgICAgICAgc2V0SW5uZXJGb2xkZXJzKFtdKTtcbiAgICAgICAgb3BlbkZvbGRlcihwcm90b3R5cGUuZ2V0UGFyZW50KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElubmVyRm9sZGVycyA9IChhcnIpID0+IHtcbiAgICAgICAgaW5uZXJGb2xkZXJzID0gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyRm9sZGVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyRm9sZGVycztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDbHVzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgKyt0YXNrQ291bnQ7XG4gICAgICAgIGlubmVyVGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgaW5uZXJUYXNrcyA9IGlubmVyVGFza3MuZmlsdGVyKChlKSA9PiBlICE9PSB0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lclRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5uZXJUYXNrcztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRGb2xkZXJDb3VudCA9ICgpID0+IHtcbiAgICAgICAgKytmb2xkZXJDb3VudDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUYXNrQ291bnQgPSAoKSA9PiB7XG4gICAgICAgICsrdGFza0NvdW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tDb3VudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRhc2tDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IHJlbW92ZVRhc2ssIGdldFRhc2tDb3VudCwgc2V0VGFza0NvdW50LCBzZXRGb2xkZXJDb3VudCwgYWRkVGFzaywgZ2V0SW5uZXJUYXNrcywgYWRkRm9sZGVyLCBkZWwsIHNldElubmVyRm9sZGVycywgZ2V0SW5uZXJGb2xkZXJzLCBnZXRDbHVzdGVyLCBnZXROb2RlIH0pO1xufVxuXG4vKmV4cG9ydCBjb25zdCBGb2xkZXIgPSAoaWRzLCBmb2xkZXIgPSAwKSA9PiB7XG4gICAgbGV0IGlkID0gaWRzO1xuICAgIGxldCBuYW1lO1xuICAgIGxldCBsaW5rO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHBhcmVudCA9IGZvbGRlcjtcbiAgICBsZXQgY2x1c3RlciA9IGNyZWF0ZUNsdXN0ZXIoKTtcbiAgICBjb25zdCBub2RlID0gZ2V0Rm9sZGVyTm9kZShpZCk7XG4gICAgbGV0IGlubmVyRm9sZGVycyA9IFtdXG5cbiAgICBjb25zdCBhZGRGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gYCR7aWR9XyR7Y291bnR9YDtcbiAgICAgICAgKytjb3VudDtcbiAgICAgICAgbGV0IG5ld0ZvbGRlciA9IEZvbGRlcihuZXdJZCwgZm9sZGVyKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2gobmV3Rm9sZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ld0ZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSBwYXJlbnQuZ2V0SW5uZXJGb2xkZXJzKCkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlciAhPT0gbGluay5nZXRGb2xkZXIoKSk7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhbXSk7XG4gICAgICAgIHBhcmVudC5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQobGluay5nZXROb2RlKCkpO1xuICAgICAgICBwYXJlbnQuc2V0SW5uZXJGb2xkZXJzKGZpbHRlcik7XG4gICAgICAgIG9wZW5Gb2xkZXIocGFyZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbm5lckZvbGRlcnMgPSAoYXJyKSA9PiB7XG4gICAgICAgIGlubmVyRm9sZGVycyA9IGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyRm9sZGVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyRm9sZGVycztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKG5vZGUpID0+IHtcbiAgICAgICAgbGluayA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2x1c3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0SW5uZXJGb2xkZXJzLCBnZXRDbHVzdGVyLCBnZXRMaW5rLCBzZXRMaW5rLCBzZXRQYXJlbnQsIGdldFBhcmVudCwgYWRkRm9sZGVyLCBkZWwsIGdldE5vZGUsIGdldElubmVyRm9sZGVycywgZ2V0SWQsIHNldE5hbWUsIGdldE5hbWUgfTtcbn0qL1xuXG5leHBvcnQgY29uc3QgUm9vdEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBGb2xkZXIoMCk7XG4gICAgY29uc3QgZ2V0Um9vdEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvb3RGb2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB7IGdldFJvb3RGb2xkZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JBZGRGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JBZGRGb2xkZXIoKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIoKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTsiLCJpbXBvcnQgeyBnZXRGb2xkZXJMaW5rTm9kZSwgZ2V0VGFza0xpbmtOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2xpbmtzXCI7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gKGlFbGVtZW50KSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBpRWxlbWVudDtcbiAgICBsZXQgbmFtZSA9IGVsZW1lbnQuZ2V0SWQoKTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5vZGUgPSAoaU5vZGUpID0+IHtcbiAgICAgICAgbm9kZSA9IGlOb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldE5vZGUsIGdldE5vZGUsIGdldE5hbWUsIGdldEVsZW1lbnQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvbGRlckxpbmsgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAnZm9sZGVyJztcbiAgICBsZXQgcHJvdG90eXBlID0gTGluayhmb2xkZXIpO1xuICAgIHByb3RvdHlwZS5zZXROb2RlKGdldEZvbGRlckxpbmtOb2RlKHByb3RvdHlwZS5nZXROYW1lKCkpKTtcbiAgICBjb25zdCBnZXRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90b3R5cGUuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyBnZXRGb2xkZXIsIGdldFR5cGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBUYXNrTGluayA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IHR5cGUgPSAndGFzayc7XG4gICAgbGV0IHByb3RvdHlwZSA9IExpbmsodGFzayk7XG4gICAgcHJvdG90eXBlLnNldE5vZGUoZ2V0VGFza0xpbmtOb2RlKHByb3RvdHlwZS5nZXROYW1lKCkpKTtcbiAgICBjb25zdCBnZXRUYXNrID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdG90eXBlLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0VGFzaywgZ2V0VHlwZSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENsdXN0ZXJMaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBwcm90b3R5cGUgPSBGb2xkZXJMaW5rKGZvbGRlcik7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Q2x1c3RlciB9KTtcbn0iLCJpbXBvcnQgeyBvcGVuRm9sZGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JBZGRUYXNrIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZFRhc2tcIjtcbmltcG9ydCB7IGdldFRhc2tOb2RlIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL3Rhc2tcIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJNb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZFRhc2sgPSAoKCkgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrO1xuICAgIGNvbnN0IHNldE9wZW5lZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBvcGVuZWRUYXNrID0gdGFzaztcbiAgICB9XG4gICAgY29uc3QgZ2V0T3BlbmVkVGFzayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZFRhc2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkVGFzaywgZ2V0T3BlbmVkVGFzayB9XG59KSgpO1xuXG5leHBvcnQgY29uc3QgT3BlbmVkSW5wdXQgPSAoKCkgPT4ge1xuICAgIGxldCBvcGVuZWRJbnB1dCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2lucHV0JywgJ3BsdWcnKTtcblxuICAgIGNvbnN0IHNldE9wZW5lZElucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGRpc2FibGVJbnB1dCgpO1xuICAgICAgICBvcGVuZWRJbnB1dCA9IGlucHV0O1xuICAgICAgICBhY3RpdmF0ZUlucHV0KCk7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZElucHV0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlbmVkSW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgb3BlbmVkSW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIGNvbW1lbnQuLi4nO1xuICAgICAgICBvcGVuZWRJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgb3BlbmVkSW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkSW5wdXQsIGdldE9wZW5lZElucHV0IH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChpZCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldFRhc2tOb2RlKGlkKTtcbiAgICBsZXQgaW5wdXRzID0gW107XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dHMucHVzaChpbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRzID0gaW5wdXRzLmZpbHRlcigoZSkgPT4gZSAhPT0gaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElucHV0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLXRhc2snKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ29wZW5lZC10YXNrJztcbiAgICAgICAgc2V0VGl0bGVJbnB1dChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRpdGxlSW5wdXQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKTtcbiAgICAgICAgc2V0SW5wdXQoaW5wdXQpO1xuICAgICAgICBzZXRMaXN0ZW5lcnMoKS5mb3JUaXRsZUlucHV0KGlucHV0LCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2V0Q29udGVudCgpO1xuXG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZVRhc2soZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcGFyZW50LmdldENsdXN0ZXIoKS5yZW1vdmVDaGlsZChlLmdldExpbmsoKS5nZXROb2RlKCkpO1xuICAgICAgICBvcGVuRm9sZGVyKHBhcmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyBnZXRJbnB1dHMsIHNldElucHV0LCByZW1vdmVJbnB1dCwgZ2V0Q29udGVudCwgZGVsLCBnZXROb2RlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkVGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZFRhc2soKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTsiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LCB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZEZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3RlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVUYXNrU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5KCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVUYXNrJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHRhc2ssIGdldFN2Z0luV3JhcHBlcigpLCBuYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0U3ZnSW5XcmFwcGVyID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JDbG9zZUZvbGRlckFzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdiYWNrJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCkpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJOb2RlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gZm9sZGVyTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBmb2xkZXJOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZm9sZGVyJywgaWQpO1xuICAgIGNvbnN0IG5hbWUgPSBUb29scy5nZXROb2RlV2l0aFNwYW4oJ2RpdicsIGBuYW1lOiAke2lkfWAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0V3JhcHBlckljb24oaWQpLCBuYW1lKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi9CdXR0b25Gb3JBZGRUYXNrXCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5leHBvcnQgY29uc3Qgdmlld0VsZW1lbnQgPSAobm9kZSwgZmxhZyA9ICdmb2xkZXInKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycycpO1xuICAgIGxldCBpbm5lclRhc2tzID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyVGFza3MoKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuXG4gICAgY29uc3QgZm9yT2xkRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvck5ld0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmbGFnID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChmbGFnID09PSAnZm9sZGVyJykge1xuICAgICAgICAgICAgbGV0IGxhc3ROb2RlID0gaW5uZXJUYXNrcy5sZW5ndGggPiAwID8gaW5uZXJUYXNrcy5hdCgwKS5nZXROb2RlKCkgOiBjb250ZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGxhc3ROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGZvck5ld0VsZW1lbnQsIGZvck9sZEVsZW1lbnQgfTtcbn1cbiIsImltcG9ydCB7IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciwgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIlxuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZFRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdSb290UGF0aHNUaHJlZSA9ICgpID0+IHtcbiAgICBsZXQgbGluayA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpLmdldExpbmsoKTtcbiAgICBsaW5rLmdldE5vZGUoKS5zdHlsZS5ib3JkZXIgPSAnMC4zdmggIzM2YmIzNiBzb2xpZCc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRocy1jb250YWluZXInKS5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1saW5rJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5QYXRoc1NpZGVCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGgtY29udGFpbmVyJyk7XG4gICAgVG9vbHMuYWRkQ2xhc3Nlcyhjb250YWluZXIsICdvcGVuJyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgZ2V0VGVtcGxhdGVMaW5rTm9kZSA9IChuYW1lLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVdyYXBwZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnbGluay13cmFwcGVyJyk7XG4gICAgY29uc3QgbGlua0JvZHkgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnbGluay1ib2R5Jyk7XG4gICAgY29uc3Qgbm9kZUxpbmsgPSBUb29scy5nZXROb2RlV2l0aFNwYW4oJ2RpdicsIGAke25hbWV9YCwgJ2xpbmsnKTtcbiAgICBjb25zdCBkZWwgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZGVsZXRlLWxpbmsnKTtcbiAgICBkZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGxpbmtCb2R5LCBub2RlLCBub2RlTGluaywgZGVsKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMobm9kZVdyYXBwZXIsIGxpbmtCb2R5KTtcbiAgICBsZXQgY29sb3IgPSBUb29scy5yYW5kb21fcmdiYSgpO1xuICAgIG5vZGVXcmFwcGVyLnN0eWxlLmJvcmRlckxlZnQgPSBgMC4zdmggJHtjb2xvcn0gc29saWRgO1xuICAgIG5vZGVXcmFwcGVyLnN0eWxlLmJvcmRlclRvcCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG4gICAgc2V0Qm9yZGVyQ29sb3Iobm9kZVdyYXBwZXIpO1xuICAgIHJldHVybiBub2RlV3JhcHBlcjtcbn1cblxuY29uc3Qgc2V0Qm9yZGVyQ29sb3IgPSAobm9kZSkgPT4ge1xuICAgIGxldCBjb2xvciA9IFRvb2xzLnJhbmRvbV9yZ2JhKCk7XG4gICAgbm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbiAgICBub2RlLnN0eWxlLmJvcmRlclRvcCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJMaW5rTm9kZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGVMaW5rTm9kZShgXFxcXCR7bmFtZX1gLCBmb3JGb2xkZXIoKSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza0xpbmtOb2RlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZUxpbmtOb2RlKG5hbWUsIGZvclRhc2soKSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5jb25zdCBmb3JGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VDbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2Nsb3NlLWNsdXN0ZXInKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICBjbG9zZUNsdXN0ZXIuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG4gICAgcmV0dXJuIGNsb3NlQ2x1c3Rlcjtcbn1cblxuY29uc3QgZm9yVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrUHJldmlldyA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICd0YXNrLXByZXZpZXcnKTtcbiAgICBjb25zdCB0YXNrSWNvbiA9IGdldFRhc2tTdmcoKTtcbiAgICB0YXNrUHJldmlldy5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG4gICAgcmV0dXJuIHRhc2tQcmV2aWV3O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza1N2ZyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGluay1zdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bicpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd1JpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rQ2ZnID0gKGxpbmssIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJmRm9yTGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsdXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdwYXRocy1jbHVzdGVyJyk7XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGluayA9IChsaW5rKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGlubmVyVGFza3MgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0SW5uZXJUYXNrcygpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nTGVmdCArPSAnMXZoJztcbiAgICBpZiAoaW5uZXJUYXNrcy5sZW5ndGggPiAwICYmIGxpbmsuZ2V0VHlwZSgpID09PSAnZm9sZGVyJykge1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSBpbm5lclRhc2tzLmF0KDApLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobGluay5nZXROb2RlKCksIGxhc3ROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluay5nZXROb2RlKCkpO1xuICAgIH1cbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rT3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXJMaW5rID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgb3BlbmVkRm9sZGVyTGluay5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjBkMGU0JztcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKGZvbGRlcik7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGlua09wZW5lZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgb3BlbmVkVGFza0xpbmsgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRMaW5rKCkuZ2V0Tm9kZSgpO1xuICAgICAgICBvcGVuZWRUYXNrTGluay5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICB9XG4gICAgdGFzay5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU1YjYnO1xuICAgIE9wZW5lZFRhc2suc2V0T3BlbmVkVGFzayh0YXNrKTtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrTm9kZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuY29uc3QgdGFza05vZGVBc3NlbWJseSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGFzaycsIGlkKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgbmFtZTogJHtpZH1gLCAnbmFtZScpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh0YXNrLCBnZXRXcmFwcGVySWNvbihpZCksIG5hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==