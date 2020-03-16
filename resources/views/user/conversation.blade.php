
<div class="card d-inline-block mb-3 @if($conversation->user_id == Auth::id()) float-right @else float-left @endif  mr-2" style="max-width:60%">
    <div class="position-absolute pt-1 pr-2 r-0">
        <span class="text-extra-small text-muted">09:28</span>
    </div>
    <div class="card-body">

        <div class="">
            @if($conversation->format == 'text')
            <p class="mb-0 text-semi-muted">{{$conversation->body}}</p>
            @elseif($conversation->format == 'jpg' || $conversation->format == 'png' || $conversation->format == 'jpeg')
            <img src="{{asset('storage/chat/'.$conversation->body)}}" width="100px">
            @else
            <a href="{{asset('storage/chat/'.$conversation->body)}}" target="_blank">{{$conversation->body}}</a>
            @endif
        </div>
    </div>
    @if($conversation->user_id == Auth::id())
        <div class="position-absolute pt-1 pr-2 r-0 tick">
            @if($conversation->status == 'sent')
            <span class="text-extra-small text-muted"><i class="fa fa-check"></i></span>
            @elseif($conversation->status == 'read')
            <span class="text-extra-small text-muted"><i class="fas fa-check-double"></i></span>
            @else
            @endif
        </div>
    @endif
</div>
<div class="clearfix"></div>

