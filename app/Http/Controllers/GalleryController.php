<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
class GalleryController extends Controller
{
    public function list(Request $request){
        $data = [];
        $model = Gallery::all();
        foreach($model as $dat){
            $sub = [];
            $sub[] = $dat->id;
            $sub[] = $dat->image;
            $sub[] = "/images/".$dat->image;
            $sub[] = $dat->showOn == 1? "Göstər" : "Göstərmə";
            $data[] = $sub;
        }
        $params = [
            "title" => "Gallery",
            "table" => "gallery",
            "description" => "Şəkillər",
            "editcols" => [
                ["text" => "Şəkil","name" => "image","type" => "image","placeholder" => "","required" => false,"value" => ""],
                ["text" => "Saytda göstər","name" => "showOn","type" => "select","selectdata" => [["id" => 1, "text" =>"Göstər"], ["id" => 0, "text" =>"Göstərmə"]],"selectdatacol" => "text","placeholder" => "","required" => "true","value" => ""]
            ],
            "imagecol" => 1,
            "cols" => ["#","Şəkil", "Link", "Saytda göstər"],
            "data" => $data,
            "noaction" => false,
            "actions" => [["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Yüklə","icon" => "fa fa-plus","type" => "create","link" => "/dataPageAction?action=create", "position" => "top"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
