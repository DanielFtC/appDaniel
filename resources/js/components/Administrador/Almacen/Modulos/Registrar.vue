 <template>
    <div>
        <!-- <form> -->
        <form v-on:submit.prevent="saveForm()">
            <div class="card card-primary">
                <div class="card-header">
                    Registrar Curso
                    <router-link :to="{name: 'almacen.curso.visualizar'}" class="float-right">Atras</router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Elegir Area</label>
                        <select class="custom-select" placeholder="Escribir Nombre" v-model="cursos.id_area">
                            <option value="" selected disabled >Seleccionar Departamento</option>
                                <option  v-for="(area,index) in areas" :key="index" :value="area.id">
                                {{area.nombre | tolowercase}}
                                </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" v-model="cursos.nombre"  class="form-control" placeholder="Escribir Nombre">
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
                areas: [],
                url : '/api/administrador/almacen/curso/getArea',
                cursos:{
                    nombre:'',
                    id_area:''
                }
            }
        },
        mounted() {
            var app=this
            app.VerArea();
        },
        methods: {
            VerArea(){
                var app = this;
                axios.get(app.url)
                .then(res => {
                    app.areas = res.data;
                })
            },
            saveForm() {
                var app = this;
                var newCurso = app.cursos;
                axios.post('/api/administrador/almacen/cursos', newCurso)
                    .then(res => {
                        app.$router.push({path: '/Almacen/Curso/Visualizar'});
                    })
                    .catch(res => {
                        console.log(res);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>