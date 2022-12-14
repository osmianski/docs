<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\NotionController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\HandleProfiles;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Profile;

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

//Route::get('/{user:name}', [ProfileController::class, 'show'])
//    //->middleware('auth', 'verified')
//    ->name('profile');

require __DIR__.'/auth.php';

Route::middleware(HandleProfiles::class)
    ->prefix('/{profile:name}')
    ->group(function ()
{
    Route::get('', [ProfileController::class, 'show'])
        ->name('profile.home');

    Route::get('/books', [Profile\BooksController::class, 'show'])
        ->name('profile.books');

    Route::get('/books/create', [Profile\BooksController::class, 'showNew'])
        ->name('profile.books.create');

    Route::post('/books/create', [Profile\BooksController::class, 'saveNew'])
        ->name('profile.books.do_create');
});
