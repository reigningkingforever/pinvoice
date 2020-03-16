@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/bootstrap-float-label.min.css')}}">
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Sarah Kortney</h1>
                    <div class="text-zero top-right-button-container">
                        <button type="button" class="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACTIONS</button>
                        <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                    </div>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">PROFILE</a></li>
                    <li class="nav-item"><a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">SETTINGS</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                        <div class="row">
                            <div class="col-12 col-lg-5 col-xl-4 col-left">
                                <div class="card mb-4">
                                    <div class="position-absolute card-top-buttons">
                                        <button class="btn btn-outline-white icon-button"><i class="simple-icon-pencil"></i></button>
                                    </div><img src="img/profile-pic.jpg" alt="Detail Picture" class="card-img-top">
                                    <div class="card-body">
                                        <p class="text-muted text-small mb-2">About</p>
                                        <p class="mb-3">{{$user->about ?? ''}}</p>
                                        <p class="text-muted text-small mb-2">Location</p>
                                        <p class="mb-3">{{$user->place ?? ''}}</p>
                                        {{-- <p class="text-muted text-small mb-2">Responsibilities</p> --}}
                                        {{-- <p class="mb-3"><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">FRONTEND</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">JAVASCRIPT</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">SECURITY</span> </a><a href="#"><span class="badge badge-pill badge-outline-theme-2 mb-1">DESIGN</span></a></p> --}}
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
                                @if($user->business)
                                <div class="card mb-4 d-none d-lg-block">
                                    <div class="card-body">
                                        <h5 class="card-title">Staff</h5>
                                        @foreach($user->profiles as $profile)
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">
                                            <a href="#">
                                                <img src="img/profile-pic-l-2.jpg" alt="Philip Nelms" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall">
                                            </a>
                                            <div class="pl-3 flex-fill">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-0">{{$profile->name}}</p>
                                                    <p class="text-muted mb-0 text-small">{{$profile->position}}</p>
                                                </a>
                                            </div>
                                            <div>
                                                <button class="btn btn-outline icon-button edit-staff" data-toggle="tooltip" data-original-title="edit"><i class="simple-icon-pencil text-primary"></i></button>
                                                <button class="btn btn-outline icon-button remove-staff" data-toggle="tooltip" data-original-title="remove"><i class="simple-icon-close text-danger"></i></button>
                                            </div>
                                            <div class="pl-3 flex-fill editDiv" style="display:none;">
                                                <form id="profile{{$profile->id}}" action="{{route('enterprise.profile.update')}}" method="POST">@csrf
                                                    <label class="form-group has-float-label mb-4">
                                                        <input name="name" type="text" class="form-control" value="{{$profile->name}}"> <span>Name</span>
                                                    </label>

                                                    <label class="form-group has-float-label mb-4">
                                                        <select class="form-control select2-single" data-width="100%" name="position">
                                                            <option value="admin" @if($profile->position == 'admin') selected @endif>Admin</option>
                                                            <option value="creator" @if($profile->position == 'creator') selected @endif>Creator</option>
                                                            <option value="editor" @if($profile->position == 'editor') selected @endif>Editor</option>
                                                            <option value="viewer" @if($profile->position == 'viewer') selected @endif>Viewer</option>
                                                        </select>
                                                        <span>Position</span>
                                                    </label>
                                                    <label class="form-group has-float-label mb-4">
                                                        <input name="password" class="form-control" type="text" placeholder=""> <span>Access Password</span>
                                                    </label>
                                                    <input name="profile" type="hidden" value="{{$profile->id}}">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <button class="btn btn-primary btn-shadow" type="submit">UPDATE</button>
                                                        <button class="btn btn-warning btn-shadow editCancel" type="button">CANCEL</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        @endforeach
                                        <div class="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">

                                            <div class="pl-3 flex-fill">
                                                <a href="#">
                                                    <p class="font-weight-medium mb-0">Add new staff</p>
                                                </a>
                                            </div>

                                            <button class="btn btn-outline icon-button" id="addStaff"><i class="simple-icon-plus"></i></button>

                                            <div class="pl-3 flex-fill" style="display:none;" id="addDiv">
                                                <form action="{{route('enterprise.profile.new')}}" method="POST">@csrf
                                                    <label class="form-group has-float-label mb-4">
                                                        <input name="name" type="text" class="form-control"> <span>Name</span>
                                                    </label>

                                                    <label class="form-group has-float-label mb-4">
                                                        <select class="form-control select2-single" data-width="100%" name="position">
                                                            <option value="admin">Admin</option>
                                                            <option value="creator">Creator</option>
                                                            <option value="editor">Editor</option>
                                                            <option value="viewer">Viewer</option>
                                                        </select>
                                                        <span>Position</span>
                                                    </label>
                                                    <label class="form-group has-float-label mb-4">
                                                        <input name="password" class="form-control" type="text" placeholder=""> <span>Access Password</span>
                                                    </label>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <button class="btn btn-primary btn-shadow" type="submit">ADD</button>
                                                        <button class="btn btn-warning btn-shadow" id="addCancel" type="button">CANCEL</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                @endif
                            </div>
                            <div class="col-12 col-lg-7 col-xl-8 col-right">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Profile</h5>
                                        <form action="{{route('profile.update')}}" method="POST">
                                            @csrf
                                            <div class="col-12">
                                                @error('email')
                                                <p class="invalid-feedback d-block" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </p>
                                                @enderror
                                                <label class="form-group has-float-label mb-4">
                                                    <input name="email" class="form-control" value="{{$user->email}}" disabled> <span>E-mail</span>
                                                </label>
                                                @error('mobile')
                                                <p class="invalid-feedback d-block" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </p>
                                                @enderror
                                                <label class="form-group has-float-label mb-4">
                                                    <input name="mobile" type="text" value="{{$user->mobile}}" class="form-control"> <span>Mobile</span>
                                                </label>
                                                @error('password')
                                                <p class="invalid-feedback d-block" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </p>
                                                @enderror
                                                <label class="form-group has-float-label mb-4">
                                                    <textarea name="about" class="form-control" placeholder="">{{$user->about}} </textarea><span>About</span>
                                                </label>
                                                <label class="form-group has-float-label mb-4">
                                                    <input name="website" class="form-control" value="{{$user->website}}" placeholder="http://example.com"> <span>Website</span>
                                                </label>
                                                <label class="form-group has-float-label mb-4">
                                                    <textarea name="address" class="form-control" placeholder="" required> {{$user->address}}</textarea><span>Address</span>
                                                </label>
                                                <label class="form-group has-float-label mb-4">
                                                    <input name="place" class="form-control" value="{{$user->place}}" required id="places"> <span>Place</span>
                                                </label>

                                                <div class="d-flex justify-content-between align-items-center">
                                                    <button class="btn btn-primary btn-lg btn-shadow" type="submit">Update</button>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Change Password</h5>
                                        <form id="changepassword" action="{{route('password.update')}}" method="POST">@csrf
                                            <div class="col-12">

                                            <label class="form-group has-float-label mb-4">
                                                <input name="oldpassword" type="password" class="form-control @error('oldpassword') is_invalid @enderror" required> <span>Old Password</span>
                                                @error('oldpassword')
                                                <p class="invalid-feedback d-block">
                                                    <strong>{{ $message }}</strong>
                                                </p>
                                                @enderror
                                            </label>

                                            <label class="form-group has-float-label mb-4">
                                                <input name="password" type="password" class="form-control @error('password') is_invalid @enderror" required> <span>New Password</span>
                                                @error('password')
                                                <span class="invalid-feedback d-block" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </label>
                                            <label class="form-group has-float-label mb-4">
                                                <input name="password_confirmation" class="form-control" type="password" placeholder="" required> <span>Repeat Password</span>
                                            </label>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <button class="btn btn-primary btn-lg btn-shadow" type="submit">CHANGE</button>
                                            </div></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                        <div class="row">
                            <div class="col-6">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Your Account Settings</h5>
                                        <h6>Profile Settings</h6>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Enable Face Auth</label>
                                            <div class="col-3">
                                                <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                    <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                    <label class="custom-switch-btn" for="switch3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Enable Email Notification</label>
                                            <div class="col-3">
                                                <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                    <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                    <label class="custom-switch-btn" for="switch3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Enable SMS Notification</label>
                                            <div class="col-3">
                                                <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                    <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                    <label class="custom-switch-btn" for="switch3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Default Language</label>
                                            <div class="col-3">
                                                <select class="form-control select2-single" data-width="100%">
                                                    <option value="en" selected>English</option>
                                                    <option value="fr">French</option>
                                                    <option value="de">German</option>
                                                    <option value="sp">Spanish</option>
                                                    <option value="ru">Russian</option>
                                                    <option value="ar">Arabic</option>
                                                    <option value="ch">Chinese</option>
                                                </select>
                                            </div>
                                        </div>




                                        <h6 class="mt-3">Invoice Settings</h6>

                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Block all contacts from sending you Invoice</label>
                                            <div class="col-3">
                                                <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                    <input class="custom-switch-input" id="block_invoice" type="checkbox" checked="checked">
                                                    <label class="custom-switch-btn" for="block_invoice"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Default Currency</label>
                                            <div class="col-3">
                                                <select class="form-control select2-single" data-width="100%">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="AZ">Arizona</option>
                                                    
                                                </select>

                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Escrow Payment Terms</label>
                                            <div class="col-3">
                                                <select class="form-control select2-single" data-width="100%">
                                                    <option value="CA">California</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="OR">Oregon</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Expire Invoice After</label>
                                            <div class="col-3">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text" id="basic-addon2">Days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {{-- <div class="mb-4">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                                <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
                                            </div>
                                        </div> --}}
                                        <h6>Contact Setting</h6>
                                        <div class="form-group row mb-1">
                                            <label class="col-7 col-form-label">Auto Accept Invite</label>
                                            <div class="col-3">
                                                <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                    <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                    <label class="custom-switch-btn" for="switch3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        {{-- <div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled="disabled">
                                                <label class="custom-control-label" for="customCheckDisabled">Check this custom checkbox</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="radio3" name="radioDisabled" class="custom-control-input" disabled="disabled">
                                                <label class="custom-control-label">Toggle this custom radio</label>
                                            </div>
                                        </div> --}}
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
<script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
<script>
    (function() {
    var placesAutocomplete = places({
        appId: 'pl5VZN92WNAH',
        apiKey: '90a2f49e2e3e56f8c2d33e6316ce80db',
        container: document.querySelector('#places'),
        style: true,
        debug: true
    });
    })();
</script>
<script>
$(document).on('click','#addStaff',function(){
    $(this).prev().hide();
    $(this).next().show();
    $(this).hide();

});
$(document).on('click','#addCancel',function(){
    $('#addDiv').prevAll().show();
    $('#addDiv').hide();

});
$(document).on('click','.edit-staff',function(){
    $(this).parent().prevAll().hide();
    $(this).parent().hide();
    $(this).parent().nextAll().show();

});
$(document).on('click','.editCancel',function(){
    $(this).closest('.editDiv').prevAll().show();
    $(this).closest('.editDiv').hide();
});
</script>
@endpush
