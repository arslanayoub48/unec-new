<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use App\Models\Advertisements;
use App\Models\Advertisements_categories;

class AdvertisementsController extends Controller
{
    public function list(Request $request)
    {
        $dat = [];
        $model = Advertisements::all();
        foreach ($model as $data) {
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;
            $sub[] = $data->title;
            $sub[] = $data->info;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Elanlar",
            "translate" => true,
            "table" => "advertisements",
            "description" => "Bu bölmədə elanlar əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
                ["text" => "Şəkil", "name" => "image", "type" => "image", "placeholder" => "", "required" => false, "value" => ""], ["text" => "Başlıq", "name" => "title", "type" => "text", "placeholder" => "", "required" => "false", "value" => ""], ["text" => "Məlumat", "name" => "info", "type" => "ckeditor", "placeholder" => "", "required" => "false", "value" => ""]
                , [
                    "text" => "Slider şəkilləri",
                    "type" => "multifiles",
                    "name" => "slider",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                ],

                ["text" => "",
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
                ],
                [
                    "text" => "Kategoriya",
                    "name" => "category_id",
                    "type" => "select",
                    "selectdata" => Advertisements_categories::all()->toArray(),
                    "selectdatacol" => "title",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ]
            ],
            "imagecol" => 1,
            "cols" => ["#", "Şəkil", "Başlıq", "Məlumat"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş", "icon" => "fa fa-plus", "type" => "edit", "link" => "/dataPageAction?action=edit"], ["text" => "Sil", "icon" => "fa fa-plus", "type" => "remove", "link" => "/dataPageAction?action=remove"], ["text" => "Əlavə et", "icon" => "fa fa-plus", "type" => "create", "position" => "top", "link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage", ["params" => $params]);
    }

    public function show($slug)
    {
        $advertisement = Advertisements::where("slug", $slug)->first();
        $previous_id = Advertisements::where('id', '<', $advertisement->id)->max('id');
        $next_id = Advertisements::where('id', '>', $advertisement->id)->min('id');

        if ($next_id==null){
            $next_id = $previous_id-1;
        }
        if ($previous_id==null){
            $previous_id = $next_id+1;
        }
        $previous_advertisement = Advertisements::find($previous_id);
        $next_advertisement = Advertisements::find($next_id);

        return view("website.static.advertisement.singleAdvertisement", ["advertisement" => $advertisement,"previous_advertisement" => $previous_advertisement,"next_advertisement" => $next_advertisement,]);
    }

    public function index()
    {
        $advertisements = Advertisements::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent())->get();
        return view("website.static.advertisement.allAdvertisement", ["advertisements" => $advertisements]);


    }

    public function tagFilter($requestTag){
        $advertisment_array=[];
        $all_advertisments = Advertisements::where("locale", \App\Models\Wlang::getCurrent())->get();

        foreach ($all_advertisments as $advertisment){
            foreach (json_decode($advertisment->tags) as $tag){
                if ($tag == $requestTag){
                    $advertisment_array[]=$advertisment->id;
                }
            }
        }
        $advertisements = Advertisements::whereIn("id", $advertisment_array)->get();

        return view("website.static.advertisement.allAdvertisement", ["advertisements" => $advertisements]);


    }
}
