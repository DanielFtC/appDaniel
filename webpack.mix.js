const mix = require('laravel-mix');

mix
   .styles([
      'resources/vendor/fontawesome-free-5.12.1-web/css/all.min.css',
      'resources/vendor/icheck-bootstrap/icheck-bootstrap.min.css',
      'resources/css/adminlte.css',
      'resources/vendor/datatables-bs4/css/dataTables.bootstrap4.css',
      'resources/vendor/datatables-bs4/css/dataTables.bootstrap4.min.css',
      'resources/vendor/toastr/toastr.min.css'
      ],'public/css/app.css')

   .js('resources/js/app.js','public/js')
   .scripts([
      'resources/vendor/jquery/jquery.min.js',
      'resources/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'resources/js/adminlte.js.map',
      'resources/js/pages/adminlte.js',
      'resources/js/pages/bootstrap.js',
      'resources/vendor/datatables-bs4/js/dataTables.bootstrap4.js',
      'resources/vendor/datatables-bs4/js/dataTables.bootstrap4.min.js',
      'resources/vendor/jquery/jquery.min.js',
      'resources/vendor/toastr/toastr.min.js'
   ],'public/js/vendor.js')

   .copy('resources/vendor/fontawesome-free-5.12.1-web/webfonts','public/webfonts')
   
   .copy('resources/img','public/img')

   .version()
;