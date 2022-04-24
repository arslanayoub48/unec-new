<?php

namespace App\Services\Admin\Data;
use Illuminate\Http\Request;
use App\Models\Wlang;
use App\Models\Translations;
use App\Models\Slug;
use App\Models\Tags;
use Illuminate\Support\Facades\DB;
class PostService{
    public function handle(Request $request){
        
        $params = $request->session()->get("params");
        $json = [];
        $editcols = $params["editcols"];
        $data = [];
        foreach($editcols as $col){
            if($col["name"] == "select") continue;
            if($col["name"] == "slug"){
                foreach($editcols as $col2){
                    if($col2["name"] == $col["slug"]){
                        $text = $request[$col["slug"]];
                        $slug = Slug::make($text);
                        $request[$col["name"]] = $slug;
                    }
                }
            }
            if($col["type"] == "image"){
                if ($request->hasFile($col['name'])) {
                    $image = $request->file($col['name']);
                    $name = time().'.'.$image->getClientOriginalExtension();
                    $destinationPath = public_path('/images');
                    $image->move($destinationPath, $name);
                    $_image = new Image();
                    $_image->image = $name;
                    $_image->showOn = 0;
                    $_image->save();
                    $data[$col["name"]] = $_image->id;
                }
            }else if($col["type"] == "multifiles"){
                    $ids = [];
                    $removed = $request["images_remove"];
                    $removed = explode(",", $removed);
                    $old = DB::table($params["table"])->where("id", $request->id)->first();
                    $oldelements = [];
                    if($old && isset($old->slider)){
                        foreach(json_decode($old->slider) as $o){
                            $oldelements[] = $o;
                        }
                    }
                    $skip = false;
                    $removed_ids = [];
                    if ($request->hasFile($col['name'])) {
                        foreach($request->file($col['name']) as $file){
                            $orginal_name = $file->getClientOriginalName();
                            foreach($removed as $rem){
                                if($rem == $orginal_name){
                                    $skip = true;
                                }
                            }
                            if($skip) {
                                $skip = false;
                                continue;
                            }
                            $image = $file;
                            $name = time().rand(0,5000).'.'.$image->getClientOriginalExtension();
                            $destinationPath = public_path('/images');
                        
                            $image->move($destinationPath, $name);
                            $_image = new Image();
                            $_image->image = $name;
                            $_image->showOn = 0;
                            $_image->save();
                            $ids[] = $_image->id;
                        }
                    }
                    $result_ids = [];
                    foreach($removed as $rem){
                        if(is_numeric($rem)){
                            $removed_ids[] = $rem;
                        }
                    }
                    foreach($oldelements as $ii){
                       if(!in_array($ii, $removed_ids)){
                           $result_ids[] = $ii;
                       }
                    }
                    $ids = array_merge($ids, $result_ids);
                    $data[$col["name"]] = json_encode($ids);


            }else if($col["type"] == "tags") {

                   $tags = $request[$col["name"]];
                   $tags = json_decode($tags);
                   $json_tags = [];
                   foreach($tags as $tag){
                       if($tag == "×") continue;
                        $findexists  = Tags::where("name", $tag)->first();
                        if(!$findexists){
                            Tags::create(["name" => $tag]);
                        }
                        $json_tags[] = $tag;
                   }

                   $data[$col["name"]] =  json_encode($json_tags);



                    
            }else if($col["type"] == "multiselect"){
                if($request[$col["name"]] != null && $request[$col["name"]] != "")
                    $data[$col["name"]] = json_encode($request[$col["name"]],true);
            }else if($col["type"] == "multicontent"){
                
                foreach($col["fields"] as $field){
                    $field_data = $request[$field["name"]];
                    if(is_array($field_data)){
                        $i=0;
                        foreach($field_data as $fdata){
                            $json[$col["pivot"]][$field["name"]."_".$i] =$fdata;
                            $i++;
                        }
                    };
                }
                unset($col);
                
            }else{
                if($request[$col["name"]] != null && $request[$col["name"]] != "")
                    $data[$col["name"]] = $request[$col["name"]];
            }
        }
        
        if($request->action == "create"){
            $data["locale"] = Wlang::getCurrent();
            $id = DB::table($params["table"])->insertGetId($data);
            $translation = new Translations();
            $translation->type = $params["table"];
            $translation->orginal_id=$id;
            $translation->translated_id = $id;
            $translation->locale = Wlang::getCurrent();
            $translation->save();
            if(is_array($json) && count($json) > 0){
                foreach($json as $key => $value){
                    foreach($value as $k=>$v){
                        if($v == '') continue;
                        $d = [
                            "content_type" => $key,
                            "content_id" => $id,
                            "content_name" => $k,
                            "content" =>$v
                        ];
                        DB::table("rel")->insert($d);
                    }
                    
                }
                
            }
        }else{
            if(is_array($json) && count($json) > 0){
                foreach($json as $key => $value){
                    DB::table("rel")->where("content_type", $key)->delete();
                    foreach($value as $k=>$v){
                        if($v == '') continue;
                        $d = [
                            "content_type" => $key,
                            "content_id" => $request->id,
                            "content_name" => $k,
                            "content" => $v
                        ];
                        DB::table("rel")->insert($d);
                    }
                    
                  
                }
                
            }

            DB::table($params["table"])->where("id", $request->id)->update($data);
        }
        return redirect()->back();
    }

}