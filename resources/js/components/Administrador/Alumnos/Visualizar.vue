<template>
    <div>
        <div class="card card-primary">
            <div class="card-header">
               <b> Visualizar Alumnos</b>
                <div class="float-right">
                    <router-link :to="{name: 'RegistrarAlumnos'}" class="mr-3">
                        Agregar
                    </router-link>
                    <a href="">Solicitar Lista</a>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive-xl">
                    <table class="table table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                           <th scope="col">N° Lista</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo Electronico</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Fecha de Actualizacion</th>
                            <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
                                </td>
                            </tr>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
                                </td>
                            </tr>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
                                </td>
                            </tr>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
                                </td>
                            </tr>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
                                </td>
                            </tr>
                            <tr>
                                <td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td><td>pendiente</td>
                                <td>
                                    <router-link :to="{name: 'EditarMatriculador'}">
                                        Editar &nbsp;
                                    </router-link>
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