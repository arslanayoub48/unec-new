@extends('admin.layouts.app')


@section('custom_css')
<style>

.action-button .dropdown-menu li {
    padding: 5px;
}

.action-button .dropdown-menu li  a {
    color: white;
    min-width: 64px;
}

.action-button .dropdown-menu li  a, .action-button .dropdown-menu li  button {
    display: inline-block;
    padding: 5px;
}

.action-button .dropdown-menu li  a:hover {
    color: white;
    background-color: #5bc0de;
    border: 1px solid #5bc0de;
}

.img-lg .img {
    max-width:200px;
    max-height: 200px;
    overflow: hidden;
}

</style>

@endsection
@section('content')

    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>
                        @if( $languages )
                            @foreach($languages as $lang)
                                <a class="language_links @if( $current_lang == $lang->slug) language_links_active @endif" href="?lang={{$lang->slug}}">{{$lang->name}}</a>
                            @endforeach
                        @endif
                    </h3>
                </div>
                <div class="title_right">
                    <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                        <a class="btn btn-success" href="{{ route('titles.create') }}">Yeni əlavə et</a>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>

        <div id="section_alert">                
            @include('admin.layouts.errors')
        </div>

        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="x_panel">
                <div class="x_content">
                    <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap"
                    cellspacing="0" width="100%" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th style="max-width: 300px;">Description</th>
                                <th>Name</th>
                                <th>SureName</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if( $titles->count() )
                                @php( $i = 1 )
                                @foreach( $titles as $title )                                
                                 <tr>
                                    <td>{{ $i }}</td>
                                    <td>
                                        @if( $title->image)
                                        <div class="img-lg"><img class="img " src="{{ asset('storage/images/' . $title->image ) }}"/></div>
                                        @endif
                                    </td>
                                    <td style="max-width: 300px;">{{ $title->description }}</td>
                                    <td>{{ $title->title }}</td>
                                    <td>{{ $title->name }}</td>
                                    <td>{{ $title->surename }}</td>                                    
                                    <td>
                                        <div class="btn-group action-button">
                                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              Action <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu">
                                              <li class="text-center">
                                                <a  class="btn btn-info" href="{{ route('titles.edit', $title->id) }}">Edit</a>                                                
                                              <li  class="text-center">
                                                <form action="{{ route('titles.destroy', $title->id) }}" method="POST">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button class="btn btn-info" type="submit">Remove</button>
                                                </form>                                                                                      
                                            </ul>
                                          </div>
                                    </td>
                                 </tr>
                                 @php( $i++ )
                                @endforeach                            
                            @endif
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>
    </div>

@endsection

@section('custom_js')

<script>

</script>

@endsection
