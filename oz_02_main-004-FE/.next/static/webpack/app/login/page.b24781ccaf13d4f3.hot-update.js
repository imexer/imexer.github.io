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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction getCookie(name) {\n    return null;\n}\nconst KakaoLogin = ()=>{\n    _s();\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = \"; \".concat(document.cookie);\n    console.log(\"value\", value);\n    const parts = value.split(\"; csrftoken=\");\n    //   if (parts.length === 2) return parts.pop()!.split(';').shift()!;\n    //   console.log(parts);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log(document.cookie);\n        const token = getCookie(\"csrftoken\");\n        // console.log(token);\n        if (token) {\n            setAccessToken(token);\n        }\n    }, []);\n    const handleKakaoLogin = ()=>{\n        const kakaoAuthUrl = \"https://api.oz-02-main-04.xyz/api/v1/users/kakao/\";\n        window.location.href = kakaoAuthUrl;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleKakaoLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(KakaoLogin, \"/xrtmJPCXv3vYgXhoOEInGM3amE=\");\n_c = KakaoLogin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KakaoLogin);\nvar _c;\n$RefreshReg$(_c, \"KakaoLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTRDO0FBRTVDLFNBQVNFLFVBQVVDLElBQVk7SUFDN0IsT0FBTztBQUNUO0FBQ0EsTUFBTUMsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUM5RCxNQUFNTSxRQUFRLEtBQXFCLE9BQWhCQyxTQUFTQyxNQUFNO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUMsU0FBU0o7SUFDckIsTUFBTUssUUFBUUwsTUFBTU0sS0FBSyxDQUFFO0lBRTNCLHFFQUFxRTtJQUVyRSx3QkFBd0I7SUFFeEJiLGdEQUFTQSxDQUFDO1FBQ1IsZ0NBQWdDO1FBQ2hDLE1BQU1jLFFBQVFaLFVBQVU7UUFFeEIsc0JBQXNCO1FBQ3RCLElBQUlZLE9BQU87WUFDVFIsZUFBZVE7UUFDakI7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNQyxtQkFBbUI7UUFDdkIsTUFBTUMsZUFBZ0I7UUFDdEJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHSDtJQUN6QjtJQUVBLHFCQUNFLDhEQUFDSTs7WUFDRTswQkFDRCw4REFBQ0M7Z0JBQU9DLFNBQVNQOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBR3pDO0dBOUJNWDtLQUFBQTtBQWdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBnZXRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIHJldHVybiBudWxsO1xufVxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICBjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSk7XG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHsnY3NyZnRva2VuJ309YCk7XG5cbiAgLy8gICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCkhLnNwbGl0KCc7Jykuc2hpZnQoKSE7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhwYXJ0cyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5jb29raWUpO1xuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCdjc3JmdG9rZW4nKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlS2FrYW9Mb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBrYWthb0F1dGhVcmwgPSBgaHR0cHM6Ly9hcGkub3otMDItbWFpbi0wNC54eXovYXBpL3YxL3VzZXJzL2tha2FvL2A7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBrYWthb0F1dGhVcmw7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeycgJ31cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlS2FrYW9Mb2dpbn0+66Gc6re47J24PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLYWthb0xvZ2luO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0Q29va2llIiwibmFtZSIsIktha2FvTG9naW4iLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsImNvbnNvbGUiLCJsb2ciLCJwYXJ0cyIsInNwbGl0IiwidG9rZW4iLCJoYW5kbGVLYWthb0xvZ2luIiwia2FrYW9BdXRoVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});