 <template>
    <div>
        <!-- <form> -->
        <!-- <form v-on:submit.prevent="saveForm(index)"> -->
            <div class="card card-primary">
                <div class="card-header">
                    Registrar Area
                    <router-link :to="{name: 'almacen.area.visualizar'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" v-model="areas.nombre" class="form-control" placeholder="Escribir Nombre">
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
                areas: {
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
            click(index) {
                console.time("Algun Identificador");
                var app = this;
                var newArea = app.areas;
                Vue.set(app.loading,index,1);
                var app = this;
                setTimeout(function(){
                    axios.post('/api/administrador/almacen/area', newArea)
                    .then(res => {
                        app.$router.push({path: '/Almacen/Area/Visualizar'});
                        app.$Progress.start();
                        toast.fire({icon: 'success',title: 'Registro Creado'});
                    })
                    .catch(res => {
                        app.$Progress.fail();
                        toast.fire({  icon: 'error',title: 'Error en los Datos'});
                        console.log(res)
                    });
                     Vue.set(app.loading,index,0);
                }, 2000);
                 console.timeEnd("Algun Identificador");
            },
        }
    }
</script>