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
    font-size: 2vh;
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
    gap: 1vh;
    height: 7vh;
    justify-content: start;
    padding-left: min(2vh, 2vw);
    align-items: center;
    background-color: #b2d4b2;
    max-width: inherit;
}

.main-link {
    display: grid;
    grid-template-columns: min-content min-content;
    height: min-content;
}

.set-visible-paths {
    display: none;
}

.link-title {
    display: flex;
    width: min-content;
    height: min-content;
    font-size: min(4vh, 20vw);
}

.paths-container::-webkit-scrollbar,
.name::-webkit-scrollbar,
.folders::-webkit-scrollbar,
.task-body::-webkit-scrollbar {
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
}

.opened-task {
    display: none;
    grid-template-rows: min-content 1fr;
    padding: min(6vh, 6vw);
    max-width: inherit;
    max-height: inherit;
    height: 93vh;
    gap: min(6vh, 6vw);
    justify-content: center;
}

.template-input {
    display: none;
}

.template-task {
    display: none;
}

.task-input {
    display: flex;
    height: min-content;
    width: 100%;
    outline: none;
    font-size: min(2vh, 2vw);
}

.task-input::placeholder {
    opacity: 0.5;
}

.title {
    font-size: min(6vh, 6vw);
}

.task-header {
    max-width: 100vh;
}

.task-body {
    max-height: 60vh;
    max-width: 100vh;
    min-height: 100%;
    overflow: scroll;
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
    outline: none;
    font-size: var(--font-size-to-folder);
}

.task>.name {
    background-color: rgba(255,255,255,0);
    width: 50%;
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

@media screen and (max-aspect-ratio:1/1.0000001) {

    .set-visible-paths {
        display: flex;
    }

    .content {
        grid-template-rows: min-content 1fr;
        grid-template-areas:
            'paths'
            'folders';
    }

    .paths-container {
        display: none;
    }
}

@media screen and (min-aspect-ratio: 1/1) {

    .content {
        grid-template-columns: min-content 1fr;
        grid-template-areas: 'paths folders';
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
        display: flex;
        justify-self: end;
        width: max-content;
    }

}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: start;\n    padding-left: min(2vh, 2vw);\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.main-link {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.set-visible-paths {\n    display: none;\n}\n\n.link-title {\n    display: flex;\n    width: min-content;\n    height: min-content;\n    font-size: min(4vh, 20vw);\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar,\n.task-body::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    overflow: hidden;\n    cursor: pointer;\n    width: inherit;\n    min-width: 100%;\n}\n\n.link-body {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n\n}\n\n.link {\n    display: flex;\n    align-items: center;\n    border-radius: 1vh 0 0 1vh;\n}\n\n.delete-link,\n.task-link-svg {\n    display: flex;\n    justify-content: end;\n    width: 3vh;\n    height: 100%;\n}\n\n.delete-link :hover {\n    display: flex;\n    justify-content: center;\n    background-color: red;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: 100%;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n.content>.opened-task {\n    display: grid;\n    grid-area: folders;\n    background-color: white;\n    z-index: 100;\n    visibility: visible;\n}\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    padding: 1vh;\n    height: 93vh;\n    background-color: #e9f5e9;\n}\n\n.opened-task {\n    display: none;\n    grid-template-rows: min-content 1fr;\n    padding: min(6vh, 6vw);\n    max-width: inherit;\n    max-height: inherit;\n    height: 93vh;\n    gap: min(6vh, 6vw);\n    justify-content: center;\n}\n\n.template-input {\n    display: none;\n}\n\n.template-task {\n    display: none;\n}\n\n.task-input {\n    display: flex;\n    height: min-content;\n    width: 100%;\n    outline: none;\n    font-size: min(2vh, 2vw);\n}\n\n.task-input::placeholder {\n    opacity: 0.5;\n}\n\n.title {\n    font-size: min(6vh, 6vw);\n}\n\n.task-header {\n    max-width: 100vh;\n}\n\n.task-body {\n    max-height: 60vh;\n    max-width: 100vh;\n    min-height: 100%;\n    overflow: scroll;\n}\n\n.folder,\n.task,\n.templateFolder,\n.templateTask,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.icon-wrapper>.templateTaskSvg,\n.icon-wrapper>.taskSvg {\n    display: flex;\n    max-width: inherit;\n    max-height: inherit;\n    align-self: center;\n    align-items: center;\n    justify-self: center;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n    outline: none;\n    font-size: var(--font-size-to-folder);\n}\n\n.task>.name {\n    background-color: rgba(255,255,255,0);\n    width: 50%;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n.templateTask:hover {\n    animation-fill-mode: forwards;\n    animation: 5s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {\n\n    .set-visible-paths {\n        display: flex;\n    }\n\n    .content {\n        grid-template-rows: min-content 1fr;\n        grid-template-areas:\n            'paths'\n            'folders';\n    }\n\n    .paths-container {\n        display: none;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n\n    .content {\n        grid-template-columns: min-content 1fr;\n        grid-template-areas: 'paths folders';\n    }\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: flex;\n        justify-self: end;\n        width: max-content;\n    }\n\n}"],"sourceRoot":""}]);
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
/* harmony export */   start: () => (/* binding */ start),
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
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forMainLinkButtonToAllPaths();

};

const viewElements = (elements) => {
    for (let element of elements) {
        const node = element.getNode();
        (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(node).forOldElement();
    }
}

const start = (rootFolder) => {
    rootFolder.setParent(rootFolder);
    rootFolder.setLink((0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.ClusterLink)(rootFolder));
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_5__.setListenerForLink)(rootFolder.getLink());
    _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.setOpenedFolder(rootFolder);
    createButtons();
    setButtonsListeners();
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_5__.openCluster)(rootFolder.getLink());
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_4__.viewLinkOpenedFolder)(rootFolder);
};

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
/* harmony import */ var _localStorageControllers_folders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorageControllers/folders */ "./src/controllers/localStorageControllers/folders.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskControllers */ "./src/controllers/taskControllers.js");











const openFolder = (folder) => {
    (0,_taskControllers__WEBPACK_IMPORTED_MODULE_9__.hiddenOpenedTask)();
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
    newFolder.setSerialNumber(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.serialNumberFolder.getSerialNumber());
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.serialNumberFolder.increment();
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(newFolder.getNode()).forNewElement();
    (0,_listeners__WEBPACK_IMPORTED_MODULE_7__.setListeners)().forFolder(newFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_7__.setListeners)().forInputToName(newFolder);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_6__.addLinkToPath)(newFolder);
    (0,_localStorageControllers_folders__WEBPACK_IMPORTED_MODULE_8__.addFolder)(newFolder);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_6__.openClusterWhenAddingFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.getOpenedFolder());
    localStorage.setItem(`${newFolder.getId()}`, newFolder.getJSON());
    localStorage.setItem(`${folder.getId()}`, folder.getJSON());

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
/* harmony export */   closeAllLinks: () => (/* binding */ closeAllLinks),
/* harmony export */   closeCluster: () => (/* binding */ closeCluster),
/* harmony export */   getCustomLink: () => (/* binding */ getCustomLink),
/* harmony export */   openAllLinks: () => (/* binding */ openAllLinks),
/* harmony export */   openCluster: () => (/* binding */ openCluster),
/* harmony export */   openClusterWhenAddingFolder: () => (/* binding */ openClusterWhenAddingFolder),
/* harmony export */   setListenerForLink: () => (/* binding */ setListenerForLink)
/* harmony export */ });
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");





const openAllLinks = () => {
    let paths = document.querySelector('.paths-container');
    let close = document.querySelector('.set-visible-paths');
    paths.style.display = 'grid';
    switchCloseButtonSvg(close, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowDown)());
}

const closeAllLinks = () => {
    let paths = document.querySelector('.paths-container');
    let close = document.querySelector('.set-visible-paths');
    paths.style.display = 'none';
    switchCloseButtonSvg(close, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowRight)());
}

const closeCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    switchCloseButtonSvg(close, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowRight)());
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().close(cluster, 1, 0, 200, 'forwards');
    setTimeout(() => {
        cluster.style.display = 'none';
    }, 200);
}

const openCluster = (link) => {
    let cluster = link.getCluster();
    let close = link.getNode().querySelector('.close-cluster');
    switchCloseButtonSvg(close, (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_2__.getNodeArrowDown)());
    cluster.style.display = 'grid';
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.smoothVisibility().open(cluster, 0, 1, 200, 'forwards');
}

const setListenerForLink = (link) => {
    const clusterClose = link.getNode().querySelector('.close-cluster');
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forLink(link);
    if (clusterClose !== null) {
        (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToClusterPaths(clusterClose, link);
    }
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forButtonToDeleteLink(link);
}

const switchCloseButtonSvg = (close, child) => {
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.removeChilds(close);
    close.appendChild(child);
}

const openClusterWhenAddingFolder = (folder) => {
    let cluster = folder.getCluster();
    let button = folder.getLink().getNode().querySelector('.close-cluster');
    if (folder.getId() !== 0 && folder.getId() !== '0') {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
        openClusterWhenAddingFolder(folder.getParent());
    } else if (folder.getId() === 0 || folder.getId() === '0') {
        if (document.defaultView.getComputedStyle(cluster).display === 'none') {
            button.click();
        }
    }
}

const addLinkToPath = (element, type = 'folder') => {
    let link = type === 'folder' ? getCustomLink(element) : (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_1__.TaskLink)(element);
    setListenerForLink(link);
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
/* harmony import */ var _localStorageControllers_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorageControllers/common */ "./src/controllers/localStorageControllers/common.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskControllers */ "./src/controllers/taskControllers.js");







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
            (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.openTask)(task);
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
            (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.createTask)();
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
            console.log(link.getElement().getSerialNumber());
            try {
                (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(link.getFolder());
            } catch {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.openTask)(link.getTask());
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

    const forMainLinkButtonToAllPaths = () => {
        let flag;
        let node = document.querySelector('.set-visible-paths');
        let paths = document.querySelector('.paths-container');
        const clickNode = node.addEventListener('click', e => {
            flag = document.defaultView.getComputedStyle(paths).display;
            if (flag === 'none') {
                (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.openAllLinks)();
            } else {
                (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.closeAllLinks)();
            }
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
    }

    const forButtonToDeleteLink = (link) => {
        let node = link.getNode().querySelector('.delete-link');
        const clickNode = node.addEventListener('click', e => {

            let element = link.getElement();
            if (confirm('Вы действительно хотите удалить элемент и всё его содержимое?')) {
                element.del(element);
                let folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder();
                localStorage.setItem(`${folder.getId()}`, folder.getJSON());
                localStorage.removeItem(`${element.getId()}`);
            } else {
            }
        })
    }

    const forTitleInput = (input, content) => {
        let index = 0;
        let container = content.querySelector('.task-body');
        const pressKeys = input.addEventListener('keyup', e => {
            e.preventDefault();
            if (e.keyCode === 13) {
                let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().getNewInput();
                task.spliceInput(index + 1, newInput);
                container.insertBefore(newInput, container.firstChild);
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().activateInput(newInput);
                localStorage.setItem(`${task.getId()}`, task.getJSON());
                forInput(newInput);
            }

            if (e.keyCode === 40) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().setNextinput();
            }

            const leftClick = input.addEventListener('click', e => {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().activateInput(input);
            })
        })
    }

    const forInput = (input) => {
        const pressKeysUp = input.addEventListener('keyup', e => {
            e.preventDefault();
            let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
            let index = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask().getInputs().indexOf(input);
            if (e.keyCode === 13) {
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().getNewInput();
                task.spliceInput(index + 1, newInput);
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().viewNewInput(input, newInput);
                localStorage.setItem(`${task.getId()}`, task.getJSON());
                forInput(newInput);
            }
        })

        const pressKeysDown = input.addEventListener('keydown', e => {
            let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask();
            if (e.keyCode === 8) {
                if (input.value === '') {
                    (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().removeInput();
                    localStorage.setItem(`${task.getId()}`, task.getJSON());
                }
            }

            if (e.keyCode === 38) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().setPreviousInput();
            }

            if (e.keyCode === 40) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().setNextinput();
            }
        })

        const leftClick = input.addEventListener('click', e => {
            ;(0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.taskContentHandler)().activateInput(input);
        })

    }

    const forInputToName = (element) => {
        let input = element.getNode().querySelector('input');

        const focusOut = input.addEventListener('focusout', e => {
            if (input.value !== '') {
                setName();
                localStorage.setItem(`${element.getId()}`, element.getJSON());
            }
        })

        const setName = () => {
            let name = input.value;
            let link = element.getLink();
            element.setName(name);
            link.setName(name);
            link.getNode().querySelector('span').textContent = name;
        }
    }

    return { forInput, forInputToName, forMainLinkButtonToAllPaths, forTitleInput, forTask, forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLink, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
}

/***/ }),

/***/ "./src/controllers/localStorageControllers/common.js":
/*!***********************************************************!*\
  !*** ./src/controllers/localStorageControllers/common.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   laodElements: () => (/* binding */ laodElements)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _commonControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commonControllers */ "./src/controllers/commonControllers.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../taskControllers */ "./src/controllers/taskControllers.js");
/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folders */ "./src/controllers/localStorageControllers/folders.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./links */ "./src/controllers/localStorageControllers/links.js");
/* harmony import */ var _rootFolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rootFolder */ "./src/controllers/localStorageControllers/rootFolder.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks */ "./src/controllers/localStorageControllers/tasks.js");











const laodElements = () => {
    parseData();
    loadFolders();
    loadTasks();
    (0,_links__WEBPACK_IMPORTED_MODULE_7__.viewLinks)();
    loadLastContent();
}

const loadLastContent = () => {
    const lastContent = JSON.parse(localStorage.getItem('lastOpen'));
    console.log(lastContent)
    loadOpenedFolder();
    if (lastContent === 'task') {
        loadOpenedTask();
    }
}

const loadOpenedFolder = () => {
    let folderId = JSON.parse(localStorage.getItem('openedFolder'));
    (0,_commonControllers__WEBPACK_IMPORTED_MODULE_2__.start)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder());
    if (folderId === 0 || folderId === '0') {
        (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.openFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder())
    } else {
        let folder = (0,_folders__WEBPACK_IMPORTED_MODULE_6__.getFolder)(folderId);
        (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_3__.openFolder)(folder)
        ;(0,_linksControllers__WEBPACK_IMPORTED_MODULE_4__.openCluster)(folder.getLink());
    }
}

const loadOpenedTask = () => {
    let taskId = JSON.parse(localStorage.getItem('openedTask'));
    if (taskId !== undefined) {
        let task = (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.getTask)(taskId);
        (0,_taskControllers__WEBPACK_IMPORTED_MODULE_5__.openTask)(task);
        (0,_linksControllers__WEBPACK_IMPORTED_MODULE_4__.openCluster)(task.getParent().getLink());
    }
}

const loadFolders = () => {
    ;(0,_folders__WEBPACK_IMPORTED_MODULE_6__.sortFoldersData)();
    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.loadFoldersElements)();
    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.setAllInnerFolders)();
    (0,_rootFolder__WEBPACK_IMPORTED_MODULE_8__.setRootInnerFolders)();
    (0,_rootFolder__WEBPACK_IMPORTED_MODULE_8__.setRootFolderParent)();
    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.setAllFolderParents)();
}

const loadTasks = () => {
    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_9__.sortTasksData)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.loadTasksElements)();
    (0,_rootFolder__WEBPACK_IMPORTED_MODULE_8__.setRootInnerTasks)();
    (0,_rootFolder__WEBPACK_IMPORTED_MODULE_8__.setRootTaskParent)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.setAllTaskParents)();
    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.setAllInnerTasks)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.loadTasksContents)();
}

const parseData = () => {
    for (var i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (data.id === '0') {
            (0,_rootFolder__WEBPACK_IMPORTED_MODULE_8__.loadRootFolder)(data);
        } else {
            try {
                if (data.id.indexOf('t') > -1) {
                    (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.addTaskData)(data);
                } else {
                    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.addFolderData)(data);
                }
            } catch {

            }
        }
    }
}

/***/ }),

/***/ "./src/controllers/localStorageControllers/folders.js":
/*!************************************************************!*\
  !*** ./src/controllers/localStorageControllers/folders.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFolder: () => (/* binding */ addFolder),
/* harmony export */   addFolderData: () => (/* binding */ addFolderData),
/* harmony export */   folderSerialNumberDecrement: () => (/* binding */ folderSerialNumberDecrement),
/* harmony export */   getFolder: () => (/* binding */ getFolder),
/* harmony export */   getFolders: () => (/* binding */ getFolders),
/* harmony export */   getFoldersData: () => (/* binding */ getFoldersData),
/* harmony export */   loadFolder: () => (/* binding */ loadFolder),
/* harmony export */   loadFoldersElements: () => (/* binding */ loadFoldersElements),
/* harmony export */   setAllFolderParents: () => (/* binding */ setAllFolderParents),
/* harmony export */   setAllInnerFolders: () => (/* binding */ setAllInnerFolders),
/* harmony export */   setAllInnerTasks: () => (/* binding */ setAllInnerTasks),
/* harmony export */   sortFoldersData: () => (/* binding */ sortFoldersData)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/controllers/localStorageControllers/tasks.js");





let foldersData = [];
let folders = [];

const addFolder = (folder) => {
    folders.push(folder);
}

const sortFoldersData = () => {
    foldersData.sort((a, b) => (a.serialNumber > b.serialNumber) ? 1 : ((b.serialNumber > a.serialNumber) ? -1 : 0));
}

const addFolderData = (data) => {
    foldersData.push(data);
}

const getFoldersData = () => {
    return foldersData;
}

const getFolders = () => {
    return folders;
}

const loadFoldersElements = () => {
    for (let data of foldersData) {
        let folder = loadFolder(data);
        loadFolderLink(folder, data);
    }
}

const loadFolder = (data, flag = '') => {
    let folder = (0,_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.Folder)(data.id);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forFolder(folder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_2__.setListeners)().forInputToName(folder);
    folder.unpackFolder(data);
    if (flag === 'root') {
        _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.setRootFolder(folder);
    } else {
        folders.push(folder);
    }
    return folder;
}

const loadFolderLink = (folder, data) => {
    let link = (0,_linksControllers__WEBPACK_IMPORTED_MODULE_1__.getCustomLink)(folder);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_1__.setListenerForLink)(link);
    link.setName(data.link);
    link.getNode().querySelector('span').textContent = `\\${data.link}`;
    folder.setLink(link);
}

const setAllInnerFolders = () => {
    for (let folder of folders) {
        setInnerFolders(folder);
    }
}

const setAllInnerTasks = () => {
    for (let folder of folders) {
        setInnerTasks(folder);
    }
}

const setInnerTasks = (folder) => {
    let tasksIds = folder.getInnerTasks();
    let innerTasks = [];
    for (let id of tasksIds) {
        let child = (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.getTask)(id)
        innerTasks.push(child);
    }
    folder.setInnerTasks(innerTasks);
}


const setInnerFolders = (folder) => {
    let foldersIds = folder.getInnerFolders();
    let innerFolders = [];
    for (let id of foldersIds) {
        let child = getFolder(id);
        innerFolders.push(child);
    }
    folder.setInnerFolders(innerFolders);
}

const getFolder = (id) => {
    let res = folders.filter(folder => {
        if (folder.getId() === id) {
            return folder;
        }
    })
    return res[0];
}

const setAllFolderParents = () => {
    for (let folder of folders) {
        setFolderParents(folder);
    }
}

const setFolderParents = (folder) => {
    let folders = folder.getInnerFolders();
    for (let iFolder of folders) {
        iFolder.setParent(folder);
    }
}

const folderSerialNumberDecrement = (number) => {
    for (let folder of folders) {
        if (folder.getSerialNumber() > number) {
            folder.decrementSerialNumber();
            localStorage.setItem(`${folder.getId()}`, folder.getJSON());
        }
    }
    _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.serialNumberFolder.decrement();
}

/***/ }),

/***/ "./src/controllers/localStorageControllers/links.js":
/*!**********************************************************!*\
  !*** ./src/controllers/localStorageControllers/links.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewLinks: () => (/* binding */ viewLinks)
/* harmony export */ });
/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders */ "./src/controllers/localStorageControllers/folders.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/controllers/localStorageControllers/tasks.js");



const viewLinks = () => {
    let folders = (0,_folders__WEBPACK_IMPORTED_MODULE_0__.getFolders)();
    let tasks = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.getTasks)();
    for (let folder of folders) {
        viewLink(folder);
    }
    for (let task of tasks) {
        viewLink(task);
    }
}

const viewLink = (folder) => {
    let parent = folder.getParent();
    parent.getCluster().appendChild(folder.getLink().getNode());
}

/***/ }),

/***/ "./src/controllers/localStorageControllers/rootFolder.js":
/*!***************************************************************!*\
  !*** ./src/controllers/localStorageControllers/rootFolder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadRootFolder: () => (/* binding */ loadRootFolder),
/* harmony export */   setRootFolderParent: () => (/* binding */ setRootFolderParent),
/* harmony export */   setRootInnerFolders: () => (/* binding */ setRootInnerFolders),
/* harmony export */   setRootInnerTasks: () => (/* binding */ setRootInnerTasks),
/* harmony export */   setRootTaskParent: () => (/* binding */ setRootTaskParent)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folders */ "./src/controllers/localStorageControllers/folders.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/controllers/localStorageControllers/tasks.js");




const loadRootFolder = (data) => {
    (0,_folders__WEBPACK_IMPORTED_MODULE_1__.loadFolder)(data, 'root');
}

const setRootInnerFolders = () => {
    let ids = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().getInnerFolders();
    let innerFolders = [];
    for (let id of ids) {
        let folder = (0,_folders__WEBPACK_IMPORTED_MODULE_1__.getFolder)(id);
        innerFolders.push(folder);
    }
    _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().setInnerFolders(innerFolders);
}

const setRootFolderParent = () => {
    let folders = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().getInnerFolders();
    for (let folder of folders) {
        folder.setParent(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder());
    }
}

const setRootInnerTasks = () => {
    let ids = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().getInnerTasks();
    let innerTasks = [];
    for (let id of ids) {
        let task = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getTask)(id);
        innerTasks.push(task);
    }
    _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().setInnerTasks(innerTasks);
}

const setRootTaskParent = () => {
    let tasks = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder().getInnerTasks();
    for (let task of tasks) {
        task.setParent(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder());
    }
}

/***/ }),

/***/ "./src/controllers/localStorageControllers/tasks.js":
/*!**********************************************************!*\
  !*** ./src/controllers/localStorageControllers/tasks.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   addTaskData: () => (/* binding */ addTaskData),
/* harmony export */   getTask: () => (/* binding */ getTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   loadTasksContents: () => (/* binding */ loadTasksContents),
/* harmony export */   loadTasksElements: () => (/* binding */ loadTasksElements),
/* harmony export */   setAllTaskParents: () => (/* binding */ setAllTaskParents),
/* harmony export */   sortTasksData: () => (/* binding */ sortTasksData),
/* harmony export */   taskSerialNumberDecrement: () => (/* binding */ taskSerialNumberDecrement)
/* harmony export */ });
/* harmony import */ var _models_linkOfPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/linkOfPath */ "./src/models/linkOfPath.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _taskControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../taskControllers */ "./src/controllers/taskControllers.js");
/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folders */ "./src/controllers/localStorageControllers/folders.js");







let tasksData = [];
let tasks = [];

const getTasks = () => {
    return tasks;
}

const addTask = (task) => {
    tasks.push(task);
}

const addTaskData = (data) => {
    tasksData.push(data);
}

const sortTasksData = () => {
    tasksData.sort((a, b) => (a.serialNumber > b.serialNumber) ? 1 : ((b.serialNumber > a.serialNumber) ? -1 : 0));
}

const loadTasksElements = () => {
    for (let data of tasksData) {
        let task = loadTask(data);
        loadTaskLink(task, data);
    }
}

const loadTask = (data) => {
    let task = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_1__.Task)(data.id);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forTask(task);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forInputToName(task);
    task.unpackTask(data);
    tasks.push(task);
    return task;
}

const loadTaskLink = (task, data) => {
    let link = (0,_models_linkOfPath__WEBPACK_IMPORTED_MODULE_0__.TaskLink)(task);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_2__.setListenerForLink)(link);
    link.setName(data.link);
    link.getNode().querySelector('span').textContent = `${data.link}`;
    task.setLink(link);
}

const setAllTaskParents = () => {
    for (let task of tasks) {
        let parent;
        if (typeof task.getParent() === 'string') {
            parent = (0,_folders__WEBPACK_IMPORTED_MODULE_5__.getFolder)(task.getParent());
            task.setParent(parent);
        }
    }
}

const getTask = (id) => {
    let res = tasks.filter(task => {
        if (task.getId() === id) {
            return task;
        }
    })
    return res[0];
}

const taskSerialNumberDecrement = (number) => {
    for (let task of tasks) {
        if (task.getSerialNumber() > number) {
            task.decrementSerialNumber();
            localStorage.setItem(`${task.getId()}`, task.getJSON());
        }
    }
    _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.serialNumberTask.decrement();
}

const loadTasksContents = () => {
    for (let task of tasks) {
        loadTaskcontent(task);
    }
}

const loadTaskcontent = (task) => {
    let content = task.getContent();
    let body = content.querySelector('.task-body');
    let title = content.querySelector('.title');
    let inputs = [];
    let valuesInputs = task.getInputs();
    for (let i = 0; i < valuesInputs.length; i++) {
        let value = valuesInputs[i];
        if (value !== null) {
            if (i === 0) {
                title.value = value;
                inputs.push(title);
            } else {
                let input = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().getNewInput(value);
                inputs.push(input);
                body.appendChild(input);
                (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forInput(input);
            }
        }
    }
    task.setInputs(inputs);
    localStorage.setItem(`${task.getId()}`, task.getJSON());
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
/* harmony import */ var _models_regulars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/regulars */ "./src/models/regulars.js");
/* harmony import */ var _models_taskModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/taskModels */ "./src/models/taskModels.js");
/* harmony import */ var _views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/folders */ "./src/views/nodes/folders.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _localStorageControllers_tasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorageControllers/tasks */ "./src/controllers/localStorageControllers/tasks.js");










const taskContentHandler = () => {
    let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();

    const isNumberList = (str) => {
        let checkNumberlist = new RegExp(_models_regulars__WEBPACK_IMPORTED_MODULE_1__.regulars.checkNumberlist, 'g');
        let res = str.match(checkNumberlist);

        return res !== null;
    }

    const getNewInput = (value = '') => {
        let newInput = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.Inputs)().getTextInput();
        if (value !== '') {
            newInput.value = value;
        }
        return newInput;
    }

    const viewNewInput = (input, newInput) => {
        input.parentNode.insertBefore(newInput, input.nextSibling);
        activateInput(newInput);
    }

    const activateInput = (input) => {
        _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedInput.setOpenedInput(input);
    }

    const getData = () => {
        const input = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedInput.getOpenedInput();
        let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();
        let content = task.getContent();
        let container = content.querySelector('.task-body');
        const inputs = task.getInputs();
        const index = inputs.indexOf(input);
        return { input, task, content, container, inputs, index };
    }

    const setPreviousInput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index - 1];
        if (data.index - 1 >= 0) {
            activateInput(oldInput);
        }
    }

    const setNextinput = () => {
        const data = getData();
        const oldInput = data.inputs[data.index + 1];
        if (data.index + 1 < data.inputs.length) {
            activateInput(oldInput);
        }
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

    return { isNumberList, setNextinput, setPreviousInput, removeInput, getNewInput, viewNewInput, activateInput };
}

const openTask = (task) => {
    let content = document.querySelector('.content');
    removeOpenedTask();
    (0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_4__.viewLinkOpenedTask)(task);
    visibleOpenedTask();
    content.appendChild(task.getContent());
    const input = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask().getContent().querySelector('.task-input');
}

const removeOpenedTask = () => {
    let content = document.querySelector('.content');
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        content.removeChild(openedTask.getContent());
    }
}

const hiddenOpenedTask = () => {
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'hidden';
    }
}

const visibleOpenedTask = () => {
    let openedTask = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();
    if (openedTask !== undefined) {
        openedTask.getContent().style.visibility = 'visible';
    }
}

const createTask = (folder = _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder()) => {
    let taskId = folder.getTaskCount();
    let task = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.Task)(taskId);
    folder.addTask(task);
    task.setSerialNumber(_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.serialNumberTask.getSerialNumber());
    _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.serialNumberTask.increment();
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forTask(task);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forInputToName(task);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_5__.addLinkToPath)(task, 'task');
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(task.getNode(), 'task').forNewElement();
    (0,_localStorageControllers_tasks__WEBPACK_IMPORTED_MODULE_7__.addTask)(task);
    localStorage.setItem(`${task.getId()}`, task.getJSON());
    localStorage.setItem(`${folder.getId()}`, folder.getJSON());
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
/* harmony import */ var _controllers_commonControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/commonControllers */ "./src/controllers/commonControllers.js");
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_localStorageControllers_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/localStorageControllers/common */ "./src/controllers/localStorageControllers/common.js");
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _views_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/css/main.css */ "./src/views/css/main.css");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/nodes/links */ "./src/views/nodes/links.js");







if (localStorage.length > 0) {
    (0,_controllers_localStorageControllers_common__WEBPACK_IMPORTED_MODULE_2__.laodElements)();
} else {
    (0,_controllers_commonControllers__WEBPACK_IMPORTED_MODULE_0__.start)(_models_folderModels__WEBPACK_IMPORTED_MODULE_3__.RootFolder.getRootFolder());
}

(0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_1__.setResizeObservers)();
(0,_views_nodes_links__WEBPACK_IMPORTED_MODULE_5__.viewRootPathsThree)();

/***/ }),

/***/ "./src/models/element.js":
/*!*******************************!*\
  !*** ./src/models/element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   idRegister: () => (/* binding */ idRegister)
/* harmony export */ });
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");


const idRegister = (() => {
    let load = localStorage.getItem('idRegister');
    let register = load === null ? [] : load;

    const addId = (id) => {
        register.push(id);
        localStorage.setItem('idRegister', JSON.stringify(register));
    }

    const getIdRegister = () => {
        return register;
    }

    return { addId, getIdRegister };
})()

const Element = (ids) => {
    let name = '';
    let link;
    let parent = _folderModels__WEBPACK_IMPORTED_MODULE_0__.OpenedFolder.getOpenedFolder();

    let id = parent === undefined ? 0 : `${parent.getId()}_${ids}`;

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

    const setId = (val) => {
        id = val;
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
        setId, getId, setName, getName, setLink, getLink, setParent, getParent,
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
/* harmony export */   RootFolder: () => (/* binding */ RootFolder),
/* harmony export */   serialNumberFolder: () => (/* binding */ serialNumberFolder)
/* harmony export */ });
/* harmony import */ var _views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nodes/folder */ "./src/views/nodes/folder.js");
/* harmony import */ var _views_nodes_ButtonForAddFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/nodes/ButtonForAddFolder */ "./src/views/nodes/ButtonForAddFolder.js");
/* harmony import */ var _views_nodes_ButtonForCloseFolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/nodes/ButtonForCloseFolder */ "./src/views/nodes/ButtonForCloseFolder.js");
/* harmony import */ var _views_nodes_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/nodes/links */ "./src/views/nodes/links.js");
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element */ "./src/models/element.js");
/* harmony import */ var _controllers_localStorageControllers_folders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/localStorageControllers/folders */ "./src/controllers/localStorageControllers/folders.js");








const serialNumberFolder = (() => {
    let loadSerialNumber = localStorage.getItem('serialNumber');
    let serialNumber = loadSerialNumber === null ? 0 : loadSerialNumber;
    const increment = () => {
        ++serialNumber;
        localStorage.setItem('serialNumber', JSON.stringify(serialNumber));
    }

    const decrement = () => {
        --serialNumber;
        localStorage.setItem('serialNumber', JSON.stringify(serialNumber));
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    return { getSerialNumber, decrement, increment };
})();

const OpenedFolder = (() => {
    let loadOpenedFolder = JSON.parse(localStorage.getItem('openedFolder'));
    let openedFolder;
    if (loadOpenedFolder !== null) {
        openedFolder = (0,_controllers_localStorageControllers_folders__WEBPACK_IMPORTED_MODULE_6__.getFolder)(loadOpenedFolder);
    }
    const setOpenedFolder = (folder) => {
        openedFolder = folder;
        localStorage.setItem('lastOpen', JSON.stringify('folder'));
        localStorage.setItem('openedFolder', JSON.stringify(folder.getId()));
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
    let serialNumber;

    const addFolder = () => {
        let newFolder = Folder(folderCount);
        setFolderCount();
        innerFolders.push(newFolder);
        return newFolder;
    }

    const del = () => {
        let filter = prototype.getParent().getInnerFolders().filter((folder) => folder !== prototype.getLink().getFolder());
        prototype.getParent().getCluster().removeChild(prototype.getLink().getNode());
        prototype.getParent().setInnerFolders(filter);
        setInnerFolders([]);
        (0,_controllers_localStorageControllers_folders__WEBPACK_IMPORTED_MODULE_6__.folderSerialNumberDecrement)(serialNumber);
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

    const setInnerTasks = (tasks) => {
        innerTasks = tasks;
    }

    const reduceFolderCount = () => {
        --folderCount;
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

    const getIdElements = (elements) => {
        let allIds = [];
        for (let element of elements) {
            allIds.push(element.getId());
        }
        return allIds;
    }

    const setSerialNumber = (number) => {
        serialNumber = number;
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    const decrementSerialNumber = () => {
        --serialNumber;
    }

    const getJSON = () => {
        let list = {
            name: prototype.getName(),
            link: prototype.getLink().getName(),
            parent: prototype.getParent().getId(),
            id: `${prototype.getId()}`,
            innerFolders: getIdElements(innerFolders),
            innerTasks: getIdElements(innerTasks),
            folderCount: folderCount,
            taskCount: taskCount,
            serialNumber: serialNumber,
        }

        return JSON.stringify(list);
    }

    const unpackFolder = (data) => {
        prototype.setId(data.id);
        prototype.setName(data.name);
        node.querySelector('input').value = prototype.getName();
        prototype.setLink(data.link);
        prototype.setParent(data.parent);
        innerFolders = data.innerFolders;
        innerTasks = data.innerTasks;
        folderCount = data.folderCount;
        taskCount = data.taskCount;
        serialNumber = data.serialNumber;
    }

    return Object.assign({}, prototype, { setInnerTasks, getSerialNumber, setSerialNumber, decrementSerialNumber, reduceFolderCount, unpackFolder, getJSON, removeTask, getTaskCount, setTaskCount, setFolderCount, addTask, getInnerTasks, addFolder, del, setInnerFolders, getInnerFolders, getCluster, getNode });
}

const RootFolder = (() => {
    let rootFolder = Folder(0);
    const getRootFolder = () => {
        return rootFolder;
    }

    const setRootFolder = (folder) => {
        rootFolder = folder;
    }
    return { setRootFolder, getRootFolder };
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


const Link = (element) => {
    let parent = element;
    let id = parent.getId();
    let name = id;
    let node;

    const getElement = () => {
        return parent;
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

    const setName = (val) => {
        name = val;
    }

    return { setName, setNode, getNode, getName, getElement };
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

/***/ "./src/models/regulars.js":
/*!********************************!*\
  !*** ./src/models/regulars.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   regulars: () => (/* binding */ regulars)
/* harmony export */ });
const regulars = {
    checkNumberlist: '(^(\\d+\\.\\s))',
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
/* harmony export */   Inputs: () => (/* binding */ Inputs),
/* harmony export */   OpenedInput: () => (/* binding */ OpenedInput),
/* harmony export */   OpenedTask: () => (/* binding */ OpenedTask),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   serialNumberTask: () => (/* binding */ serialNumberTask)
/* harmony export */ });
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _controllers_localStorageControllers_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/localStorageControllers/tasks */ "./src/controllers/localStorageControllers/tasks.js");
/* harmony import */ var _controllers_taskControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/taskControllers */ "./src/controllers/taskControllers.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/ButtonForAddTask */ "./src/views/nodes/ButtonForAddTask.js");
/* harmony import */ var _views_nodes_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/nodes/task */ "./src/views/nodes/task.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element */ "./src/models/element.js");
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");










const serialNumberTask = (() => {
    let loadSerialNumber = localStorage.getItem('serialNumberTask');
    let serialNumber = loadSerialNumber === null ? 0 : loadSerialNumber;
    const increment = () => {
        ++serialNumber;
        localStorage.setItem('serialNumberTask', JSON.stringify(serialNumber));
    }

    const decrement = () => {
        --serialNumber;
        localStorage.setItem('serialNumberTask', JSON.stringify(serialNumber));
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    return { getSerialNumber, decrement, increment };
})();

const OpenedTask = (() => {
    let loadOpenedTask = JSON.parse(localStorage.getItem('openedTask'));
    let openedTask;
    if (loadOpenedTask !== null) {
        openedTask = (0,_controllers_localStorageControllers_tasks__WEBPACK_IMPORTED_MODULE_2__.getTask)(loadOpenedTask);
    }
    const setOpenedTask = (task) => {
        openedTask = task;
        localStorage.setItem('lastOpen', JSON.stringify('task'));
        localStorage.setItem('openedTask', JSON.stringify(task.getId()));
    }
    const getOpenedTask = () => {
        return openedTask;
    }

    return { setOpenedTask, getOpenedTask }
})();

const OpenedInput = (() => {
    let openedInput = _helper_tools__WEBPACK_IMPORTED_MODULE_4__.Tools.createNode('input', 'plug');

    const setOpenedInput = (input) => {
        disableInput();
        openedInput = input;
        activateInput();
    }
    const getOpenedInput = () => {
        return openedInput;
    }

    const activateInput = () => {
        if (openedInput !== OpenedTask.getOpenedTask().getInputs()[0]) {
            openedInput.placeholder = 'Add comment...';
        }
        openedInput.focus();
    }

    const disableInput = () => {
        if (openedInput !== OpenedTask.getOpenedTask().getInputs()[0]) {
            openedInput.placeholder = '';
        }
    }
    return { setOpenedInput, getOpenedInput }
})();

const Task = (id) => {
    const prototype = (0,_element__WEBPACK_IMPORTED_MODULE_7__.Element)(`${id}t`);
    const node = (0,_views_nodes_task__WEBPACK_IMPORTED_MODULE_6__.getTaskNode)(`${id}t`);
    let serialNumber;
    let inputs = [];

    const getNode = () => {
        return node;
    }

    const setSerialNumber = (val) => {
        serialNumber = val;
    }

    const getSerialNumber = () => {
        return serialNumber;
    }

    const decrementSerialNumber = () => {
        --serialNumber;
    }

    const setInput = (input) => {
        inputs.push(input);
    }

    const spliceInput = (index, input) => {
        inputs.splice(index, 0, input);
    }

    const removeInput = (input) => {
        inputs = inputs.filter((e) => e !== input);
    }

    const getInputs = () => {
        return inputs;
    }

    const setInputs = (val) => {
        inputs = val;
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

    const getInputsValues = () => {
        let values = [];

        for (let input of inputs) {
            if (input !== null) {
                values.push(input.value);
            }
        }
        return values;
    }

    const del = (e) => {
        let parent = _folderModels__WEBPACK_IMPORTED_MODULE_8__.OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        parent.getCluster().removeChild(e.getLink().getNode());
        (0,_controllers_localStorageControllers_tasks__WEBPACK_IMPORTED_MODULE_2__.taskSerialNumberDecrement)(serialNumber);
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(parent);
        localStorage.removeItem(`${e.getId()}`);
        localStorage.setItem(`${parent.getId()}`, parent.getJSON());
    }

    const getJSON = () => {
        let list = {
            name: prototype.getName(),
            link: prototype.getLink().getName(),
            parent: prototype.getParent().getId(),
            id: `${prototype.getId()}`,
            serialNumber: serialNumber,
            inputs: getInputsValues(),
        }

        return JSON.stringify(list);
    }

    const unpackTask = (data) => {
        prototype.setId(data.id);
        prototype.setName(data.name);
        node.querySelector('input').value = prototype.getName();
        prototype.setLink(data.link);
        prototype.setParent(data.parent);
        serialNumber = data.serialNumber;
        inputs = data.inputs;
    }

    return Object.assign({}, prototype, { setInputs, setSerialNumber, getSerialNumber, decrementSerialNumber, getJSON, unpackTask, spliceInput, getInputs, setInput, removeInput, getContent, del, getNode });
}

const Inputs = () => {
    let node = document.querySelector('.template-input').cloneNode();
    node.className = 'task-input';

    const getTextInput = () => {
        return node;
    }

    return { getTextInput };
}

const ButtonForAddTask = (() => {
    const node = (0,_views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_5__.getButtonForAddTask)();
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
/* harmony export */   getFolderNode: () => (/* binding */ getFolderNode),
/* harmony export */   getInputText: () => (/* binding */ getInputText)
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
    const name = getInputText();
    _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.appendChilds(folder, getWrapperIcon(id), name);
    return folder;
}

const getInputText = () => {
    const input = _helper_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.createNode('input', 'name');
    input.setAttribute("type", "text");
    input.placeholder = 'name?';
    return input;
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
    (0,_controllers_linksControllers__WEBPACK_IMPORTED_MODULE_0__.setListenerForLink)(link);
}

const createCluster = () => {
    const cluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'paths-cluster');
    cluster.style.paddingLeft += '1vh';
    return cluster;
}

const viewLink = (link) => {
    let container = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder().getCluster();
    let innerTasks = _models_folderModels__WEBPACK_IMPORTED_MODULE_3__.OpenedFolder.getOpenedFolder().getInnerTasks();
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

const setSvgForMainLink = (() => {
    const button = document.querySelector('.set-visible-paths');
    const svg = getNodeArrowRight();
    button.appendChild(svg);
})();

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
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/views/nodes/folder.js");



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
    const name = (0,_folder__WEBPACK_IMPORTED_MODULE_1__.getInputText)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLDJGQUEyRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFB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REFBWTtBQUM1Qzs7QUFFTztBQUNQLDJCQUEyQiw4REFBWTtBQUN2QztBQUNBO0FBQ0EsSUFBSSw4REFBWTtBQUNoQjs7QUFFTztBQUNQLHFCQUFxQiwwREFBVTtBQUMvQjtBQUNBLDZCQUE2QiwwREFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkgwQztBQUNIOztBQUV4QztBQUNBLHNCQUFzQixnREFBSztBQUMzQjtBQUNBLElBQUksZ0RBQUs7QUFDVDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFLO0FBQ3RCLGlCQUFpQixxREFBWTtBQUM3QixJQUFJLGdEQUFLO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvY29tbW9uQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlua3NDb250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL2xpbmtzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9yb290Rm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvdGFza0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2ZvbGRlck1vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2xpbmtPZlBhdGguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9yZWd1bGFycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL3Rhc2tNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9saW5rcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxdmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigydmgsIDJ2dyk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLm1haW4tbGluayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5zZXQtdmlzaWJsZS1wYXRocyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiBtaW4oNHZoLCAyMHZ3KTtcbn1cblxuLnBhdGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uZm9sZGVyczo6LXdlYmtpdC1zY3JvbGxiYXIsXG4udGFzay1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogbWluKDF2aCwgMTB2dyk7XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG5cbn1cblxuLmxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxdmggMCAwIDF2aDtcbn1cblxuLmRlbGV0ZS1saW5rLFxuLnRhc2stbGluay1zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgd2lkdGg6IDN2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kZWxldGUtbGluayA6aG92ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2xvc2UtY2x1c3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcbn1cblxuLmNvbnRlbnQ+Lm9wZW5lZC10YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogZm9sZGVycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZvbGRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xufVxuXG4ub3BlbmVkLXRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgcGFkZGluZzogbWluKDZ2aCwgNnZ3KTtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDkzdmg7XG4gICAgZ2FwOiBtaW4oNnZoLCA2dncpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGVtcGxhdGUtaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZW1wbGF0ZS10YXNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFzay1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xufVxuXG4udGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IG1pbig2dmgsIDZ2dyk7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcbn1cblxuLnRhc2stYm9keSB7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmZvbGRlcixcbi50YXNrLFxuLnRlbXBsYXRlRm9sZGVyLFxuLnRlbXBsYXRlVGFzayxcbi5iYWNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjZW50ZXInO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pY29uLXdyYXBwZXI+c3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNTBweDtcbn1cblxuLmljb24td3JhcHBlcj4udGVtcGxhdGVUYXNrU3ZnLFxuLmljb24td3JhcHBlcj4udGFza1N2ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLm5hbWUge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XG59XG5cbi50YXNrPi5uYW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi50ZW1wbGF0ZUZvbGRlcj4ubmFtZSxcbi5jaGFpbi1mb2xkZXJzIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBzdGFuZGFyZCBzeW50YXggKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHdlYmtpdCAoa29ucXVlcm9yKSBicm93c2VycyAqL1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBJRTEwKyAqL1xufVxuXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLndyYXBwZXI+LmFycm93LWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53cmFwcGVyPi5hcnJvdy11cCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogMTVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG4udGVtcGxhdGVUYXNrOmhvdmVyIHtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IDVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAgIGZyb20ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzoxLzEuMDAwMDAwMSkge1xuXG4gICAgLnNldC12aXNpYmxlLXBhdGhzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgJ3BhdGhzJ1xuICAgICAgICAgICAgJ2ZvbGRlcnMnO1xuICAgIH1cblxuICAgIC5wYXRocy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDEvMSkge1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3BhdGhzIGZvbGRlcnMnO1xuICAgIH1cblxuICAgIC5wYXRocy1jb250YWluZXIge1xuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogOTN2aDtcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICB9XG5cbiAgICAucGF0aHMtY2x1c3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGdC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XG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuc3BhbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZoO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMnZoLCAydncpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5tYWluLWxpbmsge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uc2V0LXZpc2libGUtcGF0aHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGluay10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZm9udC1zaXplOiBtaW4oNHZoLCAyMHZ3KTtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLm5hbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi5mb2xkZXJzOjotd2Via2l0LXNjcm9sbGJhcixcXG4udGFzay1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGhlaWdodDogbWluKDF2aCwgMTB2dyk7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xcblxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYmFkNDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5wYXRocy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGluay13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGluay1ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XFxuXFxufVxcblxcbi5saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZoIDAgMCAxdmg7XFxufVxcblxcbi5kZWxldGUtbGluayxcXG4udGFzay1saW5rLXN2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICB3aWR0aDogM3ZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kZWxldGUtbGluayA6aG92ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2xvc2UtY2x1c3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAydmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uY2xvc2UtY2x1c3RlciA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xcbn1cXG5cXG4uY29udGVudD4ub3BlbmVkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5mb2xkZXJzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwcHgsIDE1dmgpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGhlaWdodDogOTN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcXG59XFxuXFxuLm9wZW5lZC10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIHBhZGRpbmc6IG1pbig2dmgsIDZ2dyk7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICBnYXA6IG1pbig2dmgsIDZ2dyk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGVtcGxhdGUtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGVtcGxhdGUtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWlucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogbWluKDJ2aCwgMnZ3KTtcXG59XFxuXFxuLnRhc2staW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IG1pbig2dmgsIDZ2dyk7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxufVxcblxcbi50YXNrLWJvZHkge1xcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZm9sZGVyLFxcbi50YXNrLFxcbi50ZW1wbGF0ZUZvbGRlcixcXG4udGVtcGxhdGVUYXNrLFxcbi5iYWNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjZW50ZXInO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi13cmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5pY29uLXdyYXBwZXI+c3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDIwdmg7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgbWluLXdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uaWNvbi13cmFwcGVyPi50ZW1wbGF0ZVRhc2tTdmcsXFxuLmljb24td3JhcHBlcj4udGFza1N2ZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5hbWUge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XFxufVxcblxcbi50YXNrPi5uYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogSUUxMCsgKi9cXG59XFxuXFxuLndyYXBwZXI+LmZvbGRlclN2ZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLndyYXBwZXI+LmFycm93LWRvd24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XFxufVxcblxcbi50ZW1wbGF0ZVRhc2s6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7XFxuXFxuICAgIC5zZXQtdmlzaWJsZS1wYXRocyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAncGF0aHMnXFxuICAgICAgICAgICAgJ2ZvbGRlcnMnO1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3BhdGhzIGZvbGRlcnMnO1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBwYXRocztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jbHVzdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBDbHVzdGVyTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgdmlld0xpbmtPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyLCBzZXRMaXN0ZW5lckZvckxpbmsgfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIHZpZXdFbGVtZW50KEJ1dHRvbkZvckFkZEZvbGRlci5nZXROb2RlKCksICdhZGQnKS5mb3JPbGRFbGVtZW50KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIHZpZXdFbGVtZW50KEJ1dHRvbkZvckNsb3NlRm9sZGVyLmdldE5vZGUoKSwgJ2Nsb3NlJykuZm9yT2xkRWxlbWVudCgpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uVG9BZGRUYXNrID0gKCkgPT4ge1xuICAgIHZpZXdFbGVtZW50KEJ1dHRvbkZvckFkZFRhc2suZ2V0Tm9kZSgpLCAnYWRkJykuZm9yT2xkRWxlbWVudCgpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25zID0gKCkgPT4ge1xuICAgIGNyZWF0ZUJ1dHRvblRvQ2xvc2VGb2xkZXIoKTtcbiAgICBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlcigpO1xuICAgIGNyZWF0ZUJ1dHRvblRvQWRkVGFzaygpO1xufVxuXG5jb25zdCBzZXRCdXR0b25zTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQWRkRm9sZGVyKEJ1dHRvbkZvckFkZEZvbGRlcik7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRUYXNrKEJ1dHRvbkZvckFkZFRhc2spO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQ2xvc2VGb2xkZXIoQnV0dG9uRm9yQ2xvc2VGb2xkZXIpO1xuICAgIHNldExpc3RlbmVycygpLmZvck1haW5MaW5rQnV0dG9uVG9BbGxQYXRocygpO1xuXG59O1xuXG5leHBvcnQgY29uc3Qgdmlld0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBjb25zdCBub2RlID0gZWxlbWVudC5nZXROb2RlKCk7XG4gICAgICAgIHZpZXdFbGVtZW50KG5vZGUpLmZvck9sZEVsZW1lbnQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdGFydCA9IChyb290Rm9sZGVyKSA9PiB7XG4gICAgcm9vdEZvbGRlci5zZXRQYXJlbnQocm9vdEZvbGRlcik7XG4gICAgcm9vdEZvbGRlci5zZXRMaW5rKENsdXN0ZXJMaW5rKHJvb3RGb2xkZXIpKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsocm9vdEZvbGRlci5nZXRMaW5rKCkpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIHNldEJ1dHRvbnNMaXN0ZW5lcnMoKTtcbiAgICBvcGVuQ2x1c3Rlcihyb290Rm9sZGVyLmdldExpbmsoKSk7XG4gICAgdmlld0xpbmtPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG59OyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBzZXJpYWxOdW1iZXJGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgT3BlbmVkVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgdmlld0xpbmtPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbnMsIHZpZXdFbGVtZW50cyB9IGZyb20gXCIuL2NvbW1vbkNvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIsIGFkZExpbmtUb1BhdGggfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IGFkZEZvbGRlciB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL2ZvbGRlcnNcIjtcbmltcG9ydCB7IGhpZGRlbk9wZW5lZFRhc2sgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlcnNcIjtcblxuZXhwb3J0IGNvbnN0IG9wZW5Gb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgaGlkZGVuT3BlbmVkVGFzaygpO1xuICAgIGNsZWFyRm9sZGVyc0NvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICB2aWV3TGlua09wZW5lZEZvbGRlcihmb2xkZXIpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJUYXNrcygpKTtcbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbn1cblxuY29uc3QgY2xlYXJGb2xkZXJzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGxldCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoZm9sZGVycyk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXIgPSAoZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKSA9PiB7XG4gICAgbGV0IG5ld0ZvbGRlciA9IGZvbGRlci5hZGRGb2xkZXIoKTtcbiAgICBuZXdGb2xkZXIuc2V0U2VyaWFsTnVtYmVyKHNlcmlhbE51bWJlckZvbGRlci5nZXRTZXJpYWxOdW1iZXIoKSk7XG4gICAgc2VyaWFsTnVtYmVyRm9sZGVyLmluY3JlbWVudCgpO1xuICAgIHZpZXdFbGVtZW50KG5ld0ZvbGRlci5nZXROb2RlKCkpLmZvck5ld0VsZW1lbnQoKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JGb2xkZXIobmV3Rm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JJbnB1dFRvTmFtZShuZXdGb2xkZXIpO1xuICAgIGFkZExpbmtUb1BhdGgobmV3Rm9sZGVyKTtcbiAgICBhZGRGb2xkZXIobmV3Rm9sZGVyKTtcbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuZXdGb2xkZXIuZ2V0SWQoKX1gLCBuZXdGb2xkZXIuZ2V0SlNPTigpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtmb2xkZXIuZ2V0SWQoKX1gLCBmb2xkZXIuZ2V0SlNPTigpKTtcblxufVxuXG5leHBvcnQgY29uc3Qgc2V0UmVzaXplT2JzZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZSA9PiB7XG4gICAgICAgIHNldEZvbnRTaXplVG9Gb2xkZXJzKHRlbXBsYXRlKTtcbiAgICB9KVxuXG4gICAgcm8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXInKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZVRvRm9sZGVycyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIFRvb2xzLnJlbGF0aXZlRm9udCh0ZW1wbGF0ZSwgJy0tZm9udC1zaXplLXRvLWZvbGRlcicpO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgQ2x1c3RlckxpbmssIFRhc2tMaW5rIH0gZnJvbSBcIi4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCwgdmlld0xpbmsgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkFsbExpbmtzID0gKCkgPT4ge1xuICAgIGxldCBwYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRocy1jb250YWluZXInKTtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXZpc2libGUtcGF0aHMnKTtcbiAgICBwYXRocy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGNsb3NlLCBnZXROb2RlQXJyb3dEb3duKCkpO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2VBbGxMaW5rcyA9ICgpID0+IHtcbiAgICBsZXQgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC12aXNpYmxlLXBhdGhzJyk7XG4gICAgcGF0aHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZUNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLmNsb3NlKGNsdXN0ZXIsIDEsIDAsIDIwMCwgJ2ZvcndhcmRzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsdXN0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAyMDApO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlbkNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93RG93bigpKTtcbiAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4oY2x1c3RlciwgMCwgMSwgMjAwLCAnZm9yd2FyZHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyRm9yTGluayA9IChsaW5rKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JMaW5rKGxpbmspO1xuICAgIGlmIChjbHVzdGVyQ2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMoY2x1c3RlckNsb3NlLCBsaW5rKTtcbiAgICB9XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9EZWxldGVMaW5rKGxpbmspO1xufVxuXG5jb25zdCBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyA9IChjbG9zZSwgY2hpbGQpID0+IHtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoY2xvc2UpO1xuICAgIGNsb3NlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGZvbGRlci5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGJ1dHRvbiA9IGZvbGRlci5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgaWYgKGZvbGRlci5nZXRJZCgpICE9PSAwICYmIGZvbGRlci5nZXRJZCgpICE9PSAnMCcpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoZm9sZGVyLmdldFBhcmVudCgpKTtcbiAgICB9IGVsc2UgaWYgKGZvbGRlci5nZXRJZCgpID09PSAwIHx8IGZvbGRlci5nZXRJZCgpID09PSAnMCcpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpbmtUb1BhdGggPSAoZWxlbWVudCwgdHlwZSA9ICdmb2xkZXInKSA9PiB7XG4gICAgbGV0IGxpbmsgPSB0eXBlID09PSAnZm9sZGVyJyA/IGdldEN1c3RvbUxpbmsoZWxlbWVudCkgOiBUYXNrTGluayhlbGVtZW50KTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG4gICAgZWxlbWVudC5zZXRMaW5rKGxpbmspO1xuICAgIHZpZXdMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VzdG9tTGluayA9IChmb2xkZXIpID0+IHtcbiAgICBjb25zdCBsaW5rID0gQ2x1c3RlckxpbmsoZm9sZGVyKTtcbiAgICBsaW5rLmdldENsdXN0ZXIoKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Q2x1c3RlcigpKTtcbiAgICByZXR1cm4gbGluaztcbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgT3BlbmVkSW5wdXQsIE9wZW5lZFRhc2sgfSBmcm9tIFwiLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUZvbGRlciwgb3BlbkZvbGRlciB9IGZyb20gXCIuL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgY2xvc2VBbGxMaW5rcywgY2xvc2VDbHVzdGVyLCBvcGVuQWxsTGlua3MsIG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRm9sZGVyIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlQ29udHJvbGxlcnMvY29tbW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBvcGVuVGFzaywgdGFza0NvbnRlbnRIYW5kbGVyIH0gZnJvbSBcIi4vdGFza0NvbnRyb2xsZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9yRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGZvbGRlci5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrRm9sZGVyID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgb3BlbkZvbGRlcihmb2xkZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSB0YXNrLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tUYXNrID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgb3BlblRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkVGFzayA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciA9IChidXR0b24pID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBidXR0b24uZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0J1dHRvbiA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGxldCBvcGVuZWRGb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCk7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKG9wZW5lZEZvbGRlci5nZXRQYXJlbnQoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckxpbmsgPSAobGluaykgPT4ge1xuICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgIGxldCBub2RlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmsuZ2V0RWxlbWVudCgpLmdldFNlcmlhbE51bWJlcigpKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgb3BlbkZvbGRlcihsaW5rLmdldEZvbGRlcigpKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIG9wZW5UYXNrKGxpbmsuZ2V0VGFzaygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU92ZXJOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb2xvciA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljZmQ5Yyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU91dE5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTWFpbkxpbmtCdXR0b25Ub0FsbFBhdGhzID0gKCkgPT4ge1xuICAgICAgICBsZXQgZmxhZztcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXZpc2libGUtcGF0aHMnKTtcbiAgICAgICAgbGV0IHBhdGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBmbGFnID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShwYXRocykuZGlzcGxheTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBvcGVuQWxsTGlua3MoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvc2VBbGxMaW5rcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0NsdXN0ZXJQYXRocyA9IChub2RlLCBsaW5rKSA9PiB7XG4gICAgICAgIGxldCBmbGFnO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBmbGFnID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShsaW5rLmdldENsdXN0ZXIoKSkuZGlzcGxheTtcbiAgICAgICAgICAgIGlmIChmbGFnID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBvcGVuQ2x1c3RlcihsaW5rKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xvc2VDbHVzdGVyKGxpbmspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0RlbGV0ZUxpbmsgPSAobGluaykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtbGluaycpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gbGluay5nZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0Lgg0LLRgdGRINC10LPQviDRgdC+0LTQtdGA0LbQuNC80L7QtT8nKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxldCBmb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Zm9sZGVyLmdldElkKCl9YCwgZm9sZGVyLmdldEpTT04oKSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7ZWxlbWVudC5nZXRJZCgpfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmb3JUaXRsZUlucHV0ID0gKGlucHV0LCBjb250ZW50KSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJvZHknKTtcbiAgICAgICAgY29uc3QgcHJlc3NLZXlzID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SW5wdXQgPSB0YXNrQ29udGVudEhhbmRsZXIoKS5nZXROZXdJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHRhc2suc3BsaWNlSW5wdXQoaW5kZXggKyAxLCBuZXdJbnB1dCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdJbnB1dCwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLmFjdGl2YXRlSW5wdXQobmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgICAgICAgICAgICAgZm9ySW5wdXQobmV3SW5wdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnNldE5leHRpbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsZWZ0Q2xpY2sgPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLmFjdGl2YXRlSW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmb3JJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBwcmVzc0tleXNVcCA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0SW5wdXRzKCkuaW5kZXhPZihpbnB1dCk7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGxldCBuZXdJbnB1dCA9IHRhc2tDb250ZW50SGFuZGxlcigpLmdldE5ld0lucHV0KCk7XG4gICAgICAgICAgICAgICAgdGFzay5zcGxpY2VJbnB1dChpbmRleCArIDEsIG5ld0lucHV0KTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS52aWV3TmV3SW5wdXQoaW5wdXQsIG5ld0lucHV0KTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0YXNrLmdldElkKCl9YCwgdGFzay5nZXRKU09OKCkpO1xuICAgICAgICAgICAgICAgIGZvcklucHV0KG5ld0lucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcmVzc0tleXNEb3duID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnJlbW92ZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnNldFByZXZpb3VzSW5wdXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5zZXROZXh0aW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsZWZ0Q2xpY2sgPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuYWN0aXZhdGVJbnB1dChpbnB1dCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBjb25zdCBmb3JJbnB1dFRvTmFtZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBpbnB1dCA9IGVsZW1lbnQuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICAgICAgY29uc3QgZm9jdXNPdXQgPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHNldE5hbWUoKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtlbGVtZW50LmdldElkKCl9YCwgZWxlbWVudC5nZXRKU09OKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGxpbmsgPSBlbGVtZW50LmdldExpbmsoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGxpbmsuc2V0TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBmb3JJbnB1dCwgZm9ySW5wdXRUb05hbWUsIGZvck1haW5MaW5rQnV0dG9uVG9BbGxQYXRocywgZm9yVGl0bGVJbnB1dCwgZm9yVGFzaywgZm9yQnV0dG9uVG9BZGRUYXNrLCBmb3JCdXR0b25Ub0RlbGV0ZUxpbmssIGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzLCBmb3JMaW5rLCBmb3JGb2xkZXIsIGZvckJ1dHRvblRvQWRkRm9sZGVyLCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyIH1cbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIsIFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgT3BlbmVkVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi4vY29tbW9uQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi4vZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBvcGVuQ2x1c3RlciB9IGZyb20gXCIuLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBvcGVuVGFzayB9IGZyb20gXCIuLi90YXNrQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGFkZEZvbGRlckRhdGEsIGdldEZvbGRlciwgbG9hZEZvbGRlcnNFbGVtZW50cywgc2V0QWxsRm9sZGVyUGFyZW50cywgc2V0QWxsSW5uZXJGb2xkZXJzLCBzZXRBbGxJbm5lclRhc2tzLCBzb3J0Rm9sZGVyc0RhdGEgfSBmcm9tIFwiLi9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua3MgfSBmcm9tIFwiLi9saW5rc1wiO1xuaW1wb3J0IHsgbG9hZFJvb3RGb2xkZXIsIHNldFJvb3RGb2xkZXJQYXJlbnQsIHNldFJvb3RJbm5lckZvbGRlcnMsIHNldFJvb3RJbm5lclRhc2tzLCBzZXRSb290VGFza1BhcmVudCB9IGZyb20gXCIuL3Jvb3RGb2xkZXJcIjtcbmltcG9ydCB7IGFkZFRhc2tEYXRhLCBnZXRUYXNrLCBsb2FkVGFza2NvbnRlbnQsIGxvYWRUYXNrc0NvbnRlbnRzLCBsb2FkVGFza3NFbGVtZW50cywgc2V0QWxsVGFza1BhcmVudHMsIHNvcnRUYXNrc0RhdGEgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgY29uc3QgbGFvZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHBhcnNlRGF0YSgpO1xuICAgIGxvYWRGb2xkZXJzKCk7XG4gICAgbG9hZFRhc2tzKCk7XG4gICAgdmlld0xpbmtzKCk7XG4gICAgbG9hZExhc3RDb250ZW50KCk7XG59XG5cbmNvbnN0IGxvYWRMYXN0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBsYXN0Q29udGVudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RPcGVuJykpO1xuICAgIGNvbnNvbGUubG9nKGxhc3RDb250ZW50KVxuICAgIGxvYWRPcGVuZWRGb2xkZXIoKTtcbiAgICBpZiAobGFzdENvbnRlbnQgPT09ICd0YXNrJykge1xuICAgICAgICBsb2FkT3BlbmVkVGFzaygpO1xuICAgIH1cbn1cblxuY29uc3QgbG9hZE9wZW5lZEZvbGRlciA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVySWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcGVuZWRGb2xkZXInKSk7XG4gICAgc3RhcnQoUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkpO1xuICAgIGlmIChmb2xkZXJJZCA9PT0gMCB8fCBmb2xkZXJJZCA9PT0gJzAnKSB7XG4gICAgICAgIG9wZW5Gb2xkZXIoUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZvbGRlciA9IGdldEZvbGRlcihmb2xkZXJJZCk7XG4gICAgICAgIG9wZW5Gb2xkZXIoZm9sZGVyKVxuICAgICAgICBvcGVuQ2x1c3Rlcihmb2xkZXIuZ2V0TGluaygpKTtcbiAgICB9XG59XG5cbmNvbnN0IGxvYWRPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCB0YXNrSWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcGVuZWRUYXNrJykpO1xuICAgIGlmICh0YXNrSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgdGFzayA9IGdldFRhc2sodGFza0lkKTtcbiAgICAgICAgb3BlblRhc2sodGFzayk7XG4gICAgICAgIG9wZW5DbHVzdGVyKHRhc2suZ2V0UGFyZW50KCkuZ2V0TGluaygpKTtcbiAgICB9XG59XG5cbmNvbnN0IGxvYWRGb2xkZXJzID0gKCkgPT4ge1xuICAgIHNvcnRGb2xkZXJzRGF0YSgpO1xuICAgIGxvYWRGb2xkZXJzRWxlbWVudHMoKTtcbiAgICBzZXRBbGxJbm5lckZvbGRlcnMoKTtcbiAgICBzZXRSb290SW5uZXJGb2xkZXJzKCk7XG4gICAgc2V0Um9vdEZvbGRlclBhcmVudCgpO1xuICAgIHNldEFsbEZvbGRlclBhcmVudHMoKTtcbn1cblxuY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xuICAgIHNvcnRUYXNrc0RhdGEoKTtcbiAgICBsb2FkVGFza3NFbGVtZW50cygpO1xuICAgIHNldFJvb3RJbm5lclRhc2tzKCk7XG4gICAgc2V0Um9vdFRhc2tQYXJlbnQoKTtcbiAgICBzZXRBbGxUYXNrUGFyZW50cygpO1xuICAgIHNldEFsbElubmVyVGFza3MoKTtcbiAgICBsb2FkVGFza3NDb250ZW50cygpO1xufVxuXG5jb25zdCBwYXJzZURhdGEgPSAoKSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09ICcwJykge1xuICAgICAgICAgICAgbG9hZFJvb3RGb2xkZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkLmluZGV4T2YoJ3QnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tEYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEZvbGRlckRhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBGb2xkZXIsIFJvb3RGb2xkZXIsIHNlcmlhbE51bWJlckZvbGRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21MaW5rLCBzZXRMaXN0ZW5lckZvckxpbmsgfSBmcm9tIFwiLi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4uL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgZ2V0VGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmxldCBmb2xkZXJzRGF0YSA9IFtdO1xubGV0IGZvbGRlcnMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGFkZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBmb2xkZXJzLnB1c2goZm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRGb2xkZXJzRGF0YSA9ICgpID0+IHtcbiAgICBmb2xkZXJzRGF0YS5zb3J0KChhLCBiKSA9PiAoYS5zZXJpYWxOdW1iZXIgPiBiLnNlcmlhbE51bWJlcikgPyAxIDogKChiLnNlcmlhbE51bWJlciA+IGEuc2VyaWFsTnVtYmVyKSA/IC0xIDogMCkpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkRm9sZGVyRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgZm9sZGVyc0RhdGEucHVzaChkYXRhKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlcnNEYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBmb2xkZXJzRGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZvbGRlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRm9sZGVyc0VsZW1lbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGRhdGEgb2YgZm9sZGVyc0RhdGEpIHtcbiAgICAgICAgbGV0IGZvbGRlciA9IGxvYWRGb2xkZXIoZGF0YSk7XG4gICAgICAgIGxvYWRGb2xkZXJMaW5rKGZvbGRlciwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZEZvbGRlciA9IChkYXRhLCBmbGFnID0gJycpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gRm9sZGVyKGRhdGEuaWQpO1xuICAgIHNldExpc3RlbmVycygpLmZvckZvbGRlcihmb2xkZXIpO1xuICAgIHNldExpc3RlbmVycygpLmZvcklucHV0VG9OYW1lKGZvbGRlcik7XG4gICAgZm9sZGVyLnVucGFja0ZvbGRlcihkYXRhKTtcbiAgICBpZiAoZmxhZyA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgIFJvb3RGb2xkZXIuc2V0Um9vdEZvbGRlcihmb2xkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvbGRlcnMucHVzaChmb2xkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBsb2FkRm9sZGVyTGluayA9IChmb2xkZXIsIGRhdGEpID0+IHtcbiAgICBsZXQgbGluayA9IGdldEN1c3RvbUxpbmsoZm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG4gICAgbGluay5zZXROYW1lKGRhdGEubGluayk7XG4gICAgbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gYFxcXFwke2RhdGEubGlua31gO1xuICAgIGZvbGRlci5zZXRMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWxsSW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhmb2xkZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldEFsbElubmVyVGFza3MgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgc2V0SW5uZXJUYXNrcyhmb2xkZXIpO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0SW5uZXJUYXNrcyA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgdGFza3NJZHMgPSBmb2xkZXIuZ2V0SW5uZXJUYXNrcygpO1xuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgZm9yIChsZXQgaWQgb2YgdGFza3NJZHMpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZ2V0VGFzayhpZClcbiAgICAgICAgaW5uZXJUYXNrcy5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgZm9sZGVyLnNldElubmVyVGFza3MoaW5uZXJUYXNrcyk7XG59XG5cblxuY29uc3Qgc2V0SW5uZXJGb2xkZXJzID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBmb2xkZXJzSWRzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpZCBvZiBmb2xkZXJzSWRzKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGdldEZvbGRlcihpZCk7XG4gICAgICAgIGlubmVyRm9sZGVycy5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgZm9sZGVyLnNldElubmVyRm9sZGVycyhpbm5lckZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGVyID0gKGlkKSA9PiB7XG4gICAgbGV0IHJlcyA9IGZvbGRlcnMuZmlsdGVyKGZvbGRlciA9PiB7XG4gICAgICAgIGlmIChmb2xkZXIuZ2V0SWQoKSA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXNbMF07XG59XG5cbmV4cG9ydCBjb25zdCBzZXRBbGxGb2xkZXJQYXJlbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIHNldEZvbGRlclBhcmVudHMoZm9sZGVyKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldEZvbGRlclBhcmVudHMgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGZvbGRlcnMgPSBmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCk7XG4gICAgZm9yIChsZXQgaUZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlGb2xkZXIuc2V0UGFyZW50KGZvbGRlcik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZm9sZGVyU2VyaWFsTnVtYmVyRGVjcmVtZW50ID0gKG51bWJlcikgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXIuZ2V0U2VyaWFsTnVtYmVyKCkgPiBudW1iZXIpIHtcbiAgICAgICAgICAgIGZvbGRlci5kZWNyZW1lbnRTZXJpYWxOdW1iZXIoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2ZvbGRlci5nZXRJZCgpfWAsIGZvbGRlci5nZXRKU09OKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlcmlhbE51bWJlckZvbGRlci5kZWNyZW1lbnQoKTtcbn0iLCJpbXBvcnQgeyBnZXRGb2xkZXJzIH0gZnJvbSBcIi4vZm9sZGVyc1wiO1xuaW1wb3J0IHsgZ2V0VGFza3MgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld0xpbmtzID0gKCkgPT4ge1xuICAgIGxldCBmb2xkZXJzID0gZ2V0Rm9sZGVycygpO1xuICAgIGxldCB0YXNrcyA9IGdldFRhc2tzKCk7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgdmlld0xpbmsoZm9sZGVyKTtcbiAgICB9XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICB2aWV3TGluayh0YXNrKTtcbiAgICB9XG59XG5cbmNvbnN0IHZpZXdMaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBmb2xkZXIuZ2V0UGFyZW50KCk7XG4gICAgcGFyZW50LmdldENsdXN0ZXIoKS5hcHBlbmRDaGlsZChmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKSk7XG59IiwiaW1wb3J0IHsgUm9vdEZvbGRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBnZXRGb2xkZXIsIGxvYWRGb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJzXCI7XG5pbXBvcnQgeyBnZXRUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRSb290Rm9sZGVyID0gKGRhdGEpID0+IHtcbiAgICBsb2FkRm9sZGVyKGRhdGEsICdyb290Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRSb290SW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgIGxldCBpZHMgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKS5nZXRJbm5lckZvbGRlcnMoKTtcbiAgICBsZXQgaW5uZXJGb2xkZXJzID0gW107XG4gICAgZm9yIChsZXQgaWQgb2YgaWRzKSB7XG4gICAgICAgIGxldCBmb2xkZXIgPSBnZXRGb2xkZXIoaWQpO1xuICAgICAgICBpbm5lckZvbGRlcnMucHVzaChmb2xkZXIpO1xuICAgIH1cbiAgICBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKS5zZXRJbm5lckZvbGRlcnMoaW5uZXJGb2xkZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFJvb3RGb2xkZXJQYXJlbnQgPSAoKSA9PiB7XG4gICAgbGV0IGZvbGRlcnMgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKS5nZXRJbm5lckZvbGRlcnMoKTtcbiAgICBmb3IgKGxldCBmb2xkZXIgb2YgZm9sZGVycykge1xuICAgICAgICBmb2xkZXIuc2V0UGFyZW50KFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRSb290SW5uZXJUYXNrcyA9ICgpID0+IHtcbiAgICBsZXQgaWRzID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0SW5uZXJUYXNrcygpO1xuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgZm9yIChsZXQgaWQgb2YgaWRzKSB7XG4gICAgICAgIGxldCB0YXNrID0gZ2V0VGFzayhpZCk7XG4gICAgICAgIGlubmVyVGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuc2V0SW5uZXJUYXNrcyhpbm5lclRhc2tzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldFJvb3RUYXNrUGFyZW50ID0gKCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpLmdldElubmVyVGFza3MoKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIHRhc2suc2V0UGFyZW50KFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVGFza0xpbmsgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2xpbmtPZlBhdGhcIjtcbmltcG9ydCB7IFRhc2ssIHNlcmlhbE51bWJlclRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVyRm9yTGluayB9IGZyb20gXCIuLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyB0YXNrQ29udGVudEhhbmRsZXIgfSBmcm9tIFwiLi4vdGFza0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBnZXRGb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJzXCI7XG5cbmxldCB0YXNrc0RhdGEgPSBbXTtcbmxldCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEYXRhID0gKGRhdGEpID0+IHtcbiAgICB0YXNrc0RhdGEucHVzaChkYXRhKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRUYXNrc0RhdGEgPSAoKSA9PiB7XG4gICAgdGFza3NEYXRhLnNvcnQoKGEsIGIpID0+IChhLnNlcmlhbE51bWJlciA+IGIuc2VyaWFsTnVtYmVyKSA/IDEgOiAoKGIuc2VyaWFsTnVtYmVyID4gYS5zZXJpYWxOdW1iZXIpID8gLTEgOiAwKSk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVGFza3NFbGVtZW50cyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBkYXRhIG9mIHRhc2tzRGF0YSkge1xuICAgICAgICBsZXQgdGFzayA9IGxvYWRUYXNrKGRhdGEpO1xuICAgICAgICBsb2FkVGFza0xpbmsodGFzaywgZGF0YSk7XG4gICAgfVxufVxuXG5jb25zdCBsb2FkVGFzayA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBUYXNrKGRhdGEuaWQpO1xuICAgIHNldExpc3RlbmVycygpLmZvclRhc2sodGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXRUb05hbWUodGFzayk7XG4gICAgdGFzay51bnBhY2tUYXNrKGRhdGEpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IGxvYWRUYXNrTGluayA9ICh0YXNrLCBkYXRhKSA9PiB7XG4gICAgbGV0IGxpbmsgPSBUYXNrTGluayh0YXNrKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG4gICAgbGluay5zZXROYW1lKGRhdGEubGluayk7XG4gICAgbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5saW5rfWA7XG4gICAgdGFzay5zZXRMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWxsVGFza1BhcmVudHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBsZXQgcGFyZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRhc2suZ2V0UGFyZW50KCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBnZXRGb2xkZXIodGFzay5nZXRQYXJlbnQoKSk7XG4gICAgICAgICAgICB0YXNrLnNldFBhcmVudChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFzayA9IChpZCkgPT4ge1xuICAgIGxldCByZXMgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgIGlmICh0YXNrLmdldElkKCkgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc1swXTtcbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tTZXJpYWxOdW1iZXJEZWNyZW1lbnQgPSAobnVtYmVyKSA9PiB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBpZiAodGFzay5nZXRTZXJpYWxOdW1iZXIoKSA+IG51bWJlcikge1xuICAgICAgICAgICAgdGFzay5kZWNyZW1lbnRTZXJpYWxOdW1iZXIoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VyaWFsTnVtYmVyVGFzay5kZWNyZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRUYXNrc0NvbnRlbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgbG9hZFRhc2tjb250ZW50KHRhc2spO1xuICAgIH1cbn1cblxuY29uc3QgbG9hZFRhc2tjb250ZW50ID0gKHRhc2spID0+IHtcbiAgICBsZXQgY29udGVudCA9IHRhc2suZ2V0Q29udGVudCgpO1xuICAgIGxldCBib2R5ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgbGV0IHRpdGxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBsZXQgaW5wdXRzID0gW107XG4gICAgbGV0IHZhbHVlc0lucHV0cyA9IHRhc2suZ2V0SW5wdXRzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzSW5wdXRzW2ldO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaCh0aXRsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRhc2tDb250ZW50SGFuZGxlcigpLmdldE5ld0lucHV0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRhc2suc2V0SW5wdXRzKGlucHV0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGFzay5nZXRJZCgpfWAsIHRhc2suZ2V0SlNPTigpKTtcbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgcmVndWxhcnMgfSBmcm9tIFwiLi4vbW9kZWxzL3JlZ3VsYXJzXCI7XG5pbXBvcnQgeyBJbnB1dHMsIE9wZW5lZElucHV0LCBPcGVuZWRUYXNrLCBUYXNrLCBzZXJpYWxOdW1iZXJUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZFRhc2sgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IGFkZExpbmtUb1BhdGggfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy90YXNrc1wiO1xuXG5cbmV4cG9ydCBjb25zdCB0YXNrQ29udGVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcblxuICAgIGNvbnN0IGlzTnVtYmVyTGlzdCA9IChzdHIpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrTnVtYmVybGlzdCA9IG5ldyBSZWdFeHAocmVndWxhcnMuY2hlY2tOdW1iZXJsaXN0LCAnZycpO1xuICAgICAgICBsZXQgcmVzID0gc3RyLm1hdGNoKGNoZWNrTnVtYmVybGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIHJlcyAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXdJbnB1dCA9ICh2YWx1ZSA9ICcnKSA9PiB7XG4gICAgICAgIGxldCBuZXdJbnB1dCA9IElucHV0cygpLmdldFRleHRJbnB1dCgpO1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3TmV3SW5wdXQgPSAoaW5wdXQsIG5ld0lucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0lucHV0LCBpbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIGFjdGl2YXRlSW5wdXQobmV3SW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgT3BlbmVkSW5wdXQuc2V0T3BlbmVkSW5wdXQoaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gT3BlbmVkSW5wdXQuZ2V0T3BlbmVkSW5wdXQoKTtcbiAgICAgICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLmdldENvbnRlbnQoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0YXNrLmdldElucHV0cygpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGlucHV0cy5pbmRleE9mKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIHsgaW5wdXQsIHRhc2ssIGNvbnRlbnQsIGNvbnRhaW5lciwgaW5wdXRzLCBpbmRleCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByZXZpb3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCAtIDFdO1xuICAgICAgICBpZiAoZGF0YS5pbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgYWN0aXZhdGVJbnB1dChvbGRJbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0aW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCArIDFdO1xuICAgICAgICBpZiAoZGF0YS5pbmRleCArIDEgPCBkYXRhLmlucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCAtIDFdO1xuICAgICAgICBkYXRhLnRhc2sucmVtb3ZlSW5wdXQoZGF0YS5pbnB1dCk7XG4gICAgICAgIGRhdGEuY29udGFpbmVyLnJlbW92ZUNoaWxkKGRhdGEuaW5wdXQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpc051bWJlckxpc3QsIHNldE5leHRpbnB1dCwgc2V0UHJldmlvdXNJbnB1dCwgcmVtb3ZlSW5wdXQsIGdldE5ld0lucHV0LCB2aWV3TmV3SW5wdXQsIGFjdGl2YXRlSW5wdXQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5UYXNrID0gKHRhc2spID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgcmVtb3ZlT3BlbmVkVGFzaygpO1xuICAgIHZpZXdMaW5rT3BlbmVkVGFzayh0YXNrKTtcbiAgICB2aXNpYmxlT3BlbmVkVGFzaygpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzay5nZXRDb250ZW50KCkpO1xuICAgIGNvbnN0IGlucHV0ID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgb3BlbmVkVGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgIGlmIChvcGVuZWRUYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChvcGVuZWRUYXNrLmdldENvbnRlbnQoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGlkZGVuT3BlbmVkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgb3BlbmVkVGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgIGlmIChvcGVuZWRUYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3BlbmVkVGFzay5nZXRDb250ZW50KCkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpc2libGVPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcGVuZWRUYXNrLmdldENvbnRlbnQoKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKSA9PiB7XG4gICAgbGV0IHRhc2tJZCA9IGZvbGRlci5nZXRUYXNrQ291bnQoKTtcbiAgICBsZXQgdGFzayA9IFRhc2sodGFza0lkKTtcbiAgICBmb2xkZXIuYWRkVGFzayh0YXNrKTtcbiAgICB0YXNrLnNldFNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXJUYXNrLmdldFNlcmlhbE51bWJlcigpKTtcbiAgICBzZXJpYWxOdW1iZXJUYXNrLmluY3JlbWVudCgpO1xuICAgIHNldExpc3RlbmVycygpLmZvclRhc2sodGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXRUb05hbWUodGFzayk7XG4gICAgYWRkTGlua1RvUGF0aCh0YXNrLCAndGFzaycpO1xuICAgIHZpZXdFbGVtZW50KHRhc2suZ2V0Tm9kZSgpLCAndGFzaycpLmZvck5ld0VsZW1lbnQoKTtcbiAgICBhZGRUYXNrKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Zm9sZGVyLmdldElkKCl9YCwgZm9sZGVyLmdldEpTT04oKSk7XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcblxuY29uc3QgVG9vbHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5vZGVXaXRoU3BhbiA9IChub2RlTmFtZSwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZU5vZGUobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gc2V0VXBTcGFuKG5vZGUsIHRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5vZGUgPSAobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgYWRkQ2xhc3Nlcyhub2RlLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcFNwYW4gPSAobm9kZSwgdGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3BhbiA9IGNyZWF0ZU5vZGUoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZENoaWxkcyA9IChub2RlLCAuLi5jaGlsZHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgICAgICBmb3IgKGxldCBhdHIgb2YgYXRycykge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkc0FmdGVyID0gKG5vZGUsIGNoaWxkKSA9PiB7XG4gICAgICAgIHdoaWxlIChub2RlLmxhc3RDaGlsZCAhPSBjaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IChtb2RlLCAuLi5ub2RlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBtb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAgPSAoLi4ubm9kZXMpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5jbG9zZShub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJnYmEyaGV4ID0gKHJnYmEpID0+IGAjJHtyZ2JhLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkK1xcLnswLDF9XFxkKikpP1xcKSQvKS5zbGljZSgxKS5tYXAoKG4sIGkpID0+IChpID09PSAzID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG4pICogMjU1KSA6IHBhcnNlRmxvYXQobikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpLnJlcGxhY2UoJ05hTicsICcnKSkuam9pbignJyl9YFxuXG4gICAgY29uc3QgcmVsYXRpdmVGb250ID0gKG5vZGVPZlJlbGF0aXZpdHksIGNzc1ZhcikgPT4ge1xuICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgIGxldCBmb2xkZXJIZWlnaHQgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGVPZlJlbGF0aXZpdHkpLndpZHRoO1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlRmxvYXQoZm9sZGVySGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKSAvIDY7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHtzaXplfXB4YCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuICAgICAgICB2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2libGluZ3M7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tX3JnYmEoKSB7XG4gICAgICAgIHZhciBvID0gTWF0aC5yb3VuZCwgciA9IE1hdGgucmFuZG9tLCBzID0gMjU1O1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArICcxJyArICcpJztcbiAgICB9XG5cbiAgICByZXR1cm4geyByYW5kb21fcmdiYSwgZ2V0U2libGluZ3MsIHJlbGF0aXZlRm9udCwgcmVtb3ZlQ2hpbGRzQWZ0ZXIsIGRpc3BsYXlNb2RlLCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAsIHNtb290aFZpc2liaWxpdHksIHJnYmEyaGV4LCBnZXROb2RlV2l0aFNwYW4sIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZU5vZGUsIGFwcGVuZENoaWxkcywgc2V0VXBTcGFuLCByZW1vdmVDaGlsZHMsIGFkZENsYXNzZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRvb2xzIH0iLCJpbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vY29udHJvbGxlcnMvY29tbW9uQ29udHJvbGxlcnMnO1xuaW1wb3J0IHsgc2V0UmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnMnO1xuaW1wb3J0IHsgbGFvZEVsZW1lbnRzIH0gZnJvbSAnLi9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9jb21tb24nO1xuaW1wb3J0IHsgUm9vdEZvbGRlciB9IGZyb20gJy4vbW9kZWxzL2ZvbGRlck1vZGVscyc7XG5pbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgdmlld1Jvb3RQYXRoc1RocmVlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9saW5rcyc7XG5cbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgIGxhb2RFbGVtZW50cygpO1xufSBlbHNlIHtcbiAgICBzdGFydChSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKSk7XG59XG5cbnNldFJlc2l6ZU9ic2VydmVycygpO1xudmlld1Jvb3RQYXRoc1RocmVlKCk7IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBpZFJlZ2lzdGVyID0gKCgpID0+IHtcbiAgICBsZXQgbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZFJlZ2lzdGVyJyk7XG4gICAgbGV0IHJlZ2lzdGVyID0gbG9hZCA9PT0gbnVsbCA/IFtdIDogbG9hZDtcblxuICAgIGNvbnN0IGFkZElkID0gKGlkKSA9PiB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2goaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRSZWdpc3RlcicsIEpTT04uc3RyaW5naWZ5KHJlZ2lzdGVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWRSZWdpc3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZElkLCBnZXRJZFJlZ2lzdGVyIH07XG59KSgpXG5cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKGlkcykgPT4ge1xuICAgIGxldCBuYW1lID0gJyc7XG4gICAgbGV0IGxpbms7XG4gICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcblxuICAgIGxldCBpZCA9IHBhcmVudCA9PT0gdW5kZWZpbmVkID8gMCA6IGAke3BhcmVudC5nZXRJZCgpfV8ke2lkc31gO1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROYW1lID0gKHZhbCkgPT4ge1xuICAgICAgICBuYW1lID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAobm9kZSkgPT4ge1xuICAgICAgICBsaW5rID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJZCA9ICh2YWwpID0+IHtcbiAgICAgICAgaWQgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldElkLCBnZXRJZCwgc2V0TmFtZSwgZ2V0TmFtZSwgc2V0TGluaywgZ2V0TGluaywgc2V0UGFyZW50LCBnZXRQYXJlbnQsXG4gICAgfVxufSIsImltcG9ydCB7IGdldEZvbGRlck5vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JBZGRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ2x1c3RlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgeyBmb2xkZXJTZXJpYWxOdW1iZXJEZWNyZW1lbnQsIGdldEZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9mb2xkZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxOdW1iZXJGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsb2FkU2VyaWFsTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcmlhbE51bWJlcicpO1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSBsb2FkU2VyaWFsTnVtYmVyID09PSBudWxsID8gMCA6IGxvYWRTZXJpYWxOdW1iZXI7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICArK3NlcmlhbE51bWJlcjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmlhbE51bWJlcicsIEpTT04uc3RyaW5naWZ5KHNlcmlhbE51bWJlcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgLS1zZXJpYWxOdW1iZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJpYWxOdW1iZXInLCBKU09OLnN0cmluZ2lmeShzZXJpYWxOdW1iZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZXJpYWxOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXJpYWxOdW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U2VyaWFsTnVtYmVyLCBkZWNyZW1lbnQsIGluY3JlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IGxvYWRPcGVuZWRGb2xkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcGVuZWRGb2xkZXInKSk7XG4gICAgbGV0IG9wZW5lZEZvbGRlcjtcbiAgICBpZiAobG9hZE9wZW5lZEZvbGRlciAhPT0gbnVsbCkge1xuICAgICAgICBvcGVuZWRGb2xkZXIgPSBnZXRGb2xkZXIobG9hZE9wZW5lZEZvbGRlcik7XG4gICAgfVxuICAgIGNvbnN0IHNldE9wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgb3BlbmVkRm9sZGVyID0gZm9sZGVyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdE9wZW4nLCBKU09OLnN0cmluZ2lmeSgnZm9sZGVyJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3BlbmVkRm9sZGVyJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyLmdldElkKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0T3BlbmVkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlbmVkRm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBzZXRPcGVuZWRGb2xkZXIsIGdldE9wZW5lZEZvbGRlciB9XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRm9sZGVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChpZCk7XG4gICAgbGV0IGNsdXN0ZXIgPSBjcmVhdGVDbHVzdGVyKCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldEZvbGRlck5vZGUoaWQpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXVxuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgbGV0IGZvbGRlckNvdW50ID0gMDtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBsZXQgc2VyaWFsTnVtYmVyO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKGZvbGRlckNvdW50KTtcbiAgICAgICAgc2V0Rm9sZGVyQ291bnQoKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2gobmV3Rm9sZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ld0ZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSBwcm90b3R5cGUuZ2V0UGFyZW50KCkuZ2V0SW5uZXJGb2xkZXJzKCkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlciAhPT0gcHJvdG90eXBlLmdldExpbmsoKS5nZXRGb2xkZXIoKSk7XG4gICAgICAgIHByb3RvdHlwZS5nZXRQYXJlbnQoKS5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQocHJvdG90eXBlLmdldExpbmsoKS5nZXROb2RlKCkpO1xuICAgICAgICBwcm90b3R5cGUuZ2V0UGFyZW50KCkuc2V0SW5uZXJGb2xkZXJzKGZpbHRlcik7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhbXSk7XG4gICAgICAgIGZvbGRlclNlcmlhbE51bWJlckRlY3JlbWVudChzZXJpYWxOdW1iZXIpO1xuICAgICAgICBvcGVuRm9sZGVyKHByb3RvdHlwZS5nZXRQYXJlbnQoKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5uZXJGb2xkZXJzID0gKGFycikgPT4ge1xuICAgICAgICBpbm5lckZvbGRlcnMgPSBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5uZXJGb2xkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICArK3Rhc2tDb3VudDtcbiAgICAgICAgaW5uZXJUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBpbm5lclRhc2tzID0gaW5uZXJUYXNrcy5maWx0ZXIoKGUpID0+IGUgIT09IHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lclRhc2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElubmVyVGFza3MgPSAodGFza3MpID0+IHtcbiAgICAgICAgaW5uZXJUYXNrcyA9IHRhc2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlZHVjZUZvbGRlckNvdW50ID0gKCkgPT4ge1xuICAgICAgICAtLWZvbGRlckNvdW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldEZvbGRlckNvdW50ID0gKCkgPT4ge1xuICAgICAgICArK2ZvbGRlckNvdW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRhc2tDb3VudCA9ICgpID0+IHtcbiAgICAgICAgKyt0YXNrQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0NvdW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGFza0NvdW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldElkRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgICAgbGV0IGFsbElkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBhbGxJZHMucHVzaChlbGVtZW50LmdldElkKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGxJZHM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2VyaWFsTnVtYmVyID0gKG51bWJlcikgPT4ge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VyaWFsTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2VyaWFsTnVtYmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudFNlcmlhbE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgLS1zZXJpYWxOdW1iZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SlNPTiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm90b3R5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbGluazogcHJvdG90eXBlLmdldExpbmsoKS5nZXROYW1lKCksXG4gICAgICAgICAgICBwYXJlbnQ6IHByb3RvdHlwZS5nZXRQYXJlbnQoKS5nZXRJZCgpLFxuICAgICAgICAgICAgaWQ6IGAke3Byb3RvdHlwZS5nZXRJZCgpfWAsXG4gICAgICAgICAgICBpbm5lckZvbGRlcnM6IGdldElkRWxlbWVudHMoaW5uZXJGb2xkZXJzKSxcbiAgICAgICAgICAgIGlubmVyVGFza3M6IGdldElkRWxlbWVudHMoaW5uZXJUYXNrcyksXG4gICAgICAgICAgICBmb2xkZXJDb3VudDogZm9sZGVyQ291bnQsXG4gICAgICAgICAgICB0YXNrQ291bnQ6IHRhc2tDb3VudCxcbiAgICAgICAgICAgIHNlcmlhbE51bWJlcjogc2VyaWFsTnVtYmVyLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGxpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHVucGFja0ZvbGRlciA9IChkYXRhKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRJZChkYXRhLmlkKTtcbiAgICAgICAgcHJvdG90eXBlLnNldE5hbWUoZGF0YS5uYW1lKTtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gcHJvdG90eXBlLmdldE5hbWUoKTtcbiAgICAgICAgcHJvdG90eXBlLnNldExpbmsoZGF0YS5saW5rKTtcbiAgICAgICAgcHJvdG90eXBlLnNldFBhcmVudChkYXRhLnBhcmVudCk7XG4gICAgICAgIGlubmVyRm9sZGVycyA9IGRhdGEuaW5uZXJGb2xkZXJzO1xuICAgICAgICBpbm5lclRhc2tzID0gZGF0YS5pbm5lclRhc2tzO1xuICAgICAgICBmb2xkZXJDb3VudCA9IGRhdGEuZm9sZGVyQ291bnQ7XG4gICAgICAgIHRhc2tDb3VudCA9IGRhdGEudGFza0NvdW50O1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBkYXRhLnNlcmlhbE51bWJlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IHNldElubmVyVGFza3MsIGdldFNlcmlhbE51bWJlciwgc2V0U2VyaWFsTnVtYmVyLCBkZWNyZW1lbnRTZXJpYWxOdW1iZXIsIHJlZHVjZUZvbGRlckNvdW50LCB1bnBhY2tGb2xkZXIsIGdldEpTT04sIHJlbW92ZVRhc2ssIGdldFRhc2tDb3VudCwgc2V0VGFza0NvdW50LCBzZXRGb2xkZXJDb3VudCwgYWRkVGFzaywgZ2V0SW5uZXJUYXNrcywgYWRkRm9sZGVyLCBkZWwsIHNldElubmVyRm9sZGVycywgZ2V0SW5uZXJGb2xkZXJzLCBnZXRDbHVzdGVyLCBnZXROb2RlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgUm9vdEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBGb2xkZXIoMCk7XG4gICAgY29uc3QgZ2V0Um9vdEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvb3RGb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Um9vdEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgcm9vdEZvbGRlciA9IGZvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0Um9vdEZvbGRlciwgZ2V0Um9vdEZvbGRlciB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckFkZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZEZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlcigpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpOyIsImltcG9ydCB7IGdldEZvbGRlckxpbmtOb2RlLCBnZXRUYXNrTGlua05vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcblxuZXhwb3J0IGNvbnN0IExpbmsgPSAoZWxlbWVudCkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50O1xuICAgIGxldCBpZCA9IHBhcmVudC5nZXRJZCgpO1xuICAgIGxldCBuYW1lID0gaWQ7XG4gICAgbGV0IG5vZGU7XG5cbiAgICBjb25zdCBnZXRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5vZGUgPSAoaU5vZGUpID0+IHtcbiAgICAgICAgbm9kZSA9IGlOb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5hbWUgPSAodmFsKSA9PiB7XG4gICAgICAgIG5hbWUgPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0TmFtZSwgc2V0Tm9kZSwgZ2V0Tm9kZSwgZ2V0TmFtZSwgZ2V0RWxlbWVudCB9O1xufVxuXG5leHBvcnQgY29uc3QgRm9sZGVyTGluayA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgdHlwZSA9ICdmb2xkZXInO1xuICAgIGxldCBwcm90b3R5cGUgPSBMaW5rKGZvbGRlcik7XG4gICAgcHJvdG90eXBlLnNldE5vZGUoZ2V0Rm9sZGVyTGlua05vZGUocHJvdG90eXBlLmdldE5hbWUoKSkpO1xuICAgIGNvbnN0IGdldEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb3RvdHlwZS5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldEZvbGRlciwgZ2V0VHlwZSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2tMaW5rID0gKHRhc2spID0+IHtcbiAgICBsZXQgdHlwZSA9ICd0YXNrJztcbiAgICBsZXQgcHJvdG90eXBlID0gTGluayh0YXNrKTtcbiAgICBwcm90b3R5cGUuc2V0Tm9kZShnZXRUYXNrTGlua05vZGUocHJvdG90eXBlLmdldE5hbWUoKSkpO1xuICAgIGNvbnN0IGdldFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90b3R5cGUuZ2V0RWxlbWVudCgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyBnZXRUYXNrLCBnZXRUeXBlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQ2x1c3RlckxpbmsgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IHByb3RvdHlwZSA9IEZvbGRlckxpbmsoZm9sZGVyKTtcbiAgICBsZXQgY2x1c3RlciA9IGZvbGRlci5nZXRDbHVzdGVyKCk7XG4gICAgY29uc3QgZ2V0Q2x1c3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyBnZXRDbHVzdGVyIH0pO1xufSIsImV4cG9ydCBjb25zdCByZWd1bGFycyA9IHtcbiAgICBjaGVja051bWJlcmxpc3Q6ICcoXihcXFxcZCtcXFxcLlxcXFxzKSknLFxufSIsImltcG9ydCB7IG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBnZXRUYXNrLCB0YXNrU2VyaWFsTnVtYmVyRGVjcmVtZW50IH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL3Rhc2tzXCI7XG5pbXBvcnQgeyB0YXNrQ29udGVudEhhbmRsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdGFza0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkVGFza1wiO1xuaW1wb3J0IHsgZ2V0VGFza05vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvdGFza1wiO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsTnVtYmVyVGFzayA9ICgoKSA9PiB7XG4gICAgbGV0IGxvYWRTZXJpYWxOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VyaWFsTnVtYmVyVGFzaycpO1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSBsb2FkU2VyaWFsTnVtYmVyID09PSBudWxsID8gMCA6IGxvYWRTZXJpYWxOdW1iZXI7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICArK3NlcmlhbE51bWJlcjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmlhbE51bWJlclRhc2snLCBKU09OLnN0cmluZ2lmeShzZXJpYWxOdW1iZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWNyZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIC0tc2VyaWFsTnVtYmVyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VyaWFsTnVtYmVyVGFzaycsIEpTT04uc3RyaW5naWZ5KHNlcmlhbE51bWJlcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNlcmlhbE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbE51bWJlcjtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRTZXJpYWxOdW1iZXIsIGRlY3JlbWVudCwgaW5jcmVtZW50IH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgT3BlbmVkVGFzayA9ICgoKSA9PiB7XG4gICAgbGV0IGxvYWRPcGVuZWRUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3BlbmVkVGFzaycpKTtcbiAgICBsZXQgb3BlbmVkVGFzaztcbiAgICBpZiAobG9hZE9wZW5lZFRhc2sgIT09IG51bGwpIHtcbiAgICAgICAgb3BlbmVkVGFzayA9IGdldFRhc2sobG9hZE9wZW5lZFRhc2spO1xuICAgIH1cbiAgICBjb25zdCBzZXRPcGVuZWRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgb3BlbmVkVGFzayA9IHRhc2s7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0T3BlbicsIEpTT04uc3RyaW5naWZ5KCd0YXNrJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3BlbmVkVGFzaycsIEpTT04uc3RyaW5naWZ5KHRhc2suZ2V0SWQoKSkpO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlbmVkVGFzaztcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXRPcGVuZWRUYXNrLCBnZXRPcGVuZWRUYXNrIH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRJbnB1dCA9ICgoKSA9PiB7XG4gICAgbGV0IG9wZW5lZElucHV0ID0gVG9vbHMuY3JlYXRlTm9kZSgnaW5wdXQnLCAncGx1ZycpO1xuXG4gICAgY29uc3Qgc2V0T3BlbmVkSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgZGlzYWJsZUlucHV0KCk7XG4gICAgICAgIG9wZW5lZElucHV0ID0gaW5wdXQ7XG4gICAgICAgIGFjdGl2YXRlSW5wdXQoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0T3BlbmVkSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBpZiAob3BlbmVkSW5wdXQgIT09IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLmdldElucHV0cygpWzBdKSB7XG4gICAgICAgICAgICBvcGVuZWRJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgY29tbWVudC4uLic7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVkSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNhYmxlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcGVuZWRJbnB1dCAhPT0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0SW5wdXRzKClbMF0pIHtcbiAgICAgICAgICAgIG9wZW5lZElucHV0LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0T3BlbmVkSW5wdXQsIGdldE9wZW5lZElucHV0IH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChgJHtpZH10YCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldFRhc2tOb2RlKGAke2lkfXRgKTtcbiAgICBsZXQgc2VyaWFsTnVtYmVyO1xuICAgIGxldCBpbnB1dHMgPSBbXTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFNlcmlhbE51bWJlciA9ICh2YWwpID0+IHtcbiAgICAgICAgc2VyaWFsTnVtYmVyID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNlcmlhbE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbE51bWJlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWNyZW1lbnRTZXJpYWxOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIC0tc2VyaWFsTnVtYmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0cy5wdXNoKGlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpY2VJbnB1dCA9IChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRzLnNwbGljZShpbmRleCwgMCwgaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUlucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0cyA9IGlucHV0cy5maWx0ZXIoKGUpID0+IGUgIT09IGlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbnB1dHM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5wdXRzID0gKHZhbCkgPT4ge1xuICAgICAgICBpbnB1dHMgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZS10YXNrJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdvcGVuZWQtdGFzayc7XG4gICAgICAgIHNldFRpdGxlSW5wdXQoY29udGVudCk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRUaXRsZUlucHV0ID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG4gICAgICAgIHNldElucHV0KGlucHV0KTtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yVGl0bGVJbnB1dChpbnB1dCwgY29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNldENvbnRlbnQoKTtcblxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldElucHV0c1ZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIGlucHV0cykge1xuICAgICAgICAgICAgaWYgKGlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZVRhc2soZSk7XG4gICAgICAgIHBhcmVudC5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQoZS5nZXRMaW5rKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgdGFza1NlcmlhbE51bWJlckRlY3JlbWVudChzZXJpYWxOdW1iZXIpO1xuICAgICAgICBvcGVuRm9sZGVyKHBhcmVudCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke2UuZ2V0SWQoKX1gKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cGFyZW50LmdldElkKCl9YCwgcGFyZW50LmdldEpTT04oKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SlNPTiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxpc3QgPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm90b3R5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbGluazogcHJvdG90eXBlLmdldExpbmsoKS5nZXROYW1lKCksXG4gICAgICAgICAgICBwYXJlbnQ6IHByb3RvdHlwZS5nZXRQYXJlbnQoKS5nZXRJZCgpLFxuICAgICAgICAgICAgaWQ6IGAke3Byb3RvdHlwZS5nZXRJZCgpfWAsXG4gICAgICAgICAgICBzZXJpYWxOdW1iZXI6IHNlcmlhbE51bWJlcixcbiAgICAgICAgICAgIGlucHV0czogZ2V0SW5wdXRzVmFsdWVzKCksXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5wYWNrVGFzayA9IChkYXRhKSA9PiB7XG4gICAgICAgIHByb3RvdHlwZS5zZXRJZChkYXRhLmlkKTtcbiAgICAgICAgcHJvdG90eXBlLnNldE5hbWUoZGF0YS5uYW1lKTtcbiAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gcHJvdG90eXBlLmdldE5hbWUoKTtcbiAgICAgICAgcHJvdG90eXBlLnNldExpbmsoZGF0YS5saW5rKTtcbiAgICAgICAgcHJvdG90eXBlLnNldFBhcmVudChkYXRhLnBhcmVudCk7XG4gICAgICAgIHNlcmlhbE51bWJlciA9IGRhdGEuc2VyaWFsTnVtYmVyO1xuICAgICAgICBpbnB1dHMgPSBkYXRhLmlucHV0cztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IHNldElucHV0cywgc2V0U2VyaWFsTnVtYmVyLCBnZXRTZXJpYWxOdW1iZXIsIGRlY3JlbWVudFNlcmlhbE51bWJlciwgZ2V0SlNPTiwgdW5wYWNrVGFzaywgc3BsaWNlSW5wdXQsIGdldElucHV0cywgc2V0SW5wdXQsIHJlbW92ZUlucHV0LCBnZXRDb250ZW50LCBkZWwsIGdldE5vZGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dHMgPSAoKSA9PiB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUtaW5wdXQnKS5jbG9uZU5vZGUoKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcblxuICAgIGNvbnN0IGdldFRleHRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0VGV4dElucHV0IH07XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JBZGRUYXNrID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQWRkVGFzaygpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpOyIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXJTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVGb2xkZXInKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0U3ZnSW5XcmFwcGVyID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZVRhc2tTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGRUYXNrQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGRUYXNrQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICd0ZW1wbGF0ZVRhc2snKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHModGFzaywgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQ2xvc2VGb2xkZXJBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2JhY2snKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlclN2ZycpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlck5vZGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBmb2xkZXJOb2RlQXNzZW1ibHkoaWQpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGZvbGRlck5vZGVBc3NlbWJseSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdmb2xkZXInLCBpZCk7XG4gICAgY29uc3QgbmFtZSA9IGdldElucHV0VGV4dCgpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhmb2xkZXIsIGdldFdyYXBwZXJJY29uKGlkKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldElucHV0VGV4dCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2lucHV0JywgJ25hbWUnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICduYW1lPyc7XG4gICAgcmV0dXJuIGlucHV0O1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZFRhc2sgfSBmcm9tIFwiLi9CdXR0b25Gb3JBZGRUYXNrXCI7XG5cbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuXG5leHBvcnQgY29uc3Qgdmlld0VsZW1lbnQgPSAobm9kZSwgZmxhZyA9ICdmb2xkZXInKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycycpO1xuICAgIGxldCBpbm5lclRhc2tzID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyVGFza3MoKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuXG4gICAgY29uc3QgZm9yT2xkRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvck5ld0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmbGFnID09PSAndGFzaycpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChmbGFnID09PSAnZm9sZGVyJykge1xuICAgICAgICAgICAgbGV0IGxhc3ROb2RlID0gaW5uZXJUYXNrcy5sZW5ndGggPiAwID8gaW5uZXJUYXNrcy5hdCgwKS5nZXROb2RlKCkgOiBjb250ZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGxhc3ROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGZvck5ld0VsZW1lbnQsIGZvck9sZEVsZW1lbnQgfTtcbn1cbiIsImltcG9ydCB7IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciwgc2V0TGlzdGVuZXJGb3JMaW5rIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiXG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIsIFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgT3BlbmVkVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1Jvb3RQYXRoc1RocmVlID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0TGluaygpO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcwLjN2aCAjMzZiYjM2IHNvbGlkJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCBnZXRUZW1wbGF0ZUxpbmtOb2RlID0gKG5hbWUsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlV3JhcHBlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLXdyYXBwZXInKTtcbiAgICBjb25zdCBsaW5rQm9keSA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLWJvZHknKTtcbiAgICBjb25zdCBub2RlTGluayA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYCR7bmFtZX1gLCAnbGluaycpO1xuICAgIGNvbnN0IGRlbCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdkZWxldGUtbGluaycpO1xuICAgIGRlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMobGlua0JvZHksIG5vZGUsIG5vZGVMaW5rLCBkZWwpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhub2RlV3JhcHBlciwgbGlua0JvZHkpO1xuICAgIGxldCBjb2xvciA9IFRvb2xzLnJhbmRvbV9yZ2JhKCk7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyTGVmdCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbiAgICBzZXRCb3JkZXJDb2xvcihub2RlV3JhcHBlcik7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5jb25zdCBzZXRCb3JkZXJDb2xvciA9IChub2RlKSA9PiB7XG4gICAgbGV0IGNvbG9yID0gVG9vbHMucmFuZG9tX3JnYmEoKTtcbiAgICBub2RlLnN0eWxlLmJvcmRlckxlZnQgPSBgMC4zdmggJHtjb2xvcn0gc29saWRgO1xuICAgIG5vZGUuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlckxpbmtOb2RlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZUxpbmtOb2RlKGBcXFxcJHtuYW1lfWAsIGZvckZvbGRlcigpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrTGlua05vZGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlTGlua05vZGUobmFtZSwgZm9yVGFzaygpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmNvbnN0IGZvckZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnY2xvc2UtY2x1c3RlcicpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBnZXROb2RlQXJyb3dSaWdodCgpO1xuICAgIGNsb3NlQ2x1c3Rlci5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0KTtcbiAgICByZXR1cm4gY2xvc2VDbHVzdGVyO1xufVxuXG5jb25zdCBmb3JUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tQcmV2aWV3ID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2stcHJldmlldycpO1xuICAgIGNvbnN0IHRhc2tJY29uID0gZ2V0VGFza1N2ZygpO1xuICAgIHRhc2tQcmV2aWV3LmFwcGVuZENoaWxkKHRhc2tJY29uKTtcbiAgICByZXR1cm4gdGFza1ByZXZpZXc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrU3ZnID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saW5rLXN2ZycpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd0Rvd24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1kb3duJykuY2xvbmVOb2RlKHRydWUpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm9kZUFycm93UmlnaHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtDZmcgPSAobGluaywgZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbHVzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAncGF0aHMtY2x1c3RlcicpO1xuICAgIGNsdXN0ZXIuc3R5bGUucGFkZGluZ0xlZnQgKz0gJzF2aCc7XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGluayA9IChsaW5rKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGlubmVyVGFza3MgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0SW5uZXJUYXNrcygpO1xuICAgIGlmIChpbm5lclRhc2tzLmxlbmd0aCA+IDAgJiYgbGluay5nZXRUeXBlKCkgPT09ICdmb2xkZXInKSB7XG4gICAgICAgIGxldCBsYXN0Tm9kZSA9IGlubmVyVGFza3MuYXQoMCkuZ2V0TGluaygpLmdldE5vZGUoKTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShsaW5rLmdldE5vZGUoKSwgbGFzdE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgfVxuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0xpbmtPcGVuZWRGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IG9wZW5lZEZvbGRlckxpbmsgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0TGluaygpLmdldE5vZGUoKTtcbiAgICBvcGVuZWRGb2xkZXJMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlOWY1ZTknO1xuICAgIGZvbGRlci5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2MGQwZTQnO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIoZm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rT3BlbmVkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IG9wZW5lZFRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICBpZiAob3BlbmVkVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBvcGVuZWRUYXNrTGluayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgICAgIG9wZW5lZFRhc2tMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlOWY1ZTknO1xuICAgIH1cbiAgICB0YXNrLmdldExpbmsoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTViNic7XG4gICAgT3BlbmVkVGFzay5zZXRPcGVuZWRUYXNrKHRhc2spO1xufVxuXG5jb25zdCBzZXRTdmdGb3JNYWluTGluayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC12aXNpYmxlLXBhdGhzJyk7XG4gICAgY29uc3Qgc3ZnID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXRJbnB1dFRleHQgfSBmcm9tIFwiLi9mb2xkZXJcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrTm9kZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gdGFzaztcbn1cblxuY29uc3QgdGFza05vZGVBc3NlbWJseSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGFzaycsIGlkKTtcbiAgICBjb25zdCBuYW1lID0gZ2V0SW5wdXRUZXh0KCk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHRhc2ssIGdldFdyYXBwZXJJY29uKGlkKSwgbmFtZSk7XG4gICAgcmV0dXJuIHRhc2s7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9