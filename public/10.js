(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
      empresas: [],
      pagination: [],
      url: "/api/administrador/empresas"
    };
  },
  mounted: function mounted() {
    var app = this;
    app.VerEmpresa();
  },
  methods: {
    VerEmpresa: function VerEmpresa() {
      var app = this;
      axios.get(app.url).then(function (res) {
        app.empresas = res.data.data;
        app.MakePagination(res.data);
      }); // .catch(res => {
      //     app.$router.replace('/SinAcceso');
      // });
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
    fetchPaginationEmpresas: function fetchPaginationEmpresas(url) {
      var app = this;
      app.url = url;
      app.VerEmpresa();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
          _c("b", [_vm._v("Visualizar Empresas")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "float-right",
              attrs: { to: { name: "RegistrarEmpresa" } }
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
                _vm._l(_vm.empresas, function(empresa, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("tolowercase")(empresa.Nombre_Comercial))
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(empresa.celular) +
                          " / " +
                          _vm._s(empresa.telefono)
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(empresa.created_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(empresa.updated_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "dropdown" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-toggle",
                            attrs: {
                              href: "#",
                              role: "button",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        Opciones\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenuLink" }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  to: {
                                    name: "EditarEmpresa",
                                    params: { id: empresa.id }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Editar \n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  to: {
                                    name: "InformacionEmpresa",
                                    params: { id: empresa.id }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                            Mas Informacion\n                                        "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
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
                    return _vm.fetchPaginationEmpresas(
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
          _vm._m(1),
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
                    return _vm.fetchPaginationEmpresas(
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Identificacion")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Nombre Comercial")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Contacto")]),
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
    return _c("li", { staticClass: "page-item " }, [
      _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
        _vm._v("de")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Visualizar.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Visualizar.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=template&id=eaf3f64c& */ "./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c&");
/* harmony import */ var _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Empresas/Visualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=template&id=eaf3f64c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Visualizar.vue?vue&type=template&id=eaf3f64c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_eaf3f64c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);