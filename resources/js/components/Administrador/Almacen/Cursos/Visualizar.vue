<template>
    <div class="card card-primary">
        <div class="card-header">
            Visualizar Curso
            <router-link :to="{name: 'almacen.curso.registrar'}" class="float-right">Registrar</router-link>
        </div>
        <div class="card-body">
        <div>
            <div class="form-group">
                <div class="input-group">
                    <select class="custom-select" v-model="id_area" @change='getCurso()'>
                        <option value='' disabled selected >Selecionar Area</option>
                        <option v-for='(data,index) in areas' :key="index" :value='data.id'>
                            {{ data.nombre  | tolowercase}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <form v-if="SinCampo">
            <div class="form-row">
                <div class="col">
                    <h4 class="text-muted text-center">
                        Seleccione La Area Correspondiente Para Desplegar Cursos
                    </h4>
                </div>
            </div>
        </form>
        <form v-if="Mostrar">
            <div class="table-responsive-xl">
                <table class="table table-striped table-bordered table-hover text-center table-sm">
                    <thead>
                        <tr>
                            <th scope="col">N° Lista</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(curso,index) in cursos" :key="index">
                            <td>{{index + 1}}</td>
                            <td>{{curso.CursosNombre | tolowercase}}</td>
                            <td>{{curso.precio}} PEN</td>
                            <td>{{curso.created_at}}</td>
                            <td>{{curso.updated_at}}</td>
                            <td>
                            <input type="checkbox" class="activ" @click="activar(curso)" v-bind:id="curso.id" :checked="curso.estado == 'activo'">
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id_area:'',
            SinCampo:true,
            Mostrar:false,
            areas:[],
            cursos:[],
            curso:{}
        }
    },
    created(){
        this.getArea()
    },
    methods:{
        getArea(){
            axios.get('/api/administrador/curso/GetArea')
            .then(function (response) {
                this.areas = response.data;
            }.bind(this));
        },
        getCurso(){
            axios.get('/api/administrador/curso/GetCurso',{
            params: {
                id_area: this.id_area
            }
              }).then(function(response){
                    this.cursos = response.data;
                    this.Mostrar = true;
                    this.SinCampo = false;
                }.bind(this));
        },
        MostrarXCurso(){
            this.Mostrar = true
        },
        activar(curso){
            const x = document.getElementById(curso.id);
                if(x.checked == true){
                    const params = {
                        nombre: curso.CursosNombre,
                        estado: 'activo'
                    }
                    console.log(params)
                    var app=this
                    axios.put(`/api/administrador/almacen/cursos/${curso.id}`,params)
                    .then(res => {
                        app.$Progress.start();
                        toast.fire({icon: 'success',title: 'Registro Activado'});
                    })
                    .catch(res => {
                        this.$Progress.Fail();
                        toast.fire({icon: 'error',title: 'Errorr en el sistema'});
                    })
                }else{
                    const params = {
                        nombre: curso.CursosNombre,
                        estado: 'inactivo'
                    }
                    console.log(params)
                    var app=this
                    axios.put(`/api/administrador/almacen/cursos/${curso.id}`,params)
                    .then(res => {
                        app.$Progress.start();
                        toast.fire({icon: 'success',title: 'Registro Desactivado'});
                    })
                    .catch(res => {
                        app.$Progress.Fail();
                        toast.fire({icon: 'success',title: 'Errorr en el sistema'});
                    })
                }
        }
    }     
}
</script>
<style>
.activ{
  position: relative;
  width: 30px;
  height: 15px;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  transition: .5s;
}
.activ:checked{
  background: #03a9f4;
}
.activ:before{
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 20px;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0,0,0,.2);
  transition: .5s;
}
.activ:checked:before{
  left: 15px;
}
</style>