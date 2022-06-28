<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teachers;
use App\Models\Tags;
use App\Models\Meta;
use App\Models\Wlang;
use App\Models\Slug;
use App\Services\Admin\StaffService;
use Exception;

class TeachersController extends Controller
{

public $error = 'Opps! something went wrong! please try agin!';

    public function list(Request $request)
    {
        $staff = new StaffService();
        $params = $staff->handle($request);
        return view("admin/datapage", ["params" => $params]);
    }


    public function index()
    {
        try {

            $data = [];
            $teachers = Teachers::all();
            if ($teachers) {
                foreach ($teachers as $teacher) {
                    $t = json_decode($teacher->tags);
                    if ($t) {
                        $teacher->tags_details   = Tags::whereIn('id', $t)->get()->toArray();
                    } else {
                        $teacher->tags_details = [];
                    }
                }
            }

            $data['teachers'] = $teachers;



            return view("website.static.teachers.index")->with($data);
        } catch (\Exception $e) {
            return  redirect()->back()->with('error',  $this->error);
        }
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
    public function show($slug)
    {
        try {

            $data = [];
            $teacher  = Teachers::Where('slug', $slug)->first();
            if (!$teacher) {
                throw new Exception('Data not Found!');
            }

            $t = json_decode($teacher->tags);
            if ($t) {
                $teacher->tags_details   = Tags::whereIn('id', $t)->get()->toArray();
            } else {
                $teacher->tags_details = [];
            }


            $data['teacher'] = $teacher;
            return view("website.static.teachers.single-teacher")->with($data);
        } catch (\Exception $e) {
            return  redirect()->back()->with('error',  $this->error);
        }
    }

    public function filter(Request $request)
    {
        $filter = Teachers::filter($request)->get();
        return view("filters.teachers", ["filter" => $filter]);
    }


    public function tagFilter($tag)
    {
        try {

            $data['teachers'] = [];
            $teachers = Teachers::all();
            if ($teachers) {
                foreach ($teachers as $teacher) {
                    $t = json_decode($teacher->tags);
                    if ($t && in_array($tag, $t)) {
                        $teacher->tags_details   = Tags::whereIn('id', $t)->get()->toArray();
                        $data['teachers'][] = $teacher;
                    }
                }
            }

            return view("website.static.teachers.index")->with($data);
        } catch (\Exception $e) {
            return  redirect()->back()->with('error',  $this->error);
        }
    }
}
