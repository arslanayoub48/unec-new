
@extends('website.layouts.website')

@section("content")

<section class="breadcrumbs-custom-inset">
        <div class="breadcrumbs-custom context-dark">
          <div class="container">
            <h2 class="breadcrumbs-custom-title">{{$product->title}}</h2>
            <ul class="breadcrumbs-custom-path">
         
            </ul>
          </div>
          <div class="box-position" style="background-image: url(/images/{{$product->image}});"></div>
        </div>
      </section>
<section class="section section-sm section-first bg-default">
        <div class="container">
          <div class="row row-50">
            <div class="col-lg-6">
              <div class="slick-product">
                <!-- Slick Carousel-->
                <?php $i=0; ?>
                <?php $a=2; ?>
                <div class="carousel-parent slick-initialized slick-slider" data-swipe="true" data-items="1" data-child="#child-carousel" data-for="#child-carousel">
                    <div aria-live="polite" class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 1596px; transform: translate3d(-1064px, 0px, 0px);" role="listbox">
                            @foreach($product->images as $image)
                            <div class="item slick-slide @if($i==0) slick-current slick-active @endif" style="width: 532px;" data-slick-index="{{$i}}" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00">
                                <div class="slick-product-figure"><img src="/images/{{$image->image}}" alt="" width="530" height="480"></div>
                            </div>
                            <?php $i++; ?>
                            @endforeach
                         
                        </div>
                    </div>
              </div>
                <div class="child-carousel slick-initialized slick-slider" id="child-carousel" data-for=".carousel-parent" data-arrows="true" data-items="3" data-sm-items="3" data-md-items="3" data-lg-items="3" data-xl-items="3" data-slide-to-scroll="1" data-md-vertical="true">
                  
                  
                  
                <div aria-live="polite" class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 546px; transform: translate3d(0px, 0px, 0px);" role="listbox">
                            @foreach($product->images as $image)
                                <div class="item slick-slide  slick-active @if($a==0) slick-current @endif" style="width: 170px;" data-slick-index="{{$a}}" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide10">
                                    <div class="slick-product-figure"><img src="/images/{{$image->image}}" style="height: 150px;object-position: center;object-fit: cover;" alt="" width="169" height="152"> </div>
                                </div>
                            <?php $a--; ?>
                            @endforeach
                     
                     
                    </div>
                </div>
            </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="single-product">
                <h3>{{$product->title}}</h3>
                <div class="group-md group-middle">
                  @if($product->price != "0") <div class="single-product-price">{{$product->price}}</div> @endif
                  <div class="box-rating">
                     @for($a++; $a <$product->rate; $a++)
                        @if($a > 4) @continue @endif
                         <span class="icon fa fa-star">
                     @endfor
                    </div>
                </div>
                <?php echo $product->content; ?>
                <div class="group-sm group-middle">
              
                  <div><a class="button button-secondary button-pipaluk" href="/contact">Bizəmlə əlaqə</a></div>
                </div>
                <div class="divider divider-40"></div>
                <div class="group-md group-middle"><span class="social-title">Sosial şəbəkələrdə izlə</span>
                  <div>
                    <ul class="list-inline list-inline-sm social-list">
                      <li><a class="icon fa fa-facebook" href="{{\App\Models\Settings::get('website.facebook')}}"></a></li>
                      <li><a class="icon fa fa-instagram" href="{{\App\Models\Settings::get('website.instagram')}}"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Bootstrap tabs-->
         @if($product->addition != "")
         <div class="tabs-custom tabs-horizontal tabs-corporate" id="tabs-5">
            <!-- Nav tabs-->
            <ul class="nav nav-tabs">
              <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-5-2" data-toggle="tab">Ətraflı</a></li>
            </ul>
            <!-- Tab panes-->
            <div class="tab-content">
              <div class="tab-pane fade active show" id="tabs-5-2">
                <?php echo $product->addition; ?>
              </div>
             
            </div>
          </div>
         @endif
        </div>
      </section>
       <!-- Popular products-->
       <section class="section section-sm bg-default">
        <div class="container">
          <div class="oh">
            <div class="title-decoration-lines slideInUp" data-wow-delay="0s">
              <h6 class="title-decoration-lines-content">Ən son məhsullarımız</h6>
            </div>
          </div>
          <!-- Owl Carousel-->
          <div class="owl-carousel owl-products" data-items="1" data-sm-items="2" data-md-items="3" data-lg-items="4" data-margin="30" data-dots="true" data-autoplay="true">
            <!-- Product-->
             @foreach(\App\Models\Products::all() as $product)
             @if(!isset($product->images[0])) @continue @endif
             <article class="product">
              <div class="product-figure"><img src="/images/{{$product->images[0]->image}}" alt="" width="270" height="280" style="    height: 242px;    object-fit: cover;    object-position: center;"/>
                <div class="product-button"><a class="button button-md button-white button-ujarak" href="/product/{{$product->id}}"><span class="fas fa-eye"></span></a></div>
              </div>
              <h5 class="product-title"><a href="/product/{{$product->id}}">{{$product->title}}</a></h5>
              <div class="product-price-wrap">
                @if($product->price != "0") <div class="product-price">{{$product->price}}</div> @endif
              </div>
            </article>
           
             @endforeach
          </div>
        </div>
      </section>

</script>
@endsection