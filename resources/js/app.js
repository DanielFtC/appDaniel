require('./bootstrap');
require('./pages/adminlte');
require('./pages/demo');

window.Vue = require('vue');

import router from './router'
import store from './store'
import Vue from 'vue'

import Swal from 'sweetalert2';
window.Swal = Swal;
const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.toast = toast;

// Validaciones
import { Form, HasError, AlertError } from 'vform';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


// VueProgressBar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

  Vue.filter('tolowercase', function (value) {
    value = value.toLowerCase().split(' ');
    return value.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  })

  Vue.filter('uppercase', function (value) {
    return value.toUpperCase();
  })

  const app = new Vue({
    el: '#app',
    router,
    store
});
