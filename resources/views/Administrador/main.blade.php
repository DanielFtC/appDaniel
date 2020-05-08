@include('Administrador.content.navbar')
@include('Administrador.content.sidebar')
  <div class="content-wrapper">
    <section class="content">
     <div class="container-fluid">
     <br>
     <router-view :key='$route.path'></router-view>
     <vue-progress-bar></vue-progress-bar>
     </div>
    </section>
  </div>
  @include('Administrador.content.footer')
  <aside class="control-sidebar control-sidebar-dark">
  </aside>