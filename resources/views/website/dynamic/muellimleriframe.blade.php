<br class="mt-10">
    <div class="row">
        <div class="col-md-2">
                <b>Şəkil</b>
            </div>
            <div class="col-md-3">
                <b>Ad Soyad</b>
            </div>
            <div class="col-md-3">
                <b>Əlaqə</b>
            </div>
            <div class="col-md-3">
                <b>Vəzifə</b>
            </div>
            <br class="clearfix">
            <br class="clearfix">
        </div>
    <div class="well clearfix post-single teachers" itemscope >
    <?php
            $filter = \App\Models\Teachers::where("active", 1);
            if(isset($_GET["azlist"]) && $_GET["azlist"] != "all"){
                $filter = $filter->where("name", 'like', $_GET["azlist"].'%');
            }
            $filter = $filter->get();

        ?>
        @foreach($filter as $teacher)
    
        <div class="row" onclick="window.location.href='/teacher/{{\App\Models\Slug::make($teacher->name)}}'">
            <div class="col-xs-2 col-md-2">
                    <img src="/image/{{$teacher->image}}"  itemprop="image" >
                </div>
                <div class="col-md-3"><h5>{{$teacher->name}}</h5></div>
                <div class="col-md-3">
                    <?php echo $teacher->contact_info; ?>
                </div>      
                <div class="col-md-3">
                    {{App\Models\Meta::toString(App\Models\Meta::ids(0,$teacher->vezife))}}
                </div>
            </div>
            <br class="clearfix">

        @endforeach
    

    </div>