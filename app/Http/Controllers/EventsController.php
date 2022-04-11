<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Events;
class EventsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Events::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->title;$sub[] = $data->info;$sub[] = $data->start_at;$sub[] = $data->end_at;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Tədbirlər",
            "table" => "events",
            "description" => "Bu bölmədə tədbirlər əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
               ["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "false","value" => ""],["text" => "Məlumat","name" => "info","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""]
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
                
                [   "text" => "Tədbirin başlama tarixi",
                    "name" => "start_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "Tədbirin bitmə tarixi",
                    "name" => "end_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ]
            ],
            "cols" => ["#","Başlıq","Məlumat", "Tədbirin başlama tarixi", "Tədbirin bitmə tarixi"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
