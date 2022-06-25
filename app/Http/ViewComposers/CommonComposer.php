<?php

namespace App\Http\ViewComposers;


use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Builder;
use DB;

class CommonComposer
{
    /**
     * Create a Common composer.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $showModel = false;
        $route  =   Route::currentRouteName();
        $showRoute = [
            'admin.news',
            'admin.events',
            'admin.news_categories',
            'admin.events_categories',
        ];

        if (in_array($route, $showRoute)) {
            $showModel = true;
        }

        $data['showmodel'] = $showModel;
        $data['languages'] = DB::table('lang')->get();
        $view->with($data);
    }
}
