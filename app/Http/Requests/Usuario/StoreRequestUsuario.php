<?php

namespace App\Http\Requests\Usuario;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequestUsuario extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string',
            'name' => 'required|string',
            'apellido' => 'required|string',
            'celular' => 'required|string|max:9',
            'telefono' => 'required|string|max:7',
            'dni' => 'required|string|unique:users,dni|max:8',
            'tipo_documento' => 'required',
            'Descripcion' => 'required|string|max:50',
            'sexo' => 'required',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required',
            'save_password' => 'required',
            'id_departamento' => 'required',
            'id_provincia' => 'required',
            'id_distrito' => 'required',
            'Direccion' => 'required|string|max:50',
            'id_rol' => 'required',
        ];
    }
}
