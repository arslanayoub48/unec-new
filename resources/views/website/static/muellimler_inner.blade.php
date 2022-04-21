@extends('website.layouts.website')

@section("content")
<style>

    .z-background{
        margin-left: -20px;
        background: linear-gradient(90deg, rgba(41,48,73,1) 0%, rgb(106 106 124) 50%, rgba(41,48,73,1) 100%);
        box-shadow: 8px 18px 18px;
        width: 100%;
        height: 100vh;
    }
    .z-image{
        width: 198px;
        height: 194px;
        object-fit: cover;
        object-position: center;
        border-radius: 108px;
        margin: auto;
        display: flex;
        margin-top: 40px;
        border: solid 7px #fff;
    }
    .z-avatar{
        border-radius: 50px;
        overflow: hidden;
        width: 100%;
    }
    .z-info{
        width: 83%;
        line-height: 3;
        margin-left: 20px;
        margin-top: 40px;
    }
    .z-info p, .z-info a, .z-info b{
        color:#fff;
    }
    .z-info h5{
        color:#6ecfd8;
        font-size: 17px;
        text-transform: uppercase;
    }
    .z-description{
        line-height: 2;
        padding-left: 30px;
        padding-top: 30px;
    }
    .z-description *{
        color:#707070;
        
    }
    .z-name{
        font-size: 42px;
    }
    .carousel_muellimler .carousel_item img{
        width: 300px !important;
        height: 150px !important;
        padding: 4px;
    }
    .timeline {
    border-left: 3px solid #6ecfd8;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    letter-spacing: 0.2px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 50px;
    list-style: none;
    text-align: left;
    max-width: 80%;
}

@media (max-width: 767px) {
    .timeline {
        max-width: 98%;
        padding: 25px;
    }
}

.timeline h1 {
    font-weight: 300;
    font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.timeline .event {
    border-bottom: 1px dashed #6ecfd8;
    padding-bottom: 25px;
    margin-bottom: 25px;
    position: relative;
}

@media (max-width: 767px) {
    .timeline .event {
        padding-top: 30px;
    }
}

.timeline .event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
}

.timeline .event:before,
.timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
}



@media (max-width: 767px) {
    .timeline .event:before {
        left: 0px;
        text-align: left;
    }
}

.timeline .event:after {
    -webkit-box-shadow: 0 0 0 3px #6ecfd8;
    box-shadow: 0 0 0 3px #6ecfd8;
    left: -55.8px;
    background: #fff;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    content: "";
    top: 5px;
}

@media (max-width: 767px) {
    .timeline .event:after {
        left: -31.8px;
    }
}

.rtl .timeline {
    border-left: 0;
    text-align: right;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
    left: 0;
    right: -170px;
}

.rtl .timeline .event::after {
    left: 0;
    right: -55.8px;
}

.z-tabs{
        border: none !important;
        border-radius: 4px !important;
        padding: 5px !important;
        box-shadow: 0 2px 6px -3px;
        font-weight: bold;
        color:#707070;
        margin-left: 5px;
    }
.full-info .active{
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: #6ecfd8;
}
</style>
<?php $teacher->about =       \App\Models\Timeline::AddShortCode($teacher, $teacher->about); ?>
<?php $teacher->short_about = \App\Models\Timeline::AddShortCode($teacher, $teacher->short_about); ?>
<?php $teacher->tedris_info = \App\Models\Timeline::AddShortCode($teacher, $teacher->tedris_info); ?>
<?php $teacher->nesr_info =   \App\Models\Timeline::AddShortCode($teacher, $teacher->nesr_info); ?>
<?php $teacher->istecrubesi = \App\Models\Timeline::AddShortCode($teacher, $teacher->istecrubesi); ?>

<div class="container-fluid" style="width: 1120px;">

    <div class="row">
        <div class="col-md-3 ">
            <div class="z-background">
                <div class="z-avatar">
                    <img src="/image/{{$teacher->image}}" class="z-image" alt="">
                </div>
                <div class="z-info container">
                    <h5>Dil bilikləri</h5>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->language_knowlage))}}</p>
                    <h5>Əlaqə</h5>
                    <p><?php echo $teacher->contact_info ?></p>
                    <h5>Kafedra</h5>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->kafedra))}}</p>
                    <h5>Tədris Binası</h5>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->tedris))}}</p>
                </div>
            </div>
        </div>
        <div class="col-md-9 z-right">
            <div class="z-description">
                <div class="z-short-info">
                    <h2> <span class="z-name">{{$teacher->name}}</span></h2>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->vezife))}} {{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->elmiderece))}}</p>
                    <?php echo $teacher->short_about?>
                </div>
                 @if($teacher->slider)
                    <div class="slider">
                        <div class="container-fluid">
                            <div class="wrapper">
                                    <div class="carousel carousel_muellimler carousel_inline_block_with_text">
                                        @foreach(json_decode($teacher->slider) as $slider)
                                        <div class="carousel_item">
                                            <a style="color:#000; width:auto;" href="#">  
                                                <div>
                                                    <img src="/image/{{$slider}}" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                                        <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                                            <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                                            
                                                                <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                                            </h5>
                                                        </div>
                                                </div>
                                                </a>
                                        </div>

                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 @endif
                <div class="full-info">
                <br class="clearfix">
                        <ul class="nav nav-tabs">
                                <li class="active"><a class="z-tabs" data-toggle="tab" href="#home">Haqqında</a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu1">Əmək / Pedaqoji fəaliyyəti</a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu2">Elmi nəşrlər və tədqiqatlar </a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu3">İş təcrübəsi </a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu4">Xəbərlərdə</a></li>
                            </ul>
                        <br class="flearfix">

                        <div class="container-fluid">
                            <div class="tab-content">
                                <div id="home" class="tab-pane fade in active">
                             
                                    <?php echo $teacher->about ?>
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                        <?php echo $teacher->tedris_info ?>
                                        
                                    </div>
                                    <div id="menu2" class="tab-pane fade">
                                    <?php echo $teacher->nesr_info ?>
                                    </div>
                                    <div id="menu3" class="tab-pane fade">
                                    <?php echo $teacher->istecrubesi ?>
                                    </div>
                                    <div id="menu4" class="tab-pane fade">
                                        <p></p>
                                    </div>
                                    <br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
</div>






@endsection