<?php

namespace App\Http\Controllers;

use App\Models\Social;
use Illuminate\Http\Request;

class SocialController extends Controller
{
    public function index(){
        $socials = Social::all();
        return $socials;
    }

    public function store($request){

    }
}
