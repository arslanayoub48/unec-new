@extends('website.layouts.websiteNew')

@section("content")


    <main style="background-color:#fff;margin-bottom: 10rem">
        <section class="top-image-section">
            <div class="container">
                <div class="top-image">
                    <div>
                        <h2>{{ __('index.l_in_.24') }}</h2>
                        <span class="d-lg-block d-none">{{ __('index.51') }}</span>
                    </div>
                    <img src="assets/images/Xeberler page/image 1.png" alt="image">
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">UNEC</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ __('index.68') }}</li>
                    </ol>
                </nav>
            </div>
        </section>
        <section class="calender-section">
            <div class="container">
                <div id="eventCalender"></div>
                <div class="row fixpadding">
                    <div class="col-12 col-lg-8" style="padding: 2rem 0;">
                        @foreach($events as $key => $data)
                            <div class="date-item">

                                <div class="date">
                                    <h2 id="eventCalenderResult">{{$key}}</h2>
                                </div>

                                <div class="results">
                                    <div class="result-item">
                                        <div class="d-block d-lg-none">
                                            <div class="row"
                                                 style="justify-content: space-between;padding: 0 1rem;margin-bottom: 0.5rem;">
                                                <div class="time">16:00</div>
                                                <div class="" style="color: #9B51E0;">{{ __('index.69') }}</div>
                                            </div>
                                        </div>
                                        @foreach($data as $event)

                                            <div class="date d-none d-lg-block">
                                        <span>
                                            <?php

                                            echo date_parse_from_format('Y-m-d', $event['created_at'])['day'];
                                            ?></span>
                                                <?php
                                                echo preg_replace('/[0-9]+/', '', $key);
                                                ?>

                                            </div>
                                            <div class="content">
                                                <a href="/single-event/{{$event['slug']}}"> <p>{{$event['title']}}</p></a>
                                                <span>{{$event['address']}}</span>
                                            </div>

                                            <div class="d-block d-lg-none btn-group">
                                                <div class="row">
                                                    <a href="#">Rubrika</a>
                                                    <a href="#">Təsnifat</a>
                                                    <a href="#">Dil</a>
                                                </div>
                                            </div>
                                            <div class="name d-none d-lg-block">
                                                <?php
                                                if ($event['event_type'] == 0) {
                                                    echo "online";
                                                } else {
                                                    echo "in place";
                                                }
                                                ?>
                                            </div>


                                        @endforeach

                                    </div>

                                </div>

                            </div>
                        @endforeach


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
                    <div class="col-lg-4 d-none d-lg-block">
                        <form class="filter" id="my_form">
                            @csrf
                            <div class="subscribe">

                                <input placeholder="Email daxil edin" type="email" class="icon" name="email" id="textfield1" />
                                <input type="submit" onclick="sendForm()" value="ABUNƏ OLUN">
                            
                            </div>
                            <div class="title">
                                <h2>{{ __('index.70') }}</h2>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1"> {{ __('index.71') }}</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Bütün</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect2">{{ __('index.53') }}</label>
                                <select multiple class="form-control" id="exampleFormControlSelect2"
                                        style="box-shadow: none;margin-top: 0.5rem;background-image: none;height: 16rem;">
                                    <option>Abituriyentlər</option>
                                    <option>Qrant və müsabiqələr</option>
                                    <option>Elmi tədbirlər</option>
                                    <option>Tələbələr</option>
                                    <option>Disertasiya müdafiyəsi</option>
                                    <option>Yaradıcılıq və idman</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect4">{{ __('index.72') }}</label>
                                <select multiple class="form-control" id="exampleFormControlSelect4"
                                        style="box-shadow: none;margin-top: 0.5rem;background-image: none;height: 16rem;">
                                    <option>Bakalavriat</option>
                                    <option>Magistr</option>
                                    <option>Doktorant</option>
                                    <option>Əlavə təhsil</option>
                                    <option>İkinci ali təhsil</option>
                                    <option>Tədqiqatşılar</option>
                                    <option>Müəllim və professor heyyəti</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect3">{{ __('index.73') }}</label>
                                <select multiple class="form-control" id="exampleFormControlSelect3"
                                        style="box-shadow: none;margin-top: 0.5rem;background-image: none;">
                                    <option>Bütün</option>
                                    <option>Azərbaycan</option>
                                    <option>Türk</option>
                                    <option>İngilis</option>
                                    <option>Rus</option>
                                    <option>Digər</option>
                                </select>
                            </div>
                            <div class="Arxiv">
                                <h2>{{ __('index.63') }}</h2>
                                <div id="xaberdatepicker"></div>
                                <div class="btn-group">
                                    <button>Cancel</button>
                                    <button>Set Date</button>
                                </div>
                            </div>
                            <div class="CTRL">
                                <h2>{{ __('index.64') }}</h2>
                                <p>{{ __('index.65') }}</p>
                                <span>{{ __('index.66') }}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>



    <!-- jqueryui -->
    <script src="{{ asset('https://code.jquery.com/jquery-3.6.0.js') }}"></script>
    <script src="{{ asset('https://code.jquery.com/ui/1.13.1/jquery-ui.js') }}"></script>
    <script>
        $(function () {
            $("#datepicker").datepicker({
                showOtherMonths: true,
                firstDay: 1,
                selectOtherMonths: true
            });
        });
    </script>
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        function sendForm(){
            $.ajax({
                type: "POST",
                url: "{{route('subscribe')}}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: jQuery("#my_form").serialize(),
                cache: false,
                success:  function(data){

                    if(data.status  == "200"){
                        document.getElementById('textfield1').value = "";
                        toastr.success(data.message);
                    }
                    if(data.status == "400"){

                        toastr.error(data.message);
                    }

                }
            });
        }
    </script>
    <script src="{{ asset('assets/main.js') }}" type="text/javascript"></script>
@endsection
