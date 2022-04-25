@extends('website.layouts.website')

@section("content")
<?php $teacher->about =       \App\Models\Timeline::AddShortCode($teacher, $teacher->about); ?>
<?php $teacher->short_about = \App\Models\Timeline::AddShortCode($teacher, $teacher->short_about); ?>
<?php $teacher->tedris_info = \App\Models\Timeline::AddShortCode($teacher, $teacher->tedris_info); ?>
<?php $teacher->nesr_info =   \App\Models\Timeline::AddShortCode($teacher, $teacher->nesr_info); ?>
<?php $teacher->istecrubesi = \App\Models\Timeline::AddShortCode($teacher, $teacher->istecrubesi); ?>
<link href="{{ asset('frontend/assets/css/views_website/muellim.css') }}" rel="stylesheet" type="text/css" >
<div class="container-fluid" style="width: 1120px;">

    <div class="row">
    
        <div class="col-md-3 ">
            
            <div class="z-background">
                
                <div class="z-avatar">
                    <img src="/image/{{$teacher->image}}" class="z-image" alt="">
                </div>
                <div class="z-info container">
                    <h5>{{__("staff.language_knowlage")}}</h5>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->language_knowlage))}}</p>
                    <h5>{{__("staff.contact")}}</h5>
                    <p><?php echo $teacher->contact_info ?></p>
                    <h5>{{__("staff.kafedra")}}</h5>
                    <p>{{\App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->kafedra))}}</p>
                    <h5>{{__("staff.tedrisbinasi")}}</h5>
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
                                <li class="active"><a class="z-tabs" data-toggle="tab" href="#home">{{__("staff.about")}}</a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu1">{{__("staff.pedoqoji")}}</a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu2">{{__("staff.elmiderece")}} </a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu3">{{__("staff.istecrubesi")}} </a></li>
                                <li ><a class="z-tabs" data-toggle="tab" href="#menu4">{{__("staff.xeberlerde")}}</a></li>
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