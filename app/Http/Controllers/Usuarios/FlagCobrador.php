<?php

namespace App\Http\Controllers\Usuarios;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class FlagCobrador extends Controller
{
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->flag_Cobrador = $request->flag_Cobrador;
        $user->save();
        return response()->json($user,200);
    }
}
