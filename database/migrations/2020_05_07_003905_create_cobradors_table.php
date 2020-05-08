<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCobradorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cobradors', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('id_usuario')->unsigned()->unique();
            $table->foreign('id_usuario')->references('id')->on('users');

            $table->bigInteger('id_departamento')->unsigned();
            $table->foreign('id_departamento')->references('id')->on('departamentos');

            $table->bigInteger('id_provincia')->unsigned();
            $table->foreign('id_provincia')->references('id')->on('provincias');

            $table->bigInteger('id_distrito')->unsigned();
            $table->foreign('id_distrito')->references('id')->on('distritos');

            $table->string('estado')->default('activo');

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
        Schema::dropIfExists('cobradors');
    }
}
