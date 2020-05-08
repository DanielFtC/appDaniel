(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      provincias: [],
      pagination: [],
      url: '/api/administrador/provincias'
    };
  },
  mounted: function mounted() {
    var app = this;
    app.VerProvincias();
  },
  methods: {
    VerProvincias: function VerProvincias() {
      var app = this;
      axios.get(app.url).then(function (res) {
        app.provincias = res.data.data;
        app.MakePagination(res.data);
      })["catch"](function (res) {
        app.$router.replace('/SinAcceso');
      });
    },
    MakePagination: function MakePagination(data) {
      var app = this;
      var pagination = {
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
        total: data.total
      };
      app.pagination = pagination;
    },
    fetchPaginationUsers: function fetchPaginationUsers(url) {
      var app = this;
      app.url = url;
      app.VerProvincias();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card card-primary" }, [
      _c(
        "div",
        { staticClass: "card-header" },
        [
          _c("b", [
            _vm._v("Visualizar Provincia  -  "),
            _c("span", [_vm._v(_vm._s(_vm.pagination.total) + " Registros")])
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "float-right",
              attrs: { to: { name: "RegistrarProvincia" } }
            },
            [_vm._v("\n                Agregar\n            ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "table-responsive-xl" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-hover table-striped table-bordered table-sm text-center"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.provincias, function(provincia, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("tolowercase")(provincia.nombre)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(provincia.created_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(provincia.updated_at))]),
                    _vm._v(" "),
                    _vm._m(1, true)
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c("ul", { staticClass: "pagination float-right" }, [
          _c("li", { staticClass: "page-item" }, [
            _c(
              "button",
              {
                staticClass: "btn page-link",
                attrs: { disabled: !_vm.pagination.prev_page_url },
                on: {
                  click: function($event) {
                    return _vm.fetchPaginationUsers(
                      _vm.pagination.prev_page_url
                    )
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Anterior\n                    "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item " }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.pagination.current_page))
            ])
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.pagination.last_page))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "page-item" }, [
            _c(
              "button",
              {
                staticClass: "btn page-link",
                attrs: { disabled: !_vm.pagination.next_page_url },
                on: {
                  click: function($event) {
                    return _vm.fetchPaginationUsers(
                      _vm.pagination.next_page_url
                    )
                  }
                }
              },
              [
                _vm._v(
                  "\n                        Siguiente\n                    "
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("N° Lista")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fecha de Creacion")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [
          _vm._v("Fecha de Actualizacion")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("a", { attrs: { href: "#" } }, [
        _vm._v(
          "\n                                    Editar  \n                                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "page-item " }, [
      _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
        _vm._v("de")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Location/Provincia/Visualizar.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Provincia/Visualizar.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=template&id=f561f15e& */ "./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e&");
/* harmony import */ var _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Location/Provincia/Visualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=template&id=f561f15e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Provincia/Visualizar.vue?vue&type=template&id=f561f15e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_f561f15e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);