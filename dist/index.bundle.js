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
    border-left: 0.2vh #36bb36 solid;
    overflow: hidden;
    cursor: pointer;
    width: inherit;
    min-width: 100%;
}

.link-body {
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    border-top: 0.2vh #36bb36 solid;
   
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

}`, "",{"version":3,"sources":["webpack://./src/views/css/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n:root {\n    --font-size-to-folder: 0;\n}\n\nhtml {\n    font-family: Roboto;\n}\n\n.wrapper {\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    max-width: 100%;\n    max-height: 100%;\n}\n\nspan {\n    padding-left: 1vh;\n    padding-right: 1vh;\n    height: min-content;\n    width: min-content;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: min-content min-content;\n    gap: 1vh;\n    height: 7vh;\n    justify-content: center;\n    align-items: center;\n    background-color: #b2d4b2;\n    max-width: inherit;\n}\n\n.chain-folders {\n    display: flex;\n    flex-direction: row;\n    max-width: 70vw;\n    font-size: min(2vh, var(--font-size-to-folder));\n    height: min-content;\n    overflow-x: scroll;\n\n}\n\n.paths-container::-webkit-scrollbar,\n.name::-webkit-scrollbar,\n.folders::-webkit-scrollbar {\n    display: none;\n    scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n    height: min(1vh, 10vw);\n\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #37f037;\n\n}\n\n::-webkit-scrollbar-track {\n    background-color: #b2bad4;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-areas: 'paths folders';\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.paths-container {\n    display: none;\n}\n\n.link-wrapper {\n    display: grid;\n    border-left: 0.2vh #36bb36 solid;\n    overflow: hidden;\n    cursor: pointer;\n    width: inherit;\n    min-width: 100%;\n}\n\n.link-body {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n    border-top: 0.2vh #36bb36 solid;\n   \n}\n\n.link {\n    display: flex;\n    align-items: center;\n}\n\n.delete-link {\n    display: flex;\n    justify-content: end;\n    width: 3vh;\n    height: 100%;\n}\n\n.delete-link :hover {\n    display: flex;\n    justify-content: center;\n    background-color: red;\n}\n\n.close-cluster {\n    display: flex;\n    width: 2vh;\n    height: 100%;\n    z-index: 100;\n}\n\n.close-cluster :hover {\n    background-color: #37f037;\n}\n\n/*.paths {\n    display: flex;\n    width: 2vh;\n    height: 4vh;\n    border: 0.2vh #36bb36 solid;\n    background-color: #d83d71;\n    opacity: 0.5;\n    font-size: 2vh;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.4vh;\n    cursor: pointer;\n}\n\n.paths:hover {\n    opacity: 1;\n}\n\n@keyframes open {\n    from {\n        opacity: 0;\n        width: 0vh;\n    }\n\n    to {\n        opacity: 1;\n        width: 50vh;\n    }\n}*/\n\n.folders {\n    display: grid;\n    grid-area: folders;\n    grid-template-columns: repeat(auto-fit, minmax(50px, 15vh));\n    grid-template-rows: min-content;\n    justify-items: center;\n    align-content: start;\n    align-items: center;\n    max-width: inherit;\n    overflow: scroll;\n    height: 93vh;\n    background-color: #e9f5e9;\n    font-size: var(--font-size-to-folder);\n}\n\n.folder,\n.templateFolder,\n.back {\n    display: grid;\n    grid-template-rows: 1fr min-content;\n    grid-template-areas: 'center';\n    justify-items: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    max-width: inherit;\n    max-height: inherit;\n    cursor: pointer;\n}\n\n.icon-wrapper {\n    grid-area: center;\n    display: grid;\n    justify-content: center;\n    max-width: inherit;\n    max-height: inherit;\n}\n\n.icon-wrapper>svg {\n    display: flex;\n    width: 20vh;\n    max-width: inherit;\n    max-height: inherit;\n    min-width: 50px;\n}\n\n.name {\n    grid-area: center;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    align-content: center;\n    text-align: start;\n    height: min-content;\n    max-width: 60%;\n    max-height: inherit;\n    overflow: scroll;\n}\n\n.templateFolder>.name,\n.chain-folders {\n    user-select: none;\n    /* standard syntax */\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */\n}\n\n.wrapper>.folderSvg {\n    display: none;\n    width: min-content;\n}\n\n.wrapper>.arrow-down {\n    display: none;\n}\n\n.wrapper>.arrow-up {\n    display: none;\n}\n\n.wrapper>.arrow-right {\n    display: none;\n}\n\n.templateFolder:hover {\n    animation-fill-mode: forwards;\n    animation: 15s infinite alternate dash;\n}\n\n@keyframes dash {\n    from {\n        stroke-dashoffset: 0;\n    }\n\n    to {\n        stroke-dashoffset: 100;\n    }\n}\n\n@media screen and (max-aspect-ratio:1/1.0000001) {}\n\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 536px) {\n\n    .paths-container {\n        grid-area: paths;\n        display: grid;\n        grid-template-rows: repeat(auto-fit, min-content);\n        justify-content: start;\n        align-content: start;\n        max-width: 30vw;\n        width: min-content;\n        height: 93vh;\n        max-height: inherit;\n        overflow: scroll;\n        background-color: #e9f5e9;\n    }\n\n    .paths-cluster {\n        display: flex;\n        justify-self: end;\n        width: max-content;\n    }\n\n}"],"sourceRoot":""}]);
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
    createButtons();
    _models_folderModels__WEBPACK_IMPORTED_MODULE_1__.OpenedFolder.setOpenedFolder(rootFolder);
    (0,_linksOfPath__WEBPACK_IMPORTED_MODULE_4__.openCluster)(rootFolder.getLink());
    viewLinkOpenedFolder(rootFolder);
})();

const setButtonsListeners = (() => {
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forButtonToAddFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForAddFolder);
    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forButtonToCloseFolder(_models_folderModels__WEBPACK_IMPORTED_MODULE_1__.ButtonForCloseFolder);
})();

const openFolder = (folder) => {
    clearFoldersContainer();
    createButtons();
    viewFolders(folder.getInnerFolders());
    viewLinkOpenedFolder(folder);
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

    (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.setListeners)().forButtonToDeleteLink(link);
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
            let folder = link.getFolder();
            if (confirm('Вы действительно хотите удалить папку и всё ее содержимое?')) {
                folder.del();
            } else {
            }
        })
    }

    return { forButtonToDeleteLink, forButtonToClusterPaths, forLinkOfMapPaths, forFolder, forButtonToAddFolder, forButtonToCloseFolder }
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

document.querySelector('.folders').appendChild(document.querySelector('.task'));

for (let i = 0; i < 0; i++) {
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
/* harmony import */ var _controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/foldersControllers */ "./src/controllers/foldersControllers.js");






const Folder = (ids, folder = 0) => {
    let id = ids;
    let name;
    let link;
    let count = 0;
    let parent = folder;
    let cluster = (0,_views_nodes_pathsContainers__WEBPACK_IMPORTED_MODULE_3__.createCluster)();
    const node = (0,_views_nodes_folder__WEBPACK_IMPORTED_MODULE_0__.getFolderNode)(id);
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
        (0,_controllers_foldersControllers__WEBPACK_IMPORTED_MODULE_4__.openFolder)(parent);
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

const getLinkNodes = (name) => {
    const nodeWrapper = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'link-wrapper');
    const closeCluster = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'close-cluster');
    const linkBody = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'link-body');
    const arrowRight = getNodeArrowRight();
    const nodeLink = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.getNodeWithSpan('div', `/${name}`, 'link');
    const del = _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.createNode('div', 'delete-link');
    del.appendChild(document.querySelector('.delete').cloneNode(true));
    closeCluster.appendChild(arrowRight);
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.appendChilds(linkBody, closeCluster, nodeLink, del)
    _helper_tools__WEBPACK_IMPORTED_MODULE_2__.Tools.appendChilds(nodeWrapper, linkBody);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sMkZBQTJGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlB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Q1AsZUFBZSw0REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxJQUFJLGdEQUFLO0FBQ1Q7QUFDQTs7QUFFTztBQUNQLHdCQUF3QixnREFBSztBQUM3Qix5QkFBeUIsZ0RBQUs7QUFDOUIscUJBQXFCLGdEQUFLO0FBQzFCO0FBQ0EscUJBQXFCLGdEQUFLLDRCQUE0QixLQUFLO0FBQzNELGdCQUFnQixnREFBSztBQUNyQjtBQUNBO0FBQ0EsSUFBSSxnREFBSztBQUNULElBQUksZ0RBQUs7QUFDVDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EsSUFBSSw2RUFBbUI7QUFDdkI7O0FBRU87QUFDUCxvQkFBb0IsZ0RBQUs7QUFDekI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvY3NzL21haW4uY3NzPzIyYWIiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9jb250cm9sbGVycy9saW5rc09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvY29udHJvbGxlcnMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9oZWxwZXIvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvZm9sZGVyTW9kZWxzLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy9tb2RlbHMvbGlua09mUGF0aC5qcyIsIndlYnBhY2s6Ly90b2RvLW1hbmFnZXIvLi9zcmMvdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9CdXR0b25Gb3JBZGRGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL0J1dHRvbkZvckNsb3NlRm9sZGVyLmpzIiwid2VicGFjazovL3RvZG8tbWFuYWdlci8uL3NyYy92aWV3cy9ub2Rlcy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL2ZvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1tYW5hZ2VyLy4vc3JjL3ZpZXdzL25vZGVzL3BhdGhzQ29udGFpbmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcbiAgICBnYXA6IDF2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmQ0YjI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uY2hhaW4tZm9sZGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBmb250LXNpemU6IG1pbigydmgsIHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpKTtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcblxufVxuXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcbi5uYW1lOjotd2Via2l0LXNjcm9sbGJhcixcbi5mb2xkZXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogbWluKDF2aCwgMTB2dyk7XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3ZjAzNztcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5wYXRocy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5saW5rLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLWxlZnQ6IDAuMnZoICMzNmJiMzYgc29saWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubGluay1ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xuICAgIGJvcmRlci10b3A6IDAuMnZoICMzNmJiMzYgc29saWQ7XG4gICBcbn1cblxuLmxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHdpZHRoOiAzdmg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVsZXRlLWxpbmsgOmhvdmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNsb3NlLWNsdXN0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDJ2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uY2xvc2UtY2x1c3RlciA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XG59XG5cbi8qLnBhdGhzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAydmg7XG4gICAgaGVpZ2h0OiA0dmg7XG4gICAgYm9yZGVyOiAwLjJ2aCAjMzZiYjM2IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODNkNzE7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZvbnQtc2l6ZTogMnZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC40dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGF0aHM6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgb3BlbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHdpZHRoOiAwdmg7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDogNTB2aDtcbiAgICB9XG59Ki9cblxuLmZvbGRlcnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBmb2xkZXJzO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA5M3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY1ZTk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdG8tZm9sZGVyKTtcbn1cblxuLmZvbGRlcixcbi50ZW1wbGF0ZUZvbGRlcixcbi5iYWNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjZW50ZXInO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pY29uLXdyYXBwZXI+c3ZnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm5hbWUge1xuICAgIGdyaWQtYXJlYTogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnRlbXBsYXRlRm9sZGVyPi5uYW1lLFxuLmNoYWluLWZvbGRlcnMge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIHN0YW5kYXJkIHN5bnRheCAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChzYWZhcmksIGNocm9tZSkgYnJvd3NlcnMgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogd2Via2l0IChrb25xdWVyb3IpIGJyb3dzZXJzICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIElFMTArICovXG59XG5cbi53cmFwcGVyPi5mb2xkZXJTdmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndyYXBwZXI+LmFycm93LXVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ud3JhcHBlcj4uYXJyb3ctcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiAxNXMgaW5maW5pdGUgYWx0ZXJuYXRlIGRhc2g7XG59XG5cbkBrZXlmcmFtZXMgZGFzaCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMS8xKSBhbmQgKG1pbi13aWR0aDogNTM2cHgpIHtcblxuICAgIC5wYXRocy1jb250YWluZXIge1xuICAgICAgICBncmlkLWFyZWE6IHBhdGhzO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWluLWNvbnRlbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogOTN2aDtcbiAgICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcbiAgICB9XG5cbiAgICAucGF0aHMtY2x1c3RlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxVQUFVO0lBQ1YsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxRQUFRO0lBQ1Is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Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZS10by1mb2xkZXI6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbnNwYW4ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2aDtcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDF2aDtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNGIyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5jaGFpbi1mb2xkZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgICBmb250LXNpemU6IG1pbigydmgsIHZhcigtLWZvbnQtc2l6ZS10by1mb2xkZXIpKTtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcbn1cXG5cXG4ucGF0aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcixcXG4ubmFtZTo6LXdlYmtpdC1zY3JvbGxiYXIsXFxuLmZvbGRlcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgaGVpZ2h0OiBtaW4oMXZoLCAxMHZ3KTtcXG5cXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxuXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiYWQ0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncGF0aHMgZm9sZGVycyc7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLnBhdGhzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItbGVmdDogMC4ydmggIzM2YmIzNiBzb2xpZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGluay1ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XFxuICAgIGJvcmRlci10b3A6IDAuMnZoICMzNmJiMzYgc29saWQ7XFxuICAgXFxufVxcblxcbi5saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1saW5rIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS1saW5rIDpob3ZlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jbG9zZS1jbHVzdGVyIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzN2YwMzc7XFxufVxcblxcbi8qLnBhdGhzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDJ2aDtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGJvcmRlcjogMC4ydmggIzM2YmIzNiBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4M2Q3MTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBmb250LXNpemU6IDJ2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHZoO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wYXRoczpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgb3BlbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHdpZHRoOiAwdmg7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiA1MHZoO1xcbiAgICB9XFxufSovXFxuXFxuLmZvbGRlcnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IGZvbGRlcnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTV2aCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGhlaWdodDogOTN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdG8tZm9sZGVyKTtcXG59XFxuXFxuLmZvbGRlcixcXG4udGVtcGxhdGVGb2xkZXIsXFxuLmJhY2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NlbnRlcic7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLXdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogaW5oZXJpdDtcXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmljb24td3JhcHBlcj5zdmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjB2aDtcXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtaW4td2lkdGg6IDUwcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udGVtcGxhdGVGb2xkZXI+Lm5hbWUsXFxuLmNoYWluLWZvbGRlcnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogc3RhbmRhcmQgc3ludGF4ICovXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJRTEwKyAqL1xcbn1cXG5cXG4ud3JhcHBlcj4uZm9sZGVyU3ZnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ud3JhcHBlcj4uYXJyb3ctZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy11cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyPi5hcnJvdy1yaWdodCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50ZW1wbGF0ZUZvbGRlcjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb246IDE1cyBpbmZpbml0ZSBhbHRlcm5hdGUgZGFzaDtcXG59XFxuXFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOjEvMS4wMDAwMDAxKSB7fVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAxLzEpIGFuZCAobWluLXdpZHRoOiA1MzZweCkge1xcblxcbiAgICAucGF0aHMtY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogcGF0aHM7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbi1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gICAgICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgICAgIGhlaWdodDogOTN2aDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVlOTtcXG4gICAgfVxcblxcbiAgICAucGF0aHMtY2x1c3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi9oZWxwZXIvdG9vbHNcIjtcbmltcG9ydCB7IEJ1dHRvbkZvckFkZEZvbGRlciwgQnV0dG9uRm9yQ2xvc2VGb2xkZXIsIEZvbGRlciwgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSBcIi4uL21vZGVscy9mb2xkZXJNb2RlbHNcIjtcbmltcG9ydCB7IENsdXN0ZXJMaW5rIH0gZnJvbSBcIi4uL21vZGVscy9saW5rT2ZQYXRoXCI7XG5pbXBvcnQgeyB2aWV3Rm9sZGVyIH0gZnJvbSBcIi4uL3ZpZXdzL25vZGVzL2ZvbGRlcnNcIjtcbmltcG9ydCB7IG9wZW5DbHVzdGVyLCBzZXRMaXN0ZW5lcmZGb3JMaW5rIH0gZnJvbSBcIi4vbGlua3NPZlBhdGhcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5jb25zdCBjcmVhdGVCdXR0b25zID0gKCkgPT4ge1xuICAgIGNyZWF0ZUJ1dHRvblRvQWRkRm9sZGVyKCk7XG4gICAgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlcigpO1xufVxuXG5jb25zdCBjcmVhdGVCdXR0b25Ub0FkZEZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3Rm9sZGVyKEJ1dHRvbkZvckFkZEZvbGRlci5nZXROb2RlKCksICdhZGQnKTtcbn1cblxuY29uc3QgY3JlYXRlQnV0dG9uVG9DbG9zZUZvbGRlciA9ICgpID0+IHtcbiAgICB2aWV3Rm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyLmdldE5vZGUoKSwgJ2Nsb3NlJyk7XG59XG5cbmNvbnN0IHZpZXdMaW5rT3BlbmVkRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGxldCBvcGVuZWRGb2xkZXJMaW5rID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldExpbmsoKS5nZXROb2RlKCk7XG4gICAgb3BlbmVkRm9sZGVyTGluay5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTlmNWU5JztcbiAgICBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNjBkMGU0JztcbiAgICBPcGVuZWRGb2xkZXIuc2V0T3BlbmVkRm9sZGVyKGZvbGRlcik7XG59XG5cbmNvbnN0IHN0YXJ0Q29uZmlnID0gKCgpID0+IHtcbiAgICBsZXQgcm9vdEZvbGRlciA9IFJvb3RGb2xkZXIuZ2V0Um9vdEZvbGRlcigpO1xuICAgIHJvb3RGb2xkZXIuc2V0UGFyZW50KHJvb3RGb2xkZXIpO1xuICAgIHJvb3RGb2xkZXIuc2V0TGluayhDbHVzdGVyTGluayhyb290Rm9sZGVyKSk7XG4gICAgY3JlYXRlQnV0dG9ucygpO1xuICAgIE9wZW5lZEZvbGRlci5zZXRPcGVuZWRGb2xkZXIocm9vdEZvbGRlcik7XG4gICAgb3BlbkNsdXN0ZXIocm9vdEZvbGRlci5nZXRMaW5rKCkpO1xuICAgIHZpZXdMaW5rT3BlbmVkRm9sZGVyKHJvb3RGb2xkZXIpO1xufSkoKTtcblxuY29uc3Qgc2V0QnV0dG9uc0xpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgc2V0TGlzdGVuZXJzKCkuZm9yQnV0dG9uVG9BZGRGb2xkZXIoQnV0dG9uRm9yQWRkRm9sZGVyKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0Nsb3NlRm9sZGVyKEJ1dHRvbkZvckNsb3NlRm9sZGVyKTtcbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBvcGVuRm9sZGVyID0gKGZvbGRlcikgPT4ge1xuICAgIGNsZWFyRm9sZGVyc0NvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUJ1dHRvbnMoKTtcbiAgICB2aWV3Rm9sZGVycyhmb2xkZXIuZ2V0SW5uZXJGb2xkZXJzKCkpO1xuICAgIHZpZXdMaW5rT3BlbmVkRm9sZGVyKGZvbGRlcik7XG4gICAgb3BlbkNsdXN0ZXJXaGVuQWRkaW5nRm9sZGVyKE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSk7XG59XG5cbmNvbnN0IGNsZWFyRm9sZGVyc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICBsZXQgZm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJyk7XG4gICAgVG9vbHMucmVtb3ZlQ2hpbGRzKGZvbGRlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVyID0gKGZvbGRlciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKSkgPT4ge1xuICAgIGxldCBuZXdGb2xkZXIgPSBmb2xkZXIuYWRkRm9sZGVyKGZvbGRlcik7XG4gICAgdmlld0ZvbGRlcihuZXdGb2xkZXIuZ2V0Tm9kZSgpKTtcbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JGb2xkZXIobmV3Rm9sZGVyKTtcbiAgICB2aWV3UGF0aHNUcmVlKG5ld0ZvbGRlcik7XG59XG5cblxuY29uc3Qgdmlld0ZvbGRlcnMgPSAoZm9sZGVycykgPT4ge1xuICAgIGZvciAobGV0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBmb2xkZXIuZ2V0Tm9kZSgpO1xuICAgICAgICB2aWV3Rm9sZGVyKG5vZGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlc2l6ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZUZvbGRlcicpO1xuICAgIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGUgPT4ge1xuICAgICAgICBzZXRGb250U2l6ZVRvRm9sZGVycyh0ZW1wbGF0ZSk7XG4gICAgfSlcblxuICAgIHJvLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyJykpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udFNpemVUb0ZvbGRlcnMgPSAodGVtcGxhdGUpID0+IHtcbiAgICBUb29scy5yZWxhdGl2ZUZvbnQodGVtcGxhdGUsICctLWZvbnQtc2l6ZS10by1mb2xkZXInKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpZXdQYXRoc1RyZWUgPSAobmV3Rm9sZGVyKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IE9wZW5lZEZvbGRlci5nZXRPcGVuZWRGb2xkZXIoKS5nZXRDbHVzdGVyKCk7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ICs9ICcxdmgnO1xuICAgIGNvbnN0IGxpbmsgPSBDbHVzdGVyTGluayhuZXdGb2xkZXIpO1xuICAgIGxpbmsuZ2V0Q2x1c3RlcigpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGluay5nZXROb2RlKCkuYXBwZW5kQ2hpbGQobGluay5nZXRDbHVzdGVyKCkpO1xuICAgIHNldExpc3RlbmVyZkZvckxpbmsobGluayk7XG5cbiAgICBzZXRMaXN0ZW5lcnMoKS5mb3JCdXR0b25Ub0RlbGV0ZUxpbmsobGluayk7XG4gICAgbmV3Rm9sZGVyLnNldExpbmsobGluayk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKVxuICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihPcGVuZWRGb2xkZXIuZ2V0T3BlbmVkRm9sZGVyKCkpO1xufVxuXG5jb25zdCBvcGVuQ2x1c3RlcldoZW5BZGRpbmdGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgbGV0IGNsdXN0ZXIgPSBmb2xkZXIuZ2V0Q2x1c3RlcigpO1xuICAgIGxldCBidXR0b24gPSBmb2xkZXIuZ2V0TGluaygpLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIGlmIChmb2xkZXIuZ2V0SWQoKSAhPT0gMCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShjbHVzdGVyKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5DbHVzdGVyV2hlbkFkZGluZ0ZvbGRlcihmb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgIH0gZWxzZSBpZiAoZm9sZGVyLmdldElkKCkgPT09IDApIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY2x1c3RlcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IChmb2xkZXJzKSA9PiB7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgbGV0IGlGb2xkZXJzID0gZm9sZGVyLmdldElubmVyRm9sZGVycygpO1xuICAgICAgICBpZiAoaUZvbGRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZm9sZGVyLmdldElkKCkpO1xuICAgICAgICAgICAgaGFuZGxlcihpRm9sZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXIuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vaGVscGVyL3Rvb2xzXCI7XG5pbXBvcnQgeyBnZXROb2RlQXJyb3dEb3duLCBnZXROb2RlQXJyb3dSaWdodCB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IHNldExpc3RlbmVycyB9IGZyb20gXCIuL2xpc3RlbmVyc1wiO1xuXG5leHBvcnQgY29uc3QgY2xvc2VDbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd1JpZ2h0KCkpO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5jbG9zZShjbHVzdGVyLCAxLCAwLCAyMDAsICdmb3J3YXJkcycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjbHVzdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMjAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5DbHVzdGVyID0gKGxpbmspID0+IHtcbiAgICBsZXQgY2x1c3RlciA9IGxpbmsuZ2V0Q2x1c3RlcigpO1xuICAgIHN3aXRjaENsb3NlQnV0dG9uU3ZnKGxpbmssIGdldE5vZGVBcnJvd0Rvd24oKSk7XG4gICAgY2x1c3Rlci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIFRvb2xzLnNtb290aFZpc2liaWxpdHkoKS5vcGVuKGNsdXN0ZXIsIDAsIDEsIDIwMCwgJ2ZvcndhcmRzJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRMaXN0ZW5lcmZGb3JMaW5rID0gKGxpbmspID0+IHtcbiAgICBjb25zdCBjbHVzdGVyQ2xvc2UgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY2x1c3RlcicpO1xuICAgIHNldExpc3RlbmVycygpLmZvckxpbmtPZk1hcFBhdGhzKGxpbmspO1xuICAgIHNldExpc3RlbmVycygpLmZvckJ1dHRvblRvQ2x1c3RlclBhdGhzKGNsdXN0ZXJDbG9zZSwgbGluayk7XG59XG5cbmNvbnN0IHN3aXRjaENsb3NlQnV0dG9uU3ZnID0gKGxpbmssIGNoaWxkKSA9PiB7XG4gICAgbGV0IGNsb3NlID0gbGluay5nZXROb2RlKCkucXVlcnlTZWxlY3RvcignLmNsb3NlLWNsdXN0ZXInKTtcbiAgICBUb29scy5yZW1vdmVDaGlsZHMoY2xvc2UpO1xuICAgIGNsb3NlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn0iLCJpbXBvcnQgeyBPcGVuZWRGb2xkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9sZGVyLCBvcGVuRm9sZGVyIH0gZnJvbSBcIi4vZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5pbXBvcnQgeyBjbG9zZUNsdXN0ZXIsIG9wZW5DbHVzdGVyIH0gZnJvbSBcIi4vbGlua3NPZlBhdGhcIjtcblxuZXhwb3J0IGNvbnN0IHNldExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JGb2xkZXIgPSAoY3VycmVudEZvbGRlcikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGN1cnJlbnRGb2xkZXIuZ2V0Tm9kZSgpO1xuICAgICAgICBjb25zdCBjbGlja0ZvbGRlciA9IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIG9wZW5Gb2xkZXIoY3VycmVudEZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQWRkRm9sZGVyID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBsZXQgbm9kZSA9IGJ1dHRvbi5nZXROb2RlKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY3JlYXRlRm9sZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gYnV0dG9uLmdldE5vZGUoKTtcbiAgICAgICAgY29uc3QgY2xpY2tCdXR0b24gPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgb3BlbmVkRm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpO1xuICAgICAgICAgICAgb3BlbkZvbGRlcihvcGVuZWRGb2xkZXIuZ2V0UGFyZW50KCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JMaW5rT2ZNYXBQYXRocyA9IChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBjb2xvcjtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcubGluaycpO1xuICAgICAgICBjb25zdCBjbGlja05vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb3BlbkZvbGRlcihsaW5rLmdldEZvbGRlcigpKTtcbiAgICAgICAgICAgIGNvbG9yID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU92ZXJOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb2xvciA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzljZmQ5Yyc7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb3VzZU91dE5vZGUgPSBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9DbHVzdGVyUGF0aHMgPSAobm9kZSwgbGluaykgPT4ge1xuICAgICAgICBsZXQgZmxhZztcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZmxhZyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobGluay5nZXRDbHVzdGVyKCkpLmRpc3BsYXk7XG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgb3BlbkNsdXN0ZXIobGluayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsb3NlQ2x1c3RlcihsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IGNsb3NlIH07XG4gICAgfVxuXG4gICAgY29uc3QgZm9yQnV0dG9uVG9EZWxldGVMaW5rID0gKGxpbmspID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBsaW5rLmdldE5vZGUoKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKTtcbiAgICAgICAgY29uc3QgY2xpY2tOb2RlID0gbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IGZvbGRlciA9IGxpbmsuZ2V0Rm9sZGVyKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0L/QsNC/0LrRgyDQuCDQstGB0ZEg0LXQtSDRgdC+0LTQtdGA0LbQuNC80L7QtT8nKSkge1xuICAgICAgICAgICAgICAgIGZvbGRlci5kZWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZm9yQnV0dG9uVG9EZWxldGVMaW5rLCBmb3JCdXR0b25Ub0NsdXN0ZXJQYXRocywgZm9yTGlua09mTWFwUGF0aHMsIGZvckZvbGRlciwgZm9yQnV0dG9uVG9BZGRGb2xkZXIsIGZvckJ1dHRvblRvQ2xvc2VGb2xkZXIgfVxufSIsImltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vdmlld3MvYW5pbWF0aW9ucy9hbmltYXRpb25zXCI7XG5cbmNvbnN0IFRvb2xzID0gKCgpID0+IHtcbiAgICBjb25zdCBnZXROb2RlV2l0aFNwYW4gPSAobm9kZU5hbWUsIHRleHQsIC4uLmNsYXNzTmFtZXMpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBjcmVhdGVOb2RlKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKTtcbiAgICAgICAgcmV0dXJuIHNldFVwU3Bhbihub2RlLCB0ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOb2RlID0gKG5vZGVOYW1lLCAuLi5jbGFzc05hbWVzKSA9PiB7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgICAgIGFkZENsYXNzZXMobm9kZSwgLi4uY2xhc3NOYW1lcyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZENsYXNzZXMgPSAobm9kZSwgLi4uY2xhc3NlcykgPT4ge1xuICAgICAgICBmb3IgKGxldCBjdXJDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY3VyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VXBTcGFuID0gKG5vZGUsIHRleHQpID0+IHtcbiAgICAgICAgbGV0IHNwYW4gPSBjcmVhdGVOb2RlKCdzcGFuJyk7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRDaGlsZHMgPSAobm9kZSwgLi4uY2hpbGRzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcykge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRBdHRyaWJ1dGVzID0gKGUsIGF0cnMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgYXRyIG9mIGF0cnMpIHtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ci5uYW1lLCBhdHIudmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkcyA9IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHNBZnRlciA9IChub2RlLCBjaGlsZCkgPT4ge1xuICAgICAgICB3aGlsZSAobm9kZS5sYXN0Q2hpbGQgIT0gY2hpbGQpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU1vZGUgPSAobW9kZSwgLi4ubm9kZXMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gbW9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNtb290aFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCkuZmluaXNoZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcGVuID0gKGUsIG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHJldHVybiBBbmltYXRpb25zLm9wYWNpdHkoZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc21vb3RoVmlzaWJpbGl0eUdyb3VwID0gKC4uLm5vZGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKG9wMSwgb3AyLCBkdXIsIGZpbGwpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgICAgICBzbW9vdGhWaXNpYmlsaXR5KCkuY2xvc2Uobm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlbiA9IChvcDEsIG9wMiwgZHVyLCBmaWxsKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgc21vb3RoVmlzaWJpbGl0eSgpLm9wZW4obm9kZSwgb3AxLCBvcDIsIGR1ciwgZmlsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb3BlbiwgY2xvc2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCByZ2JhMmhleCA9IChyZ2JhKSA9PiBgIyR7cmdiYS5tYXRjaCgvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCtcXC57MCwxfVxcZCopKT9cXCkkLykuc2xpY2UoMSkubWFwKChuLCBpKSA9PiAoaSA9PT0gMyA/IE1hdGgucm91bmQocGFyc2VGbG9hdChuKSAqIDI1NSkgOiBwYXJzZUZsb2F0KG4pKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKS5yZXBsYWNlKCdOYU4nLCAnJykpLmpvaW4oJycpfWBcblxuICAgIGNvbnN0IHJlbGF0aXZlRm9udCA9IChub2RlT2ZSZWxhdGl2aXR5LCBjc3NWYXIpID0+IHtcbiAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICBsZXQgZm9sZGVySGVpZ2h0ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlT2ZSZWxhdGl2aXR5KS53aWR0aDtcbiAgICAgICAgbGV0IHNpemUgPSBwYXJzZUZsb2F0KGZvbGRlckhlaWdodC5yZXBsYWNlKCdweCcsICcnKSkgLyA2O1xuICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KGNzc1ZhciwgYCR7c2l6ZX1weGApO1xuICAgIH1cblxuICAgIHZhciBnZXRTaWJsaW5ncyA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cbiAgICAgICAgLy8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xuICAgICAgICB2YXIgc2libGluZ3MgPSBbXTtcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICAgICAgICB3aGlsZSAoc2libGluZykge1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJhbmRvbV9yZ2JhKCkge1xuICAgICAgICB2YXIgbyA9IE1hdGgucm91bmQsIHIgPSBNYXRoLnJhbmRvbSwgcyA9IDI1NTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyBvKHIoKSAqIHMpICsgJywnICsgbyhyKCkgKiBzKSArICcsJyArIG8ocigpICogcykgKyAnLCcgKyAnMC40JyArICcpJztcbiAgICB9XG5cbiAgICByZXR1cm4geyByYW5kb21fcmdiYSwgZ2V0U2libGluZ3MsIHJlbGF0aXZlRm9udCwgcmVtb3ZlQ2hpbGRzQWZ0ZXIsIGRpc3BsYXlNb2RlLCBzbW9vdGhWaXNpYmlsaXR5R3JvdXAsIHNtb290aFZpc2liaWxpdHksIHJnYmEyaGV4LCBnZXROb2RlV2l0aFNwYW4sIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZU5vZGUsIGFwcGVuZENoaWxkcywgc2V0VXBTcGFuLCByZW1vdmVDaGlsZHMsIGFkZENsYXNzZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRvb2xzIH0iLCJpbXBvcnQgeyBjcmVhdGVGb2xkZXIsIG9wZW5Gb2xkZXIsIHNldFJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzJ1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gJy4vY29udHJvbGxlcnMvbGlua3NPZlBhdGgnO1xuaW1wb3J0IHsgT3BlbmVkRm9sZGVyLCBSb290Rm9sZGVyIH0gZnJvbSAnLi9tb2RlbHMvZm9sZGVyTW9kZWxzJztcbmltcG9ydCAnLi92aWV3cy9jc3MvbWFpbi5jc3MnXG5pbXBvcnQgeyB2aWV3Um9vdFBhdGhzVGhyZWUgfSBmcm9tICcuL3ZpZXdzL25vZGVzL3BhdGhzQ29udGFpbmVycyc7XG5cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvb3RGb2xkZXIgPSBSb290Rm9sZGVyLmdldFJvb3RGb2xkZXIoKTtcbiAgICBzZXRMaXN0ZW5lcmZGb3JMaW5rKHJvb3RGb2xkZXIuZ2V0TGluaygpKTtcbiAgICBzZXRSZXNpemVPYnNlcnZlcnMoKTtcbiAgICB2aWV3Um9vdFBhdGhzVGhyZWUoKTtcbn1cblxuc3RhcnQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAwOyBpKyspIHtcbiAgICBjcmVhdGVGb2xkZXIoKTtcbiAgICBsZXQgZm9sZGVyID0gT3BlbmVkRm9sZGVyLmdldE9wZW5lZEZvbGRlcigpLmdldElubmVyRm9sZGVycygpWzBdO1xuICAgIG9wZW5Gb2xkZXIoZm9sZGVyKVxufSIsImltcG9ydCB7IGdldEZvbGRlck5vZGUgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvZm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JBZGRGb2xkZXIgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvQnV0dG9uRm9yQWRkRm9sZGVyXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9CdXR0b25Gb3JDbG9zZUZvbGRlclwiO1xuaW1wb3J0IHsgY3JlYXRlQ2x1c3RlciB9IGZyb20gXCIuLi92aWV3cy9ub2Rlcy9wYXRoc0NvbnRhaW5lcnNcIjtcbmltcG9ydCB7IG9wZW5Gb2xkZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvZm9sZGVyc0NvbnRyb2xsZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBGb2xkZXIgPSAoaWRzLCBmb2xkZXIgPSAwKSA9PiB7XG4gICAgbGV0IGlkID0gaWRzO1xuICAgIGxldCBuYW1lO1xuICAgIGxldCBsaW5rO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHBhcmVudCA9IGZvbGRlcjtcbiAgICBsZXQgY2x1c3RlciA9IGNyZWF0ZUNsdXN0ZXIoKTtcbiAgICBjb25zdCBub2RlID0gZ2V0Rm9sZGVyTm9kZShpZCk7XG4gICAgbGV0IGlubmVyRm9sZGVycyA9IFtdXG5cbiAgICBjb25zdCBhZGRGb2xkZXIgPSAoZm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0lkID0gYCR7aWR9XyR7Y291bnR9YDtcbiAgICAgICAgKytjb3VudDtcbiAgICAgICAgbGV0IG5ld0ZvbGRlciA9IEZvbGRlcihuZXdJZCwgZm9sZGVyKTtcbiAgICAgICAgaW5uZXJGb2xkZXJzLnB1c2gobmV3Rm9sZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ld0ZvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSBwYXJlbnQuZ2V0SW5uZXJGb2xkZXJzKCkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlciAhPT0gbGluay5nZXRGb2xkZXIoKSk7XG4gICAgICAgIHNldElubmVyRm9sZGVycyhbXSk7XG4gICAgICAgIHBhcmVudC5nZXRDbHVzdGVyKCkucmVtb3ZlQ2hpbGQobGluay5nZXROb2RlKCkpO1xuICAgICAgICBwYXJlbnQuc2V0SW5uZXJGb2xkZXJzKGZpbHRlcik7XG4gICAgICAgIG9wZW5Gb2xkZXIocGFyZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRJbm5lckZvbGRlcnMgPSAoYXJyKSA9PiB7XG4gICAgICAgIGlubmVyRm9sZGVycyA9IGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGNvbnN0IGdldElubmVyRm9sZGVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyRm9sZGVycztcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQYXJlbnQgPSAobmV3UGFyZW50KSA9PiB7XG4gICAgICAgIHBhcmVudCA9IG5ld1BhcmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0TmFtZSA9ICh2YWwpID0+IHtcbiAgICAgICAgbmFtZSA9IHZhbDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRMaW5rID0gKG5vZGUpID0+IHtcbiAgICAgICAgbGluayA9IG5vZGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpbms7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2x1c3RlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNsdXN0ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0SW5uZXJGb2xkZXJzLCBnZXRDbHVzdGVyLCBnZXRMaW5rLCBzZXRMaW5rLCBzZXRQYXJlbnQsIGdldFBhcmVudCwgYWRkRm9sZGVyLCBkZWwsIGdldE5vZGUsIGdldElubmVyRm9sZGVycywgZ2V0SWQsIHNldE5hbWUsIGdldE5hbWUgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFJvb3RGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCByb290Rm9sZGVyID0gRm9sZGVyKDApO1xuICAgIGNvbnN0IGdldFJvb3RGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByb290Rm9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4geyBnZXRSb290Rm9sZGVyIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgT3BlbmVkRm9sZGVyID0gKCgpID0+IHtcbiAgICBsZXQgb3BlbmVkRm9sZGVyO1xuICAgIGNvbnN0IHNldE9wZW5lZEZvbGRlciA9IChmb2xkZXIpID0+IHtcbiAgICAgICAgb3BlbmVkRm9sZGVyID0gZm9sZGVyO1xuICAgIH1cbiAgICBjb25zdCBnZXRPcGVuZWRGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuZWRGb2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB7IHNldE9wZW5lZEZvbGRlciwgZ2V0T3BlbmVkRm9sZGVyIH1cbn0pKCk7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Gb3JBZGRGb2xkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBnZXRCdXR0b25Gb3JBZGRGb2xkZXIoKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZvckNsb3NlRm9sZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0QnV0dG9uRm9yQ2xvc2VGb2xkZXIoKTtcbiAgICBjb25zdCBnZXROb2RlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0Tm9kZSB9O1xufSkoKTsiLCJpbXBvcnQgeyBnZXRMaW5rTm9kZXMgfSBmcm9tIFwiLi4vdmlld3Mvbm9kZXMvcGF0aHNDb250YWluZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gKGlGb2xkZXIpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gaUZvbGRlcjtcbiAgICBsZXQgbmFtZSA9IGZvbGRlci5nZXRJZCgpO1xuICAgIGxldCBub2RlID0gZ2V0TGlua05vZGVzKG5hbWUpO1xuXG4gICAgY29uc3QgZ2V0Rm9sZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm9sZGVyO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldE5vZGUsIGdldE5hbWUsIGdldEZvbGRlciB9O1xufVxuXG5leHBvcnQgY29uc3QgQ2x1c3RlckxpbmsgPSAoaUZvbGRlcikgPT4ge1xuICAgIGxldCBwcm90b3R5cGUgPSBMaW5rKGlGb2xkZXIpO1xuICAgIGxldCBjbHVzdGVyID0gaUZvbGRlci5nZXRDbHVzdGVyKCk7XG5cbiAgICBjb25zdCBnZXRDbHVzdGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2x1c3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG90eXBlLCB7IGdldENsdXN0ZXIgfSk7XG59XG5cbmNvbnN0IFBhdGggPSAoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGZvbGRlci5nZXRJZCgpO1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbn0iLCJleHBvcnQgY29uc3QgQW5pbWF0aW9ucyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChlLCB4MCwgeDEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBsZWZ0OiBgJHt4MH1gIH0sIHsgbGVmdDogYCR7eDF9YCB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeSA9IChlLCB5MCwgeTEsIGR1ciwgZmlsbCA9ICdub25lJykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyB0b3A6IGAke3kwfWAgfSwgeyB0b3A6IGAke3kxfWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IChlLCByb3RhdGUxLCByb3RhdGUyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlMX1kZWcpYCB9LCB7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZTJ9ZGVnKWAgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHgsIHksIHJvdGF0ZSB9O1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gKGUsIGNvbG9yMSwgY29sb3IyLCBkdXIsIGZpbGwgPSAnbm9uZScpID0+IHtcbiAgICAgICAgcmV0dXJuIGUuYW5pbWF0ZShbeyBiYWNrZ3JvdW5kOiBjb2xvcjEgfSwgeyBiYWNrZ3JvdW5kOiBjb2xvcjIgfV0sIHsgZHVyYXRpb246IGR1ciwgZmlsbDogZmlsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGFjaXR5ID0gKGUsIG9wYWNpdHkxLCBvcGFjaXR5MiwgZHVyLCBmaWxsID0gJ25vbmUnKSA9PiB7XG4gICAgICAgIHJldHVybiBlLmFuaW1hdGUoW3sgb3BhY2l0eTogb3BhY2l0eTEgfSwgeyBvcGFjaXR5OiBvcGFjaXR5MiB9XSwgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbSA9IChlLCBkdXIsIGZpbGwgPSAnbm9uZScsIC4uLmtleUZyYW1lcykgPT4ge1xuICAgICAgICByZXR1cm4gZS5hbmltYXRlKC4uLmtleUZyYW1lcywgeyBkdXJhdGlvbjogZHVyLCBmaWxsOiBmaWxsIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRyYW5zZm9ybSwgYmFja2dyb3VuZCwgb3BhY2l0eSwgY3VzdG9tIH07XG59KSgpOyIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRTdmdJbldyYXBwZXIgPSAoKSA9PiB7XG4gICAgbGV0IHdyYXBwZXJJY29uID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ljb24td3JhcHBlcicpO1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlRm9sZGVyU3ZnJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKHdyYXBwZXJJY29uLCBpY29uKTtcbiAgICByZXR1cm4gd3JhcHBlckljb247XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldEJ1dHRvbkZvckFkZEZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkoKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufVxuXG5jb25zdCBidXR0b25Gb3JBZGROb2RlQXNzZW1ibHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3RlbXBsYXRlRm9sZGVyJyk7XG4gICAgY29uc3QgbmFtZSA9IFRvb2xzLmdldE5vZGVXaXRoU3BhbignZGl2JywgYEFkZC4uLmAsICduYW1lJyk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGZvbGRlciwgZ2V0U3ZnSW5XcmFwcGVyKCksIG5hbWUpO1xuICAgIHJldHVybiBmb2xkZXI7XG59IiwiaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCI7XG5cbmNvbnN0IGdldFN2Z0luV3JhcHBlciA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctbGVmdCcpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRCdXR0b25Gb3JDbG9zZUZvbGRlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBidXR0b25Gb3JDbG9zZUZvbGRlckFzc2VtYmx5KCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgYnV0dG9uRm9yQ2xvc2VGb2xkZXJBc3NlbWJseSA9ICgpID0+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnYmFjaycpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhmb2xkZXIsIGdldFN2Z0luV3JhcHBlcigpKTtcbiAgICByZXR1cm4gZm9sZGVyO1xufSIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uL2hlbHBlci90b29sc1wiO1xuXG5jb25zdCBnZXRXcmFwcGVySWNvbiA9ICgpID0+IHtcbiAgICBsZXQgd3JhcHBlckljb24gPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnaWNvbi13cmFwcGVyJyk7XG4gICAgbGV0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyU3ZnJykuY2xvbmVOb2RlKHRydWUpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyh3cmFwcGVySWNvbiwgaWNvbik7XG4gICAgcmV0dXJuIHdyYXBwZXJJY29uO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGVyTm9kZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlck5vZGVBc3NlbWJseShpZCk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn1cblxuY29uc3QgZm9sZGVyTm9kZUFzc2VtYmx5ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgZm9sZGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2ZvbGRlcicsIGlkKTtcbiAgICBjb25zdCBuYW1lID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgbmFtZTogJHtpZH1gLCAnbmFtZScpO1xuICAgIFRvb2xzLmFwcGVuZENoaWxkcyhmb2xkZXIsIGdldFdyYXBwZXJJY29uKGlkKSwgbmFtZSk7XG4gICAgcmV0dXJuIGZvbGRlcjtcbn0iLCJpbXBvcnQgeyBUb29scyB9IGZyb20gXCIuLi8uLi9oZWxwZXIvdG9vbHNcIjtcblxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG5cbmV4cG9ydCBjb25zdCB2aWV3Rm9sZGVyID0gKG5vZGUsIGZsYWcgPSAnZm9sZGVyJykgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKTtcbiAgICBUb29scy5zbW9vdGhWaXNpYmlsaXR5KCkub3Blbihub2RlLCAwLCAxLCA1MDAsICdmb3J3YXJkcycpO1xuICAgIGlmIChmbGFnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIGlmICgndGFzaycpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2ZvbGRlcicpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH0gZWxzZSBpZiAoJ2FkZCcpIHtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUobm9kZSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0TGlzdGVuZXJmRm9yTGluayB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9saW5rc09mUGF0aFwiO1xuaW1wb3J0IHsgc2V0TGlzdGVuZXJzIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2xpc3RlbmVyc1wiO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vaGVscGVyL3Rvb2xzXCJcbmltcG9ydCB7IFJvb3RGb2xkZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2ZvbGRlck1vZGVsc1wiO1xuXG5leHBvcnQgY29uc3Qgdmlld1Jvb3RQYXRoc1RocmVlID0gKCkgPT4ge1xuICAgIGxldCBsaW5rID0gUm9vdEZvbGRlci5nZXRSb290Rm9sZGVyKCkuZ2V0TGluaygpO1xuICAgIGxpbmsuZ2V0Tm9kZSgpLnN0eWxlLmJvcmRlciA9ICcwLjN2aCAjMzZiYjM2IHNvbGlkJztcbiAgICBsaW5rLmdldE5vZGUoKS5hcHBlbmRDaGlsZChsaW5rLmdldENsdXN0ZXIoKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdGhzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGxpbmsuZ2V0Tm9kZSgpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWxpbmsnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgY29uc3Qgb3BlblBhdGhzU2lkZUJhciA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGF0aC1jb250YWluZXInKTtcbiAgICBUb29scy5hZGRDbGFzc2VzKGNvbnRhaW5lciwgJ29wZW4nKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TGlua05vZGVzID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBub2RlV3JhcHBlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdsaW5rLXdyYXBwZXInKTtcbiAgICBjb25zdCBjbG9zZUNsdXN0ZXIgPSBUb29scy5jcmVhdGVOb2RlKCdkaXYnLCAnY2xvc2UtY2x1c3RlcicpO1xuICAgIGNvbnN0IGxpbmtCb2R5ID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ2xpbmstYm9keScpO1xuICAgIGNvbnN0IGFycm93UmlnaHQgPSBnZXROb2RlQXJyb3dSaWdodCgpO1xuICAgIGNvbnN0IG5vZGVMaW5rID0gVG9vbHMuZ2V0Tm9kZVdpdGhTcGFuKCdkaXYnLCBgLyR7bmFtZX1gLCAnbGluaycpO1xuICAgIGNvbnN0IGRlbCA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdkZWxldGUtbGluaycpO1xuICAgIGRlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBjbG9zZUNsdXN0ZXIuYXBwZW5kQ2hpbGQoYXJyb3dSaWdodCk7XG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKGxpbmtCb2R5LCBjbG9zZUNsdXN0ZXIsIG5vZGVMaW5rLCBkZWwpXG4gICAgVG9vbHMuYXBwZW5kQ2hpbGRzKG5vZGVXcmFwcGVyLCBsaW5rQm9keSk7XG4gICAgcmV0dXJuIG5vZGVXcmFwcGVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Tm9kZUFycm93RG93biA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWRvd24nKS5jbG9uZU5vZGUodHJ1ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlQXJyb3dSaWdodCA9ICgpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXJpZ2h0JykuY2xvbmVOb2RlKHRydWUpO1xufVxuXG4vKmV4cG9ydCBjb25zdCBnZXRQYXRoc0NsdXN0ZXIgPSAoZm9sZGVycywgcExpbmspID0+IHtcbiAgICBjb25zdCBjbHVzdGVyID0gVG9vbHMuY3JlYXRlTm9kZSgnZGl2JywgJ3BhdGhzLWNsdXN0ZXInKTtcbiAgICBwTGluay5zZXRDbHVzdGVyKGNsdXN0ZXIpO1xuICAgIGNsdXN0ZXIuc3R5bGUucGFkZGluZ0xlZnQgKz0gYCR7MX12aGA7XG4gICAgZm9yIChsZXQgZm9sZGVyIG9mIGZvbGRlcnMpIHtcblxuICAgICAgICBjb25zdCBsaW5rID0gQ2x1c3RlckxpbmsoZm9sZGVyKTtcbiAgICAgICAgbGlua0NmZyhsaW5rLCBmb2xkZXIpO1xuICAgICAgICBmb2xkZXIuc2V0TGluayhsaW5rKTtcblxuICAgICAgICBjb25zdCBpRm9sZGVycyA9IGZvbGRlci5nZXRJbm5lckZvbGRlcnMoKTtcbiAgICAgICAgY2x1c3Rlci5hcHBlbmRDaGlsZChsaW5rLmdldE5vZGUoKSk7XG4gICAgICAgIGlmIChpRm9sZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbHVzdGVyLmFwcGVuZENoaWxkKGdldFBhdGhzQ2x1c3RlcihpRm9sZGVycywgbGluaykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbHVzdGVyO1xufSovXG5cbmV4cG9ydCBjb25zdCBsaW5rQ2ZnID0gKGxpbmssIGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGNsdXN0ZXJDbG9zZSA9IGxpbmsuZ2V0Tm9kZSgpLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jbHVzdGVyJyk7XG4gICAgc2V0TGlzdGVuZXJmRm9yTGluayhsaW5rKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsdXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2x1c3RlciA9IFRvb2xzLmNyZWF0ZU5vZGUoJ2RpdicsICdwYXRocy1jbHVzdGVyJyk7XG4gICAgcmV0dXJuIGNsdXN0ZXI7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9