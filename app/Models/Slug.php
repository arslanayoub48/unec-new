<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Slug extends Model
{
    use HasFactory;

    public static function make($text){
        return  Str::slug($text);
    }
}
