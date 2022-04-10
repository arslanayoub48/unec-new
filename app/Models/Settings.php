<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $table = "settings";
    public static function get($key){
        return Settings::where("key", $key)->first()->value;
    }
}
