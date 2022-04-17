@extends('admin.layouts.app')

@section("content")

<div class="right_col" role="main">
    <div class="page-title">
        <div class="title_left">
            <h3>Menular
            @foreach(\App\Models\Wlang::all() as $lang)
                <a  class="language_links @if(\App\Models\Wlang::getCurrent() == $lang->slug) language_links_active @endif" href="?lang={{$lang->slug}}">{{$lang->name}}</a>
            @endforeach

            </h3>
        </div>
    </div>
    <br><br>
<div class="container-fluid">
  
  <div class="content info-box">
  	@if(count($menus) > 0)		
	Menyunu seçin	
	<form action="{{url('admin/manage-menus')}}" class="form-inline">
      <select name="id">
		@foreach($menus as $menu)
	        @if($desiredMenu != '')
			<option value="{{$menu->id}}" @if($menu->id == $desiredMenu->id) selected @endif>{{$menu->title}}</option>
		  @else
			<option value="{{$menu->id}}">{{$menu->title}}</option>
		  @endif
		@endforeach
	  </select>
	  <button class="btn btn-sm btn-default btn-menu-select">Seç</button>
	</form> 
	@endif 
  </div>


  <div class="row" id="main-row">				
	<div class="col-sm-3 cat-form @if(count($menus) == 0) disabled @endif">
      <h3><span>Menu əlavə et</span></h3>			

	  <div class="panel-group" id="menu-items">
		
	  <div class="panel panel-default">
		<div class="panel-heading">
	      <a href="#custom-links" data-toggle="collapse" data-parent="#menu-items">Keçid <span class="caret pull-right"></span></a>
		</div>
		<div class="panel-collapse collapse" id="custom-links">
		  <div class="panel-body">						
			<div class="item-list-body">
			  <div class="form-group">
				<label>Keçid linki</label>
				<input type="url" id="url" class="form-control" placeholder="https://">
			  </div>
			  <div class="form-group">
				<label>Başlıq</label>
			      <input type="text" id="linktext" class="form-control" placeholder="">
				</div>
			  </div>	
			  <div class="item-list-footer">
				<button type="button" class="pull-right btn btn-default btn-sm" id="add-custom-link">Menyuya əlavə et</button>
			  </div>
			</div>
		  </div>
		</div>
	  </div>		
	</div>		

	<div class="col-sm-9 cat-view">
  <h3><span>Menu strukturası</span></h3>
  @if($desiredMenu == '')
    <h4>Create New Menu</h4>
	<form method="post" action="{{url('admin/create-menu')}}">
	  {{csrf_field()}}
	  <div class="row">
		<div class="col-sm-12">
		  <label>Adı</label>
		</div>
		<div class="col-sm-6">
		  <div class="form-group">							
			<input type="text" name="title" class="form-control">
		  </div>
		</div>
		<div class="col-sm-6 text-right">
		  <button class="btn btn-sm btn-primary">Menu yarat</button>
		</div>
	  </div>
	</form>
	@else
	<div id="menu-content">
		<div id="result"></div>
	  <div style="min-height: 240px;">
		  <p>Yeni menu yaratmaq</p>
		  @if($desiredMenu != '')
			<ul class="menu ui-sortable" id="menuitems">
  @if(!empty($menuitems))
	@foreach($menuitems as $key=>$item)
	  <li data-id="{{$item->id}}"><span class="menu-item-bar"><i class="fa fa-arrows"></i> @if(empty($item->name)) {{$item->title}} @else {{$item->name}} @endif <a href="#collapse{{$item->id}}" class="pull-right" data-toggle="collapse"><i class="caret"></i></a></span>
	    <div class="collapse" id="collapse{{$item->id}}">
	      <div class="input-box">
	        <form method="post" action="{{url('admin/update-menuitem')}}/{{$item->id}}">
			  {{csrf_field()}}
			  <div class="form-group">
				<label>Başlıq</label>
				<input type="text" name="name" value="@if(empty($item->name)) {{$item->title}} @else {{$item->name}} @endif" class="form-control">
			  </div>
			  @if($item->type == 'custom')
				<div class="form-group">
				  <label>Keçid linki</label>
				  <input type="text" name="slug" value="{{$item->slug}}" class="form-control">
				</div>					
				<div class="form-group">
				  <input type="checkbox" name="target" value="_blank" @if($item->target == '_blank') checked @endif> Yeni səhifədə açılsın
				</div>
			  @endif
			  <div class="form-group">
				<button class="btn btn-sm btn-primary">Yadda saxla</button>
				<a href="{{url('admin/delete-menuitem')}}/{{$item->id}}/{{$key}}" class="btn btn-sm btn-danger">Sil</a>
			  </div>
			</form>
		  </div>
		</div>
	    <ul>
		  @if(isset($item->children))
		    @foreach($item->children as $m)
		  	  @foreach($m as $in=>$data)
			    <li data-id="{{$data->id}}" class="menu-item"> <span class="menu-item-bar"><i class="fa fa-arrows"></i> @if(empty($data->name)) {{$data->title}} @else {{$data->name}} @endif <a href="#collapse{{$data->id}}" class="pull-right" data-toggle="collapse"><i class="caret"></i></a></span>
			      <div class="collapse" id="collapse{{$data->id}}">
			        <div class="input-box">
			          <form method="post" action="{{url('admin/update-menuitem')}}/{{$data->id}}">
					    {{csrf_field()}}
					    <div class="form-group">
						  <label>Link Name</label>
						  <input type="text" name="name" value="@if(empty($data->name)) {{$data->title}} @else {{$data->name}} @endif" class="form-control">
					    </div>
					    @if($data->type == 'custom')
						  <div class="form-group">
						    <label>Keçid linki</label>
						    <input type="text" name="slug" value="{{$data->slug}}" class="form-control">
						  </div>					
						  <div class="form-group">
						    <input type="checkbox" name="target" value="_blank" @if($data->target == '_blank') checked @endif> Yeni səhifədə açılsın
						  </div>
					    @endif
					    <div class="form-group">
						  <button class="btn btn-sm btn-primary">Yadda saxla</button>
						  <a href="{{url('admin/delete-menuitem')}}/{{$data->id}}/{{$key}}/{{$in}}" class="btn btn-sm btn-danger">Sil</a>
					    </div>
					  </form>
				    </div>
				  </div>
			      <ul></ul>
		        </li>
		      @endforeach
	        @endforeach	
	      @endif	
        </ul>
      </li>
    @endforeach
  @endif
</ul>	
		  @endif	
		</div>	
	  @if($desiredMenu != '')
		<div class="form-group menulocation" style="display:none">
		  <p><label><input type="radio"  name="location" value="1" @if($desiredMenu->location == 1) checked @endif> Header</label></p>
		  <p><label><input type="radio"  name="location" value="2" @if($desiredMenu->location == 2) checked @endif> Main Navigation</label></p>
		</div>									
		<div class="text-right">
		  <button class="btn btn-sm btn-primary" id="saveMenu">Yadda saxla</button>
		</div>
	  @endif										
	</div>
  @endif	
</div>	
  </div>
</div>
<div id="serialize_output" style="display:none;">@if($desiredMenu){{$desiredMenu->content}}@endif</div>	
@if($desiredMenu)
<script>
$('#add-categories').click(function(){
  var menuid = <?=$desiredMenu->id?>;
  var n = $('input[name="select-category[]"]:checked').length;
  var array = $('input[name="select-category[]"]:checked');
  var ids = [];
  for(i=0;i<n;i++){
    ids[i] =  array.eq(i).val();
  }
  if(ids.length == 0){
	return false;
  }
  $.ajax({
	type:"get",
	data: {menuid:menuid,ids:ids},
	url: "{{url('admin/add-categories-to-menu')}}",				
	success:function(res){				
      location.reload();
	}
  })
})
$('#add-posts').click(function(){
  var menuid = <?=$desiredMenu->id?>;
  var n = $('input[name="select-post[]"]:checked').length;
  var array = $('input[name="select-post[]"]:checked');
  var ids = [];
  for(i=0;i<n;i++){
	ids[i] =  array.eq(i).val();
  }
  if(ids.length == 0){
	return false;
  }
  $.ajax({
	type:"get",
	data: {menuid:menuid,ids:ids},
	url: "{{url('admin/add-post-to-menu')}}",				
	success:function(res){
  	  location.reload();
	}
  })
})
$("#add-custom-link").click(function(){
  var menuid = <?=$desiredMenu->id?>;
  var url = $('#url').val();
  var link = $('#linktext').val();
  if(url.length > 0 && link.length > 0){
	$.ajax({
	  type:"get",
	  data: {menuid:menuid,url:url,link:link},
	  url: "{{url('admin/add-custom-link')}}",				
	  success:function(res){
	    location.reload();
	  }
	})
  }
})
</script>
<script>
var group = $("#menuitems").sortable({
  group: 'serialization',
  onDrop: function ($item, container, _super) {
    var data = group.sortable("serialize").get();	    
    var jsonString = JSON.stringify(data, null, ' ');
    $('#serialize_output').text(jsonString);
  	  _super($item, container);
  }
});
</script>	
<script>
$('#saveMenu').click(function(){
  var menuid = <?=$desiredMenu->id?>;
  var location = $('input[name="location"]:checked').val();
  var newText = $("#serialize_output").text();
  var data = JSON.parse($("#serialize_output").text());	
  $.ajax({
    type:"get",
	data: {menuid:menuid,data:data,location:location},
	url: "{{url('admin/update-menu')}}",				
	success:function(res){
	  window.location.reload();
	}
  })	
})
</script>
@endif		
<style>
  .item-list,.info-box{background: #fff;padding: 10px;}
  .item-list-body{max-height: 300px;overflow-y: scroll;}
  .panel-body p{margin-bottom: 5px;}
  .info-box{margin-bottom: 15px;}
  .item-list-footer{padding-top: 10px;}
  .panel-heading a{display: block;}
  .form-inline{display: inline;}
  .form-inline select{padding: 4px 10px;}
  .btn-menu-select{padding: 4px 10px}
  .disabled{pointer-events: none; opacity: 0.7;}
  .menu-item-bar{background: #eee;padding: 5px 10px;border:1px solid #d7d7d7;margin-bottom: 5px; width: 75%; cursor: move;display: block;}
  #serialize_output{display: block;}
  .menulocation label{font-weight: normal;display: block;}
  body.dragging, body.dragging * {cursor: move !important;}
  .dragged {position: absolute;z-index: 1;}
  ol.example li.placeholder {position: relative;}
  ol.example li.placeholder:before {position: absolute;}
  #menuitem{list-style: none;}
  #menuitem ul{list-style: none;}
  .input-box{width:75%;background:#fff;padding: 10px;box-sizing: border-box;margin-bottom: 5px;}
  .input-box .form-control{width: 50%}
</style>	   
</div>


@endsection