<?php

namespace App\Http\Controllers\Matriculador;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Matriculador;

class ControllerMatriculador extends Controller
{
    public function store(Request $request)
    {
        $matriculador = new Matriculador();
        $matriculador->id_usuario = $request->id_usuario;
        $matriculador->id_departamento = $request->id_departamento;
        $matriculador->id_provincia = $request->id_provincia;
        $matriculador->id_distrito = $request->id_distrito;
        $matriculador->save();
        return $matriculador;
    }
}
