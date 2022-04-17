<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image')->nullable();
            $table->text('slug')->nullable();
            $table->string('name');
            $table->longText('short_about')->nullable();
            $table->longText('about')->nullable();
            $table->longText('tedris_info')->nullable();
            $table->longText('nesr_info')->nullable();
            $table->longText('istecrubesi')->nullable();
            $table->longText('contact_info')->nullable();
            $table->string('language_knowlage')->nullable();
            $table->string('orcid_id')->nullable();
            $table->string('google_scholar')->nullable();
            $table->string('publons_id')->nullable();
            $table->string('scopus_id')->nullable();
            $table->string('tags')->nullable();
            $table->string('tedris')->nullable();
            $table->string('kafedra')->nullable();
            $table->string('struktur')->nullable();
            $table->string('elmiderece')->nullable();
            $table->string('vezife')->nullable();
            $table->string('naliyyetler')->nullable();
            $table->text('slider')->nullable();
            $table->string('locale', 2)->nullable();
            $table->integer('active')->default(1);
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('created_at')->useCurrent();
        });
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
