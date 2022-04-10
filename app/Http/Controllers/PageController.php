<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\Menu;
use App\Models\Wlang;
class PageController extends Controller
{
    public function list(Request $request){
        $data = [];
        $pages = Page::all();
        foreach($pages as $page){
            $sub = [];
            $sub[] = $page->id;
            $sub[] = $page->image;
            $sub[] = $page->title;
            $sub[] = $page->description;
            $sub[] = $page->created_at;
            $data[] = $sub;
        }
        $params = [
            "title" => "Səhifələr",
            "table" => "pages",
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
                "name" => "title",
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
                "text" => "Kontent",
                "name" => "content",
                "type" => "ckeditor",
                "placeholder" => "",
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
    public function get(Request $request){
        $menu = Menu::where("link", $request->id)->first();
        $page = Page::find($request->id);
        if($menu){
            if($menu->page_id){
                $page = Page::find($menu->page_id);
                return view("website.page", ["page"=>$page]);
            }else
                return redirect()->to($menu->link);
        }else if($page){
            return view("website.page", ["page"=>$page]);
        }else{
            return redirect()->to($request->id);
        }
    }
    public function show($id){
        if(view()->exists("website.dynamic.".$id))
            return view("website.dynamic.".$id);
        else{
            $page = Page::where("slug", 'LIKE', '%'.$id.'%')->where("locale", Wlang::getCurrent())->first();
            if($page){
                return view("website.dynamic.content", ["page" => $page]);
            }
        }
        return view("errors.404");
    }
}
