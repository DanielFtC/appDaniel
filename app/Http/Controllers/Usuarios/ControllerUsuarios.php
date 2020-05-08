<?php

namespace App\Http\Controllers\Usuarios;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Usuario\StoreRequestUsuario;

use App\User;
use App\Departamento;
use App\Provincia;
use App\Distrito;


class ControllerUsuarios extends Controller
{
    public function index(Request $request){
        if($request->ajax()){
            $user =  User::orderBy('name','asc')->paginate(10);
            return response()->json($user,200);
        }else{
            return response()->json($user,400);
        }
    }
    public function store(StoreRequestUsuario $request)
    {
        $user = new User();
        $user->username = $request->username;
        $user->name = $request->name;
        $user->apellido = $request->apellido;
        $user->celular = $request->celular;
        $user->telefono = $request->telefono;
        $user->dni = $request->dni;
        $user->tipo_documento = $request->tipo_documento;
        $user->Descripcion = $request->Descripcion;
        $user->sexo = $request->sexo;
        $user->email = $request->email;
        $user->password = bcrypt( $request->password );
        $user->save_password = $request->save_password;
        $user->id_departamento = $request->id_departamento;
        $user->id_provincia = $request->id_provincia;
        $user->id_distrito = $request->id_distrito;
        $user->Direccion = $request->Direccion;
        $user->id_rol = $request->id_rol;
        $user->save();
        return response()->json($user,200);
    }
    public function show($id)
    {
        return User::findOrFail($id);
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->username = $request->username;
        $user->name = $request->name;
        $user->apellido = $request->apellido;
        $user->celular = $request->celular;
        $user->telefono = $request->telefono;
        $user->dni = $request->dni;
        $user->tipo_documento = $request->tipo_documento;
        $user->Descripcion = $request->Descripcion;
        $user->sexo = $request->sexo;
        $user->email = $request->email;
        $user->password = bcrypt( $request->password );
        $user->save_password = $request->save_password;
        $user->id_departamento = $request->id_departamento;
        $user->id_provincia = $request->id_provincia;
        $user->id_distrito = $request->id_distrito;
        $user->Direccion = $request->Direccion;
        $user->id_rol = $request->id_rol;
        $user->save();
        return response()->json($user,200);
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return '';
    }
}
