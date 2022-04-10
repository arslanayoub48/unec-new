<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZURL extends Model
{
    use HasFactory;
    public static function add($_key, $_value){
        $param = "?";
        if(isset($_GET)){
            if(count($_GET) > 0){
                foreach($_GET as $key => $value){
                    if($key == $_key) continue;
                    $param.= "$key=$value&";
                }
            }
        }
        $param=$param.$_key."=".$_value;
        return $param;
    }
}
