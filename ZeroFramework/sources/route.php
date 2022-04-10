<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
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

Route::get('/', "IndexController@index");
Route::get('/admin',"IndexController@home")->middleware('auth');
Route::get('/menus',"MenuController@list")->middleware('auth');
Route::get('/sliders',"SliderController@list")->middleware('auth');
Route::get('/pages',"PageController@list")->middleware('auth');

//HELPERS
Route::get('/dataPageAction',"IndexController@dataPageAction")->middleware('auth');
Route::post('/dataPageAction',"IndexController@dataPageActionPost")->middleware('auth');

//AUTH
Route::get('/change_password', "UsersController@change_password")->middleware('auth');
Route::post('/change_password', "UsersController@change_password_post")->middleware('auth');

Route::get('/login',"IndexController@login");
Route::post('login/', ['as' => 'login', 'uses' => 'UsersController@login']);

Route::post('register/', ['as' => 'register', 'uses' => 'UsersController@store']);

Route::get('/reset',"UsersController@reset");
Route::post('reset/', ['as' => 'reset', 'uses' => 'UsersController@reset_password']);

Route::get('logout/', ['as' => 'logout', 'uses' => 'UsersController@destroy']); 