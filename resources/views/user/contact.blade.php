@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/video-js.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/baguetteBox.min.css')}}">
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Contact</h1>
                    <div class="text-zero top-right-button-container">
                        <button type="button" class="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACTIONS</button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                        </div>
                    </div>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="list-tab" data-toggle="tab" href="#list" role="tab" aria-controls="list" aria-selected="false">LIST</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="invite-tab" data-toggle="tab" href="#invitation" role="tab" aria-controls="invitation" aria-selected="false">INVITATIONS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="search-tab" data-toggle="tab" href="#search" role="tab" aria-controls="search" aria-selected="true">SEARCH</a>
                    </li>


                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="list" role="tabpanel" aria-labelledby="list-tab">
                        <div class="row">
                            @forelse ($people as $person)
                                <div class="col-12 col-md-6 col-lg-4" id="person-{{$person->person}}">
                                    <div class="card d-flex flex-row mb-4">
                                        <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-8.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                        <div class="d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                                <div class="min-width-zero">
                                                    <a href="#">
                                                        <p class="list-item-heading mb-1 truncate">{{$person->user->name}}</p>
                                                    </a>
                                                    <p class="mb-2 text-muted text-small">Head Developer</p>
                                                    <button type="button" class="btn btn-xs btn-outline-info blockcontact mr-2" id="{{$person->person}}-block">@if($person->status) Block @else Unblock @endif</button>
                                                    <button type="button" class="btn btn-xs btn-outline-danger removecontact" id="{{$person->person}}-remove">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @empty
                            <div class="col-12">You do not have anyone in your contact yet</div>
                            @endforelse

                            {{-- <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Kathryn Mengel</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Art Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Laree Munsch</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Lead Programmer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Esperanza Lodge</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-5.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Mimi Carreira</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Photographer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-6.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Rasheeda Vaquera</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Account</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-7.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Sarah Kortney</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Executive Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-8.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Kathryn Mengel</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Chief Designer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-9.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Philip Nelms</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">...</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-10.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Velva Valdovinos</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Developer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> --}}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="invitation" role="tabpanel" aria-labelledby="invite-tab">
                        <div class="row">
                            <div class="col-12 col-lg-6 col-left">
                                <div class="card mb-4">
                                    <div class="position-absolute card-top-buttons">
                                        <button class="btn btn-outline-white icon-button"><i class="simple-icon-pencil"></i></button>
                                    </div><img src="img/profile-pic.jpg" alt="Detail Picture" class="card-img-top">
                                    <div class="card-body">
                                        <p class="text-muted text-small mb-2">About</p>
                                        <p class="mb-3">{{Auth::user()->about ?? ''}}</p>
                                        <p class="text-muted text-small mb-2">Location</p>
                                        <p class="mb-3">{{Auth::user()->place}}</p>
                                        <p class="text-muted text-small mb-2">Responsibilities</p>
                                        <p class="mb-3"><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">FRONTEND</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">JAVASCRIPT</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">SECURITY</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">DESIGN</span></a></p>
                                        <p class="text-muted text-small mb-2">Share</p>
                                        <div class="social-icons">
                                            <ul class="list-unstyled list-inline">
                                                <li class="list-inline-item"><a href="#"><i class="simple-icon-social-facebook"></i></a></li>
                                                <li class="list-inline-item"><a href="#"><i class="simple-icon-social-twitter"></i></a></li>
                                                <li class="list-inline-item"><a href="#"><i class="simple-icon-social-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="card mb-4 d-lg-block">
                                    <div class="card-body">
                                        <h5 class="card-title">Contact Invitations</h5>
                                            @forelse ($invitations as $invitation)
                                                <div class="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">
                                                    <a href="#">
                                                        <img src="img/profile-pic-l-2.jpg" alt="Philip Nelms" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall">
                                                    </a>
                                                    <div class="pl-3 flex-fill">
                                                        <a href="#">
                                                            <p class="font-weight-medium mb-0">{{$invitation->sender->name}}</p>
                                                            <p class="text-muted mb-0 text-small">received {{$invitation->created_at->diffForHumans()}}</p>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <button class="btn btn-outline-primary btn-xs inviteAccept" id="{{$invitation->sender_id}}-accept">ACCEPT</button>
                                                        <button class="btn btn-outline-danger btn-xs inviteReject" id="{{$invitation->sender_id}}-reject">REJECT</button>
                                                    </div>
                                                </div>
                                            @empty
                                                <div class="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">

                                                    <div class="text-center">
                                                        <p>You have no peneding invitation</p>
                                                    </div>
                                                </div>
                                            @endforelse


                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">
                        <div class="row">
                            <div class="col-12 col-md-6 mb-5">
                                <div class="input-group">
                                    <input name="contactperson" type="text" class="form-control" placeholder="Search by email, mobile number or name">
                                    <div class="input-group-append">
                                        <button class="btn btn-secondary" type="button" id="searchcontact">
                                            <span class="d-inline-block">Search</span>
                                            <i class="simple-icon-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="searchresult">
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Kathryn Mengel</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Art Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Laree Munsch</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Lead Programmer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Esperanza Lodge</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-5.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Mimi Carreira</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Photographer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-6.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Rasheeda Vaquera</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Account</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-7.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Sarah Kortney</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Executive Director</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-8.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Kathryn Mengel</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">Chief Designer</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-lg-3">
                                <div class="card d-flex flex-row mb-4">
                                    <a class="d-flex" href="#"><img alt="Profile" src="{{asset('img/profile-pic-l-9.jpg')}}" class="img-thumbnail border-0 rounded-circle m-4 list-thumbnail align-self-center"></a>
                                    <div class="d-flex flex-grow-1 min-width-zero">
                                        <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                            <div class="min-width-zero">
                                                <a href="#">
                                                    <p class="list-item-heading mb-1 truncate">Philip Nelms</p>
                                                </a>
                                                <p class="mb-2 text-muted text-small">...</p>
                                                <button type="button" class="btn btn-xs btn-outline-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>
@endsection
@push('scripts')
<script src="{{asset('js/vendor/progressbar.min.js')}}"></script>
<script src="{{asset('js/vendor/baguetteBox.min.js')}}"></script>
<script src="{{asset('js/vendor/video.js')}}"></script>
{{-- search contact --}}
<script>
    $('#searchcontact').click(function(){
        var person = $('[name="contactperson"]').val();
        if(person != ''){
            $.ajax({
                type:'POST',
                url:'{{route("searchcontact")}}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': person,
                },
                success:function(data) {
                    $('#searchresult').html(data);
                    //console.log(data);
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
            })
        }
    });
</script>
{{-- send request --}}
<script>
    $(document).on('click','.addperson',function(){
        var clicked = $(this);
        var person = clicked.attr('id');
        $.ajax({
                type:'POST',
                url:'{{ route("sendrequest") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': parseInt(person),
                },
                success:function(data) {
                    clicked.replaceWith('<p>Request sent</p>');
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
        });
    });
</script>
{{-- accept request --}}
<script>
    $(document).on('click','.inviteAccept',function(){
        var clicked = $(this);
        var person = clicked.attr('id');
        $.ajax({
                type:'POST',
                url:'{{ route("acceptrequest") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': parseInt(person),
                },
                success:function(data) {
                    clicked.siblings().hide();
                    clicked.replaceWith('<span>Request Accepted</span>');

                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
        });
    });
</script>
{{-- reject request --}}
<script>
    $(document).on('click','.inviteReject',function(){
        var clicked = $(this);
        var person = clicked.attr('id');
        $.ajax({
                type:'POST',
                url:'{{ route("rejectrequest") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': parseInt(person),
                },
                success:function(data) {
                    clicked.siblings().hide();
                    clicked.replaceWith('<span>Request Rejected</span>');

                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
        });
    });
</script>

{{-- block contact --}}
<script>
    $(document).on('click','.blockcontact',function(){
        var clicked = $(this);
        var person = clicked.attr('id');
        $.ajax({
                type:'POST',
                url:'{{ route("blockcontact") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': parseInt(person),
                },
                success:function(data) {
                    // clicked.html(data.button);
                    if(clicked.text()== 'Block') clicked.html('Unblock');
                    else clicked.html('Block');
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
        });
    });
</script>
{{-- remove contact --}}
<script>
    $(document).on('click','.removecontact',function(){
        var person = $(this).attr('id');
        $.ajax({
                type:'POST',
                url:'{{ route("removecontact") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'person': parseInt(person),
                },
                success:function(data) {
                    $('#person-'+parseInt(person)).hide();
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
        });
    });
</script>
@endpush
