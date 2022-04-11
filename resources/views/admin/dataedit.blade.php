
@extends('admin.layouts.app')

@section("content")
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 <!-- page content -->
 <style>
   .bootstrap-select{
     width: 100% !important;
   }
   .block{
      margin-top: 5px;
      padding: 10px;
      border: solid 1px;
      overflow:hidden;
   }
   .multicontent{
      min-height: 200px;
      background-color: #efecec;
      padding: 20px;
     
   }
   .fields{
     margin:20px;
   }
   .block-for-clone{
     display: none;
   }
   
.drop {
  width: 96%;
  height: 96%;
  border: 3px dashed #DADFE3;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  background: white;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /*&:hover
  * cursor: pointer
  * background: #f5f5f5*/
}
.drop .cont {
  width: 500px;
  height: 170px;
  color: #8E99A5;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.drop .cont i {
  font-size: 400%;
  color: #8E99A5;
  position: relative;
}
.drop .cont .tit {
  font-size: 400%;
  text-transform: uppercase;
}
.drop .cont .desc {
  color: #A4AEBB;
}
.drop .cont .browse {
  margin: 10px 25%;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  background: #09f;
}
.drop input {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: red;
  opacity: 0;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#list {
  width: 100%;
  text-align: left;
  position: absolute;
  left: 0;
  top: 0;
}
#list .thumb {
  height: 75px;
  border: 1px solid #323a44;
  margin: 10px 5px 0 0;
}
 </style>
 <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>{{$params["title"]}}</h3>

              </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">
              
                  <div class="x_content">

                    <form class="form-horizontal form-label-left"  method="post" action="/dataPageAction" novalidate enctype="multipart/form-data" id="mainform">
                      @csrf
                      <input type="hidden" name="action" value="{{$action}}">
                      @if(isset($id))
                        <input type="hidden" name="id" value="{{$id}}">
                      @endif
                      @include('partials.formerrors')
                      <p>{{$params["description"]}}</a>
                      </p>

                      @foreach($params["editcols"] as $col)
                      <div class="item form-group item-{{$col["name"]}}" @if(isset($col["visible"]) && $col["visible"] == false)  style="display:none" @endif >
                       @if($col['type'] != 'hidden')
                       <label class="control-label col-md-3 col-sm-3 col-xs-12" for="{{$col['name']}}">{{$col["text"]}} @if($col["required"]) <span class="required">*</span> @endif
                        </label>
                       @endif
                        <div class="col-md-6 col-sm-6 col-xs-12">
                        @if($col["type"] == "text")
                          <input id="{{$col['name']}}" class="form-control col-md-7 col-xs-12" name="{{$col['name']}}" value="{{$col['value']}}" placeholder="{{$col['placeholder']}}"  type="text" @if($col['required']) required="required" @endif>
                          @endif 
                          @if($col["type"] == "date")
                          <input id="{{$col['name']}}" class="form-control col-md-7 col-xs-12" name="{{$col['name']}}" value="{{$col['value']}}" placeholder="{{$col['placeholder']}}"  type="date" @if($col['required']) required="required" @endif>
                          @endif
                          @if($col["type"] == "image")
                          <input id="{{$col['name']}}" class="form-control col-md-7 col-xs-12"  name="{{$col['name']}}"  placeholder="{{$col['placeholder']}}"  type="file" @if($col['required']) required="required" @endif>
                          @endif
                          @if($col["type"] == "color")
                          <input type="color" name="{{$col['name']}}" value='{{$col['value']}}' id="{{$col['name']}}"  @if($col['required']) required="required" @endif>
                          @endif
                          @if($col["type"] == "select")
                            
                             <select name="{{$col['name']}}" id="{{$col['name']}}" class="form-control col-md-6 col-xs-12" @if($col['required']) required="required" @endif>
                             @if(!$col['required']) <option value='0'>Mövcud deyil</option> @endif
                               @foreach($col["selectdata"] as $value)
                                  @if(isset($col["exceptMe"]) && $col["exceptMe"] == true && isset($id)  && $value["id"] == $id) @continue @endif
                                      <option value="{{isset($col['selectsavecol']) ? $value[$col['selectsavecol']] :$value['id']}}" @if((isset($col['selectsavecol']) ? $value[$col['selectsavecol']] :$value['id']) == $col['value']) selected @endif>{{$value[$col['selectdatacol']]}}</option>
                                  @endforeach
                             </select>
                          @endif
                          @if($col["type"] == "jsselect")
                            
                             <select name="{{$col['name']}}" id="{{$col['name']}}"  onchange="JsSelect(this.value)" class="form-control col-md-6 col-xs-12" @if($col['required']) required="required" @endif>
                             @if(!$col['required']) <option value='0'>Mövcud deyil</option> @endif
                               @foreach($col["selectdata"] as $value)
                                      <option value="{{$value['show']}}" @if($value['id'] == $col['value']) selected @endif>{{$value[$col['selectdatacol']]}}</option>
                                  @endforeach
                             </select>
                          @endif
                          @if($col["type"] == "hidden")
                             <input type="hidden" name="{{$col['name']}}" value="{{$col['value']}}">
                          @endif
                          @if($col["type"] == "checkbox")
                             <input type="checkbox" style="margin-top:8px;" id="{{$col['name']}}" name="{{$col['name']}}" value="{{$col['value']}}"> {{$col["text"]}}
                          @endif
                          @if($col["type"] == "ckeditor")
                          <input name="{{$col['name']}}" type="textarea" id="{{$col['name']}}"> 
                          <script>
                             var editor = CKEDITOR.replace( '{{$col['name']}}', {});
                                editor.setData(`<?php echo $col['value']; ?>`);

                          </script>
                          @endif
                          @if($col["type"] == "multiselect")
                          <select name="{{$col['name']}}[]"   id="{{$col['name']}}" class="selectpicker" multiple data-live-search="true" style="width: 100%">
                                @if(!$col['required']) <option value='0'>Mövcud deyil</option> @endif
                                    @foreach($col["selectdata"] as $value)
                                            <option value="{{isset($col['selectsavecol']) ? $value[$col['selectsavecol']] :$value['id']}}" @if(is_array(json_decode($col['value'],true)) && in_array($value['id'], json_decode($col['value'],true))) selected @endif>{{$value[$col['selectdatacol']]}}</option>
                                        @endforeach
                          </select>
                          @endif
                          @if($col["type"] == "multifiles")
                          <div class="wrapper" style="height: 540px">
                            <div class="drop">
                              <div class="cont">
                                <i class="fa fa-cloud-upload"></i>
                                <div class="tit">
                                  Drag & Drop
                                </div>
                                <div class="desc">
                                  Şəkilləri üzərnə gətirərək yüklə
                                </div>
                                <div class="browse">
                                  və ya üzərinə klikləyərək seç
                                </div>
                              </div>
                              <output id="list" style="z-index:1000; cursor:pointer;">
                              <input type="hidden" name="images_remove" id="images_remove">
                                  <?php $slider = isset($col['value'])? $col['value']: "[]"; $slider=json_decode($slider); ?>

                                 @if(is_array($slider))
                                  @foreach($slider as $s)
                                        <span><img class="thumb image_{{$s}}" onclick="removeImage('{{$s}}')" src="/image/{{$s}}"></span>
                                    @endforeach
                                 @endif

                              </output><input id="files"  name="{{$col['name']}}[]" type="file" multiple/>
                            </div>
                          </div>
                          @endif
                          @if($col["type"] == "multicontent")
                              <div class="multicontent multicontent_{{$col['name']}}">
                                    <button class="btn btn-info" type="button" onclick="plus('{{$col['name']}}')">Əlavə et <i class="fa fa-plus"></i></button>
                                  <div class="block block-for-clone content_block_id" style="height: 40px;">
                                    <span class="text-left">Content</span>
                                    <span class="text-right" style="float:right;"><i  style=" margin-right:10px; color:gray;cursor:pointer;" class="fa fa-arrow-down content_arrow_id" ></i><i class="fa fa-plus" onclick="plus()" style="color:green;cursor:pointer;"></i><i  style=" margin-left:10px; color:red;cursor:pointer;" class="fa fa-trash" onclick="remove('content_block_id')"></i></span>
                                    <div class="fields">
                                          @foreach($col["fields"] as $field)
                                              @if($field["type"] == "text")
                                                <div class="form-group">
                                                    <label for="">Tarix</label>
                                                    <input name="{{$field['name']}}[]" type="text" class="form-control dynamic">
                                                </div>
                                              @endif

                                              @if($field["type"] == "ckeditor")
                                              <div class="form-group">
                                                  <label for="">Kontent</label>
                                                  <input name="{{$field['name']}}[]"  type="textarea" class="dynamic" id="field_id"> 
                                              </div>
                                              <script>  
                                                //var content_block_id = CKEDITOR.replace( 'field_id', {});
                                                //content_block_id.setData(`<?php echo $col['value']; ?>`);
                                                </script>
                                              @endif

                                          @endforeach

                                        
                                          
                                         
                                          <script>
                                            let content_id_toggle = false;
                                               
                                              $(".content_arrow_id").click(() => {
                                                if(content_id_toggle){
                                                  $(".content_block_id").css("height", "40px");
                                                  $(".content_arrow_id").removeClass("fa-arrow-up")
                                                  $(".content_arrow_id").addClass("fa-arrow-down");
                                                  content_id_toggle = false;
                                                }else{
                                                  $(".content_block_id").css("height", "100%");
                                                  content_id_toggle = true;
                                                  $(".content_arrow_id").removeClass("fa-arrow-down")
                                                  $(".content_arrow_id").addClass("fa-arrow-up");
                                                }
                                              })
                                          </script>
                                    </div>
                                  </div>
                                  <?php $i=1;?>
                                  @if(isset($col['values']))
                                  @foreach($col["values"] as $values)
                                  @if((count($col["values"])/count($col["fields"])) < $i)
                                        @continue
                                   @endif
                                  <?php $rand1 = "content_".rand(0,5000);$rand2 = "content_".rand(0,5000);$rand3 = "content_".rand(0,5000);$rand4= "content_".rand(0,5000);?>
                                  <div class="block {{$rand1}}" style="height: 40px;">
                                    <span class="text-left"><?=\App\Models\Rel::find($col['values'], $field["name"].'_'.$i);?></span>
                                    <span class="text-right" style="float:right;"><i  style=" margin-right:10px; color:gray;cursor:pointer;" class="fa fa-arrow-down {{$rand2}}" ></i><i class="fa fa-plus" onclick="plus()" style="color:green;cursor:pointer;"></i><i  style=" margin-left:10px; color:red;cursor:pointer;" class="fa fa-trash" onclick="remove('{{$rand1}}')"></i></span>
                                    <div class="fields">
                                          @foreach($col["fields"] as $field)
                                              @if($field["type"] == "text")
                                                <div class="form-group">
                                                    <label for="">Tarix</label>
                                                    <input name="{{$field['name']}}[]" type="text" value="<?=\App\Models\Rel::find($col['values'], $field["name"].'_'.$i);?>" class="form-control dynamic">
                                                </div>
                                              @endif

                                              @if($field["type"] == "ckeditor")
                                              <div class="form-group">
                                                  <label for="">Kontent</label>
                                                  <input name="{{$field['name']}}[]"  type="textarea" class="dynamic" id="{{$rand3}}"> 
                                              </div>
                                              <script>  
                                                var content_block_id = CKEDITOR.replace( '{{$rand3}}', {});
                                                content_block_id.setData(`<?=\App\Models\Rel::find($col['values'], $field["name"].'_'.$i);?>`);
                                                </script>
                                              @endif
                                              @endforeach
                                              <?php $i++; ?>

                                        
                                          
                                         
                                          <script>
                                            let content_{{$rand4}} = false;
                                               
                                              $(".{{$rand2}}").click(() => {
                                                if(content_{{$rand4}}){
                                                  $(".{{$rand1}}").css("height", "40px");
                                                  $(".{{$rand2}}").removeClass("fa-arrow-up")
                                                  $(".{{$rand2}}").addClass("fa-arrow-down");
                                                  content_{{$rand4}} = false;
                                                }else{
                                                  $(".{{$rand1}}").css("height", "100%");
                                                  content_{{$rand4}} = true;
                                                  $(".{{$rand2}}").removeClass("fa-arrow-down")
                                                  $(".{{$rand2}}").addClass("fa-arrow-up");
                                                }
                                              })
                                          </script>
                                    </div>
                                  </div>
                                  @endforeach
                                  @endif
                              </div>
                          @endif
                        </div>
                      </div>
                      

                      @endforeach
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <button id="send" type="button" onclick="SubmitMainForm()" class="btn btn-success">Yadda saxla</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          function remove(id){
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    $("."+id).remove();
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                });
          }
          function plus(id){
            let maxrandom = 5000;
            let html = $(".multicontent_"+id+" .block-for-clone").html();
            let field_id = Math.floor(Math.random() * maxrandom);
            let content_id = Math.floor(Math.random() * maxrandom);
            let content_block_id = Math.floor(Math.random() * maxrandom);
            let content_arrow_id = Math.floor(Math.random() * maxrandom);
            let content_id_toggle = Math.floor(Math.random() * maxrandom);
            let fields_count = document.querySelectorAll('.multicontent_'+id+' .block-for-clone .dynamic').length
            for(let i = 0; i<fields_count; i++){
              let name = document.querySelectorAll('.multicontent_'+id+' .block-for-clone .dynamic')[i].getAttribute("name")
              let random = Math.floor(Math.random() * maxrandom);
              let newname = name+"_"+random;
              html = html.replace(name, newname);
            }

            // field_id
            // content_id_toggle
            // content_block_id
            // content_arrow_id
            html = html.replaceAll("field_id", "content_"+field_id)
            html = html.replaceAll("content_id_toggle", "content_"+content_id_toggle)
            html = html.replaceAll("content_arrow_id", "content_"+content_arrow_id)
            html = html.replaceAll("content_block_id", "content_"+content_block_id)
            html = html.replaceAll("content_id", "content_"+content_id)
            html = html.replaceAll("//", "")

            $(".multicontent_"+id).append(' <div class="block  content_'+content_block_id+'" style="height: 40px;">'+html+'</div>');
          }

           @foreach($params["editcols"] as $col)
              @if($col["type"] == "ckeditor" && $col["value"] != "")
                $(".item-{{$col['name']}} .ck-content").html('{{$col['value']}}');
              @endif
            @endforeach
          function SubmitMainForm(){
            
            let fields_count = document.querySelectorAll('.block:not(.block-for-clone) .dynamic[type=textarea]').length
            for(let i = 0; i<fields_count; i++){
              let name = document.querySelectorAll('.block:not(.block-for-clone) .dynamic[type=textarea]')[i].getAttribute("id")
              let name2 = CKEDITOR.instances[name].getData();
              $("#"+name).val(name2);
            }
            @foreach($params["editcols"] as $col)
              @if($col["type"] == "ckeditor")
                let {{$col["name"]}} = CKEDITOR.instances['{{$col["name"]}}'].getData();
                $("#{{$col['name']}}").val({{$col["name"]}});
              @endif
            @endforeach
            
            $("#mainform").submit();
          }
         
          function JsSelect(value){
            @foreach($params["editcols"] as $col)
              @if(isset($col["visible"]) && $col["visible"] == false)
                document.querySelector(".item-{{$col['name']}}").style.display = "none";
              @endif
            @endforeach
           document.querySelector(".item-"+value).style.display = "block";
          }
        </script>
        <!-- /page content -->
 
@endsection