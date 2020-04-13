@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/select2.min.css')}}">
<link rel="stylesheet" href="{{asset('css/vendor/select2-bootstrap.min.css')}}">
<link rel="stylesheet" href="{{asset('css/emoji.css')}}">
@include('user.invoice.invoice_css')
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12">
                <div class="mb-2">
                    {{-- <h1>Sarah Kortney</h1> --}}
                    <div class="text-zero top-right-button-container">
                        <a href="{{route('escrow.create')}}" class="btn btn-primary btn-lg top-right-button mr-1">ADD NEW</a>
                        <div class="btn-group">
                            <div class="btn btn-primary btn-lg pl-4 pr-0 check-button">
                                <label class="custom-control custom-checkbox mb-0 d-inline-block">
                                    <input type="checkbox" class="custom-control-input" id="checkAll"> <span class="custom-control-label">&nbsp;</span></label>
                            </div>
                            <button type="button" class="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                        </div>
                    </div>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Escrow</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">RECEIVED ESCROW</a></li>
                    <li class="nav-item"><a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">SENT ESCROW </a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-2">
                                    <a class="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">Display Options <i class="simple-icon-arrow-down align-middle"></i></a>
                                    <div class="collapse dont-collapse-sm" id="displayOptions">
                                        <span class="mr-3 mb-2 d-inline-block float-md-left">
                                            <a href="#" class="mr-2 view-icon active">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"/>
                                                    <path class="view-icon-svg" d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"/>
                                                    <path class="view-icon-svg" d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"/>
                                                    <path class="view-icon-svg" d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"/>
                                                    <path class="view-icon-svg" d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"/>
                                                    <path class="view-icon-svg" d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"/>
                                                </svg>
                                            </a>
                                        </span>
                                        <div class="d-block d-md-inline-block">
                                            <div class="btn-group float-md-left mr-1 mb-1">
                                                <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Order By</button>
                                                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 25px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                </div>
                                            </div>
                                            {{-- <div class="btn-group float-md-left mr-1 mb-1">
                                                <button class="btn btn-outline-dark btn-xs active" type="button" id="switchsent" >Sent Escrows</button>
                                                <button class="btn btn-outline-dark btn-xs " type="button" id="switchreceived">Received Escrows</button>

                                            </div> --}}
                                            <div class="search-sm calendar-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                                <input class="form-control datepicker" placeholder="Search by day">
                                            </div>
                                        </div>
                                        <div class="float-md-right"><span class="text-muted text-small">Displaying 1-10 of 210 items </span>
                                            <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">20</button>
                                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">10</a> <a class="dropdown-item active" href="#">20</a> <a class="dropdown-item" href="#">30</a> <a class="dropdown-item" href="#">50</a> <a class="dropdown-item" href="#">100</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-12 list" data-check-all="checkAll" id="receivedescrow">
                                @forelse($receivedEscrow as $received)
                                    <div class="card d-flex flex-row mb-3">
                                        <a class="d-flex" href="{{route('escrow.view',$received)}}">
                                            <img src="{{asset('img/fat-rascal-thumb.jpg')}}" alt="Fat Rascal" class="list-thumbnail responsive border-0 card-img-left">
                                        </a>
                                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                                <div class="d-flex justify-content-between w-40 w-sm-100">
                                                    <a href="{{route('escrow.view',$received)}}">
                                                        <p class="list-item-heading text-muted mb-0 truncate">From: {{$received->getSeller->name}}</p>
                                                    </a>
                                                    <a class="bg-primary text-white rounded-circle h4 recent" id="{{$received->id}}-chat" style="cursor:pointer;">
                                                        <i class="iconsminds-speach-bubbles" ></i>
                                                    </a>
                                                </div>
                                                <p class="mb-0 w-15 w-sm-100">{{$received->getCurrency->symbol.' '.$received->products->sum('amount')}}</p>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">{{date_format($received->created_at,'d.m.Y')}}</p>
                                                <div class="w-15 w-sm-100">
                                                    @if($received->status =="paid")
                                                    <span class="badge badge-pill badge-success">
                                                         {{strtoupper($received->status)}}</span>
                                                    @else
                                                        <a href="#"><span class="badge badge-pill badge-outline-primary mb-1">PAY NOW</span></a>
                                                    @endif
                                                </div>
                                            </div>
                                            <label class="custom-control custom-checkbox mb-1 align-self-center pr-4">
                                                <input type="checkbox" class="custom-control-input">
                                                <span class="custom-control-label">&nbsp;</span>
                                            </label>
                                        </div>
                                    </div>

                                @empty
                                <div class="card d-flex flex-row mb-3">
                                    No received escrow
                                </div>
                                @endforelse
                                <nav class="mt-4 mb-3">
                                    <ul class="pagination justify-content-center mb-0">
                                        <li class="page-item"><a class="page-link first" href="#"><i class="simple-icon-control-start"></i></a></li>
                                        <li class="page-item"><a class="page-link prev" href="#"><i class="simple-icon-arrow-left"></i></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link next" href="#" aria-label="Next"><i class="simple-icon-arrow-right"></i></a></li>
                                        <li class="page-item"><a class="page-link last" href="#"><i class="simple-icon-control-end"></i></a></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-2">
                                    <a class="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">Display Options <i class="simple-icon-arrow-down align-middle"></i></a>
                                    <div class="collapse dont-collapse-sm" id="displayOptions">
                                        <span class="mr-3 mb-2 d-inline-block float-md-left">
                                            <a href="#" class="mr-2 view-icon active">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"/>
                                                    <path class="view-icon-svg" d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"/>
                                                    <path class="view-icon-svg" d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"/>
                                                    <path class="view-icon-svg" d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                    <path class="view-icon-svg" d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"/>
                                                </svg>
                                            </a>
                                            <a href="#" class="mr-2 view-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                                    <path class="view-icon-svg" d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"/>
                                                    <path class="view-icon-svg" d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"/>
                                                    <path class="view-icon-svg" d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"/>
                                                    <path class="view-icon-svg" d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"/>
                                                </svg>
                                            </a>
                                        </span>
                                        <div class="d-block d-md-inline-block">
                                            <div class="btn-group float-md-left mr-1 mb-1">
                                                <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Order By</button>
                                                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 25px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                </div>
                                            </div>
                                            {{-- <div class="btn-group float-md-left mr-1 mb-1">
                                                <button class="btn btn-outline-dark btn-xs active" type="button" id="switchsent" >Sent Escrows</button>
                                                <button class="btn btn-outline-dark btn-xs " type="button" id="switchreceived">Received Escrows</button>

                                            </div> --}}
                                            <div class="search-sm calendar-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                                <input class="form-control datepicker" placeholder="Search by day">
                                            </div>
                                        </div>
                                        <div class="float-md-right"><span class="text-muted text-small">Displaying 1-10 of 210 items </span>
                                            <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">20</button>
                                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">10</a> <a class="dropdown-item active" href="#">20</a> <a class="dropdown-item" href="#">30</a> <a class="dropdown-item" href="#">50</a> <a class="dropdown-item" href="#">100</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 list" data-check-all="checkAll" id="sentescrow">
                                @forelse ($sentEscrow as $sent)
                                    <div class="card d-flex flex-row mb-3">
                                        <a class="d-flex" href="{{route('escrow.view',$sent)}}">
                                            <img src="{{asset('img/fat-rascal-thumb.jpg')}}" alt="Fat Rascal" class="list-thumbnail responsive border-0 card-img-left">
                                        </a>
                                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                                            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                                <div class="d-flex justify-content-between w-40 w-sm-100">
                                                    <a href="{{route('escrow.view',$sent)}}">
                                                        <p class="list-item-heading text-muted mb-0 truncate">To: {{$sent->getBuyer->name}}</p>
                                                    </a>
                                                    @if($sent->conversations->isNotEmpty())
                                                    <a class="bg-primary text-white rounded-circle h4 recent" id="{{$sent->id}}-chat" style="cursor:pointer;">
                                                        <i class="iconsminds-speach-bubbles" ></i>
                                                    </a>
                                                    @endif
                                                </div>
                                                <p class="mb-0 w-15 w-sm-100">{{$sent->getCurrency->symbol.' '.$sent->products->sum('amount')}}</p>
                                                <p class="mb-0 text-muted text-small w-15 w-sm-100">{{date_format($sent->created_at,'d.m.Y')}}</p>
                                                <div class="w-15 w-sm-100">
                                                    @if($sent->status =="paid")
                                                    <span class="badge badge-pill badge-secondary">
                                                         {{strtoupper($sent->status)}}</span>
                                                    @else
                                                    <span class="badge badge-pill badge-warning">{{strtoupper($sent->status)}}</span>
                                                    @endif
                                                </div>
                                            </div>
                                            <label class="custom-control custom-checkbox mb-1 align-self-center pr-4">
                                                <input type="checkbox" class="custom-control-input">
                                                <span class="custom-control-label">&nbsp;</span>
                                            </label>
                                        </div>
                                    </div>

                                @empty
                                <div class="card d-flex flex-row mb-3">
                                    No sent escrow
                                </div>
                                @endforelse
                                <nav class="mt-4 mb-3">
                                    <ul class="pagination justify-content-center mb-0">
                                        <li class="page-item"><a class="page-link first" href="#"><i class="simple-icon-control-start"></i></a></li>
                                        <li class="page-item"><a class="page-link prev" href="#"><i class="simple-icon-arrow-left"></i></a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link next" href="#" aria-label="Next"><i class="simple-icon-arrow-right"></i></a></li>
                                        <li class="page-item"><a class="page-link last" href="#"><i class="simple-icon-control-end"></i></a></li>
                                    </ul>
                                </nav>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="app-menu" style="width:300px !important;">
        <span class="d-block mt-3 text-center">Recent Messages</span>
        @include('user.chat.recentmessages')
        <a class="app-menu-button d-inline-block d-xl-none" href="#">
            <i class="simple-icon-options"></i>
        </a>
    </div>
</main>
<div class="modal fade" id="audioRecord" tabindex="-1" role="dialog" aria-labelledby="audioRecordLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="call-container">
                    {{-- <div class="current-user">
                        <i class="simple-icon-microphone h3"></i>
                    </div>
                    <h5 class="calling-user-name">
                        Click Record to begin recording<span class="calling">Recording...</span>
                    </h5> --}}
                    <div class="d-flex justify-content-center"><audio controls autoplay playsinline></audio></div>
                    <div id="controls" class="d-flex justify-content-around mt-1">
                        <button id="btn-start-recording" class="btn btn-primary">Start</button>
                        <button id="btn-stop-recording" class="btn btn-danger" disabled>Stop</button>
                        <button id="btn-release-microphone" disabled style="display:none">Release Microphone</button>
                        <button id="btn-upload-recording" class="btn btn-success" disabled>Send</button>
                        <button data-dismiss="modal" class="btn btn-danger">Discard</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="videoRecord" tabindex="-1" role="dialog" aria-labelledby="videoRecordLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="call-container">
                    {{-- <div class="current-user">
                        <i class="simple-icon-microphone h3"></i>
                    </div>
                    <h5 class="calling-user-name">
                        Click Record to begin recording<span class="calling">Recording...</span>
                    </h5> --}}
                    <div class="d-flex justify-content-center"><video controls autoplay playsinline></video></div>
                    <div id="controls" class="d-flex justify-content-around mt-1">
                        <button id="btn-start-video-recording" class="btn btn-primary">Start</button>
                        <button id="btn-stop-video-recording" class="btn btn-danger" disabled>Stop </button>
                        <button id="btn-upload-video" class="btn btn-success" disabled>Send</button>
                        <button data-dismiss="modal" class="btn btn-danger">Discard</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="imageCapture" tabindex="-1" role="dialog" aria-labelledby="imageCaptureLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div id="capturecontainer" class="d-flex flex-column justify-content-center" style="width:100%">

                    <h5 class="calling-user-name">
                         <span class="calling">Image Capturing...</span>
                    </h5>
                    <div id="my_camera1" class="d-flex flex-column justify-content-center"></div>
                    <button id="takepicture" type='button' class="btn btn-primary mt-2" onClick="take_snapshot1()">Take Snapshot</button>
                    <input type="hidden" name="image1" id="image1">
                    <div class="d-flex justify-content-around">
                        <button type='button' class="retakepicture btn btn-warning mt-2" onClick="retake()">Retake Snapshot</button>
                        <button type="button" class="retakepicture btn btn-success mt-2" id="sendCapture">
                            <span>Send Image</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script src="{{asset('js/vendor/progressbar.min.js')}}"></script>
<script src="{{asset('js/vendor/jquery.autoellipsis.js')}}"></script>
<script src="{{asset('js/vendor/Sortable.js')}}"></script>
<script src="{{asset('js/vendor/select2.full.js')}}"></script>
<script src="{{asset('js/emoji.js')}}"></script>
<script src="{{asset('plugins/recorder/js/RecordRTC.js')}}"></script>

<script>
    $(document).ready(function(){
        $('#conversation').hide();
    });
    function getRandomString() {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }

    function getFileName(fileExtension) {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        return 'RecordRTC-' + year + month + date + '-' + getRandomString() + '.' + fileExtension;
    }


</script>
{{-- get recent messages --}}
<script>
    $(document).on('click','.recent',function(){
        $(".app-menu").toggleClass('draw');

        $(".app-menu").toggleClass('shown');
        id = $(this).attr('id');
        $.ajax({
            type:'POST',
            url:'{{ route("escrowconversation") }}',
            data:{
                '_token' : $('meta[name="csrf-token"]').attr('content'),
                'escrow_id': parseInt(id),
            },
            success:function(data) {
                if($('#recentmessages').is(':visible')){
                    $('#recentmessages').replaceWith(data);
                }else
                $('#conversation').replaceWith(data);
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });

        let delay = 5000;
        var count = 0;
        let timerId = setTimeout(function request() {
            $.ajax({
                type:'POST',
                    url:'{{ route("chatgetmessages") }}',
                    data:{
                        '_token' : $('meta[name="csrf-token"]').attr('content'),
                        'id': escrow_id,
                        'type': "escrow"
                    },
                    success:function(data) {
                        if(data != 403)
                        $('#converse').append(data);
                    },
                    error: function (data, textStatus, errorThrown) {
                    console.log(data);
                    delay *= 2;
                    },
            });
        timerId = setTimeout(request, delay);
        }, delay);

    });
</script>
<script>
    var escrow_id = $('[name="escrow"]').val();
    function sendMessage(e){
        if(event.key === 'Enter' && e.value != ''){
            $.ajax({
                type:'POST',
                url:'{{ route("chatsendmessage") }}',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'message': e.value,
                    'id': escrow_id,
                    'type': "escrow"
                },
                success:function(data) {
                    $("#typetext").val('');
                    $('#converse').append(data);
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
            });
        }
    }

</script>
@include('user.chat.uploadaudio')
<script>
    $(document).on('click','#startaudio',function(){
        $("#audioRecord").modal()
    });
    function sendAudio(blob){
        var file = new File([blob], getFileName('mp3'), {
            type: 'audio/mp3'
        });
        var escrow_id = $('[name="escrow"]').val();
        var formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'escrow');
        formData.append('id', escrow_id);
        console.log('upload recording ' + file + ' to server');
        // start upload
        $.ajax({
            type:'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url:'{{ route("chatsendAudio") }}',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            success:function(data) {
                $('#converse').append(data);
                $("#audioRecord").modal('hide');
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });
    }
</script>
@include('user.chat.uploadvideo')
<script>
    $(document).on('click','#startvideo',function(){
        $("#videoRecord").modal()
    });
    function sendVideo(blob){
        var file = new File([blob], getFileName('webm'), {
            type: 'video/webm'
        });
        var escrow_id = $('[name="escrow"]').val();
        var formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'escrow');
        formData.append('id', escrow_id);
        console.log('upload recording ' + file + ' to server');
        // start upload
        $.ajax({
            type:'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url:'{{ route("chatsendVideo") }}',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            success:function(data) {
                $('#converse').append(data);
                $("#videoRecord").modal('hide');

            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });
    }
</script>
@include('user.chat.captureimage')
<script>
    function take_snapshot1() {
        // take snapshot and get image data
        Webcam.snap( function(data_uri) {
            // display results in page
            //var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
            $("#image1").val(data_uri);
            document.getElementById('my_camera1').innerHTML ='<img src="'+data_uri+'"/>';
        } );
        $('#takepicture').hide();
        $('.retakepicture').show();
    }

    $('#sendCapture').click(function(){
        var escrow_id = $('[name="escrow"]').val();
        var captured = $('#image1').val();
        var blob = dataURItoBlob(captured);
        var file = new File([blob], getFileName('jpg'), {
            type: 'image/jpeg'
        });
        var formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'escrow');
        formData.append('id', escrow_id);

        $.ajax({
            type:'POST',
            url:'{{ route("chatsendCaptured") }}',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            success:function(data) {
                $('#converse').append(data);
                $("#imageCapture").modal('hide');
                Webcam.reset();
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });
    });
</script>
@include('user.chat.uploadfile')

@endpush
