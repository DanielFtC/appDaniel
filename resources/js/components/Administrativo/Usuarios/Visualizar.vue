<template>
    <div>
        <div class="card card-primary">
            <div class="card-header">
               <b> Visualizar Usuarios  -  <span>{{pagination.total}} Registros</span></b>
                <!-- <router-link :to="{name: 'RegistrarUsuario'}" class="float-right">
                    Agregar
                </router-link> -->
            </div>
            <div class="card-body">
                <div class="table-responsive-xl">
                    <table class="table table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                           <th scope="col">N° Lista</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo Electronico</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Opciones</th>
                            <!-- <th scope="col">Opciones</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(usuario,index) in usuarios" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ usuario.name | tolowercase}}</td>
                                <td>{{ usuario.email }}</td>
                                <td>{{ usuario.created_at }}</td>
                                <td>{{ usuario.updated_at }}</td>
                                <td>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Opciones
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <router-link class="dropdown-item" :to="{name: 'EditarUsuario', params: {id: usuario.id,name:usuario.name}}">
                                                Editar
                                            </router-link>
                                            <router-link class="dropdown-item" :to="{name: 'PerfilUsuario', params: {id: usuario.id}}">
                                                Perfl
                                            </router-link>
                                            <a href="#" class="dropdown-item" v-on:click="deleteEntry(usuario.id, index)">
                                                Eliminar
                                            </a>
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
                        <button class="btn page-link" v-on:click="fetchPaginationUsers(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
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
                        <button class="btn page-link" v-on:click="fetchPaginationUsers(pagination.next_page_url)" :disabled="!pagination.next_page_url">
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
            return {
                usuarios: [],
                url:'/api/administrativo/usuarios',
                pagination:[]
            }
        },
        mounted() {
            var app = this;
            app.VerUsuarios();
        },
        methods: {
            VerUsuarios(){
                var app = this;
                axios.get(app.url)
                .then(res => {
                    app.usuarios = res.data.data;
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
            fetchPaginationUsers(url) {
                var app = this;
                app.url = url;
                app.VerUsuarios();
            },
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/administrativo/usuarios/' + id)
                        .then(res => {
                            app.usuarios.splice(index, 1);
                        })
                        .catch(res => {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>