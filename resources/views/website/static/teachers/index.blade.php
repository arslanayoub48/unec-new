@extends('website.layouts.websiteNew')

@section("content")

    <main style="background-color: #fff;margin-bottom: 10rem;">
        <section class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>ƏMƏKDAŞ VƏ MÜƏLLİMLƏR</h2>
                        <span class="d-lg-block d-none">İkİncİ başlıq</span>
                    </div>
                    <img src="assets/images/Xeberler page/image 1.png" alt="image">
                </div>
            </div>
        </section>
        <section class="alphabet">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Əməkdaş və müəllimlər</li>
                    </ol>
                </nav>
                <ul class="letters horizontal-scroll">
                    <li class="horizontal-scroll__item">
                        <a href="#">A</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">B</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">C</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Ç</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">D</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">E</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Ə</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">F</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">G</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">H</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">I</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">J</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">K</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Q</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">L</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">M</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">N</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">O</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Ö</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">P</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">R</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">S</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Ş</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">T</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">U</a>
                        </i>
                    <li class="horizontal-scroll__item">
                        <a href="#">Ü</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">V</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Y</a>
                    </li>
                    <li class="horizontal-scroll__item">
                        <a href="#">Z</a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- users-section -->
        <section class="users">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <form class="form-inline my-2 my-lg-0"
                              style="background: transparent;box-shadow:none;padding: 0;">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                            <button class="my-2 my-sm-0" type="submit"><span><img src="assets/images/search-icon.svg"
                                                                                  alt="search-icon"></span></button>
                        </form>                      
                        <div class="users-list">
                            @if( count ( $teachers )  )                        
                            @foreach( $teachers as $teacher )                            
                                <div class="user">
                                    <div class="row">
                                        <div class="col-lg-3 col-12">
                                            <div class="left" style="margin-left: -50px;">
                                                <div class="row" >
                                                    <a href="{{ route('single_staff', $teacher->slug) }}">
                                                    <div class="col-lg-12 col-3">
                                                        <?php
                                                        $gallery_image = App\Models\Gallery::find($teacher->image);            
                                                        ?>

                                                        <img  src="{{ asset('images/'. $gallery_image->image) }}" alt="person">
                                                    </div>
                                                    </a>
                                                    <div class="col-9 info" style="display: flex; align-items: center;">
                                                        <h2 class="d-block d-lg-none">Абалмасова Екатерина Сергеевна
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div class="d-none d-lg-block">
                                                        {{-- Contact Info --}}
                                                    {!! $teacher->contact_info  !!}
                                                    {{-- <span>email@unec.edu.az</span>
                                                    <span>+99412 1845 1023</span> --}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-9 col-12">
                                            <div class="info">
                                                <h2 class="d-none d-lg-block">
                                                    {{-- name --}}
                                                    {{ $teacher->name  }}
                                                </h2>
                                                <ul>
                                                    <li>тажер-исследователь: 
                                                        {{-- About --}}
                                                        {!! $teacher->short_about  !!}
                                                    </li>
                                                    <li>Аналитик: 
                                                            {{-- Short About --}}
                                                            {{-- {{ $teacher->about }}                                                         --}}
                                                    </li>                                                  
                                                </ul>
                                                <ul class="tag-group">
                                                    <div class="row">                                                      
                                                        @if( $teacher->tags_details )
                                                            @foreach( $teacher->tags_details as $tag )
                                                                <li><a href="{{ route('teacher_tag', $tag['id']) }}">{{ $tag['name'] }}</a></li>
                                                            @endforeach
                                                        @endif                                                        
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach            
                            @endif

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
                    <div class="col-lg-4 d-none d-lg-block">
                        <form class="filter">
                            <h2>FİLTERLƏR</h2>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Tədris binaları</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Kafedra</label>
                                <select class="form-control" id="exampleFormControlSelect2">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect3">Struktur bölmə</label>
                                <select class="form-control" id="exampleFormControlSelect3">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect4">Elmi dərəcə</label>
                                <select class="form-control" id="exampleFormControlSelect4">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect5">Vəzifə</label>
                                <select class="form-control" id="exampleFormControlSelect5">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="search-box">Tədqiqat sahəsi</label>
                                <input class="form-control" id="search-box" type="search" placeholder="Search"
                                       aria-label="Search">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect6">Dillər üzrə</label>
                                <select multiple class="form-control" id="exampleFormControlSelect6"
                                        style="box-shadow: none;margin-top: 0.5rem;background-image: none;">
                                    <option>Bütün</option>
                                    <option>Azərbaycan</option>
                                    <option>Türk</option>
                                    <option>İngilis</option>
                                    <option>Rus</option>
                                    <option>Digər</option>
                                </select>
                            </div>
                            <div class="CTRL">
                                <h2 class="text-left">CTRL + Enter</h2>
                                <p>Mətində orfoqrafik səhf tapdınız?
                                    Məlumatı seçin və Ctrl+Enter klavişlərini sıxın və bu haqda bizə məlumat verin.</p>
                                <span>Təşəkkür edirik!</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

@endsection