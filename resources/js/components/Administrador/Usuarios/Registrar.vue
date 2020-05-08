 <template>
    <div>
        <form v-on:submit.prevent="saveForm()">
            <div class="card card-primary">
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
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Escribir Nombre"
                                        name="name" :class="{ 'is-invalid': form.errors.has('name') }">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Apellidos</label>
                                        <input type="text" v-model="form.apellido" class="form-control" placeholder="Escribir Apellidos"
                                        name="apellido" :class="{ 'is-invalid': form.errors.has('apellido') }">
                                        <has-error :form="form" field="apellido"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Tipo Documento</label>
                                        <select class="custom-select" v-model="form.tipo_documento" 
                                        name="tipo_documento" :class="{ 'is-invalid': form.errors.has('tipo_documento') }">
                                           <option value='' disabled selected>Selecionar..</option>
                                           <option>Dni</option>
                                           <option>RUC</option>
                                        </select>
                                        <has-error :form="form" field="tipo_documento"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>N° Documento</label>
                                        <input type="text" v-model="form.dni" class="form-control" placeholder="Escribir solo 8 Digitos"
                                        maxlength="8" name="dni" :class="{ 'is-invalid': form.errors.has('dni') }">
                                        <has-error :form="form" field="dni"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Sexo</label>
                                        <select class="custom-select" v-model="form.sexo"
                                        name="sexo" :class="{ 'is-invalid': form.errors.has('sexo') }">
                                        <has-error :form="form" field="sexo"></has-error>
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
                                        <input type="text" v-model="form.celular" class="form-control" placeholder="Escribir solo 9 Digitos"
                                        maxlength="9" name="celular" :class="{ 'is-invalid': form.errors.has('celular') }">
                                        <has-error :form="form" field="celular"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                       <label>Telefono</label>
                                        <input type="text" v-model="form.telefono" class="form-control" placeholder="Escribir solo 7 Digitos"
                                        maxlength="7" name="telefono" :class="{ 'is-invalid': form.errors.has('telefono') }">
                                        <has-error :form="form" field="telefono"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Escribir Descripcion</label>
                                        <textarea class="form-control" v-model="form.Descripcion" rows="3" placeholder="Escribir Descripcion"
                                        name="Descripcion" :class="{ 'is-invalid': form.errors.has('Descripcion') }"/>
                                        <has-error :form="form" field="Descripcion"></has-error>
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
                                        <select class="custom-select" v-model="form.id_departamento" @change='getProvincia()' 
                                        name="id_departamento" :class="{ 'is-invalid': form.errors.has('id_departamento') }">
                                            <option value='' disabled selected>Seleccionar Departamento</option>
                                            <option v-for="(departamento,index) in departamentos" :key="index" :value='departamento.id'>
                                                {{ departamento.nombre | tolowercase}}
                                            </option>
                                        </select>
                                        <has-error :form="form" field="id_departamento"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Provincia</label>
                                        <select class="custom-select" v-model="form.id_provincia" @change='getDistrito()' 
                                        name="id_provincia" :class="{ 'is-invalid': form.errors.has('id_provincia') }">
                                            <option value='' disabled selected>Seleccionar Provincia</option>
                                                <option v-for="(provincia,index) in provincias" :key="index" :value='provincia.id_provincia'>
                                                {{ provincia.ProvinciaNombre | tolowercase}}
                                            </option>
                                        </select>
                                        <has-error :form="form" field="id_provincia"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Distrito</label>
                                        <select class="custom-select" v-model="form.id_distrito"
                                        name="id_distrito" :class="{ 'is-invalid': form.errors.has('id_distrito') }">
                                            <option value='' disabled selected>Seleccionar Distrito</option>
                                            <option v-for="(distrito,index) in distritos" :key="index" :value='distrito.id_distrito'>
                                                {{ distrito.DistritoNombre | tolowercase}}
                                            </option>
                                        </select>
                                        <has-error :form="form" field="id_distrito"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Direccion</label>
                                        <input type="text" v-model="form.Direccion" class="form-control" placeholder="Escribir Direccion"
                                        name="Direccion" :class="{ 'is-invalid': form.errors.has('Direccion') }">
                                        <has-error :form="form" field="Direccion"></has-error>
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
                                        <input type="text" v-model="form.username" class="form-control" placeholder="Escribir Usuario"
                                        name="username" :class="{ 'is-invalid': form.errors.has('username') }">
                                        <has-error :form="form" field="username"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Correo Electronico</label>
                                        <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" placeholder="Escribir Correo Electronico"
                                        name="email" :class="{ 'is-invalid': form.errors.has('email') }">
                                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Contraseña</label>
                                        <input type="password" v-model="form.password" class="form-control" placeholder="Escribir Contraseña"
                                        name="password" :class="{ 'is-invalid': form.errors.has('password') }">
                                        <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Volver a Escribir Contraseña</label>
                                        <input type="text" v-model="form.save_password" class="form-control" placeholder="Volver a Ingresar Contraseña"
                                        name="save_password" :class="{ 'is-invalid': form.errors.has('save_password') }">
                                        <has-error :form="form" field="save_password"></has-error>
                                    </div>
                                </div>
                                
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label>Elegir Rol</label>
                                        <select class="custom-select" v-model="form.id_rol"
                                        name="id_rol" :class="{ 'is-invalid': form.errors.has('id_rol') }">
                                            <option value='' disabled selected>Seleccionar Rol</option>
                                            <option v-for="(rol,index) in roles" :key="index" :value='rol.id'>
                                                {{ rol.nombre | tolowercase}}
                                            </option>
                                        </select>
                                        <has-error :form="form" field="id_rol"></has-error>
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
        data: function () {
            return {
                roles:[],
                departamentos:[],
                provincias:[],
                distritos:[],
                // id_departamento:'',
                // id_provincia:'',
                form: new Form ({
                    name:'',
                    apellido:'',
                    tipo_documento:'',
                    dni:'',
                    sexo:'',
                    celular:'',
                    telefono:'',
                    Descripcion:'',
                    id_departamento:'',
                    id_provincia:'',
                    id_distrito:'',
                    Direccion:'',
                    username:'',
                    email:'',
                    password:'',
                    save_password:'',
                    id_rol:''
                })
            }
        },
        mounted(){
            var app = this
            app.getDepartamento()
            app.getProvincia()
            app.fetchData()
        },
        methods: {
            saveForm() {
                var app = this;
                var newUsuario = app.usuarios;
                app.form.post('/api/administrador/usuarios', newUsuario)
                .then(res => {
                    app.$router.push({path: '/Usuarios/Visualizar'});
                    app.$Progress.start();
                    toast.fire({icon: 'success',title: 'Registro Creado'});
                })
                .catch(res => {
                    var app = this
                    app.$Progress.fail();
                    toast.fire({  icon: 'error',title: 'Error en los Datos'});
                    console.log(res)
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
                        id_departamento: this.form.id_departamento
                    }
                })
                .then(function(response){
                    this.provincias = response.data;
                }.bind(this));
            },
            getDistrito(state) {
                axios.get('/api/administrador/Empresas/GetDistrito',{
                    params: {
                        id_provincia: this.form.id_provincia
                    }
                })
                .then(function(response){
                    this.distritos = response.data;
                }.bind(this));
            }
        }
    }
</script>