<?php

namespace App\Filters;
use App\Filters\AbstractFilter;
use App\Filters\Types\CategoryType;
use App\Filters\Types\KorpusType;
use App\Filters\Types\EventType;
use App\Filters\Types\EventLangType;
use App\Filters\Types\EventDateType;
use Illuminate\Database\Eloquent\Builder;

class EventsFilter extends AbstractFilter
{
    protected $filters = [
        'event_category' => CategoryType::class,
        'tedris_binasi' => KorpusType::class,
        'event_type' => EventType::class,
        'event_lang' => EventLangType::class,
        'event_date' => EventDateType::class,
    ];
}