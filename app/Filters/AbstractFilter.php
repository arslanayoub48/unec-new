<?php

namespace App\Filters;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

abstract class AbstractFilter
{
    protected $request;

    protected $filters = [];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    public function filter(Builder $builder)
    {   
        foreach($this->getFilters() as $filter => $value)
        {
            if(is_array($value)){
                foreach($value as $sub){
                    $this->resolveFilter($filter)->filter($builder, $sub);
                }
            }else{
                $this->resolveFilter($filter)->filter($builder, $value);
            }
        }
        return $builder;
    }

    protected function getFilters()
    {
        return array_filter($this->request->only(array_keys($this->filters)));
    }

    protected function resolveFilter($filter)
    {
        return new $this->filters[$filter];
    }
}