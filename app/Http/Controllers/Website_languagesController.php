<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wlang;
class Website_languagesController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Wlang::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->name;
            $sub[] = $data->slug;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Saytın dilləri",
            "table" => "lang",
            "description" => "",
            "editcols" => [["text" => "Dilin adı","name" => "name","type" => "text","placeholder" => "","required" => true,"value" => ""],["text" => "Slug","name" => "slug","type" => "hidden","slug" => "name","placeholder" => "","required" => false,"value" => ""]],
            "cols" => ["#","Dilin adı", "Slug"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
