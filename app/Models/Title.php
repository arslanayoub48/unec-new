<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;

    public $fillable = [
        'title',
        'description',
        'image',
        'name',
        'surename',
        'image_url',
        'side',
    ];
}
