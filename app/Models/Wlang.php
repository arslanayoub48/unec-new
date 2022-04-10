<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Session;
class Wlang extends Model
{
    use HasFactory;
    protected $table = "lang";
    public static function getCurrent(){
        $request = request();
        $lang = "az";
        if(isset($_GET["lang"])){
            $all = Wlang::all();
            foreach($all as $l){
                if($l->slug == $_GET["lang"]){
                    Session::put("lang", $l->slug);
                    return $l->slug;
                }
            }
        }
        $_lang = Session::get("lang");
        if($_lang) return $_lang;
        return $lang;
    }
    public static function getName($slug){
        return Wlang::where("slug", $slug)->first()->name;
    }
    public static function setCurrent($lang){
        Session::put("lang", $lang);
    }
    public static function need($params,$data){
        $d = DB::table($params["table"])->where("id",$data[0])->first();
        $notneeds = [];
        $needs = [];
        $notneeds[] = $d->locale;
        if($d && !empty($d->locale)){
            $f = Translations::where("translated_id", $d->id)->where("type", $params["table"])->first();
            if($f){
               $o = Translations::where("orginal_id", $f->orginal_id)->where("type", $params["table"])->get();
               foreach($o as $translated){
                   if($translated->locale != $d->locale)
                        $notneeds[] = $translated->locale;
               } 
            }
        }
        foreach(Wlang::all() as $l){
            if(!in_array($l->slug, $notneeds)){
                $needs[] = $l->slug;
            }
        }
        return $needs;

    }
    public static function findOrginal($id){
        $find = Translations::where("translated_id", $id)->first();
        if($find){
            $find2 = Translations::where("orginal_id", $find->orginal_id)->where("locale", Wlang::getCurrent())->first();
            if($find2)
                return $find2->translated_id;
        }
        return false;
    }
}
