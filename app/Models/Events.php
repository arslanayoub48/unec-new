<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Filters\EventsFilter;
use App\Models\Interfaces\IFilter;
use Illuminate\Database\Eloquent\Builder;

class Events extends Model implements IFilter
{
    use HasFactory;
    protected $table = "events";
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
    public function scopeFilter(Builder $builder, $request)
    {
        return (new EventsFilter($request))->filter($builder);
    }
}
