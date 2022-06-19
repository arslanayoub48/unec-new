@extends('website.layouts.websiteNew')

@section("content")
    <main>
        <section style="background: #fff" class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>XƏBƏRLƏR</h2>
                        <span class="d-lg-block d-none">İkİncİ başlıq</span>
                    </div>
                    <img src="{{ asset('assets/images/Xeberler page/image 1.png') }}" alt="image">
                </div>
            </div>
        </section>
        <section class="article-page" style="background-color:#fff;padding-top: 0;">
            <div class="container">
                <nav aria-label="breadcrumb" style="margin-bottom: 3rem;">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">UNEC</a></li>
                        <li class="breadcrumb-item" aria-current="page"><a href="/news">Xəbərlər</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Xəbərin adı</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="title">
                            <h2>{{$single_news->title}}</h2>
                        </div>

                            <div class="image-slider">
                                <div id="slider">
                                    <input type="radio" name="slider" id="s1">
                                    <input type="radio" name="slider" id="s2">
                                    <input type="radio" name="slider" id="s3" checked>
                                    <input type="radio" name="slider" id="s4" >
                                    <input type="radio" name="slider" id="s5">
                                    <label for="s1" id="slide1">
                                        <img  src="{{ asset('assets/images/Xəbər page/PuntaDelEste.png') }}" alt="image">
                                    </label>
                                    <label for="s2" id="slide2">
                                        <img src="{{ asset('assets/images/Xəbər page/CasaPueblo.png') }}" alt="image">
                                    </label>
                                    <label for="s3" id="slide3">
                                        <img src="{{ url('assets/images') }}/{{$single_news->image}}" alt="image">
                                    </label>
                                    <label for="s4" id="slide4">
                                        <img src="{{ asset('assets/images/Xəbər page/FaroLaPaloma.png') }}" alt="image">
                                    </label>
                                    <label for="s5" id="slide5"><img src="{{ asset('assets/images/Xəbər page/ColoniaDelSacramento.png') }}" alt="image"></label>
                                </div>
                        </div>
                        <div class="article">
                            <div class="info">
                                <div class="info-article col-lg-6 col-12">
                                    <div class="date">04 may 2022</div>
                                    <div class="view" style="display: flex;"><img style="margin-right:.3rem;"
                                                                                  src="{{ asset('assets/images/Xəbər page/view.svg') }}" alt="view"><span>{{$single_news->views}}</span>
                                    </div>
                                    <div><span>Rubrika</span></div>
                                </div>
                                <div class="links d-none d-md-block col-lg-6 col-12">
                                    <a href="#"><img src="{{ asset('assets/images/Xəbər page/Frame.svg') }}" alt="twitter-icon"></a>
                                    <a href="#"><img src="{{ asset('assets/images/Xəbər page/Frame (1).svg') }}" alt="facebook-icon"></a>
                                    <a href="#"><img src="{{ asset('assets/images/Xəbər page/Frame (2).svg') }}" alt="linkedin-icon"></a>
                                    <a href="#"><img src="{{ asset('assets/images/Xəbər page/Frame (3).svg') }}" alt="youtube-icon"></a>
                                    <a href="#"><img src="{{ asset('assets/images/Xəbər page/Vector.svg') }}" alt="instagram-icon"></a>
                                </div>
                            </div>
                            <article>
                                <span>
                                       <?php
                                    echo $single_news->info;
                                    ?>
                                </span>

                            </article>
                        </div>
                        <ul class="btn-group">
                            <li><a href="#">teg</a></li>
                            <li><a href="#">teg</a></li>
                            <li><a href="#">teg</a></li>
                        </ul>
                        <div class="pagination">
                            <div class="row">


                                <div class="col-lg-6 col-12">
                                    <div class="prev-article">
                                        <a href="/single-news/{{$previous_news->slug}}" class="prev-icon"><img src="{{ asset('assets/images/Xəbər page/prev.svg') }}" alt="prev-icon"></a>
                                        <img class="card-img-left" style="height: 200px; width: 200px;" src="{{ url('assets/images') }}/{{$previous_news->image}}" alt="Card image cap">
                                        <div class="card-body">
                                            <a href="/single-news/{{$previous_news->slug}}" class="card-title">{{$previous_news->title}}</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="next-article">
                                        <div class="card-body">
                                            <a href="/single-news/{{$next_news->slug}}" class="card-title" style="display: block;text-align: right;line-height: 23px;">{{$next_news->title}}</a>
                                        </div>
                                        <img class="card-img-left" style="height: 200px; width: 200px;" src="{{ url('assets/images') }}/{{$next_news->image}}" alt="Card image cap">
                                        <a href="/single-news/{{$next_news->slug}}" class="next-icon"><img src="{{ asset('assets/images/Xəbər page/next.svg') }}" alt="next-icon"></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 d-none d-lg-block">
                        <form>
                            <div class="subscribe">
                                <input placeholder="Email daxil edin" type="email" name="email" id="email" />
                                <input type="submit" value="ABUNƏ OLUN">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Rubrikalar</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2">
                                    <option selected>Abituriyentlər</option>
                                    <option>Qrant və müsabiqələr</option>
                                    <option>Elmi tədbirlər</option>
                                    <option>Tələbələr</option>
                                    <option>Disertasiya müdafiyəsi</option>
                                    <option>Yaradıcılıq və idman</option>
                                </select>
                            </div>
                            <div class="public">
                                <h2>İctimaiyyətlə əlaqə:
                                </h2>
                                <span>Əsas tədris binası, 201-ci otaq</span>
                                <span>Tel: (012) 1846 (daxili 1159)</span>
                            </div>
                            <div class="Arxiv">
                                <h2>Arxiv</h2>
                                <div id="xaberdatepicker"></div>
                                <div class="btn-group">
                                    <button>Cancel</button>
                                    <button>Set Date</button>
                                </div>
                            </div>
                            <div class="CTRL">
                                <h2>CTRL + Enter</h2>
                                <p>Mətində orfoqrafik səhf tapdınız?
                                    Məlumatı seçin və Ctrl+Enter klavişlərini sıxın və bu haqda bizə məlumat verin.</p>
                                <span>Təşəkkür edirik!</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </section>

    </main>
@endsection