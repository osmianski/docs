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
        Schema::create('notion_workspaces', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->timestamps();
            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->json('bot')
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
        Schema::drop('notion_workspaces');
    }
};
