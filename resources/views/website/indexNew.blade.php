@extends('website.layouts.websiteNew')

@section("content")
    <link href="{{ asset('frontend/assets/css/views_website/index.css') }}" rel="stylesheet" type="text/css">

    <main>
        {{--        <!-- hero-section -->--}}
        {{--        <section class="hero">--}}
        {{--            <div class="container">--}}
        {{--            </div>--}}
        {{--        </section>--}}
        <div class="banner-area ">
            <!--Banner Item Start-->
            <div class="video-main">
                <div class="video-overlay"></div>
                <div class="video-container">
                    <iframe class="video-iframe"
                            src="https://www.youtube.com/embed/wFWxuVU5z_k?controls=0&mute=1&autoplay=1&playlist=wFWxuVU5z_k&loop=1"
                            frameborder="0"></iframe>
                    <div id="text">
                        <div class="container edit" rel="content" field="hero-text">
                            <div class="banner-title text-left ">
                                <h5>{{ __('index.dream') }}<br> {{ __('index.l_in_1') }}</h5>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <!--Banner Item End-->
        </div>
        <section class="mobile-slider">
            <div class="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
                    <div class="carousel-inner" style="height: 335px;">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-6">
                                    <div class="content">
                                        <img class="d-block" src="assets/images/unec-2-section/Rectangle 11.png"
                                             alt="item-image">
                                        <p>{{ __('index.l_in_4') }}</p>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="content">
                                        <img class="d-block" src="assets/images/unec-2-section/Rectangle 12.png"
                                             alt="item-image">
                                        <p>{{ __('index.l_in_2') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-6">
                                <div class="content">
                                    <img class="d-block" src="assets/images/unec-2-section/Rectangle 13.png"
                                         alt="item-image">
                                    <p>{{ __('index.l_in_4') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            2
                        </div>
                        <div class="carousel-item">
                            4
                        </div>
                    </div>
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                </div>
            </div>
        </section>
        <!-- unec-section -->
        <section class="unec">
            <div class="container">
                <div class="unec-group">
                    <div class="row">
                        <div class="card">
                            <img src="/assets/images/unec-group/Vector.svg" alt="icon">
                            <h2>{{ __('index.l_in_5') }}</h2>
                        </div>
                        <div class="card">
                            <img src="/assets/images/unec-group/Frame.svg" alt="icon">
                            <h2>{{ __('index.l_in_6') }}</h2>
                        </div>
                        <div class="card">
                            <img src="/assets/images/unec-group/Vector (1).svg" alt="icon">
                            <h2>{{ __('index.l_in_7') }}</h2>
                        </div>
                        <div class="card">
                            <img src="/assets/images/unec-group/Vector (2).svg" alt="icon">                            
                            <h2>{{ __('index.l_in_8') }}</h2>
                        </div>
                        <div class="card">
                            <img src="/assets/images/unec-group/Frame (1).svg" alt="icon">                            
                            <h2>{{ __('index.l_in_9') }}</h2>
                        </div>
                        <div class="card">
                            <img src="/assets/images/unec-group/Frame (2).svg" alt="icon">                            
                            <h2>{{ __('index.l_in_10') }}</h2>
                        </div>
                        <div class="card hidden">
                            <img src="/assets/images/unec-group/Frame (3).svg" alt="icon">
                            <h2>{{ __('index.l_in_11') }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- unec-2-section -->
        <section class="unec-2">
            <div class="container">
                <div class="row">
                    <div class="content-col col-4">
                        <h2>{{ __('index.l_in_12') }}</h2>
                        <p style="opacity: 45%;">{{ __('index.l_in_13') }}</p>
                        <p style="opacity: 45%;">{{ __('index.l_in_14') }}</p>
                        <p style="opacity: 45%;">{{ __('index.l_in_15') }}</p>
                        <p style="opacity: 45%;">{{ __('index.l_in_16') }}</p>                                                         
                        <div style="margin-top: 2rem;">
                            <span>{{ __('index.l_in_18') }}</span>
                            <span>{{ __('index.l_in_19') }}</span>
                        </div>
                    </div>
                    <div class="col-8" style="padding: 0 0 0 1rem;">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-interval="false">
                            <div class="carousel-inner" style="height: 400px;">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="content">
                                                <img class="d-block" src="assets/images/unec-2-section/Rectangle 11.png"
                                                     alt="item-image">
                                                <p> {{ __('index.l_in_20') }}  </p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="content">
                                                <img class="d-block" src="assets/images/unec-2-section/Rectangle 12.png"
                                                     alt="item-image">
                                                <p>{{ __('index.l_in_20') }}</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="content">
                                                <img class="d-block" src="assets/images/unec-2-section/Rectangle 13.png"
                                                     alt="item-image">
                                                <p>{{ __('index.l_in_20') }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">2
                                </div>
                                <div class="carousel-item">
                                    2
                                </div>
                                <div class="carousel-item">
                                    4
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- rəqəmsal-section -->
        <section class="rəqəmsal">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-2">
                        <blockquote>
                            {{ __('index.l_in_21') }}                            
                        </blockquote>
                        <span class="d-none d-lg-block">{{ __('index.l_in_22') }}</span>
                    </div>
                    <div class="card-group col-12 col-lg-10">
                        <div id="myCarousel" class="carousel slide w-100" data-interval="false">
                            <div class="carousel-inner w-100" role="listbox">
                                <div class="carousel-item active">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="card">
                                            <img class="card-img-top"
                                                 src="assets/images/rəqəmsal-section/Rectangle 14.png"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <span>{{ __('index.l_in_23') }}</span>
                                                <p class="card-text"><a href="#">
                                                    {{ __('index.l_in_20') }}                 
                                                    </a>
                                                </p>
                                                <span>Aprel 04, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="card">
                                            <img class="card-img-top"
                                                 src="assets/images/rəqəmsal-section/Rectangle 14 (1).png"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <span>Fakültə</span>
                                                <p class="card-text"><a href="#">
                                                    {{ __('index.l_in_20') }}                
                                                    </a>
                                                </p>
                                                <span>Aprel 04, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="card">
                                            <img class="card-img-top"
                                                 src="assets/images/rəqəmsal-section/Rectangle 14 (2).png"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <span>Fakültə</span>
                                                <p class="card-text"><a href="#">
                                                    {{ __('index.l_in_20') }}                
                                                    </a>
                                                </p>
                                                <span>Aprel 04, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="card">
                                            <img class="card-img-top"
                                                 src="assets/images/rəqəmsal-section/Rectangle 14 (3).png"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <span>Fakültə</span>
                                                <p class="card-text"><a href="#">
                                                    {{ __('index.l_in_20') }}                
                                                    </a>
                                                </p>
                                                <span>Aprel 04, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                            </ol>
                        </div>
                        <span class="d-block d-lg-none ml-auto">  {{ __('index.l_in_22') }}</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- Xəbərlər-section -->
        <section class="xəbərlər">
            <div class="container">
                <div class="title">
                    <div>
                        <h2>{{ __('index.l_in_24') }}</h2>
                        <a href="/news"> <span>{{ __('index.l_in_22') }}</span></a>

                    </div>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Rubrika</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="card-group">
                    <div id="carouselExampleIndicators3" class="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    @foreach($news as $single_news)
                                        <div class="col-lg-3 col-6">
                                            <div class="card">
                                                <?php
                                                $gallery_image = App\Models\Gallery::find($single_news->image);

                                                ?>
                                                <img class="card-img-top" style="width: 245px; height: 201px;"
                                                     src="{{url('images/')}}/<?php echo $gallery_image->image ?>"
                                                     alt="Card image cap">
                                                <div class="card-body">
                                                    <?php

                                                    $category = App\Models\News_categories::find($single_news->category_id);

                                                    ?>

                                                    <span><?php echo $category->title; ?></span>

                                                    <p class="card-text"><a href="/single-news/{{$single_news->slug}}">
                                                            {{$single_news->title}}
                                                        </a>
                                                    </p>
                                                    <span>
                                                         <?php
                                                        echo date('d', strtotime($single_news->created_at)) . ' ' . date('M', strtotime($single_news->created_at)) . ',' . date('Y', strtotime($single_news->created_at));
                                                        ?>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators3" data-slide-to="3"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <!-- Elanlar-section -->
        <section class="elanlar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="title">
                            <h2>{{ __('index.advertisements') }}</h2>

                            <a href="/advertisements"><span class="d-none d-lg-block">{{ __('index.all_advertisements') }}</span></a>
                        </div>
                        <div class="card-group">
                            <div id="elanlarCarousel" class="carousel slide w-100" data-interval="false">
                                <?php $active = false; ?>
                                <div class="carousel-inner w-100" role="listbox">
                                    @foreach($advertisements as $advertisement)
                                        <div class="carousel-item <?php if (!$active) {
                                            echo "active";
                                            $active = true;
                                        } ?>">
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="card">
                                                    <?php
                                                    $gallery_image = App\Models\Gallery::find($advertisement->image);
                                                    ?>
                                                    <img style="width: 230px; height: 170px;" class="card-img-top"
                                                         src="{{url('images/')}}/<?php echo $gallery_image->image ?>"
                                                         alt="Card image cap">
                                                    <div class="card-body">
                                                        <h5 class="card-text"><a
                                                                    href="/advertisement/{{$advertisement->slug}}">
                                                                {{$advertisement->title}}
                                                            </a>
                                                        </h5>
                                                        <div class="">
                                                            @if(json_decode($advertisement->tags))
                                                            @foreach(json_decode($advertisement->tags) as $tag)
                                                                <a href="/advertisement/tag/{{$tag}}">#{{$tag}}</a>

                                                            @endforeach
                                                            @endif
                                                        </div>
                                                        <p><?php
                                                            $category_name = \App\Models\Advertisements_categories::find($advertisement->category_id);
                                                            echo $category_name->title;
                                                            ?></p>
                                                        <span>
                                                        <?php
                                                            echo date('d', strtotime($advertisement->created_at)) . ' ' . date('M', strtotime($advertisement->created_at)) . ' ' . date('Y', strtotime($advertisement->created_at));

                                                            ?>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    @endforeach
                                </div>
                                <ol class="carousel-indicators">
                                    <?php $active = false; $i = 0;?>
                                    @foreach($advertisements as $advertisement)
                                        <li data-target="#elanlarCarousel" data-slide-to="<?php echo $i; $i++?>"
                                            class=" <?php if (!$active) {
                                                echo "active";
                                                $active = true;
                                            }?>"></li>
                                    @endforeach
                                </ol>

                            </div>
                        </div>
                        <div class="title"><span class="d-block d-lg-none ml-auto">{{ __('index.l_in_22') }}</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="tad">
                            <div class="title">

                                <h2>Tədbirlər</h2>
                                <a href="/events"> <span class="d-none d-lg-block">{{ __('index.l_in_23') }}</span></a>

                            </div>

                            <ul>
                                @foreach(App\Models\Events::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent())->where("status", "publish")->take(4)->get() as $single_event)
                                    <li>
                                        <div class="date">
                                        <span>
                                            <?php

                                            echo date_parse_from_format('Y-m-d', $single_event->created_at)['day'];;
                                            ?></span>
                                            <?php
                                            echo date("F", strtotime($single_event->created_at));
                                            ?>
                                        </div>
                                        <div class="content">
                                            <a href="/single-event/{{$single_event->slug}}">
                                                <p>{{$single_event->title}} </p></a>

                                            <span>
                                            <?php
                                                if ($single_event['event_type'] == 0) {
                                                    echo "online";
                                                } else {
                                                    echo "in place";
                                                }
                                                ?></span>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>

                            <div class="title">
                                <span class="d-block d-lg-none ml-auto">{{ __('index.l_in_22') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Faktlar-section -->
        <section class="faktlar">
            <div class="container">
                <div class="faktlar-border">
                    <div class="row">
                        <div class="col-lg-4 col-12 title">
                            <span>{{ __('index.l_in_27') }}</span>
                            <h2>UNEC</h2>
                            <h3>{{ __('index.l_in_28') }}</h3>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="card-group">
                                <div class="row">
                                    <div class="col-lg-3 col-6">
                                        <div class="card">
                                            <img class="card-img-top" src="{{url('assets/images/Faktlar-section/Vector.svg')}}"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-text">18.200</h5>
                                                <span>{{ __('index.l_in_29') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <div class="card">
                                            <img class="card-img-top" src="{{url('assets/images/Faktlar-section/Vector (1).svg')}}"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-text">403</h5>
                                                <span>{{ __('index.l_in_30') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <div class="card">
                                            <img class="card-img-top" src="{{url('assets/images/Faktlar-section/Vector (2).svg')}}"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-text">10</h5>
                                                <span>{{ __('index.l_in_23') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-6">
                                        <div class="card">
                                            <img class="card-img-top" src="{{url('assets/images/Faktlar-section/Vector (3).svg')}}"
                                                 alt="Card image cap">
                                            <div class="card-body">
                                                <h5 class="card-text">23</h5>
                                                <span>{{ __('index.l_in_31') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- sosial-section -->
        <section class="sosial">
            <div class="container">
                <div class="title text-center">
                    <h2>{{ __('index.32') }}</h2>
                    <p>{{ __('index.33') }}</p>
                </div>
                <div class="images-group">
                    <div><img src="{{url('assets/images/sosial-section/Rectangle 7875.png')}}" alt="image">
                        <img class="icon" src="{{url('assets/images/sosial-section/insta.svg')}}" alt="icon">
                    </div>
                    <div><img src="{{url('assets/images/sosial-section/Rectangle 7876.png')}}" alt="image">
                        <img class="icon" src="{{url('assets/images/sosial-section/insta.svg')}}" alt="icon">
                    </div>
                    <div class="images">
                        <div><img src="{{url('assets/images/sosial-section/Rectangle 7878.png')}}" class="w-100" alt="image">
                            <img class="icon" src="{{url('assets/images/sosial-section/insta.svg')}}" alt="icon">
                        </div>
                        <div class="d-flex">
                            <div><img src="{{url('assets/images/sosial-section/Rectangle 7879.png')}}" class="w-100"
                                      style="min-height: 102%;"
                                      alt="image">
                                <img class="icon" src="{{url('assets/images/Faktlar-section/Vector (3).svg')}}" alt="icon">
                            </div>
                            <div><img src="{{url('assets/images/sosial-section/Rectangle 7880.png')}}" class="w-100"
                                      style="min-height: 102%;"
                                      alt="image">
                                <img class="icon" src="{{url('assets/images/sosial-section/insta.svg')}}" alt="icon">
                            </div>
                        </div>
                    </div>
                    <div><img src="{{url('assets/images/sosial-section/Rectangle 7877.png')}}" alt="image">
                        <img class="icon" src="{{url('assets/images/sosial-section/insta.svg')}}" alt="icon">

                    </div>
                </div>
                <div class="social-icons text-center">
                    <a href="#"><img src="{{url('assets/images/sosial-section/Frame.svg')}}" alt="twitter-icon"></a>
                    <a href="#"><img src="{{url('assets/images/sosial-section/Frame (1).svg')}}" alt="facebook-icon"></a>
                    <a href="#"><img src="{{url('assets/images/sosial-section/Frame (2).svg')}}" alt="linkedin-icon"></a>
                    <a href="#"><img src="{{url('assets/images/sosial-section/Frame (3).svg')}}" alt="youtube-icon"></a>
                    <a href="#"><img src="{{url('assets/images/sosial-section/Frame (4).svg')}}" alt="instagram-icon"></a>
                </div>
            </div>
        </section>
        <!-- Tələbələrin-section -->
        <section class="talabalarin">
            <div class="container">
                <div class="title">
                    <div class="left">
                        <h2>UNEC</h2>
                        <span>{{ __('index.l_in_26') }}</span>
                    </div>
                    <div class="right">
                        <p>{{ __('index.34') }}</p>
                    </div>
                </div>
                <div class="horizontal-scroll">
                    <div class="horizontal-scroll__item">
                        <img src="{{url('assets/images/Tələbələrin-section/Rectangle 7881.png')}}" alt="image">
                        <div class="cover">
                            <div class="content">
                                <img src="{{url('assets/images/Tələbələrin-section/video.svg')}}" alt="play">
                                <h5>{{ __('index.35') }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="horizontal-scroll__item">
                        <img src="{{url('assets/images/Tələbələrin-section/Rectangle 7882.png')}}" alt="image">
                        <div class="cover">
                            <div class="content">
                                <img src="{{url('assets/images/Tələbələrin-section/video.svg')}}" alt="play">
                                <h5>{{ __('index.35') }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="horizontal-scroll__item">
                        <img src="{{url('assets/images/Tələbələrin-section/Rectangle 7883.png')}}" alt="image">
                        <div class="cover">
                            <div class="content">
                                <img src="{{url('assets/images/Tələbələrin-section/video.svg')}}" alt="play">
                                <h5>{{ __('index.35') }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="horizontal-scroll__item">
                        <img src="{{url('assets/images/Tələbələrin-section/Rectangle 7884.png')}}" alt="image">
                        <div class="cover">
                            <div class="content">
                                <img src="{{url('assets/images/Tələbələrin-section/video.svg')}}" alt="play">
                                <h5>{{ __('index.35') }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="horizontal-scroll__item">
                        <img src="{{url('assets/images/Tələbələrin-section/Rectangle 7885.png')}}" alt="image">
                        <div class="cover">
                            <div class="content">
                                <img src="{{url('assets/images/Tələbələrin-section/video.svg')}}" alt="play">
                                <h5>{{ __('index.35') }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="d-block d-md-none text-center">{{ __('index.36') }}</a>
            </div>
        </section>
        <!-- FƏXRİ-section -->
        <section class="faxri">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-12">
                        <div id="faxricarousel" class="carousel slide" data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card">
                                        <span>{{ __('index.37') }}</span>
                                        <img class="card-img-top" src="{{url('assets/images/FƏXRİ-section/Rectangle 7888.png')}}"
                                             alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ __('index.38') }}</h5>
                                            <p class="card-text">
                                                {{ __('index.39') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    2
                                </div>
                                <div class="carousel-item">
                                    3
                                </div>
                                <div class="carousel-item">
                                    4
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#faxricarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#faxricarousel" data-slide-to="1"></li>
                                <li data-target="#faxricarousel" data-slide-to="2"></li>
                                <li data-target="#faxricarousel" data-slide-to="3"></li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="card middle-card">
                            <img class="card-img-top" src="{{url('assets/images/FƏXRİ-section/file-e1628411134371 1.png')}}"
                                 alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">{{ __('index.40') }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div id="faxricarousel" class="carousel slide" data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card">
                                        <span>{{ __('index.37') }}</span>
                                        <img class="card-img-top" src="{{url('assets/images/FƏXRİ-section/Rectangle 7888.png')}}"
                                             alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ __('index.38') }}</h5>
                                            <p class="card-text">
                                                {{ __('index.39') }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    2
                                </div>
                                <div class="carousel-item">
                                    3
                                </div>
                                <div class="carousel-item">
                                    4
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#faxricarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#faxricarousel" data-slide-to="1"></li>
                                <li data-target="#faxricarousel" data-slide-to="2"></li>
                                <li data-target="#faxricarousel" data-slide-to="3"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection