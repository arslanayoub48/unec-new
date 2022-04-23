<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Interfaces\IFilter;
use App\Filters\TeachersFilter;
use Illuminate\Database\Eloquent\Builder;
class Teachers extends Model implements IFilter
{
    use HasFactory;
    protected $table = "teachers";

    public function meta(){
        return $this->hasMany("Meta", "rel_id", "id");
    }

    public function scopeFilter(Builder $builder, $request)
    {
        return (new TeachersFilter($request))->filter($builder);
    }
}
