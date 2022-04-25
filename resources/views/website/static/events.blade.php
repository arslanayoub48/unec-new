@extends('website.layouts.website')

@section("content")
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container">
    <div class="row">
    <link href="{{ asset('frontend/assets/css/views_website/events.css') }}" rel="stylesheet" type="text/css" >
       
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
                        echo '<div><p><a href="?event_date='.$month_number.'/'.$day.'/'.date("Y").'" >'.$day.'</a></p>';
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

<script src="/vendors/jquery/dist/jquery.min.js"></script>
<script>
    
$(document).ready(function(){
    filter_data();

    function filter_data()
    {
        $('.filter_data').html('<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div>');
        var action = 'fetch_data';
        let tedris_binasi = get_filter("tedris_binasi")
        let event_category = get_filter("event_category")
        let event_type = get_filter("event_type")
        let event_lang = get_filter("event_lang");
        let event_date = '<?=isset($_GET["event_date"]) ? $_GET["event_date"] : "" ?>'
        $.ajax({
            url:"/events/filter",
            method:"POST",
            data:{_token: '{{ csrf_token() }}', tedris_binasi, event_category,event_type,event_lang, event_date},
            success:function(data){
                $('.filter_data').html(data);
            }
        });
    }

    function get_filter(class_name)
    {
        var filter = [];
        $('.'+class_name+':checked').each(function(){
            filter.push($(this).val());
        });
        return filter;
    }

    $('.common_selector').click(function(){
        filter_data();
    });

 

});
</script>
@endsection
