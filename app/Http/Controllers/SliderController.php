<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slider;
class SliderController extends Controller
{
    public function list(Request $request){
        $data = [];
        $sliders = Slider::all();
       
        foreach($sliders as $slider){
            $sub = [];
            $sub[] = $slider->id;
            $sub[] = $slider->image;
            $sub[] = $slider->text;
            $sub[] = $slider->description;
            $sub[] = $slider->btn_text;
            $sub[] = $slider->btn_link;
            $sub[] = $slider->created_at;
            $data[] = $sub;
        }
        $params = [
            "title" => "Sliderlər",
            "table" => "sliders",
            "description" => "",
            "editcols" => [[
                "text" => "Şəkili seçin",
                "name" => "image",
                "type" => "image",
                "placeholder" => "Şəkili seçin.",
                "required" => false,
                "value" => ""
            ],[
                "text" => "Başlıq",
                "name" => "text",
                "type" => "text",
                "placeholder" => "Başlığı yazın.",
                "required" => true,
                "value" => ""
            ],[
                "text" => "Qısa text",
                "name" => "description",
                "type" => "text",
                "placeholder" => "Qısa text-i yazın",
                "required" => true,
                "value" => ""
            ],[
                "text" => "Düymənin yazısı",
                "name" => "btn_text",
                "type" => "text",
                "placeholder" => "Düymənin yazısı",
                "required" => true,
                "value" => ""
            ],[
                "text" => "Düymənin linki",
                "name" => "btn_link",
                "type" => "text",
                "placeholder" => "Düymənin linki",
                "required" => true,
                "value" => ""
            ],[
                "text" => "Yazıların rəngi",
                "name" => "color",
                "type" => "color",
                "placeholder" => "Yazıların rəngini seçin",
                "required" => true,
                "value" => ""
            ]
        ],
            "imagecol" => 1,
            "cols" => [
                "#",
                "Şəkil",
                "Başlıq",
                "Qısa text",
                "Düymənin yazısı",
                "Düymənin linki",
                "Yaradılma tarixi"
            ],
            "data" => $data,
            "noaction" => false,
            "actions" => [
                [
                    "text" => "Yenisini yarat",
                    "icon" => "fa fa-plus",
                    "link" => "/dataPageAction?action=create",
                    "position" => "top"
                ],
                [
                    "text" => "Düzəliş et",
                    "icon" => "fa fa-plus",
                    "link" => "/dataPageAction?action=edit",
                ],
                [
                    "text" => "Sil",
                    "icon" => "fa fa-plus",
                    "link" => "/dataPageAction?action=remove",
                ]
            ]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
