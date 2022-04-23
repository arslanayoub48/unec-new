<?php

namespace App\Filters\Types;

class ElmiDereceType
{
    public function filter($builder, $value)
    {
        return $builder->where('elmiderece','like', '%"'.$value.'"%');
    }
}