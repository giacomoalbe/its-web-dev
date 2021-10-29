<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToProjectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projections', function (Blueprint $table) {
            $table->timestamp("date")->nullable();
            $table->string("room")->nullable();
            $table->boolean("3d")->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projections', function (Blueprint $table) {
            $table->dropColumn([
                "date",
                "room",
                "3d"
            ]);
        });
    }
}
