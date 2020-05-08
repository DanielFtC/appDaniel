<template>
    <div>
        <form v-on:submit.prevent="saveForm()">
            <div class="card card-warning">
                <div class="card-header">
                    <b>Registrar Usuario</b>
                    <router-link :to="{name: 'VisualizarUsuario'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="card card-info"> <!-- Inicio Card de Datos Personales -->
                        <div class="card-header">
                            Datos Personales
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Nombre </label>
                                        <input type="text" v-model="usuarios.name" class="form-control" placeholder="Escribir Nombre">
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Apellidos</label>
                                        <input type="text" v-model="usuarios.apellido" class="form-control" placeholder="Escribir Apellidos">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Tipo Documento</label>
                                        <select class="custom-select" v-model="usuarios.tipo_documento">
                                           <option value='' disabled selected>Selecionar..</option>
                                           <option>Dni</option>
                                           <option>RUC</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>N° Documento</label>
                                        <input type="text" v-model="usuarios.dni" class="form-control" placeholder="Escribir solo 8 Digitos">

                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Sexo</label>
                                        <select class="custom-select" v-model="usuarios.sexo">
                                           <option value='' disabled selected>Selecionar..</option>
                                           <option>Masculino</option>
                                           <option>Femenino</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Celular</label>
                                        <input type="text" v-model="usuarios.celular" class="form-control" placeholder="Escribir solo 9 Digitos">
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                       <label>Telefono</label>
                                        <input type="text" v-model="usuarios.telefono" class="form-control" placeholder="Escribir solo 7 Digitos">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Escribir Descripcion</label>
                                        <textarea class="form-control" v-model="usuarios.Descripcion" rows="3" placeholder="Escribir Descripcion"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- Fin de  Card de Datos Personales -->
                    <div class="card card-info"><!-- Inicio Card de Datos de Ubicacion -->
                        <div class="card-header">
                            Datos de Ubicacion
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Departamento</label>
                                        <select class="custom-select" v-model="usuarios.id_departamento" @change='getProvincia()'>
                                            <option value='' disabled selected>Seleccionar Departamento</option>
                                            <option v-for="(departamento,index) in departamentos" :key="index" :value='departamento.id'>
                                                {{ departamento.nombre | tolowercase}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Provincia</label>
                                        <select class="custom-select" v-model="usuarios.id_provincia" @change='getDistrito()'>
                                            <option value='' disabled selected>Seleccionar Provincia</option>
                                                <option v-for="(provincia,index) in provincias" :key="index" :value='provincia.id_provincia'>
                                                {{ provincia.ProvinciaNombre | tolowercase}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Distrito</label>
                                        <select class="custom-select" v-model="usuarios.id_distrito">
                                            <option value='' disabled selected>Seleccionar Distrito</option>
                                            <option v-for="(distrito,index) in distritos" :key="index" :value='distrito.id_distrito'>
                                                {{ distrito.DistritoNombre | tolowercase}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Direccion</label>
                                        <input type="text" v-model="usuarios.Direccion" class="form-control" placeholder="Escribir Direccion">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- Fin de  Card de Datos de Ubicacion -->
                    <div class="card card-info"><!-- Inicio Card de Datos Usuario -->
                        <div class="card-header">
                            Datos de Usuario
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Usuario </label>
                                        <input type="text" v-model="usuarios.username" class="form-control" placeholder="Escribir Usuario">
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Correo Electronico</label>
                                        <input type="email" v-model="usuarios.email" class="form-control" id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" placeholder="Escribir Correo Electronico">
                                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Contraseña</label>
                                        <input type="password" v-model="usuarios.password" class="form-control" placeholder="Escribir Contraseña">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Volver a Escribir Contraseña</label>
                                        <input type="text" v-model="usuarios.save_password" class="form-control" placeholder="Volver a Ingresar Contraseña">
                                    </div>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Elegir Rol</label>
                                        <select class="custom-select" v-model="usuarios.id_rol">
                                            <option value='' disabled selected>Seleccionar Rol</option>
                                            <option v-for="(rol,index) in roles" :key="index" :value='rol.id'>
                                                {{ rol.nombre | tolowercase}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- Fin de  Card de Datos de Usuario -->
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            let app = this;
            app.getDepartamento()
            app.getProvincia()
            app.fetchData()
            let id = app.$route.params.id;
            app.usuarioId = id;
            axios.get('/api/administrador/usuarios/' + id)
                .then(res => {
                    app.usuarios = res.data;
                })
                .catch(function () {
                    alert("Could not load your User")
                    
                });
        },
        data: function () {
            return {
                roles:[],
                departamentos:[],
                provincias:[],
                distritos:[],
                usuarioId: null,
                usuarios: {
                    username:'',
                    name:'',
                    apellido:'',
                    celular:'',
                    telefono:'',
                    dni:'',
                    tipo_documento:'',
                    Descripcion:'',
                    sexo:'',
                    email:'',
                    save_password:'',
                    Direccion:'',
                }
            }
        },
        methods: {
            saveForm() {
                var app = this;
                var newUsuario = app.usuarios;
                axios.patch('/api/administrador/usuarios/' + app.usuarioId, newUsuario)
                    .then( res => {
                        app.$router.replace('/Usuarios/Visualizar');
                        app.$Progress.start();
                    toast.fire({icon: 'success',title: 'Registro Creado'});
                    })
                    .catch(res => {
                        console.log(res);
                        app.$Progress.fail();
                        toast.fire({  icon: 'error',title: 'Error en los Datos'});
                    });
            },
            fetchData(){
                var app = this
                axios.get('/api/administrador/roles')
                .then(res => {
                    app.roles = res.data;
                    // console.log(res)
                })
            },
            getDepartamento(state){
                axios.get('/api/administrador/Empresas/GetDepartamento')
                .then(function (response) {
                    this.departamentos = response.data;
                }.bind(this));
            },
            getProvincia(state) {
                axios.get('/api/administrador/Empresas/GetProvincia',{
                    params: {
                        id_departamento: this.usuarios.id_departamento
                    }
                })
                .then(function(response){
                    this.provincias = response.data;
                }.bind(this));
            },
            getDistrito(state) {
                axios.get('/api/administrador/Empresas/GetDistrito',{
                    params: {
                        id_provincia: this.usuarios.id_provincia
                    }
                })
                .then(function(response){
                    this.distritos = response.data;
                }.bind(this));
            }
        }
    }
</script>