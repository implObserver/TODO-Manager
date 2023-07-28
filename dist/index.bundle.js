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
    font-size: var(--font-size-to-folder);
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

}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"AAAA;;;IAGI,UAAU;IACV,SAAS;IACT,SAAS;IACT,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;;;;IAII,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kDAAkD;;AAEtD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;;IAEI,aAAa;IACb,oBAAoB;IACpB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,2DAA2D;IAC3D,+BAA+B;IAC/B,qBAAqB;IACrB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;;;;;IAKI,aAAa;IACb,mCAAmC;IACnC,6BAA6B;IAC7B,qBAAqB;IACrB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,oBAAoB;IACpB,yBAAyB;IACzB,qCAAqC;IACrC,sBAAsB;IACtB,qBAAqB;IACrB,wBAAwB;IACxB,gCAAgC;IAChC,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI;QACI,oBAAoB;IACxB;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;;IAEI;QACI,aAAa;IACjB;;IAEA;QACI,mCAAmC;QACnC;;qBAEa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;;IAEI;QACI,sCAAsC;QACtC,oCAAoC;IACxC;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,iDAAiD;QACjD,sBAAsB;QACtB,oBAAoB;QACpB,eAAe;QACf,kBAAkB;QAClB,YAAY;QACZ,mBAAmB;QACnB,gBAAgB;QAChB,yBAAyB;IAC7B;;IAEA;QACI,aAAa;QACb,iBAAiB;QACjB,kBAAkB;IACtB;;AAEJ","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 2vh;\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: start;\n    padding-left: min(2vh, 2vw);\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.main-link {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    height: min-content;\n}\n\n.set-visible-paths {\n    display: none;\n}\n\n.link-title {\n    display: flex;\n    width: min-content;\n    height: min-content;\n    font-size: min(4vh, 20vw);\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar,\n.task-body::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    overflow: hidden;\n    cursor: pointer;\n    width: inherit;\n    min-width: 100%;\n}\n\n.link-body {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n\n}\n\n.link {\n    display: flex;\n    align-items: center;\n    border-radius: 1vh 0 0 1vh;\n}\n\n.delete-link,\n.task-link-svg {\n    display: flex;\n    justify-content: end;\n    width: 3vh;\n    height: 100%;\n}\n\n.delete-link :hover {\n    display: flex;\n    justify-content: center;\n    background-color: red;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: 100%;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n.content>.opened-task {\n    display: grid;\n    grid-area: folders;\n    background-color: white;\n    z-index: 100;\n    visibility: visible;\n}\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    padding: 1vh;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.opened-task {\n    display: none;\n    grid-template-rows: min-content 1fr;\n    padding: min(6vh, 6vw);\n    max-width: inherit;\n    max-height: inherit;\n    height: 93vh;\n    gap: min(6vh, 6vw);\n    justify-content: center;\n}\n\n.template-input {\n    display: none;\n}\n\n.template-task {\n    display: none;\n}\n\n.task-input {\n    display: flex;\n    height: min-content;\n    width: 100%;\n    outline: none;\n    font-size: min(2vh, 2vw);\n}\n\n.task-input::placeholder {\n    opacity: 0.5;\n}\n\n.title {\n    font-size: min(6vh, 6vw);\n}\n\n.task-header {\n    max-width: 100vh;\n}\n\n.task-body {\n    max-height: 60vh;\n    max-width: 100vh;\n    min-height: 100%;\n    overflow: scroll;\n}\n\n.folder,\n.task,\n.templateFolder,\n.templateTask,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.icon-wrapper>.templateTaskSvg,\n.icon-wrapper>.taskSvg {\n    display: flex;\n    max-width: inherit;\n    max-height: inherit;\n    align-self: center;\n    align-items: center;\n    justify-self: center;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n.templateTask:hover {\n    animation-fill-mode: forwards;\n    animation: 5s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {\n\n    .set-visible-paths {\n        display: flex;\n    }\n\n    .content {\n        grid-template-rows: min-content 1fr;\n        grid-template-areas:\n            'paths'\n            'folders';\n    }\n\n    .paths-container {\n        display: none;\n    }\n}\n\n@media screen and (min-aspect-ratio: 1/1) {\n\n    .content {\n        grid-template-columns: min-content 1fr;\n        grid-template-areas: 'paths folders';\n    }\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: flex;\n        justify-self: end;\n        width: max-content;\n    }\n\n}"],"sourceRoot":""}]);
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
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forMainLinkButtonToAllPaths();

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
/* harmony export */   closeAllLinks: () => (/* binding */ closeAllLinks),
/* harmony export */   closeCluster: () => (/* binding */ closeCluster),
/* harmony export */   getCustomLink: () => (/* binding */ getCustomLink),
/* harmony export */   openAllLinks: () => (/* binding */ openAllLinks),
/* harmony export */   openCluster: () => (/* binding */ openCluster),
/* harmony export */   openClusterWhenAddingFolder: () => (/* binding */ openClusterWhenAddingFolder),
/* harmony export */   setListenerfForLink: () => (/* binding */ setListenerfForLink)
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

const setListenerfForLink = (link) => {
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
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().getNewInput();
                _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask().spliceInput(index + 1, newInput);
                container.insertBefore(newInput, container.firstChild);
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().activateInput(newInput);
                forInput(newInput);
            }

            if (e.keyCode === 40) {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().setNextinput();
            }

            const leftClick = input.addEventListener('click', e => {
                (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().activateInput(input);
            })
        })
    }

    const forInput = (input) => {
        const pressKeysUp = input.addEventListener('keyup', e => {
            e.preventDefault();
            let index = _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask().getInputs().indexOf(input);
            if (e.keyCode === 13) {
                let newInput = (0,_taskControllers__WEBPACK_IMPORTED_MODULE_4__.taskContentHandler)().getNewInput();
                _models_taskModels__WEBPACK_IMPORTED_MODULE_1__.OpenedTask.getOpenedTask().spliceInput(index + 1, newInput);
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

    return { forMainLinkButtonToAllPaths, forTitleInput, forTask, forButtonToAddTask, forButtonToDeleteLink, forButtonToClusterPaths, forLink, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
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









const taskContentHandler = () => {
    let count = 0;
    let task = _models_taskModels__WEBPACK_IMPORTED_MODULE_2__.OpenedTask.getOpenedTask();
    let content = task.getContent();
    let container = content.querySelector('.task-body');

    const isNumberList = (str) => {
        let checkNumberlist = new RegExp(_models_regulars__WEBPACK_IMPORTED_MODULE_1__.regulars.checkNumberlist, 'g');
        let res = str.match(checkNumberlist);

        return res !== null;
    }

    const getNewInput = (flag = 'text') => {
        let newInput = (0,_models_taskModels__WEBPACK_IMPORTED_MODULE_2__.Inputs)().getTextInput();
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
    (0,_listeners__WEBPACK_IMPORTED_MODULE_6__.setListeners)().forTask(task);
    (0,_linksControllers__WEBPACK_IMPORTED_MODULE_5__.addLinkToPath)(task, 'task');
    (0,_views_nodes_folders__WEBPACK_IMPORTED_MODULE_3__.viewElement)(task.getNode(), 'task').forNewElement();
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
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");
/* harmony import */ var _controllers_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/listeners */ "./src/controllers/listeners.js");
/* harmony import */ var _controllers_taskControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/taskControllers */ "./src/controllers/taskControllers.js");
/* harmony import */ var _helper_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/tools */ "./src/helper/tools.js");
/* harmony import */ var _views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/nodes/ButtonForAddTask */ "./src/views/nodes/ButtonForAddTask.js");
/* harmony import */ var _views_nodes_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/nodes/task */ "./src/views/nodes/task.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element */ "./src/models/element.js");
/* harmony import */ var _folderModels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./folderModels */ "./src/models/folderModels.js");









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
    let openedInput = _helper_tools__WEBPACK_IMPORTED_MODULE_3__.Tools.createNode('input', 'plug');

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
    const prototype = (0,_element__WEBPACK_IMPORTED_MODULE_6__.Element)(id);
    const node = (0,_views_nodes_task__WEBPACK_IMPORTED_MODULE_5__.getTaskNode)(id);
    let inputs = [];

    const getNode = () => {
        return node;
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
        let parent = _folderModels__WEBPACK_IMPORTED_MODULE_7__.OpenedFolder.getOpenedFolder();
        parent.removeTask(e);
        console.log(e.getNode());
        parent.getCluster().removeChild(e.getLink().getNode());
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_0__.openFolder)(parent);
    }

    return Object.assign({}, prototype, { spliceInput, getInputs, setInput, removeInput, getContent, del, getNode });
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
    const node = (0,_views_nodes_ButtonForAddTask__WEBPACK_IMPORTED_MODULE_4__.getButtonForAddTask)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTywyRkFBMkYsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFh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QTs7QUFFQTtBQUNBLGlCQUFpQixnREFBSztBQUN0QixpQkFBaUIsZ0RBQUssaUNBQWlDLEdBQUc7QUFDMUQsSUFBSSxnREFBSztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzcz8yMmFiIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2NvbW1vbkNvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xpbmtzQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2NvbnRyb2xsZXJzL2xpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvdGFza0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2ZvbGRlck1vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL2xpbmtPZlBhdGguanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL21vZGVscy9yZWd1bGFycy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvbW9kZWxzL3Rhc2tNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9saW5rcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3Mvbm9kZXMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDJ2aDtcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxdmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigydmgsIDJ2dyk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLm1haW4tbGluayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5zZXQtdmlzaWJsZS1wYXRocyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiBtaW4oNHZoLCAyMHZ3KTtcbn1cblxuLnBhdGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uZm9sZGVyczo6LXdlYmtpdC1zY3JvbGxiYXIsXG4udGFzay1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogbWluKDF2aCwgMTB2dyk7XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLnBhdGhzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmstd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XG5cbn1cblxuLmxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxdmggMCAwIDF2aDtcbn1cblxuLmRlbGV0ZS1saW5rLFxuLnRhc2stbGluay1zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgd2lkdGg6IDN2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kZWxldGUtbGluayA6aG92ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2xvc2UtY2x1c3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcbn1cblxuLmNvbnRlbnQ+Lm9wZW5lZC10YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogZm9sZGVycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZvbGRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcGFkZGluZzogMXZoO1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRvLWZvbGRlcik7XG59XG5cbi5vcGVuZWQtdGFzayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBwYWRkaW5nOiBtaW4oNnZoLCA2dncpO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGhlaWdodDogOTN2aDtcbiAgICBnYXA6IG1pbig2dmgsIDZ2dyk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZW1wbGF0ZS1pbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRlbXBsYXRlLXRhc2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IG1pbigydmgsIDJ2dyk7XG59XG5cbi50YXNrLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWluKDZ2aCwgNnZ3KTtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZoO1xufVxuXG4udGFzay1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgIG1heC13aWR0aDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZm9sZGVyLFxuLnRhc2ssXG4udGVtcGxhdGVGb2xkZXIsXG4udGVtcGxhdGVUYXNrLFxuLmJhY2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24td3JhcHBlciB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmljb24td3JhcHBlcj5zdmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uaWNvbi13cmFwcGVyPi50ZW1wbGF0ZVRhc2tTdmcsXG4uaWNvbi13cmFwcGVyPi50YXNrU3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXG4uY2hhaW4tZm9sZGVycyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogbW96aWxsYSBicm93c2VycyAqL1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogSUUxMCsgKi9cbn1cblxuLndyYXBwZXI+LmZvbGRlclN2ZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi53cmFwcGVyPi5hcnJvdy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctdXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi53cmFwcGVyPi5hcnJvdy1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRlbXBsYXRlRm9sZGVyOmhvdmVyIHtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcbn1cblxuLnRlbXBsYXRlVGFzazpob3ZlciB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgICBmcm9tIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86MS8xLjAwMDAwMDEpIHtcblxuICAgIC5zZXQtdmlzaWJsZS1wYXRocyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICdwYXRocydcbiAgICAgICAgICAgICdmb2xkZXJzJztcbiAgICB9XG5cbiAgICAucGF0aHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIHtcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdwYXRocyBmb2xkZXJzJztcbiAgICB9XG5cbiAgICAucGF0aHMtY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBwYXRocztcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gICAgICAgIG1heC13aWR0aDogMzB2dztcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IDkzdmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XG4gICAgfVxuXG4gICAgLnBhdGhzLWNsdXN0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxT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SUFFQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAgLS1mb250LXNpemUtdG8tZm9sZGVyOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5zcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdmg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigydmgsIDJ2dyk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuLm1haW4tbGluayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5zZXQtdmlzaWJsZS1wYXRocyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBmb250LXNpemU6IG1pbig0dmgsIDIwdncpO1xcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLFxcbi50YXNrLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi5saW5rLWJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG5cXG59XFxuXFxuLmxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdmggMCAwIDF2aDtcXG59XFxuXFxuLmRlbGV0ZS1saW5rLFxcbi50YXNrLWxpbmstc3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS1saW5rIDpob3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxufVxcblxcbi5jb250ZW50Pi5vcGVuZWQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogZm9sZGVycztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpO1xcbn1cXG5cXG4ub3BlbmVkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgcGFkZGluZzogbWluKDZ2aCwgNnZ3KTtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDkzdmg7XFxuICAgIGdhcDogbWluKDZ2aCwgNnZ3KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50ZW1wbGF0ZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZS10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2staW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiBtaW4oMnZoLCAydncpO1xcbn1cXG5cXG4udGFzay1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogbWluKDZ2aCwgNnZ3KTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDB2aDtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb2xkZXIsXFxuLnRhc2ssXFxuLnRlbXBsYXRlRm9sZGVyLFxcbi50ZW1wbGF0ZVRhc2ssXFxuLmJhY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLXdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmljb24td3JhcHBlcj5zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5pY29uLXdyYXBwZXI+LnRlbXBsYXRlVGFza1N2ZyxcXG4uaWNvbi13cmFwcGVyPi50YXNrU3ZnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKHNhZmFyaSwgY2hyb21lKSBicm93c2VycyAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBtb3ppbGxhIGJyb3dzZXJzICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogSUUxMCsgKi9cXG59XFxuXFxuLndyYXBwZXI+LmZvbGRlclN2ZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuLndyYXBwZXI+LmFycm93LWRvd24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XFxufVxcblxcbi50ZW1wbGF0ZVRhc2s6aG92ZXIge1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uOiA1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7XFxuXFxuICAgIC5zZXQtdmlzaWJsZS1wYXRocyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAncGF0aHMnXFxuICAgICAgICAgICAgJ2ZvbGRlcnMnO1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSB7XFxuXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3BhdGhzIGZvbGRlcnMnO1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBwYXRocztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgaGVpZ2h0OiA5M3ZoO1xcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWU5O1xcbiAgICB9XFxuXFxuICAgIC5wYXRocy1jbHVzdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gXCIuLi9tb2RlbHMvZm9sZGVyTW9kZWxzXCI7XG5pbXBvcnQgeyBDbHVzdGVyTGluayB9IGZyb20gXCIuLi9tb2RlbHMvbGlua09mUGF0aFwiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgdmlld0xpbmtPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JBZGRGb2xkZXIuZ2V0Tm9kZSgpLCAnYWRkJykuZm9yT2xkRWxlbWVudCgpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JDbG9zZUZvbGRlci5nZXROb2RlKCksICdjbG9zZScpLmZvck9sZEVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvblRvQWRkVGFzayA9ICgpID0+IHtcbiAgICB2aWV3RWxlbWVudChCdXR0b25Gb3JBZGRUYXNrLmdldE5vZGUoKSwgJ2FkZCcpLmZvck9sZEVsZW1lbnQoKTtcbn1cblxuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjcmVhdGVCdXR0b25Ub0Nsb3NlRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9BZGRGb2xkZXIoKTtcbiAgICBjcmVhdGVCdXR0b25Ub0FkZFRhc2soKTtcbn1cblxuY29uc3Qgc2V0QnV0dG9uc0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0FkZEZvbGRlcihCdXR0b25Gb3JBZGRGb2xkZXIpO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQWRkVGFzayhCdXR0b25Gb3JBZGRUYXNrKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0Nsb3NlRm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JNYWluTGlua0J1dHRvblRvQWxsUGF0aHMoKTtcblxufTtcblxuZXhwb3J0IGNvbnN0IHZpZXdFbGVtZW50cyA9IChlbGVtZW50cykgPT4ge1xuICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsZW1lbnQuZ2V0Tm9kZSgpO1xuICAgICAgICB2aWV3RWxlbWVudChub2RlKS5mb3JPbGRFbGVtZW50KCk7XG4gICAgfVxufVxuXG5jb25zdCBzdGFydENvbmZpZyA9ICgoKSA9PiB7XG4gICAgbGV0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICByb290Rm9sZGVyLnNldFBhcmVudChyb290Rm9sZGVyKTtcbiAgICByb290Rm9sZGVyLnNldExpbmsoQ2x1c3Rlckxpbmsocm9vdEZvbGRlcikpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIHNldEJ1dHRvbnNMaXN0ZW5lcnMoKTtcbiAgICBvcGVuQ2x1c3Rlcihyb290Rm9sZGVyLmdldExpbmsoKSk7XG4gICAgdmlld0xpbmtPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZFRhc2sgfSBmcm9tIFwiLi4vbW9kZWxzL3Rhc2tNb2RlbHNcIjtcbmltcG9ydCB7IHZpZXdFbGVtZW50IH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2ZvbGRlcnNcIjtcbmltcG9ydCB7IHZpZXdMaW5rT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2xpbmtzXCI7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b25zLCB2aWV3RWxlbWVudHMgfSBmcm9tIFwiLi9jb21tb25Db250cm9sbGVyc1wiO1xuaW1wb3J0IHsgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyLCBhZGRMaW5rVG9QYXRoIH0gZnJvbSBcIi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBoaWRkZW5PcGVuZWRUYXNrIH0gZnJvbSBcIi4vdGFza0NvbnRyb2xsZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBvcGVuRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGhpZGRlbk9wZW5lZFRhc2soKTtcbiAgICBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKVxuICAgIGNsZWFyRm9sZGVyc0NvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICB2aWV3TGlua09wZW5lZEZvbGRlcihmb2xkZXIpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIHZpZXdFbGVtZW50cyhmb2xkZXIuZ2V0SW5uZXJUYXNrcygpKTtcbiAgICBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIoT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKTtcbn1cblxuY29uc3QgY2xlYXJGb2xkZXJzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGxldCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoZm9sZGVycyk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXIgPSAoZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpKSA9PiB7XG4gICAgbGV0IG5ld0ZvbGRlciA9IGZvbGRlci5hZGRGb2xkZXIoKTtcbiAgICB2aWV3RWxlbWVudChuZXdGb2xkZXIuZ2V0Tm9kZSgpKS5mb3JOZXdFbGVtZW50KCk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yRm9sZGVyKG5ld0ZvbGRlcik7XG4gICAgYWRkTGlua1RvUGF0aChuZXdGb2xkZXIpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0UmVzaXplT2JzZXJ2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZSA9PiB7XG4gICAgICAgIHNldEZvbnRTaXplVG9Gb2xkZXJzKHRlbXBsYXRlKTtcbiAgICB9KVxuXG4gICAgcm8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXInKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRGb250U2l6ZVRvRm9sZGVycyA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgIFRvb2xzLnJlbGF0aXZlRm9udCh0ZW1wbGF0ZSwgJy0tZm9udC1zaXplLXRvLWZvbGRlcicpO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgQ2x1c3RlckxpbmssIFRhc2tMaW5rIH0gZnJvbSBcIi4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCwgdmlld0xpbmsgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvbGlua3NcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3Qgb3BlbkFsbExpbmtzID0gKCkgPT4ge1xuICAgIGxldCBwYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRocy1jb250YWluZXInKTtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXZpc2libGUtcGF0aHMnKTtcbiAgICBwYXRocy5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGNsb3NlLCBnZXROb2RlQXJyb3dEb3duKCkpO1xufVxuXG5leHBvcnQgY29uc3QgY2xvc2VBbGxMaW5rcyA9ICgpID0+IHtcbiAgICBsZXQgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJyk7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC12aXNpYmxlLXBhdGhzJyk7XG4gICAgcGF0aHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG59XG5cbmV4cG9ydCBjb25zdCBjbG9zZUNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93UmlnaHQoKSk7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLmNsb3NlKGNsdXN0ZXIsIDEsIDAsIDIwMCwgJ2ZvcndhcmRzJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNsdXN0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAyMDApO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlbkNsdXN0ZXIgPSAobGluaykgPT4ge1xuICAgIGxldCBjbHVzdGVyID0gbGluay5nZXRDbHVzdGVyKCk7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzd2l0Y2hDbG9zZUJ1dHRvblN2ZyhjbG9zZSwgZ2V0Tm9kZUFycm93RG93bigpKTtcbiAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgVG9vbHMuc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4oY2x1c3RlciwgMCwgMSwgMjAwLCAnZm9yd2FyZHMnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVyZkZvckxpbmsgPSAobGluaykgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yTGluayhsaW5rKTtcbiAgICBpZiAoY2x1c3RlckNsb3NlICE9PSBudWxsKSB7XG4gICAgICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQ2x1c3RlclBhdGhzKGNsdXN0ZXJDbG9zZSwgbGluayk7XG4gICAgfVxuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvRGVsZXRlTGluayhsaW5rKTtcbn1cblxuY29uc3Qgc3dpdGNoQ2xvc2VCdXR0b25TdmcgPSAoY2xvc2UsIGNoaWxkKSA9PiB7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGNsb3NlKTtcbiAgICBjbG9zZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpbmtUb1BhdGggPSAoZWxlbWVudCwgdHlwZSA9ICdmb2xkZXInKSA9PiB7XG4gICAgbGV0IGxpbmsgPSB0eXBlID09PSAnZm9sZGVyJyA/IGdldEN1c3RvbUxpbmsoZWxlbWVudCkgOiBUYXNrTGluayhlbGVtZW50KTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKGxpbmspO1xuICAgIGVsZW1lbnQuc2V0TGluayhsaW5rKTtcbiAgICB2aWV3TGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbUxpbmsgPSAoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgbGluayA9IENsdXN0ZXJMaW5rKGZvbGRlcik7XG4gICAgbGluay5nZXRDbHVzdGVyKCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgcmV0dXJuIGxpbms7XG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IE9wZW5lZElucHV0LCBPcGVuZWRUYXNrIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGNsb3NlQWxsTGlua3MsIGNsb3NlQ2x1c3Rlciwgb3BlbkFsbExpbmtzLCBvcGVuQ2x1c3RlciB9IGZyb20gXCIuL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIG9wZW5UYXNrLCB0YXNrQ29udGVudEhhbmRsZXIgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gZm9sZGVyLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tGb2xkZXIgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuRm9sZGVyKGZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvclRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IHRhc2suZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja1Rhc2sgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBvcGVuVGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9BZGRGb2xkZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVGb2xkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9BZGRUYXNrID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JCdXR0b25Ub0Nsb3NlRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IG9wZW5lZEZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIob3BlbmVkRm9sZGVyLmdldFBhcmVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTGluayA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcGVuRm9sZGVyKGxpbmsuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgb3BlblRhc2sobGluay5nZXRUYXNrKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29sb3IgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdXNlT3Zlck5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWNmZDljJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vdXNlT3V0Tm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JNYWluTGlua0J1dHRvblRvQWxsUGF0aHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmbGFnO1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdmlzaWJsZS1wYXRocycpO1xuICAgICAgICBsZXQgcGF0aHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aHMtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGZsYWcgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBhdGhzKS5kaXNwbGF5O1xuICAgICAgICAgICAgaWYgKGZsYWcgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZW5BbGxMaW5rcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZUFsbExpbmtzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2x1c3RlclBhdGhzID0gKG5vZGUsIGxpbmspID0+IHtcbiAgICAgICAgbGV0IGZsYWc7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGZsYWcgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGxpbmsuZ2V0Q2x1c3RlcigpKS5kaXNwbGF5O1xuICAgICAgICAgICAgaWYgKGZsYWcgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIG9wZW5DbHVzdGVyKGxpbmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZUNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvRGVsZXRlTGluayA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1saW5rJyk7XG4gICAgICAgIGNvbnN0IGNsaWNrTm9kZSA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcblxuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBsaW5rLmdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgiDQuCDQstGB0ZEg0LXQs9C+INGB0L7QtNC10YDQttC40LzQvtC1PycpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kZWwoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvclRpdGxlSW5wdXQgPSAoaW5wdXQsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm9keScpO1xuICAgICAgICBjb25zdCBwcmVzc0tleXMgPSBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SW5wdXQgPSB0YXNrQ29udGVudEhhbmRsZXIoKS5nZXROZXdJbnB1dCgpO1xuICAgICAgICAgICAgICAgIE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLnNwbGljZUlucHV0KGluZGV4ICsgMSwgbmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3SW5wdXQsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5hY3RpdmF0ZUlucHV0KG5ld0lucHV0KTtcbiAgICAgICAgICAgICAgICBmb3JJbnB1dChuZXdJbnB1dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuc2V0TmV4dGlucHV0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxlZnRDbGljayA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuYWN0aXZhdGVJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZvcklucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXNzS2V5c1VwID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLmdldElucHV0cygpLmluZGV4T2YoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3SW5wdXQgPSB0YXNrQ29udGVudEhhbmRsZXIoKS5nZXROZXdJbnB1dCgpO1xuICAgICAgICAgICAgICAgIE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLnNwbGljZUlucHV0KGluZGV4ICsgMSwgbmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnZpZXdOZXdJbnB1dChpbnB1dCwgbmV3SW5wdXQpO1xuICAgICAgICAgICAgICAgIGZvcklucHV0KG5ld0lucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcmVzc0tleXNEb3duID0gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkucmVtb3ZlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIYW5kbGVyKCkuc2V0UHJldmlvdXNJbnB1dCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50SGFuZGxlcigpLnNldE5leHRpbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxlZnRDbGljayA9IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0YXNrQ29udGVudEhhbmRsZXIoKS5hY3RpdmF0ZUlucHV0KGlucHV0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBmb3JNYWluTGlua0J1dHRvblRvQWxsUGF0aHMsIGZvclRpdGxlSW5wdXQsIGZvclRhc2ssIGZvckJ1dHRvblRvQWRkVGFzaywgZm9yQnV0dG9uVG9EZWxldGVMaW5rLCBmb3JCdXR0b25Ub0NsdXN0ZXJQYXRocywgZm9yTGluaywgZm9yRm9sZGVyLCBmb3JCdXR0b25Ub0FkZEZvbGRlciwgZm9yQnV0dG9uVG9DbG9zZUZvbGRlciB9XG59IiwiaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IHJlZ3VsYXJzIH0gZnJvbSBcIi4uL21vZGVscy9yZWd1bGFyc1wiO1xuaW1wb3J0IHsgSW5wdXRzLCBPcGVuZWRJbnB1dCwgT3BlbmVkVGFzaywgVGFzayB9IGZyb20gXCIuLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgdmlld0VsZW1lbnQgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyc1wiO1xuaW1wb3J0IHsgdmlld0xpbmtPcGVuZWRUYXNrIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2xpbmtzXCI7XG5pbXBvcnQgeyBhZGRMaW5rVG9QYXRoIH0gZnJvbSBcIi4vbGlua3NDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4vbGlzdGVuZXJzXCI7XG5cblxuZXhwb3J0IGNvbnN0IHRhc2tDb250ZW50SGFuZGxlciA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCB0YXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgbGV0IGNvbnRlbnQgPSB0YXNrLmdldENvbnRlbnQoKTtcbiAgICBsZXQgY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG5cbiAgICBjb25zdCBpc051bWJlckxpc3QgPSAoc3RyKSA9PiB7XG4gICAgICAgIGxldCBjaGVja051bWJlcmxpc3QgPSBuZXcgUmVnRXhwKHJlZ3VsYXJzLmNoZWNrTnVtYmVybGlzdCwgJ2cnKTtcbiAgICAgICAgbGV0IHJlcyA9IHN0ci5tYXRjaChjaGVja051bWJlcmxpc3QpO1xuXG4gICAgICAgIHJldHVybiByZXMgIT09IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV3SW5wdXQgPSAoZmxhZyA9ICd0ZXh0JykgPT4ge1xuICAgICAgICBsZXQgbmV3SW5wdXQgPSBJbnB1dHMoKS5nZXRUZXh0SW5wdXQoKTtcbiAgICAgICAgcmV0dXJuIG5ld0lucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IHZpZXdOZXdJbnB1dCA9IChpbnB1dCwgbmV3SW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3SW5wdXQsIGlucHV0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgYWN0aXZhdGVJbnB1dChuZXdJbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBPcGVuZWRJbnB1dC5zZXRPcGVuZWRJbnB1dChpbnB1dCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBPcGVuZWRJbnB1dC5nZXRPcGVuZWRJbnB1dCgpO1xuICAgICAgICBsZXQgdGFzayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpO1xuICAgICAgICBsZXQgY29udGVudCA9IHRhc2suZ2V0Q29udGVudCgpO1xuICAgICAgICBsZXQgY29udGFpbmVyID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IHRhc2suZ2V0SW5wdXRzKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5wdXRzLmluZGV4T2YoaW5wdXQpO1xuICAgICAgICByZXR1cm4geyBpbnB1dCwgdGFzaywgY29udGVudCwgY29udGFpbmVyLCBpbnB1dHMsIGluZGV4IH07XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJldmlvdXNJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXQgPSBkYXRhLmlucHV0c1tkYXRhLmluZGV4IC0gMV07XG4gICAgICAgIGlmIChkYXRhLmluZGV4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZUlucHV0KG9sZElucHV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldE5leHRpbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXQgPSBkYXRhLmlucHV0c1tkYXRhLmluZGV4ICsgMV07XG4gICAgICAgIGlmIChkYXRhLmluZGV4ICsgMSA8IGRhdGEuaW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aXZhdGVJbnB1dChvbGRJbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldERhdGEoKTtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXQgPSBkYXRhLmlucHV0c1tkYXRhLmluZGV4IC0gMV07XG4gICAgICAgIGRhdGEudGFzay5yZW1vdmVJbnB1dChkYXRhLmlucHV0KTtcbiAgICAgICAgZGF0YS5jb250YWluZXIucmVtb3ZlQ2hpbGQoZGF0YS5pbnB1dCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWN0aXZhdGVJbnB1dChvbGRJbnB1dCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGlzTnVtYmVyTGlzdCwgc2V0TmV4dGlucHV0LCBzZXRQcmV2aW91c0lucHV0LCByZW1vdmVJbnB1dCwgZ2V0TmV3SW5wdXQsIHZpZXdOZXdJbnB1dCwgYWN0aXZhdGVJbnB1dCB9O1xufVxuXG5leHBvcnQgY29uc3Qgb3BlblRhc2sgPSAodGFzaykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICByZW1vdmVPcGVuZWRUYXNrKCk7XG4gICAgdmlld0xpbmtPcGVuZWRUYXNrKHRhc2spO1xuICAgIHZpc2libGVPcGVuZWRUYXNrKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrLmdldENvbnRlbnQoKSk7XG4gICAgY29uc3QgaW5wdXQgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZU9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG9wZW5lZFRhc2suZ2V0Q29udGVudCgpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBoaWRkZW5PcGVuZWRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBvcGVuZWRUYXNrID0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCk7XG4gICAgaWYgKG9wZW5lZFRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcGVuZWRUYXNrLmdldENvbnRlbnQoKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdmlzaWJsZU9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IG9wZW5lZFRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICBpZiAob3BlbmVkVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wZW5lZFRhc2suZ2V0Q29udGVudCgpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9IChmb2xkZXIgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpID0+IHtcbiAgICBsZXQgdGFza0lkID0gZm9sZGVyLmdldFRhc2tDb3VudCgpO1xuICAgIGxldCB0YXNrID0gVGFzayh0YXNrSWQpO1xuICAgIGZvbGRlci5hZGRUYXNrKHRhc2spO1xuICAgIHNldExpc3RlbmVycygpLmZvclRhc2sodGFzayk7XG4gICAgYWRkTGlua1RvUGF0aCh0YXNrLCAndGFzaycpO1xuICAgIHZpZXdFbGVtZW50KHRhc2suZ2V0Tm9kZSgpLCAndGFzaycpLmZvck5ld0VsZW1lbnQoKTtcbn0iLCJpbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4uL3ZpZXdzL2FuaW1hdGlvbnMvYW5pbWF0aW9uc1wiO1xuXG5jb25zdCBUb29scyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Tm9kZVdpdGhTcGFuID0gKG5vZGVOYW1lLCB0ZXh0LCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShub2RlTmFtZSwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIHJldHVybiBzZXRVcFNwYW4obm9kZSwgdGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTm9kZSA9IChub2RlTmFtZSwgLi4uY2xhc3NOYW1lcykgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpO1xuICAgICAgICBhZGRDbGFzc2VzKG5vZGUsIC4uLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIC4uLmNsYXNzZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgY3VyQ2xhc3Mgb2YgY2xhc3Nlcykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGN1ckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFVwU3BhbiA9IChub2RlLCB0ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzcGFuID0gY3JlYXRlTm9kZSgnc3BhbicpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kQ2hpbGRzID0gKG5vZGUsIC4uLmNoaWxkcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHMpIHtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlLCBhdHJzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGF0ciBvZiBhdHJzKSB7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZShhdHIubmFtZSwgYXRyLnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHMgPSAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlQ2hpbGRzQWZ0ZXIgPSAobm9kZSwgY2hpbGQpID0+IHtcbiAgICAgICAgd2hpbGUgKG5vZGUubGFzdENoaWxkICE9IGNoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gKG1vZGUsIC4uLm5vZGVzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IG1vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzbW9vdGhWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZSA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlbiA9IChlLCBvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICByZXR1cm4gQW5pbWF0aW9ucy5vcGFjaXR5KGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9wZW4sIGNsb3NlIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHNtb290aFZpc2liaWxpdHlHcm91cCA9ICguLi5ub2RlcykgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZSA9IChvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgc21vb3RoVmlzaWJpbGl0eSgpLmNsb3NlKG5vZGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW4gPSAob3AxLCBvcDIsIGR1ciwgZmlsbCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgICAgIHNtb290aFZpc2liaWxpdHkoKS5vcGVuKG5vZGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9wZW4sIGNsb3NlIH07XG4gICAgfVxuXG4gICAgY29uc3QgcmdiYTJoZXggPSAocmdiYSkgPT4gYCMke3JnYmEubWF0Y2goL15yZ2JhP1xcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKykoPzosXFxzKihcXGQrXFwuezAsMX1cXGQqKSk/XFwpJC8pLnNsaWNlKDEpLm1hcCgobiwgaSkgPT4gKGkgPT09IDMgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobikgKiAyNTUpIDogcGFyc2VGbG9hdChuKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykucmVwbGFjZSgnTmFOJywgJycpKS5qb2luKCcnKX1gXG5cbiAgICBjb25zdCByZWxhdGl2ZUZvbnQgPSAobm9kZU9mUmVsYXRpdml0eSwgY3NzVmFyKSA9PiB7XG4gICAgICAgIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgbGV0IGZvbGRlckhlaWdodCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZU9mUmVsYXRpdml0eSkud2lkdGg7XG4gICAgICAgIGxldCBzaXplID0gcGFyc2VGbG9hdChmb2xkZXJIZWlnaHQucmVwbGFjZSgncHgnLCAnJykpIC8gNjtcbiAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eShjc3NWYXIsIGAke3NpemV9cHhgKTtcbiAgICB9XG5cbiAgICB2YXIgZ2V0U2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbSkge1xuXG4gICAgICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcbiAgICAgICAgdmFyIHNpYmxpbmdzID0gW107XG4gICAgICAgIHZhciBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcbiAgICAgICAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByYW5kb21fcmdiYSgpIHtcbiAgICAgICAgdmFyIG8gPSBNYXRoLnJvdW5kLCByID0gTWF0aC5yYW5kb20sIHMgPSAyNTU7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgbyhyKCkgKiBzKSArICcsJyArIG8ocigpICogcykgKyAnLCcgKyBvKHIoKSAqIHMpICsgJywnICsgJzEnICsgJyknO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJhbmRvbV9yZ2JhLCBnZXRTaWJsaW5ncywgcmVsYXRpdmVGb250LCByZW1vdmVDaGlsZHNBZnRlciwgZGlzcGxheU1vZGUsIHNtb290aFZpc2liaWxpdHlHcm91cCwgc21vb3RoVmlzaWJpbGl0eSwgcmdiYTJoZXgsIGdldE5vZGVXaXRoU3Bhbiwgc2V0QXR0cmlidXRlcywgY3JlYXRlTm9kZSwgYXBwZW5kQ2hpbGRzLCBzZXRVcFNwYW4sIHJlbW92ZUNoaWxkcywgYWRkQ2xhc3NlcyB9O1xufSkoKTtcblxuZXhwb3J0IHsgVG9vbHMgfSIsImltcG9ydCB7IGNyZWF0ZUZvbGRlciwgb3BlbkZvbGRlciwgc2V0UmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnMnXG5pbXBvcnQgeyBzZXRMaXN0ZW5lcmZGb3JMaW5rIH0gZnJvbSAnLi9jb250cm9sbGVycy9saW5rc0NvbnRyb2xsZXJzJztcbmltcG9ydCB7IE9wZW5lZEZvbGRlciwgUm9vdEZvbGRlciB9IGZyb20gJy4vbW9kZWxzL2ZvbGRlck1vZGVscyc7XG5pbXBvcnQgJy4vdmlld3MvY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgdmlld1Jvb3RQYXRoc1RocmVlIH0gZnJvbSAnLi92aWV3cy9ub2Rlcy9saW5rcyc7XG5cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbiAgICBzZXRSZXNpemVPYnNlcnZlcnMoKTtcbiAgICB2aWV3Um9vdFBhdGhzVGhyZWUoKTtcbn1cblxuc3RhcnQoKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAwOyBpKyspIHtcbiAgICBjcmVhdGVGb2xkZXIoKTtcbiAgICBsZXQgZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyRm9sZGVycygpWzBdO1xuICAgIG9wZW5Gb2xkZXIoZm9sZGVyKVxufSIsImltcG9ydCB7IE9wZW5lZEZvbGRlciB9IGZyb20gXCIuL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgRWxlbWVudCA9IChpZHMpID0+IHtcbiAgICBsZXQgaWQgPSBpZHM7XG4gICAgbGV0IG5hbWU7XG4gICAgbGV0IGxpbms7XG4gICAgbGV0IHBhcmVudCA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKTtcblxuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKG5vZGUpID0+IHtcbiAgICAgICAgbGluayA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldElkLCBzZXROYW1lLCBnZXROYW1lLCBzZXRMaW5rLCBnZXRMaW5rLCBzZXRQYXJlbnQsIGdldFBhcmVudCxcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0Rm9sZGVyTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9mb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckFkZEZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXJcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDbHVzdGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2xpbmtzXCI7XG5pbXBvcnQgeyBvcGVuRm9sZGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2ZvbGRlcnNDb250cm9sbGVyc1wiO1xuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZEZvbGRlciA9ICgoKSA9PiB7XG4gICAgbGV0IG9wZW5lZEZvbGRlcjtcbiAgICBjb25zdCBzZXRPcGVuZWRGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgICAgIG9wZW5lZEZvbGRlciA9IGZvbGRlcjtcbiAgICB9XG4gICAgY29uc3QgZ2V0T3BlbmVkRm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlbmVkRm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBzZXRPcGVuZWRGb2xkZXIsIGdldE9wZW5lZEZvbGRlciB9XG59KSgpO1xuXG5leHBvcnQgY29uc3QgRm9sZGVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gRWxlbWVudChpZCk7XG4gICAgbGV0IGNsdXN0ZXIgPSBjcmVhdGVDbHVzdGVyKCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldEZvbGRlck5vZGUoaWQpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXVxuICAgIGxldCBpbm5lclRhc2tzID0gW107XG4gICAgbGV0IGZvbGRlckNvdW50ID0gMDtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcblxuICAgIGNvbnN0IGFkZEZvbGRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SWQgPSBgJHtwcm90b3R5cGUuZ2V0SWQoKX1fJHtmb2xkZXJDb3VudH1gO1xuICAgICAgICBzZXRGb2xkZXJDb3VudCgpO1xuICAgICAgICBsZXQgbmV3Rm9sZGVyID0gRm9sZGVyKG5ld0lkKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2gobmV3Rm9sZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ld0ZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSBwcm90b3R5cGUuZ2V0UGFyZW50KCkuZ2V0SW5uZXJGb2xkZXJzKCkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlciAhPT0gcHJvdG90eXBlLmdldExpbmsoKS5nZXRGb2xkZXIoKSk7XG4gICAgICAgIHByb3RvdHlwZS5nZXRQYXJlbnQoKS5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQocHJvdG90eXBlLmdldExpbmsoKS5nZXROb2RlKCkpO1xuICAgICAgICBwcm90b3R5cGUuZ2V0UGFyZW50KCkuc2V0SW5uZXJGb2xkZXJzKGZpbHRlcik7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhbXSk7XG4gICAgICAgIG9wZW5Gb2xkZXIocHJvdG90eXBlLmdldFBhcmVudCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbm5lckZvbGRlcnMgPSAoYXJyKSA9PiB7XG4gICAgICAgIGlubmVyRm9sZGVycyA9IGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lckZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2x1c3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgICsrdGFza0NvdW50O1xuICAgICAgICBpbm5lclRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGlubmVyVGFza3MgPSBpbm5lclRhc2tzLmZpbHRlcigoZSkgPT4gZSAhPT0gdGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5uZXJUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyVGFza3M7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Rm9sZGVyQ291bnQgPSAoKSA9PiB7XG4gICAgICAgICsrZm9sZGVyQ291bnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGFza0NvdW50ID0gKCkgPT4ge1xuICAgICAgICArK3Rhc2tDb3VudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrQ291bnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0YXNrQ291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvdHlwZSwgeyByZW1vdmVUYXNrLCBnZXRUYXNrQ291bnQsIHNldFRhc2tDb3VudCwgc2V0Rm9sZGVyQ291bnQsIGFkZFRhc2ssIGdldElubmVyVGFza3MsIGFkZEZvbGRlciwgZGVsLCBzZXRJbm5lckZvbGRlcnMsIGdldElubmVyRm9sZGVycywgZ2V0Q2x1c3RlciwgZ2V0Tm9kZSB9KTtcbn1cblxuLypleHBvcnQgY29uc3QgRm9sZGVyID0gKGlkcywgZm9sZGVyID0gMCkgPT4ge1xuICAgIGxldCBpZCA9IGlkcztcbiAgICBsZXQgbmFtZTtcbiAgICBsZXQgbGluaztcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGxldCBwYXJlbnQgPSBmb2xkZXI7XG4gICAgbGV0IGNsdXN0ZXIgPSBjcmVhdGVDbHVzdGVyKCk7XG4gICAgY29uc3Qgbm9kZSA9IGdldEZvbGRlck5vZGUoaWQpO1xuICAgIGxldCBpbm5lckZvbGRlcnMgPSBbXVxuXG4gICAgY29uc3QgYWRkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdJZCA9IGAke2lkfV8ke2NvdW50fWA7XG4gICAgICAgICsrY291bnQ7XG4gICAgICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIobmV3SWQsIGZvbGRlcik7XG4gICAgICAgIGlubmVyRm9sZGVycy5wdXNoKG5ld0ZvbGRlcik7XG4gICAgICAgIHJldHVybiBuZXdGb2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKCkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyID0gcGFyZW50LmdldElubmVyRm9sZGVycygpLmZpbHRlcigoZm9sZGVyKSA9PiBmb2xkZXIgIT09IGxpbmsuZ2V0Rm9sZGVyKCkpO1xuICAgICAgICBzZXRJbm5lckZvbGRlcnMoW10pO1xuICAgICAgICBwYXJlbnQuZ2V0Q2x1c3RlcigpLnJlbW92ZUNoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICAgICAgcGFyZW50LnNldElubmVyRm9sZGVycyhmaWx0ZXIpO1xuICAgICAgICBvcGVuRm9sZGVyKHBhcmVudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SW5uZXJGb2xkZXJzID0gKGFycikgPT4ge1xuICAgICAgICBpbm5lckZvbGRlcnMgPSBhcnI7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbm5lckZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbm5lckZvbGRlcnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UGFyZW50ID0gKG5ld1BhcmVudCkgPT4ge1xuICAgICAgICBwYXJlbnQgPSBuZXdQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5hbWUgPSAodmFsKSA9PiB7XG4gICAgICAgIG5hbWUgPSB2YWw7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TGluayA9IChub2RlKSA9PiB7XG4gICAgICAgIGxpbmsgPSBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5rO1xuICAgIH1cblxuICAgIGNvbnN0IGdldENsdXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjbHVzdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldElubmVyRm9sZGVycywgZ2V0Q2x1c3RlciwgZ2V0TGluaywgc2V0TGluaywgc2V0UGFyZW50LCBnZXRQYXJlbnQsIGFkZEZvbGRlciwgZGVsLCBnZXROb2RlLCBnZXRJbm5lckZvbGRlcnMsIGdldElkLCBzZXROYW1lLCBnZXROYW1lIH07XG59Ki9cblxuZXhwb3J0IGNvbnN0IFJvb3RGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCByb290Rm9sZGVyID0gRm9sZGVyKDApO1xuICAgIGNvbnN0IGdldFJvb3RGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByb290Rm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXRSb290Rm9sZGVyIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uRm9yQWRkRm9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQWRkRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JDbG9zZUZvbGRlciA9ICgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGdldEJ1dHRvbkZvckNsb3NlRm9sZGVyKCk7XG4gICAgY29uc3QgZ2V0Tm9kZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7IGdldE5vZGUgfTtcbn0pKCk7IiwiaW1wb3J0IHsgZ2V0Rm9sZGVyTGlua05vZGUsIGdldFRhc2tMaW5rTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9saW5rc1wiO1xuXG5leHBvcnQgY29uc3QgTGluayA9IChpRWxlbWVudCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gaUVsZW1lbnQ7XG4gICAgbGV0IG5hbWUgPSBlbGVtZW50LmdldElkKCk7XG4gICAgbGV0IG5vZGU7XG5cbiAgICBjb25zdCBnZXRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXROb2RlID0gKGlOb2RlKSA9PiB7XG4gICAgICAgIG5vZGUgPSBpTm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzZXROb2RlLCBnZXROb2RlLCBnZXROYW1lLCBnZXRFbGVtZW50IH07XG59XG5cbmV4cG9ydCBjb25zdCBGb2xkZXJMaW5rID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCB0eXBlID0gJ2ZvbGRlcic7XG4gICAgbGV0IHByb3RvdHlwZSA9IExpbmsoZm9sZGVyKTtcbiAgICBwcm90b3R5cGUuc2V0Tm9kZShnZXRGb2xkZXJMaW5rTm9kZShwcm90b3R5cGUuZ2V0TmFtZSgpKSk7XG4gICAgY29uc3QgZ2V0Rm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdG90eXBlLmdldEVsZW1lbnQoKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgZ2V0Rm9sZGVyLCBnZXRUeXBlIH0pO1xufVxuXG5leHBvcnQgY29uc3QgVGFza0xpbmsgPSAodGFzaykgPT4ge1xuICAgIGxldCB0eXBlID0gJ3Rhc2snO1xuICAgIGxldCBwcm90b3R5cGUgPSBMaW5rKHRhc2spO1xuICAgIHByb3RvdHlwZS5zZXROb2RlKGdldFRhc2tMaW5rTm9kZShwcm90b3R5cGUuZ2V0TmFtZSgpKSk7XG4gICAgY29uc3QgZ2V0VGFzayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb3RvdHlwZS5nZXRFbGVtZW50KCk7XG4gICAgfVxuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldFRhc2ssIGdldFR5cGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDbHVzdGVyTGluayA9IChmb2xkZXIpID0+IHtcbiAgICBsZXQgcHJvdG90eXBlID0gRm9sZGVyTGluayhmb2xkZXIpO1xuICAgIGxldCBjbHVzdGVyID0gZm9sZGVyLmdldENsdXN0ZXIoKTtcbiAgICBjb25zdCBnZXRDbHVzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldENsdXN0ZXIgfSk7XG59IiwiZXhwb3J0IGNvbnN0IHJlZ3VsYXJzID0ge1xuICAgIGNoZWNrTnVtYmVybGlzdDogJyheKFxcXFxkK1xcXFwuXFxcXHMpKScsXG59IiwiaW1wb3J0IHsgb3BlbkZvbGRlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9mb2xkZXJzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IHRhc2tDb250ZW50SGFuZGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy90YXNrQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uL2hlbHBlci90b29sc1wiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRUYXNrXCI7XG5pbXBvcnQgeyBnZXRUYXNrTm9kZSB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy90YXNrXCI7XG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyTW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBPcGVuZWRUYXNrID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkVGFzaztcbiAgICBjb25zdCBzZXRPcGVuZWRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgb3BlbmVkVGFzayA9IHRhc2s7XG4gICAgfVxuICAgIGNvbnN0IGdldE9wZW5lZFRhc2sgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRUYXNrO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNldE9wZW5lZFRhc2ssIGdldE9wZW5lZFRhc2sgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IE9wZW5lZElucHV0ID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkSW5wdXQgPSBUb29scy5jcmVhdGVOb2RlKCdpbnB1dCcsICdwbHVnJyk7XG5cbiAgICBjb25zdCBzZXRPcGVuZWRJbnB1dCA9IChpbnB1dCkgPT4ge1xuICAgICAgICBkaXNhYmxlSW5wdXQoKTtcbiAgICAgICAgb3BlbmVkSW5wdXQgPSBpbnB1dDtcbiAgICAgICAgYWN0aXZhdGVJbnB1dCgpO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5lZElucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcGVuZWRJbnB1dCAhPT0gT3BlbmVkVGFzay5nZXRPcGVuZWRUYXNrKCkuZ2V0SW5wdXRzKClbMF0pIHtcbiAgICAgICAgICAgIG9wZW5lZElucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBjb21tZW50Li4uJztcbiAgICAgICAgfVxuICAgICAgICBvcGVuZWRJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FibGVJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgaWYgKG9wZW5lZElucHV0ICE9PSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKS5nZXRJbnB1dHMoKVswXSkge1xuICAgICAgICAgICAgb3BlbmVkSW5wdXQucGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzZXRPcGVuZWRJbnB1dCwgZ2V0T3BlbmVkSW5wdXQgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IFRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBFbGVtZW50KGlkKTtcbiAgICBjb25zdCBub2RlID0gZ2V0VGFza05vZGUoaWQpO1xuICAgIGxldCBpbnB1dHMgPSBbXTtcblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldElucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0cy5wdXNoKGlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGxpY2VJbnB1dCA9IChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgaW5wdXRzLnNwbGljZShpbmRleCwgMCwgaW5wdXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUlucHV0ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0cyA9IGlucHV0cy5maWx0ZXIoKGUpID0+IGUgIT09IGlucHV0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbnB1dHM7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZS10YXNrJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdvcGVuZWQtdGFzayc7XG4gICAgICAgIHNldFRpdGxlSW5wdXQoY29udGVudCk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRUaXRsZUlucHV0ID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG4gICAgICAgIHNldElucHV0KGlucHV0KTtcbiAgICAgICAgc2V0TGlzdGVuZXJzKCkuZm9yVGl0bGVJbnB1dChpbnB1dCwgY29udGVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHNldENvbnRlbnQoKTtcblxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9IChlKSA9PiB7XG4gICAgICAgIGxldCBwYXJlbnQgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCk7XG4gICAgICAgIHBhcmVudC5yZW1vdmVUYXNrKGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmdldE5vZGUoKSk7XG4gICAgICAgIHBhcmVudC5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQoZS5nZXRMaW5rKCkuZ2V0Tm9kZSgpKTtcbiAgICAgICAgb3BlbkZvbGRlcihwYXJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90b3R5cGUsIHsgc3BsaWNlSW5wdXQsIGdldElucHV0cywgc2V0SW5wdXQsIHJlbW92ZUlucHV0LCBnZXRDb250ZW50LCBkZWwsIGdldE5vZGUgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dHMgPSAoKSA9PiB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGUtaW5wdXQnKS5jbG9uZU5vZGUoKTtcbiAgICBub2RlLmNsYXNzTmFtZSA9ICd0YXNrLWlucHV0JztcblxuICAgIGNvbnN0IGdldFRleHRJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0VGV4dElucHV0IH07XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JBZGRUYXNrID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQWRkVGFzaygpO1xuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXROb2RlIH07XG59KSgpOyIsImV4cG9ydCBjb25zdCBBbmltYXRpb25zID0gKCgpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gKGUsIHgwLCB4MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGxlZnQ6IGAke3gwfWAgfSwgeyBsZWZ0OiBgJHt4MX1gIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB5ID0gKGUsIHkwLCB5MSwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IHRvcDogYCR7eTB9YCB9LCB7IHRvcDogYCR7eTF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gKGUsIHJvdGF0ZTEsIHJvdGF0ZTIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGUxfWRlZylgIH0sIHsgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMn1kZWcpYCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgcm90YXRlIH07XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmQgPSAoZSwgY29sb3IxLCBjb2xvcjIsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKFt7IGJhY2tncm91bmQ6IGNvbG9yMSB9LCB7IGJhY2tncm91bmQ6IGNvbG9yMiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wYWNpdHkgPSAoZSwgb3BhY2l0eTEsIG9wYWNpdHkyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBvcGFjaXR5OiBvcGFjaXR5MSB9LCB7IG9wYWNpdHk6IG9wYWNpdHkyIH1dLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tID0gKGUsIGR1ciwgZmlsbCA9ICdub25lJywgLi4ua2V5RnJhbWVzKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoLi4ua2V5RnJhbWVzLCB7IGR1cmF0aW9uOiBkdXIsIGZpbGw6IGZpbGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLCBvcGFjaXR5LCBjdXN0b20gfTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVGb2xkZXJTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkRm9sZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckFkZE5vZGVBc3NlbWJseSA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAndGVtcGxhdGVGb2xkZXInKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0U3ZnSW5XcmFwcGVyID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZVRhc2tTdmcnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGRUYXNrQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGRUYXNrQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICd0ZW1wbGF0ZVRhc2snKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgQWRkLi4uYCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHModGFzaywgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gYnV0dG9uRm9yQ2xvc2VGb2xkZXJBc3NlbWJseSgpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGJ1dHRvbkZvckNsb3NlRm9sZGVyQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2JhY2snKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRTdmdJbldyYXBwZXIoKSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3QgZ2V0V3JhcHBlckljb24gPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlclN2ZycpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMod3JhcHBlckljb24sIGljb24pO1xuICAgIHJldHVybiB3cmFwcGVySWNvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlck5vZGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBmb2xkZXJOb2RlQXNzZW1ibHkoaWQpO1xuICAgIHJldHVybiBmb2xkZXI7XG59XG5cbmNvbnN0IGZvbGRlck5vZGVBc3NlbWJseSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdmb2xkZXInLCBpZCk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYG5hbWU6ICR7aWR9YCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMoZm9sZGVyLCBnZXRXcmFwcGVySWNvbihpZCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgQnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uRm9yQWRkVGFzayB9IGZyb20gXCIuL0J1dHRvbkZvckFkZFRhc2tcIjtcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmV4cG9ydCBjb25zdCB2aWV3RWxlbWVudCA9IChub2RlLCBmbGFnID0gJ2ZvbGRlcicpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgbGV0IGlubmVyVGFza3MgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0SW5uZXJUYXNrcygpO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5vcGVuKG5vZGUsIDAsIDEsIDUwMCwgJ2ZvcndhcmRzJyk7XG5cbiAgICBjb25zdCBmb3JPbGRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShub2RlLCBjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yTmV3RWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGZsYWcgPT09ICd0YXNrJykge1xuICAgICAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICdmb2xkZXInKSB7XG4gICAgICAgICAgICBsZXQgbGFzdE5vZGUgPSBpbm5lclRhc2tzLmxlbmd0aCA+IDAgPyBpbm5lclRhc2tzLmF0KDApLmdldE5vZGUoKSA6IGNvbnRlbnQubGFzdENoaWxkO1xuICAgICAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgbGFzdE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZm9yTmV3RWxlbWVudCwgZm9yT2xkRWxlbWVudCB9O1xufVxuIiwiaW1wb3J0IHsgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyLCBzZXRMaXN0ZW5lcmZGb3JMaW5rIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpbmtzQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saXN0ZW5lcnNcIjtcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiXG5pbXBvcnQgeyBPcGVuZWRGb2xkZXIsIFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgT3BlbmVkVGFzayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdGFza01vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1Jvb3RQYXRoc1RocmVlID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0TGluaygpO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcwLjN2aCAjMzZiYjM2IHNvbGlkJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCBnZXRUZW1wbGF0ZUxpbmtOb2RlID0gKG5hbWUsIG5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlV3JhcHBlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLXdyYXBwZXInKTtcbiAgICBjb25zdCBsaW5rQm9keSA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLWJvZHknKTtcbiAgICBjb25zdCBub2RlTGluayA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYCR7bmFtZX1gLCAnbGluaycpO1xuICAgIGNvbnN0IGRlbCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdkZWxldGUtbGluaycpO1xuICAgIGRlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHMobGlua0JvZHksIG5vZGUsIG5vZGVMaW5rLCBkZWwpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhub2RlV3JhcHBlciwgbGlua0JvZHkpO1xuICAgIGxldCBjb2xvciA9IFRvb2xzLnJhbmRvbV9yZ2JhKCk7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyTGVmdCA9IGAwLjN2aCAke2NvbG9yfSBzb2xpZGA7XG4gICAgbm9kZVdyYXBwZXIuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbiAgICBzZXRCb3JkZXJDb2xvcihub2RlV3JhcHBlcik7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5jb25zdCBzZXRCb3JkZXJDb2xvciA9IChub2RlKSA9PiB7XG4gICAgbGV0IGNvbG9yID0gVG9vbHMucmFuZG9tX3JnYmEoKTtcbiAgICBub2RlLnN0eWxlLmJvcmRlckxlZnQgPSBgMC4zdmggJHtjb2xvcn0gc29saWRgO1xuICAgIG5vZGUuc3R5bGUuYm9yZGVyVG9wID0gYDAuM3ZoICR7Y29sb3J9IHNvbGlkYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbGRlckxpbmtOb2RlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGVtcGxhdGUgPSBnZXRUZW1wbGF0ZUxpbmtOb2RlKGBcXFxcJHtuYW1lfWAsIGZvckZvbGRlcigpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrTGlua05vZGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGdldFRlbXBsYXRlTGlua05vZGUobmFtZSwgZm9yVGFzaygpKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbmNvbnN0IGZvckZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnY2xvc2UtY2x1c3RlcicpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBnZXROb2RlQXJyb3dSaWdodCgpO1xuICAgIGNsb3NlQ2x1c3Rlci5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0KTtcbiAgICByZXR1cm4gY2xvc2VDbHVzdGVyO1xufVxuXG5jb25zdCBmb3JUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tQcmV2aWV3ID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2stcHJldmlldycpO1xuICAgIGNvbnN0IHRhc2tJY29uID0gZ2V0VGFza1N2ZygpO1xuICAgIHRhc2tQcmV2aWV3LmFwcGVuZENoaWxkKHRhc2tJY29uKTtcbiAgICByZXR1cm4gdGFza1ByZXZpZXc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUYXNrU3ZnID0gKCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saW5rLXN2ZycpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5vZGVBcnJvd0Rvd24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1kb3duJykuY2xvbmVOb2RlKHRydWUpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm9kZUFycm93UmlnaHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpLmNsb25lTm9kZSh0cnVlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtDZmcgPSAobGluaywgZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlckNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKGxpbmspO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2x1c3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNsdXN0ZXInKTtcbiAgICByZXR1cm4gY2x1c3Rlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rID0gKGxpbmspID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldENsdXN0ZXIoKTtcbiAgICBsZXQgaW5uZXJUYXNrcyA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRJbm5lclRhc2tzKCk7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ICs9ICcxdmgnO1xuICAgIGlmIChpbm5lclRhc2tzLmxlbmd0aCA+IDAgJiYgbGluay5nZXRUeXBlKCkgPT09ICdmb2xkZXInKSB7XG4gICAgICAgIGxldCBsYXN0Tm9kZSA9IGlubmVyVGFza3MuYXQoMCkuZ2V0TGluaygpLmdldE5vZGUoKTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShsaW5rLmdldE5vZGUoKSwgbGFzdE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgfVxuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5leHBvcnQgY29uc3Qgdmlld0xpbmtPcGVuZWRGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IG9wZW5lZEZvbGRlckxpbmsgPSBPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkuZ2V0TGluaygpLmdldE5vZGUoKTtcbiAgICBvcGVuZWRGb2xkZXJMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlOWY1ZTknO1xuICAgIGZvbGRlci5nZXRMaW5rKCkuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2MGQwZTQnO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIoZm9sZGVyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdMaW5rT3BlbmVkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgbGV0IG9wZW5lZFRhc2sgPSBPcGVuZWRUYXNrLmdldE9wZW5lZFRhc2soKTtcbiAgICBpZiAob3BlbmVkVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBvcGVuZWRUYXNrTGluayA9IE9wZW5lZFRhc2suZ2V0T3BlbmVkVGFzaygpLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgICAgIG9wZW5lZFRhc2tMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5saW5rJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlOWY1ZTknO1xuICAgIH1cbiAgICB0YXNrLmdldExpbmsoKS5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmxpbmsnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTViNic7XG4gICAgT3BlbmVkVGFzay5zZXRPcGVuZWRUYXNrKHRhc2spO1xufVxuXG5jb25zdCBzZXRTdmdGb3JNYWluTGluayA9ICgoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC12aXNpYmxlLXBhdGhzJyk7XG4gICAgY29uc3Qgc3ZnID0gZ2V0Tm9kZUFycm93UmlnaHQoKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnKTtcbn0pKCk7IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFdyYXBwZXJJY29uID0gKCkgPT4ge1xuICAgIGxldCB3cmFwcGVySWNvbiA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdpY29uLXdyYXBwZXInKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0VGFza05vZGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gdGFza05vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5cbmNvbnN0IHRhc2tOb2RlQXNzZW1ibHkgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3Rhc2snLCBpZCk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYG5hbWU6ICR7aWR9YCwgJ25hbWUnKTtcbiAgICBUb29scy5hcHBlbmRDaGlsZHModGFzaywgZ2V0V3JhcHBlckljb24oaWQpLCBuYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=