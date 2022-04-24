<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Session;
use Config;
class LangController extends Controller
{
    public function change(Request $request)
    {
        $languages = [
            "az" => "AZ",
            "ru" => "RU",
            "en" => "EN"
        ];
        if (array_key_exists($request->lang, $languages)) {
            Session::put('applocale', $request->lang);
        }
        \App\Models\Wlang::setCurrent($request->lang);
        return redirect()->back();
    }
}
