<?php

namespace App\Services\Admin\Data;
use Illuminate\Http\Request;
use App\Models\Tags;
class TagsService{
    
    public function handle(){
        $data = $_GET["input"];
        $tags = Tags::where("name", "LIKE", "%$data%")->get();
        $json = [];
        foreach($tags as $tag){
            $json[] = ["id" => $tag->id, "name" => $tag->name];
        }
        return response()->json($json);
    }
}