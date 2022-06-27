<?php

namespace App\Services\Admin;

use Illuminate\Http\Request;
use App\Models\News_categories;

class News_CategoriesService
{
    public function handle(Request $request)
    {
        $dat = [];
        $model = News_categories::all();
        foreach ($model as $data) {
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->title;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Xəbərlər Kategoriyaları",
            "translate" => true,
            "table" => "news_categories",
            "description" => "Bu bölmədə xəbərlərin kategoriyalarını əlavə etmək, düzəliş etmək və silmək mümkündür.",
            "editcols" => [["text" => "Başlıq", "name" => "title", "type" => "text", "placeholder" => "", "required" => "false", "value" => ""]],
            "cols" => ["#", "Başlıq"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [
                ["text" => "Dəyiş", "icon" => "fa fa-plus", "type" => "edit", "link" => "/dataPageAction?action=edit"],
                ["text" => "Sil", "icon" => "fa fa-plus", "type" => "remove", "link" => "/dataPageAction?action=remove"],
                ["text" => "Əlavə et", "icon" => "fa fa-plus", "type" => "create", "position" => "top", "link" => "/dataPageAction?action=create"]

            ]
        ];
        $request->session()->put("params", $params);
        return $params;
    }
}
