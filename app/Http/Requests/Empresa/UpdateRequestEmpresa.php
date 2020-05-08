<?php

namespace App\Http\Requests\Empresa;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequestEmpresa extends FormRequest
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
            'Nombre_Comercial' => 'required|string|max:50',
                'Razon_Social' => 'required|string|max:50',
                'Nombre_Representante' => 'required|string|max:50',
                'Apellido_Representante' => 'required|string|max:50',
                'ruc' => 'required|string|max:11|unique:empresas,ruc',
                'telefono' => 'required|string|max:7',
                'celular' => 'required|string|max:9',
                'id_departamento' => 'required',
                'id_provincia' => 'required',
                'id_distrito' => 'required',
                'Direccion' => 'required|string|max:50',
                'Descripcion' => 'required|string|max:50',
        ];
    }
}
