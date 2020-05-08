<template>
    <div>
        <div class="card card-primary">
            <div class="card-header">
               <b> Visualizar Usuarios  -  <span>{{pagination.total}} Registros</span></b>
                <router-link :to="{name: 'RegistrarUsuario'}" class="float-right">
                    Agregar
                </router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive-xl">
                    <table class="table table table-hover table-striped table-bordered table-sm text-center">
                        <thead> 
                            <tr>
                           <th scope="col">N° Lista</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo Electronico</th>
                            <th scope="col">Accseso</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Opciones</th>
                            <!-- <th scope="col">Opciones</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(usuario,index) in usuarios" :key="index">
                                <td>{{ index + 1 }}</td>

                                <td v-if="usuario.flag_Matriculador === 'activo' && usuario.flag_Cobrador === 'activo'">
                                     <i class="nav-icon fas fa-id-badge text-red" title="Matriculador"></i> 
                                    <i class="nav-icon fas fa-id-badge text-success" title="Cobrador"></i>&nbsp;
                                    {{ usuario.username | tolowercase}} 
                                </td>
                                <td v-else-if="usuario.flag_Matriculador === 'activo'">
                                    <i class="nav-icon fas fa-id-badge float-right text-red" title="Matriculador"></i>
                                    {{ usuario.username | tolowercase}}
                                </td>
                                <td v-else-if="usuario.flag_Cobrador === 'activo'">
                                     <i class="nav-icon fas fa-id-badge float-right text-success" title="Cobrador"></i>
                                    {{ usuario.username | tolowercase}}
                                </td>
                                <td v-else>{{usuario.username}}</td>

                                <td>{{ usuario.email }}</td>

                                <td v-if="usuario.id_rol === 1">Administrador</td>
                                <td v-else-if="usuario.id_rol === 2">Administrativo</td>
                                <td v-else-if="usuario.id_rol === 3">Asesor</td>
                                <td v-else-if="usuario.id_rol === 4">Recuperador</td>
                                <td v-if="!usuario.id_rol">Sin Ningun Rol</td>

                                <td>{{ usuario.created_at }}</td>
                                <td>{{ usuario.updated_at }}</td>
                                <td>
                                    <div class="dropdown">
                                        <a class="dropdown-toggle text" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <a href="#" class="dropdown-item" title="Asignar Matriculador" @click="AsignMatriculador(usuario)">
                                                Matriculador
                                            </a>
                                            <a href="#" class="dropdown-item" title="Asignar Cobrador" @click="AsignCobrador(usuario)">
                                                Cobrador
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br>
             <div class="card-footer">
                 Referencia : 
                 <i class="nav-icon fas fa-id-badge text-red" title="Matriculador"></i> - 
                 <i class="nav-icon fas fa-id-badge text-success" title="Cobrador"></i>
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
                url:'/api/administrador/usuarios',
                pagination:[],
                matricualdor:[],
                cobrador:[]
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
                    axios.delete('/api/administrador/usuarios/' + id)
                        .then(res => {
                            app.usuarios.splice(index, 1);
                        })
                        .catch(res => {
                            alert("Could not delete company");
                        });
                }
            },
            AsignMatriculador(usuario){
                var app = this.matricualdor;
                app.id_usuario =  usuario.id ,
                app.id_departamento = usuario.id_departamento,
                app.id_provincia = usuario.id_provincia,
                app.id_distrito = usuario.id_distrito 

                var appMatriculador = {
                    id_usuario : app.id_usuario,
                    id_departamento : app.id_departamento,
                    id_provincia : app.id_provincia ,
                    id_distrito : app.id_distrito
                }
                axios.post('/api/administrador/matriculador', appMatriculador)
                    .then(res => {
                        var app = this
                        // app.$router.push({path: '/Usuarios/Visualizar'});
                        app.$Progress.start();
                        toast.fire({icon: 'success',title: 'Registro Creado'});

                        const x = document.getElementById(usuario.id);
                        const params = {
                            flag_Matriculador: 'activo'
                        }
                        console.log(params)
                            axios.patch(`/api/administrador/flagMatriculador/${usuario.id}`,params);
                            app.VerUsuarios();
                    })
                    .catch(res => {
                        var app = this
                        app.$Progress.fail();
                        toast.fire({  icon: 'error',title: 'Error en los Datos'});
                        console.log(res)
                    });
            },
            AsignCobrador(usuario){
                var app = this.cobrador;
                app.id_usuario =  usuario.id ,
                app.id_departamento = usuario.id_departamento,
                app.id_provincia = usuario.id_provincia,
                app.id_distrito = usuario.id_distrito 

                var appCobrador = {
                    id_usuario : app.id_usuario,
                    id_departamento : app.id_departamento,
                    id_provincia : app.id_provincia ,
                    id_distrito : app.id_distrito
                }
                axios.post('/api/administrador/cobrador', appCobrador)
                .then(res => {
                    var app = this
                    // app.$router.push({path: '/Usuarios/Visualizar'});
                    app.$Progress.start();
                    toast.fire({icon: 'success',title: 'Registro Creado'});

                    const x = document.getElementById(usuario.id);
                    const params = {
                        flag_Cobrador: 'activo'
                    }
                    console.log(params)
                        axios.patch(`/api/administrador/flagCobrador/${usuario.id}`,params);
                        app.VerUsuarios();
                })
                .catch(res => {
                    var app = this
                    app.$Progress.fail();
                    toast.fire({  icon: 'error',title: 'Error en los Datos'});
                    console.log(res)
                });
            },
        }
    }
</script>
