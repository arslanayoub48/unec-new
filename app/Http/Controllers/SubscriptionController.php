<?php

namespace App\Http\Controllers;

use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Validator;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:subscriptions',
        ],
            [
                'email.required' => 'email required!',
                'email.unique' => 'You have been already subscribed!',
                'email' => 'Enter a valid email Address!',
            ]
        );
        if ($validator->passes()) {
            Subscription::create([
                "email" => $request['email'],
            ]);
            return response()->json(['status' => 200, 'message' => 'Successfully Subscribed']);
        }
        return response()->json(['status' => 400, 'message' => $validator->errors()->all()]);
    }


    public function index()
    {

        try {
            $subscription = Subscription::all();
            return $subscription;

        } catch (\Exception $e) {

            return array("Message" => "Something Went Wrong", "Error" => $e->getMessage());
        }
    }
}
