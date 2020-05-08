<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'administrador',
            'name' => 'Daniel',
            'apellido' => 'Caso Quintanilla',
            'celular' => 926685451,
            'telefono' => 5656646,
            'dni' => '76165238',
            'tipo_documento' => 'dni',
            'Descripcion' => 'Nuevo Ususario',
            'sexo' => 'Masculino',
            'email' => 'administrador@ticket.com',
            'password' => bcrypt('password'),
            'save_password' => 'password',
            'Direccion' => 'Virgen de Guadalupe',
            'id_departamento' => 1,
            'id_provincia' => 1,
            'id_distrito' => 1,
            'id_rol' => 1,
        ]);
        
        User::create([
            'username' => 'administrativo',
            'name' => 'Daniel',
            'apellido' => 'Caso Quintanilla',
            'celular' => 926685451,
            'telefono' => 5656646,
            'dni' => '76165233',
            'tipo_documento' => 'dni',
            'Descripcion' => 'Nuevo Ususario',
            'sexo' => 'Masculino',
            'email' => 'administrativo@ticket.com',
            'password' => bcrypt('password'),
            'save_password' => 'password',
            'Direccion' => 'Virgen de Guadalupe',
            'id_departamento' => 1,
            'id_provincia' => 1,
            'id_distrito' => 1,
            'id_rol' => 2,
        ]);
        
        User::create([
            'username' => 'asesor',
            'name' => 'Daniel',
            'apellido' => 'Caso Quintanilla',
            'celular' => 926685451,
            'telefono' => 5656646,
            'dni' => '76165234',
            'tipo_documento' => 'dni',
            'Descripcion' => 'Nuevo Ususario',
            'sexo' => 'Masculino',
            'email' => 'asesor@ticket.com',
            'password' => bcrypt('password'),
            'save_password' => 'password',
            'Direccion' => 'Virgen de Guadalupe',
            'id_departamento' => 1,
            'id_provincia' => 1,
            'id_distrito' => 1,
            'id_rol' => 3,
        ]);
       
        User::create([
            'username' => 'recuperador',
            'name' => 'Daniel',
            'apellido' => 'Caso Quintanilla',
            'celular' => 926685451,
            'telefono' => 5656646,
            'dni' => '76165230',
            'tipo_documento' => 'dni',
            'Descripcion' => 'Nuevo Ususario',
            'sexo' => 'Masculino',
            'email' => 'recuperador@ticket.com',
            'password' => bcrypt('password'),
            'save_password' => 'password',
            'Direccion' => 'Virgen de Guadalupe',
            'id_departamento' => 1,
            'id_provincia' => 1,
            'id_distrito' => 1,
            'id_rol' => 4,
        ]);
    }
}
