<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\NotionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingController::class, 'show'])
    ->name('home');

Route::get('/notion/auth-callback', [NotionController::class, 'authCallback'])
    ->name('notion.auth-callback');

Route::get('/{user:name}', [ProfileController::class, 'show'])
    //->middleware('auth', 'verified')
    ->name('profile');

require __DIR__.'/auth.php';
