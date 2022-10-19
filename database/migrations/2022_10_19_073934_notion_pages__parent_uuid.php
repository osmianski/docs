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
        Schema::table('notion_pages', function (Blueprint $table) {
            $table->foreignUuid('parent_uuid')
                ->nullable()
                ->constrained('notion_pages', 'uuid')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notion_pages', function (Blueprint $table) {
            $table->dropForeign(['parent_uuid']);
        });
    }
};
