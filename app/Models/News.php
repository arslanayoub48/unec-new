<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $table = "news";
    public function newQuery()
    {
        return parent::newQuery()->where("locale", Wlang::getCurrent());
    }
    public static function create(array $attributes = [])
    {
        $attributes["locale"] = Wlang::getCurrent();
        $model = static::query()->create($attributes);
        return $model;
    }
    public function category(){
        return $this->hasOne(News_categories::class, "id", "category_id");
    }
}
