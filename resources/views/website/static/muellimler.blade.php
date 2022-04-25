@extends('website.layouts.website')

@section("content")
<link href="{{ asset('frontend/assets/css/views_website/muellimler.css') }}" rel="stylesheet" type="text/css" >
<div class="post-list mw-post-list-blog">

<div class="container mt-50">
    <div class="row">
        <div class="col-md-8">
            <!-- COL6START -->
                <div class="azlist" style=" 
                    padding: 10px 0;
                    z-index: 1000;
                ">
                <ul>
                    <li><a href="?azlist=">Hamısı</a></li>
                    <li><a href="?azlist=A">A</a></li>
                    <li><a href="?azlist=B">B</a></li>
                    <li><a href="?azlist=C">C</a></li>
                    <li><a href="?azlist=Ç">Ç</a></li>
                    <li><a href="?azlist=D">D</a></li>
                    <li><a href="?azlist=E">E</a></li>
                    <li><a href="?azlist=Ə">Ə</a></li>
                    <li><a href="?azlist=F">F</a></li>
                    <li><a href="?azlist=G">G</a></li>
                    <li><a href="?azlist=Ğ">Ğ</a></li>
                    <li><a href="?azlist=H">H</a></li>
                    <li><a href="?azlist=X">X</a></li>
                    <li><a href="?azlist=I">I</a></li>
                    <li><a href="?azlist=İ">İ</a></li>
                    <li><a href="?azlist=J">J</a></li>
                    <li><a href="?azlist=K">K</a></li>
                    <li><a href="?azlist=Q">Q</a></li>
                    <li><a href="?azlist=L">L</a></li>
                    <li><a href="?azlist=M">M</a></li>
                    <li><a href="?azlist=N">N</a></li>
                    <li><a href="?azlist=O">O</a></li>
                    <li><a href="?azlist=Ö">Ö</a></li>
                    <li><a href="?azlist=P">P</a></li>
                    <li><a href="?azlist=R">R</a></li>
                    <li><a href="?azlist=S">S</a></li>
                    <li><a href="?azlist=Ş">Ş</a></li>
                    <li><a href="?azlist=T">T</a></li>
                    <li><a href="?azlist=U">U</a></li>
                    <li><a href="?azlist=Ü">Ü</a></li>
                    <li><a href="?azlist=V">V</a></li>
                    <li><a href="?azlist=Y">Y</a></li>
                    <li><a href="?azlist=Z">Z</a></li>
                </ul>
                </div> 
                
                <script>
                    let azlistOpenToggle = false;
                    function openAZList(){
                        if(azlistOpenToggle){
                            document.querySelector(".azlist-table").style.display = "none";
                            document.querySelector(".azlist-icon").style.display = "block";
                            document.querySelector(".azlist").style.backgroundColor = "transparent";
                            azlistOpenToggle = false;
                        }else{
                            document.querySelector(".azlist-table").style.display = "block";
                            document.querySelector(".azlist-icon").style.display = "none";
                            document.querySelector(".azlist").style.backgroundColor = "#fff";
                            azlistOpenToggle = true;
                        }
                        
                    }
                </script>
                <br class="mt-10">
                <div class="row">
                    <div class="col-md-2">
                        </div>
                        <div class="col-md-3">
                            <b>Ad Soyad</b>
                        </div>
                        <div class="col-md-3">
                            <b>Əlaqə</b>
                        </div>
                        
                        <br class="clearfix">
                        <br class="clearfix">
                    </div>
                <div class="well clearfix post-single teachers" itemscope >
                    <div class="filter_data"></div>

                </div>
                </div>
            <!-- COL6STOP -->
        
        <div class="col-md-4">
            <!-- COL6START -->
<div class="container-fluid">
    <h5>Tədris binası</h5>
    <br class="clearfix">
    <div class="form-group">
        <select  id="tedris" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                @foreach(\App\Models\Meta::multi(0, 'tedris') as $element)
                        <option value="{{$element->id}}">{{$element->value}}</option>
                @endforeach
        </select>
    </div>
    <br class="clearfix">
    <p><h5>Kafedra</h5></p>
    <br class="clearfix">
    <div class="form-group">
        <select  id="kafedra" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                @foreach(\App\Models\Meta::multi(0, 'kafedra') as $element)
                        <option value="{{$element->id}}">{{$element->value}}</option>
                @endforeach
        </select>
    </div>
    <br class="clearfix">
    <p><h5>Struktur bölmə</h5></p>
    <br class="clearfix">
    <div class="form-group">
        <select  id="struktur" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                @foreach(\App\Models\Meta::multi(0, 'struktur') as $element)
                        <option value="{{$element->id}}">{{$element->value}}</option>
                @endforeach
        </select>
    </div>
    <br class="clearfix">
    <p><h5>Elmi dərəcə</h5></p>
    <br class="clearfix">
    <div class="form-group">
        <select  id="elmiderece" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                @foreach(\App\Models\Meta::multi(0, 'elmiderece') as $element)
                        <option value="{{$element->id}}">{{$element->value}}</option>
                @endforeach
        </select>
    </div>
    <p><h5>Vəzifə</h5></p>
    <br class="clearfix">
    <div class="form-group">
        <select  id="vezife" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                @foreach(\App\Models\Meta::multi(0, 'vezife') as $element)
                        <option value="{{$element->id}}">{{$element->value}}</option>
                @endforeach
        </select>
    </div>
</div>
            <!-- COL6STOP -->
        </div>
    </div></div>
</div>
<br class="clearfix">
<br class="clearfix">
<br class="clearfix">
<br class="clearfix">
<br class="clearfix">
<script src="/vendors/jquery/dist/jquery.min.js"></script>
<script>


$(document).ready(function(){
    filter_data();
    function filter_data()
    {
        
        $('.filter_data').html('<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div>');
        var action = 'fetch_data';
        let tedris = $("#tedris").val();
        let struktur = $("#struktur").val();
        let kafedra = $("#kafedra").val();
        let elmiderece = $("#elmiderece").val();
        let vezife = $("#vezife").val();
        let azlist = '{{isset($_GET["azlist"]) ? $_GET["azlist"] : ""}}';
        $.ajax({
            url:"/staff/filter",
            method:"POST",
            data:{_token: '{{ csrf_token() }}',elmiderece,tedris,vezife, struktur,kafedra,azlist},
            success:function(data){
                $('.filter_data').html(data);
            }
        });
    }


    $('.selectpicker').on("change",function(){
        filter_data();
    });

 

});
</script>
@endsection
