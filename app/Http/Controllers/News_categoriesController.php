<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Admin\News_CategoriesService;
class News_categoriesController extends Controller
{
    public function list(Request $request){
        $params = new News_CategoriesService(); 
        $params = $params->handle($request);
        return view("admin/datapage" , ["params" => $params] );
    }
}
