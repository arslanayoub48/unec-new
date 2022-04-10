<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Productimage extends Migration
{
      /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('productimage')) {
            Schema::create('productimage', function (Blueprint $table) {
                $table->increments('id');
                $table->string('image');$table->integer('product_id');$table->timestamp('updated_at')->useCurrent();$table->timestamp('created_at')->useCurrent();
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
        Schema::dropIfExists('productimage');
    }
}
