"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 2883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/utils/postCategory.js
async function postCategories() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-categories");
    if (res.status === 200) {
        return res.json();
    } else {
        throw new Error("error fetching post");
    }
}

;// CONCATENATED MODULE: ./src/app/Components/blognavbar.js



async function BlogNavbar() {
    const posts = await postCategories();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "navbar  mt-20 bg-base-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbar-start",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "dropdown absolute right-0 h-16 w-16 ..",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            tabindex: "0",
                            class: "btn btn-ghost lg:hidden ",
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
                                    d: "M4 6h20M15 12h8m-16 6h16"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            tabindex: "0",
                            class: "menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 -m-40 -mt-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: posts.map((post)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-sm hover:text-base",
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "pb-5",
                                            children: post.name
                                        })
                                    });
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbar-center hidden lg:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    class: "menu menu-horizontal px-1 -mb-3.5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "flex space-x-12",
                        children: posts.map((post)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "pb-5",
                                    children: post.name
                                })
                            });
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "navbar-end"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/blog/layout.js




async function BlogLayout({ children }) {
    const posts = await postCategories();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BlogNavbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "mt-10",
                children: children
            })
        ]
    });
}


/***/ })

};
;