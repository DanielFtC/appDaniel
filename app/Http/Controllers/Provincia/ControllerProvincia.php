<?php

namespace App\Http\Controllers\Provincia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Provincia;
use App\Departamento;

class ControllerProvincia extends Controller
{
    public function index()
    {
        $provincia =  Provincia::orderBy('nombre','asc')->paginate();
        return response()->json($provincia);
    }
    public function store(Request $request)
    {
        $provincia = new Provincia();
        $provincia->nombre = $request->nombre;
        $provincia->id_departamento = $request->id_departamento;
        $provincia->save();
        
        return $provincia;
    } 
}