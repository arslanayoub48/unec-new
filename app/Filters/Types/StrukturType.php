<?php

namespace App\Filters\Types;

class StrukturType
{
    public function filter($builder, $value)
    {
        return $builder->where('struktur','like', '%"'.$value.'"%');
    }
}