<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagsFilter extends Model
{
    use HasFactory;

    protected $table = "tags_filters";
    protected $fillable = ["tags", "category"];


    public static function getTagsData($category)
    {
        $ids_array=[];
        try {

            $tags = TagsFilter::where('category', $category)->select('tags')->first();
            if ($category == "news") {
                $data = News::where("locale", \App\Models\Wlang::getCurrent())->get();
            } elseif ($category == "events") {
                $data = Events::where("locale", \App\Models\Wlang::getCurrent())->get();

            } elseif ($category == "ads") {
                $data = Advertisements::where("locale", \App\Models\Wlang::getCurrent())->get();
            }
            $tags = json_decode($tags->tags);

            foreach ($data as $single_data) {
                $db_tags_array = json_decode($single_data->tags);
                if ($db_tags_array) {


                    $result_array = array_intersect($db_tags_array, $tags);
                    if (count($result_array) > 0) {

                        $ids_array[] = $single_data->id;
                    }

                }
            }
            if ($category == "news") {
                $data = News::whereIn("id", $ids_array)->get();
            } elseif ($category == "events") {
                $data = Events::whereIn("id", $ids_array)->get();

            } elseif ($category == "ads") {
                $data = Advertisements::whereIn("id",$ids_array)->get();
            }

            return $data;

        } catch (\Exception $e) {

            return array("Message" => "Something Went Wrong", "Error" => $e->getMessage());
        }


    }
}
