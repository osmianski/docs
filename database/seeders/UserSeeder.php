<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(9)->create();

        User::factory()->state([
            'email' => 'john@example.com',
        ])->create();
    }
}
