<?php

namespace App\Http\Controllers\Roles;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Roles;

class ControllerRoles extends Controller
{
    public function index(){
        $rol = Roles::all();
        return $rol;
    }
}
