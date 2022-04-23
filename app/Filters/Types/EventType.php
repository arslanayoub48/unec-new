<?php

namespace App\Filters\Types;

class EventType
{
    public function filter($builder, $value)
    {
        return $builder->where('event_type', $value);
    }
}