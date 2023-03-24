/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-1 */ \"./src/module-1.js\");\n/* harmony import */ var _css_common_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/common.scss */ \"./src/css/common.scss\");\n\n\nconsole.log(_module_1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconsole.log('index.js');\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/module-1.js":
/*!*************************!*\
  !*** ./src/module-1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"module-1\");\n\n//# sourceURL=webpack://webpack/./src/module-1.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common.scss ***!
  \****************************************************************************************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: PostCSS received undefined instead of CSS string\\n    at new Input (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\input.js:24:13)\\n    at parse (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\parse.js:8:15)\\n    at new LazyResult (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:133:16)\\n    at Processor.process (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\processor.js:28:14)\\n    at Object.loader (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\index.js:109:51)\\n    at tryRunOrWebpackError (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5058:12)\\n    at __webpack_require__ (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5015:18)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5086:20\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4993:43\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4958:16\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4926:15\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4873:8\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3352:32\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:107:20)\\n    at ItemCacheFacade.store (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\CacheFacade.js:137:15)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3352:11\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:91:34\\n    at Array.<anonymous> (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\cache\\\\MemoryCachePlugin.js:45:13)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:91:19\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:19:1)\\n    at Cache.get (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:75:18)\\n    at ItemCacheFacade.get (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\CacheFacade.js:111:15)\\n    at Compilation._codeGenerationModule (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3322:9)\\n    at codeGen (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4861:11)\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4891:14\\n    at processQueue (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\util\\\\processAsyncTree.js:55:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n-- inner error --\\nError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: PostCSS received undefined instead of CSS string\\n    at new Input (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\input.js:24:13)\\n    at parse (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\parse.js:8:15)\\n    at new LazyResult (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\lazy-result.js:133:16)\\n    at Processor.process (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\postcss\\\\lib\\\\processor.js:28:14)\\n    at Object.loader (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\index.js:109:51)\\n    at Object.<anonymous> (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\src\\\\css\\\\common.scss:1:7)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:441:11\\n    at Hook.eval [as call] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:14:14)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5060:39\\n    at tryRunOrWebpackError (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5058:12)\\n    at __webpack_require__ (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5015:18)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5086:20\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:18:14)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4993:43\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4958:16\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4926:15\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4873:8\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3352:32\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:107:20)\\n    at ItemCacheFacade.store (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\CacheFacade.js:137:15)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3352:11\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:91:34\\n    at Array.<anonymous> (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\cache\\\\MemoryCachePlugin.js:45:13)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:91:19\\n    at Hook.eval [as callAsync] (eval at create (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:19:1)\\n    at Cache.get (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Cache.js:75:18)\\n    at ItemCacheFacade.get (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\CacheFacade.js:111:15)\\n    at Compilation._codeGenerationModule (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:3322:9)\\n    at codeGen (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4861:11)\\n    at symbolIterator (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n    at timesSync (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:2297:7)\\n    at Object.eachLimit (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\neo-async\\\\async.js:3463:5)\\n    at C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:4891:14\\n    at processQueue (C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\util\\\\processAsyncTree.js:55:4)\\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\\n\\nGenerated code for C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!C:\\\\Users\\\\timchenko.a\\\\Documents\\\\GitHub\\\\webpack\\\\src\\\\css\\\\common.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\\\nError: PostCSS received undefined instead of CSS string\\\\n    at new Input (C:\\\\\\\\Users\\\\\\\\timchenko.a\\\\\\\\Documents\\\\\\\\GitHub\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\postcss\\\\\\\\lib\\\\\\\\input.js:24:13)\\\\n    at parse (C:\\\\\\\\Users\\\\\\\\timchenko.a\\\\\\\\Documents\\\\\\\\GitHub\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\postcss\\\\\\\\lib\\\\\\\\parse.js:8:15)\\\\n    at new LazyResult (C:\\\\\\\\Users\\\\\\\\timchenko.a\\\\\\\\Documents\\\\\\\\GitHub\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\postcss\\\\\\\\lib\\\\\\\\lazy-result.js:133:16)\\\\n    at Processor.process (C:\\\\\\\\Users\\\\\\\\timchenko.a\\\\\\\\Documents\\\\\\\\GitHub\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\postcss\\\\\\\\lib\\\\\\\\processor.js:28:14)\\\\n    at Object.loader (C:\\\\\\\\Users\\\\\\\\timchenko.a\\\\\\\\Documents\\\\\\\\GitHub\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\css-loader\\\\\\\\dist\\\\\\\\index.js:109:51)\\\");\");\n\n//# sourceURL=webpack://webpack/./src/css/common.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/common.scss":
/*!*****************************!*\
  !*** ./src/css/common.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/common.scss\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/css/common.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;