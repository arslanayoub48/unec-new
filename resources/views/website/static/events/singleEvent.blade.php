@extends('website.layouts.websiteNew')

@section("content")

    <main style="background-color:#fff;margin-bottom: 10rem">
        <section class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>ƏMƏKDAŞ VƏ MÜƏLLİMLƏR</h2>
                        <span class="d-lg-block d-none">İkİncİ başlıq</span>
                    </div>
                    <img src="{{asset('assets/images/Xeberler page/image 1.png')}}" alt="image">
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Əməkdaş və müəllimlər</li>
                    </ol>
                </nav>
            </div>
        </section>
        <!-- bey-section -->
        <section class="bey-section">
            <div class="container">
                <div class="row fixpadding">
                    <div class="col-md-12 col-lg-8">
                        <div class="left">
                            <h2>{{$event->title}}</h2>

                            <?php

                            $count = 1;
                            $checked = count(json_decode($event->slider));

                            $checked = round($checked / 2);
                            $sliders = $event->slider
                            ?>
                            <div class="image-slider">
                                <div id="slider">
                                    @foreach(json_decode($event->slider) as $slider)

                                        <?php
                                        $slider_data = App\Models\Gallery::find($slider);

                                        ?>

                                        <input type="radio" name="slider"
                                               id="s<?php echo $slider; $count++?>" <?php if ($count == $checked) {
                                            echo "checked";
                                        } ?>>



                                    @endforeach
                                    <?php

                                    $count = 1;
                                    ?>
                                    @foreach(json_decode($event->slider) as $slider)

                                        <?php
                                        $slider_data = App\Models\Gallery::find($slider);

                                        ?>



                                        <label for="s<?php echo $slider ?>" id="slide<?php echo $count; $count++ ?>">

                                            <img src="{{asset('images')}}/{{$slider_data->image}}" alt="image">

                                        </label>

                                    @endforeach
                                </div>
                            </div>
                            <div class="article">
                                <div class="info">
                                    <div class="info-article col-lg-6 col-12">

                                        <div><span><?php
                                                $category_name = \App\Models\Events_categories::find($event->category_id);
                                                echo $category_name->title;
                                                ?></span></div>
                                    </div>
                                    <div class="links">
                                        <a href="#"><img src="{{asset('assets/images/Xəbər page/Frame.svg')}}" alt="twitter-icon"></a>
                                        <a href="#"><img src="{{asset('assets/images/Xəbər page/Frame (1).svg')}}" alt="facebook-icon"></a>
                                        <a href="#"><img src="{{asset('assets/images/Xəbər page/Frame (2).svg')}}" alt="linkedin-icon"></a>
                                        <a href="#"><img src="{{asset('assets/images/Xəbər page/Frame (3).svg')}}" alt="youtube-icon"></a>
                                        <a href="#"><img src="{{asset('assets/images/Xəbər page/Vector.svg')}}" alt="instagram-icon"></a>
                                    </div>
                                </div>

                            </div>
                            <article>
                                <?php  echo $event->info; ?>
                                <?php  echo $event->more; ?>

                            </article>

                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Yüksək ixtisaslı müəllim heyəti <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}"
                                                                                     alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Müasir təhsil texnologiyaları <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}"
                                                                                   alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThre">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                                    data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                Karyera imkanları <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}" alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse show" aria-labelledby="headingThree"
                                         data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Menecer-logist</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Beynəlxalq ticarət
                                                        üzrə mütəxəssis</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Nəqliyyat-logistika üzrə mütəxəssis</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Anbar meneceri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                İkili diplom proqramları <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}" alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                         data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-2"><img src="{{asset('assets/images/Desktop-4/accordion-img.png" alt="accordion-img')}}" />
                                                </div>
                                                <div class="col-10">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingfive">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                                    data-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                                                Mübadilə proqramları <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}" alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsefive" class="collapse show" aria-labelledby="headingfive"
                                         data-parent="#accordionExample">
                                        <div class="card-body">
                                            <h3>UNEC təhsil həyatınızı unudulmaz etmək üçün mübadilə proqramları təklif edir. Aşağıda qeyd
                                                olunan Avropa və Türkiyə
                                                universitetində bir semester həm oxuya, həm də səyahət edə bilərsiniz</h3>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Erasmus proqramı çərçivəsində Almaniya, Fransa, Koreya, Litva və s.
                                                        Avropa universitetlərində</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Mevlana proqramı çərçivəsində Türkiyənin Hacettepe, İstanbul, Yıldız Teknik Universiteti
                                                        kimi 48 universitetində təhsil
                                                        almaq və beynəlxalq təcrübə qazanmaq imkanı yaradılır</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingsix">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                Təhsil proqramının strukturu
                                                3 blokdan ibarətdir <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}" alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingseven">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                                Təqaüd <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}" alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseseven" class="collapse" aria-labelledby="headingseven"
                                         data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingeight">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                    data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                                2020/2021-ci ilin keçid balları <img src="{{asset('assets/images/Desktop-4/Subtract.svg')}}"
                                                                                     alt="Subtract icon">
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseeight" class="collapse" aria-labelledby="headingeight"
                                         data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-2 col-4"><img src="{{asset('assets/images/Desktop-4/accordion-img.png')}}"
                                                                                 alt="accordion-img" />
                                                </div>
                                                <div class="col-md-10 col-8">
                                                    <p>Logistik şöbənin
                                                        rəhbəri</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <form>
                            <div class="form-title d-none d-lg-block">
                                <h2>Təhsil müddəti</h2>
                                <span>Əyani - 4 il</span>
                                <span>Qiyabi - 5 il</span>
                            </div>
                            <div class="form-title d-none d-lg-block">
                                <h2>Təhsil haqqı</h2>
                                <span>Əyani - 2500 manat</span>
                                <span>Qiyabi - 1800 manat</span>
                            </div>
                            <div class="form-title d-none d-lg-block">
                                <h2>Təhsil dili</h2>
                                <span>Azərbaycan</span>
                                <span>Rus</span>
                            </div>
                            <div class="form-title d-none d-lg-block">
                                <h2>Akademik dərəcə:</h2>
                                <span>Biznesin idarə edilməsi ixtisası üzrə</span>
                                <span>bakalavr ali peşə-ixtisas dərəcəsi</span>
                            </div>
                            <div class="form-title">
                                <h2>Qəbul üsulu</h2>
                                <p>II ixtisas qrupu üzrə Dövlət İmtahan Mərkəzinin müəyyən etdiyi qayda və prosedurlar əsasında;</p>
                                <p>Müsabiqədənkənar qəbul üçün müvafiq sənədləri (IB Diploma Programme, Advanced Level of General
                                    Certificate of
                                    Education, Advanced Placement) DİM-ə təqdim etməklə.</p>
                                <ul>
                                    <li><a href="#">Təhsil kürsu</a></li>
                                    <li><a href="#">Tələbə sayı və qəbul proqnozu</a></li>
                                    <li><a href="#">Tədris proqramları</a></li>
                                    <li><a href="#">Əcnəbi tələbələr üçün</a></li>
                                </ul>
                            </div>
                            <div class="form-title">
                                <h2>2022 abituriyentləri üçün açıq qaynar xət</h2>
                                <a href="#">UNEC Katiblik</a>
                            </div>
                            <div class="form-title">
                                <h2>Əlaqə:</h2>
                                <span>Bakı şəhəri, İstiqlaliyyət küçəsi 6, otaq 200 ;</span>
                                <span>+994 12 xxx xxx xx;</span>
                                <span>nkanaeva@unec.edu.az;</span>
                                <span>aiinkov@unec.edu.az</span>
                            </div>
                            <div class="CTRL d-none d-lg-block">
                                <h2>CTRL + Enter</h2>
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