<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrimerEnlaceUserToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->bigInteger('id_departamento')->unsigned()->after('created_at');
            $table->foreign('id_departamento')->references('id')->on('departamentos');

            $table->bigInteger('id_provincia')->unsigned()->after('created_at');
            $table->foreign('id_provincia')->references('id')->on('provincias');

            $table->bigInteger('id_distrito')->unsigned()->after('created_at');
            $table->foreign('id_distrito')->references('id')->on('distritos');

            $table->bigInteger('id_rol')->unsigned()->after('created_at');
            $table->foreign('id_rol')->references('id')->on('roles');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
