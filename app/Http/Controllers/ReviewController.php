<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::all();
        return $reviews;
    }

    public function store(Request $request)
    {
        try {
            if ($request->hasFile('file')) {
                $request->file->store('images/review', 'public');

                $review = new Review([
                    "url" => $request->get('url'),
                    "title" => $request->get('engine'),
                    "image" => $request->file->hashName()
                ]);
                $review->save();
            }
        } catch (\Exception $e) {

            return array("Message" => "Something Went Wrong", "Error" => $e->getMessage());
        }
    }
}
