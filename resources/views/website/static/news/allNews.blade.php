@extends('website.layouts.websiteNew')

@section("content")


    <main>
        <section style="background: #fff" class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>{{ __('index.l_in_24') }}</h2>
                        <span class="d-lg-block d-none">{{ __('index.51') }}</span>
                    </div>
                    <img src="{{asset('assets/images/Xeberler page/image 1.png')}}" alt="image">
                </div>
            </div>
        </section>
        <!-- Xəbərlər-section -->
        <section class="xəbərlər" style="margin-bottom:10rem;padding-top: 0;">
            <div class="container">
                <nav aria-label="breadcrumb" style="margin-bottom: 3rem;">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ __('index.l_in_24') }}</li>
                    </ol>
                </nav>
                <div class="title">
                    <div>
                        <h2>{{ __('index.l_in_24') }}</h2>
                    </div>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Rubrika</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="card-group">
                    <div class="row" style="justify-content: center;">

                        @foreach($news as $single_news)
                            <div class="col-lg-3 col-6">
                                <div class="card" style="margin-bottom:2rem;">
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
                                            echo date('d', strtotime($single_news->created_at)).'-'.date('M', strtotime($single_news->created_at)).'-'.date('Y', strtotime($single_news->created_at));

                                         ?>
                                        </span>
                                    </div>
                                </div>
                            </div>
                    @endforeach
                    <!-- loading -->
                        <div class="loading" style="font-size:50px;--duration:2s;--num-dot:10;">
                            <div style="--index:0"></div>
                            <div style="--index:1"></div>
                            <div style="--index:2"></div>
                            <div style="--index:3"></div>
                            <div style="--index:4"></div>
                            <div style="--index:5"></div>
                            <div style="--index:6"></div>
                            <div style="--index:7"></div>
                            <div style="--index:8"></div>
                            <div style="--index:9"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection