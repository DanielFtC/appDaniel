<?php

namespace App\Http\Controllers\Curso;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Curso;

class Estado extends Controller
{
    public function update(Request $request, $id)
    {
        $curso = Curso::find($id);
        $curso->nombre = $request->nombre;
        // $curso->estado = $request->estado;
        $curso->save();
        return $curso;
    }
}
