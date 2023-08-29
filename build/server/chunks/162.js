exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 9501:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 3595:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 2392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7155);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/Components/footer.js


function Footer() {
    return /*#__PURE__*/ _jsxs("footer", {
        class: "footer p-2 bg-base-300 text-base-content absolute inset-x-0 bottom-10 h-8",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        class: "footer-title",
                        children: "Services"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        class: "link link-hover",
                        children: "Home"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/about",
                        class: "link link-hover",
                        children: "About"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/blog",
                        class: "link link-hover",
                        children: "Blog"
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: "/contact",
                        class: "link link-hover",
                        children: "Contact"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {}),
            /*#__PURE__*/ _jsx("div", {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Components/navbar.js


function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "navbar fixed top-0 shadow bg-base-200 flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbar-start",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "dropdown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            tabindex: "0",
                            class: "btn btn-ghost lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M4 6h16M4 12h8m-8 6h16"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            tabindex: "0",
                            class: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog",
                                        children: "Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar-center hidden lg:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "menu menu-horizontal px-1 ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "flex space-x-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "text-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "text-lg",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: "text-lg",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/blog",
                                    className: "text-lg",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "text-lg",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbar-end"
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.js





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;