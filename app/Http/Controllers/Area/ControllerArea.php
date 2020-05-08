<?php

namespace App\Http\Controllers\Area;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Area;

class ControllerArea extends Controller
{
    public function index()
    {
        $area =  Area::orderBy('nombre','asc')->paginate(10);
        return response()->json($area);

    }
    public function store(Request $request)
    {
        $area = new Area();
        $area->nombre = $request->nombre;
        $area->save();
        return $area;
    }
}
