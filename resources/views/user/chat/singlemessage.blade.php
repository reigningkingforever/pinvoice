<div class="card mb-3 mr-2 w-100 @if($message->user_id == Auth::id()) bg-light @else bg-dark text-white @endif">
    <div class="card-body" style="padding:0.75rem">
        <div class="@if($message->user_id == Auth::id()) float-right @else float-left @endif">
            @if($message->format == 'text')
            <p class="mb-0  @if($message->user_id == Auth::id()) text-semi-muted  @else text-white @endif" style="min-width:40px;">{{$message->body}}</p>
            @elseif($message->format == 'jpg' || $message->format == 'png' || $message->format == 'jpeg')
            <img src="{{asset('storage/chat/'.$message->body)}}" width="100px">
            @elseif($message->format == 'webm')
            <video width="280" height="240" controls>
                <source src="{{asset('storage/chat/'.$message->body)}}">
            </video>
            @elseif($message->format == 'mp3')
            <audio preload="metadata" controls style="width: 250px;">
                <source src="{{asset('storage/chat/'.$message->body)}}" type ="audio/mp3">
            </audio>
            @else
            <a href="{{asset('storage/chat/'.$message->body)}}" target="_blank">{{$message->body}}</a>
            @endif
            <div class="position-absolute pt-1 pr-2 r-0 tick text-extra-small text-muted" style="bottom: 1px;">
                12:45
                @if($message->user_id == Auth::id())
                    @if($message->status)
                    <span class="text-extra-small text-muted"><i class="fas fa-check-double"></i></span>
                    @else
                    <span class="text-extra-small text-muted"><i class="fa fa-check"></i></span>
                    @endif
                @endif
            </div>
        </div>
    </div>
</div>
