<?php

namespace App\Http\Controllers;

use App\Models\Advertisements;
use Illuminate\Http\Request;
use App\Models\News;
use App\Models\News_categories;
class NewsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = News::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;$sub[] = $data->title;$sub[] = $data->info;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Xəbərlər",
            "table" => "news",            
            "translate" => true,
            "description" => "Bu bölmədə xəbərləri əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
                ["text" => "Şəkil","name" => "image","type" => "image","placeholder" => "","required" => false,"value" => ""],["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "false","value" => ""],["text" => "Məlumat","name" => "info","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""]
                ,[
                    "text" => "Slider şəkilləri",
                    "type" => "multifiles",
                    "name" => "slider",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                ],
                
                [   "text" => "",
                    "name" => "slug",
                    "slug" => "title",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
            ],
                [   
                    "text" => "Əlavə olunma tarixi",
                    "name" => "created_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Kategoriya",
                    "name" => "category_id",
                    "type" => "select",
                    "selectdata" => News_categories::all()->toArray(),
                    "selectdatacol" => "title",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Teqlər",
                    "name" => "tags",
                    "type" => "tags",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Status",
                    "name" => "status",
                    "type" => "select",
                    "selectdata" => [["id" => "publish", "text" => "Publish"], ["id" => "unPublish", "text" => "Unpublish"]],
                    "selectdatacol" => "text",
                    "placeholder" => "",
                    "required" => true,
                    "value" => ""
                ]
            ],
            "imagecol" => 1,
            "cols" => ["#","Şəkil","Başlıq","Məlumat"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
//    public function show($slug){
//        $new = News::where("slug", $slug)->first();
//        $new->views += 1;
//        $new->save();
//        return view("website.static.new", ["new" => $new]);
//    }
    public function show($slug){

        $single_news = News::where("slug", $slug)->first();
        $single_news->views += 1;
        $single_news->save();


        $previous_id = News::where('id', '<', $single_news->id)->max('id');
        $next_id = News::where('id', '>', $single_news->id)->min('id');

        if ($next_id==null){
            $next_id = $previous_id-1;
        }
        if ($previous_id==null){
            $previous_id = $next_id+1;
        }
        $previous_news = News::find($previous_id);
        $next_news = News::find($next_id);

        return view("website.static.news.singleNews", ["single_news" => $single_news, "previous_news" => $previous_news, "next_news" => $next_news]);
    }

    public function index(){

        $news = News::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent())->where("status", "publish")->get();

        return view("website.static.news.allNews" )->with('news',$news);
    }

    public function tagFilter($requestTag){
        $news_array=[];
        $all_news = News::where("locale", \App\Models\Wlang::getCurrent())->get();

        foreach ($all_news as $single_news){
            foreach (json_decode($single_news->tags) as $tag){
                if ($tag == $requestTag){
                    $news_array[]=$single_news->id;
                }
            }
        }
        $news = News::whereIn("id", $news_array)->get();

        return view("website.static.news.allNews", ["news" => $news]);


    }
}
