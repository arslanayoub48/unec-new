<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\Page;
class ProductsController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Products::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;$sub[] = $data->title;$sub[] = $data->price;$sub[] = $data->content;$sub[] = $data->addition;$sub[] = $data->rate;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Məhsullar",
            "table" => "products",
            "description" => "Məhsullar",
            "editcols" => [["text" => "Şəkil","name" => "image","type" => "image","placeholder" => "","required" => false,"value" => ""],["text" => "Başlıq","name" => "title","type" => "text","placeholder" => "","required" => "true","value" => ""],["text" => "Qiymət","name" => "price","type" => "text","placeholder" => "","required" => "false","value" => ""],["text" => "Haqqında","name" => "content","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""],["text" => "Əlavə məlumat","name" => "addition","type" => "ckeditor","placeholder" => "","required" => "false","value" => ""],["text" => "Reytinq (1-10)","name" => "rate","type" => "text","placeholder" => "","required" => "false","value" => ""]],
            "imagecol" => 1,
            "cols" => ["#","Şəkil","Başlıq","Qiymət","Haqqında","Əlavə məlumat","Reytinq (1-10)"],
            "data" => $dat,
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
        $id = $request->id;
        $product = Products::find($id);
        return view("website.single_product", ["product" => $product]);
    }
    public function all(){
        $products = Products::all();
        return view("website.products", ["products" => $products]);
    }
}
