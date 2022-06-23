
@extends('website.layouts.websiteNew')

@section("content")

    <main style="background-color:#fff">
        <section style="background: #fff" class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>ƏMƏKDAŞ VƏ MÜƏLLİMLƏR</h2>
                        <span class="d-lg-block d-none">İkİncİ başlıq</span>
                    </div>
                    <img src="{{asset('assets/images/Xeberler page/image 1.png') }}" alt="image">
                </div>
            </div>
        </section>
        <section style="background-color: #fff;">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Əməkdaş və müəllimlər</li>
                    </ol>
                </nav>
            </div>
        </section>
        <section class="user" style="margin-bottom: 10em">
            <div class="container">
                <div class="box">
                    <div class="row">
                        <div class="col-lg-4 col-12">
                            <div class="user">

                                <div class="image">
                                    <?php
                                    $gallery_image = App\Models\Gallery::find($teacher->image);            
                                    ?>

                                    <img src="{{ asset('images/'. $gallery_image->image) }}" alt="person">

                                    </div>
                                <div class="name d-block d-lg-none">
                                    <h2>Абалмасова Екатерина Сергеевна</h2>
                                    <span>Elmi adı, Vezifəsi</span>
                                </div>
                                <div class="language">
                                    <h2>Владение языками</h2>
                                    <a href="#">английский</a>
                                </div>
                                <div class="Contacts">
                                    <h2>Контакты</h2>
                                    {!! $teacher->contact_info !!}
                                    {{-- <span>email@unec.edu.az</span>
                                    <span>+99412 1845 1023</span> --}}
                                    {{-- <span>Потаповский пер., д. 16, стр. 10, каб. 211</span> --}}
                                </div>
                                <ul>
                                    <li>SPIN РИНЦ: <span>{{ $teacher->orcid_id }}</span></li>
                                    <li>ORCID: <span>{{ $teacher->orcid_id }}</span></li>
                                    <li>ResearcherID: <span>{{ $teacher->scopus_id }}</span></li>
                                    <li>Scopus AuthorID: <span>{{ $teacher->scopus_id }}</span></li>
                                    <li>Google Scholar: <span><a class="text-primary" href="{{ $teacher->google_scholar }}" >click here</a></span></li>
                                </ul>
                                <div class="interests d-none d-lg-block">
                                    <h2>Профессиональные интересы</h2>
                                    <ul>
                                        @if( $teacher->tags_details )
                                        @foreach( $teacher->tags_details as $tag )
                                            <li><a href="#">{{ $tag['name'] }}</a></li>
                                        @endforeach
                                        @endif
                                    </ul>
                                </div>
                                <div class="ctrl d-none d-lg-block">
                                    <h2>Версия для печати</h2>
                                    <h3>CTRL + Enter</h3>
                                    <p>Mətində orfoqrafik səhf tapdınız?
                                        Məlumatı seçin və Ctrl+Enter klavişlərini sıxın və bu haqda bizə məlumat verin.
                                    </p>
                                    <span>Təşəkkür edirik!</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="user-info">
                                <div class="info d-none d-lg-block">
                                    <h2>{{ $teacher->name }}</h2>
                                    <span>Elmi adı, Vezifəsi</span>
                                </div>
                                <div class="tabs">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        {!! $teacher->short_about !!}
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="Домашняя" role="tabpanel"
                                             aria-labelledby="Домашняя-tab">
                                            <h2>Полномочия / обязанности</h2>
                                            <h3 class="d-none d-lg-block">Домашняя страница</h3>
                                            <ul>
                                                {!! $teacher->about  !!}
                                            </ul>                             
                                        </div>                                                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection