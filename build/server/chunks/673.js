"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Blog)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/utils/postnewest.js
async function postNewest() {
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");
    if (res.status === 200) {
        return res.json();
    } else {
        throw new Error("error fetching response");
    }
}

;// CONCATENATED MODULE: ./src/app/blog/page.js



async function Blog() {
    const newposts = await postNewest();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto my-10 p-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: newposts.map((newpost)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: `/blog/${newpost.id}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: newpost.img,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "card-title",
                                            children: newpost.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: newpost.short
                                        })
                                    ]
                                })
                            ]
                        })
                    }, newpost.id)
                });
            })
        })
    });
}


/***/ })

};
;