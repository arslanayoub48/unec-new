<?php

namespace App\Services\Admin\Data;
use Illuminate\Http\Request;

class HubService{
    
    public function handle(Request $request){
        $params = $request->session()->get("params");
        $editService = new EditService();
        $translateService = new TranslateService();

        switch($request->action){
            case "remove":
                DB::table($params["table"])->where("id", $request->id)->delete();
                return back();
                break;
            case "create":
                return view("admin.dataedit", ["params" => $params, "action" => "create"]);
            break;
            case "edit":
                return $editService->handle($params, $request);
            break;
            case "translate":
                return $translateService->handle($params,$request);
                break;
            case "look":
                 $teacher = DB::table("teachers")->where("id",$request->id )->first();
                 return redirect()->to("/teacher/$teacher->slug");
                break;
            default: return redirect()->back();
        }
    }

}