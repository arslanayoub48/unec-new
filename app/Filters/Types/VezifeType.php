<?php

namespace App\Filters\Types;

class VezifeType
{
    public function filter($builder, $value)
    {
        return $builder->where('vezife','like', '%"'.$value.'"%');
    }
}