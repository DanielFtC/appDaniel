<?php

namespace App\Http\Controllers\Curso;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Area;
use App\Curso;

class ControllerCurso extends Controller
{
    public function getArea(){
        $area = Area::all();
        return $area;
    }
    public function store(Request $request)
    {
        $curso = new Curso();
        $curso->nombre = $request->nombre;
        $curso->id_area = $request->id_area;
        $curso->save();
        return $curso;
    }
    public function update(Request $request, $id)
    {
        $curso = Curso::find($id);
        $curso->nombre = $request->nombre;
        $curso->estado = $request->estado;
        $curso->save();
        return $curso;
    }
    public function GetAreaXid(Request $request){
        if($request->ajax()){
            $data = Area::get();
            return response()->json($data,200);
        }else{
            return response()->json($data,400);
        }
    }
    public function GetCursoXid(Request $request){ 
        if($request->ajax()){
            $join =  Curso::join('areas','areas.id','=','cursos.id_area')
            ->select(
            //Departamentos
            'areas.nombre as AreaNombre',
            //Provincias
            'cursos.id','cursos.nombre as CursosNombre','cursos.created_at','cursos.updated_at',
            'cursos.id_area','cursos.estado','cursos.precio')
            // ->orderBy('cursos.id','desc')   
            ->where('id_area', $request->id_area)
            ->get();
            return response()->json($join,200);
        }else{
            return response()->json($join,400);
        }
    } 
}
