
@extends('website.layouts.website')

@section("content")
<style>
  html{
    overflow-x:hidden;
  }
  .video-container{
    width: 100%;
    overflow: hidden;
    height: 600px;
    position: absolute;
    margin-top:-190px;

}
    
.video-iframe {
  width: 100%;
  height: 1120px;
}
#text{
  position: absolute;
  color: #FFFFFF;
  left: 30%;
  background-color: #2b405b;
  top: 70%;
  padding: 43px;
  width: 630px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  opacity: .9;
}
.make_my_childs_white *{
  color:#fff !important;
}
#text h5{
  font-size: 35px;
  color: #fff;
}
.video-iframe{
  pointer-events:none;

}
.video-main{
  overflow:hidden;
  position: relative;
    height: 540px;

}
@media only screen and (max-width: 600px) {
  .video-main {
    height:200px;
  }
  .video-container{
    height:260px;
  }
  .video-iframe{
    height:321px;
  }
  #text{display:none}

  
}
.wrapper{
  width:100%;
  padding-top: 20px;
    text-align:center;
  }
 
  .carousel{
    width:100%;
    margin:0px auto;
  }
  .slick-slide{
    margin:10px;
  }
  .slick-slide img{
    width:100%;
    border: 2px solid #fff;
  }
  .wrapper .slick-dots li button:before {
    font-size:20px;
    color:white;
  }
  .text-white{
    color:#fff;
  }
</style>

 <!--Banner Start-->
 <div class="banner-area ">
      <!--Banner Item Start-->
      <div class="video-main">
        <div class="video-overlay"></div>
        <div class="video-container">
          <iframe class="video-iframe" src="https://www.youtube.com/embed/wFWxuVU5z_k?controls=0&mute=1&autoplay=1&playlist=wFWxuVU5z_k&loop=1" frameborder="0"></iframe>
            <div id="text">    
            <div class="container edit" rel="content" field="hero-text">
              <div class="banner-title text-left ">
                <h5>UNEC-lə xəyallarınıza doğru hər <br> gün bir addım yaxınlaşın</h5>
              </div>
             
            </div>
          </div> 
        </div>
        
      </div>
      <!--Banner Item End-->
    </div>
    <!--Banner End-->
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-5 edit" rel="content" field="home-about">
            <div>
            <h3 class="text-center">UNEC - GƏLƏCƏYİN UNİVERSİTETİ</h3>
            <br>
        <p class="text-center">UNEC regionda iqtisad elmini dərindən öyrədən fundamental tədris mərkəzidir. Universitetdə tədris prosesi və kadr hazırlığı Amerika və Avropa təhsil sisteminə uyğundur.</p>
        <p class="text-center">İxtisaslar bakalavriat, magistratura və doktorantura təhsil pillələri üzrə azərbaycan, ingilis, rus və türk dillərində tədris edilir.</p>
        <p class="text-center">Tələbələr universiteti iki və daha çox ixtisas üzrə (dual major) bitirə və müxtəlif mübadilə proqramlarında iştirak edə bilərlər.</p>
        <br>
        <p class="text-center"><b>Davamlı inkişaf yolunda bizimlə birgə addımlayın!</b></p>
        <p class="text-center"><b>Gələcək hədəflərimizə birlikdə nail olaq!</b></p>

        <p class="text-right"><i>UNEC REKTORU</i></p>
        <p class="text-right"><i>PROF. ƏDALƏT MURADOV</i></p>
            </div>
      </div>
      <div class="col-md-5">
      <div class="container-fluid">
      <div class="wrapper">
            <div class="carousel carousel_4 carousel_inline_block_with_text">
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
                   <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="#">  
                        <div>
                              <img src="https://unec.zerobyte.site/userfiles/cache/thumbnails/450/tn-bg-section-team-2203638272.webp" style="width: <?=isset($params["width"])?$params["width"]: "360px"?>;height: <?=isset($params["height"])?$params["height"]: "200px"?>;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: <?=isset($params["width"])?$params["width"]."px": "100%"?>;">
                                      <h5 style="<?=isset($params["color"]) ? "color:".$params["color"]: "" ?>">
                                      
                                          <?=isset($item["full_title"]) ? $item["full_title"] :""?>
                                      </h5>
                                  </div>
                          </div>
                          </a>
                   </div>
            </div>
          </div>
      </div>
    </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <br>
    <br>
    <div class="container edit" rel="content" field="unec_news_text">
          <div class="row">
          <div class="col-md-6 col-sm-12">
                <h3 class="text-left mt-10">UNEC NEWS</h3>
            </div>
            <div class="col-md-6 col-sm-12">
                <h5 class="text-right" style="padding-top:7px;"><a href="/news">{{__("index.all_news")}}</a></h5>
            </div>

          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
      <div class="container-fluid">
      <div class="wrapper">
            <div class="carousel carousel_3 carousel_inline_block_with_text">
                  @foreach(\App\Models\News::orderBy("id","DESC")->where("status", "publish")->get() as $new)
                  <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="/new/{{$new->slug}}">  
                        <div>
                              <img src="/image/{{$new->image}}" style="width: 360px; height: 200px;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: 100%;">
                                      <h5>
                                      
                                          {{$new->title}}
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
    </div>
<br>
<br>
<div class="events" style="background-color:#0E3972; padding-top:40px; padding-bottom:80px;">
  <div class="row">
    
    <div class="col-md-7 col-sm-12">
      <div class="container edit" rel="content" field="unec_events_text">
          <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h3 class="text-left mt-10 text-white">{{__("index.all_events")}}</h3>
                </div>
                <div class="col-md-3 col-sm-12" >
                    <h5 class="text-right text-white" style="padding-top:7px;"><a style="color:#fff;" href="/events">{{__("index.all_events")}}</a></h5>
                </div>
                <div class="col-md-3 col-sm-12" style="z-index:1000">
                    <h5 class="text-right text-white" style="padding-top:7px;"><a  style="color:#fff" href="/advertisements">{{__("index.all_advertisements")}}</a></h5>
                </div>

          </div>
      </div>
      <br><br>
      
        <div class="container-fluid">
          <div class="wrapper">
                <div class="carousel carousel_1 carousel_inline_block_with_text">
                      @foreach(\App\Models\Events::orderBy("id", "DESC")->where("status", "publish")->get() as $ad)
                        <div class="carousel_item">
                            
                              <div class="row">
                                <div class="col-md-3">
                                    <div class="left" style="margin:auto;">
                                        <span style="font-size:71px;color:#fff;">{{date("d",strtotime($ad->start_at))}}</span>
                                        <p style="font-size:20px;color:#fff;">{{\App\Models\TimeDate::MonthToAz(date("M",strtotime($ad->start_at)))}}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="make_my_childs_white" style="width: 100%">
                                  <a style="color:#000; width:auto;" href="/event/{{$ad->slug}}">  
                                    <?php echo $ad->info; ?>
                                  </a>
                                  </div>
                                </div>
                              </div>
                        </div>
                      

                      @endforeach
                </div>
              </div>
          </div>
        </div>

        
    <div class="col-md-5 col-sm-12" style="padding-top:39px">
    <div class="container edit" rel="content" field="unec_events_text">
          <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h3 class="text-left mt-10 text-white">{{__("index.advertisements")}}</h3>
                </div>
             

          </div>
      </div>
        
    <div class="container-fluid">
      <div class="wrapper">
            <div class="carousel carousel_2 carousel_inline_block_with_text">
            @foreach(\App\Models\Advertisements::orderBy("id","DESC")->where("status","publish")->get() as $new)
                  <div class="carousel_item">
                    <a style="color:#000; width:auto;" href="/advertisement/{{$new->slug}}">  
                        <div>
                              <img src="/image/{{$new->image}}" style="width: 360px; height: 200px;object-fit: cover;object-position: center;">
                                  <div class="inline-slider-caption" style="width: 100%;">
                                      <h5 style="color:#fff;">
                                      
                                          {{$new->title}}
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
  </div>  
</div>
<br>
<br>
<div class="row">
  <div class="col-md-12">
      <module type="slider/block" id="home_raiting" template="default"  slider_id="15" />
  </div>
</div>
<br>
<div class="row">
  <div class="col-md-12">
      <module type="pictures" id="home_suggests" template="withtext" show="4" height="90" width="89px"  slider_id="16" />
  </div>
</div>
<br>
   
    <!--Gallery Section Start-->
    <div class="gallery ptb-50">
      <div class="container">
        <div class="sc-title">
          <h4 class="text-primary">Our Gallery</h4>
          <h2 class="text-secondary">Galleries</h2>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/1.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/1.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/2.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/2.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/3.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/3.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/4.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/4.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/5.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/5.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/6.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/6.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/7.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/7.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/8.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/8.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/9.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/9.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/10.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/10.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/11.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/11.jpg" alt="Image"
              /></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-6">
            <div class="gallery-item">
              <a href="/frontend/assets/img/gallery/12.jpg" data-lightbox="roadtrip"
                ><img src="/frontend/assets/img/gallery/12.jpg" alt="Image"
              /></a>
            </div>
          </div>
        </div>
        <!-- <div class="seemore text-center mt-50">
          <a href="#" class="btn btn-outline-secondary flat"
            >Daha çox <i class="fas fa-long-arrow-alt-right"></i
          ></a>
        </div> -->
      </div>
    </div>
    <!--Gallery Section End-->

    <!--Member Section Start-->
    <div class="teachers ptb-50 bg-bglight">
      <div class="container">
        <div class="sc-title text-center">
          <h2 class="text-secondary">UNEC tələbərin dili ilə</h2>
          <h4 class="text-primary">Ən çox soruşulan suallara tələbərimizin cavabları</h4>
        </div>
            <!-- SLIDER MICROWEBER -->
      </div>
    </div>
    <!--Member Section End-->
    <div class="presedent" style="background-color:#0E3972; padding-top:40px; padding-bottom:80px;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-2" style="background-color:#fff; border-radius:12px; padding-top: 8px;">
          <h5 class="text-black text-center">FƏXRİ DOKTORLAR</h5>
          <!-- SLIDER MICROWEBER -->
        </div>
        <div class="col-md-6" style="background-color:#fff; border-radius:12px;margin-left:4px; margin-right:5px; padding-top: 20px;">
          <h5 class="text-black text-center">HEYDƏR ƏLİYEVİN İQTİSADİ İRSİ</h5>
          <br><br>
          <img src="https://test.unec.edu.az/application/uploads/2021/12/h.aliyev-e1638636038313.png" alt="" style="
    height: 210px;
    width: 100%;
    object-fit: contain;
    object-position: center;
">
        </div>
        <div class="col-md-2" style="background-color:#fff; border-radius:12px; padding-top: 8px;">
          <h5 class="text-black text-center">MƏZUNLAR</h5>
          <!-- SLIDER MEZUNLAR -->
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
      <!-- SLIDER MICROWEBER -->
      </div>
    </div>
   
    <!-- <div class="taggbox-container" style="width:100%;height:100%;overflow: auto;"><div class="taggbox-socialwall" data-wall-id="88707" view-url="https://widget.taggbox.com/88707"></div><script src="https://widget.taggbox.com/embed.min.js" type="text/javascript"></script></div> -->
    @endsection