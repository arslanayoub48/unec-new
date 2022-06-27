

@extends('admin.layouts.app')



@section('custom_css')

@endsection


@section('content')
    <!-- page content -->
    <div class="right_col" role="main">
        <div class="">
            <div class="page-title">
                <div class="title_left">
                    <h3>Yeni başlıq əlavə edin{{-- title --}}</h3>
                    <p>{{-- Subtitle --}}</p>
                </div>
                <div class="title_right">
                    <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                        {{-- <a class="btn btn-success" href="">
                            <i class=""></i>                            
                        </a>                         --}}
                    </div>
                </div>
            </div>
        </div>                
        <div class="col-md-12 col-sm-12 col-xs-12">         
            <div class="x_content">
                <form action="{{ $route }}" method="POST" class="form-horizontal" enctype="multipart/form-data">
                    @csrf
                    @if($method == 'edit')
                        @method('PUT')
                    @endif                    
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Title</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title', $title? $title->title: '') }}"  placeholder="title">
                            @error('title')
                                <span class="invalid-feedback text-danger" role="alert">
                                    <strong>{{ $errors->first('title') }}</strong>
                                </span>
                            @enderror                                                        
                        </div>
                    </div> 
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Description</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <textarea class="form-control @error('description') is-invalid @enderror" name="description"  placeholder="description">{{ old('description', $title? $title->description: '') }}</textarea>
                            @error('description')
                                <span class="invalid-feedback text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror                                                        
                        </div>
                    </div>  
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Image</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="file" class="form-control @error('image') is-invalid @enderror" name="image">
                            @error('image')
                                <span class="invalid-feedback text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror                                                        
                        </div>
                    </div> 
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Name</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text"  class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name', $title? $title->name: '') }}">
                            @error('name') 
                                <span class="invalid-feedback text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror                                                        
                        </div>
                    </div>
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Surname</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text"  class="form-control @error('surename') is-invalid @enderror" name="surename"  value="{{ old('surename', $title? $title->surename: '') }}">
                            @error('surename')
                                <span class="invalid-feedback text-danger" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror                                                        
                        </div>
                    </div>
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right">Title Side</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <select class="form-control" name="side">
                                <option value="left" {{ $title && $title->side == 'left' ? 'selected' : ''  }}>Left Panel</option>
                                <option value="right" {{ $title && $title->side == 'right' ? 'selected' : ''  }}>Right Panel</option>
                            </select>                                                                                    
                        </div>
                    </div>
                    <div class="form-group row">                        
                        <label for="" class="col-sm-3 col-xs-12 text-right"></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <button type="submit" class="btn btn-primary">Save</button>                                                                                                                                        
                        </div>
                    </div>      
                </form>            
            </div>            
        </div>
    </div>

@endsection

@section('custom_js')

@endsection
