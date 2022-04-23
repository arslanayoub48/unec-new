<?php

namespace App\Filters\Types;

class EventDateType
{
    public function filter($builder, $value)
    {
        $filter_date = date("Y-m-d", strtotime($value));
        return $builder->whereDate("start_at", $filter_date);
    }
}