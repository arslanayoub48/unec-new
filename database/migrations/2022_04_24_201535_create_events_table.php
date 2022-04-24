<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->longText('info');
            $table->longText('more')->nullable();
            $table->text('slider')->nullable();
            $table->string('slug')->nullable();
            $table->string('locale')->nullable();
            $table->integer('event_type')->nullable();
            $table->text('address')->nullable();
            $table->date('start_at')->nullable();
            $table->date('end_at')->nullable();
            $table->integer('author')->nullable();
            $table->timestamp('publish_at')->nullable();
            $table->string('status', 50)->nullable();
            $table->integer('category_id');
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('created_at')->useCurrent();
            $table->text('event_language');
            $table->integer('korpus');
            $table->string('tags')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
