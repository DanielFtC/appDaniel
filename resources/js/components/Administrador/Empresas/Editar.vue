 <template>
    <div>
         <form v-on:submit.prevent="saveForm()">
            <!-- main card -->
            <div class="card card-warning">
                <div class="card-header">
                    <b>Editart Empresa</b>
                    <router-link :to="{name: 'VisualizarEmpresa'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <!-- form send information of register -->
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
                                            <input type="text" v-model="empresas.Nombre_Comercial" class="form-control" placeholder="Escribir Nombre Comercial">
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Razon Social </label>
                                            <input type="text" v-model="empresas.Razon_Social" class="form-control" placeholder="Escribir Razon Social">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Nombre Representante (*)</label>
                                            <input type="text" v-model="empresas.Nombre_Representante" class="form-control" placeholder="Escribir Nombre Representante">
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Apellidos de Representante (*)</label>
                                            <input type="text" v-model="empresas.Apellido_Representante" class="form-control" placeholder="Escribir Apellidos de Representante">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">RUC (*) (Ingresar Solo 11 digitos)</label>
                                            <input type="text" v-model="empresas.ruc" class="form-control" maxlength="11" placeholder="Escribir RUC">
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telefono (Ingresar Solo 7 digitos)</label>
                                            <input type="text" v-model="empresas.telefono" class="form-control" maxlength="7" placeholder="Escribir Telefono">
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Celular (*) (Ingresar Solo 9 digitos)</label>
                                            <input type="text" v-model="empresas.celular" class="form-control" maxlength="9" placeholder="Escribir Celular">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- secundary card Datos de Domicilio-->
                        <div class="card card-info">
                            <div class="card-header">
                                <b>Datos de Domicilio (Actualizar si es Necesario)</b>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label>Departamento</label>
                                            <select class="custom-select" v-model="empresas.id_departamento" @change='getProvincia()'>
                                                <option value='' disabled selected>Seleccionar Departamento</option>
                                                <option v-for="(departamento,index) in Load_Departamento" :key="index" :value='departamento.id'>
                                                    {{ departamento.nombre | tolowercase}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label>Provincia</label>
                                            <select class="custom-select" v-model="empresas.id_provincia" @change='getDistrito()'>
                                                <option value='' disabled selected>Seleccionar Provincia</option>
                                                <option v-for="(provincia,index) in Load_Provincia" :key="index" :value='provincia.id_provincia'>
                                                    {{ provincia.ProvinciaNombre | tolowercase}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label>Distrito</label>
                                            <select class="custom-select" v-model="empresas.id_distrito">
                                                <option value='' disabled selected>Seleccionar Distrito</option>
                                                <option v-for="(distrito,index) in Load_Distrito" :key="index" :value='distrito.id_distrito'>
                                                    {{ distrito.DistritoNombre | tolowercase}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Direccion (*)</label>
                                            <input type="text" v-model="empresas.Direccion" class="form-control" placeholder="Escribir Direccion">
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
                                <label for="exampleFormControlTextarea1">Referencia</label>
                                <textarea class="form-control"  v-model="empresas.Referencia" id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese Descripcion"></textarea>
                            </div>
                        </div>
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
        data() {
            return {
                Load_Departamento: [],
                Load_Provincia: [],
                Load_Distrito: [],
                empresaId: null,
                empresas: {
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
                    Referencia: ''
                }
            }
        },
        mounted() {
            let app = this;
            app.getProvincia()
            app.getDepartamento()
            let id = app.$route.params.id;
            app.empresaId = id;
            axios.get('/api/administrador/empresas/' + id)
                .then(res => {
                    app.empresas = res.data;
                })
                .catch(function () {
                    alert("Could not load your Empresa")
                    
                });
        },
        methods: {
            saveForm() {
                var app = this;
                var newEmpresa = app.empresas;
                let id = app.$route.params.id;
                axios.patch('/api/administrador/empresas/' + app.empresaId, newEmpresa)
                    .then( res => {
                        this.$Progress.start()
                        app.$router.replace('/Empresas/Informacion/' + id);
                        toast.fire({
                            icon: 'success',
                            title: 'Registro Actualizado'
                        });
                    })
                    .catch(res => {
                        this.$Progress.fail()
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
                    id_departamento: this.empresas.id_departamento
                }
                }).then(function(response){
                        this.Load_Provincia = response.data;
                    }.bind(this));
            },
            getDistrito: function() {
                axios.get('/api/administrador/Empresas/GetDistrito',{
                params: {
                    id_provincia: this.empresas.id_provincia
                }
                }).then(function(response){
                        this.Load_Distrito = response.data;
                    }.bind(this));
            }
        }
    }
</script>