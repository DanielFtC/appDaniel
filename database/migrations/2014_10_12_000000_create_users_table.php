<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->bigIncrements('id');

            $table->string('username');
            $table->string('name');
            $table->string('apellido');
            $table->integer('celular');
            $table->integer('telefono')->nullable();
            $table->longText('dni')->unique();
            $table->string('tipo_documento');
            $table->longText('Descripcion')->nullable();
            $table->string('sexo');

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();

            $table->string('password');
            $table->string('save_password');

            $table->string('flag_Matriculador')->default('inactivo');
            $table->string('flag_Cobrador')->default('inactivo');

            $table->longText('Direccion');
            
            // $table->bigInteger('id_departamento')->unsigned();
            // $table->foreign('id_departamento')->references('id')->on('departamentos');

            // $table->bigInteger('id_provincia')->unsigned();
            // $table->foreign('id_provincia')->references('id')->on('provincias');

            // $table->bigInteger('id_distrito')->unsigned();
            // $table->foreign('id_distrito')->references('id')->on('distritos');

            // $table->bigInteger('id_rol')->unsigned();
            // $table->foreign('id_rol')->references('id')->on('roles');

            $table->string('estado')->default('activo');

            $table->rememberToken();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
