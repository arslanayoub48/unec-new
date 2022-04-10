<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meta;
use App\Models\MetaTypes;
class TeachersMeta extends Controller
{
    public function list(Request $request){
        $dat = [];
        $lang = \App\Models\Wlang::getCurrent();
        $model = Meta::where("rel_id", 0)->where("type", "teacher")->where("locale",$lang)->get();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = Meta::type($data->name);
            $sub[] = $data->value;
            $sub[] = $data->created_at;
      
            $dat[] = $sub;
        }
        $params = [
            "title" => "Müəllimlər Meta",
            "table" => "meta",
            "translate" => true,
            "description" => "Bu bölmədə müəllimləri meta əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
               
                [   "text" => "Ad",
                    "name" => "name",
                    "type" => "select",
                    "selectdata" => MetaTypes::all()->toArray(),
                    "selectdatacol" => "name",
                    "selectsavecol" => "slug",
                    "placeholder" => "",
                    "required" => true,
                    "value" => ""
                ],
                [   "text" => "Dəyər",
                    "name" => "value",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   "text" => "0",
                    "name" => "rel_id",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "0"
                ],  
                [
                    "text" => "teacher",
                    "name" => "type",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "teacher"
                ]
               
            ],
            "cols" => [
                    "#",
                    "Başlıq",
                    "Dəyər",
                    "Yaradılma tarixi"
            ],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş",
                "icon" => "fa fa-plus",
                "type" => "edit",
                "link" => "/dataPageAction?action=edit"],
                ["text" => "Sil",
                "icon" => "fa fa-plus",
                "type" => "remove",
                "link" => "/dataPageAction?action=remove"],
                ["text" => "Əlavə et",
                "icon" => "fa fa-plus",
                "type" => "create",
                "position" => "top",
                "link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
