<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
class ImageController extends Controller
{
  public function show($id){
    $image = Image::find($id);
    if($image && file_exists('images/'.$image->image)){
        $content = file_get_contents('images/'.$image->image);
        header('Content-Type: image/png');
        echo $content;
    }else{
        return view("errors.404");
    }
  }
}
