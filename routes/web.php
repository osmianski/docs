<?php

use App\Http\Controllers\GitHubController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MappingController;
use App\Http\Controllers\PlaygroundController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'show'])->name('home');
Route::middleware('auth')->group(function () {
    Route::get('/{user:slug}/_settings', [SettingsController::class, 'view']);
    Route::get('/{user:slug}/_mappings', [MappingController::class, 'index']);
    Route::get('/{user:slug}/_mappings/create', [MappingController::class, 'create']);
    Route::get('/_github', [GitHubController::class, 'show']);
    Route::get('/_github/auth', [GitHubController::class, 'callback']);
});

if (!app()->isProduction()) {
    Route::get('/_playground', [PlaygroundController::class, 'show']);
    Route::get('/_playground/comboboxes', [PlaygroundController::class, 'showComboboxes']);
}

