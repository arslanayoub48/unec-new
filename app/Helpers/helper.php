<?php

use App\Models\Events;
use App\Models\News;
use App\Models\Subscription;
use Illuminate\Support\Facades\Mail;

function getNewsTags($type)
{
    if ($type == "news") {
        $all = News::select('tags')->get();
    } elseif ($type == "events") {
        $all = Events::select('tags')->get();
    } else {
        return 0;
    }
    $all_tags = [];
    foreach ($all as $single) {
        $all_tags = array_merge($all_tags, json_decode($single->tags));
    }
    $all_tags = array_unique($all_tags);
    return $all_tags;
}

function message()
{
    $details = [
        'title' => 'Unec email test',
        'body' => 'This is for testing email using smtp'
    ];
    return $details;
}


