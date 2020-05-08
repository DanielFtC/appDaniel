<template>
    <div>
       <div class="card card-primary">
           <div class="card-header">
               <b>Visualizar Distrito</b>
                <router-link :to="{name: 'RegistrarDistrito'}" class="float-right">
                    Agregar
                </router-link>
           </div>
           <div class="card-body">
                <div class="table-responsive-xl">
                    <table class="table table-hover table-striped table-bordered table-sm text-center">
                        <thead>
                            <tr>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(distrito , index) in distritos" :key="index">
                                <td>{{ index + 1}}</td>
                                <td>{{distrito.nombre | tolowercase}}</td>
                                <td>{{distrito.created_at}}</td>
                                <td>{{distrito.updated_at}}</td>
                                <td>
                                    <a href="#">
                                        Editar &nbsp;
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
           <div class="card-footer">
               Paginador Pendiente
           </div>
       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                distritos: []
            }
        },
        mounted(){
            var app = this;
            app.VerDistritos();
        },
        methods:{
            VerDistritos(){
                var app = this;
                axios.get('/api/administrador/distritos')
                .then(res => {
                    app.distritos = res.data;
                })
                .catch(res => {
                     app.$router.replace('/SinAcceso');
                })
            }
        }
    }
</script>