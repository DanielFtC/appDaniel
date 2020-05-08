<template>
    <div>
       <div class="card card-primary">
           <div class="card-header">
               <b>Visualizar Empresas</b>
                <router-link :to="{name: 'RegistrarEmpresa'}" class="float-right">
                    Agregar
                </router-link>
           </div>
           <div class="card-body">
                <div class="table-responsive-xl">
                    <table class="table table-hover table-striped table-bordered table-sm text-center">
                        <thead>
                            <tr>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Nombre Comercial</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(empresa,index) in empresas" :key="index">
                                <td>{{index +1}}</td>
                                <td>{{empresa.Nombre_Comercial | tolowercase}}</td>
                                <td>{{empresa.celular}} / {{empresa.telefono}}</td>
                                <td>{{empresa.created_at}}</td>
                                <td>{{empresa.updated_at}}</td>
                                <td>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Opciones
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <router-link class="dropdown-item" :to="{name: 'EditarEmpresa', params: {id: empresa.id}}">
                                                Editar 
                                            </router-link>
                                            <router-link class="dropdown-item" :to="{name: 'InformacionEmpresa', params: {id: empresa.id}}">
                                                Mas Informacion
                                            </router-link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
           <div class="card-footer">
               <ul class="pagination float-right">
                    <li class="page-item">
                        <button class="btn page-link" v-on:click="fetchPaginationEmpresas(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
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
                        <button class="btn page-link" v-on:click="fetchPaginationEmpresas(pagination.next_page_url)" :disabled="!pagination.next_page_url">
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
    data(){
        return{
            empresas:[],
            pagination: [],
            url:"/api/administrador/empresas"
        }
    },
    mounted(){
        var app = this;
        app.VerEmpresa();
    },
    methods:{
        VerEmpresa(){
            var app = this;
            axios.get(app.url)
            .then(res => {
                app.empresas = res.data.data;
                app.MakePagination(res.data);
            })
            // .catch(res => {
            //     app.$router.replace('/SinAcceso');
            // });
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
        fetchPaginationEmpresas(url) {
            var app = this;
            app.url = url;
            app.VerEmpresa();
        },
    }   
}
</script>