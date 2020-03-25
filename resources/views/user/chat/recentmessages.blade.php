<div class="p-4 h-100" id="recentmessages">
    <div class="form-group">
        <input type="text" class="form-control rounded" placeholder="Search">
    </div>
    <div class="tab-content" style="height:60%;">
        <div class="scroll">
            @forelse($recentMessages as $recent)
            <a href="#" class="recent" id="{{$recent->assetable_id}}-recent">
            <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                {{-- <a class="d-flex" href="#"> --}}
                    <img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                {{-- </a> --}}
                <div class="d-flex flex-grow-1 min-width-zero">
                    <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                        <div class="min-width-zero">
                            {{-- <a href="#"> --}}
                                <p class="mb-0 truncate">{{$recent->user->name}}</p>
                            {{-- </a> --}}
                            <p class="mb-1 text-muted text-small">{{date_format($recent->created_at,'d/m h:i')}}</p>
                        </div>
                    </div>
                </div>
            </div></a>
            @empty
                No recent messages
            @endforelse
            
        </div>
    </div>
</div>
