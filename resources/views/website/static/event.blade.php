@extends('website.layouts.website')

@section("content")
<br>
<br>
<br>
<br>
<br>
<div class="container-fluid" style="width: 1120px;" >
<div class="row">
    <div class="col-md-12">
    <h1>{{$event->title}} </h1>
    <div class="badget" style="
    position: absolute;
    left: -100px;
    top: 20px;
    text-align: center;
">
        <p style="
    font-size: 58px;
    color: #07294e;
">{{date("d", strtotime($event->start_at))}}</p>
        <p style="
    font-size: 20px;
">{{\App\Models\TimeDate::MonthToAz(date("M", strtotime($event->start_at)))}}</p>

    </div>
    </div>
    <div class="col-md-12">
            <?php
            $slider = '';
                if($event->slider){
                $slider .='  <br><div class="slider" style="width: 100%;">
                        <div class="container-fluid">
                            <div class="wrapper">
                                    <div class="carousel carousel_news carousel_inline_block_with_text">';
                                        foreach(json_decode($event->slider) as $_slider){
                                        $slider .=' <div class="carousel_item">
                                            <a style="color:#000; width:auto;" href="#">  
                                                <div>
                                                    <img src="/image/'.$_slider.'" style="width:100%;height: 500px;object-fit: cover;object-position: center;">
                                                       
                                                </div>
                                                </a>
                                        </div>';
                                        }
                                        $slider .='</div>
                                </div>
                            </div>
                        </div><br>';
                        }
                        $event->more = str_replace("[slider]", $slider, $event->more); 
            ?>
            <br>
            <div> <?php echo $event->more; ?></div>
            
        </div>
    </div>

</div>




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

@endsection