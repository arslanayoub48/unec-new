<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TeachersTable extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('teachers')) {
            Schema::create('teachers', function (Blueprint $table) {
                $table->increments('id');
                $table->string('image');$table->string('about');
                $table->string('contact_info');
                $table->string('text');
                $table->string('orcid_id');
                $table->string('publons_id');
                $table->string('scopus_id');
                $table->string('tags');
                $table->timestamp('updated_at')->useCurrent();
                $table->timestamp('created_at')->useCurrent();
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
        Schema::dropIfExists('teachers');
    }
}
