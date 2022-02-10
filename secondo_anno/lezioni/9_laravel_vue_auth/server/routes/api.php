<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["middleware" => "auth:sanctum"], function () {
    Route::post("logout", [LoginController::class, "logout"]);
    Route::get("me", [LoginController::class, "me"]);

    Route::get("test", [TestController::class, "test"]);
});

Route::post("/login", [LoginController::class, "login"]);
