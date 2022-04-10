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

//WEBSITE
Route::get('/', "IndexController@index");
Route::get('/page/{id}',"PageController@get");
Route::get('/list',"ProductsController@all");
Route::get('/contact',function () {
    return view("website.contact");
});

//ADMIN
Route::prefix("admin")->group(function () {
    Route::get('/',"IndexController@home")->middleware('auth');
    Route::get('/menus',"MenuController@list")->middleware('auth');
    Route::get('/sliders',"SliderController@list")->middleware('auth');
    Route::get('/pages',"PageController@list")->middleware('auth');
    Route::get("/gallery","GalleryController@list")->middleware('auth'); 
    Route::get("/settings","SettingsController@list")->middleware('auth');
    Route::get("/teachers","TeachersController@list")->middleware('auth'); 
    Route::get("/meta","TeachersMeta@list")->middleware('auth'); 
    Route::get("/lang","Website_languagesController@list")->middleware('auth');
    Route::get("/news","NewsController@list")->middleware('auth');
});
Route::get('logout/', ['as' => 'logout', 'uses' => 'UsersController@destroy']);  

Route::get("/teacher/{slug}", "TeachersController@teacher");
Route::get("/lang/{slug}", function ($slug){
    \App\Models\Wlang::setCurrent($slug);
    return redirect()->back();
});
Route::get("/image/{id}", "ImageController@show");
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
Route::get("/new/{slug}", "NewsController@show");
Route::get('/{any}', "PageController@show")->where('any', '.*');
