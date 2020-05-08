(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      areas: {
        nombre: ''
      },
      vacio: {
        boton: {
          name: 'Agregar'
        }
      },
      loading: []
    };
  },
  methods: {
    click: function click(index) {
      console.time("Algun Identificador");
      var app = this;
      var newArea = app.areas;
      Vue.set(app.loading, index, 1);
      var app = this;
      setTimeout(function () {
        axios.post('/api/administrador/almacen/area', newArea).then(function (res) {
          app.$router.push({
            path: '/Almacen/Area/Visualizar'
          });
          app.$Progress.start();
          toast.fire({
            icon: 'success',
            title: 'Registro Creado'
          });
        })["catch"](function (res) {
          app.$Progress.fail();
          toast.fire({
            icon: 'error',
            title: 'Error en los Datos'
          });
          console.log(res);
        });
        Vue.set(app.loading, index, 0);
      }, 2000);
      console.timeEnd("Algun Identificador");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "card card-primary" },
      [
        _c(
          "div",
          { staticClass: "card-header" },
          [
            _vm._v("\n                Registrar Area\n                "),
            _c(
              "router-link",
              {
                staticClass: "float-right",
                attrs: { to: { name: "almacen.area.visualizar" } }
              },
              [_vm._v("Atras")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Nombre")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.areas.nombre,
                  expression: "areas.nombre"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Escribir Nombre" },
              domProps: { value: _vm.areas.nombre },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.areas, "nombre", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.vacio, function(item, index) {
          return _c("div", { key: index, staticClass: "card-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "submit" },
                on: {
                  click: function($event) {
                    return _vm.click(index)
                  }
                }
              },
              [
                _vm._v(_vm._s(item.name) + " \n                    "),
                _vm.loading[index]
                  ? _c("i", { staticClass: "fa fa-spinner fa-spin" })
                  : _vm._e()
              ]
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Administrador/Almacen/Areas/Registrar.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Administrador/Almacen/Areas/Registrar.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=63554575& */ "./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Administrador/Almacen/Areas/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=63554575& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Administrador/Almacen/Areas/Registrar.vue?vue&type=template&id=63554575&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_63554575___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);