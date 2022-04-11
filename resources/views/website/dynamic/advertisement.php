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
         @if($advertisement->slider)
                    <div class="slider" style="width: 400px; float:left;">
                        <div class="container-fluid">
                            <div class="wrapper">
                                    <div class="carousel carousel_news carousel_inline_block_with_text">
                                        @foreach(json_decode($advertisement->slider) as $slider)
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
                 @endif
          
            <div> <?php echo $advertisement->info; ?></div>
            
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