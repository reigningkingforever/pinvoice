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
                    <li class="nav-item"><a class="nav-link" id="authentication" data-toggle="tab" href="#auth" role="tab" aria-controls="auth" aria-selected="false">AUTHENTICATION</a></li>
                    <li class="nav-item"><a class="nav-link" id="throttle-tab" data-toggle="tab" href="#throttle" role="tab" aria-controls="throttle" aria-selected="false">THROTTLE </a></li>
                    <li class="nav-item"><a class="nav-link" id="notification-tab" data-toggle="tab" href="#notification" role="tab" aria-controls="notification" aria-selected="false">NOTIFICATIONS </a></li>
                    <li class="nav-item"><a class="nav-link" id="communication-tab" data-toggle="tab" href="#communication" role="tab" aria-controls="communication" aria-selected="false">COMMUNICATION </a></li>
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
                                            <h6>Account Settings</h6>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Enterprise number of subaccounts</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Accounts</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">User can delete own account</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6>Contact Settings</h6>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Expire Contact Request After</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Days</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h6>Invoice Settings</h6>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Expire invoice after</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6>Escrow Settings</h6>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Timeline for buyer to accept/reject delivery</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Timeline for seller to accept/reject refund</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Timeline to rate buyer/seller</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Timeline to negotiate dispute</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Arbitration timeline after dispute negotiation</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="contact_request_expiry" aria-describedby="contact_request_expiry">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="contact_request_expiry">Hours</span>
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
                    <div class="tab-pane fade" id="auth" role="tabpanel" aria-labelledby="authentication">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Authentication Settings</h5>
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
                                                <label class="col-7 col-form-label">Enable Finger Print</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Password Minimum Length</label>
                                                <div class="col-3">
                                                    <input class="form-control" type="text" name="password_min" value="8">
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Transaction Pin Length</label>
                                                <div class="col-3">
                                                    <input class="form-control" type="text" name="password_min" value="8">
                                                </div>
                                            </div>

                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Keep User Login History for</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Days</span>
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
                    <div class="tab-pane fade" id="throttle" role="tabpanel" aria-labelledby="throttle-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Throttle Settings</h5>
                                        <div class="col-md-6">
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">First Lockout After</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Attempts</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">First Lockout Timeframe</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Mins</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Require Challenge After</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Attempts</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Second Lockout Timeframe</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Mins</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Final Lockout After</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Attempts</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Final Lockout After</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="basic-addon2">Mins</span>
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
                    <div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Account Settings</h5>
                                        <div class="col-md-6">
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
                                                <label class="col-7 col-form-label">Force SMS OTP</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Force Email OTP</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
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






                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="communication" role="tabpanel" aria-labelledby="communication-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Chat Settings</h5>
                                        <div class="col-md-6">
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Keep Chat Back logs for</label>
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
                                                <label class="col-7 col-form-label">Keep Chat Front logs for</label>
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
                                                <label class="col-7 col-form-label">Text Length Limit</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Chat logs" aria-describedby="chatlogs">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="chatlogs">Chars</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Voice note length</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Chat logs" aria-describedby="chatlogs">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="chatlogs">Secs</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Video Length</label>
                                                <div class="col-3">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" aria-label="Chat logs" aria-describedby="chatlogs">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text" id="chatlogs">Secs</span>
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
                    <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="mb-4">Payment Settings</h5>
                                        <div class="col-md-6">
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Lock Wallet Globally</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-1">
                                                <label class="col-7 col-form-label">Enable BTC</label>
                                                <div class="col-3">
                                                    <div class="custom-switch custom-switch-primary-inverse mb-2">
                                                        <input class="custom-switch-input" id="switch3" type="checkbox" checked="checked">
                                                        <label class="custom-switch-btn" for="switch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="accordion">
                                                <div class="border">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Naira</button>
                                                    <div id="collapseOne" class="collapse" data-parent="#accordion" style="">
                                                        <div class="p-4">
                                                            <h6>Wallet Settings</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Threshold </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Naira</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Maximum </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Naira</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Bank Deposit Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Naira</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Wallet Withdrawal Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Naira</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Invoice Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to sender</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to receiver</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Escrow Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Escrow Charges</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Dispute Resolution Fees</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Naira</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="border">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Dollars</button>
                                                    <div id="collapseTwo" class="collapse" data-parent="#accordion" style="">
                                                        <div class="p-4">
                                                            <h6>Wallet Settings</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Threshold </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Dollar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Maximum </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Dollar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Bank Deposit Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Dollar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Wallet Withdrawal Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Dollar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Invoice Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to sender</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to receiver</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Escrow Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Escrow Charges</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Dispute Resolution Fees</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Dollar</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="border">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Euro</button>
                                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                                        <div class="p-4">
                                                            <h6>Wallet Settings</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Threshold </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Maximum </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Bank Deposit Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Wallet Withdrawal Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Invoice Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to sender</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to receiver</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Escrow Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Escrow Charges</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Dispute Resolution Fees</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="border">
                                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Pounds</button>
                                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                                        <div class="p-4">
                                                            <h6>Wallet Settings</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Threshold </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Pounds</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Withdrawal Maximum </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Pounds</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Bank Deposit Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Pounds</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Wallet Withdrawal Charges </label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Pounds</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Invoice Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to sender</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Invoice Charges to receiver</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6>Escrow Charges</h6>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Escrow Charges</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row mb-1">
                                                                <label class="col-7 col-form-label">Dispute Resolution Fees</label>
                                                                <div class="col-3">
                                                                    <div class="input-group mb-3">
                                                                        <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                                                        <div class="input-group-append">
                                                                            <span class="input-group-text" id="basic-addon2">Euro</span>
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
