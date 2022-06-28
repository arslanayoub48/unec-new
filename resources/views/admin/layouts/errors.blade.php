@foreach(['danger', 'warning', 'success', 'info'] as $msg )
    @if(Session::has('alert_' . $msg))
        <div class="row">
            <div class="col-lg-12">
                <div class="alert alert-{{$msg}} alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <h4> 
                        @if($msg == 'danger') <i class="icon fa fa-ban"></i> @endif
                        @if($msg == 'warning') <i class="icon fa fa-warning"></i> @endif
                        @if($msg == 'success') <i class="icon fa fa-check"></i> @endif
                        @if($msg == 'info') <i class="icon fa fa-info"></i> @endif
                        {{ Session::get('alert_' . $msg) }}
                    </h4>            
                </div>
            </div>
        </div>
    @endif
@endforeach