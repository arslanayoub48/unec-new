<!doctype html>
<html lang="az">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--=========================================  GOOGLE FONTS LINK =================================================-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital@1&display=swap" rel="stylesheet">


    <!--=========================================   CSS ======================================================-->

    <link rel="icon" href="{{ url('images/favicon_io/android-chrome-192x192.png') }}" type="image/png">
    <link rel="shortcut icon" href="{{ url('images/favicon_io/favicon.ico') }}" type="image/ico">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="{{ url('demos/style.css') }}">
    <link href="{{ url('assets/style.css') }}" rel="stylesheet" type="text/css"/>
    <link href="{{ url('frontend/assets/css/views_website/website.css') }}" rel="stylesheet" type="text/css">

    <title>UNEC ADIU</title>

</head>

<body>
<div id="app">
    <!-- header -->

    <header>
        <div class="top-header">
            <div class="container" style="position: relative;">
                <div class="menu">
                    <button class="toggle-btn"><img src="{{ url('assets/images/icons/menu.svg') }}" alt="open-menu">
                        {{ __('index.l_in_3') }}
                    </button>
                </div>

                <div class="dropdown-nav">
                    <?php echo \App\Models\Menu::treeTop('top'); ?>
                </div>
                <ul class="icons">
                    <li><a href="#"><img src="{{ url('assets/images/icons/search.svg') }}" alt="search-icon"/></a>
                    </li>
                    <li><a href="#"><img src="{{ url('assets/images/icons/eye.svg') }}" alt="eye-icon"/></a></li>
                    @foreach(Illuminate\Support\Facades\DB::table('lang')->get() as $language)

                    <li><a href="#"><?php echo strtoupper($language->slug) ?></a></li>
                    @endforeach
                </ul>
            </div>
            <div class="container">
                <div class="menu-toggle" id="menu-toggle" style="display: none;">
                    <div class="menu">
                        <button class="toggle-btn"><img src="{{url('assets/images/close.svg')}}" alt="=close-menu">
                        </button>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <div class="title-menu">
                                    <h2>BÜTÜN SAYT</h2><img src="{{url('assets/images/Frame.svg')}}" alt="menu">
                                </div>
                                <?php $menu = App\Models\Menu::where('loc', 'sidebar')->where("locale", App\Models\Wlang::getCurrent())->first();

                                $content = $menu->content;
                                $content = json_decode($content);

                                ?>
                                @foreach ($content[0] as $item)
                                    <?php
                                    $id = $item->id;
                                    $item_menu = App\Models\Menu::id($id);

                                    ?>
                                    <a class="nav-link show " id="<?php echo $item_menu->id ?>"
                                       data-toggle="pill" href="#sidebar-menu-<?php echo $item_menu->id ?>"
                                       role="tab" aria-controls="sidebar-menu-2"
                                       aria-selected="false">{{ $item_menu->title  }}</a>

                                @endforeach


                            </div>
                        </div>
                        <div class="col-6">
                            <div class="tab-content" id="v-pills-tabContent">
                                <?php $menu = App\Models\Menu::where('loc', 'sidebar')->where("locale", App\Models\Wlang::getCurrent())->first();

                                $content = $menu->content;
                                $content = json_decode($content);

                                ?>
                                @foreach ($content[0] as $item)
                                    <?php
                                    $id = $item->id;
                                    $item_menu = App\Models\Menu::id($id);

                                    ?>
                                    <div class="tab-pane fade" id="sidebar-menu-<?php echo $item_menu->id ?>"
                                         role="tabpanel"
                                         aria-labelledby="sidebar-menu-2-tab">
                                        <ul>
                                            <?php
                                            if (isset($item->children)) {

                                            ?>
                                            @foreach ($item->children[0] as $child)
                                                <?php
                                                $children = App\Models\Menu::id($child->id);
                                                ?>

                                                <a href="{{$children->slug }}"><li>{{$children->title }}</li></a>
                                            @endforeach
                                            <?php
                                            }

                                            ?>


                                        </ul>
                                    </div>

                                @endforeach


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-desktop navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/"><img src="{{url('assets/images/logo 1.svg')}}" alt="navbar-brand"></a>
                <div class="collapse navbar-collapse" style="flex-direction: column;" id="navbarSupportedContent">
                    <div class="dropdown-nav medium-dropdown-nav ml-auto" style="position: relative;">
                        <?php echo \App\Models\Menu::treeMain('main'); ?>

                    </div>
                    <div class="dropdown-nav ml-auto" style="position: relative;">
                        <?php echo \App\Models\Menu::treeLower('lower'); ?>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="navbar-mobile">
            <div class="container">
                <div class="logo">
                    <a class="navbar-brand" href="/"><img src="{{url('assets/images/mobile-logo.svg')}}"
                                                          alt="navbar-brand"></a>
                </div>
                <div class="toggle-menu ml-auto">
                    <button><img src="{{url('assets/images/mobile-search.svg')}}" alt="search-icon"/></button>
                    <button class="toggle-menu-btn"><img src="{{url('assets/images/mobile-menu.svg')}}"
                                                         alt="mobile-menu-icon"/></button>
                </div>
            </div>
        </nav>
        <div class="mobile-menu" id="mobile-menu" style="display: none;">
            <div class="container">
                <div class="row">
                    <div class="menu" style="width: 100%;">
                        <button class="toggle-menu-btn" style="float: right;"><img
                                    src="{{url('assets/images/close-mobile.svg')}}"
                                    alt="=close-menu"></button>
                    </div>
                    <div class="title-menu">
                        <h2>BÜTÜN SAYT</h2><img src="{{url('assets/images/Frame.svg')}}" alt="menu">
                    </div>
                    @foreach(App\Models\Menu::whereIn('loc', ['top','main','lower','sidebar'])->where("locale", App\Models\Wlang::getCurrent())->get() as $menu)
                        <div class="accordion" id="exampleAccordion">
                            <div class="card">
                                <?php
                                if (!$menu) return false;
                                $content = $menu->content;
                                $content = json_decode($content);
                                if (is_array($content)) {

                                ?>

                                @foreach ($content[0] as $item)
                                    <?php $id = $item->id;
                                    $item_menu = App\Models\Menu::id($id);
                                    ?>
                                    <div class="card-header" id="exItem2Header">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#exItem{{$item_menu->id}}"
                                                aria-expanded="true"
                                                aria-controls="exItem{{$item_menu->id}}">{{$item_menu->title}}
                                        </button>
                                    </div>

                                    <?php    if (isset($item->children)) {
                                    ?>

                                    <div id="exItem{{$item_menu->id}}" class="collapse show"
                                         aria-labelledby="exItem2Header"
                                         data-parent="#exampleAccordion">
                                        <div class="card-body">
                                            <ul>
                                                @foreach ($item->children[0] as $child)
                                                    <?php  $children = App\Models\Menu::id($child->id); ?>

                                                     <a href="{{$children->slug}}"><li>{{$children->title}}</li></a>
                                                @endforeach
                                            </ul>
                                        </div>
                                    </div>
                                <?php } ?>
                                @endforeach

                                <?php } ?>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </header>
    <!-- main-content -->
@yield("content")

<!-- Footer -->
    <footer class="position-relative mt-4w-100">
        <!-- sites-section  -->
        <div class="sites">
            <div class="container">
                <div class="sites-mobile">
                    <div id="sitescarousel" class="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <ul>
                                    <li><a href="https://www.president.az" target="_blank">www.president.az</a>
                                    </li>
                                    <li><a href="https://www.mehriban-aliyeva.org" target="_blank">www.mehriban-aliyeva.org</a>
                                    </li>
                                    <li>
                                        <a href="https://www.president.az" target="_blank">www.president.az</a>
                                    </li>
                                    <li><a href="https://www.mehriban-aliyeva.org" target="_blank">www.mehriban-aliyeva.org</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="carousel-item">
                                <ul>
                                    <li><a href="https://www.heydar-aliyev-foundation.org"
                                           target="_blank">www.heydar-aliyev-foundation.org</a>
                                    </li>
                                    <li><a href="https://www.azerbaijan.az" target="_blank">www.azerbaijan.az</a>
                                    </li>
                                    <li>
                                        <a href="https://www.edu.gov.az" target="_blank">www.edu.gov.az</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="carousel-item">
                                <ul>
                                    <li>
                                        <a href="https://www.tqdk.gov.az" target="_blank">www.tqdk.gov.az</a>
                                    </li>
                                    <li>
                                        <a href="https://www.economy.gov.az" target="_blank">www.economy.gov.az</a>
                                    </li>
                                    <li>
                                        <a href="https://www.science.gov.az" target="_blank">www.science.gov.az</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="carousel-item">
                                <ul>

                                    <li>
                                        <a href="https://www.azstat.org" target="_blank">www.azstat.org</a>
                                    </li>
                                    <li>
                                        <a href="https://www.atgti.az" target="_blank">www.atgti.az</a>
                                    </li>
                                    <li>
                                        <a href="https://www.virtualkarabakh.az"
                                           target="_blank">www.virtualkarabakh.az</a>
                                    </li>
                                    <li><a href="https://www.ecosciences.edu.az"
                                           target="_blank">www.ecosciences.edu.az</a>
                                    </li>
                                    <li>
                                        <a href="https://www.polpred.com" target="_blank">www.polpred.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#sitescarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#sitescarousel" data-slide-to="1"></li>
                            <li data-target="#sitescarousel" data-slide-to="2"></li>
                            <li data-target="#sitescarousel" data-slide-to="3"></li>
                        </ol>
                    </div>
                </div>
                <div class="sites-desktop">
                    <div class="sites-group">
                        <a href="https://www.president.az" target="_blank">www.president.az</a>
                        <a href="https://www.mehriban-aliyeva.org"
                           target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.mehriban-aliyeva.org&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.heydar-aliyev-foundation.org" target="_blank">www.heydar-aliyev-foundation.org</a>
                        <a href="https://www.azerbaijan.az" target="_blank">&nbsp;&nbsp;&nbsp;www.azerbaijan.az</a>
                        <a href="https://www.edu.gov.az"
                           target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.edu.gov.az&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.tqdk.gov.az" target="_blank">&nbsp;www.tqdk.gov.az&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.economy.gov.az" target="_blank">www.economy.gov.az</a>
                        <a href="https://www.science.gov.az" target="_blank">&nbsp;&nbsp;www.science.gov.az</a>
                        <a href="https://www.azstat.org"
                           target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.azstat.org&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.atgti.az"
                           target="_blank">&nbsp;www.atgti.az&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="https://www.virtualkarabakh.az" target="_blank">www.virtualkarabakh.az</a>
                        <a href="https://www.ecosciences.edu.az"
                           target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.ecosciences.edu.az</a>
                        <a href="https://www.polpred.com"
                           target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;www.polpred.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <form class="newsletter">
                        <img src="{{url('assets/images/footer/logo sayt ag 2.svg')}}" alt="logo">
                        <div class="newsletter-input">
                            <img src="{{url('assets/images/footer/Vector (5).svg')}}" alt="icon">
                            <input type="email" class="icon" name="email" id="email" placeholder="Email daxil edin">
                            <span>UNEC-in yenilikləri haqqinda ilk məlumat almaq üçün abunə olun</span>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <ul class="col-6">
                            <h2>UNEC Haqqinda</h2>
                            <li><a href="#">Rəqəmlər və faktlar</a></li>
                            <li><a href="#">Rəhbərlik və struktur</a></li>
                            <li><a href="#">Müəllimlər və amakdaşlar</a></li>
                            <li><a href="#">Filial və korpuslar</a></li>
                            <li><a href="#">Tender elanlari</a></li>
                            <li><a href="#">Bir Pəncərə xidməti</a></li>
                            <li><a href="#">UNEC Fondlari</a></li>
                            <li><a href="#">Tender elenlari</a></li>
                            <li><a href="#">UNEC-də inklüziv təhsil</a></li>
                        </ul>
                        <ul class="col-6">
                            <h2>ELM</h2>
                            <li><a href="#">Tədqiqatlarimiz</a></li>
                            <li><a href="#">Elmi jurnallar</a></li>
                            <li><a href="#">Nəşrlər</a></li>
                            <li><a href="#">Iqtisadi Araşdirmalar</a></li>
                            <li><a href="#">Elmi-Tədqiqat Institutu</a></li>
                            <li><a href="#">UNEC elmi-tədqiqat mərkəzləri</a></li>
                            <li><a href="#">mərkəzləri</a></li>
                            <li><a href="#">Dissertasiya Şurasi</a></li>
                            <li><a href="#">Qrantlar</a></li>
                            <li><a href="#">Konfranslar</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="row">
                        <ul class="col-6">
                            <h2>TƏDRIS</h2>
                            <li><a href="#">Fakültə və məktəblər</a></li>
                            <li><a href="#">Kolleclər</a></li>
                            <li><a href="#">Universitetə qəbul</a></li>
                            <li><a href="#">Maqistraturaya qəbul</a></li>
                            <li><a href="#">Doktoranturaya qəbul</a></li>
                            <li><a href="#">Əlavə teəhsil</a></li>
                            <li><a href="#">Qiyabi təhsil</a></li>
                        </ul>
                        <ul class="col-6">
                            <h2>RESURSLAR</h2>
                            <li><a href="#">Kitabxana</a></li>
                            <li><a href="#">Nəşriyyat</a></li>
                            <li><a href="#">Poliklinika</a></li>
                            <li><a href="#">Muzey</a></li>
                            <li><a href="#">Arxiv</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="row" style="float: right;">
                    <div class="logo">
                        <img src="{{url('assets/images/footer/logo.svg')}}" alt="radio">
                        <img src="{{url('assets/images/footer/UNEC Radio.svg')}}" alt="UNEC">
                    </div>
                    <div class="icons">
                        <a href="#" target="_blank"><img src="{{url('assets/images/footer/Vector.svg')}}"
                                                         alt="twitter-icon"></a>
                        <a href="#" target="_blank"><img src="{{url('assets/images/footer/Vector (1).svg')}}"
                                                         alt="facebook-icon"></a>
                        <a href="#" target="_blank"><img src="{{url('assets/images/footer/Vector (2).svg')}}"
                                                         alt="linkedin-icon"></a>
                        <a href="#" target="_blank"><img src="{{url('assets/images/footer/Vector (3).svg')}}"
                                                         alt="youtube-icon"></a>
                        <a href="#" target="_blank"><img src="{{url('assets/images/footer/Vector (4).svg')}}"
                                                         alt="instagram-icon"></a>
                    </div>
                </div>
                <div class="" style="float: left;">
                    &copy;
                    <span id="copyright">
              <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
            </span>
                    bütün hüquqlar UNEC-ə məxsusdur.
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </footer>
</div>
<!--=========================================  JAVASCRIPT ===============================================-->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>

<script src="{{ url('assets/main.js') }}" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script>
    $(function () {
        $("#datepicker").datepicker({
            showOtherMonths: true,
            firstDay: 1,
            selectOtherMonths: true
        });
    });
</script>


</body>

</html>