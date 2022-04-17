<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Libraries\Encryption\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\Menu;
use App\Models\Slider;
use App\Models\Products;
use App\Models\Productimage;
use App\Models\Image;
use App\Models\Slug;
use App\Models\Translations;
use App\Models\Wlang;
use DateTime;
class IndexController extends Controller
{   
    public function index(){
        $menus = Menu::where("parent_id", "0")->get();
        $products = Products::orderBy("id","DESC")->get();
        $sliders = Slider::all();
        return view("website.index", ["menus" => $menus, "sliders" => $sliders, "products" => $products]);
    }
    function dataPageAction(Request $request){
        $params = $request->session()->get("params");
        switch($request->action){
            case "remove":
                DB::table($params["table"])->where("id", $request->id)->delete();
                return back();
                break;
            case "create":
                return $this->create($params);
            break;
            case "edit":
                return $this->edit($params, $request);
            break;
            case "filter":
                return $this->filter($params,$request);
                break;
            case "translate":
                return $this->translate($params,$request);
                break;
            case "look":
                 $teacher = DB::table("teachers")->where("id",$request->id )->first();
                 return redirect()->to("/teacher/$teacher->slug");
                break;
            default: return redirect()->back();
            
        }
    }
    public function dataPageActionPost(Request $request){
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
        return redirect()->to("/admin/".$params["table"]);
    }
    public function create($params){
        
        return view("admin.dataedit", ["params" => $params, "action" => "create"]);
    }
    public function filter($params,$request){
        $start_at = $request->start_at;
        $end_at = $request->end_at;
        $data = [];
        $ids = [];
        foreach($params["data"] as $dat){
            $date1 = new DateTime(date("m/d/Y", strtotime($dat[$params["filterCol"]])));
            $date2 = new DateTime($start_at);
            $date3 = new DateTime($end_at);
            if($date1 > $date2 && $date1 < $date3){
                $data[] = $dat;
                $ids[] = $dat[0];
            }
        }
        $accounts = Account::findMany($ids);
        $params["data"]  = $data;
        return view("admin/datapage" , ["params" => $params, "accounts" => $accounts] );
    }

    public function edit($params,$request){
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
             $editcols[] = $col;
        }
        $params["editcols"] = $editcols;
        

        return view("admin.dataedit", ["params" => $params , "action" => "edit", "id" => $request->id]);
    }
   
    public function translate($params,$request){
        $data = DB::table($params["table"])->where("id", $request->id)->first();
        $newData = [];
        $newData["name"] = " ";
        $newData["image"] = $data->image;
        foreach($params["editcols"] as $col){
            if($col["type"] == "multifiles"){
                $newData[$col["name"]] = $data->{$col["name"]};
            }
        }
        $newData["locale"] = $request->lang;
        $newid = DB::table($params["table"])->insertGetId($newData);
        \App\Models\Wlang::setCurrent($request->lang);
        $find = Translations::where("translated_id", $request->id)->first();
        if($find){
            $translation = new Translations();
            $translation->orginal_id = $find->orginal_id;
            $translation->type = $params["table"];
            $translation->locale =  $request->lang;
            $translation->translated_id = $newid;
            $translation->save();
        }else{
            $translation = new Translations();
            $translation->orginal_id = $request->id;
            $translation->type = $params["table"];
            $translation->locale =  $request->lang;
            $translation->translated_id = $newid;
            $translation->save();
        }
        
        return redirect()->to('/dataPageAction?action=edit&id='.$newid);
    }
   
   
   
    public function home(){
     
        
        return view("admin/index");
    }
  
    public function login(Request $request){
        if(Auth::check()){
            return redirect()->to("/admin");

        }
        return view("admin/login");
  
        
    }
 
  

}
