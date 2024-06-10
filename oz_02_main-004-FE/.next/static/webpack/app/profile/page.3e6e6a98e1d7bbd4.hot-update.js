"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var _atoms_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/atoms/atoms */ \"(app-pages-browser)/./src/atoms/atoms.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_NavBottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBottom */ \"(app-pages-browser)/./src/components/NavBottom.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst getCookieValue = (name)=>{\n    const value = \"; \".concat(document.cookie);\n    const parts = value.split(\"; \".concat(name, \"=\"));\n    if (parts.length === 2) return parts.pop().split(\";\").shift();\n};\nfunction deleteCookie(name, path, domain) {\n    if (getCookieValue(name)) {\n        document.cookie = name + \"=; Max-Age=-99999999;\" + (path ? \"; path=\" + path : \"\") + (domain ? \"; domain=\" + domain : \"\");\n    }\n}\nfunction Page() {\n    _s();\n    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_atoms_atoms__WEBPACK_IMPORTED_MODULE_2__.userAtom);\n    const [accessToken, setAccessToken] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_atoms_atoms__WEBPACK_IMPORTED_MODULE_2__.accessTokenAtom);\n    const [csrf, setCsrf] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_atoms_atoms__WEBPACK_IMPORTED_MODULE_2__.csrfTokenAtom);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const csrfToken = getCookieValue(\"csrftoken\");\n        const token = getCookieValue(\"access_token\");\n        if (token) {\n            setAccessToken(token);\n        }\n        if (csrfToken) {\n            setCsrf(csrfToken);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async ()=>{\n            if (!accessToken) {\n                setIsLoading(false);\n                return;\n            }\n            console.log(accessToken);\n            console.log(csrf);\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://api.oz-02-main-04.xyz/api/v1/users/myinfo\", {\n                    withCredentials: true,\n                    headers: {\n                        \"X-CSRFToken\": csrf,\n                        Authorization: \"Bearer \".concat(accessToken)\n                    }\n                });\n                setUser(response.data);\n                console.log(response.data);\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchUserData();\n    }, [\n        accessToken,\n        csrf,\n        setUser\n    ]);\n    const handleLogout = async ()=>{\n        try {\n            deleteCookie(\"access_token\", \"/\", \"oz-02-main-04.xyz\");\n            deleteCookie(\"refresh_token\", \"/\", \"oz-02-main-04.xyz\");\n            deleteCookie(\"csrftoken\", \"/\", \"oz-02-main-04.xyz\");\n            deleteCookie(\"csrftoken\", \"/\", \"api.oz-02-main-04.xyz\");\n            deleteCookie(\"user_state\", \"/\", \"oz-02-main-04.xyz\");\n            setUser(null);\n            setAccessToken(null);\n            setCsrf(null);\n        //   console.log(accessToken);\n        //   console.log(csrf);\n        //   const response = await axios.post(\n        //     'https://api.oz-02-main-04.xyz/api/v1/users/kakao/logout/',\n        //     {},\n        //     {\n        //       withCredentials: true,\n        //       headers: {\n        //         'X-CSRFToken': csrf,\n        //         Authorization: `Bearer ${accessToken}`,\n        //       },\n        //     },\n        //   );\n        //   if (response.status === 200) {\n        //     setUser(null);\n        //     window.location.href = '/login';\n        //   } else {\n        //     console.error(response.status);\n        //   }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleKakaoLogin = ()=>{\n        const kakaoAuthUrl = \"https://api.oz-02-main-04.xyz/api/v1/users/kakao/\";\n        window.location.href = kakaoAuthUrl;\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"로딩 중...\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"안녕하세요! \",\n                        user.닉네임,\n                        \" 님 \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                    href: \"/nickname\",\n                    children: \" 닉네임 변경하기\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 51\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 69\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"목표 설정하기\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 36\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"petodo 가이드 보기\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 42\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"로그아웃\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 56\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap-section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBottom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"로그인 해주세요.\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleKakaoLogin,\n                        src: \"/images/kakaoLogin.png\",\n                        alt: \"kakao-login\",\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wrap-section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBottom__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/profile/page.tsx\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"sGa4/6I2h551kq55Yl2Bb/62feE=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNsQjtBQUNNO0FBQ3lDO0FBQzFDO0FBQ2dCO0FBTS9DLE1BQU1TLGlCQUFpQixDQUFDQztJQUN0QixNQUFNQyxRQUFRLEtBQXFCLE9BQWhCQyxTQUFTQyxNQUFNO0lBQ2xDLE1BQU1DLFFBQVFILE1BQU1JLEtBQUssQ0FBQyxLQUFVLE9BQUxMLE1BQUs7SUFDcEMsSUFBSUksTUFBTUUsTUFBTSxLQUFLLEdBQUcsT0FBT0YsTUFBTUcsR0FBRyxHQUFJRixLQUFLLENBQUMsS0FBS0csS0FBSztBQUM5RDtBQUNBLFNBQVNDLGFBQWFULElBQVMsRUFBRVUsSUFBUyxFQUFFQyxNQUFXO0lBQ3JELElBQUlaLGVBQWVDLE9BQU87UUFDeEJFLFNBQVNDLE1BQU0sR0FDYkgsT0FBTywwQkFBMkJVLENBQUFBLE9BQU8sWUFBWUEsT0FBTyxFQUFDLElBQU1DLENBQUFBLFNBQVMsY0FBY0EsU0FBUyxFQUFDO0lBQ3hHO0FBQ0Y7QUFDZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdyQiw4Q0FBT0EsQ0FBQ0Msa0RBQVFBO0lBQ3hDLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3ZCLDhDQUFPQSxDQUFDRSx5REFBZUE7SUFDN0QsTUFBTSxDQUFDc0IsTUFBTUMsUUFBUSxHQUFHekIsOENBQU9BLENBQUNHLHVEQUFhQTtJQUM3QyxNQUFNLENBQUN1QixXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNK0IsWUFBWXRCLGVBQWU7UUFDakMsTUFBTXVCLFFBQVF2QixlQUFlO1FBQzdCLElBQUl1QixPQUFPO1lBQ1ROLGVBQWVNO1FBQ2pCO1FBQ0EsSUFBSUQsV0FBVztZQUNiSCxRQUFRRztRQUNWO0lBQ0YsR0FBRyxFQUFFO0lBRUwvQixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQyxnQkFBZ0I7WUFDcEIsSUFBSSxDQUFDUixhQUFhO2dCQUNoQkssYUFBYTtnQkFDYjtZQUNGO1lBQ0FJLFFBQVFDLEdBQUcsQ0FBQ1Y7WUFDWlMsUUFBUUMsR0FBRyxDQUFDUjtZQUNaLElBQUk7Z0JBQ0YsTUFBTVMsV0FBVyxNQUFNbEMsNkNBQUtBLENBQUNtQyxHQUFHLENBQUMscURBQXFEO29CQUNwRkMsaUJBQWlCO29CQUNqQkMsU0FBUzt3QkFDUCxlQUFlWjt3QkFDZmEsZUFBZSxVQUFzQixPQUFaZjtvQkFDM0I7Z0JBQ0Y7Z0JBQ0FELFFBQVFZLFNBQVNLLElBQUk7Z0JBQ3JCUCxRQUFRQyxHQUFHLENBQUNDLFNBQVNLLElBQUk7WUFDM0IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkUixRQUFRUSxLQUFLLENBQUNBO1lBQ2hCLFNBQVU7Z0JBQ1JaLGFBQWE7WUFDZjtRQUNGO1FBRUFHO0lBQ0YsR0FBRztRQUFDUjtRQUFhRTtRQUFNSDtLQUFRO0lBRS9CLE1BQU1tQixlQUFlO1FBQ25CLElBQUk7WUFDRnhCLGFBQWEsZ0JBQWdCLEtBQUs7WUFDbENBLGFBQWEsaUJBQWlCLEtBQUs7WUFDbkNBLGFBQWEsYUFBYSxLQUFLO1lBQy9CQSxhQUFhLGFBQWEsS0FBSztZQUMvQkEsYUFBYSxjQUFjLEtBQUs7WUFDaENLLFFBQVE7WUFDUkUsZUFBZTtZQUNmRSxRQUFRO1FBQ1IsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUV2Qix1Q0FBdUM7UUFDdkMsa0VBQWtFO1FBQ2xFLFVBQVU7UUFDVixRQUFRO1FBQ1IsK0JBQStCO1FBQy9CLG1CQUFtQjtRQUNuQiwrQkFBK0I7UUFDL0Isa0RBQWtEO1FBQ2xELFdBQVc7UUFDWCxTQUFTO1FBQ1QsT0FBTztRQUNQLG1DQUFtQztRQUNuQyxxQkFBcUI7UUFDckIsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsTUFBTTtRQUNSLEVBQUUsT0FBT2MsT0FBTztZQUNkUixRQUFRUSxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFDQSxNQUFNRSxtQkFBbUI7UUFDdkIsTUFBTUMsZUFBZ0I7UUFDdEJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHSDtJQUN6QjtJQUVBLElBQUloQixXQUFXO1FBQ2IscUJBQ0UsOERBQUNvQjtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQzswQkFBRTs7Ozs7Ozs7Ozs7SUFHVDtJQUNBLHFCQUNFLDhEQUFDRjtRQUFJQyxXQUFVO2tCQUNaM0IscUJBQ0M7OzhCQUNFLDhEQUFDNEI7O3dCQUFFO3dCQUFRNUIsS0FBSzZCLEdBQUc7d0JBQUM7Ozs7Ozs7OEJBQ3BCLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNDO29CQUFLTixNQUFLOzhCQUFZOzs7Ozs7Z0JBQWdCOzhCQUFDLDhEQUFDTzs7Ozs7Z0JBQWdCOzhCQUFDLDhEQUFDRjs7Ozs7OEJBQzNELDhEQUFDRTs4QkFBTzs7Ozs7O2dCQUFnQjs4QkFBQyw4REFBQ0Y7Ozs7OzhCQUMxQiw4REFBQ0U7OEJBQU87Ozs7OztnQkFBc0I7OEJBQUMsOERBQUNGOzs7Ozs4QkFDaEMsOERBQUNFO29CQUFPQyxTQUFTYjs4QkFBYzs7Ozs7O2dCQUFhOzhCQUFDLDhEQUFDVTs7Ozs7OEJBQzlDLDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQzFDLDZEQUFTQTs7Ozs7Ozs7Ozs7eUNBSWQ7OzhCQUNFLDhEQUFDMkM7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0k7OEJBQ0MsNEVBQUNoRCxrREFBS0E7d0JBQ0ppRCxTQUFTWjt3QkFDVGEsS0FBSzt3QkFDTEMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Z0JBQ0Y7OEJBQ1YsOERBQUNYO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDMUMsNkRBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtHQTNId0JjOztRQUNFbkIsMENBQU9BO1FBQ09BLDBDQUFPQTtRQUNyQkEsMENBQU9BOzs7S0FIVG1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJztcbmltcG9ydCB7IHVzZXJBdG9tLCBhY2Nlc3NUb2tlbkF0b20sIGNzcmZUb2tlbkF0b20gfSBmcm9tICdAL2F0b21zL2F0b21zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBOYXZCb3R0b20gZnJvbSAnQC9jb21wb25lbnRzL05hdkJvdHRvbSc7XG5pbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBudW1iZXI7XG4gIOqzhOyglTogc3RyaW5nO1xuICDri4nrhKTsnoQ6IHN0cmluZztcbn1cbmNvbnN0IGdldENvb2tpZVZhbHVlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikgcmV0dXJuIHBhcnRzLnBvcCgpIS5zcGxpdCgnOycpLnNoaWZ0KCk7XG59O1xuZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWU6IGFueSwgcGF0aDogYW55LCBkb21haW46IGFueSkge1xuICBpZiAoZ2V0Q29va2llVmFsdWUobmFtZSkpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPVxuICAgICAgbmFtZSArICc9OyBNYXgtQWdlPS05OTk5OTk5OTsnICsgKHBhdGggPyAnOyBwYXRoPScgKyBwYXRoIDogJycpICsgKGRvbWFpbiA/ICc7IGRvbWFpbj0nICsgZG9tYWluIDogJycpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VBdG9tKHVzZXJBdG9tKTtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VBdG9tKGFjY2Vzc1Rva2VuQXRvbSk7XG4gIGNvbnN0IFtjc3JmLCBzZXRDc3JmXSA9IHVzZUF0b20oY3NyZlRva2VuQXRvbSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNzcmZUb2tlbiA9IGdldENvb2tpZVZhbHVlKCdjc3JmdG9rZW4nKTtcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZVZhbHVlKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICB9XG4gICAgaWYgKGNzcmZUb2tlbikge1xuICAgICAgc2V0Q3NyZihjc3JmVG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coY3NyZik7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkub3otMDItbWFpbi0wNC54eXovYXBpL3YxL3VzZXJzL215aW5mbycsIHtcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogY3NyZixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hVc2VyRGF0YSgpO1xuICB9LCBbYWNjZXNzVG9rZW4sIGNzcmYsIHNldFVzZXJdKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZUNvb2tpZSgnYWNjZXNzX3Rva2VuJywgJy8nLCAnb3otMDItbWFpbi0wNC54eXonKTtcbiAgICAgIGRlbGV0ZUNvb2tpZSgncmVmcmVzaF90b2tlbicsICcvJywgJ296LTAyLW1haW4tMDQueHl6Jyk7XG4gICAgICBkZWxldGVDb29raWUoJ2NzcmZ0b2tlbicsICcvJywgJ296LTAyLW1haW4tMDQueHl6Jyk7XG4gICAgICBkZWxldGVDb29raWUoJ2NzcmZ0b2tlbicsICcvJywgJ2FwaS5vei0wMi1tYWluLTA0Lnh5eicpO1xuICAgICAgZGVsZXRlQ29va2llKCd1c2VyX3N0YXRlJywgJy8nLCAnb3otMDItbWFpbi0wNC54eXonKTtcbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICBzZXRBY2Nlc3NUb2tlbihudWxsKTtcbiAgICAgIHNldENzcmYobnVsbCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY3NyZik7XG5cbiAgICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgLy8gICAgICdodHRwczovL2FwaS5vei0wMi1tYWluLTA0Lnh5ei9hcGkvdjEvdXNlcnMva2FrYW8vbG9nb3V0LycsXG4gICAgICAvLyAgICAge30sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgLy8gICAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmLFxuICAgICAgLy8gICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgIC8vICAgICAgIH0sXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgKTtcbiAgICAgIC8vICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAvLyAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIC8vICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZUtha2FvTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3Qga2FrYW9BdXRoVXJsID0gYGh0dHBzOi8vYXBpLm96LTAyLW1haW4tMDQueHl6L2FwaS92MS91c2Vycy9rYWthby9gO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0ga2FrYW9BdXRoVXJsO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDAgcC00XCI+XG4gICAgICAgIDxwPuuhnOuUqSDspJEuLi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIHt1c2VyID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxwPuyViOuFle2VmOyEuOyalCEge3VzZXIu64uJ64Sk7J6EfSDri5ggPC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmlja25hbWVcIj4g64uJ64Sk7J6EIOuzgOqyve2VmOq4sDwvTGluaz4gPGJ1dHRvbj48L2J1dHRvbj4gPGhyIC8+XG4gICAgICAgICAgPGJ1dHRvbj7rqqntkZwg7ISk7KCV7ZWY6riwPC9idXR0b24+IDxociAvPlxuICAgICAgICAgIDxidXR0b24+cGV0b2RvIOqwgOydtOuTnCDrs7TquLA8L2J1dHRvbj4gPGhyIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PuuhnOq3uOyVhOybgzwvYnV0dG9uPiA8aHIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtc2VjdGlvblwiPlxuICAgICAgICAgICAgPE5hdkJvdHRvbSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHA+66Gc6re47J24IO2VtOyjvOyEuOyalC48L3A+XG4gICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVLYWthb0xvZ2lufVxuICAgICAgICAgICAgICBzcmM9eycvaW1hZ2VzL2tha2FvTG9naW4ucG5nJ31cbiAgICAgICAgICAgICAgYWx0PVwia2FrYW8tbG9naW5cIlxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH0+PC9JbWFnZT5cbiAgICAgICAgICA8L2J1dHRvbj57JyAnfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8TmF2Qm90dG9tIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlQXRvbSIsInVzZXJBdG9tIiwiYWNjZXNzVG9rZW5BdG9tIiwiY3NyZlRva2VuQXRvbSIsIkltYWdlIiwiTmF2Qm90dG9tIiwiZ2V0Q29va2llVmFsdWUiLCJuYW1lIiwidmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsImRlbGV0ZUNvb2tpZSIsInBhdGgiLCJkb21haW4iLCJQYWdlIiwidXNlciIsInNldFVzZXIiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiY3NyZiIsInNldENzcmYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjc3JmVG9rZW4iLCJ0b2tlbiIsImZldGNoVXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImhhbmRsZUxvZ291dCIsImhhbmRsZUtha2FvTG9naW4iLCJrYWthb0F1dGhVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwi64uJ64Sk7J6EIiwiaHIiLCJMaW5rIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});