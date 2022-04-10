<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productimage;
use App\Models\Products;
class ProductimageController extends Controller
{
    public function list(Request $request){
        $dat = [];
        $model = Productimage::all();
        foreach($model as $data){
            $sub = [];
            $sub[] = $data->id;
            $sub[] = $data->image;$sub[] = Products::find($data->product_id)->title;
            $dat[] = $sub;
        }
        $params = [
            "title" => "Məhsulların Şəkilləri",
            "table" => "productimage",
            "description" => "Məhsulların Çəkilləri",
            "editcols" => [["text" => "Şəkil","name" => "image","type" => "image","placeholder" => "","required" => "false","value" => ""],["text" => "Məhsul","name" => "product_id","selectdata" => Products::all()->toArray(), "selectdatacol" => "title","type" => "select","placeholder" => "","required" => "true","value" => ""]],
            "imagecol" => 1,
            "cols" => ["#","Şəkil","Məhsul"],
            "data" => $dat,
            "noaction" => false,
            "actions" => [["text" => "Dəyiş","icon" => "fa fa-plus","type" => "edit","link" => "/dataPageAction?action=edit"],["text" => "Sil","icon" => "fa fa-plus","type" => "remove","link" => "/dataPageAction?action=remove"],["text" => "Əlavə et","icon" => "fa fa-plus","type" => "create","position" => "top","link" => "/dataPageAction?action=create"]]
        ];
        $request->session()->put("params", $params);
        return view("admin/datapage" , ["params" => $params] );
    }
}
