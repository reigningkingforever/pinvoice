@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/select2-bootstrap.min.css')}}">

@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Settings</h1>

                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">GENERAL</a></li>
                    <li class="nav-item"><a class="nav-link" id="throttle-tab" data-toggle="tab" href="#throttle" role="tab" aria-controls="throttle" aria-selected="false">THROTTLE </a></li>
                    <li class="nav-item"><a class="nav-link" id="notification-tab" data-toggle="tab" href="#notification" role="tab" aria-controls="notification" aria-selected="false">NOTIFICATIONS </a></li>
                    <li class="nav-item"><a class="nav-link" id="payment-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">PAYMENT </a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="general" role="tabpanel" aria-labelledby="general-tab">

                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">General Settings</h5>
                                        <div class="col-md-6">
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Password Minimum Length Face Auth</label>
                                                <div class="col-3">
                                                    <input class="form-control" type="text" name="password_min" value="8">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">OTP Length</label>
                                                <div class="col-3">
                                                    <input class="form-control" type="text" name="otp_length" value="8">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">OTP Expiry</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="OTP Expiry" aria-describedby="otp_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="otp_expiry">Mins</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Keep Chat logs for</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Chat logs" aria-describedby="chatlogs">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="chatlogs">Days</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                <label class="col-7 col-form-label">Default Currency</label>
                                                <div class="col-3">
                                                    <select class="form-control select2-single" data-width="100%">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                        <option value="TNOGZ" disabled="disabled">The No Optgroup Zone</option>
                                                        <option value="TPZ">The Panic Zone</option>
                                                        <option value="TTZ">The Twilight Zone</option>
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

                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Auto Accept Invite</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="throttle" role="tabpanel" aria-labelledby="throttle-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Account Settings</h5>
                                        <div class="col-md-6">
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
                                                <label class="col-7 col-form-label">Default Currency</label>
                                                <div class="col-3">
                                                    <select class="form-control select2-single" data-width="100%">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                        <option value="TNOGZ" disabled="disabled">The No Optgroup Zone</option>
                                                        <option value="TPZ">The Panic Zone</option>
                                                        <option value="TTZ">The Twilight Zone</option>
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

                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Auto Accept Invite</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Account Settings</h5>
                                        <div class="col-md-6">
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
                                                <label class="col-7 col-form-label">Default Currency</label>
                                                <div class="col-3">
                                                    <select class="form-control select2-single" data-width="100%">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                        <option value="TNOGZ" disabled="disabled">The No Optgroup Zone</option>
                                                        <option value="TPZ">The Panic Zone</option>
                                                        <option value="TTZ">The Twilight Zone</option>
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

                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Auto Accept Invite</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Account Settings</h5>
                                        <div class="col-md-6">
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
                                                <label class="col-7 col-form-label">Default Currency</label>
                                                <div class="col-3">
                                                    <select class="form-control select2-single" data-width="100%">
                                                        <option value="CA">California</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="WY">Wyoming</option>
                                                        <option value="TNOGZ" disabled="disabled">The No Optgroup Zone</option>
                                                        <option value="TPZ">The Panic Zone</option>
                                                        <option value="TTZ">The Twilight Zone</option>
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

                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Auto Accept Invite</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
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
        </div>
    </div>
</main>

@endsection
@push('scripts')
<script src="{{asset('js/vendor/select2.full.js')}}"></script>
<script>
    $(document).ready(function(){

    });

</script>
@endpush
