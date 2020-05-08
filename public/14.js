(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      distritos: []
    };
  },
  mounted: function mounted() {
    var app = this;
    app.VerDistritos();
  },
  methods: {
    VerDistritos: function VerDistritos() {
      var app = this;
      axios.get('/api/administrador/distritos').then(function (res) {
        app.distritos = res.data;
      })["catch"](function (res) {
        app.$router.replace('/SinAcceso');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
          _c("b", [_vm._v("Visualizar Distrito")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "float-right",
              attrs: { to: { name: "RegistrarDistrito" } }
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
                _vm._l(_vm.distritos, function(distrito, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(index + 1))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("tolowercase")(distrito.nombre)))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(distrito.created_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(distrito.updated_at))]),
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
        _vm._v("\n           Paginador Pendiente\n       ")
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Location/Distrito/Visualizar.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Distrito/Visualizar.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=template&id=72d3fe3c& */ "./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c&");
/* harmony import */ var _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Visualizar.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Location/Distrito/Visualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Visualizar.vue?vue&type=template&id=72d3fe3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Location/Distrito/Visualizar.vue?vue&type=template&id=72d3fe3c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Visualizar_vue_vue_type_template_id_72d3fe3c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);