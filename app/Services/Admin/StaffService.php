<?php

namespace App\Services\Admin;
use Illuminate\Http\Request;
use App\Models\Teachers;
use App\Models\Meta;
use App\Models\Wlang;
use App\Models\Slug;

class StaffService{
    public function handle(Request $request){
        $dat = [];
        $lang = \App\Models\Wlang::getCurrent();
        $model = Teachers::where("locale", $lang)->get();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;
            $sub[] = $data->name;
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->language_knowlage)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->tedris)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->kafedra)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->struktur)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->vezife)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->elmiderece)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->naliyyetler)),0,50)."...";
            $sub[] = substr(Meta::toString(Meta::ids(0,$data->tags)),0,50)."...";
            $sub[] = $data->created_at;
      
            $dat[] = $sub;
        }
        $params = [
            "title" => "Müəllimlər",
            "table" => "teachers",
            "translate" => true,
            "description" => "Bu bölmədə müəllimləri əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [
                [
                    "text" => "Şəkil",
                    "name" => "image",
                    "type" => "image",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   "text" => "Adı",
                    "name" => "name",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => true,
                    "value" => ""
                ],
                [   "text" => "",
                    "name" => "slug",
                    "slug" => "name",
                    "type" => "hidden",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   "text" => "Qısa məlumat",
                    "name" => "short_about",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   "text" => "Haqqında",
                    "name" => "about",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Tədris",
                    "name" => "tedris_info",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "Nəşrlər və tədqiqatlar",
                    "name" => "nesr_info",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [   
                    "text" => "İş Təcrübəsi",
                    "name" => "istecrubesi",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Əlaqə məlumatları",
                    "name" => "contact_info",
                    "type" => "ckeditor",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Timeline",
                    "type" => "multicontent",
                    "name" => "timeline",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                    "pivot" => "teachers_timeline",
                    "fields" => [
                        [   
                            "text" => "Tarix",
                            "name" => "content_date",
                            "type" => "text",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ],
                        [   
                            "text" => "Məlumat",
                            "name" => "content_info",
                            "type" => "ckeditor",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ]
                    ]
                ],
               
                [
                    "text" => "Timeline 2",
                    "type" => "multicontent",
                    "name" => "timeline2",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                    "pivot" => "teachers_timeline2",
                    "fields" => [
                        [   
                            "text" => "Tarix",
                            "name" => "content_date2",
                            "type" => "text",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ],
                        [   
                            "text" => "Məlumat",
                            "name" => "content_info2",
                            "type" => "ckeditor",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ]
                    ]
                ],
                [
                    "text" => "Timeline 3",
                    "type" => "multicontent",
                    "name" => "timeline3",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                    "pivot" => "teachers_timeline3",
                    "fields" => [
                        [   
                            "text" => "Tarix",
                            "name" => "content_date3",
                            "type" => "text",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ],
                        [   
                            "text" => "Məlumat",
                            "name" => "content_info3",
                            "type" => "ckeditor",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ]
                    ]
                ],
                [
                    "text" => "Timeline 4",
                    "type" => "multicontent",
                    "name" => "timeline4",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                    "pivot" => "teachers_timeline4",
                    "fields" => [
                        [   
                            "text" => "Tarix",
                            "name" => "content_date4",
                            "type" => "text",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ],
                        [   
                            "text" => "Məlumat",
                            "name" => "content_info4",
                            "type" => "ckeditor",
                            "placeholder" => "",
                            "required" => true,
                            "value" => ""
                        ]
                    ]
                ],
               
               
                [
                    "text" => "Slider şəkilləri",
                    "type" => "multifiles",
                    "name" => "slider",
                    "placeholder" => "",
                    "required" => false,
                    "value" => "",
                ],
               
                [
                    "text" => "Dil bilikləri",
                    "name" => "language_knowlage",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "language_knowlage") ??   "Təyin olunmayıb",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Google scholar ",
                    "name" => "google_scholar",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "ORCID ID",
                    "name" => "orcid_id",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "PUBLONS ID",
                    "name" => "publons_id",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "SCOPUS ID",
                    "name" => "scopus_id",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "ELIBRARY ID",
                    "name" => "scopus_id",
                    "type" => "text",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Teqlər",
                    "name" => "tags",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "tags") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Tədris Binası",
                    "name" => "tedris",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "tedris") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Kafedra",
                    "name" => "kafedra",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "kafedra") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Struktur bölmə",
                    "name" => "struktur",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "struktur") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Elmi dərəcə",
                    "name" => "elmiderece",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "elmiderece") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Vəzifə",
                    "name" => "vezife",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "vezife") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ],
                [
                    "text" => "Nailiyyətlər",
                    "name" => "naliyyetler",
                    "type" => "multiselect",
                    "selectdata" => Meta::multi(0, "naliyyetler") ??   "Mövcud deyil",
                    "selectdatacol" => "value",
                    "placeholder" => "",
                    "required" => false,
                    "value" => ""
                ]
            ],
            "imagecol" => 1,
            "cols" => [
                    "#",
                    "Şəkil",
                    "Adı",
                    "Dil bilikləri",
                    "Tedris binası",
                    "Kafedra",
                    "Struktur bölmə",
                    "Vəzifə",
                    "Elmi dərəcə",
                    "Naliyyətlər",
                    "Teqlər",
                    "Yaradılma tarixi"
            ],
            "data" => $dat,
            "noaction" => false,
            "actions" => [
                ["text" => "Bax",
                "icon" => "fa fa-eye",
                "type" => "link",
                "newtab" => true,
                "link" => "/dataPageAction?action=look"],   
                 ["text" => "Dəyiş",
                "icon" => "fa fa-plus",
                "type" => "edit",
                "link" => "/dataPageAction?action=edit"],
                ["text" => "Sil",
                "icon" => "fa fa-plus",
                "type" => "remove",
                "link" => "/dataPageAction?action=remove"],
                ["text" => "Əlavə et",
                "icon" => "fa fa-plus",
                "type" => "create",
                "position" => "top",
                "link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return $params;
    }
}