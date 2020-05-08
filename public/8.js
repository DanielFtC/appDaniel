(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var app = this;
    var id = app.$route.params.id;
    app.empresaId = id;
    axios.get('/api/administrador/empresas/' + id).then(function (res) {
      app.empresas = res.data;
    })["catch"](function () {
      alert("Could not load your Empresa");
    });
  },
  data: function data() {
    return {
      empresaId: null,
      empresas: {
        Nombre_Comercial: '',
        Razon_Social: '',
        Nombre_Representante: '',
        Apellido_Representante: '',
        ruc: '',
        telefono: '',
        celular: '',
        id_departamento: '',
        id_provincia: '',
        id_distrito: '',
        Direccion: '',
        Descripcion: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card card-success" }, [
      _c(
        "div",
        { staticClass: "card-header" },
        [
          _c("b", [_vm._v("Informacion de Empresa")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "float-right",
              attrs: { to: { name: "VisualizarEmpresa" } }
            },
            [_vm._v("\n                Atras\n            ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("section", { staticClass: "content" }, [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "card card-primary" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _c("h3", { staticClass: "card-title" }, [
                      _vm._v(
                        _vm._s(_vm._f("uppercase")(_vm.empresas.Razon_Social))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("strong", [_vm._v("Razon Social")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.empresas.Razon_Social) +
                          "\n                                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Nombre Comercial")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(_vm.empresas.Nombre_Comercial))
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Representante")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        _vm._s(_vm.empresas.Nombre_Representante) +
                          " " +
                          _vm._s(_vm.empresas.Apellido_Representante)
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("RUC")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(_vm.empresas.ruc))
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Numeros de Contacto")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(
                        _vm._s(_vm.empresas.celular) +
                          " / " +
                          _vm._s(_vm.empresas.telefono)
                      )
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Ubicacion")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(" Pendiente")
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Direccion")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(_vm.empresas.Direccion))
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Referencia")]),
                    _vm._v(" "),
                    _vm.empresas.Referencia
                      ? _c("p", { staticClass: "text-muted" }, [
                          _vm._v(_vm._s(_vm.empresas.Referencia))
                        ])
                      : _c("p", { staticClass: "text-muted" }, [
                          _vm._v("Sin Referencia")
                        ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Informacion.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Informacion.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Informacion.vue?vue&type=template&id=4ba58fd6& */ "./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6&");
/* harmony import */ var _Informacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Informacion.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Informacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Empresas/Informacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Informacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Informacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Informacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Informacion.vue?vue&type=template&id=4ba58fd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Empresas/Informacion.vue?vue&type=template&id=4ba58fd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Informacion_vue_vue_type_template_id_4ba58fd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);