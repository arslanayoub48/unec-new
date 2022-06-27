<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\MenuController as menuController;

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

//ADMIN
Route::group(['prefix' => 'admin',  'middleware' => ['auth']], function () {

    Route::get('/', "IndexController@admin");
    Route::get('/sliders', "SliderController@list");
    Route::get('/pages', "PageController@list");
    Route::get("/gallery", "GalleryController@list");
    Route::get("/settings", "SettingsController@list");
    Route::get("/teachers", "TeachersController@list");
    Route::get("/meta", "TeachersMeta@list");
    Route::get("/lang", "Website_languagesController@list");
    Route::get("/advertisements", "AdvertisementsController@list");
    Route::get("/menus", "MenuController@list");
    Route::get('manage-menus/{id?}', [menuController::class, 'index']);
    Route::post('create-menu', [menuController::class, 'store']);
    Route::get('add-categories-to-menu', [menuController::class, 'addCatToMenu']);
    Route::get('add-post-to-menu', [menuController::class, 'addPostToMenu']);
    Route::get('add-custom-link', [menuController::class, 'addCustomLink']);
    Route::get('update-menu', [menuController::class, 'updateMenu']);
    Route::post('update-menuitem/{id}', [menuController::class, 'updateMenuItem']);
    Route::get('delete-menuitem/{id}/{key}/{in?}', [menuController::class, 'deleteMenuItem']);
    Route::get('delete-menu/{id}', [menuController::class, 'destroy']);

    Route::get("/advertisements_categories", "Advertisements_categoriesController@list");

    Route::get("/pages-manage", "PageController@list");
    Route::post("/page/save", "PageController@save");
    Route::get("/view", "PageController@viewAdmin");
    Route::get("/contentbuilder", "PageController@contentbuilder");


    Route::get("/tags", "IndexController@tags");
    Route::get("/tags", "IndexController@tags");

    // News Sections
    Route::get("/news", "NewsController@list")->name('admin.news');
    Route::get("/news_categories", "News_categoriesController@list")->name('admin.news_categories');

    // Event SectionEventsController
    Route::get("/events", "EventsController@list")->name('admin.events');
    Route::get("/events_categories", "Events_categoriesController@list")->name('admin.events_categories');

    Route::get('logout/', ['as' => 'logout', 'uses' => 'UsersController@destroy']);
    // Filter Tags
    Route::post("/add-tags-filter", "EventsController@filterTag")->name('add-tags-filter');

    //Titles
    Route::resource('titles', TitleController::class);
});




Route::get('/dataPageAction', "IndexController@dataPageAction");
Route::post('/dataPageAction', "IndexController@dataPageActionPost");
Route::get('/change_password', "UsersController@change_password");
Route::post('/change_password', "UsersController@change_password_post");
Route::get('/login', "IndexController@login");
Route::post('login/', ['as' => 'login', 'uses' => 'UsersController@login']);

//Route::get("/staff/{slug}", "TeachersController@teacher");
//Route::get("/staff", function() {return view("website.static.muellimler");});
Route::get("/staff/tag/{tag}", "TeachersController@tagFilter")->name('teacher_tag');
Route::get("/single-staff/{slug}", "TeachersController@show")->name('single_staff');
Route::get("/staff", "TeachersController@index");
Route::post("/staff/filter", "TeachersController@filter");
Route::get("/lang/{lang}", "LangController@change")->name('lang.change');
Route::get("/image/{id}", "ImageController@show");
//HELPERS


Route::get("/single-news/{slug}", "NewsController@show")->name('single_news');

Route::get("/news", "NewsController@index");
Route::get("/news/tag/{tag}", "NewsController@tagFilter");


Route::get("/advertisement/{slug}", "AdvertisementsController@show");
Route::get("/advertisements", "AdvertisementsController@index");
Route::get("/advertisement/tag/{tag}", "AdvertisementsController@tagFilter");
//Route::get("/advertisements", function (){ return view("website.static.advertisements" ); });

//Route::get("/events", function (){ return view("website.static.events" ); });
Route::get("/events", "EventsController@index");
Route::get("/single-event/{slug}", "EventsController@show");
Route::post("/events/filter", "EventsController@filter");

Route::get("/professions", function () {
    return view("website.static.professions.allProfessions");
});
Route::get("/single-profession", function () {
    return view("website.static.professions.singleProfession");
});
Route::get("/empty-page", function () {
    return view("website.static.emptyPage");
});

//Subscribe
Route::post("/subscribe", "SubscriptionController@store")->name('subscribe');
Route::get("/subscriptions", "SubscriptionController@index")->name('index');


//Social
Route::get('/social',"SocialController@index")->name('social');
Route::post('/add-social',"SocialController@store")->name('add-social');

Route::get('/{any}', "PageController@show")->where('any', '.*');
