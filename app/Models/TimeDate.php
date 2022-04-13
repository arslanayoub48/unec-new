<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeDate extends Model
{
    use HasFactory;

    public static function MonthToAz($month){
        switch($month){
            case "Jan": return "Yanvar";
            case "Feb": return "Fevral";
            case "Mar": return "Mart";
            case "Apr": return "Aprel";
            case "Jun": return "Iyun";
            case "Jul": return "Iyul";
            case "Aug": return "Avqust";
            case "Sep": return "Senyabr";
            case "Oct": return "Oktyabr";
            case "Nov": return "Noyabr";
            case "Dec": return "Dekabr";
        }
        return $month;
    }
}
