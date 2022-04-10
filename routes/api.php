<?php

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

Route::get("/categories","APIController@categories")->middleware("cors");
Route::get("/products","APIController@products")->middleware("cors");
Route::get("/orders","APIController@orders")->middleware("cors");
Route::post("/add", "APIController@store")->middleware("cors");
Route::get("/load", "APIController@load")->middleware("cors");
Route::get("/compile", "IndexController@compile");
