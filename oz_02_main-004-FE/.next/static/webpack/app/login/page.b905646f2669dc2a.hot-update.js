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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction getCookie(name) {\n    return null;\n}\nconst KakaoLogin = ()=>{\n    _s();\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = \"; \".concat(document.cookie);\n    console.log(\"value\", value);\n    const parts = value.split(\"; csrftoken=\");\n    //   if (parts.length === 2) {\n    //     parts.pop()!.split(';').shift()!;\n    //     console.log(parts);\n    //   }\n    //   if (parts.length === 2) return parts.pop()!.split(';').shift()!;\n    if (parts.length === 1) parts.pop().split(\";\").shift();\n    console.log(parts[1]);\n    //   console.log(parts);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log(document.cookie);\n        const token = getCookie(\"csrftoken\");\n        // console.log(token);\n        if (token) {\n            setAccessToken(token);\n        }\n    }, []);\n    const handleKakaoLogin = ()=>{\n        const kakaoAuthUrl = \"https://api.oz-02-main-04.xyz/api/v1/users/kakao/\";\n        window.location.href = kakaoAuthUrl;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleKakaoLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KakaoLogin, \"/xrtmJPCXv3vYgXhoOEInGM3amE=\");\n_c = KakaoLogin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KakaoLogin);\nvar _c;\n$RefreshReg$(_c, \"KakaoLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTRDO0FBRTVDLFNBQVNFLFVBQVVDLElBQVk7SUFDN0IsT0FBTztBQUNUO0FBQ0EsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUM5RCxNQUFNTSxRQUFRLEtBQXFCLE9BQWhCQyxTQUFTQyxNQUFNO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUMsU0FBU0o7SUFDckIsTUFBTUssUUFBUUwsTUFBTU0sS0FBSyxDQUFFO0lBQzNCLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLE1BQU07SUFDTixxRUFBcUU7SUFDckUsSUFBSUQsTUFBTUUsTUFBTSxLQUFLLEdBQUdGLE1BQU1HLEdBQUcsR0FBSUYsS0FBSyxDQUFDLEtBQUtHLEtBQUs7SUFDckROLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDcEIsd0JBQXdCO0lBRXhCWixnREFBU0EsQ0FBQztRQUNSLGdDQUFnQztRQUNoQyxNQUFNaUIsUUFBUWYsVUFBVTtRQUV4QixzQkFBc0I7UUFDdEIsSUFBSWUsT0FBTztZQUNUWCxlQUFlVztRQUNqQjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNQyxlQUFnQjtRQUN0QkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUdIO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNJOztZQUNFOzBCQUNELDhEQUFDQztnQkFBT0MsU0FBU1A7MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFHekM7R0FsQ01kO0tBQUFBO0FBb0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIG51bGw7XG59XG5jb25zdCBLYWthb0xvZ2luID0gKCkgPT4ge1xuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcbiAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdChgOyAkeydjc3JmdG9rZW4nfT1gKTtcbiAgLy8gICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gIC8vICAgICBwYXJ0cy5wb3AoKSEuc3BsaXQoJzsnKS5zaGlmdCgpITtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBhcnRzKTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikgcmV0dXJuIHBhcnRzLnBvcCgpIS5zcGxpdCgnOycpLnNoaWZ0KCkhO1xuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSBwYXJ0cy5wb3AoKSEuc3BsaXQoJzsnKS5zaGlmdCgpITtcbiAgY29uc29sZS5sb2cocGFydHNbMV0pO1xuICAvLyAgIGNvbnNvbGUubG9nKHBhcnRzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSk7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ2NzcmZ0b2tlbicpO1xuXG4gICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0QWNjZXNzVG9rZW4odG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVLYWthb0xvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IGtha2FvQXV0aFVybCA9IGBodHRwczovL2FwaS5vei0wMi1tYWluLTA0Lnh5ei9hcGkvdjEvdXNlcnMva2FrYW8vYDtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGtha2FvQXV0aFVybDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7JyAnfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVLYWthb0xvZ2lufT7roZzqt7jsnbg8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtha2FvTG9naW47XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRDb29raWUiLCJuYW1lIiwiS2FrYW9Mb2dpbiIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwiY29uc29sZSIsImxvZyIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsInRva2VuIiwiaGFuZGxlS2FrYW9Mb2dpbiIsImtha2FvQXV0aFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});