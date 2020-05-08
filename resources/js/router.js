// Manejo de Vistas
window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.component('hijo', require('./components/hijo').default);
Vue.component('padre', require('./components/padre').default);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        //main
        { path: '/main',component:() => import('./components/main.vue') },
        { path: '/SinAcceso',component:() => import('./components/NotFound.vue') },

        // Administrador

        //Usuarios
        { path: '/Usuarios/Registrar', name : 'RegistrarUsuario',component:() => import('./components/Administrador/Usuarios/Registrar.vue') },

        { path: '/Usuarios/Visualizar/', name: 'VisualizarUsuario',component:() => import('./components/Administrador/Usuarios/Visualizar.vue') },
        { path: '/Usuarios/Editar/:id/:name',name : 'EditarUsuario', component:() => import('./components/Administrador/Usuarios/Editar.vue') },
        { path: '/Usuarios/Perfil/:id',name : 'PerfilUsuario', component:() => import('./components/Administrador/Usuarios/Perfil.vue') },

        //Empresas
        { path: '/Empresas/Visualizar',name : 'VisualizarEmpresa', component:() => import('./components/Administrador/Empresas/Visualizar.vue') },
        { path: '/Empresas/Registrar',name:'RegistrarEmpresa', component:() => import('./components/Administrador/Empresas/Registrar.vue') },
        { path: '/Empresas/Editar/:id',name:'EditarEmpresa', component:() => import('./components/Administrador/Empresas/Editar.vue') },
        { path: '/Empresas/Informacion/:id',name:'InformacionEmpresa', component:() => import('./components/Administrador/Empresas/Informacion.vue') },

        //Departamento
        { path: '/Location/Departamento/Registrar', name : 'RegistrarDepartamento',component:() => import('./components/Administrador/Location/Departamento/Registrar.vue') },
        { path: '/Location/Departamento/Visualizar', name : 'VisualizarDepartamento', component:() => import('./components/Administrador/Location/Departamento/Visualizar.vue') },
        { path: '/Location/Departamento/Editar/:id',name : 'EditarDepartamento', component:() => import('./components/Administrador/Location/Departamento/Editar.vue') },

        //Region
        { path: '/Location/Provincia/Registrar', name : 'RegistrarProvincia',component:() => import('./components/Administrador/Location/Provincia/Registrar.vue') },
        { path: '/Location/Provincia/Visualizar', name : 'VisualizarProvincia', component:() => import('./components/Administrador/Location/Provincia/Visualizar.vue') },
        { path: '/Location/Provincia/Editar/:id',name : 'EditarProvincia', component:() => import('./components/Administrador/Location/Provincia/Editar.vue') },

        //Distrito
        { path: '/Location/Distrito/Registrar', name : 'RegistrarDistrito',component:() => import('./components/Administrador/Location/Distrito/Registrar.vue') },
        { path: '/Location/Distrito/Visualizar', name : 'VisualizarDistrito', component:() => import('./components/Administrador/Location/Distrito/Visualizar.vue') },
        { path: '/Location/Distrito/Editar/:id',name : 'EditarDistrito', component:() => import('./components/Administrador/Location/Distrito/Editar.vue') },

        //Matriculadorres
        { path: '/Matriculador/Registrar', name : 'RegistrarMatriculador',component:() => import('./components/Administrador/Matriculador/Registrar.vue') },
        { path: '/Matriculador/Visualizar', name : 'VisualizarMatriculador', component:() => import('./components/Administrador/Matriculador/Visualizar.vue') },
        { path: '/Matriculador/Editar/:id',name : 'EditarMatriculador', component:() => import('./components/Administrador/Matriculador/Editar.vue') },
        
        //Cobradores
        { path: '/Cobrador/Registrar', name : 'RegistrarCobrador',component:() => import('./components/Administrador/Cobrador/Registrar.vue') },
        { path: '/Cobrador/Visualizar', name : 'VisualizarCobrador', component:() => import('./components/Administrador/Cobrador/Visualizar.vue') },
        { path: '/Cobrador/Editar/:id',name : 'EditarCobrador', component:() => import('./components/Administrador/Cobrador/Editar.vue') },

        //Alumnos
        { path: '/Alumnos/Registrar', name : 'RegistrarAlumnos',component:() => import('./components/Administrador/Alumnos/Registrar.vue') },
        { path: '/Alumnos/Visualizar', name : 'VisualizarAlumnos', component:() => import('./components/Administrador/Alumnos/Visualizar.vue') },
        { path: '/Alumnos/Editar/:id',name : 'EditarAlumnos', component:() => import('./components/Administrador/Alumnos/Editar.vue') },

        // Area
        { path: '/Almacen/Area/Visualizar', name : 'almacen.area.visualizar', component:() => import('./components/Administrador/Almacen/Areas/Visualizar.vue') },
        { path: '/Almacen/Area/Registrar', name : 'almacen.area.registrar', component:() => import('./components/Administrador/Almacen/Areas/Registrar.vue') },
        { path: '/Almacen/Area/Editar', name : 'almacen.area.editar', component:() => import('./components/Administrador/Almacen/Areas/Editar.vue') },

        // Curso
        { path: '/Almacen/Curso/Visualizar', name : 'almacen.curso.visualizar', component:() => import('./components/Administrador/Almacen/Cursos/Visualizar.vue') },
        { path: '/Almacen/Curso/Registrar', name : 'almacen.curso.registrar', component:() => import('./components/Administrador/Almacen/Cursos/Registrar.vue') },
        { path: '/Almacen/Curso/Editar', name : 'almacen.curso.editar', component:() => import('./components/Administrador/Almacen/Cursos/Editar.vue') },

        // Modulo
        { path: '/Almacen/Modulo/Visualizar', name : 'almacen.mod.visualizar', component:() => import('./components/Administrador/Almacen/Modulos/Visualizar.vue') },
        { path: '/Almacen/Modulo/Registrar', name : 'almacen.mod.registrar', component:() => import('./components/Administrador/Almacen/Modulos/Registrar.vue') },
        { path: '/Almacen/Modulo/Editar', name : 'almacen.mod.editar', component:() => import('./components/Administrador/Almacen/Modulos/Editar.vue') },

        
        
        { path: '/hijo',name : 'hijo', component:() => import('./components/hijo.vue') },
        { path: '/padre',name : 'padre', component:() => import('./components/padre.vue') },  
        { path: '*',name : '404', component:() => import('./components/NotFound.vue') },





        //Administrativo

        // { path: 'Admin/Usuarios/Registrar', name : 'RegistrarUsuario',component:() => import('./components/Administrativo/Usuarios/Registrar.vue') },
        { path: '/Admin/Usuarios/Visualizar/', name: 'Admin.VisualizarUsuario',component:() => import('./components/Administrativo/Usuarios/Visualizar.vue') },
        { path: '/Admin/Usuarios/Editar/:id/:name',name : 'Admin.EditarUsuario', component:() => import('./components/Administrativo/Usuarios/Editar.vue') },
        { path: '/Admin/Usuarios/Perfil/:id',name : 'Admin.PerfilUsuario', component:() => import('./components/Administrativo/Usuarios/Perfil.vue') },
        // //Empresas
        // { path: '/Admin/Empresas/Visualizar',name : 'Admin.VisualizarEmpresa', component:() => import('./components/Administrativo/Empresas/Visualizar.vue') },
        // { path: '/Admin/Empresas/Registrar',name:'Admin.RegistrarEmpresa', component:() => import('./components/Administrativo/Empresas/Registrar.vue') },
        // { path: '/Admin/Empresas/Editar/:id',name:'Admin.EditarEmpresa', component:() => import('./components/Administrativo/Empresas/Editar.vue') },
        // { path: '/Admin/Empresas/Informacion/:id',name:'IAdmin.nformacionEmpresa', component:() => import('./components/Administrativo/Empresas/Informacion.vue') },
        // //Departamento
        // { path: '/Admin/Location/Departamento/Registrar', name : 'Admin.RegistrarDepartamento',component:() => import('./components/Administrativo/Location/Departamento/Registrar.vue') },
        // { path: '/Admin/Location/Departamento/Visualizar', name : 'Admin.VisualizarDepartamento', component:() => import('./components/Administrativo/Location/Departamento/Visualizar.vue') },
        // { path: '/Admin/Location/Departamento/Editar/:id',name : 'Admin.EditarDepartamento', component:() => import('./components/Administrativo/Location/Departamento/Editar.vue') },
        // //Region
        // { path: '/Admin/Location/Provincia/Registrar', name : 'Admin.RegistrarProvincia',component:() => import('./components/Administrativo/Location/Provincia/Registrar.vue') },
        // { path: '/Admin/Location/Provincia/Visualizar', name : 'Admin.VisualizarProvincia', component:() => import('./components/Administrativo/Location/Provincia/Visualizar.vue') },
        // { path: '/Admin/Location/Provincia/Editar/:id',name : 'Admin.EditarProvincia', component:() => import('./components/Administrativo/Location/Provincia/Editar.vue') },
        // //Distrito
        // { path: '/Admin/Location/Distrito/Registrar', name : 'Admin.RegistrarDistrito',component:() => import('./components/Administrativo/Location/Distrito/Registrar.vue') },
        // { path: '/Admin/Location/Distrito/Visualizar', name : 'Admin.VisualizarDistrito', component:() => import('./components/Administrativo/Location/Distrito/Visualizar.vue') },
        // { path: '/Admin/Location/Distrito/Editar/:id',name : 'Admin.EditarDistrito', component:() => import('./components/Administrativo/Location/Distrito/Editar.vue') },
        // //Matriculadorres
        // { path: '/Admin/Matriculador/Registrar', name : 'Admin.RegistrarMatriculador',component:() => import('./components/Administrativo/Matriculador/Registrar.vue') },
        // { path: '/Admin/Matriculador/Visualizar', name : 'Admin.VisualizarMatriculador', component:() => import('./components/Administrativo/Matriculador/Visualizar.vue') },
        // { path: '/Admin/Matriculador/Editar/:id',name : 'Admin.EditarMatriculador', component:() => import('./components/Administrativo/Matriculador/Editar.vue') },
        // //Cobradores
        // { path: '/Admin/Cobrador/Registrar', name : 'Admin.RegistrarCobrador',component:() => import('./components/Administrativo/Cobrador/Registrar.vue') },
        // { path: '/Admin/Cobrador/Visualizar', name : 'Admin.VisualizarCobrador', component:() => import('./components/Administrativo/Cobrador/Visualizar.vue') },
        // { path: '/Admin/Cobrador/Editar/:id',name : 'Admin.EditarCobrador', component:() => import('./components/Administrativo/Cobrador/Editar.vue') },
        // //Alumnos
        // { path: '/Admin/Alumnos/Registrar', name : 'Admin.RegistrarAlumnos',component:() => import('./components/Administrativo/Alumnos/Registrar.vue') },
        // { path: '/Admin/Alumnos/Visualizar', name : 'Admin.VisualizarAlumnos', component:() => import('./components/Administrativo/Alumnos/Visualizar.vue') },
        // { path: '/Admin/Alumnos/Editar/:id',name : 'Admin.EditarAlumnos', component:() => import('./components/Administrativo/Alumnos/Editar.vue') },
    ]
  })



  export default router
