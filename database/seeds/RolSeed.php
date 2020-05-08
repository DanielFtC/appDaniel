<?php

use Illuminate\Database\Seeder;
use App\Roles;

class RolSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Roles::create([
            'nombre' => 'Administrador',
            'estado' => 'activo',
        ]);
        Roles::create([
            'nombre' => 'Administrativo',
            'estado' => 'activo',
        ]);
        Roles::create([
            'nombre' => 'Asesor',
            'estado' => 'activo',
        ]);
        Roles::create([
            'nombre' => 'Recuperador',
            'estado' => 'activo',
        ]);
    }
}
