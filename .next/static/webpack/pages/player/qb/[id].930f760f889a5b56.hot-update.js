"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/qb/[id]",{

/***/ "./pages/player/qb/[id].js":
/*!*********************************!*\
  !*** ./pages/player/qb/[id].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayerView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg-radar-chart */ \"./node_modules/react-svg-radar-chart/build/index.js\");\n/* harmony import */ var react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_svg_radar_chart_build_css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg-radar-chart/build/css/index.css */ \"./node_modules/react-svg-radar-chart/build/css/index.css\");\n/* harmony import */ var react_svg_radar_chart_build_css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_svg_radar_chart_build_css_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Grid_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Grid,Stack!=!@mui/material */ \"__barrel_optimize__?names=Grid,Stack!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_joy_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/joy/CircularProgress */ \"./node_modules/@mui/joy/CircularProgress/index.js\");\n/* harmony import */ var _mui_joy_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/joy/Typography */ \"./node_modules/@mui/joy/Typography/index.js\");\n/* harmony import */ var _mui_joy_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/joy/styles */ \"./node_modules/@mui/joy/styles/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst colors = [\n    \"#e739d5\",\n    \"#e74646\",\n    \"#e7a539\",\n    \"#49cb3c\",\n    \"#983df0\"\n];\nfunction PlayerView() {\n    _s();\n    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [similarPlayers, setSimilarPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [btnState, setBtnState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        false,\n        false,\n        false,\n        false,\n        false\n    ]);\n    const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"black\",\n        \"black\",\n        \"black\",\n        \"black\",\n        \"black\"\n    ]);\n    const captions = {\n        // columns\n        Attempts: \"Attempts\",\n        Completions: \"Completions\",\n        Interceptions: \"Interceptions\",\n        TD: \"TD\",\n        Yards: \"Yards\"\n    };\n    const onSimilarPlayerClick = (e)=>{\n        const i = parseInt(e.target.id);\n        btnState[i] = !btnState[i];\n        if (btnState[i]) {\n            setData([\n                ...data,\n                {\n                    data: parsePlayer(similarPlayers[i]),\n                    meta: {\n                        color: colors[i],\n                        playerName: similarPlayers[i].name\n                    }\n                }\n            ]);\n            console.log(data);\n            const tmp = colorState;\n            tmp[i] = colors[i];\n            setColorState(tmp);\n        } else {\n            setData(data.filter((p)=>p.meta.playerName != similarPlayers[i].name));\n            const tmp = colorState;\n            tmp[i] = \"black\";\n            setColorState(tmp);\n        }\n        setBtnState(btnState);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const splitUri = window.location.href.split(\"/\");\n        const uuid = splitUri[splitUri.length - 1];\n        // fetch player data here\n        setPlayer({\n            name: \"Peyton Manning\",\n            stats: [\n                [\n                    89,\n                    144,\n                    1141,\n                    11,\n                    6\n                ]\n            ],\n            qbr: 120\n        });\n        const player = {\n            name: \"Peyton Manning\",\n            stats: [\n                [\n                    89,\n                    144,\n                    1141,\n                    11,\n                    6\n                ]\n            ]\n        };\n        const playerObj = parsePlayer(player);\n        const data = [\n            {\n                data: playerObj,\n                meta: {\n                    color: \"blue\"\n                }\n            }\n        ];\n        setData(data);\n        // Fetch similar players here\n        const sp = [\n            {\n                name: \"Josh Allen\",\n                stats: [\n                    [\n                        10,\n                        144,\n                        1041,\n                        11,\n                        6\n                    ]\n                ],\n                qbr: 120\n            },\n            {\n                name: \"Patrick Mahomes\",\n                stats: [\n                    [\n                        20,\n                        144,\n                        1101,\n                        11,\n                        6\n                    ]\n                ],\n                qbr: 120\n            },\n            {\n                name: \"Eli Manning\",\n                stats: [\n                    [\n                        30,\n                        144,\n                        1140,\n                        11,\n                        6\n                    ]\n                ],\n                qbr: 120\n            },\n            {\n                name: \"Tom Brady\",\n                stats: [\n                    [\n                        40,\n                        144,\n                        1141,\n                        19,\n                        6\n                    ]\n                ],\n                qbr: 120\n            },\n            {\n                name: \"Ben Rothlisberger\",\n                stats: [\n                    [\n                        110,\n                        144,\n                        1141,\n                        5,\n                        6\n                    ]\n                ],\n                qbr: 120\n            }\n        ];\n        setSimilarPlayers(sp);\n        console.log(similarPlayers);\n    }, []);\n    (0,_mui_joy_styles__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n        components: {\n            JoyCircularProgress: {\n                styleOverrides: {\n                    root: (param)=>{\n                        let { ownerState, theme } = param;\n                        return {\n                            ...ownerState.size === \"xl\" && {\n                                \"--Icon-fontSize\": \"2rem\",\n                                height: \"10000\",\n                                fontSize: theme.vars.fontSize.xl\n                            }\n                        };\n                    }\n                }\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n            container: true,\n            spacing: 2,\n            style: {\n                marginTop: \"1%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 3,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"10%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: player.name\n                            }, void 0, false, {\n                                fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_CircularProgress__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                style: {\n                                    height: \"1000\"\n                                },\n                                size: \"lg\",\n                                determinate: true,\n                                value: player.qbr / 158.3 * 100,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: player.qbr\n                                }, void 0, false, {\n                                    fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            borderStyle: \"solid\",\n                            borderColor: \"lightgray\",\n                            borderRadius: \"5px\",\n                            backgroundColor: \"white\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_svg_radar_chart__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            captions: captions,\n                            data: data,\n                            size: 600\n                        }, void 0, false, {\n                            fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                            lineNumber: 134,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_Stack_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 2.5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            borderStyle: \"solid\",\n                            borderColor: \"lightgray\",\n                            borderRadius: \"5px\",\n                            backgroundColor: \"white\",\n                            paddingBottom: \"5%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: {\n                                    marginLeft: \"5%\"\n                                },\n                                children: \"Similar Players\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                lineNumber: 143,\n                                columnNumber: 15\n                            }, this),\n                            similarPlayers.map((p, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginTop: \"2.5%\",\n                                        marginBottom: \"2.5%\",\n                                        marginLeft: \"8%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().playerButton),\n                                        onMouseOver: {\n                                            backgroundColor: \"#e0e0e0\"\n                                        },\n                                        id: i,\n                                        style: {\n                                            color: colorState[i],\n                                            cursor: \"pointer\",\n                                            backgroundColor: \"transparent\",\n                                            borderStyle: \"solid\",\n                                            borderColor: colorState[i]\n                                        },\n                                        onClick: onSimilarPlayerClick,\n                                        children: p.name\n                                    }, \"button\".concat(i), false, {\n                                        fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                        lineNumber: 147,\n                                        columnNumber: 19\n                                    }, this)\n                                }, \"div\".concat(i), false, {\n                                    fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                                    lineNumber: 146,\n                                    columnNumber: 19\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                        lineNumber: 142,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n            lineNumber: 123,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ewang/Documents/hacklytics/HacklyticsFrontend24/pages/player/qb/[id].js\",\n        lineNumber: 122,\n        columnNumber: 9\n    }, this);\n    function parsePlayer(player) {\n        let dataAvg = new Array();\n        for(let i = 0; i < 5; i++){\n            dataAvg.push(0);\n        }\n        for(let i = 0; i < player.stats.length; i++){\n            for(let j = 0; j < player.stats[i].length; j++){\n                dataAvg[j] += player.stats[i][j];\n            }\n        }\n        dataAvg = dataAvg.map((val)=>val / player.stats.length);\n        const playerCategories = [\n            {\n                name: \"Completions\",\n                scale: 512\n            },\n            {\n                name: \"Attempts\",\n                scale: 719\n            },\n            {\n                name: \"Yards\",\n                scale: 5976\n            },\n            {\n                name: \"TD\",\n                scale: 62\n            },\n            {\n                name: \"Interceptions\",\n                scale: 14\n            }\n        ];\n        const playerObj = {};\n        playerCategories.forEach((category, i)=>{\n            const { name, scale } = category;\n            playerObj[name] = dataAvg[i] / scale;\n        });\n        return playerObj;\n    }\n}\n_s(PlayerView, \"gR5LQ41wEDTC4HwHejZ3y5H2FDg=\");\n_c = PlayerView;\nvar _c;\n$RefreshReg$(_c, \"PlayerView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUt3QjFDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXllci9xYi9baWRdLmpzPzBlODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSYWRhckNoYXJ0IGZyb20gJ3JlYWN0LXN2Zy1yYWRhci1jaGFydCc7XG5pbXBvcnQgJ3JlYWN0LXN2Zy1yYWRhci1jaGFydC9idWlsZC9jc3MvaW5kZXguY3NzJ1xuaW1wb3J0IHsgR3JpZCwgU3RhY2sgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbXVpL2pveS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvam95L1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAbXVpL2pveS9zdHlsZXMnO1xuXG5jb25zdCBjb2xvcnMgPSBbXCIjZTczOWQ1XCIsIFwiI2U3NDY0NlwiLCBcIiNlN2E1MzlcIiwgXCIjNDljYjNjXCIsIFwiIzk4M2RmMFwiXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXJWaWV3KCkge1xuICAgIGNvbnN0IFtwbGF5ZXIsIHNldFBsYXllcl0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzaW1pbGFyUGxheWVycywgc2V0U2ltaWxhclBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtidG5TdGF0ZSwgc2V0QnRuU3RhdGVdID0gdXNlU3RhdGUoW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0pXG4gICAgY29uc3QgW2NvbG9yU3RhdGUsIHNldENvbG9yU3RhdGVdID0gdXNlU3RhdGUoW1wiYmxhY2tcIiwgXCJibGFja1wiLCBcImJsYWNrXCIsIFwiYmxhY2tcIiwgXCJibGFja1wiXSlcbiAgICBjb25zdCBjYXB0aW9ucyA9IHtcbiAgICAgIC8vIGNvbHVtbnNcbiAgICAgIEF0dGVtcHRzOiAnQXR0ZW1wdHMnLFxuICAgICAgQ29tcGxldGlvbnM6ICdDb21wbGV0aW9ucycsXG4gICAgICBJbnRlcmNlcHRpb25zOiAnSW50ZXJjZXB0aW9ucycsXG4gICAgICBURDogJ1REJyxcbiAgICAgIFlhcmRzOiAnWWFyZHMnXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU2ltaWxhclBsYXllckNsaWNrID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChlLnRhcmdldC5pZClcbiAgICAgIGJ0blN0YXRlW2ldID0gIWJ0blN0YXRlW2ldO1xuICAgICAgaWYgKGJ0blN0YXRlW2ldKSB7XG4gICAgICAgICAgc2V0RGF0YShbLi4uZGF0YSwge1xuICAgICAgICAgICAgZGF0YTogcGFyc2VQbGF5ZXIoc2ltaWxhclBsYXllcnNbaV0pLFxuICAgICAgICAgICAgbWV0YTogeyBjb2xvcjogY29sb3JzW2ldLCBwbGF5ZXJOYW1lOiBzaW1pbGFyUGxheWVyc1tpXS5uYW1lIH1cbiAgICAgICAgICB9XSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBjb25zdCB0bXAgPSBjb2xvclN0YXRlO1xuICAgICAgICAgIHRtcFtpXSA9IGNvbG9yc1tpXTtcbiAgICAgICAgICBzZXRDb2xvclN0YXRlKHRtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERhdGEoZGF0YS5maWx0ZXIoKHApID0+IHAubWV0YS5wbGF5ZXJOYW1lICE9IHNpbWlsYXJQbGF5ZXJzW2ldLm5hbWUpKVxuICAgICAgICBjb25zdCB0bXAgPSBjb2xvclN0YXRlO1xuICAgICAgICB0bXBbaV0gPSBcImJsYWNrXCI7XG4gICAgICAgIHNldENvbG9yU3RhdGUodG1wKVxuICAgICAgfVxuICAgICAgc2V0QnRuU3RhdGUoYnRuU3RhdGUpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VXJpID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvXCIpXG4gICAgICAgIGNvbnN0IHV1aWQgPSBzcGxpdFVyaVtzcGxpdFVyaS5sZW5ndGggLSAxXVxuICAgICAgICAvLyBmZXRjaCBwbGF5ZXIgZGF0YSBoZXJlXG4gICAgICAgIHNldFBsYXllcih7XG4gICAgICAgICAgICBuYW1lOiBcIlBleXRvbiBNYW5uaW5nXCIsXG4gICAgICAgICAgICBzdGF0czogW1s4OSwgMTQ0LCAxMTQxLCAxMSwgNl1dLFxuICAgICAgICAgICAgcWJyOiAxMjBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcGxheWVyID0ge1xuICAgICAgICAgIG5hbWU6IFwiUGV5dG9uIE1hbm5pbmdcIixcbiAgICAgICAgICBzdGF0czogW1s4OSwgMTQ0LCAxMTQxLCAxMSwgNl1dLFxuICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsYXllck9iaiA9IHBhcnNlUGxheWVyKHBsYXllcik7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhOiBwbGF5ZXJPYmosXG4gICAgICAgICAgICBtZXRhOiB7IGNvbG9yOiAnYmx1ZScgfVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgICAgICAvLyBGZXRjaCBzaW1pbGFyIHBsYXllcnMgaGVyZVxuICAgICAgICBjb25zdCBzcCA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiSm9zaCBBbGxlblwiLFxuICAgICAgICAgICAgICBzdGF0czogW1sxMCwgMTQ0LCAxMDQxLCAxMSwgNl1dLFxuICAgICAgICAgICAgICBxYnI6IDEyMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJQYXRyaWNrIE1haG9tZXNcIixcbiAgICAgICAgICAgIHN0YXRzOiBbWzIwLCAxNDQsIDExMDEsIDExLCA2XV0sXG4gICAgICAgICAgICBxYnI6IDEyMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkVsaSBNYW5uaW5nXCIsXG4gICAgICAgICAgICBzdGF0czogW1szMCwgMTQ0LCAxMTQwLCAxMSwgNl1dLFxuICAgICAgICAgICAgcWJyOiAxMjBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiVG9tIEJyYWR5XCIsXG4gICAgICAgICAgc3RhdHM6IFtbNDAsIDE0NCwgMTE0MSwgMTksIDZdXSxcbiAgICAgICAgICBxYnI6IDEyMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJCZW4gUm90aGxpc2JlcmdlclwiLFxuICAgICAgICAgIHN0YXRzOiBbWzExMCwgMTQ0LCAxMTQxLCA1LCA2XV0sXG4gICAgICAgICAgcWJyOiAxMjBcbiAgICAgICAgfVxuICAgICAgXTtcblxuICAgICAgc2V0U2ltaWxhclBsYXllcnMoc3ApO1xuICAgICAgY29uc29sZS5sb2coc2ltaWxhclBsYXllcnMpXG4gICAgfSwgW10pO1xuXG5cbiAgICBleHRlbmRUaGVtZSh7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEpveUNpcmN1bGFyUHJvZ3Jlc3M6IHtcbiAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDogKHsgb3duZXJTdGF0ZSwgdGhlbWUgfSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uKG93bmVyU3RhdGUuc2l6ZSA9PT0gJ3hsJyAmJiB7XG4gICAgICAgICAgICAgICAgJy0tSWNvbi1mb250U2l6ZSc6ICcycmVtJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAwMCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHRoZW1lLnZhcnMuZm9udFNpemUueGwsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpblRvcDogXCIxJVwifX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwJVwiIH19PlxuICAgICAgICAgIDxoMT57cGxheWVyLm5hbWV9PC9oMT5cbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzdHlsZT17e2hlaWdodDogXCIxMDAwXCJ9fSBzaXplPXtcImxnXCJ9IGRldGVybWluYXRlIHZhbHVlPXsocGxheWVyLnFici8xNTguMykgKiAxMDB9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57cGxheWVyLnFicn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DaXJjdWxhclByb2dyZXNzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLCBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICAgICAgPFJhZGFyQ2hhcnRcbiAgICAgICAgICAgICAgICBjYXB0aW9ucz17Y2FwdGlvbnN9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBzaXplPXs2MDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mi41fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLCBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgcGFkZGluZ0JvdHRvbTogXCI1JVwiIH19PlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjUlXCJ9fT5TaW1pbGFyIFBsYXllcnM8L2gyPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2ltaWxhclBsYXllcnMubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIuNSVcIiwgbWFyZ2luQm90dG9tOiBcIjIuNSVcIiwgbWFyZ2luTGVmdDogXCI4JVwifX0ga2V5PXtgZGl2JHtpfWB9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJCdXR0b259IG9uTW91c2VPdmVyPXt7YmFja2dyb3VuZENvbG9yOiBcIiNlMGUwZTBcIn19IGtleT17YGJ1dHRvbiR7aX1gfSBpZD17aX0gc3R5bGU9e3tjb2xvcjogY29sb3JTdGF0ZVtpXSwgY3Vyc29yOiAncG9pbnRlcicsIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLCBib3JkZXJTdHlsZTogXCJzb2xpZFwiLCBib3JkZXJDb2xvcjogY29sb3JTdGF0ZVtpXX19IG9uQ2xpY2s9e29uU2ltaWxhclBsYXllckNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAge3AubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICBmdW5jdGlvbiBwYXJzZVBsYXllcihwbGF5ZXIpIHtcbiAgICBsZXQgZGF0YUF2ZyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBkYXRhQXZnLnB1c2goMCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuc3RhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLnN0YXRzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRhdGFBdmdbal0gKz0gcGxheWVyLnN0YXRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGFBdmcgPSBkYXRhQXZnLm1hcCgodmFsKSA9PiB2YWwgLyBwbGF5ZXIuc3RhdHMubGVuZ3RoKTtcbiAgICBjb25zdCBwbGF5ZXJDYXRlZ29yaWVzID0gW3sgbmFtZTogXCJDb21wbGV0aW9uc1wiLCBzY2FsZTogNTEyIH0sIHsgbmFtZTogXCJBdHRlbXB0c1wiLCBzY2FsZTogNzE5IH0sIHsgbmFtZTogXCJZYXJkc1wiLCBzY2FsZTogNTk3NiB9LCB7IG5hbWU6IFwiVERcIiwgc2NhbGU6IDYyIH0sIHsgbmFtZTogXCJJbnRlcmNlcHRpb25zXCIsIHNjYWxlOiAxNCB9XTtcblxuICAgIGNvbnN0IHBsYXllck9iaiA9IHt9O1xuXG4gICAgcGxheWVyQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaSkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lLCBzY2FsZSB9ID0gY2F0ZWdvcnk7XG4gICAgICBwbGF5ZXJPYmpbbmFtZV0gPSBkYXRhQXZnW2ldIC8gc2NhbGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBsYXllck9iajtcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJhZGFyQ2hhcnQiLCJHcmlkIiwiU3RhY2siLCJzdHlsZXMiLCJDaXJjdWxhclByb2dyZXNzIiwiVHlwb2dyYXBoeSIsImV4dGVuZFRoZW1lIiwiY29sb3JzIiwiUGxheWVyVmlldyIsInBsYXllciIsInNldFBsYXllciIsImRhdGEiLCJzZXREYXRhIiwic2ltaWxhclBsYXllcnMiLCJzZXRTaW1pbGFyUGxheWVycyIsImJ0blN0YXRlIiwic2V0QnRuU3RhdGUiLCJjb2xvclN0YXRlIiwic2V0Q29sb3JTdGF0ZSIsImNhcHRpb25zIiwiQXR0ZW1wdHMiLCJDb21wbGV0aW9ucyIsIkludGVyY2VwdGlvbnMiLCJURCIsIllhcmRzIiwib25TaW1pbGFyUGxheWVyQ2xpY2siLCJlIiwiaSIsInBhcnNlSW50IiwidGFyZ2V0IiwiaWQiLCJwYXJzZVBsYXllciIsIm1ldGEiLCJjb2xvciIsInBsYXllck5hbWUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInRtcCIsImZpbHRlciIsInAiLCJzcGxpdFVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwidXVpZCIsImxlbmd0aCIsInN0YXRzIiwicWJyIiwicGxheWVyT2JqIiwic3AiLCJjb21wb25lbnRzIiwiSm95Q2lyY3VsYXJQcm9ncmVzcyIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsIm93bmVyU3RhdGUiLCJ0aGVtZSIsInNpemUiLCJoZWlnaHQiLCJmb250U2l6ZSIsInZhcnMiLCJ4bCIsImRpdiIsImNvbnRhaW5lciIsInNwYWNpbmciLCJzdHlsZSIsIm1hcmdpblRvcCIsIml0ZW0iLCJ4cyIsIm1hcmdpbkxlZnQiLCJoMSIsImRldGVybWluYXRlIiwidmFsdWUiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0JvdHRvbSIsImgyIiwibWFwIiwibWFyZ2luQm90dG9tIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwicGxheWVyQnV0dG9uIiwib25Nb3VzZU92ZXIiLCJjdXJzb3IiLCJvbkNsaWNrIiwiZGF0YUF2ZyIsIkFycmF5IiwicHVzaCIsImoiLCJ2YWwiLCJwbGF5ZXJDYXRlZ29yaWVzIiwic2NhbGUiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/player/qb/[id].js\n"));

/***/ })

});