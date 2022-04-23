<?php

namespace App\Filters\Types;

class CategoryType
{
    public function filter($builder, $value)
    {
        return $builder->where('category_id', $value);
    }
}