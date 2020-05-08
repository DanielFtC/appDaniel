 <template>
    <div>
        <!-- <form> -->
        <!-- <form v-on:submit.prevent="saveForm(index)"> -->
            <div class="card card-primary">
                <div class="card-header">
                    Registrar Departamento
                    <router-link :to="{name: 'VisualizarDepartamento'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" v-model="departamentos.nombre" class="form-control" placeholder="Escribir Nombre">
                    </div>
                </div>
                <div class="card-footer" v-for="(item,index) in vacio" :key="index">
                    <button type="submit" @click="click(index)" class="btn btn-primary">{{item.name}}&nbsp;
                        <i v-if="loading[index]" class="fa fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                departamentos: {
                    nombre: ''
                },
                vacio:{
                    boton:{
                        name:'Agregar'
                    }
                },
                loading:[]
            }
        },
        methods: {
            // console.time("assas");
            click(index) {
                console.time("Algun Identificador");
                var app = this;
                var newDepartamento = app.departamentos;
                Vue.set(app.loading,index,1);
                var app = this;
                setTimeout(function(){
                    axios.post('/api/administrador/departamentos', newDepartamento)
                    .then(res => {
                        app.$router.push({path: '/Location/Departamento/Visualizar'});
                    })
                    .catch(res => {
                        console.log(res);
                        alert("Could not create your company");
                    });
                     Vue.set(app.loading,index,0);
                }, 2000);
                 console.timeEnd("Algun Identificador");
            },
        }
    }
</script>