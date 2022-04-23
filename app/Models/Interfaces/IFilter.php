<?php

namespace App\Models\Interfaces;
use Illuminate\Database\Eloquent\Builder;

interface IFilter
{
    public function scopeFilter(Builder $builder, $request);
}
