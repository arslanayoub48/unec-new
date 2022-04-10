<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sliders extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('sliders')) {
            Schema::create('sliders', function (Blueprint $table) {
                $table->increments('id');
                $table->string('text');
                $table->integer("description");
                $table->string("btn_text");
                $table->string("btn_link");
                $table->string("image");
                $table->timestamp("created_at")->useCurrent();
                $table->timestamp("updated_at")->useCurrent();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sliders');
    }
}
