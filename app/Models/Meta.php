<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    use HasFactory;
    protected $table = "meta";
    public function get($key){
        return $this->where("name", $key)->first()->value;
    }
    public static function meta($data_id, $key){
        $meta = Meta::where("rel_id", $data_id)->where("name",$key)->first();
        return $meta? $meta->value : false;
    }
    public static function multi($data_id, $key){
        $meta = Meta::where("rel_id", $data_id)->where("name",$key)->where("locale",Wlang::getCurrent())->orderBy("value","ASC")->get();
        return $meta? $meta : false;
    }
    public static function toString($meta){
        if(!$meta) return "";
        $string = "";
        foreach($meta as $m){
            $string.=$m->value.",";
        }
        return substr($string,0,-1);
    }
    public static function ids($data_id, $ids){
        if(empty($ids)) return false;
        $ids = json_decode($ids);
        $meta = Meta::where("rel_id", $data_id)->whereIn("id",$ids)->get();
        return $meta? $meta : false;
    }
    public static function type($name){
        $meta = MetaTypes::where("slug", $name)->first();
        return $meta ? $meta->name : false;
    }
}
