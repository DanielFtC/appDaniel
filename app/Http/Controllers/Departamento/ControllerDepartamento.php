<?php

namespace App\Http\Controllers\Departamento;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Departamento;

class ControllerDepartamento extends Controller
{
    public function index()
    {
        $departamento =  Departamento::orderBy('nombre','asc')->paginate();
        return response()->json($departamento);

    }
    public function GetDepartamento(){
        $data = Departamento::orderBy('nombre','asc')->get();
        return response()->json($data);
    }
    public function store(Request $request)
    {
        $departamento = new Departamento();
        $departamento->nombre = $request->nombre;
        $departamento->save();
        return $departamento;
    }
}
