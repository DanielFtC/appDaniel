 <template>
    <div>
         <form v-on:submit.prevent="saveForm()">
            <!-- main card -->
            <div class="card card-primary">
                <div class="card-header">
                    <b>Registrar Empresa</b>
                    <router-link :to="{name: 'VisualizarEmpresa'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <!-- form send information of register -->
                    <!-- <form> -->
                        <!-- secundary card  Datos de Representante-->
                        <div class="card card-info">
                            <div class="card-header">
                                <b>Datos Importantes</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Comercial (*) </label>
                                            <input type="text" v-model="form.Nombre_Comercial" class="form-control" placeholder="Escribir Nombre Comercial"
                                                    name="Nombre_Comercial" :class="{ 'is-invalid': form.errors.has('Nombre_Comercial') }">
                                                     <has-error :form="form" field="Nombre_Comercial"></has-error>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Razon Social </label>
                                            <input type="text" v-model="form.Razon_Social" class="form-control" placeholder="Escribir Razon Social"
                                                    name="Razon_Social" :class="{ 'is-invalid': form.errors.has('Razon_Social') }">
                                                     <has-error :form="form" field="Razon_Social"></has-error>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Representante (*)</label>
                                            <input type="text" v-model="form.Nombre_Representante" class="form-control" placeholder="Escribir Nombre Representante"
                                                    name="Nombre_Representante" :class="{ 'is-invalid': form.errors.has('Nombre_Representante') }">
                                                     <has-error :form="form" field="Nombre_Representante"></has-error>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Apellidos de Representante (*)</label>
                                            <input type="text" v-model="form.Apellido_Representante" class="form-control" placeholder="Escribir Apellidos de Representante"
                                                    name="Apellido_Representante" :class="{ 'is-invalid': form.errors.has('Apellido_Representante') }">
                                                     <has-error :form="form" field="Apellido_Representante"></has-error>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">RUC (*)</label>
                                            <input type="text" v-model="form.ruc" class="form-control" maxlength="11" placeholder="Escribir RUC"
                                                    name="ruc" :class="{ 'is-invalid': form.errors.has('ruc') }">
                                                     <has-error :form="form" field="ruc"></has-error>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telefono </label>
                                            <input type="text" v-model="form.telefono" class="form-control" maxlength="7" placeholder="Escribir Telefono"
                                            name="telefono" :class="{ 'is-invalid': form.errors.has('telefono') }">
                                             <has-error :form="form" field="telefono"></has-error>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Celular (*)</label>
                                            <input type="text" v-model="form.celular" class="form-control" maxlength="9" placeholder="Escribir Celular"
                                            name="telefono" :class="{ 'is-invalid': form.errors.has('celular')}">
                                             <has-error :form="form" field="celular"></has-error>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- secundary card Datos de Domicilio-->
                        <div class="card card-info">
                            <div class="card-header">
                                <b>Datos de Domicilio</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label>Departamento</label>
                                            <select class="custom-select" v-model="form.id_departamento" @change='getProvincia()'
                                                    name="id_departamento" :class="{ 'is-invalid': form.errors.has('id_departamento')}">
                                                <option value='' disabled selected>Seleccionar Departamento</option>
                                                <option v-for="(departamento,index) in Load_Departamento" :key="index" :value='departamento.id'>
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
                                             name="id_provincia" :class="{ 'is-invalid': form.errors.has('id_provincia')}">
                                                <option value='' disabled selected>Seleccionar Provincia</option>
                                                <option v-for="(provincia,index) in Load_Provincia" :key="index" :value='provincia.id_provincia'>
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
                                            name="id_distrito" :class="{ 'is-invalid': form.errors.has('id_distrito')}">
                                                <option value='' disabled selected>Seleccionar Distrito</option>
                                                <option v-for="(distrito,index) in Load_Distrito" :key="index" :value='distrito.id_distrito'>
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
                                            <label for="exampleInputEmail1">Direccion (*)</label>
                                            <input type="text" v-model="form.Direccion" class="form-control" placeholder="Escribir Direccion"
                                             name="Direccion" :class="{ 'is-invalid': form.errors.has('Direccion')}">
                                              <has-error :form="form" field="Direccion"></has-error>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- secundary card Datos de Domicilio-->
                        <div class="card card-info">
                            <div class="card-header">
                                <b>Datos Adicionales</b>
                            </div>
                            <div class="card-body">
                                <label for="exampleFormControlTextarea1">Descripcion</label>
                                <textarea class="form-control"  v-model="form.Descripcion" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese Descripcion"
                                name="Descripcion" :class="{ 'is-invalid': form.errors.has('Descripcion')}">
                                 <has-error :form="form" field="Descripcion"></has-error>
                                </textarea>
                            </div>
                        </div>
                    <!-- </form> -->
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
                Load_Departamento: [],
                Load_Provincia: [],
                Load_Distrito: [],
                form: new Form({
                    Nombre_Comercial: '',
                    Razon_Social: '',
                    Nombre_Representante: '',
                    Apellido_Representante: '',
                    ruc: '',
                    telefono: '',
                    celular: '',
                    id_departamento: '',
                    id_provincia: '',
                    id_distrito: '',
                    Direccion: '',
                    Descripcion: ''
                })
            }
        },
        created(){
            // var app = this;
            this.getDepartamento()
            this.getProvincia()
        },
        methods: {
            saveForm() {
                var app = this;
                var newEmpresa = app.empresas;
                this.form.post('/api/administrador/empresas', newEmpresa)
                    .then(res => {
                        app.$router.push({path: '/Empresas/Visualizar'});
                        app.$Progress.start();
                        toast.fire({
                            icon: 'success',
                            title: 'Registro Creado'
                        });
                    })
                    .catch(res => {
                        app.$Progress.fail();
                        toast.fire({
                            icon: 'error',
                            title: 'Error en los Datos'
                        });
                    });
            },
            getDepartamento(){
                axios.get('/api/administrador/Empresas/GetDepartamento')
                .then(function (response) {
                    this.Load_Departamento = response.data;
                }.bind(this));
            },
            getProvincia: function() {
                axios.get('/api/administrador/Empresas/GetProvincia',{
                params: {
                    id_departamento: this.form.id_departamento
                }
                }).then(function(response){
                        this.Load_Provincia = response.data;
                    }.bind(this));
            },
            getDistrito: function() {
                axios.get('/api/administrador/Empresas/GetDistrito',{
                params: {
                    id_provincia: this.form.id_provincia
                }
                }).then(function(response){
                        this.Load_Distrito = response.data;
                    }.bind(this));
            }
        }
    }
</script>