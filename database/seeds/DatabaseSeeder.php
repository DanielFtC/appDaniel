<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolSeed::class);
        $this->call(UserSeed::class);
        // $this->call(DepartamentoSeed::class);
        // $this->call(ProvinciaSeed::class);
        // $this->call(DistritoSeed::class);
        // $this->call(EmpresaSeed::class);
    }
}
