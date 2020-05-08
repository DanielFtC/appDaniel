<?php
use Illuminate\Http\Request;
use App\User;

Route::get('/', function () {
    return view('welcome');
});
// 
Auth::routes();
//  Route::get('/{path}','HomeController@index')->where( 'any', '.*' );
Route::group(['middleware' => ['administrador'],'prefix' => '/api/administrador'], function () {
    //Usuario
    Route::resource('/usuarios', 'Usuarios\ControllerUsuarios');
    Route::get('/firstInner', 'Usuarios\ControllerUsuarios@FirstInner');
    Route::get('/userXid', 'Usuarios\ControllerUsuarios@UserXid');
    Route::resource('/flagMatriculador', 'Usuarios\FlagMatriculador');
    Route::resource('/flagCobrador', 'Usuarios\FlagCobrador');
    //Departamento
    Route::resource('/departamentos', 'Departamento\ControllerDepartamento');
    Route::get('/departamento/GetDepartamento', 'Departamento\ControllerDepartamento@GetDepartamento');
    //Provincia
    Route::resource('/provincias', 'Provincia\ControllerProvincia');
    //Distrito
    Route::get('/Distrito/GetDepartamento', 'Distrito\ControllerDistrito@GetDepartamento');
    Route::get('/Distrito/GetProvincia', 'Distrito\ControllerDistrito@GetProvincia');
    Route::resource('/distritos', 'Distrito\ControllerDistrito');
    //Empresa
    Route::get('/Empresas/GetDepartamento', 'Empresa\ControllerEmpresa@GetDepartamento');
    Route::get('/Empresas/GetProvincia', 'Empresa\ControllerEmpresa@GetProvincia');
    Route::get('/Empresas/GetDistrito', 'Empresa\ControllerEmpresa@GetDistrito');
    Route::resource('/empresas', 'Empresa\ControllerEmpresa');
    //Roles
    Route::resource('/roles', 'Roles\ControllerRoles'); 
    //Matriculador
    Route::resource('/matriculador', 'Matriculador\ControllerMatriculador');
    //Cobrador
    Route::resource('/cobrador','Cobrador\ControllerCobrador');
    //Area
    Route::resource('/almacen/area','Area\ControllerArea');
    //Curso
    Route::resource('/almacen/cursos','Curso\ControllerCurso');
    Route::resource('/estado','Curso\estado');
    Route::get('/almacen/curso/getArea','Curso\ControllerCurso@getArea');
    Route::get('/curso/GetArea', 'Curso\ControllerCurso@GetAreaXid');
    Route::get('/curso/GetCurso', 'Curso\ControllerCurso@GetCursoXid');
});

Route::group(['middleware' => ['administrativo'],'prefix' => '/api/administrativo'], function () {

    Route::resource('/usuarios', 'Usuarios\ControllerUsuarios');
    // Route::get('/{any}','HomeController@index')->where( 'any', '.*' );
});
Route::get('/{any}','HomeController@index')->where( 'any', '.*' );

