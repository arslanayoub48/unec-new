<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Events;
use App\Models\Wlang;
use App\Models\Meta;
use App\Models\Events_categories;
class EventsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Events::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->title;$sub[] = $data->info;$sub[] = $data->start_at;$sub[] = $data->end_at;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Tədbirlər",
            "table" => "events",
            "translate" => true,
            "description" => "Bu bölmədə tədbirlər əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
               ["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "false","value" => ""],
               ["text" => "Məlumat","name" => "info","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""],
               ["text" => "Ətraflı","name" => "more","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""]
                ,[
                    "text" => "Slider şəkilləri (Shortcode: [slider])",
                    "type" => "multifiles",
                    "name" => "slider",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                ],
                
                [   "text" => "",
                    "name" => "slug",
                    "slug" => "title",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "",
                    "name" => "author",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => auth()->user()->id
                ],
                
                
                [   "text" => "Tədbirin başlama tarixi",
                    "name" => "start_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Tədbirin kategoriyası (Rubrika)",
                    "name" => "category_id",
                    "type" => "select",
                    "selectdata" => Events_categories::all()->toArray(),
                    "selectdatacol" => "title",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
            
                [   "text" => "Tədbirin bitmə tarixi",
                    "name" => "end_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "Tədbirin keçiriləcəyi ünvan",
                    "name" => "address",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "Tədbirin keçiriləcəyi dil",
                    "name" => "event_language",
                    "type" => "multiselect",
                    "placeholder" => "",
                    "selectdata" => Meta::multi(0, "language_knowlage") ??   "Təyin olunmayıb",
                    "selectdatacol" => "value",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "Tədbirin keçiriləcəyi tədris binası",
                    "name" => "korpus",
                    "type" => "select",
                    "selectdata" => Meta::multi(0, "tedris")??   "Təyin olunmayıb",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                
                [   "text" => "Tədbirin keçiriləcəyi forma",
                    "name" => "event_type",
                    "selectdata" => [["id" => 0, "text" => "Əyahi"], ["id" => 1, "text" => "Distant"]],
                    "selectdatacol" => "text",
                    "type" => "select",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Status",
                    "name" => "status",
                    "type" => "select",
                    "selectdata" => [["id" => "publish", "text" => "Publish"], ["id" => "unPublish", "text" => "Unpublish"]],
                    "selectdatacol" => "text",
                    "placeholder" => "",
                    "required" => true,
                    "value" => ""
                ],
                [   
                    "text" => "Teqlər",
                    "name" => "tags",
                    "type" => "tags",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Əlavə olunma tarixi",
                    "name" => "created_at",
                    "type" => "date",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ]
                
            ],
            "cols" => ["#","Başlıq","Məlumat", "Tədbirin başlama tarixi", "Tədbirin bitmə tarixi"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
    public function show($slug){
        $event = Events::where("slug", $slug)->first();
        return view("website.static.event", ["event" => $event]);
    }

    public function filter(Request $request){

        $filter_tedris_binasi = $request->tedris_binasi;
        $filter_event_category = $request->event_category;
        $filter_event_type = $request->event_type;
        $filter_event_lang = $request->event_lang;
        $filter =Events::orderBy("id", "DESC")->where("locale",Wlang::getCurrent())->where("status", "publish");

    
        if(!empty($filter_tedris_binasi)){
            $filter->where("korpus", $filter_tedris_binasi);
            foreach($filter_tedris_binasi as $td){
                $filter->orWhere("korpus", $td);
            }
        }
        if(!empty($filter_event_category)){
            $filter->where("category_id", $filter_event_category);
            foreach($filter_event_category as $td){
                $filter->orWhere("category_id", $td);
            }
        }
        if(!empty($filter_event_type)){
            $filter->where("event_type", $filter_event_type);
            foreach($filter_event_type as $td){
                $filter->orWhere("event_type", $td);
            }
        }
        if(isset($filter_event_lang[0])){
            $filter->where("event_language", "like",'%'.$filter_event_lang[0].'%');
        }
        if(isset($request->day) && isset($request->month)){
            $filter_date = $request->month."/".$request->day."/".date("Y");
            $filter_date = date("Y-m-d", strtotime($filter_date));
            $filter->whereDate("start_at", $filter_date);
        }
        $filter = $filter->get();
        $html = "";
        foreach($filter as $event){
            $html .= '<a href="/event/'.$event->slug.'">';
            $html .= '            <div >';
            $html .= '                <h3>'.$event->title.'</h3><br>';
            $html .= '                <div class="badget" style="';
            $html .= '                    position: absolute;';
            $html .= '                    left: -100px;';
            $html .= '                    top: 20px;';
            $html .= '                    text-align: center;';
            $html .= '                ">';
            $html .= '                        <p style="';
            $html .= '                    font-size: 58px;';
            $html .= '                    color: #07294e;';
            $html .= '                ">'.date("d", strtotime($event->start_at)).'</p>';
            $html .= '                        <p style="';
            $html .= '                    font-size: 20px;';
            $html .= '                ">'.\App\Models\TimeDate::MonthToAz(date("M", strtotime($event->start_at))).'</p>';

            $html .= '                    </div>';
            $html .= '                <?php';
            $html .= '                     '.$event->info;
            $html .= '            </div>';

            $html .= '        </a>';
            $html .= '        <br><br>';
            $html .= '        ';

     
    }
    return $html;
    }
}
