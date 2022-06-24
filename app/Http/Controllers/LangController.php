<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Session;
use Config;
use DB;

class LangController extends Controller
{
    public function change(Request $request, $lang)
    {

        $languages = DB::table('lang')->pluck('slug')->toArray();
        if (in_array($lang, $languages) && session('applocale') &&  session('applocale') != $lang) {
            Session::put('applocale', $request->lang);
            \App\Models\Wlang::setCurrent($request->lang);
        }

        return redirect()->back();
    }
}
