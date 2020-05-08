<template>
      <div>
         <div class="card card-primary">
           <div class="card-header">
            <b>Perfil de Usuario</b>
            <router-link :to="{name: 'VisualizarUsuario'}" class="float-right">
                    Atras
            </router-link>
           </div>
           <div class="card-body">
             <section class="content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col">
                    <!-- <div class="card card-primary card-outline">
                      <div class="card-body box-profile">
                        <div class="text-center">
                          <img class="profile-user-img img-fluid img-circle"
                              src="/img/user4-128x128.jpg"
                              alt="User profile picture">
                        </div>
                        <h3 class="profile-username text-center">{{usuarios.name}}</h3>
                        <p class="text-muted text-center">{{usuarios.email}}</p>
                      </div>
                    </div> -->
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Datos Personales</h3>
                      </div>
                      <div class="card-body">
                        <strong><i class="fas fa-book mr-1"></i> Nombre y Apellido</strong>
                        <p class="text-muted">
                         {{usuarios.name}} , {{usuarios.apellido}}
                        </p>
                        <hr>
                        <strong><i class="fas fa-book mr-1"></i>Dni / Genero</strong>
                        <p class="text-muted">
                         {{usuarios.dni}} , {{usuarios.sexo}}
                        </p>
                        <hr>
                        <strong><i class="fas fa-phone-alt mr-1"></i>Contacto</strong>
                        <p class="text-muted">
                         {{usuarios.celular}} , {{usuarios.telefono}}
                        </p>
                        <hr>
                        <strong><i class="fas fa-map-marker-alt mr-1"></i> Direccion</strong>
                        <p class="text-muted">{{usuarios.Direccion}}</p>
                        <hr>
                        <strong><i class="far fa-file-alt mr-1"></i> Descripcion</strong>
                        <p class="text-muted">{{usuarios.Descripcion}}</p>
                      </div>
                    </div>
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Datos de Usuario</h3>
                      </div>
                      <div class="card-body">
                        <strong><i class="fas fa-user mr-1"></i>Usuario</strong>
                        <p class="text-muted">
                         {{usuarios.username}}
                        </p>
                        <hr>
                        <strong><i class="fas fa-book mr-1"></i>Correo Electronico</strong>
                        <p class="text-muted">
                         {{usuarios.email}}
                        </p>
                        <hr>
                        <strong><i class="fas fa-unlock-alt mr-1"></i> Contraseña</strong>
                        <p class="text-muted">{{usuarios.save_password}}</p>
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
            app.usuarioId = id;
            axios.get('/api/administrador/usuarios/' + id)
                .then(res => {
                    app.usuarios = res.data;
                })
                .catch(function () {
                    alert("Could not load your User")
                    
                });
        },
        data: function () {
            return {
                usuarioId: null,
                usuarios: {
                    username:'',
                    name:'',
                    apellido:'',
                    celular:'',
                    telefono:'',
                    dni:'',
                    tipo_documento:'',
                    Descripcion:'',
                    sexo:'',
                    email:'',
                    save_password:'',
                    Direccion:'',
                }
            }
        },
    }
</script>