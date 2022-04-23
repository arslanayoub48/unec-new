<?php

namespace App\Filters\Types;

class EventLangType
{
    public function filter($builder, $value)
    {
        return $builder->where('event_language', 'like', '%'.$value.'%');
    }
}