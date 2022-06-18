<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teachers;
use App\Models\Meta;
use App\Models\Wlang;
use App\Models\Slug;
use App\Services\Admin\StaffService;

class TeachersController extends Controller
{
    public function list(Request $request)
    {
        $staff = new StaffService();
        $params = $staff->handle($request);
        return view("admin/datapage", ["params" => $params]);
    }

    public function index()
    {
        return view("website.teachers");

    }

    public function teacher($slug)
    {

        $teacher = Teachers::where("slug", $slug)->first();
        if (!$teacher) {
            return view("website.static.muellimler_inner", ["teacher" => $teacher]);
        }
        $orginal = Wlang::findOrginal($teacher->id);
        if (!$orginal) {
            return view("website.static.muellimler_inner", ["teacher" => $teacher]);
        }
        $teacher = Teachers::find($orginal);
        if ($slug != $teacher->slug) {
            return redirect()->to("/staff/" . $teacher->slug);
        }
        return view("website.static.muellimler_inner", ["teacher" => $teacher]);
    }
    public function show()
    {

        return view("website.single-teacher");
    }

    public function filter(Request $request)
    {
        $filter = Teachers::filter($request)->get();
        return view("filters.teachers", ["filter" => $filter]);
    }

}
