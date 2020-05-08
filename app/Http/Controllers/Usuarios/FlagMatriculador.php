<?php

namespace App\Http\Controllers\Usuarios;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class FlagMatriculador extends Controller
{
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->flag_Matriculador = $request->flag_Matriculador;
        $user->save();
        return response()->json($user,200);
    }
}
