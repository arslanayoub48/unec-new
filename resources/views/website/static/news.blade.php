@extends('website.layouts.website')

@section("content")
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container">


        <div class="row">
            <?php
            $filter = \App\Models\News::orderBy("id", "DESC")->where("locale", \App\Models\Wlang::getCurrent())->where("status", "publish");
            $filter = $filter->get();

            ?>
            @foreach($filter as $advertisement)

                <div class="col-md-4">
                    <a href="/new/{{$advertisement->slug}}">
                        <img src="/image/{{$advertisement->image}}"
                             style="width:280px; height: 232px; object-fit:cover; object-position: center;" alt="">
                        <div style="width: 280px;">
                            <?php
                            echo mb_substr($advertisement->info, 0, 142, "utf-8") . "...";
                            ?>
                        </div>
                    </a>
                </div>

            @endforeach
        </div>


    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
@endsection