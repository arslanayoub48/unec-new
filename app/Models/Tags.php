<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    use HasFactory;
    protected $fillable = ["name"];
    public static function tags($tags){
        $tags = json_decode($tags);
        return $tags;
    }
}
