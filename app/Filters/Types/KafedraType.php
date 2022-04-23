<?php

namespace App\Filters\Types;

class KafedraType
{
    public function filter($builder, $value)
    {
        return $builder->where('kafedra','like', '%"'.$value.'"%');
    }
}