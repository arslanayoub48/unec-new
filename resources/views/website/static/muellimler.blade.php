@extends('website.layouts.website')

@section("content")
<div class="post-list mw-post-list-blog">
<style scoped>
   .mw-post-list-blog-content .lead{
     margin-top: 0;
   }

   .teachers img{
       
       border-radius: 6px;
       width: 90px;

   }
   
</style>
<div class="container mt-50">
    <div class="row">
        <div class="col-md-8">
            <!-- COL6START -->
                <div class="azlist" style=" 
                    padding: 10px 0;
                    z-index: 1000;
                ">
                <ul>
                    <li><a href="{{\App\Models\ZURL::add('azlist','all')}}">Hamısı</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','A')}}">A</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','B')}}">B</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','C')}}">C</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ç')}}">Ç</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','D')}}">D</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','E')}}">E</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ə')}}">Ə</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','F')}}">F</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','G')}}">G</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ğ')}}">Ğ</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','H')}}">H</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','X')}}">X</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','I')}}">I</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','İ')}}">İ</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','J')}}">J</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','K')}}">K</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Q')}}">Q</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','L')}}">L</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','M')}}">M</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','N')}}">N</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','O')}}">O</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ö')}}">Ö</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','P')}}">P</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','R')}}">R</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','S')}}">S</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ş')}}">Ş</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','T')}}">T</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','U')}}">U</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Ü')}}">Ü</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','V')}}">V</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Y')}}">Y</a></li>
                    <li><a href="{{\App\Models\ZURL::add('azlist','Z')}}">Z</a></li>
                </ul>
                </div> 

                <style>

                    @media only screen and (max-width: 600px) {
                        .azlist-table{
                            display: none;
                        }
                        .azlist-icon{
                            display:block !important;
                            background-color: #0e3971;
                            color: #fff;
                            font-weight: 600;
                            padding: 6px;
                            border-radius: 20px;
                        }
                        .azlist{
                            top: 78px !important;
                        }
                    }
                    .azlist-icon{
                        display: none;
                    }
                    .azlist{
                        background-color:#fff;
                    }
                    .azlist li {
                    display: inline-block;
                    padding: 10px;
                }
                </style>
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
                   <?php
                        $filter = \App\Models\Teachers::where("active", 1)->where("locale", \App\Models\Wlang::getCurrent());
                        if(isset($_GET["azlist"]) && $_GET["azlist"] != "all"){
                            $filter = $filter->where("name", 'like', $_GET["azlist"].'%');
                        }
                        $filter = $filter->get();

                    ?>
                    @foreach($filter as $teacher)
                
                    <div class="row" onclick="window.location.href='/staff/{{\App\Models\Slug::make($teacher->name)}}'">
                        <div class="col-xs-2 col-md-2">
                                <img src="/image/{{$teacher->image}}"  itemprop="image" >
                            </div>
                            <div class="col-md-3">
                                <h5>{{$teacher->name}}</h5>
                                <p>{{App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->vezife))}}</p>
                            </div>
                            <div class="col-md-3 ">
                                <?php echo $teacher->contact_info; ?>
                            </div>   
                        </div>
                        <br class="clearfix">

                    @endforeach
                

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

@endsection
