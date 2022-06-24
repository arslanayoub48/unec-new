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
        $data['languages'] = DB::table('lang')->get();

        $view->with($data);
    }
}
