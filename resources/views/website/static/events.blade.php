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
     
       
    <div class="row">
        <div class="col-md-12 m-auto">
            <h1 class="text-center">Bütün tədbirlər</h1>
            <p>Kalendar</p>
            <a href="/events">Filteri təmizlə</a>
        </div>
    </div>
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
        <br>
        <br>
        <br>
        <br>
        <div class="col-md-1"></div>
        <div class="col-md-7">
                <div class="filter_data"></div>
        </div>
        <div class="col-md-4">
            <h3>Filter</h3><br>
                
            <div class="filter-item">
                <h5>Tədris binaları</h5>
                <br class="clearfix">
                <div class="form-group">
                            @foreach(\App\Models\Meta::multi(0, 'tedris') as $element)
                                    <input type="checkbox"   class="common_selector tedris_binasi" value="{{$element->id}}" id="check_1_{{$element->id}}"> <label for="check_1_{{$element->id}}">{{$element->value}}</label> <br>
                            @endforeach
                </div>
            </div>
           
            <div class="filter-item">
                <h5>Rubrikalar</h5>
                <br class="clearfix">
                <div class="form-group">
                        @foreach(\App\Models\Events_categories::all() as $element)
                                    <input type="checkbox" class="common_selector event_category"  value="{{$element->id}}" id="check_1_{{$element->id}}"> <label for="check_1_{{$element->id}}">{{$element->title}}</label> <br>
                        @endforeach
                </div>
            </div>
            <div class="filter-item">
                <h5>Tədbirin növü</h5>
                <br class="clearfix">
                <div class="form-group">
                                    <input type="checkbox"  class="common_selector event_type" value="0"  id="check_3_{{$element->id}}"> <label for="check_3_{{$element->id}}">Qiyabi</label> <br>
                                    <input type="checkbox"  class="common_selector event_type" value="1" id="check_5_{{$element->id}}"> <label for="check_5_{{$element->id}}">Əyani</label> <br>
                </div>
            </div>
            <div class="filter-item">
                <h5>Dil</h5>
                <br class="clearfix">
                <div class="form-group">
                            @foreach(\App\Models\Meta::multi(0,"language_knowlage") as $element)
                                    <input type="checkbox"  class="common_selector event_lang"   value="{{$element->id}}" id="check_4_{{$element->id}}"> <label for="check_4_{{$element->id}}">{{$element->value}}</label> <br>
                            @endforeach
                </div>
            </div>
           
          
          
        </div>
    </div>
            

      
</div>

<br>
<br>
<br>
<br>
<br>
<br>


@endsection
