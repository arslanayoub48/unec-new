<?php

namespace App\Http\Controllers;

use App\Models\Social;
use Illuminate\Http\Request;

class SocialController extends Controller
{
    public function index()
    {
        $reviews = Social::all();
        return $reviews;
    }

    public function store(Request $request)
    {
        try {
            if ($request->hasFile('file')) {
                $request->file->store('images/social', 'public');

                $review = new Social([
                    "url" => $request->get('url'),
                    "engine" => $request->get('engine'),
                    "image" => $request->file->hashName()
                ]);
                $review->save();
            }
        } catch (\Exception $e) {

            return array("Message" => "Something Went Wrong", "Error" => $e->getMessage());
        }
    }
}
