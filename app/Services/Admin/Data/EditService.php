<?php

namespace App\Services\Admin\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class EditService{
    public function handle($params, Request $request){
        $data = DB::table($params["table"])->where("id", $request->id)->first();
        $editcols = [];
        foreach($params["editcols"] as $col){
            if($col["type"] == "text" || $col["type"] == "select" || $col["type"] == "ckeditor" || $col["type"] == "multiselect"|| $col["type"] == "multifiles"){
                $col["value"] = $data->{$col["name"]};
               
            }
            if($col["type"] == "multicontent"){
                $pivot = DB::table("rel")->where("content_id", $request->id)->where("content_type", $col["pivot"])->get()->toArray();
                $col["values"] = $pivot;
               
            }  
            if($col["type"] == "date"){
                $col["value"] = date("Y-m-d", strtotime($data->{$col["name"]}));
            } 
            if($col["type"] == "tags"){
                $json_tags = json_decode($data->{$col["name"]});
                if(is_array($json_tags))
                    $col["value"] = implode(",", json_decode($data->{$col["name"]}));
            }
         
             $editcols[] = $col;
        }
        $params["editcols"] = $editcols;
        

        return view("admin.dataedit", ["params" => $params , "action" => "edit", "id" => $request->id]);
 
 
    }
}