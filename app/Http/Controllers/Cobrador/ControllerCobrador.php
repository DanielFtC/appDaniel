<?php

namespace App\Http\Controllers\Cobrador;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cobrador;

class ControllerCobrador extends Controller
{
    public function store(Request $request)
    {
        $cobrador = new Cobrador();
        $cobrador->id_usuario = $request->id_usuario;
        $cobrador->id_departamento = $request->id_departamento;
        $cobrador->id_provincia = $request->id_provincia;
        $cobrador->id_distrito = $request->id_distrito;
        $cobrador->save();
        return $cobrador;
    }
}
