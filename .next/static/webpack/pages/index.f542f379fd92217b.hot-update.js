"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/images.js":
/*!*************************!*\
  !*** ./pages/images.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Images; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_img1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img1.jpg */ \"./public/img1.jpg\");\n/* harmony import */ var _public_img2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img2.jpg */ \"./public/img2.jpg\");\n/* harmony import */ var _public_img3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/img3.jpg */ \"./public/img3.jpg\");\n/* harmony import */ var _public_img4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/img4.jpg */ \"./public/img4.jpg\");\n/* harmony import */ var _public_img5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/img5.jpg */ \"./public/img5.jpg\");\n/* harmony import */ var _public_img6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/img6.jpg */ \"./public/img6.jpg\");\n/* harmony import */ var _public_img7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/img7.jpg */ \"./public/img7.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar inter;\nfunction Images(props) {\n    var checkImg = function checkImg(val) {\n        if (val == 0) {\n            props.setTimes(props.times + 1);\n            console.log(\"true\");\n        } else {\n            console.log(val);\n        }\n    };\n    _s();\n    var imgArray = [\n        _public_img1_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _public_img2_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _public_img3_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _public_img4_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _public_img5_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _public_img6_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _public_img7_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n    //The use state hook provides state in functional components, forcing the DOM to\n    //Rerender when I call setCurrImg. \n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0), currImg = ref[0], setCurrImg = ref[1];\n    //UseEffect is a clean way of running code at mount and running code at demount. Effectively,\n    //On render I am calling setInterval, and at derender I am caling clearInterval.\n    var selection;\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function(_) {\n        inter = setInterval(function(_) {\n            selection = Math.round(Math.random() * 6);\n            setCurrImg(selection);\n        }, 500);\n        return function() {\n            clearInterval(inter);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function(_) {\n        checkImg(currImg);\n        console.log(\"Checked selection:\" + currImg);\n    }, [\n        currImg\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: imgArray[currImg].src,\n                    alt: \"Image of an animal\",\n                    width: 500,\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\david\\\\source\\\\Web Tech\\\\123138jsex5\\\\pages\\\\images.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\source\\\\Web Tech\\\\123138jsex5\\\\pages\\\\images.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary mx-auto w-full\",\n                onClick: function() {\n                    return clearInterval(inter);\n                },\n                children: \"Stop Animation\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\source\\\\Web Tech\\\\123138jsex5\\\\pages\\\\images.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\source\\\\Web Tech\\\\123138jsex5\\\\pages\\\\images.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(Images, \"tOl6vX2uhC762Ysfz0OEuOgY4MU=\");\n_c = Images;\nvar _c;\n$RefreshReg$(_c, \"Images\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbWFnZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNjO0FBR25ELElBQUlXLEtBQUs7QUFDTSxTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQW1CekJDLFFBQVEsR0FBakIsU0FBU0EsUUFBUSxDQUFDQyxHQUFHLEVBQUU7UUFDbkIsSUFBSUEsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNWRixLQUFLLENBQUNHLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLE9BQU87WUFDSEQsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDOztJQXpCRCxJQUFNSyxRQUFRLEdBQUc7UUFBQ25CLHdEQUFJO1FBQUVDLHdEQUFJO1FBQUVDLHdEQUFJO1FBQUVDLHdEQUFJO1FBQUVDLHdEQUFJO1FBQUVDLHdEQUFJO1FBQUVDLHdEQUFJO0tBQUM7SUFDM0QsZ0ZBQWdGO0lBQ2hGLG1DQUFtQztJQUNuQyxJQUE4QkUsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFsQ1ksT0FBTyxHQUFnQlosR0FBVyxHQUEzQixFQUFFYSxVQUFVLEdBQUliLEdBQVcsR0FBZjtJQUMxQiw2RkFBNkY7SUFDN0YsZ0ZBQWdGO0lBQ2hGLElBQUljLFNBQVM7SUFDYmIsZ0RBQVMsQ0FBQ2MsU0FBQUEsQ0FBQyxFQUFJO1FBQ2ZiLEtBQUssR0FBR2MsV0FBVyxDQUFDRCxTQUFBQSxDQUFDLEVBQUk7WUFDckJELFNBQVMsR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeENOLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNQLE9BQU8sV0FBTTtZQUFDTSxhQUFhLENBQUNsQixLQUFLLENBQUM7UUFBQSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ0hELGdEQUFTLENBQUNjLFNBQUFBLENBQUMsRUFBSTtRQUNYVixRQUFRLENBQUNPLE9BQU8sQ0FBQyxDQUFDO1FBQ2xCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBR0UsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQyxFQUFFO1FBQUNBLE9BQU87S0FBQyxDQUFDLENBQUM7SUFVZCxxQkFDSSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTs7MEJBQ2IsOERBQUNELEtBQUc7MEJBRUEsNEVBQUM5QixtREFBSztvQkFBQ2dDLEdBQUcsRUFBRVosUUFBUSxDQUFDQyxPQUFPLENBQUMsQ0FBQ1csR0FBRztvQkFBRUMsR0FBRyxFQUFDLG9CQUFvQjtvQkFBQ0MsS0FBSyxFQUFFLEdBQUc7b0JBQUVDLE1BQU0sRUFBRSxHQUFHOzs7Ozt3QkFBRzs7Ozs7b0JBQ3BGOzBCQUNOLDhEQUFDQyxRQUFNO2dCQUFDTCxTQUFTLEVBQUMsZ0NBQWdDO2dCQUFDTSxPQUFPLEVBQUU7MkJBQU1SLGFBQWEsQ0FBQ2xCLEtBQUssQ0FBQztpQkFBQTswQkFBRSxnQkFBYzs7Ozs7b0JBQVM7Ozs7OztZQUM3RyxDQUNUO0FBRUwsQ0FBQztHQXRDdUJDLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbWFnZXMuanM/YTAyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGltZzEgZnJvbSBcIi4uL3B1YmxpYy9pbWcxLmpwZ1wiXHJcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9wdWJsaWMvaW1nMi5qcGdcIlxyXG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vcHVibGljL2ltZzMuanBnXCJcclxuaW1wb3J0IGltZzQgZnJvbSBcIi4uL3B1YmxpYy9pbWc0LmpwZ1wiXHJcbmltcG9ydCBpbWc1IGZyb20gXCIuLi9wdWJsaWMvaW1nNS5qcGdcIlxyXG5pbXBvcnQgaW1nNiBmcm9tIFwiLi4vcHVibGljL2ltZzYuanBnXCJcclxuaW1wb3J0IGltZzcgZnJvbSBcIi4uL3B1YmxpYy9pbWc3LmpwZ1wiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbnZhciBpbnRlcjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VzKHByb3BzKSB7XHJcbiAgICBjb25zdCBpbWdBcnJheSA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0LCBpbWc1LCBpbWc2LCBpbWc3XTtcclxuICAgIC8vVGhlIHVzZSBzdGF0ZSBob29rIHByb3ZpZGVzIHN0YXRlIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgZm9yY2luZyB0aGUgRE9NIHRvXHJcbiAgICAvL1JlcmVuZGVyIHdoZW4gSSBjYWxsIHNldEN1cnJJbWcuIFxyXG4gICAgY29uc3QgW2N1cnJJbWcsIHNldEN1cnJJbWddID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvL1VzZUVmZmVjdCBpcyBhIGNsZWFuIHdheSBvZiBydW5uaW5nIGNvZGUgYXQgbW91bnQgYW5kIHJ1bm5pbmcgY29kZSBhdCBkZW1vdW50LiBFZmZlY3RpdmVseSxcclxuICAgIC8vT24gcmVuZGVyIEkgYW0gY2FsbGluZyBzZXRJbnRlcnZhbCwgYW5kIGF0IGRlcmVuZGVyIEkgYW0gY2FsaW5nIGNsZWFySW50ZXJ2YWwuXHJcbiAgICB2YXIgc2VsZWN0aW9uO1xyXG4gICAgdXNlRWZmZWN0KF8gPT4ge1xyXG4gICAgaW50ZXIgPSBzZXRJbnRlcnZhbChfID0+IHtcclxuICAgICAgICBzZWxlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqNik7XHJcbiAgICAgICAgc2V0Q3VyckltZyhzZWxlY3Rpb24pO1xyXG4gICAgfSwgNTAwKVxyXG4gICAgcmV0dXJuICgpID0+IHtjbGVhckludGVydmFsKGludGVyKX07ICAgIFxyXG59LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoXyA9PiB7XHJcbiAgICAgICAgY2hlY2tJbWcoY3VyckltZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2VkIHNlbGVjdGlvbjpcIiArIGN1cnJJbWcpO1xyXG4gICAgfSwgW2N1cnJJbWddKTtcclxuICAgIGZ1bmN0aW9uIGNoZWNrSW1nKHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwgPT0gMCkge1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRUaW1lcyhwcm9wcy50aW1lcyArIDEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdBcnJheVtjdXJySW1nXS5zcmN9IGFsdD1cIkltYWdlIG9mIGFuIGFuaW1hbFwiIHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBteC1hdXRvIHctZnVsbFwiIG9uQ2xpY2s9eygpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXIpfT5TdG9wIEFuaW1hdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiaW1nMSIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJpbWc2IiwiaW1nNyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnRlciIsIkltYWdlcyIsInByb3BzIiwiY2hlY2tJbWciLCJ2YWwiLCJzZXRUaW1lcyIsInRpbWVzIiwiY29uc29sZSIsImxvZyIsImltZ0FycmF5IiwiY3VyckltZyIsInNldEN1cnJJbWciLCJzZWxlY3Rpb24iLCJfIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/images.js\n"));

/***/ })

});