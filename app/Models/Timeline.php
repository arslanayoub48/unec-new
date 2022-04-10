<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    use HasFactory;

    public static function Show($teacher, $id = ""){
        $i=1; 
        $rels = \App\Models\Rel::where("content_id", $teacher->id)->where("content_type", "teachers_timeline$id" )->get();
        $timeline = "";
        $timeline.='<div class="container-fluid">';
        if(count($rels) > 0){
            $timeline.='<div class="row">
                         <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div id="content">
                                        <ul class="timeline">';
                                            foreach(\App\Models\Rel::where("content_id", $teacher->id)->where("content_type", "teachers_timeline$id" )->get() as $rel){
                                                if(count($rels)/2 < $i)
                                                        continue;

                                               $timeline.=' <li class="event" data-date="12:30 - 1:00pm"><h3>'.\App\Models\Rel::find($rels, "content_date".$id."_$i").'</h3>
                                                    <p>'.\App\Models\Rel::find($rels, "content_info".$id."_$i").' </p>';
                                                    $i++;
                                                    
                                                    $timeline.='</li>';
                                            }
                                            $timeline.='  </ul>
                                    </div>
                                </div>
                                                </div>
                                            </div>
                                        </div>
';
        }
        $timeline.=' </div>
            ';
    
            return $timeline;
    }

    public static function AddShortCode($teacher, $text){
        $text = str_replace("[timeline]",  \App\Models\Timeline::Show($teacher), $text); 
        $text = str_replace("[timeline2]",  \App\Models\Timeline::Show($teacher,2), $text); 
        $text = str_replace("[timeline3]",  \App\Models\Timeline::Show($teacher,3), $text); 
        $text = str_replace("[timeline4]",  \App\Models\Timeline::Show($teacher,4), $text); 
        return $text;
    }
}
