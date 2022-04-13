@extends('website.layouts.website')

@section("content")
<br>
<br>
<br>
<br>
<br>
<br>
<style>
    .calendar{
        cursor:pointer;
        position:relative;
        width: 1130px;
        overflow: hidden;
        white-space: nowrap;
    }
    .calendar .item {
        display: inline-block;
        margin: 20px;
        text-align: center;
    }

    .calendar .item p {
        font-size: 13px;
    }
    .calendar .row{
        position:relative;
    }
    .items a{
        border-radius: 20px;
        background-color: #fff;
        padding: 10px;
        color: #000;
    }
    .items a:hover{
        border-radius: 20px;
        background-color: #07294e;
        padding: 10px;
        color: #fff;
    }
</style>
<div class="container">
    
    <div class="row">
        <div class="col-md-12 m-auto">
            <h1 class="text-center">Bütün tədbirlər</h1>
            <p>Kalendar</p>
            <a href="/events">Filteri təmizlə</a>
        </div>
    </div>
    <div class="row">
        <?php
            $filter = \App\Models\Events::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent());
            if(isset($_GET["day"]) && isset($_GET["month"])){
                $filter_date = $_GET["month"]."/".$_GET["day"]."/".date("Y");
                $filter_date = date("Y-m-d", strtotime($filter_date));
                $filter->whereDate("start_at", $filter_date);
            }
        ?>
       
        <div class="calendar">
            <div class="row">
                <?php 
                    $start = new DateTime('now');
                    $start->modify('first day of -1 month');
                    $interval = new DateInterval('P1D');
                    $end = new DateTime('now');
                    $end->modify('first day of +2 month');
                    $period = new DatePeriod($start, $interval, $end);
                    $current = "";
                    
                    echo '<div class="items" style="padding-left: 30px;">';
                    
                    foreach ($period as $dt) {
               
                        $day = $dt->format("d");
                        $month = $dt->format("M");
                        $month_number = $dt->format("m");
                        $month_fixed = \App\Models\TimeDate::MonthToAz($dt->format("M"));
                        echo '<div><p><a href="?day='.$day.'&month='.$month_number.'">'.$day.'</a></p>';
                        if($dt->format("M") != $current){
                            $current = $dt->format("M");
                            echo '<span><b>'.$month_fixed.' '.date("Y").'</b> </span>';
                        }
                        echo '</div>';
                    }
                    echo '</div>';
                      

                ?>
              
            </div>
        </div>
        <?php   $filter = $filter->get();?>
        @foreach($filter as $new)

            <div class="col-md-4">
                <a href="/event/{{$new->slug}}">
                    <img src="/image/{{$new->image}}" style="width:280px; height: 232px; object-fit:cover; object-position: center;" alt="">
                    <div style="width: 280px;">
                        <?php
                            echo mb_substr($new->info,0,142, "utf-8")."...";
                        ?>
                    </div>
                </a>
            </div>

        @endforeach
    </div>
            

      
</div>

<br>
<br>
<br>
<br>
<br>
<br>
@endsection