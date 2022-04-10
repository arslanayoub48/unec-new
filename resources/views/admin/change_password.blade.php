
@extends('admin.layouts.app')

@section("content")

 <!-- page content -->
 <div class="right_col" role="main">
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>Şifrəni dəyiş</h3>

              </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">
              
                  <div class="x_content">

                    <form class="form-horizontal form-label-left"  method="post" action="/change_password" novalidate >
                      @csrf
                      @include('partials.formerrors')
                      </p>

                      <div class="item form-group">
                       <label class="control-label col-md-3 col-sm-3 col-xs-12" for="old_password">Hazırki şifrə <span class="required">*</span> 
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="old_password" class="form-control col-md-7 col-xs-12"  name="current_password"  placeholder="Hazırki şifrəni daxil edin"  type="password" required>
                        </div>
                      </div>
                      <div class="item form-group">
                       <label class="control-label col-md-3 col-sm-3 col-xs-12" for="new_password">Yeni şifrə <span class="required">*</span> 
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="new_password" class="form-control col-md-7 col-xs-12"  name="new_password"  placeholder="Yeni şifrəni daxil edin"  type="password" required>
                        </div>
                      </div>
                      <div class="item form-group">
                       <label class="control-label col-md-3 col-sm-3 col-xs-12" for="new_password_repeat">Yeni şifrənin təkrarı <span class="required">*</span> 
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="new_password_repeat" class="form-control col-md-7 col-xs-12"  name="new_confirm_password"  placeholder="Yeni şifrəni təkrar daxil edin"  type="password" required>
                        </div>
                      </div>
                      

                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <button id="send" type="submit" class="btn btn-success">Yadda saxla</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->

@endsection