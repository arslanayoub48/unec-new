<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advertisements;
class AdvertisementsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Advertisements::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;$sub[] = $data->title;$sub[] = $data->info;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Elanlar",
            "translate" => true,
            "table" => "advertisements",
            "description" => "Bu bölmədə elanlar əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
                ["text" => "Şəkil","name" => "image","type" => "image","placeholder" => "","required" => "false","value" => ""],["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "false","value" => ""],["text" => "Məlumat","name" => "info","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""]
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
    public function show($slug){
        $advertisement = Advertisements::where("slug", $slug)->first();
        return view("website.dynamic.new", ["new" => $advertisement]);
    }
}
