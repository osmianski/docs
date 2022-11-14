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
        Schema::create('notion_pages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('workspace_id')
                ->constrained('notion_workspaces')
                ->cascadeOnDelete();

            $table->foreignId('parent_id')
                ->constrained('notion_pages')
                ->cascadeOnDelete();

            $table->uuid();
            $table->unique(['workspace_id', 'uuid']);

            $table->string('slug');
            $table->string('title');
            $table->json('data')
                ->nullable();
            $table->json('children')
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
        Schema::drop('notion_pages');
    }
};
