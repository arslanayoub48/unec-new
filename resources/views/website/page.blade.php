@extends('website.layouts.websiteNew')

@section("content")
    <!-- Breadcrumbs -->
    <section class="breadcrumbs-custom-inset">
        <div class="breadcrumbs-custom context-dark">
            <div class="container">
                <h2 class="breadcrumbs-custom-title">{{$page->title}}</h2>
                <ul class="breadcrumbs-custom-path">

                </ul>
            </div>
            <div class="box-position" style="background-image: url(/images/{{$page->image}});"></div>
        </div>
    </section>
    <!-- Why choose us-->
    <section class="section section-sm section-first bg-default">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
                <?php echo $page->content; ?>
            </div>
            <div class="col-1"></div>
        </div>
    </section>
@endsection