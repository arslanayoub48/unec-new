<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advertisements_categories;
class Advertisements_categoriesController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Advertisements_categories::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->title;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Elan Kategoriyaları",
            "table" => "advertisements_categories",
            "description" => "Bu bölmədə elan kategoriyalarını əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "false","value" => ""]],
            "cols" => ["#","Başlıq"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
