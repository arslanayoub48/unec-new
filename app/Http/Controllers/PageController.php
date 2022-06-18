<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\Menu;
use App\Models\Wlang;

class PageController extends Controller
{
    public function list(Request $request)
    {
        $data = [];
        $pages = Page::all();
        foreach ($pages as $page) {
            $sub = [];
            $sub[] = $page->id;
            $sub[] = $page->title;
            $sub[] = "/" . $page->slug;
            $sub[] = $page->created_at;
            $data[] = $sub;
        }
        $params = [
            "title" => "Səhifələr",
            "table" => "pages",
            "description" => "",
            "editcols" => [[
                "text" => "Başlıq",
                "name" => "title",
                "type" => "text",
                "placeholder" => "Başlığı yazın.",
                "required" => true,
                "value" => ""
            ], [
                "text" => "",
                "name" => "slug",
                "type" => "slug",
                "slug" => "title",
                "placeholder" => "",
                "required" => true,
                "value" => ""
            ]
            ],
            "cols" => [
                "#",
                "Başlıq",
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
                    "text" => "Bax",
                    "newtab" => true,
                    "icon" => "fa fa-plus",
                    "link" => "/admin/view?action=",
                ],
                [
                    "text" => "Düzəliş et",
                    "icon" => "fa fa-plus",
                    "link" => "/admin/contentbuilder?action",
                ],
                [
                    "text" => "Sil",
                    "icon" => "fa fa-plus",
                    "link" => "/dataPageAction?action=remove",
                ]
            ]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage", ["params" => $params]);
    }

    public function contentbuilder(Request $request)
    {
        $id = $request->id;
        $page = Page::find($id);
        if ($page) {
            return view("admin.manage_pages", ["page" => $page]);
        }
        return view("errors.404");
    }

    public function viewAdmin(Request $request)
    {
        $id = $request->id;
        $page = Page::find($id);
        if ($page) {
            return view("website.static.content", ["page" => $page]);
        }
        return view("errors.404");
    }

    public function get(Request $request)
    {
        $menu = Menu::where("link", $request->id)->first();
        $page = Page::find($request->id);
        if ($menu) {
            if ($menu->page_id) {
                $page = Page::find($menu->page_id);
                return view("website.page", ["page" => $page]);
            } else
                return redirect()->to($menu->link);
        } else if ($page) {
            return view("website.page", ["page" => $page]);
        } else {
            return redirect()->to($request->id);
        }
    }

    public function show($id)
    {
        if (view()->exists("website.dynamic." . $id))
            return view("website.dynamic." . $id);
        else {

            $page = Page::where("slug", 'LIKE', '%' . $id . '%')->where("locale", Wlang::getCurrent())->first();
            if ($page) {


                return view("website.static.content", ["page" => $page]);
            }
        }
        return view("errors.404");
    }

    public function manage()
    {
        return view("admin.manage_pages");
    }

    public function save(Request $request)
    {
        $id = $request->id;
        $source = $request->source;
        $page = Page::find($id);
        if ($page) {
            $source = str_replace('contenteditable="true"', '', $source);
            $source = str_replace('data-click="true"', '', $source);
            $page->content = $source;
            $page->save();
        } else {
            $page = new Page();
            $page->content = $source;
            $page->save();
        }
        return redirect("/admin/pages-manage");
    }
}
