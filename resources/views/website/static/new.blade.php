@extends('website.layouts.website')

@section("content")
<br>
<br>
<br>
<br>
<br>
<style>
    .tag {
    width: 65px;
    height: 28px;
    text-align: center;
    display: inline-block;
    transition: all 0.16s ease;
    cursor:pointer;
}

.tag a:hover{
    text-decoration:underline;
}
</style>
<div class="container-fluid" style="width: 1120px;" >
    <div class="row">
        <div class="col-md-12">
        <div class="container">
            <h1>{{$new->title}}</h1>
            <br class="clearfix">
            <p>
                <i class="ml-1 fa fa-folder-open"></i>  &nbsp; {{$new->category->title}}
                <i class="ml-1 fa fa-eye"></i>&nbsp; {{$new->views}}
                <i class="ml-1 fa fa-calendar"></i>&nbsp;  {{date("d-m-Y", strtotime($new->created_at))}}
            </p>
        </div>
        <br class="clearfix">
         @if($new->slider)
                    <div class="slider" style="width: 400px; float:left;">
                        <div class="container-fluid">
                            <div class="wrapper">
                                    <div class="carousel carousel_news carousel_inline_block_with_text">
                                        @foreach(json_decode($new->slider) as $slider)
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
            <div class="tags">
            @foreach(\App\Models\Tags::tags($new->tags) as $tag)
            @if(empty($tag)) @continue @endif
               <div class="tag">
                   <a href="/tag/{{$tag}}"> {{$tag}}</a>
               </div>

            @endforeach
            </div>
            <br class="clearfix">
            
            <div> <?php echo $new->info; ?></div>
         
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