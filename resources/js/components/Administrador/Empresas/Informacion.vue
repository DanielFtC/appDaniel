<template>
    <div>
        <!-- card -->
         <div class="card card-success">
             <div class="card-header">
                <b>Informacion de Empresa</b>
                <router-link :to="{name: 'VisualizarEmpresa'}" class="float-right">
                    Atras
                </router-link>
             </div>
             <!-- card-body -->
             <div class="card-body">
                 <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">{{empresas.Razon_Social | uppercase}}</h3>
                                    </div>
                                    <div class="card-body">
                                        <strong>Razon Social</strong>
                                        <p class="text-muted">
                                        {{empresas.Razon_Social}}
                                        </p>
                                        <hr>
                                        <strong>Nombre Comercial</strong>
                                        <p class="text-muted">{{empresas.Nombre_Comercial}}</p>
                                        <hr>
                                        <strong>Representante</strong>
                                        <p class="text-muted">{{empresas.Nombre_Representante}} {{empresas.Apellido_Representante}}</p>
                                        <hr>
                                        <strong>RUC</strong>
                                        <p class="text-muted">{{empresas.ruc}}</p>
                                        <hr>
                                        <strong>Numeros de Contacto</strong>
                                        <p class="text-muted">{{empresas.celular}} / {{empresas.telefono}}</p>
                                        <hr>
                                        <strong>Ubicacion</strong>
                                        <p class="text-muted"> Pendiente</p>
                                        <hr>
                                        <strong>Direccion</strong>
                                        <p class="text-muted">{{empresas.Direccion}}</p>
                                        <hr>
                                        <strong>Referencia</strong>
                                        <p v-if="empresas.Referencia" class="text-muted">{{empresas.Referencia}}</p>
                                        <p v-else class="text-muted">Sin Referencia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
         </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            let app = this;
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
        data: function () {
            return {
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
                    Descripcion: ''
                }
            }
        },
    }
</script>