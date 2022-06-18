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
                    <img src="assets/images/Xeberler page/image 1.png" alt="image">
                </div>
            </div>
        </section>
        <section class="article-page" style="background-color:#fff;padding-top: 0;">
            <div class="container">
                <nav aria-label="breadcrumb" style="margin-bottom: 3rem;">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item" aria-current="page">Xəbərlər</li>
                        <li class="breadcrumb-item active" aria-current="page">Xəbərin adı</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="title">
                            <h2>UNEC regionda iqtisad elmini dərindən öyrədən fundamental tədris mərkəzidir.</h2>
                        </div>
                        <div class="image-slider">
                            <div id="slider">
                                <input type="radio" name="slider" id="s1">
                                <input type="radio" name="slider" id="s2">
                                <input type="radio" name="slider" id="s3" checked>
                                <input type="radio" name="slider" id="s4">
                                <input type="radio" name="slider" id="s5">
                                <label for="s1" id="slide1">
                                    <img src="assets/images/Xəbər page/Atardecer.png" alt="image">
                                </label>
                                <label for="s2" id="slide2">
                                    <img src="assets/images/Xəbər page/CasaPueblo.png" alt="image">
                                </label>
                                <label for="s3" id="slide3">
                                    <img src="assets/images/Xəbər page/ColoniaDelSacramento.png" alt="image">
                                </label>
                                <label for="s4" id="slide4">
                                    <img src="assets/images/Xəbər page/FaroLaPaloma.png" alt="image">
                                </label>
                                <label for="s5" id="slide5"><img src="assets/images/Xəbər page/PuntaDelEste.png" alt="image"></label>
                            </div>
                        </div>
                        <div class="article">
                            <div class="info">
                                <div class="info-article col-lg-6 col-12">
                                    <div class="date">04 may 2022</div>
                                    <div class="view" style="display: flex;"><img style="margin-right:.3rem;"
                                                                                  src="assets/images/Xəbər page/view.svg" alt="view"><span>365</span>
                                    </div>
                                    <div><span>Rubrika</span></div>
                                </div>
                                <div class="links d-none d-md-block col-lg-6 col-12">
                                    <a href="#"><img src="assets/images/Xəbər page/Frame.svg" alt="twitter-icon"></a>
                                    <a href="#"><img src="assets/images/Xəbər page/Frame (1).svg" alt="facebook-icon"></a>
                                    <a href="#"><img src="assets/images/Xəbər page/Frame (2).svg" alt="linkedin-icon"></a>
                                    <a href="#"><img src="assets/images/Xəbər page/Frame (3).svg" alt="youtube-icon"></a>
                                    <a href="#"><img src="assets/images/Xəbər page/Vector.svg" alt="instagram-icon"></a>
                                </div>
                            </div>
                            <article>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                                    a,
                                    mattis tellus. Sed
                                    dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                                    sed
                                    risus. Maecenas eget
                                    condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per
                                    inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                    Donec
                                    ut rhoncus ex.
                                    Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
                                    convallis
                                    diam sit amet
                                    lacinia. Aliquam in elementum tellus.
                                </p>
                                <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut
                                    vulputate nisi. Integer in
                                    felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
                                    vestibulum. Morbi a
                                    eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet
                                    magna
                                    non ligula
                                    vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
                                    eleifend. Sed nec ante
                                    dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere
                                    leo.</p>
                                <p>Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at
                                    nisi nec, fermentum
                                    congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae
                                    mauris
                                    nec ante pretium
                                    finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
                                    tincidunt tempor laoreet,
                                    nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi,
                                    consequat dictum risus
                                    dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper
                                    gravida
                                    sem sit amet cursus.
                                    Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus.
                                    Mauris
                                    consequat tellus id
                                    tempus aliquet.</p>
                                <p>Vestibulum dictum ultrices elit a luctus. Sed in ante ut leo congue posuere at sit amet ligula.
                                    Pellentesque eget augue
                                    nec nisl sodales blandit sed et sem. Aenean quis finibus arcu, in hendrerit purus. Praesent ac
                                    aliquet lorem. Morbi
                                    feugiat aliquam ligula, et vestibulum ligula hendrerit vitae. Sed ex lorem, pulvinar sed auctor
                                    sit
                                    amet, molestie a
                                    nibh. Ut euismod nisl arcu, sed placerat nulla volutpat aliquet. Ut id convallis nisl. Ut mauris
                                    leo, lacinia sed elit
                                    id, sagittis rhoncus odio. Pellentesque sapien libero, lobortis a placerat et, malesuada sit
                                    amet
                                    dui. Nam sem sapien,
                                    congue eu rutrum nec, pellentesque eget ligula.</p>
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
                                        <a href="#" class="prev-icon"><img src="assets/images/Xəbər page/prev.svg" alt="prev-icon"></a>
                                        <img class="card-img-left" src="assets/images/Xəbər page/Rectangle 12.png" alt="Card image cap">
                                        <div class="card-body">
                                            <a href="#" class="card-title">UNEC regionda iqtisad elmini dərindən öyrədən fundamental
                                                tədris
                                                mərkəzidir.</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <div class="next-article">
                                        <div class="card-body">
                                            <a href="#" class="card-title" style="display: block;text-align: right;line-height: 23px;">UNEC
                                                regionda iqtisad elmini dərindən öyrədən fundamental
                                                tədris
                                                mərkəzidir.</a>
                                        </div>
                                        <img class="card-img-left" src="assets/images/Xəbər page/Rectangle 12.png" alt="Card image cap">
                                        <a href="#" class="next-icon"><img src="assets/images/Xəbər page/next.svg" alt="next-icon"></a>

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
        </section>
    </main>
@endsection