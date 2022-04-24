<?php

namespace App\Services\Admin\Data;
use Illuminate\Http\Request;

class TranslateService{
    public function handle($params,Request $request){
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

}