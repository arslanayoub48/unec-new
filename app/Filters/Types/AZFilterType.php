<?php

namespace App\Filters\Types;

class AZFilterType
{
    public function filter($builder, $value)
    {
        return $builder->where('name','like', $value.'%');
    }
}