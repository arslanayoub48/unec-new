<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ModelName;
class ControllerName extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = ModelName::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            {{code}}
            $dat[] = $sub;
        }
        $params = [
            "title" => "{{title}}",
            "table" => "{{table}}",
            "description" => "{{description}}",
            "editcols" => [{{editcols}}],
            "imagecol" => 1,
            "cols" => [{{cols}}],
            "data" => $dat,
            "noaction" => false,
            "actions" => [{{actions}}]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
