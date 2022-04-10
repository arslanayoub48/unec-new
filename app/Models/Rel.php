<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rel extends Model
{
    use HasFactory;
    protected $table = "rel";
    public static function find($array, $field){
        foreach($array as $val){
            if($val->content_name == $field){
              return $val->content;
            }
          }
    }
}
