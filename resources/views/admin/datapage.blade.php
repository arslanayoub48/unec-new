
@extends('admin.layouts.app')

@section("content")
  <!-- page content -->
        <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>{{$params["title"]}}
                @if(isset($params["translate"]) && $params["translate"])
                  @foreach(\App\Models\Wlang::all() as $lang)
                      <a  class="language_links @if(\App\Models\Wlang::getCurrent() == $lang->slug) language_links_active @endif" href="?lang={{$lang->slug}}">{{$lang->name}}</a>
                    @endforeach

                @endif
                </h3>
              </div>
              <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    @if(isset($params["actions"]))
                    @foreach($params["actions"] as $action )
                        @if(!isset($action["position"]) || $action["position"] != "top") 
                          @continue
                        @endif
                        <a  class="btn btn-success" href="{{$action['link']}}">
                                  <i class="{{$action['icon']}}"></i>
                                  {{$action["text"]}}
                              </a>
                      
                      @endforeach
                  </ul>
                    @endif
                </div>
              </div>

              </div>
            </div>

            <div class="clearfix"></div>
           @if(isset($params["account"]))
           <!-- top tiles -->
           <div class="row tile_count">
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-clock-o"></i> Ümumi gəlir</span>
              <div class="count">{{$accounts->sum("total")}} ₼</div>
            </div>
          <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-clock-o"></i> Personal</span>
              <div class="count">{{$accounts->sum("personal")}} ₼</div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-user"></i> Rasxod</span>
              <div class="count green">{{$accounts->sum("expenses")}} ₼</div>
            </div>
            
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-user"></i> Ümumi xərclər</span>
              <div class="count green">{{floatval($accounts->sum("personal") + $accounts->sum("expenses"))}} ₼</div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-user"></i> Ümumi sifarişlər</span>
              <div class="count">{{$accounts->sum("orders")}}</div>
            </div>
            
           
            <div class="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span class="count_top"><i class="fa fa-user"></i> Mənfəət</span>
              <div class="count">{{floatval($accounts->sum("total")) - (floatval($accounts->sum("personal") + $accounts->sum("expenses")))}} ₼</div>
            </div>
         
            
          </div>
          <!-- /top tiles -->

           @endif
            <div class="row">
              @if(isset($params["filter"]) && $params["filter"] == true)
              <div class="well" style="overflow: auto">
                      <div class="col-md-4">
                        Tarix filteri
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="control-group">
                              <div class="controls">
                                <div class="input-prepend input-group">
                                  <span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>
                                  <input type="text" style="width: 200px" name="reservation" id="reservation" class="form-control" value="" >
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>

                    </div>
                    </div>

              @endif

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                
                  <div class="x_content">
                    <p class="text-muted font-13 m-b-30">
                      {{$params["description"]}}
                    </p>
					
                    <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          @foreach($params["cols"] as $col)
                                <td>{{$col}}</td>
                          @endforeach
                         
                          @if(isset($params["actions"]) && $params["noaction"] == false)
                                <td>Actions</td>
                          @endif
                        </tr>
                      </thead>
                      <tbody>
                        @foreach($params["data"] as $data)
                            <tr style="height: 100px;">
                                @for($i=0;$i<count($data); $i++)
                                  @if(isset($params["imagecol"]) && $params["imagecol"] == $i)
                                    <td><img src="/image/{{$data[$i]}}" style="width: 150px;" /></td>
                                  @else
                                    <td>{{$data[$i]}}</td>
                                  @endif
                                @endfor
                                @if(isset($params["actions"]) && $params["noaction"] == false)
                                    
                                    <td>
                                    <div class="btn-group">
                                            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" aria-expanded="false">Action <span class="caret"></span>
                                            </button>
                                            <ul role="menu" class="dropdown-menu">
                                                @foreach($params["actions"] as $action)
                                                  @if(isset($action["position"]) && $action["position"] == "top") 
                                                    @continue
                                                  @endif
                                                    <li>
                                                      @if(!strpos($action['link'], "remove"))
                                                      <a @if(isset($action["newtab"]) && $action["newtab"]) target="_blank" @endif href="{{$action['link']}}&id={{$data[0]}}">
                                                          <i class="{{$action['icon']}}"></i>
                                                          {{$action["text"]}}
                                                      </a>
                                                      @else
                                                      <a href="#" onclick="removeElement('{{$action['link']}}&id={{$data[0]}}')">
                                                          <i class="{{$action['icon']}}"></i>
                                                          {{$action["text"]}}
                                                      </a>
                                                     @endif
                                                    </li>
                                                
                                                @endforeach
                                                @if(isset($params["translate"]) && $params["translate"])
                                                  @foreach(\App\Models\Wlang::need($params,$data) as $need)
                                                    <li>
                                                        <a href="/dataPageAction?action=translate&id={{$data[0]}}&lang={{$need}}">
                                                            <i class="fa fa-language"></i>
                                                            Tərcümə {{\App\Models\Wlang::getName($need)}}
                                                        </a>
                                                      </li>
                                                  @endforeach
                                                @endif
                                            </ul>
                                        </div>
                                 
                                    </td>
                                @endif
                            </tr>
                        @endforeach
                      </tbody>
                    </table>
					
					
                  </div>
                  </div>
                  </div>
                  </div>

              <script>
                 setTimeout(() => {
                  $("#reservation").attr("onchange", "DateFilter(this.value)")
                 }, 300);
                  function doAction(id, action,func){
                      if(action == "remove"){
                          $.post("/dataPageAction", {_token: '{{ csrf_token() }}', id, action})
                          window.location.reload();
                      }
                      if(action == "redirect"){
                          window.location.href = func+"&id=" + id;
                      }
                      
                      if(action == "custom"){
                          $.post("/dataPageAction", {_token: '{{ csrf_token() }}', id, action,cmd:func})
                          window.location.reload();
                      }
                      if(action == "create"){
                          window.location.href = "/dataPageAction&action=create";
                      }
                  }
                  function removeElement(url){
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
                          window.location.href = url;
                        }
                      });
      
                  }
                  function DateFilter(value){
                    var datearray = value.split('-');
                    var start_at = datearray[0];
                    var end_at = datearray[1];
                    start_at = start_at.replace(" ", "");
                    end_at = end_at.replace(" ", "");
                    window.location.href = '/dataPageAction?action=filter&start_at='+start_at+'&end_at='+end_at
                  }
              </script>

@endsection