 <template>
    <div>
        <!-- <form> -->
        <form v-on:submit.prevent="saveForm()">
            <div class="card">
                <div class="card-header">
                    Registrar Departamento
                    <router-link :to="{name: 'VisualizarProvincia'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Elegir Departamento</label>
                        <select class="custom-select" placeholder="Escribir Nombre" v-model="provincias.id_departamento">
                            <option value="" selected disabled >Seleccionar Departamento</option>
                                <option  v-for="(departamento,index) in departamentos" :key="index" :value="departamento.id">
                                {{departamento.nombre | tolowercase}}
                                </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" v-model="provincias.nombre"  class="form-control" placeholder="Escribir Nombre">
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
        data(){
            return {
                departamentos: [],
                provincias:{
                    nombre:'',
                    id_departamento:''
                }
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/administrador/departamento/GetDepartamento')
                .then(res => {
                    app.departamentos = res.data;
                })
        },
        methods: {
            saveForm() {
                var app = this;
                var newProvincia = app.provincias;
                axios.post('/api/administrador/provincias', newProvincia)
                    .then(res => {
                        app.$router.push({path: '/Location/Provincia/Visualizar'});
                    })
                    .catch(res => {
                        console.log(res);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>