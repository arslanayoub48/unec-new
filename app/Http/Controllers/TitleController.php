<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Title;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TitleController extends Controller
{

    public $error  = 'Oops! something went wrong, please try again!';

    //
    public function index()
    {
        $data = [];
        $data['titles'] = Title::all();
        return view('admin.title.index')->with($data);
    }



    public function create(Request $request)
    {
        $data = [];
        $data['method'] = 'create';
        $data['title'] = null;
        $data['route'] = route('titles.store');
        return view('admin.title.CreateOrEdit')->with($data);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|mimes:jpg,jpeg,png',
            'name' => 'required',
            'surename' => 'required'
        ], [
            'title.required' => 'Title field is required',
            'description.required' => 'Description field is required',
            'image.required' => 'Image field is required',
            'image.mimes' => 'File type no supported!',
            'name.required' => 'Name field is required',
            'surename.required' => 'Surname field is required',
        ]);

        try {

            $ext = $request->image->getClientOriginalExtension();
            $now = Carbon::now()->timestamp;
            $fileName = $now . '.' . $ext;
            $path = $request->file('image')->storeAs(
                'public/images',
                $fileName
            );

            $data = $request->only(['title', 'description', 'name', 'surename', 'side']);
            $data['image'] = $fileName;
            // $data['image_url'] = $path;
            Title::create($data);
            return redirect()->route('titles.index')->with('alert_success', 'title added successfully!');
        } catch (Exception $e) {

            return redirect()->back()->with('alert_danger', $this->error);
        }
    }


    public function edit(Title $title)
    {
        $data = [];
        $data['method'] = 'edit';
        $data['title'] = $title;
        $data['route'] = route('titles.update', $title->id);
        return view('admin.title.CreateOrEdit')->with($data);
    }



    public function update(Request $request,  Title $title)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|mimes:jpg,jpeg,png',
            'name' => 'required',
            'surename' => 'required'
        ], [
            'title.required' => 'Title field is required',
            'description.required' => 'Description field is required',
            'image.mimes' => 'File type not supported',
            'name.required' => 'Name field is required',
            'surename.required' => 'Surname field is required',
        ]);

        try {


            $data = $request->only(['title', 'description', 'name', 'surename', 'side']);

            if ($request->hasFile('image')) {
                $ext = $request->image->getClientOriginalExtension();
                $now = Carbon::now()->timestamp;
                $fileName = $now . '.' . $ext;
                $path = $request->file('image')->storeAs(
                    'public/images',
                    $fileName
                );

                $data['image'] = $fileName;
            }

            $title->update($data);

            return redirect()->route('titles.index')->with('alert_success', 'Title updated successfully!');
        } catch (Exception $e) {

            return redirect()->back()->with('alert_danger', $this->error);
        }
    }



    public function destroy(Title $title)
    {
        Storage::delete('images/' . $title->image);
        $title->delete();
        return redirect()->route('titles.index')->with('alert_success', 'Title deleted successfully!');
    }
}
