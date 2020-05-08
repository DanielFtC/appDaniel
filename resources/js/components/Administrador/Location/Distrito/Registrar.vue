 <template>
    <div>
        <!-- <form> -->
        <form v-on:submit.prevent="saveForm()">
            <div class="card">
                <div class="card-header">
                    Registrar Departamento
                    <router-link :to="{name: 'VisualizarDistrito'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                    <label>Elegir Departamento</label>
                    <select class="custom-select" v-model="distritos.id_departamento" @change='getProvincia()'>
                        <option value='' disabled selected>Seleccionar Departamento</option>
                        <option v-for="(departamento,index) in Objeto_Departamento" :key="index" :value='departamento.id'>
                            {{ departamento.nombre | tolowercase}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                   <label >Elegir Provincia</label>
                    <select class="custom-select" v-model="distritos.id_provincia">
                        <option value='' disabled selected>Selecionar Provincia</option>
                        <option v-for="(provincia , index) in Objeto_Provincia" :key="index"  v-bind:value='provincia.id_provincia'>
                            {{ provincia.ProvinciaNombre | tolowercase}}
                        </option>
                    </select>
                </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" v-model="distritos.nombre"  class="form-control" placeholder="Escribir Nombre">
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
        return{
            Objeto_Departamento: [],
            Objeto_Provincia: [],
            distritos: {
                    id_departamento:'',
                    id_provincia:'',
                    nombre: ''
                }
        }
    },
    methods:{
        saveForm() {
            var app = this;
            var newDistrito = app.distritos;
                axios.post('/api/administrador/distritos', newDistrito)
                    .then(res => {
                        app.$router.push({path: '/Location/Distrito/Visualizar'});
                    })
                    .catch(res => {
                        console.log(res);
                        alert("Could not create your company");
                    });
        },
        getDepartamento(){
            axios.get('/api/administrador/Distrito/GetDepartamento')
            .then(function (response) {
                this.Objeto_Departamento = response.data;
            }.bind(this));
         
        },
        getProvincia: function() {
            axios.get('/api/administrador/Distrito/GetProvincia',{
            params: {
                id_departamento: this.distritos.id_departamento
            }
              }).then(function(response){
                    this.Objeto_Provincia = response.data;
                }.bind(this));
        }
    },
    created(){
        this.getDepartamento()
    }
}
</script>