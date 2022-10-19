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
        Schema::table('book_roots', function (Blueprint $table) {
            $table->foreignUuid('notion_page_uuid')
                ->nullable()
                ->constrained('notion_pages', 'uuid')
                ->cascadeOnUpdate()
                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('book_roots', function (Blueprint $table) {
            $table->dropForeign(['notion_page_uuid']);
        });
    }
};
