<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class News extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('news')) {
            Schema::create('news', function (Blueprint $table) {
                $table->increments('id');
                $table->string('image');$table->string('title');$table->string('info');$table->timestamp('updated_at')->useCurrent();$table->timestamp('created_at')->useCurrent();
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
        Schema::dropIfExists('news');
    }
}
