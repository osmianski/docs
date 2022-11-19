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

            $table->string('source', 20);

            $table->foreignId('notion_workspace_id')
                ->nullable()
                ->constrained('notion_workspaces')
                ->nullOnDelete();

            $table->foreignId('notion_page_id')
                ->nullable()
                ->constrained('notion_pages')
                ->nullOnDelete();

            $table->boolean('has_multiple_roots')
                ->default(false);
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
