<?php

namespace App\Http\Controllers\Distrito;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Departamento;
use App\Provincia;
use App\Distrito;

class ControllerDistrito extends Controller
{
    // Ejecuciones para el select en la Vista Location/Distrito/Registrar
    public function GetDepartamento(){
        $data = Departamento::get();
        return response()->json($data);
    }
    public function GetProvincia(Request $request){ 
        $join =  Provincia::join('departamentos','departamentos.id','=','provincias.id_departamento')
        ->select(
        //Departamentos
        'departamentos.nombre as DepartamentoNombre',
        //Provincias
        'provincias.id as id_provincia','provincias.nombre as ProvinciaNombre',
        'provincias.id_departamento')   
        ->where('id_departamento', $request->id_departamento)
        ->get();
        
        return $join;
    }
    public function index()
    {
        $distrito =  Distrito::all();
        return $distrito;
    }
    public function store(Request $request)
    {
        $distrito = new Distrito();
        $distrito->nombre = $request->nombre;
        $distrito->id_departamento = $request->id_departamento;
        $distrito->id_provincia = $request->id_provincia;
        $distrito->save();
        
        return $distrito;
    } 
}
