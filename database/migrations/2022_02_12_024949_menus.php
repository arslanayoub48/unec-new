<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Menus extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('menus')) {
            Schema::create('menus', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->integer("parent_id");
                $table->string("link");
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
        Schema::dropIfExists('menus');
    }
}
