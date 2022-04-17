<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menuitem extends Model
{
    use HasFactory;
    protected $table = "menuitems";
    protected $fillable = ['title','name','slug','type','target','menu_id','created_at','updated_at', 'locale'];

    public function newQuery()
    {
        return parent::newQuery()->where("locale", Wlang::getCurrent());
    }
    public static function create(array $attributes = [])
    {
        $attributes["locale"] = Wlang::getCurrent();
        $model = static::query()->create($attributes);
    
        // ...
    
        return $model;
    }
}
