<?php

namespace App\Http\Controllers\Empresa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Empresa\StoreRequestEmpresa;

use App\Empresa;
use App\Departamento;
use App\Provincia;
use App\Distrito;

class ControllerEmpresa extends Controller
{
    public function index(){
        $empresa =  Empresa::orderBy('id','desc')->paginate();
        return response()->json($empresa);
    }
    public function store( StoreRequestEmpresa $request){

        $empresa = new Empresa();
        $empresa->Nombre_Comercial = $request->Nombre_Comercial;
        $empresa->Razon_Social = $request->Razon_Social;
        $empresa->Nombre_Representante = $request->Nombre_Representante;
        $empresa->Apellido_Representante = $request->Apellido_Representante;
        $empresa->ruc = $request->ruc;
        $empresa->telefono = $request->telefono;
        $empresa->celular = $request->celular;

        $empresa->id_departamento = $request->id_departamento;
        $empresa->id_provincia = $request->id_provincia;
        $empresa->id_distrito = $request->id_distrito;

        $empresa->Direccion = $request->Direccion;
        $empresa->Referencia = $request->Referencia;

        $empresa->save();
        return $empresa;
    }
    public function update(Request $request, $id)
    {
        $empresa = Empresa::findOrFail($id);

        $empresa->Nombre_Comercial = $request->Nombre_Comercial;
        $empresa->Razon_Social = $request->Razon_Social;
        $empresa->Nombre_Representante = $request->Nombre_Representante;
        $empresa->Apellido_Representante = $request->Apellido_Representante;
        $empresa->ruc = $request->ruc;
        $empresa->telefono = $request->telefono;
        $empresa->celular = $request->celular;

        $empresa->id_departamento = $request->id_departamento;
        $empresa->id_provincia = $request->id_provincia;
        $empresa->id_distrito = $request->id_distrito;

        $empresa->Direccion = $request->Direccion;
        $empresa->Referencia = $request->Referencia;

        $empresa->save();

        return $empresa;
    }
    public function show($id)
    {
        return Empresa::findOrFail($id);
    }
    // Ejecuciones para el select en la Vista Empresas/Registrar
    public function GetDepartamento(Request $request){
        if($request->ajax()){
            $data = Departamento::get();
            return response()->json($data,200);
        }else{
            return response()->json($data,400);
        }
    }
    public function GetProvincia(Request $request){ 
        if($request->ajax()){
            $join =  Provincia::join('departamentos','departamentos.id','=','provincias.id_departamento')
            ->select(
            //Departamentos
            'departamentos.nombre as DepartamentoNombre',
            //Provincias
            'provincias.id as id_provincia','provincias.nombre as ProvinciaNombre',
            'provincias.id_departamento')   
            ->where('id_departamento', $request->id_departamento)
            ->get();
            return response()->json($join,200);
        }else{
            return response()->json($join,400);
        }
    }
    public function GetDistrito(Request $request){ 

        if($request->ajax()){
            $join =  Distrito::join('provincias','provincias.id','=','distritos.id_provincia')
            ->select(
            //Departamentos
            'provincias.nombre as ProvinciaNombre',
            //Provincias
            'distritos.id as id_distrito','distritos.nombre as DistritoNombre',
            'distritos.id_provincia')   
            ->where('id_provincia', $request->id_provincia)
            ->get();
            return response()->json($join,200);
        }else{
            return response()->json($join,400);
        }
    }
}
