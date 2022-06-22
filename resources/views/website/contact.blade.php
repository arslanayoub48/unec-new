


@extends('website.layouts.websiteNew')

@section("content")
<section class="breadcrumbs-custom-inset">
        <div class="breadcrumbs-custom context-dark">
          <div class="container">
            <h2 class="breadcrumbs-custom-title">Əlaqə</h2>
            <ul class="breadcrumbs-custom-path">
         
            </ul>
          </div>
          <div class="box-position" style="background-image: url(/images/1644868886.jpg);"></div>
        </div>
      </section>
      <section class="section section-sm section-first bg-default">
        <div class="container">
          <div class="row row-30 justify-content-center">
            <div class="col-sm-8 col-md-6 col-lg-4">
              <article class="box-contacts">
                <div class="box-contacts-body">
                  <div class="box-contacts-icon fas fa-phone"></div>
                  <div class="box-contacts-decor"></div>
                  <p class="box-contacts-link"><a href="tel:{{\App\Models\Settings::get('website.contact')}}">{{\App\Models\Settings::get('website.contact')}}</a></p>
                </div>
              </article>
            </div>
            <div class="col-sm-8 col-md-6 col-lg-4">
              <article class="box-contacts">
                <div class="box-contacts-body">
                  <div class="box-contacts-icon fas fa-home"></div>
                  <div class="box-contacts-decor"></div>
                  <p class="box-contacts-link"><a href="#">{{\App\Models\Settings::get('website.address')}}</a></p>
                </div>
              </article>
            </div>
            <div class="col-sm-8 col-md-6 col-lg-4">
              <article class="box-contacts">
                <div class="box-contacts-body">
                  <div class="box-contacts-icon fas fa-at"></div>
                  <div class="box-contacts-decor"></div>
                  <p class="box-contacts-link"><a href="mailto:#">{{\App\Models\Settings::get('website.email')}}</a></p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      @endsection