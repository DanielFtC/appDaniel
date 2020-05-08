<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('Nombre_Comercial',20);
            $table->longText('Razon_Social',20)->unique();
            $table->string('Nombre_Representante',20);
            $table->string('Apellido_Representante',20);
            $table->longText('ruc')->unique();
            $table->integer('telefono');
            $table->integer('celular');

            $table->bigInteger('id_departamento')->unsigned();
            $table->foreign('id_departamento')->references('id')->on('departamentos');

            $table->bigInteger('id_provincia')->unsigned();
            $table->foreign('id_provincia')->references('id')->on('provincias');

            $table->bigInteger('id_distrito')->unsigned();
            $table->foreign('id_distrito')->references('id')->on('distritos');
            
            $table->longText('Direccion');
            $table->longText('Referencia')->nullable();

            $table->string('estado')->default('activo')->nullable();

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
        Schema::dropIfExists('empresas');
    }
}
