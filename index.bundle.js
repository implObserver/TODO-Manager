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
    if (folder.getId().toString() !== '0') {
        const display = document.defaultView.getComputedStyle(cluster).display;
        if (display === 'none' || display === '') {
            openCluster(folder.getLink())
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
                let folder = element.getParent();
                console.log(element)
                element.del(element);
                (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(folder);
                localStorage.setItem(`${folder.getId()}`, folder.getJSON());
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
        console.log(data.id)
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

const loadLastContent = () => {
    const lastContent = JSON.parse(localStorage.getItem('lastOpen'));
    (0,_folders__WEBPACK_IMPORTED_MODULE_6__.loadOpenedFolder)();
    if (lastContent === 'task') {
        (0,_tasks__WEBPACK_IMPORTED_MODULE_9__.loadOpenedTask)();
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
/* harmony export */   loadOpenedFolder: () => (/* binding */ loadOpenedFolder),
/* harmony export */   setAllFolderParents: () => (/* binding */ setAllFolderParents),
/* harmony export */   setAllInnerFolders: () => (/* binding */ setAllInnerFolders),
/* harmony export */   setAllInnerTasks: () => (/* binding */ setAllInnerTasks),
/* harmony export */   sortFoldersData: () => (/* binding */ sortFoldersData)
/* harmony export */ });
/* harmony import */ var _models_folderModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/folderModels */ "./src/models/folderModels.js");
/* harmony import */ var _commonControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonControllers */ "./src/controllers/commonControllers.js");
/* harmony import */ var _foldersControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _linksControllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../linksControllers */ "./src/controllers/linksControllers.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks */ "./src/controllers/localStorageControllers/tasks.js");







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
    (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.setListeners)().forFolder(folder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_4__.setListeners)().forInputToName(folder);
    folder.unpackFolder(data);
    if (flag === 'root') {
        _models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.setRootFolder(folder);
    } else {
        folders.push(folder);
    }
    return folder;
}

const loadFolderLink = (folder, data) => {
    let link = (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.getCustomLink)(folder);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.setListenerForLink)(link);
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
        let child = (0,_tasks__WEBPACK_IMPORTED_MODULE_5__.getTask)(id)
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

const loadOpenedFolder = () => {
    let folderId = JSON.parse(localStorage.getItem('openedFolder'));
    (0,_commonControllers__WEBPACK_IMPORTED_MODULE_1__.start)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder());
    if (folderId === 0 || folderId === '0') {
        (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(_models_folderModels__WEBPACK_IMPORTED_MODULE_0__.RootFolder.getRootFolder())
    } else {
        let folder = getFolder(folderId);
        (0,_foldersControllers__WEBPACK_IMPORTED_MODULE_2__.openFolder)(folder)
        console.log(folder.getLink().getNode())
        ;(0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.openCluster)(folder.getLink());
        (0,_linksControllers__WEBPACK_IMPORTED_MODULE_3__.openClusterWhenAddingFolder)(folder);
    }
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
/* harmony export */   loadOpenedTask: () => (/* binding */ loadOpenedTask),
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
                body.appendChild(input)
                ;(0,_listeners__WEBPACK_IMPORTED_MODULE_3__.setListeners)().forInput(input);
            }
        }
    }
    task.setInputs(inputs);
    localStorage.setItem(`${task.getId()}`, task.getJSON());
}

const loadOpenedTask = () => {
    let taskId = JSON.parse(localStorage.getItem('openedTask'));
    if (taskId !== undefined) {
        let task = getTask(taskId);
        (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.openTask)(task);
        (0,_linksControllers__WEBPACK_IMPORTED_MODULE_2__.openCluster)(task.getParent().getLink());
    }
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

    const del = (e) => {
        for (let folder of innerFolders) {
            folder.del();
        }
        for (let task of innerTasks) {
            task.del(task);
        }
        let filter = prototype.getParent().getInnerFolders().filter((folder) => folder !== prototype.getLink().getFolder());
        prototype.getParent().getCluster().removeChild(prototype.getLink().getNode());
        prototype.getParent().setInnerFolders(filter);
        setInnerFolders([]);
        localStorage.removeItem(`${prototype.getId()}`);
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
        let parent = prototype.getParent();
        parent.removeTask(e);
        console.log(e)
        parent.getCluster().removeChild(e.getLink().getNode());
        //taskSerialNumberDecrement(serialNumber);
        localStorage.removeItem(`${e.getId()}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLDJGQUEyRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFB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QUFZO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLDhEQUFZO0FBQ2hCOztBQUVPO0FBQ1AscUJBQXFCLDBEQUFVO0FBQy9CO0FBQ0EsNkJBQTZCLDBEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSDBDO0FBQ0g7O0FBRXhDO0FBQ0Esc0JBQXNCLGdEQUFLO0FBQzNCO0FBQ0EsSUFBSSxnREFBSztBQUNUO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0RBQUs7QUFDdEIsaUJBQWlCLHFEQUFZO0FBQzdCLElBQUksZ0RBQUs7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3M/MjJhYiIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9jb21tb25Db250cm9sbGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saW5rc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbG9jYWxTdG9yYWdlQ29udHJvbGxlcnMvZm9sZGVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbG9jYWxTdG9yYWdlQ29udHJvbGxlcnMvbGlua3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL3Jvb3RGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xvY2FsU3RvcmFnZUNvbnRyb2xsZXJzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy90YXNrQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2hlbHBlci90b29scy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9lbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZm9sZGVyTW9kZWxzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvbGlua09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL3JlZ3VsYXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvdGFza01vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckFkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2xpbmtzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIC0tZm9udC1zaXplLXRvLWZvbGRlcjogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbnNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMXZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDF2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogbWluKDJ2aCwgMnZ3KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4ubWFpbi1saW5rIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLnNldC12aXNpYmxlLXBhdGhzIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGluay10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBmb250LXNpemU6IG1pbig0dmgsIDIwdncpO1xufVxuXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcbi5uYW1lOjotd2Via2l0LXNjcm9sbGJhcixcbi5mb2xkZXJzOjotd2Via2l0LXNjcm9sbGJhcixcbi50YXNrLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xuXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmJhZDQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ucGF0aHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGluay13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmxpbmstYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcblxufVxuXG4ubGluayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDF2aCAwIDAgMXZoO1xufVxuXG4uZGVsZXRlLWxpbmssXG4udGFzay1saW5rLXN2ZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICB3aWR0aDogM3ZoO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRlbGV0ZS1saW5rIDpob3ZlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5jbG9zZS1jbHVzdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAydmg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLmNsb3NlLWNsdXN0ZXIgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdmMDM3O1xufVxuXG4uY29udGVudD4ub3BlbmVkLXRhc2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZm9sZGVycyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxNXZoKSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAxdmg7XG4gICAgaGVpZ2h0OiA5M3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XG59XG5cbi5vcGVuZWQtdGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBwYWRkaW5nOiBtaW4oNnZoLCA2dncpO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBnYXA6IG1pbig2dmgsIDZ2dyk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZW1wbGF0ZS1pbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRlbXBsYXRlLXRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IG1pbigydmgsIDJ2dyk7XG59XG5cbi50YXNrLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWluKDZ2aCwgNnZ3KTtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xufVxuXG4udGFzay1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIG1heC13aWR0aDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZm9sZGVyLFxuLnRhc2ssXG4udGVtcGxhdGVGb2xkZXIsXG4udGVtcGxhdGVUYXNrLFxuLmJhY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcHBlciB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmljb24td3JhcHBlcj5zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uaWNvbi13cmFwcGVyPi50ZW1wbGF0ZVRhc2tTdmcsXG4uaWNvbi13cmFwcGVyPi50YXNrU3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdG8tZm9sZGVyKTtcbn1cblxuLnRhc2s+Lm5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMCk7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxuLmNoYWluLWZvbGRlcnMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChzYWZhcmksIGNocm9tZSkgYnJvd3NlcnMgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIElFMTArICovXG59XG5cbi53cmFwcGVyPi5mb2xkZXJTdmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XG59XG5cbi50ZW1wbGF0ZVRhc2s6aG92ZXIge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbjogNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XG59XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7XG5cbiAgICAuc2V0LXZpc2libGUtcGF0aHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAncGF0aHMnXG4gICAgICAgICAgICAnZm9sZGVycyc7XG4gICAgfVxuXG4gICAgLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XG4gICAgfVxuXG4gICAgLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtYXJlYTogcGF0aHM7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiA5M3ZoO1xuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xuICAgIH1cblxuICAgIC5wYXRocy1jbHVzdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lB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XG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgLS1mb250LXNpemUtdG8tZm9sZGVyOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigydmgsIDJ2dyk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLm1haW4tbGluayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zZXQtdmlzaWJsZS1wYXRocyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBmb250LXNpemU6IG1pbig0dmgsIDIwdncpO1xcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi50YXNrLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi5saW5rLWJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG5cXG59XFxuXFxuLmxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmggMCAwIDF2aDtcXG59XFxuXFxuLmRlbGV0ZS1saW5rLFxcbi50YXNrLWxpbmstc3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS1saW5rIDpob3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxufVxcblxcbi5jb250ZW50Pi5vcGVuZWQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZm9sZGVycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbn1cXG5cXG4ub3BlbmVkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgcGFkZGluZzogbWluKDZ2aCwgNnZ3KTtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDkzdmg7XFxuICAgIGdhcDogbWluKDZ2aCwgNnZ3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50ZW1wbGF0ZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZS10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xcbn1cXG5cXG4udGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDZ2aCwgNnZ3KTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb2xkZXIsXFxuLnRhc2ssXFxuLnRlbXBsYXRlRm9sZGVyLFxcbi50ZW1wbGF0ZVRhc2ssXFxuLmJhY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLXdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmljb24td3JhcHBlcj5zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5pY29uLXdyYXBwZXI+LnRlbXBsYXRlVGFza1N2ZyxcXG4uaWNvbi13cmFwcGVyPi50YXNrU3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdG8tZm9sZGVyKTtcXG59XFxuXFxuLnRhc2s+Lm5hbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJRTEwKyAqL1xcbn1cXG5cXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuLnRlbXBsYXRlVGFzazpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDVzIGluZmluaXRlIGFsdGVybmF0ZSBkYXNoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHtcXG5cXG4gICAgLnNldC12aXNpYmxlLXBhdGhzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgICdwYXRocydcXG4gICAgICAgICAgICAnZm9sZGVycyc7XFxuICAgIH1cXG5cXG4gICAgLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XFxuICAgIH1cXG5cXG4gICAgLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW4tY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgICAgICBoZWlnaHQ6IDkzdmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XFxuICAgIH1cXG5cXG4gICAgLnBhdGhzLWNsdXN0ZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQnV0dG9uRm9yQWRkRm9sZGVyLCBCdXR0b25Gb3JDbG9zZUZvbGRlciwgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IENsdXN0ZXJMaW5rIH0gZnJvbSBcIi4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyBCdXR0b25Gb3JBZGRUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuaW1wb3J0IHsgb3BlbkNsdXN0ZXIsIHNldExpc3RlbmVyRm9yTGluayB9IGZyb20gXCIuL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uVG9BZGRGb2xkZXIgPSAoKSA9PiB7XG4gICAgdmlld0VsZW1lbnQoQnV0dG9uRm9yQWRkRm9sZGVyLmdldE5vZGUoKSwgJ2FkZCcpLmZvck9sZEVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgdmlld0VsZW1lbnQoQnV0dG9uRm9yQ2xvc2VGb2xkZXIuZ2V0Tm9kZSgpLCAnY2xvc2UnKS5mb3JPbGRFbGVtZW50KCk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25Ub0FkZFRhc2sgPSAoKSA9PiB7XG4gICAgdmlld0VsZW1lbnQoQnV0dG9uRm9yQWRkVGFzay5nZXROb2RlKCksICdhZGQnKS5mb3JPbGRFbGVtZW50KCk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlcigpO1xuICAgIGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9BZGRUYXNrKCk7XG59XG5cbmNvbnN0IHNldEJ1dHRvbnNMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRGb2xkZXIoQnV0dG9uRm9yQWRkRm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0FkZFRhc2soQnV0dG9uRm9yQWRkVGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbG9zZUZvbGRlcihCdXR0b25Gb3JDbG9zZUZvbGRlcik7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yTWFpbkxpbmtCdXR0b25Ub0FsbFBhdGhzKCk7XG5cbn07XG5cbmV4cG9ydCBjb25zdCB2aWV3RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IHtcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBlbGVtZW50LmdldE5vZGUoKTtcbiAgICAgICAgdmlld0VsZW1lbnQobm9kZSkuZm9yT2xkRWxlbWVudCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHN0YXJ0ID0gKHJvb3RGb2xkZXIpID0+IHtcbiAgICByb290Rm9sZGVyLnNldFBhcmVudChyb290Rm9sZGVyKTtcbiAgICByb290Rm9sZGVyLnNldExpbmsoQ2x1c3Rlckxpbmsocm9vdEZvbGRlcikpO1xuICAgIHNldExpc3RlbmVyRm9yTGluayhyb290Rm9sZGVyLmdldExpbmsoKSk7XG4gICAgT3BlbmVkRm9sZGVyLnNldE9wZW5lZEZvbGRlcihyb290Rm9sZGVyKTtcbiAgICBjcmVhdGVCdXR0b25zKCk7XG4gICAgc2V0QnV0dG9uc0xpc3RlbmVycygpO1xuICAgIG9wZW5DbHVzdGVyKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbiAgICB2aWV3TGlua09wZW5lZEZvbGRlcihyb290Rm9sZGVyKTtcbn07IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIsIHNlcmlhbE51bWJlckZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBPcGVuZWRUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9ucywgdmlld0VsZW1lbnRzIH0gZnJvbSBcIi4vY29tbW9uQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciwgYWRkTGlua1RvUGF0aCB9IGZyb20gXCIuL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgYWRkRm9sZGVyIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlQ29udHJvbGxlcnMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgaGlkZGVuT3BlbmVkVGFzayB9IGZyb20gXCIuL3Rhc2tDb250cm9sbGVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBoaWRkZW5PcGVuZWRUYXNrKCk7XG4gICAgY2xlYXJGb2xkZXJzQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIHZpZXdMaW5rT3BlbmVkRm9sZGVyKGZvbGRlcik7XG4gICAgdmlld0VsZW1lbnRzKGZvbGRlci5nZXRJbm5lckZvbGRlcnMoKSk7XG4gICAgdmlld0VsZW1lbnRzKGZvbGRlci5nZXRJbm5lclRhc2tzKCkpO1xuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xuXG59XG5cbmNvbnN0IGNsZWFyRm9sZGVyc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVyID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCBuZXdGb2xkZXIgPSBmb2xkZXIuYWRkRm9sZGVyKCk7XG4gICAgbmV3Rm9sZGVyLnNldFNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXJGb2xkZXIuZ2V0U2VyaWFsTnVtYmVyKCkpO1xuICAgIHNlcmlhbE51bWJlckZvbGRlci5pbmNyZW1lbnQoKTtcbiAgICB2aWV3RWxlbWVudChuZXdGb2xkZXIuZ2V0Tm9kZSgpKS5mb3JOZXdFbGVtZW50KCk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yRm9sZGVyKG5ld0ZvbGRlcik7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXRUb05hbWUobmV3Rm9sZGVyKTtcbiAgICBhZGRMaW5rVG9QYXRoKG5ld0ZvbGRlcik7XG4gICAgYWRkRm9sZGVyKG5ld0ZvbGRlcik7XG4gICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuZXdGb2xkZXIuZ2V0SWQoKX1gLCBuZXdGb2xkZXIuZ2V0SlNPTigpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtmb2xkZXIuZ2V0SWQoKX1gLCBmb2xkZXIuZ2V0SlNPTigpKTtcblxufVxuXG5leHBvcnQgY29uc3Qgc2V0UmVzaXplT2JzZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZSA9PiB7XG4gICAgICAgIHNldEZvbnRTaXplVG9Gb2xkZXJzKHRlbXBsYXRlKTtcbiAgICB9KVxuXG4gICAgcm8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXInKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZVRvRm9sZGVycyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIFRvb2xzLnJlbGF0aXZlRm9udCh0ZW1wbGF0ZSwgJy0tZm9udC1zaXplLXRvLWZvbGRlcicpO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgQ2x1c3RlckxpbmssIFRhc2tMaW5rIH0gZnJvbSBcIi4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCwgdmlld0xpbmsgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkFsbExpbmtzID0gKCkgPT4ge1xuICAgIGxldCBwYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRocy1jb250YWluZXInKTtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXZpc2libGUtcGF0aHMnKTtcbiAgICBwYXRocy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGNsb3NlLCBnZXROb2RlQXJyb3dEb3duKCkpO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2VBbGxMaW5rcyA9ICgpID0+IHtcbiAgICBsZXQgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC12aXNpYmxlLXBhdGhzJyk7XG4gICAgcGF0aHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZUNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLmNsb3NlKGNsdXN0ZXIsIDEsIDAsIDIwMCwgJ2ZvcndhcmRzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsdXN0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAyMDApO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlbkNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93RG93bigpKTtcbiAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4oY2x1c3RlciwgMCwgMSwgMjAwLCAnZm9yd2FyZHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyRm9yTGluayA9IChsaW5rKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JMaW5rKGxpbmspO1xuICAgIGlmIChjbHVzdGVyQ2xvc2UgIT09IG51bGwpIHtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMoY2x1c3RlckNsb3NlLCBsaW5rKTtcbiAgICB9XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9EZWxldGVMaW5rKGxpbmspO1xufVxuXG5jb25zdCBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyA9IChjbG9zZSwgY2hpbGQpID0+IHtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoY2xvc2UpO1xuICAgIGNsb3NlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGZvbGRlci5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGJ1dHRvbiA9IGZvbGRlci5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgaWYgKGZvbGRlci5nZXRJZCgpLnRvU3RyaW5nKCkgIT09ICcwJykge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5O1xuICAgICAgICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnIHx8IGRpc3BsYXkgPT09ICcnKSB7XG4gICAgICAgICAgICBvcGVuQ2x1c3Rlcihmb2xkZXIuZ2V0TGluaygpKVxuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDAgfHwgZm9sZGVyLmdldElkKCkgPT09ICcwJykge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkTGlua1RvUGF0aCA9IChlbGVtZW50LCB0eXBlID0gJ2ZvbGRlcicpID0+IHtcbiAgICBsZXQgbGluayA9IHR5cGUgPT09ICdmb2xkZXInID8gZ2V0Q3VzdG9tTGluayhlbGVtZW50KSA6IFRhc2tMaW5rKGVsZW1lbnQpO1xuICAgIHNldExpc3RlbmVyRm9yTGluayhsaW5rKTtcbiAgICBlbGVtZW50LnNldExpbmsobGluayk7XG4gICAgdmlld0xpbmsobGluayk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDdXN0b21MaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBDbHVzdGVyTGluayhmb2xkZXIpO1xuICAgIGxpbmsuZ2V0Q2x1c3RlcigpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIHJldHVybiBsaW5rO1xufSIsImltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBPcGVuZWRJbnB1dCwgT3BlbmVkVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBjbG9zZUFsbExpbmtzLCBjbG9zZUNsdXN0ZXIsIG9wZW5BbGxMaW5rcywgb3BlbkNsdXN0ZXIgfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyByZW1vdmVGb2xkZXIgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9jb21tb25cIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIG9wZW5UYXNrLCB0YXNrQ29udGVudEhhbmRsZXIgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gZm9sZGVyLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tGb2xkZXIgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvclRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IHRhc2suZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja1Rhc2sgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuVGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9BZGRGb2xkZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVGb2xkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9BZGRUYXNrID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IG9wZW5lZEZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIob3BlbmVkRm9sZGVyLmdldFBhcmVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTGluayA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobGluay5nZXRFbGVtZW50KCkuZ2V0U2VyaWFsTnVtYmVyKCkpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcGVuRm9sZGVyKGxpbmsuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgb3BlblRhc2sobGluay5nZXRUYXNrKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdXNlT3Zlck5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWNmZDljJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdXNlT3V0Tm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JNYWluTGlua0J1dHRvblRvQWxsUGF0aHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmbGFnO1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdmlzaWJsZS1wYXRocycpO1xuICAgICAgICBsZXQgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGZsYWcgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBhdGhzKS5kaXNwbGF5O1xuICAgICAgICAgICAgaWYgKGZsYWcgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZW5BbGxMaW5rcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZUFsbExpbmtzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzID0gKG5vZGUsIGxpbmspID0+IHtcbiAgICAgICAgbGV0IGZsYWc7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGZsYWcgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGxpbmsuZ2V0Q2x1c3RlcigpKS5kaXNwbGF5O1xuICAgICAgICAgICAgaWYgKGZsYWcgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZW5DbHVzdGVyKGxpbmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZUNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvRGVsZXRlTGluayA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1saW5rJyk7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBsaW5rLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgiDQuCDQstGB0ZEg0LXQs9C+INGB0L7QtNC10YDQttC40LzQvtC1PycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGVsZW1lbnQuZ2V0UGFyZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRlbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBvcGVuRm9sZGVyKGZvbGRlcik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Zm9sZGVyLmdldElkKCl9YCwgZm9sZGVyLmdldEpTT04oKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvclRpdGxlSW5wdXQgPSAoaW5wdXQsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgICAgICBjb25zdCBwcmVzc0tleXMgPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdJbnB1dCA9IHRhc2tDb250ZW50SGFuZGxlcigpLmdldE5ld0lucHV0KCk7XG4gICAgICAgICAgICAgICAgdGFzay5zcGxpY2VJbnB1dChpbmRleCArIDEsIG5ld0lucHV0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0lucHV0LCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuYWN0aXZhdGVJbnB1dChuZXdJbnB1dCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGFzay5nZXRJZCgpfWAsIHRhc2suZ2V0SlNPTigpKTtcbiAgICAgICAgICAgICAgICBmb3JJbnB1dChuZXdJbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuc2V0TmV4dGlucHV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnRDbGljayA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuYWN0aXZhdGVJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvcklucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXNzS2V5c1VwID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB0YXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRJbnB1dHMoKS5pbmRleE9mKGlucHV0KTtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0lucHV0ID0gdGFza0NvbnRlbnRIYW5kbGVyKCkuZ2V0TmV3SW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0YXNrLnNwbGljZUlucHV0KGluZGV4ICsgMSwgbmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnZpZXdOZXdJbnB1dChpbnB1dCwgbmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgICAgICAgICAgICAgZm9ySW5wdXQobmV3SW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByZXNzS2V5c0Rvd24gPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkucmVtb3ZlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGFzay5nZXRJZCgpfWAsIHRhc2suZ2V0SlNPTigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuc2V0UHJldmlvdXNJbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnNldE5leHRpbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxlZnRDbGljayA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5hY3RpdmF0ZUlucHV0KGlucHV0KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IGZvcklucHV0VG9OYW1lID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGlucHV0ID0gZWxlbWVudC5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBmb2N1c091dCA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgc2V0TmFtZSgpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2VsZW1lbnQuZ2V0SWQoKX1gLCBlbGVtZW50LmdldEpTT04oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgbGluayA9IGVsZW1lbnQuZ2V0TGluaygpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgbGluay5zZXROYW1lKG5hbWUpO1xuICAgICAgICAgICAgbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGZvcklucHV0LCBmb3JJbnB1dFRvTmFtZSwgZm9yTWFpbkxpbmtCdXR0b25Ub0FsbFBhdGhzLCBmb3JUaXRsZUlucHV0LCBmb3JUYXNrLCBmb3JCdXR0b25Ub0FkZFRhc2ssIGZvckJ1dHRvblRvRGVsZXRlTGluaywgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMsIGZvckxpbmssIGZvckZvbGRlciwgZm9yQnV0dG9uVG9BZGRGb2xkZXIsIGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIgfVxufSIsImltcG9ydCB7IE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBPcGVuZWRUYXNrIH0gZnJvbSBcIi4uLy4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyBzdGFydCB9IGZyb20gXCIuLi9jb21tb25Db250cm9sbGVyc1wiO1xuaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4uL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5UYXNrIH0gZnJvbSBcIi4uL3Rhc2tDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgYWRkRm9sZGVyRGF0YSwgZ2V0Rm9sZGVyLCBsb2FkRm9sZGVyc0VsZW1lbnRzLCBsb2FkT3BlbmVkRm9sZGVyLCBzZXRBbGxGb2xkZXJQYXJlbnRzLCBzZXRBbGxJbm5lckZvbGRlcnMsIHNldEFsbElubmVyVGFza3MsIHNvcnRGb2xkZXJzRGF0YSB9IGZyb20gXCIuL2ZvbGRlcnNcIjtcbmltcG9ydCB7IHZpZXdMaW5rcyB9IGZyb20gXCIuL2xpbmtzXCI7XG5pbXBvcnQgeyBsb2FkUm9vdEZvbGRlciwgc2V0Um9vdEZvbGRlclBhcmVudCwgc2V0Um9vdElubmVyRm9sZGVycywgc2V0Um9vdElubmVyVGFza3MsIHNldFJvb3RUYXNrUGFyZW50IH0gZnJvbSBcIi4vcm9vdEZvbGRlclwiO1xuaW1wb3J0IHsgYWRkVGFza0RhdGEsIGdldFRhc2ssIGxvYWRPcGVuZWRUYXNrLCBsb2FkVGFza2NvbnRlbnQsIGxvYWRUYXNrc0NvbnRlbnRzLCBsb2FkVGFza3NFbGVtZW50cywgc2V0QWxsVGFza1BhcmVudHMsIHNvcnRUYXNrc0RhdGEgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5leHBvcnQgY29uc3QgbGFvZEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHBhcnNlRGF0YSgpO1xuICAgIGxvYWRGb2xkZXJzKCk7XG4gICAgbG9hZFRhc2tzKCk7XG4gICAgdmlld0xpbmtzKCk7XG4gICAgbG9hZExhc3RDb250ZW50KCk7XG59XG5cbmNvbnN0IGxvYWRGb2xkZXJzID0gKCkgPT4ge1xuICAgIHNvcnRGb2xkZXJzRGF0YSgpO1xuICAgIGxvYWRGb2xkZXJzRWxlbWVudHMoKTtcbiAgICBzZXRBbGxJbm5lckZvbGRlcnMoKTtcbiAgICBzZXRSb290SW5uZXJGb2xkZXJzKCk7XG4gICAgc2V0Um9vdEZvbGRlclBhcmVudCgpO1xuICAgIHNldEFsbEZvbGRlclBhcmVudHMoKTtcbn1cblxuY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xuICAgIHNvcnRUYXNrc0RhdGEoKTtcbiAgICBsb2FkVGFza3NFbGVtZW50cygpO1xuICAgIHNldFJvb3RJbm5lclRhc2tzKCk7XG4gICAgc2V0Um9vdFRhc2tQYXJlbnQoKTtcbiAgICBzZXRBbGxUYXNrUGFyZW50cygpO1xuICAgIHNldEFsbElubmVyVGFza3MoKTtcbiAgICBsb2FkVGFza3NDb250ZW50cygpO1xufVxuXG5jb25zdCBwYXJzZURhdGEgPSAoKSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5pZClcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09ICcwJykge1xuICAgICAgICAgICAgbG9hZFJvb3RGb2xkZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkLmluZGV4T2YoJ3QnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tEYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZEZvbGRlckRhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgbG9hZExhc3RDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdE9wZW4nKSk7XG4gICAgbG9hZE9wZW5lZEZvbGRlcigpO1xuICAgIGlmIChsYXN0Q29udGVudCA9PT0gJ3Rhc2snKSB7XG4gICAgICAgIGxvYWRPcGVuZWRUYXNrKCk7XG4gICAgfVxufSIsImltcG9ydCB7IEZvbGRlciwgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyLCBzZXJpYWxOdW1iZXJGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgc3RhcnQgfSBmcm9tIFwiLi4vY29tbW9uQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi4vZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBnZXRDdXN0b21MaW5rLCBvcGVuQ2x1c3Rlciwgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyLCBzZXRMaXN0ZW5lckZvckxpbmsgfSBmcm9tIFwiLi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4uL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgZ2V0VGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmxldCBmb2xkZXJzRGF0YSA9IFtdO1xubGV0IGZvbGRlcnMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGFkZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICBmb2xkZXJzLnB1c2goZm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRGb2xkZXJzRGF0YSA9ICgpID0+IHtcbiAgICBmb2xkZXJzRGF0YS5zb3J0KChhLCBiKSA9PiAoYS5zZXJpYWxOdW1iZXIgPiBiLnNlcmlhbE51bWJlcikgPyAxIDogKChiLnNlcmlhbE51bWJlciA+IGEuc2VyaWFsTnVtYmVyKSA/IC0xIDogMCkpO1xufVxuXG5leHBvcnQgY29uc3QgYWRkRm9sZGVyRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgZm9sZGVyc0RhdGEucHVzaChkYXRhKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlcnNEYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBmb2xkZXJzRGF0YTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZvbGRlcnM7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRm9sZGVyc0VsZW1lbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGRhdGEgb2YgZm9sZGVyc0RhdGEpIHtcbiAgICAgICAgbGV0IGZvbGRlciA9IGxvYWRGb2xkZXIoZGF0YSk7XG4gICAgICAgIGxvYWRGb2xkZXJMaW5rKGZvbGRlciwgZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZEZvbGRlciA9IChkYXRhLCBmbGFnID0gJycpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gRm9sZGVyKGRhdGEuaWQpO1xuICAgIHNldExpc3RlbmVycygpLmZvckZvbGRlcihmb2xkZXIpO1xuICAgIHNldExpc3RlbmVycygpLmZvcklucHV0VG9OYW1lKGZvbGRlcik7XG4gICAgZm9sZGVyLnVucGFja0ZvbGRlcihkYXRhKTtcbiAgICBpZiAoZmxhZyA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgIFJvb3RGb2xkZXIuc2V0Um9vdEZvbGRlcihmb2xkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvbGRlcnMucHVzaChmb2xkZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBsb2FkRm9sZGVyTGluayA9IChmb2xkZXIsIGRhdGEpID0+IHtcbiAgICBsZXQgbGluayA9IGdldEN1c3RvbUxpbmsoZm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG4gICAgbGluay5zZXROYW1lKGRhdGEubGluayk7XG4gICAgbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gYFxcXFwke2RhdGEubGlua31gO1xuICAgIGZvbGRlci5zZXRMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWxsSW5uZXJGb2xkZXJzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhmb2xkZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldEFsbElubmVyVGFza3MgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgc2V0SW5uZXJUYXNrcyhmb2xkZXIpO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0SW5uZXJUYXNrcyA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgdGFza3NJZHMgPSBmb2xkZXIuZ2V0SW5uZXJUYXNrcygpO1xuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgZm9yIChsZXQgaWQgb2YgdGFza3NJZHMpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZ2V0VGFzayhpZClcbiAgICAgICAgaW5uZXJUYXNrcy5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgZm9sZGVyLnNldElubmVyVGFza3MoaW5uZXJUYXNrcyk7XG59XG5cblxuY29uc3Qgc2V0SW5uZXJGb2xkZXJzID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBmb2xkZXJzSWRzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpZCBvZiBmb2xkZXJzSWRzKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGdldEZvbGRlcihpZCk7XG4gICAgICAgIGlubmVyRm9sZGVycy5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgZm9sZGVyLnNldElubmVyRm9sZGVycyhpbm5lckZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGVyID0gKGlkKSA9PiB7XG4gICAgbGV0IHJlcyA9IGZvbGRlcnMuZmlsdGVyKGZvbGRlciA9PiB7XG4gICAgICAgIGlmIChmb2xkZXIuZ2V0SWQoKSA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2xkZXI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXNbMF07XG59XG5cbmV4cG9ydCBjb25zdCBzZXRBbGxGb2xkZXJQYXJlbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIHNldEZvbGRlclBhcmVudHMoZm9sZGVyKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldEZvbGRlclBhcmVudHMgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGZvbGRlcnMgPSBmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCk7XG4gICAgZm9yIChsZXQgaUZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlGb2xkZXIuc2V0UGFyZW50KGZvbGRlcik7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZm9sZGVyU2VyaWFsTnVtYmVyRGVjcmVtZW50ID0gKG51bWJlcikgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXIuZ2V0U2VyaWFsTnVtYmVyKCkgPiBudW1iZXIpIHtcbiAgICAgICAgICAgIGZvbGRlci5kZWNyZW1lbnRTZXJpYWxOdW1iZXIoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2ZvbGRlci5nZXRJZCgpfWAsIGZvbGRlci5nZXRKU09OKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlcmlhbE51bWJlckZvbGRlci5kZWNyZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRPcGVuZWRGb2xkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZvbGRlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3BlbmVkRm9sZGVyJykpO1xuICAgIHN0YXJ0KFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpKTtcbiAgICBpZiAoZm9sZGVySWQgPT09IDAgfHwgZm9sZGVySWQgPT09ICcwJykge1xuICAgICAgICBvcGVuRm9sZGVyKFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmb2xkZXIgPSBnZXRGb2xkZXIoZm9sZGVySWQpO1xuICAgICAgICBvcGVuRm9sZGVyKGZvbGRlcilcbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLmdldExpbmsoKS5nZXROb2RlKCkpXG4gICAgICAgIG9wZW5DbHVzdGVyKGZvbGRlci5nZXRMaW5rKCkpO1xuICAgICAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0Rm9sZGVycyB9IGZyb20gXCIuL2ZvbGRlcnNcIjtcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rcyA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVycyA9IGdldEZvbGRlcnMoKTtcbiAgICBsZXQgdGFza3MgPSBnZXRUYXNrcygpO1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIHZpZXdMaW5rKGZvbGRlcik7XG4gICAgfVxuICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgdmlld0xpbmsodGFzayk7XG4gICAgfVxufVxuXG5jb25zdCB2aWV3TGluayA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgcGFyZW50ID0gZm9sZGVyLmdldFBhcmVudCgpO1xuICAgIHBhcmVudC5nZXRDbHVzdGVyKCkuYXBwZW5kQ2hpbGQoZm9sZGVyLmdldExpbmsoKS5nZXROb2RlKCkpO1xufSIsImltcG9ydCB7IFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgZ2V0Rm9sZGVyLCBsb2FkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyc1wiO1xuaW1wb3J0IHsgZ2V0VGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkUm9vdEZvbGRlciA9IChkYXRhKSA9PiB7XG4gICAgbG9hZEZvbGRlcihkYXRhLCAncm9vdCcpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Um9vdElubmVyRm9sZGVycyA9ICgpID0+IHtcbiAgICBsZXQgaWRzID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0SW5uZXJGb2xkZXJzKCk7XG4gICAgbGV0IGlubmVyRm9sZGVycyA9IFtdO1xuICAgIGZvciAobGV0IGlkIG9mIGlkcykge1xuICAgICAgICBsZXQgZm9sZGVyID0gZ2V0Rm9sZGVyKGlkKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2goZm9sZGVyKTtcbiAgICB9XG4gICAgUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuc2V0SW5uZXJGb2xkZXJzKGlubmVyRm9sZGVycyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRSb290Rm9sZGVyUGFyZW50ID0gKCkgPT4ge1xuICAgIGxldCBmb2xkZXJzID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0SW5uZXJGb2xkZXJzKCk7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgZm9sZGVyLnNldFBhcmVudChSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Um9vdElubmVyVGFza3MgPSAoKSA9PiB7XG4gICAgbGV0IGlkcyA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpLmdldElubmVyVGFza3MoKTtcbiAgICBsZXQgaW5uZXJUYXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGlkIG9mIGlkcykge1xuICAgICAgICBsZXQgdGFzayA9IGdldFRhc2soaWQpO1xuICAgICAgICBpbm5lclRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpLnNldElubmVyVGFza3MoaW5uZXJUYXNrcyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRSb290VGFza1BhcmVudCA9ICgpID0+IHtcbiAgICBsZXQgdGFza3MgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKS5nZXRJbm5lclRhc2tzKCk7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICB0YXNrLnNldFBhcmVudChSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKSk7XG4gICAgfVxufSIsImltcG9ydCB7IFRhc2tMaW5rIH0gZnJvbSBcIi4uLy4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyBUYXNrLCBzZXJpYWxOdW1iZXJUYXNrIH0gZnJvbSBcIi4uLy4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyBvcGVuQ2x1c3Rlciwgc2V0TGlzdGVuZXJGb3JMaW5rIH0gZnJvbSBcIi4uL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuLi9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IG9wZW5UYXNrLCB0YXNrQ29udGVudEhhbmRsZXIgfSBmcm9tIFwiLi4vdGFza0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBnZXRGb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJzXCI7XG5cbmxldCB0YXNrc0RhdGEgPSBbXTtcbmxldCB0YXNrcyA9IFtdO1xuXG5leHBvcnQgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tEYXRhID0gKGRhdGEpID0+IHtcbiAgICB0YXNrc0RhdGEucHVzaChkYXRhKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRUYXNrc0RhdGEgPSAoKSA9PiB7XG4gICAgdGFza3NEYXRhLnNvcnQoKGEsIGIpID0+IChhLnNlcmlhbE51bWJlciA+IGIuc2VyaWFsTnVtYmVyKSA/IDEgOiAoKGIuc2VyaWFsTnVtYmVyID4gYS5zZXJpYWxOdW1iZXIpID8gLTEgOiAwKSk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkVGFza3NFbGVtZW50cyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBkYXRhIG9mIHRhc2tzRGF0YSkge1xuICAgICAgICBsZXQgdGFzayA9IGxvYWRUYXNrKGRhdGEpO1xuICAgICAgICBsb2FkVGFza0xpbmsodGFzaywgZGF0YSk7XG4gICAgfVxufVxuXG5jb25zdCBsb2FkVGFzayA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBUYXNrKGRhdGEuaWQpO1xuICAgIHNldExpc3RlbmVycygpLmZvclRhc2sodGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXRUb05hbWUodGFzayk7XG4gICAgdGFzay51bnBhY2tUYXNrKGRhdGEpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IGxvYWRUYXNrTGluayA9ICh0YXNrLCBkYXRhKSA9PiB7XG4gICAgbGV0IGxpbmsgPSBUYXNrTGluayh0YXNrKTtcbiAgICBzZXRMaXN0ZW5lckZvckxpbmsobGluayk7XG4gICAgbGluay5zZXROYW1lKGRhdGEubGluayk7XG4gICAgbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5saW5rfWA7XG4gICAgdGFzay5zZXRMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0QWxsVGFza1BhcmVudHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBsZXQgcGFyZW50O1xuICAgICAgICBpZiAodHlwZW9mIHRhc2suZ2V0UGFyZW50KCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBnZXRGb2xkZXIodGFzay5nZXRQYXJlbnQoKSk7XG4gICAgICAgICAgICB0YXNrLnNldFBhcmVudChwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFzayA9IChpZCkgPT4ge1xuICAgIGxldCByZXMgPSB0YXNrcy5maWx0ZXIodGFzayA9PiB7XG4gICAgICAgIGlmICh0YXNrLmdldElkKCkgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc1swXTtcbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tTZXJpYWxOdW1iZXJEZWNyZW1lbnQgPSAobnVtYmVyKSA9PiB7XG4gICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBpZiAodGFzay5nZXRTZXJpYWxOdW1iZXIoKSA+IG51bWJlcikge1xuICAgICAgICAgICAgdGFzay5kZWNyZW1lbnRTZXJpYWxOdW1iZXIoKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VyaWFsTnVtYmVyVGFzay5kZWNyZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRUYXNrc0NvbnRlbnRzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgbG9hZFRhc2tjb250ZW50KHRhc2spO1xuICAgIH1cbn1cblxuY29uc3QgbG9hZFRhc2tjb250ZW50ID0gKHRhc2spID0+IHtcbiAgICBsZXQgY29udGVudCA9IHRhc2suZ2V0Q29udGVudCgpO1xuICAgIGxldCBib2R5ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgbGV0IHRpdGxlID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBsZXQgaW5wdXRzID0gW107XG4gICAgbGV0IHZhbHVlc0lucHV0cyA9IHRhc2suZ2V0SW5wdXRzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXNJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzSW5wdXRzW2ldO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaCh0aXRsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHRhc2tDb250ZW50SGFuZGxlcigpLmdldE5ld0lucHV0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgICAgICAgICBzZXRMaXN0ZW5lcnMoKS5mb3JJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFzay5zZXRJbnB1dHMoaW5wdXRzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0YXNrLmdldElkKCl9YCwgdGFzay5nZXRKU09OKCkpO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZE9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29wZW5lZFRhc2snKSk7XG4gICAgaWYgKHRhc2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCB0YXNrID0gZ2V0VGFzayh0YXNrSWQpO1xuICAgICAgICBvcGVuVGFzayh0YXNrKTtcbiAgICAgICAgb3BlbkNsdXN0ZXIodGFzay5nZXRQYXJlbnQoKS5nZXRMaW5rKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgcmVndWxhcnMgfSBmcm9tIFwiLi4vbW9kZWxzL3JlZ3VsYXJzXCI7XG5pbXBvcnQgeyBJbnB1dHMsIE9wZW5lZElucHV0LCBPcGVuZWRUYXNrLCBUYXNrLCBzZXJpYWxOdW1iZXJUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyB2aWV3RWxlbWVudCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyB2aWV3TGlua09wZW5lZFRhc2sgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IGFkZExpbmtUb1BhdGggfSBmcm9tIFwiLi9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy90YXNrc1wiO1xuXG5cbmV4cG9ydCBjb25zdCB0YXNrQ29udGVudEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcblxuICAgIGNvbnN0IGlzTnVtYmVyTGlzdCA9IChzdHIpID0+IHtcbiAgICAgICAgbGV0IGNoZWNrTnVtYmVybGlzdCA9IG5ldyBSZWdFeHAocmVndWxhcnMuY2hlY2tOdW1iZXJsaXN0LCAnZycpO1xuICAgICAgICBsZXQgcmVzID0gc3RyLm1hdGNoKGNoZWNrTnVtYmVybGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIHJlcyAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXdJbnB1dCA9ICh2YWx1ZSA9ICcnKSA9PiB7XG4gICAgICAgIGxldCBuZXdJbnB1dCA9IElucHV0cygpLmdldFRleHRJbnB1dCgpO1xuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3TmV3SW5wdXQgPSAoaW5wdXQsIG5ld0lucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0lucHV0LCBpbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIGFjdGl2YXRlSW5wdXQobmV3SW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgT3BlbmVkSW5wdXQuc2V0T3BlbmVkSW5wdXQoaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gT3BlbmVkSW5wdXQuZ2V0T3BlbmVkSW5wdXQoKTtcbiAgICAgICAgbGV0IHRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLmdldENvbnRlbnQoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSB0YXNrLmdldElucHV0cygpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGlucHV0cy5pbmRleE9mKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIHsgaW5wdXQsIHRhc2ssIGNvbnRlbnQsIGNvbnRhaW5lciwgaW5wdXRzLCBpbmRleCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByZXZpb3VzSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCAtIDFdO1xuICAgICAgICBpZiAoZGF0YS5pbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgYWN0aXZhdGVJbnB1dChvbGRJbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXROZXh0aW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCArIDFdO1xuICAgICAgICBpZiAoZGF0YS5pbmRleCArIDEgPCBkYXRhLmlucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IG9sZElucHV0ID0gZGF0YS5pbnB1dHNbZGF0YS5pbmRleCAtIDFdO1xuICAgICAgICBkYXRhLnRhc2sucmVtb3ZlSW5wdXQoZGF0YS5pbnB1dCk7XG4gICAgICAgIGRhdGEuY29udGFpbmVyLnJlbW92ZUNoaWxkKGRhdGEuaW5wdXQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFjdGl2YXRlSW5wdXQob2xkSW5wdXQpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpc051bWJlckxpc3QsIHNldE5leHRpbnB1dCwgc2V0UHJldmlvdXNJbnB1dCwgcmVtb3ZlSW5wdXQsIGdldE5ld0lucHV0LCB2aWV3TmV3SW5wdXQsIGFjdGl2YXRlSW5wdXQgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5UYXNrID0gKHRhc2spID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgcmVtb3ZlT3BlbmVkVGFzaygpO1xuICAgIHZpZXdMaW5rT3BlbmVkVGFzayh0YXNrKTtcbiAgICB2aXNpYmxlT3BlbmVkVGFzaygpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFzay5nZXRDb250ZW50KCkpO1xuICAgIGNvbnN0IGlucHV0ID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgb3BlbmVkVGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgIGlmIChvcGVuZWRUYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChvcGVuZWRUYXNrLmdldENvbnRlbnQoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaGlkZGVuT3BlbmVkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgb3BlbmVkVGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgIGlmIChvcGVuZWRUYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3BlbmVkVGFzay5nZXRDb250ZW50KCkuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZpc2libGVPcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcGVuZWRUYXNrLmdldENvbnRlbnQoKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKSA9PiB7XG4gICAgbGV0IHRhc2tJZCA9IGZvbGRlci5nZXRUYXNrQ291bnQoKTtcbiAgICBsZXQgdGFzayA9IFRhc2sodGFza0lkKTtcbiAgICBmb2xkZXIuYWRkVGFzayh0YXNrKTtcbiAgICB0YXNrLnNldFNlcmlhbE51bWJlcihzZXJpYWxOdW1iZXJUYXNrLmdldFNlcmlhbE51bWJlcigpKTtcbiAgICBzZXJpYWxOdW1iZXJUYXNrLmluY3JlbWVudCgpO1xuICAgIHNldExpc3RlbmVycygpLmZvclRhc2sodGFzayk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9ySW5wdXRUb05hbWUodGFzayk7XG4gICAgYWRkTGlua1RvUGF0aCh0YXNrLCAndGFzaycpO1xuICAgIHZpZXdFbGVtZW50KHRhc2suZ2V0Tm9kZSgpLCAndGFzaycpLmZvck5ld0VsZW1lbnQoKTtcbiAgICBhZGRUYXNrKHRhc2spO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Rhc2suZ2V0SWQoKX1gLCB0YXNrLmdldEpTT04oKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7Zm9sZGVyLmdldElkKCl9YCwgZm9sZGVyLmdldEpTT04oKSk7XG59IiwiaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuLi92aWV3cy9hbmltYXRpb25zL2FuaW1hdGlvbnNcIjtcblxuY29uc3QgVG9vbHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldE5vZGVXaXRoU3BhbiA9IChub2RlTmFtZSwgdGV4dCwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGNyZWF0ZU5vZGUobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gc2V0VXBTcGFuKG5vZGUsIHRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5vZGUgPSAobm9kZU5hbWUsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgYWRkQ2xhc3Nlcyhub2RlLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGN1ckNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjdXJDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRVcFNwYW4gPSAobm9kZSwgdGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3BhbiA9IGNyZWF0ZU5vZGUoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZENoaWxkcyA9IChub2RlLCAuLi5jaGlsZHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZSwgYXRycykgPT4ge1xuICAgICAgICBmb3IgKGxldCBhdHIgb2YgYXRycykge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyLm5hbWUsIGF0ci52YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzID0gKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkc0FmdGVyID0gKG5vZGUsIGNoaWxkKSA9PiB7XG4gICAgICAgIHdoaWxlIChub2RlLmxhc3RDaGlsZCAhPSBjaGlsZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IChtb2RlLCAuLi5ub2RlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBtb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKS5maW5pc2hlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgcmV0dXJuIEFuaW1hdGlvbnMub3BhY2l0eShlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAgPSAoLi4ubm9kZXMpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5jbG9zZShub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvcGVuLCBjbG9zZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJnYmEyaGV4ID0gKHJnYmEpID0+IGAjJHtyZ2JhLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkK1xcLnswLDF9XFxkKikpP1xcKSQvKS5zbGljZSgxKS5tYXAoKG4sIGkpID0+IChpID09PSAzID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG4pICogMjU1KSA6IHBhcnNlRmxvYXQobikpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpLnJlcGxhY2UoJ05hTicsICcnKSkuam9pbignJyl9YFxuXG4gICAgY29uc3QgcmVsYXRpdmVGb250ID0gKG5vZGVPZlJlbGF0aXZpdHksIGNzc1ZhcikgPT4ge1xuICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgIGxldCBmb2xkZXJIZWlnaHQgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGVPZlJlbGF0aXZpdHkpLndpZHRoO1xuICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlRmxvYXQoZm9sZGVySGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpKSAvIDY7XG4gICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoY3NzVmFyLCBgJHtzaXplfXB4YCk7XG4gICAgfVxuXG4gICAgdmFyIGdldFNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xuICAgICAgICB2YXIgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gICAgICAgIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2libGluZ3M7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmFuZG9tX3JnYmEoKSB7XG4gICAgICAgIHZhciBvID0gTWF0aC5yb3VuZCwgciA9IE1hdGgucmFuZG9tLCBzID0gMjU1O1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArICcxJyArICcpJztcbiAgICB9XG5cbiAgICByZXR1cm4geyByYW5kb21fcmdiYSwgZ2V0U2libGluZ3MsIHJlbGF0aXZlRm9udCwgcmVtb3ZlQ2hpbGRzQWZ0ZXIsIGRpc3BsYXlNb2RlLCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAsIHNtb290aFZpc2liaWxpdHksIHJnYmEyaGV4LCBnZXROb2RlV2l0aFNwYW4sIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZU5vZGUsIGFwcGVuZENoaWxkcywgc2V0VXBTcGFuLCByZW1vdmVDaGlsZHMsIGFkZENsYXNzZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRvb2xzIH0iLCJpbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vY29udHJvbGxlcnMvY29tbW9uQ29udHJvbGxlcnMnO1xuaW1wb3J0IHsgc2V0UmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnMnO1xuaW1wb3J0IHsgbGFvZEVsZW1lbnRzIH0gZnJvbSAnLi9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9jb21tb24nO1xuaW1wb3J0IHsgUm9vdEZvbGRlciB9IGZyb20gJy4vbW9kZWxzL2ZvbGRlck1vZGVscyc7XG5pbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgdmlld1Jvb3RQYXRoc1RocmVlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9saW5rcyc7XG5cbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgIGxhb2RFbGVtZW50cygpO1xufSBlbHNlIHtcbiAgICBzdGFydChSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKSk7XG59XG5cbnNldFJlc2l6ZU9ic2VydmVycygpO1xudmlld1Jvb3RQYXRoc1RocmVlKCk7IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBpZFJlZ2lzdGVyID0gKCgpID0+IHtcbiAgICBsZXQgbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZFJlZ2lzdGVyJyk7XG4gICAgbGV0IHJlZ2lzdGVyID0gbG9hZCA9PT0gbnVsbCA/IFtdIDogbG9hZDtcblxuICAgIGNvbnN0IGFkZElkID0gKGlkKSA9PiB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2goaWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRSZWdpc3RlcicsIEpTT04uc3RyaW5naWZ5KHJlZ2lzdGVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWRSZWdpc3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZElkLCBnZXRJZFJlZ2lzdGVyIH07XG59KSgpXG5cbmV4cG9ydCBjb25zdCBFbGVtZW50ID0gKGlkcykgPT4ge1xuICAgIGxldCBuYW1lID0gJyc7XG4gICAgbGV0IGxpbms7XG4gICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcblxuICAgIGxldCBpZCA9IHBhcmVudCA9PT0gdW5kZWZpbmVkID8gMCA6IGAke3BhcmVudC5nZXRJZCgpfV8ke2lkc31gO1xuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROYW1lID0gKHZhbCkgPT4ge1xuICAgICAgICBuYW1lID0gdmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHNldExpbmsgPSAobm9kZSkgPT4ge1xuICAgICAgICBsaW5rID0gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJZCA9ICh2YWwpID0+IHtcbiAgICAgICAgaWQgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldElkLCBnZXRJZCwgc2V0TmFtZSwgZ2V0TmFtZSwgc2V0TGluaywgZ2V0TGluaywgc2V0UGFyZW50LCBnZXRQYXJlbnQsXG4gICAgfVxufSIsImltcG9ydCB7IGdldEZvbGRlck5vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JBZGRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ2x1c3RlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgeyBmb2xkZXJTZXJpYWxOdW1iZXJEZWNyZW1lbnQsIGdldEZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9sb2NhbFN0b3JhZ2VDb250cm9sbGVycy9mb2xkZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxOdW1iZXJGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBsb2FkU2VyaWFsTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcmlhbE51bWJlcicpO1xuICAgIGxldCBzZXJpYWxOdW1iZXIgPSBsb2FkU2VyaWFsTnVtYmVyID09PSBudWxsID8gMCA6IGxvYWRTZXJpYWxOdW1iZXI7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgICAgICArK3NlcmlhbE51bWJlcjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcmlhbE51bWJlcicsIEpTT04uc3RyaW5naWZ5KHNlcmlhbE51bWJlcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgLS1zZXJpYWxOdW1iZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJpYWxOdW1iZXInLCBKU09OLnN0cmluZ2lmeShzZXJpYWxOdW1iZXIpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZXJpYWxOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXJpYWxOdW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U2VyaWFsTnVtYmVyLCBkZWNyZW1lbnQsIGluY3JlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IGxvYWRPcGVuZWRGb2xkZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcGVuZWRGb2xkZXInKSk7XG4gICAgbGV0IG9wZW5lZEZvbGRlcjtcbiAgICBpZiAobG9hZE9wZW5lZEZvbGRlciAhPT0gbnVsbCkge1xuICAgICAgICBvcGVuZWRGb2xkZXIgPSBnZXRGb2xkZXIobG9hZE9wZW5lZEZvbGRlcik7XG4gICAgfVxuICAgIGNvbnN0IHNldE9wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgb3BlbmVkRm9sZGVyID0gZm9sZGVyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdE9wZW4nLCBKU09OLnN0cmluZ2lmeSgnZm9sZGVyJykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3BlbmVkRm9sZGVyJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyLmdldElkKCkpKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0T3BlbmVkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlbmVkRm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBzZXRPcGVuZWRGb2xkZXIsIGdldE9wZW5lZEZvbGRlciB9XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRm9sZGVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChpZCk7XG4gICAgbGV0IGNsdXN0ZXIgPSBjcmVhdGVDbHVzdGVyKCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldEZvbGRlck5vZGUoaWQpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXVxuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgbGV0IGZvbGRlckNvdW50ID0gMDtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBsZXQgc2VyaWFsTnVtYmVyO1xuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKGZvbGRlckNvdW50KTtcbiAgICAgICAgc2V0Rm9sZGVyQ291bnQoKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2gobmV3Rm9sZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ld0ZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBmb2xkZXIgb2YgaW5uZXJGb2xkZXJzKSB7XG4gICAgICAgICAgICBmb2xkZXIuZGVsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBpbm5lclRhc2tzKSB7XG4gICAgICAgICAgICB0YXNrLmRlbCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmlsdGVyID0gcHJvdG90eXBlLmdldFBhcmVudCgpLmdldElubmVyRm9sZGVycygpLmZpbHRlcigoZm9sZGVyKSA9PiBmb2xkZXIgIT09IHByb3RvdHlwZS5nZXRMaW5rKCkuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICBwcm90b3R5cGUuZ2V0UGFyZW50KCkuZ2V0Q2x1c3RlcigpLnJlbW92ZUNoaWxkKHByb3RvdHlwZS5nZXRMaW5rKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcHJvdG90eXBlLmdldFBhcmVudCgpLnNldElubmVyRm9sZGVycyhmaWx0ZXIpO1xuICAgICAgICBzZXRJbm5lckZvbGRlcnMoW10pO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcm90b3R5cGUuZ2V0SWQoKX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbm5lckZvbGRlcnMgPSAoYXJyKSA9PiB7XG4gICAgICAgIGlubmVyRm9sZGVycyA9IGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lckZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2x1c3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICsrdGFza0NvdW50O1xuICAgICAgICBpbm5lclRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGlubmVyVGFza3MgPSBpbm5lclRhc2tzLmZpbHRlcigoZSkgPT4gZSAhPT0gdGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5uZXJUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyVGFza3M7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5uZXJUYXNrcyA9ICh0YXNrcykgPT4ge1xuICAgICAgICBpbm5lclRhc2tzID0gdGFza3M7XG4gICAgfVxuXG4gICAgY29uc3QgcmVkdWNlRm9sZGVyQ291bnQgPSAoKSA9PiB7XG4gICAgICAgIC0tZm9sZGVyQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Rm9sZGVyQ291bnQgPSAoKSA9PiB7XG4gICAgICAgICsrZm9sZGVyQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGFza0NvdW50ID0gKCkgPT4ge1xuICAgICAgICArK3Rhc2tDb3VudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrQ291bnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWRFbGVtZW50cyA9IChlbGVtZW50cykgPT4ge1xuICAgICAgICBsZXQgYWxsSWRzID0gW107XG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGFsbElkcy5wdXNoKGVsZW1lbnQuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbElkcztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRTZXJpYWxOdW1iZXIgPSAobnVtYmVyKSA9PiB7XG4gICAgICAgIHNlcmlhbE51bWJlciA9IG51bWJlcjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTZXJpYWxOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZXJpYWxOdW1iZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjcmVtZW50U2VyaWFsTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICAtLXNlcmlhbE51bWJlcjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRKU09OID0gKCkgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb3RvdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBsaW5rOiBwcm90b3R5cGUuZ2V0TGluaygpLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBhcmVudDogcHJvdG90eXBlLmdldFBhcmVudCgpLmdldElkKCksXG4gICAgICAgICAgICBpZDogYCR7cHJvdG90eXBlLmdldElkKCl9YCxcbiAgICAgICAgICAgIGlubmVyRm9sZGVyczogZ2V0SWRFbGVtZW50cyhpbm5lckZvbGRlcnMpLFxuICAgICAgICAgICAgaW5uZXJUYXNrczogZ2V0SWRFbGVtZW50cyhpbm5lclRhc2tzKSxcbiAgICAgICAgICAgIGZvbGRlckNvdW50OiBmb2xkZXJDb3VudCxcbiAgICAgICAgICAgIHRhc2tDb3VudDogdGFza0NvdW50LFxuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBzZXJpYWxOdW1iZXIsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkobGlzdCk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5wYWNrRm9sZGVyID0gKGRhdGEpID0+IHtcbiAgICAgICAgcHJvdG90eXBlLnNldElkKGRhdGEuaWQpO1xuICAgICAgICBwcm90b3R5cGUuc2V0TmFtZShkYXRhLm5hbWUpO1xuICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSBwcm90b3R5cGUuZ2V0TmFtZSgpO1xuICAgICAgICBwcm90b3R5cGUuc2V0TGluayhkYXRhLmxpbmspO1xuICAgICAgICBwcm90b3R5cGUuc2V0UGFyZW50KGRhdGEucGFyZW50KTtcbiAgICAgICAgaW5uZXJGb2xkZXJzID0gZGF0YS5pbm5lckZvbGRlcnM7XG4gICAgICAgIGlubmVyVGFza3MgPSBkYXRhLmlubmVyVGFza3M7XG4gICAgICAgIGZvbGRlckNvdW50ID0gZGF0YS5mb2xkZXJDb3VudDtcbiAgICAgICAgdGFza0NvdW50ID0gZGF0YS50YXNrQ291bnQ7XG4gICAgICAgIHNlcmlhbE51bWJlciA9IGRhdGEuc2VyaWFsTnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgc2V0SW5uZXJUYXNrcywgZ2V0U2VyaWFsTnVtYmVyLCBzZXRTZXJpYWxOdW1iZXIsIGRlY3JlbWVudFNlcmlhbE51bWJlciwgcmVkdWNlRm9sZGVyQ291bnQsIHVucGFja0ZvbGRlciwgZ2V0SlNPTiwgcmVtb3ZlVGFzaywgZ2V0VGFza0NvdW50LCBzZXRUYXNrQ291bnQsIHNldEZvbGRlckNvdW50LCBhZGRUYXNrLCBnZXRJbm5lclRhc2tzLCBhZGRGb2xkZXIsIGRlbCwgc2V0SW5uZXJGb2xkZXJzLCBnZXRJbm5lckZvbGRlcnMsIGdldENsdXN0ZXIsIGdldE5vZGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBSb290Rm9sZGVyID0gKCgpID0+IHtcbiAgICBsZXQgcm9vdEZvbGRlciA9IEZvbGRlcigwKTtcbiAgICBjb25zdCBnZXRSb290Rm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcm9vdEZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRSb290Rm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICByb290Rm9sZGVyID0gZm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBzZXRSb290Rm9sZGVyLCBnZXRSb290Rm9sZGVyIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkRm9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQWRkRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JDbG9zZUZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7IiwiaW1wb3J0IHsgZ2V0Rm9sZGVyTGlua05vZGUsIGdldFRhc2tMaW5rTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuXG5leHBvcnQgY29uc3QgTGluayA9IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IGlkID0gcGFyZW50LmdldElkKCk7XG4gICAgbGV0IG5hbWUgPSBpZDtcbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Tm9kZSA9IChpTm9kZSkgPT4ge1xuICAgICAgICBub2RlID0gaU5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXROYW1lLCBzZXROb2RlLCBnZXROb2RlLCBnZXROYW1lLCBnZXRFbGVtZW50IH07XG59XG5cbmV4cG9ydCBjb25zdCBGb2xkZXJMaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCB0eXBlID0gJ2ZvbGRlcic7XG4gICAgbGV0IHByb3RvdHlwZSA9IExpbmsoZm9sZGVyKTtcbiAgICBwcm90b3R5cGUuc2V0Tm9kZShnZXRGb2xkZXJMaW5rTm9kZShwcm90b3R5cGUuZ2V0TmFtZSgpKSk7XG4gICAgY29uc3QgZ2V0Rm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdG90eXBlLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Rm9sZGVyLCBnZXRUeXBlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgVGFza0xpbmsgPSAodGFzaykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3Rhc2snO1xuICAgIGxldCBwcm90b3R5cGUgPSBMaW5rKHRhc2spO1xuICAgIHByb3RvdHlwZS5zZXROb2RlKGdldFRhc2tMaW5rTm9kZShwcm90b3R5cGUuZ2V0TmFtZSgpKSk7XG4gICAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb3RvdHlwZS5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldFRhc2ssIGdldFR5cGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDbHVzdGVyTGluayA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgcHJvdG90eXBlID0gRm9sZGVyTGluayhmb2xkZXIpO1xuICAgIGxldCBjbHVzdGVyID0gZm9sZGVyLmdldENsdXN0ZXIoKTtcbiAgICBjb25zdCBnZXRDbHVzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldENsdXN0ZXIgfSk7XG59IiwiZXhwb3J0IGNvbnN0IHJlZ3VsYXJzID0ge1xuICAgIGNoZWNrTnVtYmVybGlzdDogJyheKFxcXFxkK1xcXFwuXFxcXHMpKScsXG59IiwiaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IGdldFRhc2ssIHRhc2tTZXJpYWxOdW1iZXJEZWNyZW1lbnQgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvbG9jYWxTdG9yYWdlQ29udHJvbGxlcnMvdGFza3NcIjtcbmltcG9ydCB7IHRhc2tDb250ZW50SGFuZGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy90YXNrQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRUYXNrXCI7XG5pbXBvcnQgeyBnZXRUYXNrTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy90YXNrXCI7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJpYWxOdW1iZXJUYXNrID0gKCgpID0+IHtcbiAgICBsZXQgbG9hZFNlcmlhbE51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJpYWxOdW1iZXJUYXNrJyk7XG4gICAgbGV0IHNlcmlhbE51bWJlciA9IGxvYWRTZXJpYWxOdW1iZXIgPT09IG51bGwgPyAwIDogbG9hZFNlcmlhbE51bWJlcjtcbiAgICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICsrc2VyaWFsTnVtYmVyO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VyaWFsTnVtYmVyVGFzaycsIEpTT04uc3RyaW5naWZ5KHNlcmlhbE51bWJlcikpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcbiAgICAgICAgLS1zZXJpYWxOdW1iZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJpYWxOdW1iZXJUYXNrJywgSlNPTi5zdHJpbmdpZnkoc2VyaWFsTnVtYmVyKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VyaWFsTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2VyaWFsTnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldFNlcmlhbE51bWJlciwgZGVjcmVtZW50LCBpbmNyZW1lbnQgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRUYXNrID0gKCgpID0+IHtcbiAgICBsZXQgbG9hZE9wZW5lZFRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcGVuZWRUYXNrJykpO1xuICAgIGxldCBvcGVuZWRUYXNrO1xuICAgIGlmIChsb2FkT3BlbmVkVGFzayAhPT0gbnVsbCkge1xuICAgICAgICBvcGVuZWRUYXNrID0gZ2V0VGFzayhsb2FkT3BlbmVkVGFzayk7XG4gICAgfVxuICAgIGNvbnN0IHNldE9wZW5lZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBvcGVuZWRUYXNrID0gdGFzaztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RPcGVuJywgSlNPTi5zdHJpbmdpZnkoJ3Rhc2snKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcGVuZWRUYXNrJywgSlNPTi5zdHJpbmdpZnkodGFzay5nZXRJZCgpKSk7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRUYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldE9wZW5lZFRhc2ssIGdldE9wZW5lZFRhc2sgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZElucHV0ID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkSW5wdXQgPSBUb29scy5jcmVhdGVOb2RlKCdpbnB1dCcsICdwbHVnJyk7XG5cbiAgICBjb25zdCBzZXRPcGVuZWRJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBkaXNhYmxlSW5wdXQoKTtcbiAgICAgICAgb3BlbmVkSW5wdXQgPSBpbnB1dDtcbiAgICAgICAgYWN0aXZhdGVJbnB1dCgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZElucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcGVuZWRJbnB1dCAhPT0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0SW5wdXRzKClbMF0pIHtcbiAgICAgICAgICAgIG9wZW5lZElucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBjb21tZW50Li4uJztcbiAgICAgICAgfVxuICAgICAgICBvcGVuZWRJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgaWYgKG9wZW5lZElucHV0ICE9PSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRJbnB1dHMoKVswXSkge1xuICAgICAgICAgICAgb3BlbmVkSW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzZXRPcGVuZWRJbnB1dCwgZ2V0T3BlbmVkSW5wdXQgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IFRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBFbGVtZW50KGAke2lkfXRgKTtcbiAgICBjb25zdCBub2RlID0gZ2V0VGFza05vZGUoYCR7aWR9dGApO1xuICAgIGxldCBzZXJpYWxOdW1iZXI7XG4gICAgbGV0IGlucHV0cyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2VyaWFsTnVtYmVyID0gKHZhbCkgPT4ge1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2VyaWFsTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2VyaWFsTnVtYmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY3JlbWVudFNlcmlhbE51bWJlciA9ICgpID0+IHtcbiAgICAgICAgLS1zZXJpYWxOdW1iZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRzLnB1c2goaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNwbGljZUlucHV0ID0gKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICBpbnB1dHMuc3BsaWNlKGluZGV4LCAwLCBpbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSW5wdXQgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRzID0gaW5wdXRzLmZpbHRlcigoZSkgPT4gZSAhPT0gaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElucHV0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbnB1dHMgPSAodmFsKSA9PiB7XG4gICAgICAgIGlucHV0cyA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLXRhc2snKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ29wZW5lZC10YXNrJztcbiAgICAgICAgc2V0VGl0bGVJbnB1dChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRpdGxlSW5wdXQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKTtcbiAgICAgICAgc2V0SW5wdXQoaW5wdXQpO1xuICAgICAgICBzZXRMaXN0ZW5lcnMoKS5mb3JUaXRsZUlucHV0KGlucHV0LCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gc2V0Q29udGVudCgpO1xuXG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5wdXRzVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgcGFyZW50ID0gcHJvdG90eXBlLmdldFBhcmVudCgpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlVGFzayhlKTtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcGFyZW50LmdldENsdXN0ZXIoKS5yZW1vdmVDaGlsZChlLmdldExpbmsoKS5nZXROb2RlKCkpO1xuICAgICAgICAvL3Rhc2tTZXJpYWxOdW1iZXJEZWNyZW1lbnQoc2VyaWFsTnVtYmVyKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7ZS5nZXRJZCgpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEpTT04gPSAoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0ge1xuICAgICAgICAgICAgbmFtZTogcHJvdG90eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGxpbms6IHByb3RvdHlwZS5nZXRMaW5rKCkuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGFyZW50OiBwcm90b3R5cGUuZ2V0UGFyZW50KCkuZ2V0SWQoKSxcbiAgICAgICAgICAgIGlkOiBgJHtwcm90b3R5cGUuZ2V0SWQoKX1gLFxuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBzZXJpYWxOdW1iZXIsXG4gICAgICAgICAgICBpbnB1dHM6IGdldElucHV0c1ZhbHVlcygpLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGxpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHVucGFja1Rhc2sgPSAoZGF0YSkgPT4ge1xuICAgICAgICBwcm90b3R5cGUuc2V0SWQoZGF0YS5pZCk7XG4gICAgICAgIHByb3RvdHlwZS5zZXROYW1lKGRhdGEubmFtZSk7XG4gICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9IHByb3RvdHlwZS5nZXROYW1lKCk7XG4gICAgICAgIHByb3RvdHlwZS5zZXRMaW5rKGRhdGEubGluayk7XG4gICAgICAgIHByb3RvdHlwZS5zZXRQYXJlbnQoZGF0YS5wYXJlbnQpO1xuICAgICAgICBzZXJpYWxOdW1iZXIgPSBkYXRhLnNlcmlhbE51bWJlcjtcbiAgICAgICAgaW5wdXRzID0gZGF0YS5pbnB1dHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyBzZXRJbnB1dHMsIHNldFNlcmlhbE51bWJlciwgZ2V0U2VyaWFsTnVtYmVyLCBkZWNyZW1lbnRTZXJpYWxOdW1iZXIsIGdldEpTT04sIHVucGFja1Rhc2ssIHNwbGljZUlucHV0LCBnZXRJbnB1dHMsIHNldElucHV0LCByZW1vdmVJbnB1dCwgZ2V0Q29udGVudCwgZGVsLCBnZXROb2RlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgSW5wdXRzID0gKCkgPT4ge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlLWlucHV0JykuY2xvbmVOb2RlKCk7XG4gICAgbm9kZS5jbGFzc05hbWUgPSAndGFzay1pbnB1dCc7XG5cbiAgICBjb25zdCBnZXRUZXh0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldFRleHRJbnB1dCB9O1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkVGFzayA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckFkZFRhc2soKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTsiLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LCB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZEZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3RlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVUYXNrU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5KCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgYnV0dG9uRm9yQWRkVGFza0Fzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVUYXNrJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHRhc2ssIGdldFN2Z0luV3JhcHBlcigpLCBuYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0U3ZnSW5XcmFwcGVyID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JDbG9zZUZvbGRlckFzc2VtYmx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdiYWNrJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCkpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJTdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJOb2RlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gZm9sZGVyTm9kZUFzc2VtYmx5KGlkKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBmb2xkZXJOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZm9sZGVyJywgaWQpO1xuICAgIGNvbnN0IG5hbWUgPSBnZXRJbnB1dFRleHQoKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRXcmFwcGVySWNvbihpZCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dFRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBUb29scy5jcmVhdGVOb2RlKCdpbnB1dCcsICduYW1lJyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnbmFtZT8nO1xuICAgIHJldHVybiBpbnB1dDtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBCdXR0b25Gb3JBZGRUYXNrIH0gZnJvbSBcIi4uLy4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JBZGRUYXNrIH0gZnJvbSBcIi4vQnV0dG9uRm9yQWRkVGFza1wiO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcblxuZXhwb3J0IGNvbnN0IHZpZXdFbGVtZW50ID0gKG5vZGUsIGZsYWcgPSAnZm9sZGVyJykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBsZXQgaW5uZXJUYXNrcyA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRJbm5lclRhc2tzKCk7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4obm9kZSwgMCwgMSwgNTAwLCAnZm9yd2FyZHMnKTtcblxuICAgIGNvbnN0IGZvck9sZEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JOZXdFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBpZiAoZmxhZyA9PT0gJ3Rhc2snKSB7XG4gICAgICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShub2RlLCBjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gJ2ZvbGRlcicpIHtcbiAgICAgICAgICAgIGxldCBsYXN0Tm9kZSA9IGlubmVyVGFza3MubGVuZ3RoID4gMCA/IGlubmVyVGFza3MuYXQoMCkuZ2V0Tm9kZSgpIDogY29udGVudC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShub2RlLCBsYXN0Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBmb3JOZXdFbGVtZW50LCBmb3JPbGRFbGVtZW50IH07XG59XG4iLCJpbXBvcnQgeyBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIsIHNldExpc3RlbmVyRm9yTGluayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saW5rc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBzZXRMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIlxuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZFRhc2sgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IHZpZXdSb290UGF0aHNUaHJlZSA9ICgpID0+IHtcbiAgICBsZXQgbGluayA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpLmdldExpbmsoKTtcbiAgICBsaW5rLmdldE5vZGUoKS5zdHlsZS5ib3JkZXIgPSAnMC4zdmggIzM2YmIzNiBzb2xpZCc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRocy1jb250YWluZXInKS5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1saW5rJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuY29uc3QgZ2V0VGVtcGxhdGVMaW5rTm9kZSA9IChuYW1lLCBub2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZVdyYXBwZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnbGluay13cmFwcGVyJyk7XG4gICAgY29uc3QgbGlua0JvZHkgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnbGluay1ib2R5Jyk7XG4gICAgY29uc3Qgbm9kZUxpbmsgPSBUb29scy5nZXROb2RlV2l0aFNwYW4oJ2RpdicsIGAke25hbWV9YCwgJ2xpbmsnKTtcbiAgICBjb25zdCBkZWwgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnZGVsZXRlLWxpbmsnKTtcbiAgICBkZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGxpbmtCb2R5LCBub2RlLCBub2RlTGluaywgZGVsKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMobm9kZVdyYXBwZXIsIGxpbmtCb2R5KTtcbiAgICBsZXQgY29sb3IgPSBUb29scy5yYW5kb21fcmdiYSgpO1xuICAgIG5vZGVXcmFwcGVyLnN0eWxlLmJvcmRlckxlZnQgPSBgMC4zdmggJHtjb2xvcn0gc29saWRgO1xuICAgIG5vZGVXcmFwcGVyLnN0eWxlLmJvcmRlclRvcCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG4gICAgc2V0Qm9yZGVyQ29sb3Iobm9kZVdyYXBwZXIpO1xuICAgIHJldHVybiBub2RlV3JhcHBlcjtcbn1cblxuY29uc3Qgc2V0Qm9yZGVyQ29sb3IgPSAobm9kZSkgPT4ge1xuICAgIGxldCBjb2xvciA9IFRvb2xzLnJhbmRvbV9yZ2JhKCk7XG4gICAgbm9kZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbiAgICBub2RlLnN0eWxlLmJvcmRlclRvcCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRGb2xkZXJMaW5rTm9kZSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRlbXBsYXRlID0gZ2V0VGVtcGxhdGVMaW5rTm9kZShgXFxcXCR7bmFtZX1gLCBmb3JGb2xkZXIoKSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza0xpbmtOb2RlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZUxpbmtOb2RlKG5hbWUsIGZvclRhc2soKSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5jb25zdCBmb3JGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VDbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2Nsb3NlLWNsdXN0ZXInKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICBjbG9zZUNsdXN0ZXIuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG4gICAgcmV0dXJuIGNsb3NlQ2x1c3Rlcjtcbn1cblxuY29uc3QgZm9yVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrUHJldmlldyA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICd0YXNrLXByZXZpZXcnKTtcbiAgICBjb25zdCB0YXNrSWNvbiA9IGdldFRhc2tTdmcoKTtcbiAgICB0YXNrUHJldmlldy5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG4gICAgcmV0dXJuIHRhc2tQcmV2aWV3O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza1N2ZyA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGluay1zdmcnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZG93bicpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd1JpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcmlnaHQnKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rQ2ZnID0gKGxpbmssIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJGb3JMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2x1c3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNsdXN0ZXInKTtcbiAgICBjbHVzdGVyLnN0eWxlLnBhZGRpbmdMZWZ0ICs9ICcxdmgnO1xuICAgIHJldHVybiBjbHVzdGVyO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0xpbmsgPSAobGluaykgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBpbm5lclRhc2tzID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyVGFza3MoKTtcbiAgICBpZiAoaW5uZXJUYXNrcy5sZW5ndGggPiAwICYmIGxpbmsuZ2V0VHlwZSgpID09PSAnZm9sZGVyJykge1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSBpbm5lclRhc2tzLmF0KDApLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobGluay5nZXROb2RlKCksIGxhc3ROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluay5nZXROb2RlKCkpO1xuICAgIH1cbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rT3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXJMaW5rID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgb3BlbmVkRm9sZGVyTGluay5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjBkMGU0JztcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKGZvbGRlcik7XG59XG5cbmV4cG9ydCBjb25zdCB2aWV3TGlua09wZW5lZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgb3BlbmVkVGFza0xpbmsgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRMaW5rKCkuZ2V0Tm9kZSgpO1xuICAgICAgICBvcGVuZWRUYXNrTGluay5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICB9XG4gICAgdGFzay5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU1YjYnO1xuICAgIE9wZW5lZFRhc2suc2V0T3BlbmVkVGFzayh0YXNrKTtcbn1cblxuY29uc3Qgc2V0U3ZnRm9yTWFpbkxpbmsgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdmlzaWJsZS1wYXRocycpO1xuICAgIGNvbnN0IHN2ZyA9IGdldE5vZGVBcnJvd1JpZ2h0KCk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHN2Zyk7XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgZ2V0SW5wdXRUZXh0IH0gZnJvbSBcIi4vZm9sZGVyXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza05vZGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gdGFza05vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IHRhc2tOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2snLCBpZCk7XG4gICAgY29uc3QgbmFtZSA9IGdldElucHV0VGV4dCgpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh0YXNrLCBnZXRXcmFwcGVySWNvbihpZCksIG5hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==