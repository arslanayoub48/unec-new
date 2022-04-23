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