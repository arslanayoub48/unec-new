@foreach($filter as $event)
    <a href="/event/'.$event->slug.'">
        <div >
            <h3>{{ $event->title }}</h3><br>
            <div class="badget" style="
                position: absolute;
                left: -100px;
                top: 20px;
                text-align: center;
            ">
                    <p style="
                font-size: 58px;
                color: #07294e;
                ">{{ date("d", strtotime($event->start_at)) }}</p>
                    <p style=" font-size: 20px;">{{ \App\Models\TimeDate::MonthToAz(date("M", strtotime($event->start_at))) }}</p>

                </div>
                    {{$event->info}}
        </div>

    </a>
        <br><br>

@endforeach