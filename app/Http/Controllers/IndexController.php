<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\Admin\Data\HubService;
use App\Services\Admin\Data\PostService;
use App\Services\Admin\Data\TagsService;
use App\Models\Tags;
use DateTime;
class IndexController extends Controller
{   
    public function admin(){
        return view("admin/index");
    }
    public function index(){
        return view("website.index");
    }
    function dataPageAction(Request $request){
        $hub = new HubService();
        return $hub->handle($request);        
            
    }
    public function dataPageActionPost(Request $request){
        $post = new PostService();
        return $post->handle($request);
    }
    public function tags(){
       $tags = new TagsService();
       return $tags->handle();
    }
  
    public function login(Request $request){
        if(Auth::check()){
            return redirect()->to("/admin");

        }
        return view("admin/login");
  
        
    }
 
  

}
