<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
class MenuController extends Controller
{
    public function list(Request $request){
        $data = [];
        $menus = Menu::all();
       
        foreach($menus as $menu){
            $sub = [];
            $sub[] = $menu->id;
            $sub[] = $menu->name;
            $sub[] = $menu->link;
            $sub[] = $menu->created_at;
            $data[] = $sub;
        }
        $params = [
            "title" => "Menyular",
            "table" => "menus",
            "description" => "",
            "editcols" => [[
                "text" => "Adı",
                "name" => "name",
                "type" => "text",
                "placeholder" => "Adı yazın.",
                "required" => true,
                "value" => ""
            ],
            [
                "text" => "Link",
                "name" => "link",
                "type" => "text",
                "placeholder" => "Keçid edəcək linki yazın.",
                "required" => true,
                "value" => ""
            ]],
            "cols" => [
                "#",
                "Adı",
                "Link",
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
