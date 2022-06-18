<!DOCTYPE html>
<html lang="en">
  <head>
       
    <!--Meta Tags-->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!--Title Here-->
    <title>Azərbaycan Dövlət İqtisad Universiteti</title>
    <!--Stylesheets-->
    <link href="/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/frontend/assets/css/animate.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/meanmenu.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/lightbox.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/modal-video.min.css" />
    <link rel="stylesheet" href="/frontend/assets/css/style.css?<?=rand(0,5000)?>" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick-theme.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.8.1/css/bootstrap-select.css">
    <link href="/contentbuilder/assets/minimalist-blocks/content.css?<?=rand(0,5000)?>" rel="stylesheet" type="text/css" />
    <link href="{{ asset('frontend/assets/css/views_website/website.css') }}" rel="stylesheet" type="text/css" >
    @stack('styles')

    <!--Google Fonts-->
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
  <header>
      <div class="head-area">
        <div class="topbar">
          <!--Topbar Contact Start-->
          <div class="contact-info" style="width:100%">
          <div class=" module module-menu " id="module-menu--1" data-mw-title="Menu" name="header_menu" template="top" data-type="menu" parent-module="menu" parent-module-id="module-menu--1">
<div role="menu" id="" class="menu menu_5  menu-root menu-item-id-50 menu-item-parent-5">

    <div class="topmenu">
    <?php echo \App\Models\Menu::tree('top'); ?>
    </div>
</div>

          </div>
          <!--Topbar Contact End-->


        </div>
      </div>
      <!--Logo Bar Start-->
      <div class="logobar edit">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-4">
              <div class="logo">
                <a href="/"><img src="https://test.unec.edu.az/application/uploads/2021/11/loqotip-yeni-small-e1633508749549.png" style="width:200px;" alt="Logo" /></a>
              </div>
            </div>
            <div class="col-md-8 middle_menu" style="margin-top:15px; ">
               <!-- <module type="menu" name="header_menu" /> -->
               <!-- MENU MICROWEBER -->
            </div>
            <div class="col-md-2 col-sm-6 col-8 edit" rel="content" field="header-contact">
              <div class="header-info">
                <div class="header-element">
                  <div class="left-iconbox">
                      <!-- MULTILANGUAGE MICROWEBER -->
                    <!-- <module type="multilanguage" /> -->
                  </div>
                </div>
                <div class="header-element mt-1 "  style="display:flex">
                    @foreach(\App\Models\Wlang::all() as $lang)

                    <a href="/lang/{{$lang->slug}}" class="btn btn-secondary " style="display:inline-block;margin:7px; color:#fff">{{__("index.".$lang->name)}}</a>
                    @endforeach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Logo Bar Start-->

      <!--Navigation Bar Start-->
      <div class="nav-bar">
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <div class="nav-elements" style="display: block;">
                <!--Primary Navigation Start-->
                <div class="primary-nav">
               <div class=" module module-menu " id="module-menu--2" data-mw-title="Menu" name="header_menu" template="navmenu" data-type="menu" parent-module="menu" parent-module-id="module-menu--2">

            <?php echo \App\Models\Menu::tree('main'); ?>



</div>
                <!--Primary Navigation End-->
              </div>
            </div>

          </div>
        </div>
        <div class="mobile-nav-container">
          <div class="container">
            <div class="mobile-nav"></div>
          </div>
        </div>
      </div>
      <!--Navigation Bar End-->
    </header>
  
    @yield("content")

    <footer>
<div class="row" style="background-color:#222">
    <div class="col-md-5" style="position:relative">
      <div style="
    position: absolute;
    width: 200px;
    background-color: #fff;
    padding: 15px;
    border-radius: 11px;
    margin: auto;
    left: 0;
    top: 20px;
    right: 0;
    z-index:100;
">
        <img src="https://test.unec.edu.az/application/uploads/2021/11/loqotip-yeni-small-e1633508749549.png" alt="" >
      </div>
      <div style="
    position: absolute;
    top: 140px;
    z-index: 100;
    padding: 13px;
    line-height: 3;
">
        <h3 class="text-white text-center" >AZƏRBAYCAN DÖVLƏT İQTİSAD UNİVERSİTETİ <br> UNEC</h3>
        <p class="text-white text-center" >Müasir elm ocağı</p>
        <p class="text-white text-center" >2021 bütün hüquqlar UNEC-ə məxsusdur.</p>
        <p class="text-white text-center" >Site created by. <a class="text-white" href="https://zerobyte.site">Zerobyte Solutions MMC</a></p>
      </div>
      <div class="overlay" style="filter: brightness(0.5);">
      <img src="http://test.unec.edu.az/application/uploads/2021/12/5b8fce05f3c0a_Iceri-sheher.jpeg" alt="">
      </div>
    </div>
    <div class="col-md-7" >
        <div class="container-fluid">
            <div class="row" style="margin-top: 40px">
              <div class="col-md-4">
                <ul>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">FAQ</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">KARYERA MƏRKƏZİ</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">İNKLÜZİV TƏHSİL MƏRKƏZİ</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">MÜBADİLƏ PROQRAMLARI</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">KORPORATİV STİL</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">REYTINQ 100</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">24/7 KİTABXANA</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">NƏŞRİYYAT</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">İNNOVATİV BİZNES İNKUBATOR</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">MUZEY</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">YADDAŞ QEYDİ</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;">QAYNAR XƏTT</a></li>
                  <li><a href="#" class="text-white text-center"  style="padding:15px 17px;"><img src="https://new.unec.edu.az/application/uploads/2021/12/radio.png" alt=""></a></li>
                </ul>
              </div>
            </div>
      </div>
    </div>
  </div>
</footer>

    <!--Javascripts-->
    <script src="/vendors/jquery/dist/jquery.min.js"></script>
    <script src="/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/frontend/assets/js/jquery.meanmenu.min.js"></script>
    <script src="/frontend/assets/js/waypoint.min.js"></script>
    <script src="/frontend/assets/js/jquery.counterup.min.js"></script>
    <script src="/frontend/assets/js/owl.carousel.min.js"></script>
    <script src="/frontend/assets/js/lightbox.min.js"></script>
    <script src="/frontend/assets/js/jquery-modal-video.min.js"></script>
    <script src="/frontend/assets/js/contact.js"></script>
    <script src="/frontend/assets/js/custom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.8.1/js/bootstrap-select.js"></script>
    <script>
      $('select').selectpicker();
    </script>
    <script>
      $(document).ready(function () {
        $(".js-video-button").modalVideo();
      });
    </script>

    
<script>
  $(document).ready(function(){
    $('.carousel_1').slick({
        slidesToShow: 1,
        dots:false,
        arrows:false,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
        });

// Slick version 1.5.8
</script>


<script>
  $(document).ready(function(){
    $('.carousel_2').slick({
        slidesToShow: 2,
        dots:false,
        infinite: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        });

// Slick version 1.5.8
</script>

<script>
  $(document).ready(function(){
    $('.carousel_3').slick({
        slidesToShow: 4,
        dots:false,
        infinite: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        });

// Slick version 1.5.8
</script>

<script>
  $(document).ready(function(){
    $('.carousel_4').slick({
        slidesToShow: 2,
        dots:false,
        infinite: true,
        arrows:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        $('.carousel_muellimler').slick({
          slidesToShow: 4,
          dots:false,
          infinite: true,
          arrows:false,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
          let zheight  = $(".z-right").height();
          if(zheight < 800){
            zheight = 800;
          }
          $(".z-background").css("height", zheight)
        });

        $('.carousel_news').slick({
        slidesToShow: 1,
        dots:false,
        infinite: true,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
       


// Slick version 1.5.8
$(document).ready(function(){

$('.items').slick({
infinite: false,
arrows:true,
slidesToShow: 30,
slidesToScroll:30
});
});



</script>

