<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Gallery extends Migration
{ 
    public function up()
    {
        if (!Schema::hasTable('gallery')) {
            Schema::create('gallery', function (Blueprint $table) {
                $table->increments('id');
                $table->string('image');$table->timestamp('updated_at')->useCurrent();$table->timestamp('created_at')->useCurrent();
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
        Schema::dropIfExists('gallery');
    }
}
