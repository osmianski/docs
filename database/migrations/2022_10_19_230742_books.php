<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->string('type', 20);
            $table->boolean('has_multiple_roots')
                ->default(false);
            $table->foreignUuid('notion_page_uuid')
                ->nullable()
                ->constrained('notion_pages', 'uuid')
                ->cascadeOnUpdate()
                ->nullOnDelete();
            $table->string('name');
            $table->string('title')
                ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('books');
    }
};
