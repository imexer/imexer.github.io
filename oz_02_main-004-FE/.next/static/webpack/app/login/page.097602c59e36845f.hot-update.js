"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction getCookie(name) {\n    return null;\n}\nconst KakaoLogin = ()=>{\n    _s();\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = \"; \".concat(document.cookie);\n    console.log(\"value\", value);\n    const parts = value.split(\"; csrftoken=\");\n    //   if (parts.length === 2) {\n    //     parts.pop()!.split(';').shift()!;\n    //     console.log(parts);\n    //   }\n    //   if (parts.length === 2) return parts.pop()!.split(';').shift()!;\n    if (parts.length === 2) parts.pop().split(\";\").shift();\n    console.log(parts);\n    //   console.log(parts);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log(document.cookie);\n        const token = getCookie(\"csrftoken\");\n        // console.log(token);\n        if (token) {\n            setAccessToken(token);\n        }\n    }, []);\n    const handleKakaoLogin = ()=>{\n        const kakaoAuthUrl = \"https://api.oz-02-main-04.xyz/api/v1/users/kakao/\";\n        window.location.href = kakaoAuthUrl;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleKakaoLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KakaoLogin, \"/xrtmJPCXv3vYgXhoOEInGM3amE=\");\n_c = KakaoLogin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KakaoLogin);\nvar _c;\n$RefreshReg$(_c, \"KakaoLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTRDO0FBRTVDLFNBQVNFLFVBQVVDLElBQVk7SUFDN0IsT0FBTztBQUNUO0FBQ0EsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUM5RCxNQUFNTSxRQUFRLEtBQXFCLE9BQWhCQyxTQUFTQyxNQUFNO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUMsU0FBU0o7SUFDckIsTUFBTUssUUFBUUwsTUFBTU0sS0FBSyxDQUFFO0lBQzNCLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixxRUFBcUU7SUFDckUsSUFBSUQsTUFBTUUsTUFBTSxLQUFLLEdBQUdGLE1BQU1HLEdBQUcsR0FBSUYsS0FBSyxDQUFDLEtBQUtHLEtBQUs7SUFDckROLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDWix3QkFBd0I7SUFFeEJaLGdEQUFTQSxDQUFDO1FBQ1IsZ0NBQWdDO1FBQ2hDLE1BQU1pQixRQUFRZixVQUFVO1FBRXhCLHNCQUFzQjtRQUN0QixJQUFJZSxPQUFPO1lBQ1RYLGVBQWVXO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsbUJBQW1CO1FBQ3ZCLE1BQU1DLGVBQWdCO1FBQ3RCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR0g7SUFDekI7SUFFQSxxQkFDRSw4REFBQ0k7O1lBQ0U7MEJBQ0QsOERBQUNDO2dCQUFPQyxTQUFTUDswQkFBa0I7Ozs7Ozs7Ozs7OztBQUd6QztHQWxDTWQ7S0FBQUE7QUFvQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeD9mYzYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICByZXR1cm4gbnVsbDtcbn1cbmNvbnN0IEtha2FvTG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHZhbHVlID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgY29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpO1xuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7J2NzcmZ0b2tlbid9PWApO1xuICAvLyAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgLy8gICAgIHBhcnRzLnBvcCgpIS5zcGxpdCgnOycpLnNoaWZ0KCkhO1xuICAvLyAgICAgY29uc29sZS5sb2cocGFydHMpO1xuICAvLyAgIH1cbiAgLy8gICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCkhLnNwbGl0KCc7Jykuc2hpZnQoKSE7XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHBhcnRzLnBvcCgpIS5zcGxpdCgnOycpLnNoaWZ0KCkhO1xuICBjb25zb2xlLmxvZyhwYXJ0cyk7XG4gIC8vICAgY29uc29sZS5sb2cocGFydHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUtha2FvTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3Qga2FrYW9BdXRoVXJsID0gYGh0dHBzOi8vYXBpLm96LTAyLW1haW4tMDQueHl6L2FwaS92MS91c2Vycy9rYWthby9gO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0ga2FrYW9BdXRoVXJsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsnICd9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUtha2FvTG9naW59PuuhnOq3uOyduDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2FrYW9Mb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldENvb2tpZSIsIm5hbWUiLCJLYWthb0xvZ2luIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJjb25zb2xlIiwibG9nIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInBvcCIsInNoaWZ0IiwidG9rZW4iLCJoYW5kbGVLYWthb0xvZ2luIiwia2FrYW9BdXRoVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});