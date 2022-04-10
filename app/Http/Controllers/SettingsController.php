<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Settings;
class SettingsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Settings::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->text;
            $sub[] = $data->value;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Parameterlər",
            "table" => "settings",
            "description" => "Saytın parameterləri",
            "editcols" => [["text" => "Dəyər","name" => "value","type" => "text","placeholder" => "","required" => "true","value" => ""]],
            "cols" => ["#","Adı","Dəyər"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
