<?php

namespace App\Filters;
use App\Filters\AbstractFilter;
use App\Filters\Types\ElmiDereceType;
use App\Filters\Types\KafedraType;
use App\Filters\Types\StrukturType;
use App\Filters\Types\VezifeType;
use App\Filters\Types\KorpusType;
use App\Filters\Types\AZFilterType;
use Illuminate\Database\Eloquent\Builder;

class TeachersFilter extends AbstractFilter
{
    protected $filters = [
        'elmiderece' => ElmiDereceType::class,
        'tedris' => KorpusType::class,
        'vezife' => VezifeType::class,
        'struktur' => StrukturType::class,
        "kafedra" => KafedraType::class,
        "azlist" => AZFilterType::class
    ];
}