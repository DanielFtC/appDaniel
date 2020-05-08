<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <b>Visualizar Areas -  <span>{{pagination.total}} Registros</span></b>
        <router-link :to="{name: 'almacen.area.registrar'}" class="float-right">Agregar</router-link>
      </div>
      <div class="card-body">
        <div class="table-responsive-xl">
          <table class="table table-hover table-striped table-bordered table-sm text-center">
            <thead>
              <tr>
                <th scope="col">N° Lista</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha de Creacion</th>
                <th scope="col">Fecha de Actualizacion</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(area,index) in areas" :key="index">
                <td>{{index + 1}}</td>
                <td>{{area.nombre | tolowercase}}</td>
                <td>{{area.created_at}}</td>
                <td>{{area.updated_at}}</td>
                <td>
                 <a href="#">Editar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer">
        <ul class="pagination float-right">
          <li class="page-item">
            <button class="btn page-link" v-on:click="fetchPaginationAreas(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
                Anterior
            </button>
          </li>
          <li class="page-item ">
            <a href="#"  class="page-link">{{pagination.current_page}}</a>
          </li>
           <li class="page-item ">
            <a href="#"  class="page-link">de</a>
          </li>
           <li class="page-item">
            <a href="#" class="page-link">{{pagination.last_page}}</a>
          </li>
          <li class="page-item">
            <button class="btn page-link" v-on:click="fetchPaginationAreas(pagination.next_page_url)" :disabled="!pagination.next_page_url">
                Siguiente
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      areas: [],
      url: "/api/administrador/almacen/area",
      pagination: [],
      loading:[]
    };
  },
  mounted() {
    var app = this;
    app.VerAreas();
  },
  methods: {
    VerAreas() {
      var app = this;
      axios.get(app.url)
      .then(res => {
        app.areas = res.data.data;
        app.MakePagination(res.data);
      })
      .catch(res => {
        app.$router.replace('/SinAcceso');
      });
    },
    MakePagination(data) {
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
    fetchPaginationAreas(url) {
      var app = this;
      app.url = url;
      app.VerAreas();
    },
  }
};
</script>