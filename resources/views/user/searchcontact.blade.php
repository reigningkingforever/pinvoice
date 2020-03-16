@forelse($users as $user)
<div class="col-12 col-md-4 col-lg-3">
    <div class="card d-flex flex-row mb-4">
        <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
        <div class="d-flex flex-grow-1 min-width-zero">
            <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                <div class="min-width-zero">
                    <a href="#">
                        <p class="list-item-heading mb-1 truncate">{{$user->name}}</p>
                    </a>
                    <p class="mb-2 text-muted text-small">Art Director</p>
                    <button type="button" class="btn btn-xs btn-outline-primary addperson" id="{{$user->id}}person">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>

@empty
<div class="col-12 ">Could not find any one with that search parameter
</div>
@endforelse
