<?php

namespace App\Http\Controllers;

use App\Models\Advertisements;
use App\Models\Menu;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\Admin\Data\HubService;
use App\Services\Admin\Data\PostService;
use App\Services\Admin\Data\TagsService;
use App\Models\Tags;
use App\Models\Wlang;
use DateTime;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function admin()
    {
        return view("admin/index");
    }

    public function index()
    {

        $languages = DB::table('lang')->get();

        $news = News::orderBy("id","DESC")->where("status", "publish")->take(4)->get();
        $advertisements = Advertisements::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent())->get();
        return view("website.indexNew")->with('news',$news)->with('advertisements',$advertisements)->with('languages',$languages);
    }

    function dataPageAction(Request $request)
    {
        $hub = new HubService();
        return $hub->handle($request);

    }

    public function dataPageActionPost(Request $request)
    {
        $post = new PostService();
        return $post->handle($request);
    }

    public function tags()
    {
        $tags = new TagsService();
        return $tags->handle();
    }

    public function login(Request $request)
    {
        if (Auth::check()) {
            return redirect()->to("/admin");

        }
        return view("admin/login");


    }


}
