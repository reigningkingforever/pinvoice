@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/emoji.css')}}">
<style>
    main{
        margin-top:100px !important;
    }
    .chat-input-container{
        height:50px !important;

    }
    .chat-input-container input{
        height:50px !important;
    }
    .tick{bottom: 0px;}
    #typetext{margin-left:-350px;}
    .call-container {
        margin: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        }
    .call-container .current-user {
        margin: 0 0 1.5rem 0;
    }
    .call-container .current-user img {
    width: 90px;
    height: 90px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    }
    .call-container h5.calling-user-name {
    font-weight: 700;
    margin: 0 0 2rem 0;
    }
    .call-container h5.calling-user-name .calling {
    color: #1a8e5f;
    }
    .call-container .calling-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .call-container .calling-btns .btn {
        width: 60px;
        height: 60px;
        margin: .3rem .5rem;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
    }
    .call-container .calling-btns .btn i {
        font-size: 1.7rem;
    }
    #uploadfile{
    display:none;
    }

    #controls {
    display: flex;
    margin-top: 2rem;
    max-width: 28em;
    }

    #controls button {
    flex-grow: 1;
    height: 3.5rem;
    min-width: 2rem;
    border: none;
    border-radius: 0.15rem;
    background: #ed341d;
    margin-left: 2px;
    box-shadow: inset 0 -0.15rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    }

    #controls button:hover,#controls button:focus {
    outline: none;
    background: #c72d1c;
    }

    #controls button::-moz-focus-inner {
    border: 0;
    }

    #controls button:active {
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
    line-height: 3rem;
    }

    #controls button:disabled {
    pointer-events: none;
    background: lightgray;
    }
    #controls button:first-child {
    margin-left: 0;
    }


</style>
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12 chat-app">
                <div class="d-flex flex-row justify-content-between mb-3 chat-heading-container">
                    <div class="d-flex flex-row chat-heading">
                        <a class="d-flex" href="#">
                            <img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small">
                        </a>
                        <div class="d-flex min-width-zero">
                            <div class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div class="min-width-zero">
                                    <a href="#"><p class="list-item-heading mb-1 truncate">@if(Auth::id() == $invoice->seller) {{$invoice->getBuyer->name}} @else {{$invoice->getSeller->name}} @endif</p></a>
                                    <p class="mb-0 text-muted text-small">Last seen today 01:24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex h4 flex-row chat-heading pt-3">
                        <a class="d-flex mr-4" href="#" data-original-title="Phone call" data-toggle="modal" data-target="#audioCall">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call width-18 height-18"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <!-- <i class="fa fa-phone"></i> -->

                        </a>
                        <a class="d-flex mr-4" href="#" data-original-title="Video Call" data-toggle="modal" data-target="#videoCall">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video width-18 height-18"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            <!-- <i class="fa fa-video-camera"></i> -->
                        </a>
                        <a class="d-flex" href="#">
                            <i class="fa fa-ellipsis-v"></i>
                        </a>

                    </div>
                    <div class="modal fade" id="audioCall" tabindex="-1" role="dialog" aria-labelledby="audioCallLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="call-container">
                                        <div class="current-user">
                                            <img src="{{asset('img/profile-pic-l.jpg')}}" alt="Avatar">
                                        </div>
                                        <h5 class="calling-user-name">
                                            Amy Hood <span class="calling">Calling...</span>
                                        </h5>
                                        <div class="calling-btns">
                                            <button class="btn btn-danger" data-dismiss="modal">
                                                <i class="fa fa-times"></i>
                                            </button>
                                            <button class="btn btn-success" style="padding:6px 2px 0px 0px;">
                                                <i class="simple-icon-call-out"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="videoCall" tabindex="-1" role="dialog" aria-labelledby="videoCall" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="call-container">
                                        <div class="current-user">
                                            <img src="{{asset('img/profile-pic-l.jpg')}}" alt="Avatar">
                                        </div>
                                        <h5 class="calling-user-name">
                                            Amy Hood <span class="calling">Calling...</span>
                                        </h5>
                                        <div class="calling-btns">
                                            <button class="btn btn-danger" data-dismiss="modal">
                                                <i class="fa fa-times"></i>
                                            </button>
                                            <button class="btn btn-success" style="padding:5px 1px 0px 0px;">
                                                <i class="simple-icon-camrecorder"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="separator mb-5"></div>
                <div class="scroll">
                    <div class="scroll-content" id="converse">
                        @forelse($conversations as $conversation)
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
                                    <div class="position-absolute pt-1 pr-2 r-0 tick text-extra-small text-muted" style="bottom: 1px;">
                                        12:45
                                        <span class="text-extra-small text-muted"><i class="fas fa-check-double"></i></span>
                                    </div>
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
                        @empty

                        @endforelse

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="app-menu">
        <ul class="nav nav-tabs card-header-tabs ml-0 mr-0 mb-1" role="tablist">
            <li class="nav-item w-50 text-center">
                <a class="nav-link active" id="first-tab" data-toggle="tab" href="#firstFull" role="tab" aria-selected="true">Messages</a>
            </li>
            <li class="nav-item w-50 text-center">
                <a class="nav-link" id="second-tab" data-toggle="tab" href="#secondFull" role="tab" aria-selected="false">Contacts</a>
            </li>
        </ul>
        <div class="p-4 h-100">
            <div class="form-group">
                <input type="text" class="form-control rounded" placeholder="Search">
            </div>
            <div class="tab-content h-100">
                <div class="tab-pane fade show active h-100" id="firstFull" role="tabpanel" aria-labelledby="first-tab">
                    <div class="scroll">
                        <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero"><a href="#"><p class="mb-0 truncate">Sarah Kortney</p></a>
                                        <p class="mb-1 text-muted text-small">14:20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Rasheeda Vaquera</p></a>
                                        <p class="mb-1 text-muted text-small">11:10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-1 border-bottom pb-3 mb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Shelia Otterson</p></a>
                                        <p class="mb-1 text-muted text-small">09:50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-1 pb-3 mb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#">
                                            <p class="mb-0 truncate">Latarsha Gama</p>
                                        </a>
                                        <p class="mb-1 text-muted text-small">09:10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade h-100" id="secondFull" role="tabpanel" aria-labelledby="second-tab">
                    <div class="scroll">
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Sarah Kortney</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#">
                                            <p class="mb-0 truncate">Williemae Lagasse</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Tommy Nash</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Mayra Sibley</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-5.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Kathryn Mengel</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"></a>
                                <div class="d-flex flex-grow-1 min-width-zero">
                                    <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                        <div class="min-width-zero">
                                            <a href="#"><p class="mb-0 truncate">Williemae Lagasse</p></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#">
                                            <p class="mb-0 truncate">Tommy Nash</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Mayra Sibley</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Tommy Nash</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#"><p class="mb-0 truncate">Mayra Sibley</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-5.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"><div class="min-width-zero"><a href="#"><p class="mb-0 truncate">Kathryn Mengel</p></a></div></div></div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-2.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"></a>
                            <div class="d-flex flex-grow-1 min-width-zero"><div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"><div class="min-width-zero"><a href="#"><p class="mb-0 truncate">Williemae Lagasse</p></a></div></div></div>
                        </div>
                        <div class="d-flex flex-row mb-3 border-bottom pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-3.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                                <div class="d-flex flex-grow-1 min-width-zero">
                                    <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                        <div class="min-width-zero">
                                            <a href="#"><p class="mb-0 truncate">Tommy Nash</p></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="d-flex flex-row mb-3 pb-3">
                            <a class="d-flex" href="#">
                                <img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall">
                            </a>
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div class="min-width-zero">
                                        <a href="#">
                                            <p class="mb-0 truncate">Mayra Sibley</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="app-menu-button d-inline-block d-xl-none" href="#">
            <i class="simple-icon-options"></i>
        </a>
    </div>
    <div class="chat-input-container d-flex justify-content-between align-items-center">
        <button id="emoji-picker" class="btn btn-outline mr-2" type="button">
            <i class="glyph-icon simple-icon-emotsmile h3 mb-0"></i>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile width-15 height-15"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> -->
        </button>
        <!-- emojis dropdown -->
            <div class="intercom-composer-popover intercom-composer-emoji-popover">
                <div class="intercom-emoji-picker">
                    <div class="intercom-composer-popover-header">
                        <input class="intercom-composer-popover-input" placeholder="Search" value="">
                    </div>
                    <div class="intercom-composer-popover-body-container">
                        <div class="intercom-composer-popover-body">
                            <div class="intercom-emoji-picker-groups">
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">Frequently used</div>
                                    <span class="intercom-emoji-picker-emoji" title="thumbs_up">👍</span>
                                    <span class="intercom-emoji-picker-emoji" title="-1">👎</span>
                                    <span class="intercom-emoji-picker-emoji" title="sob">😭</span>
                                    <span class="intercom-emoji-picker-emoji" title="confused">😕</span>
                                    <span class="intercom-emoji-picker-emoji" title="neutral_face">😐</span>
                                    <span class="intercom-emoji-picker-emoji" title="blush">😊</span>
                                    <span class="intercom-emoji-picker-emoji" title="heart_eyes">😍</span>
                                </div>
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">People</div>
                                    <span class="intercom-emoji-picker-emoji" title="smile">😄</span><span class="intercom-emoji-picker-emoji" title="smiley">😃</span><span class="intercom-emoji-picker-emoji" title="grinning">😀</span><span class="intercom-emoji-picker-emoji" title="blush">😊</span><span class="intercom-emoji-picker-emoji" title="wink">😉</span><span class="intercom-emoji-picker-emoji" title="heart_eyes">😍</span><span class="intercom-emoji-picker-emoji" title="kissing_heart">😘</span><span class="intercom-emoji-picker-emoji" title="kissing_closed_eyes">😚</span><span class="intercom-emoji-picker-emoji" title="kissing">😗</span><span class="intercom-emoji-picker-emoji" title="kissing_smiling_eyes">😙</span><span class="intercom-emoji-picker-emoji" title="stuck_out_tongue_winking_eye">😜</span><span class="intercom-emoji-picker-emoji" title="stuck_out_tongue_closed_eyes">😝</span><span class="intercom-emoji-picker-emoji" title="stuck_out_tongue">😛</span><span class="intercom-emoji-picker-emoji" title="flushed">😳</span><span class="intercom-emoji-picker-emoji" title="grin">😁</span><span class="intercom-emoji-picker-emoji" title="pensive">😔</span><span class="intercom-emoji-picker-emoji" title="relieved">😌</span><span class="intercom-emoji-picker-emoji" title="unamused">😒</span><span class="intercom-emoji-picker-emoji" title="disappointed">😞</span><span class="intercom-emoji-picker-emoji" title="persevere">😣</span><span class="intercom-emoji-picker-emoji" title="cry">😢</span><span class="intercom-emoji-picker-emoji" title="joy">😂</span><span class="intercom-emoji-picker-emoji" title="sob">😭</span><span class="intercom-emoji-picker-emoji" title="sleepy">😪</span><span class="intercom-emoji-picker-emoji" title="disappointed_relieved">😥</span><span class="intercom-emoji-picker-emoji" title="cold_sweat">😰</span><span class="intercom-emoji-picker-emoji" title="sweat_smile">😅</span><span class="intercom-emoji-picker-emoji" title="sweat">😓</span><span class="intercom-emoji-picker-emoji" title="weary">😩</span><span class="intercom-emoji-picker-emoji" title="tired_face">😫</span><span class="intercom-emoji-picker-emoji" title="fearful">😨</span><span class="intercom-emoji-picker-emoji" title="scream">😱</span><span class="intercom-emoji-picker-emoji" title="angry">😠</span><span class="intercom-emoji-picker-emoji" title="rage">😡</span><span class="intercom-emoji-picker-emoji" title="triumph">😤</span><span class="intercom-emoji-picker-emoji" title="confounded">😖</span><span class="intercom-emoji-picker-emoji" title="laughing">😆</span><span class="intercom-emoji-picker-emoji" title="yum">😋</span><span class="intercom-emoji-picker-emoji" title="mask">😷</span><span class="intercom-emoji-picker-emoji" title="sunglasses">😎</span><span class="intercom-emoji-picker-emoji" title="sleeping">😴</span><span class="intercom-emoji-picker-emoji" title="dizzy_face">😵</span><span class="intercom-emoji-picker-emoji" title="astonished">😲</span><span class="intercom-emoji-picker-emoji" title="worried">😟</span><span class="intercom-emoji-picker-emoji" title="frowning">😦</span><span class="intercom-emoji-picker-emoji" title="anguished">😧</span><span class="intercom-emoji-picker-emoji" title="imp">👿</span><span class="intercom-emoji-picker-emoji" title="open_mouth">😮</span><span class="intercom-emoji-picker-emoji" title="grimacing">😬</span><span class="intercom-emoji-picker-emoji" title="neutral_face">😐</span><span class="intercom-emoji-picker-emoji" title="confused">😕</span><span class="intercom-emoji-picker-emoji" title="hushed">😯</span><span class="intercom-emoji-picker-emoji" title="smirk">😏</span><span class="intercom-emoji-picker-emoji" title="expressionless">😑</span><span class="intercom-emoji-picker-emoji" title="man_with_gua_pi_mao">👲</span><span class="intercom-emoji-picker-emoji" title="man_with_turban">👳</span><span class="intercom-emoji-picker-emoji" title="cop">👮</span><span class="intercom-emoji-picker-emoji" title="construction_worker">👷</span><span class="intercom-emoji-picker-emoji" title="guardsman">💂</span><span class="intercom-emoji-picker-emoji" title="baby">👶</span><span class="intercom-emoji-picker-emoji" title="boy">👦</span><span class="intercom-emoji-picker-emoji" title="girl">👧</span><span class="intercom-emoji-picker-emoji" title="man">👨</span><span class="intercom-emoji-picker-emoji" title="woman">👩</span><span class="intercom-emoji-picker-emoji" title="older_man">👴</span><span class="intercom-emoji-picker-emoji" title="older_woman">👵</span><span class="intercom-emoji-picker-emoji" title="person_with_blond_hair">👱</span><span class="intercom-emoji-picker-emoji" title="angel">👼</span><span class="intercom-emoji-picker-emoji" title="princess">👸</span><span class="intercom-emoji-picker-emoji" title="smiley_cat">😺</span><span class="intercom-emoji-picker-emoji" title="smile_cat">😸</span><span class="intercom-emoji-picker-emoji" title="heart_eyes_cat">😻</span><span class="intercom-emoji-picker-emoji" title="kissing_cat">😽</span><span class="intercom-emoji-picker-emoji" title="smirk_cat">😼</span><span class="intercom-emoji-picker-emoji" title="scream_cat">🙀</span><span class="intercom-emoji-picker-emoji" title="crying_cat_face">😿</span><span class="intercom-emoji-picker-emoji" title="joy_cat">😹</span><span class="intercom-emoji-picker-emoji" title="pouting_cat">😾</span><span class="intercom-emoji-picker-emoji" title="japanese_ogre">👹</span><span class="intercom-emoji-picker-emoji" title="japanese_goblin">👺</span><span class="intercom-emoji-picker-emoji" title="see_no_evil">🙈</span><span class="intercom-emoji-picker-emoji" title="hear_no_evil">🙉</span><span class="intercom-emoji-picker-emoji" title="speak_no_evil">🙊</span><span class="intercom-emoji-picker-emoji" title="skull">💀</span><span class="intercom-emoji-picker-emoji" title="alien">👽</span><span class="intercom-emoji-picker-emoji" title="hankey">💩</span><span class="intercom-emoji-picker-emoji" title="fire">🔥</span><span class="intercom-emoji-picker-emoji" title="sparkles">✨</span><span class="intercom-emoji-picker-emoji" title="star2">🌟</span><span class="intercom-emoji-picker-emoji" title="dizzy">💫</span><span class="intercom-emoji-picker-emoji" title="boom">💥</span><span class="intercom-emoji-picker-emoji" title="anger">💢</span><span class="intercom-emoji-picker-emoji" title="sweat_drops">💦</span><span class="intercom-emoji-picker-emoji" title="droplet">💧</span><span class="intercom-emoji-picker-emoji" title="zzz">💤</span><span class="intercom-emoji-picker-emoji" title="dash">💨</span><span class="intercom-emoji-picker-emoji" title="ear">👂</span><span class="intercom-emoji-picker-emoji" title="eyes">👀</span><span class="intercom-emoji-picker-emoji" title="nose">👃</span><span class="intercom-emoji-picker-emoji" title="tongue">👅</span><span class="intercom-emoji-picker-emoji" title="lips">👄</span><span class="intercom-emoji-picker-emoji" title="thumbs_up">👍</span><span class="intercom-emoji-picker-emoji" title="-1">👎</span><span class="intercom-emoji-picker-emoji" title="ok_hand">👌</span><span class="intercom-emoji-picker-emoji" title="facepunch">👊</span><span class="intercom-emoji-picker-emoji" title="fist">✊</span><span class="intercom-emoji-picker-emoji" title="wave">👋</span><span class="intercom-emoji-picker-emoji" title="hand">✋</span><span class="intercom-emoji-picker-emoji" title="open_hands">👐</span><span class="intercom-emoji-picker-emoji" title="point_up_2">👆</span><span class="intercom-emoji-picker-emoji" title="point_down">👇</span><span class="intercom-emoji-picker-emoji" title="point_right">👉</span><span class="intercom-emoji-picker-emoji" title="point_left">👈</span><span class="intercom-emoji-picker-emoji" title="raised_hands">🙌</span><span class="intercom-emoji-picker-emoji" title="pray">🙏</span><span class="intercom-emoji-picker-emoji" title="clap">👏</span><span class="intercom-emoji-picker-emoji" title="muscle">💪</span><span class="intercom-emoji-picker-emoji" title="walking">🚶</span><span class="intercom-emoji-picker-emoji" title="runner">🏃</span><span class="intercom-emoji-picker-emoji" title="dancer">💃</span><span class="intercom-emoji-picker-emoji" title="couple">👫</span><span class="intercom-emoji-picker-emoji" title="family">👪</span><span class="intercom-emoji-picker-emoji" title="couplekiss">💏</span><span class="intercom-emoji-picker-emoji" title="couple_with_heart">💑</span><span class="intercom-emoji-picker-emoji" title="dancers">👯</span><span class="intercom-emoji-picker-emoji" title="ok_woman">🙆</span><span class="intercom-emoji-picker-emoji" title="no_good">🙅</span><span class="intercom-emoji-picker-emoji" title="information_desk_person">💁</span><span class="intercom-emoji-picker-emoji" title="raising_hand">🙋</span><span class="intercom-emoji-picker-emoji" title="massage">💆</span><span class="intercom-emoji-picker-emoji" title="haircut">💇</span><span class="intercom-emoji-picker-emoji" title="nail_care">💅</span><span class="intercom-emoji-picker-emoji" title="bride_with_veil">👰</span><span class="intercom-emoji-picker-emoji" title="person_with_pouting_face">🙎</span><span class="intercom-emoji-picker-emoji" title="person_frowning">🙍</span><span class="intercom-emoji-picker-emoji" title="bow">🙇</span><span class="intercom-emoji-picker-emoji" title="tophat">🎩</span><span class="intercom-emoji-picker-emoji" title="crown">👑</span><span class="intercom-emoji-picker-emoji" title="womans_hat">👒</span><span class="intercom-emoji-picker-emoji" title="athletic_shoe">👟</span><span class="intercom-emoji-picker-emoji" title="mans_shoe">👞</span><span class="intercom-emoji-picker-emoji" title="sandal">👡</span><span class="intercom-emoji-picker-emoji" title="high_heel">👠</span><span class="intercom-emoji-picker-emoji" title="boot">👢</span><span class="intercom-emoji-picker-emoji" title="shirt">👕</span><span class="intercom-emoji-picker-emoji" title="necktie">👔</span><span class="intercom-emoji-picker-emoji" title="womans_clothes">👚</span><span class="intercom-emoji-picker-emoji" title="dress">👗</span><span class="intercom-emoji-picker-emoji" title="running_shirt_with_sash">🎽</span><span class="intercom-emoji-picker-emoji" title="jeans">👖</span><span class="intercom-emoji-picker-emoji" title="kimono">👘</span><span class="intercom-emoji-picker-emoji" title="bikini">👙</span><span class="intercom-emoji-picker-emoji" title="briefcase">💼</span><span class="intercom-emoji-picker-emoji" title="handbag">👜</span><span class="intercom-emoji-picker-emoji" title="pouch">👝</span><span class="intercom-emoji-picker-emoji" title="purse">👛</span><span class="intercom-emoji-picker-emoji" title="eyeglasses">👓</span><span class="intercom-emoji-picker-emoji" title="ribbon">🎀</span><span class="intercom-emoji-picker-emoji" title="closed_umbrella">🌂</span><span class="intercom-emoji-picker-emoji" title="lipstick">💄</span><span class="intercom-emoji-picker-emoji" title="yellow_heart">💛</span><span class="intercom-emoji-picker-emoji" title="blue_heart">💙</span><span class="intercom-emoji-picker-emoji" title="purple_heart">💜</span><span class="intercom-emoji-picker-emoji" title="green_heart">💚</span><span class="intercom-emoji-picker-emoji" title="broken_heart">💔</span><span class="intercom-emoji-picker-emoji" title="heartpulse">💗</span><span class="intercom-emoji-picker-emoji" title="heartbeat">💓</span><span class="intercom-emoji-picker-emoji" title="two_hearts">💕</span><span class="intercom-emoji-picker-emoji" title="sparkling_heart">💖</span><span class="intercom-emoji-picker-emoji" title="revolving_hearts">💞</span><span class="intercom-emoji-picker-emoji" title="cupid">💘</span><span class="intercom-emoji-picker-emoji" title="love_letter">💌</span><span class="intercom-emoji-picker-emoji" title="kiss">💋</span><span class="intercom-emoji-picker-emoji" title="ring">💍</span><span class="intercom-emoji-picker-emoji" title="gem">💎</span><span class="intercom-emoji-picker-emoji" title="bust_in_silhouette">👤</span><span class="intercom-emoji-picker-emoji" title="speech_balloon">💬</span><span class="intercom-emoji-picker-emoji" title="footprints">👣</span>
                                </div>
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">Nature</div>
                                    <span class="intercom-emoji-picker-emoji" title="dog">🐶</span><span class="intercom-emoji-picker-emoji" title="wolf">🐺</span><span class="intercom-emoji-picker-emoji" title="cat">🐱</span><span class="intercom-emoji-picker-emoji" title="mouse">🐭</span><span class="intercom-emoji-picker-emoji" title="hamster">🐹</span><span class="intercom-emoji-picker-emoji" title="rabbit">🐰</span><span class="intercom-emoji-picker-emoji" title="frog">🐸</span><span class="intercom-emoji-picker-emoji" title="tiger">🐯</span><span class="intercom-emoji-picker-emoji" title="koala">🐨</span><span class="intercom-emoji-picker-emoji" title="bear">🐻</span><span class="intercom-emoji-picker-emoji" title="pig">🐷</span><span class="intercom-emoji-picker-emoji" title="pig_nose">🐽</span><span class="intercom-emoji-picker-emoji" title="cow">🐮</span><span class="intercom-emoji-picker-emoji" title="boar">🐗</span><span class="intercom-emoji-picker-emoji" title="monkey_face">🐵</span><span class="intercom-emoji-picker-emoji" title="monkey">🐒</span><span class="intercom-emoji-picker-emoji" title="horse">🐴</span><span class="intercom-emoji-picker-emoji" title="sheep">🐑</span><span class="intercom-emoji-picker-emoji" title="elephant">🐘</span><span class="intercom-emoji-picker-emoji" title="panda_face">🐼</span><span class="intercom-emoji-picker-emoji" title="penguin">🐧</span><span class="intercom-emoji-picker-emoji" title="bird">🐦</span><span class="intercom-emoji-picker-emoji" title="baby_chick">🐤</span><span class="intercom-emoji-picker-emoji" title="hatched_chick">🐥</span><span class="intercom-emoji-picker-emoji" title="hatching_chick">🐣</span><span class="intercom-emoji-picker-emoji" title="chicken">🐔</span><span class="intercom-emoji-picker-emoji" title="snake">🐍</span><span class="intercom-emoji-picker-emoji" title="turtle">🐢</span><span class="intercom-emoji-picker-emoji" title="bug">🐛</span><span class="intercom-emoji-picker-emoji" title="bee">🐝</span><span class="intercom-emoji-picker-emoji" title="ant">🐜</span><span class="intercom-emoji-picker-emoji" title="beetle">🐞</span><span class="intercom-emoji-picker-emoji" title="snail">🐌</span><span class="intercom-emoji-picker-emoji" title="octopus">🐙</span><span class="intercom-emoji-picker-emoji" title="shell">🐚</span><span class="intercom-emoji-picker-emoji" title="tropical_fish">🐠</span><span class="intercom-emoji-picker-emoji" title="fish">🐟</span><span class="intercom-emoji-picker-emoji" title="dolphin">🐬</span><span class="intercom-emoji-picker-emoji" title="whale">🐳</span><span class="intercom-emoji-picker-emoji" title="racehorse">🐎</span><span class="intercom-emoji-picker-emoji" title="dragon_face">🐲</span><span class="intercom-emoji-picker-emoji" title="blowfish">🐡</span><span class="intercom-emoji-picker-emoji" title="camel">🐫</span><span class="intercom-emoji-picker-emoji" title="poodle">🐩</span><span class="intercom-emoji-picker-emoji" title="feet">🐾</span><span class="intercom-emoji-picker-emoji" title="bouquet">💐</span><span class="intercom-emoji-picker-emoji" title="cherry_blossom">🌸</span><span class="intercom-emoji-picker-emoji" title="tulip">🌷</span><span class="intercom-emoji-picker-emoji" title="four_leaf_clover">🍀</span><span class="intercom-emoji-picker-emoji" title="rose">🌹</span><span class="intercom-emoji-picker-emoji" title="sunflower">🌻</span><span class="intercom-emoji-picker-emoji" title="hibiscus">🌺</span><span class="intercom-emoji-picker-emoji" title="maple_leaf">🍁</span><span class="intercom-emoji-picker-emoji" title="leaves">🍃</span><span class="intercom-emoji-picker-emoji" title="fallen_leaf">🍂</span><span class="intercom-emoji-picker-emoji" title="herb">🌿</span><span class="intercom-emoji-picker-emoji" title="ear_of_rice">🌾</span><span class="intercom-emoji-picker-emoji" title="mushroom">🍄</span><span class="intercom-emoji-picker-emoji" title="cactus">🌵</span><span class="intercom-emoji-picker-emoji" title="palm_tree">🌴</span><span class="intercom-emoji-picker-emoji" title="chestnut">🌰</span><span class="intercom-emoji-picker-emoji" title="seedling">🌱</span><span class="intercom-emoji-picker-emoji" title="blossom">🌼</span><span class="intercom-emoji-picker-emoji" title="new_moon">🌑</span><span class="intercom-emoji-picker-emoji" title="first_quarter_moon">🌓</span><span class="intercom-emoji-picker-emoji" title="moon">🌔</span><span class="intercom-emoji-picker-emoji" title="full_moon">🌕</span><span class="intercom-emoji-picker-emoji" title="first_quarter_moon_with_face">🌛</span><span class="intercom-emoji-picker-emoji" title="crescent_moon">🌙</span><span class="intercom-emoji-picker-emoji" title="earth_asia">🌏</span><span class="intercom-emoji-picker-emoji" title="volcano">🌋</span><span class="intercom-emoji-picker-emoji" title="milky_way">🌌</span><span class="intercom-emoji-picker-emoji" title="stars">🌠</span><span class="intercom-emoji-picker-emoji" title="partly_sunny">⛅</span><span class="intercom-emoji-picker-emoji" title="snowman">⛄</span><span class="intercom-emoji-picker-emoji" title="cyclone">🌀</span><span class="intercom-emoji-picker-emoji" title="foggy">🌁</span><span class="intercom-emoji-picker-emoji" title="rainbow">🌈</span><span class="intercom-emoji-picker-emoji" title="ocean">🌊</span>
                                </div>
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">Objects</div>
                                    <span class="intercom-emoji-picker-emoji" title="bamboo">🎍</span><span class="intercom-emoji-picker-emoji" title="gift_heart">💝</span><span class="intercom-emoji-picker-emoji" title="dolls">🎎</span><span class="intercom-emoji-picker-emoji" title="school_satchel">🎒</span><span class="intercom-emoji-picker-emoji" title="mortar_board">🎓</span><span class="intercom-emoji-picker-emoji" title="flags">🎏</span><span class="intercom-emoji-picker-emoji" title="fireworks">🎆</span><span class="intercom-emoji-picker-emoji" title="sparkler">🎇</span><span class="intercom-emoji-picker-emoji" title="wind_chime">🎐</span><span class="intercom-emoji-picker-emoji" title="rice_scene">🎑</span><span class="intercom-emoji-picker-emoji" title="jack_o_lantern">🎃</span><span class="intercom-emoji-picker-emoji" title="ghost">👻</span><span class="intercom-emoji-picker-emoji" title="santa">🎅</span><span class="intercom-emoji-picker-emoji" title="christmas_tree">🎄</span><span class="intercom-emoji-picker-emoji" title="gift">🎁</span><span class="intercom-emoji-picker-emoji" title="tanabata_tree">🎋</span><span class="intercom-emoji-picker-emoji" title="tada">🎉</span><span class="intercom-emoji-picker-emoji" title="confetti_ball">🎊</span><span class="intercom-emoji-picker-emoji" title="balloon">🎈</span><span class="intercom-emoji-picker-emoji" title="crossed_flags">🎌</span><span class="intercom-emoji-picker-emoji" title="crystal_ball">🔮</span><span class="intercom-emoji-picker-emoji" title="movie_camera">🎥</span><span class="intercom-emoji-picker-emoji" title="camera">📷</span><span class="intercom-emoji-picker-emoji" title="video_camera">📹</span><span class="intercom-emoji-picker-emoji" title="vhs">📼</span><span class="intercom-emoji-picker-emoji" title="cd">💿</span><span class="intercom-emoji-picker-emoji" title="dvd">📀</span><span class="intercom-emoji-picker-emoji" title="minidisc">💽</span><span class="intercom-emoji-picker-emoji" title="floppy_disk">💾</span><span class="intercom-emoji-picker-emoji" title="computer">💻</span><span class="intercom-emoji-picker-emoji" title="iphone">📱</span><span class="intercom-emoji-picker-emoji" title="telephone_receiver">📞</span><span class="intercom-emoji-picker-emoji" title="pager">📟</span><span class="intercom-emoji-picker-emoji" title="fax">📠</span><span class="intercom-emoji-picker-emoji" title="satellite">📡</span><span class="intercom-emoji-picker-emoji" title="tv">📺</span><span class="intercom-emoji-picker-emoji" title="radio">📻</span><span class="intercom-emoji-picker-emoji" title="loud_sound">🔊</span><span class="intercom-emoji-picker-emoji" title="bell">🔔</span><span class="intercom-emoji-picker-emoji" title="loudspeaker">📢</span><span class="intercom-emoji-picker-emoji" title="mega">📣</span><span class="intercom-emoji-picker-emoji" title="hourglass_flowing_sand">⏳</span><span class="intercom-emoji-picker-emoji" title="hourglass">⌛</span><span class="intercom-emoji-picker-emoji" title="alarm_clock">⏰</span><span class="intercom-emoji-picker-emoji" title="watch">⌚</span><span class="intercom-emoji-picker-emoji" title="unlock">🔓</span><span class="intercom-emoji-picker-emoji" title="lock">🔒</span><span class="intercom-emoji-picker-emoji" title="lock_with_ink_pen">🔏</span><span class="intercom-emoji-picker-emoji" title="closed_lock_with_key">🔐</span><span class="intercom-emoji-picker-emoji" title="key">🔑</span><span class="intercom-emoji-picker-emoji" title="mag_right">🔎</span><span class="intercom-emoji-picker-emoji" title="bulb">💡</span><span class="intercom-emoji-picker-emoji" title="flashlight">🔦</span><span class="intercom-emoji-picker-emoji" title="electric_plug">🔌</span><span class="intercom-emoji-picker-emoji" title="battery">🔋</span><span class="intercom-emoji-picker-emoji" title="mag">🔍</span><span class="intercom-emoji-picker-emoji" title="bath">🛀</span><span class="intercom-emoji-picker-emoji" title="toilet">🚽</span><span class="intercom-emoji-picker-emoji" title="wrench">🔧</span><span class="intercom-emoji-picker-emoji" title="nut_and_bolt">🔩</span><span class="intercom-emoji-picker-emoji" title="hammer">🔨</span><span class="intercom-emoji-picker-emoji" title="door">🚪</span><span class="intercom-emoji-picker-emoji" title="smoking">🚬</span><span class="intercom-emoji-picker-emoji" title="bomb">💣</span><span class="intercom-emoji-picker-emoji" title="gun">🔫</span><span class="intercom-emoji-picker-emoji" title="hocho">🔪</span><span class="intercom-emoji-picker-emoji" title="pill">💊</span><span class="intercom-emoji-picker-emoji" title="syringe">💉</span><span class="intercom-emoji-picker-emoji" title="moneybag">💰</span><span class="intercom-emoji-picker-emoji" title="yen">💴</span><span class="intercom-emoji-picker-emoji" title="dollar">💵</span><span class="intercom-emoji-picker-emoji" title="credit_card">💳</span><span class="intercom-emoji-picker-emoji" title="money_with_wings">💸</span><span class="intercom-emoji-picker-emoji" title="calling">📲</span><span class="intercom-emoji-picker-emoji" title="e-mail">📧</span><span class="intercom-emoji-picker-emoji" title="inbox_tray">📥</span><span class="intercom-emoji-picker-emoji" title="outbox_tray">📤</span><span class="intercom-emoji-picker-emoji" title="envelope_with_arrow">📩</span><span class="intercom-emoji-picker-emoji" title="incoming_envelope">📨</span><span class="intercom-emoji-picker-emoji" title="mailbox">📫</span><span class="intercom-emoji-picker-emoji" title="mailbox_closed">📪</span><span class="intercom-emoji-picker-emoji" title="postbox">📮</span><span class="intercom-emoji-picker-emoji" title="package">📦</span><span class="intercom-emoji-picker-emoji" title="memo">📝</span><span class="intercom-emoji-picker-emoji" title="page_facing_up">📄</span><span class="intercom-emoji-picker-emoji" title="page_with_curl">📃</span><span class="intercom-emoji-picker-emoji" title="bookmark_tabs">📑</span><span class="intercom-emoji-picker-emoji" title="bar_chart">📊</span><span class="intercom-emoji-picker-emoji" title="chart_with_upwards_trend">📈</span><span class="intercom-emoji-picker-emoji" title="chart_with_downwards_trend">📉</span><span class="intercom-emoji-picker-emoji" title="scroll">📜</span><span class="intercom-emoji-picker-emoji" title="clipboard">📋</span><span class="intercom-emoji-picker-emoji" title="date">📅</span><span class="intercom-emoji-picker-emoji" title="calendar">📆</span><span class="intercom-emoji-picker-emoji" title="card_index">📇</span><span class="intercom-emoji-picker-emoji" title="file_folder">📁</span><span class="intercom-emoji-picker-emoji" title="open_file_folder">📂</span><span class="intercom-emoji-picker-emoji" title="pushpin">📌</span><span class="intercom-emoji-picker-emoji" title="paperclip">📎</span><span class="intercom-emoji-picker-emoji" title="straight_ruler">📏</span><span class="intercom-emoji-picker-emoji" title="triangular_ruler">📐</span><span class="intercom-emoji-picker-emoji" title="closed_book">📕</span><span class="intercom-emoji-picker-emoji" title="green_book">📗</span><span class="intercom-emoji-picker-emoji" title="blue_book">📘</span><span class="intercom-emoji-picker-emoji" title="orange_book">📙</span><span class="intercom-emoji-picker-emoji" title="notebook">📓</span><span class="intercom-emoji-picker-emoji" title="notebook_with_decorative_cover">📔</span><span class="intercom-emoji-picker-emoji" title="ledger">📒</span><span class="intercom-emoji-picker-emoji" title="books">📚</span><span class="intercom-emoji-picker-emoji" title="book">📖</span><span class="intercom-emoji-picker-emoji" title="bookmark">🔖</span><span class="intercom-emoji-picker-emoji" title="name_badge">📛</span><span class="intercom-emoji-picker-emoji" title="newspaper">📰</span><span class="intercom-emoji-picker-emoji" title="art">🎨</span><span class="intercom-emoji-picker-emoji" title="clapper">🎬</span><span class="intercom-emoji-picker-emoji" title="microphone">🎤</span><span class="intercom-emoji-picker-emoji" title="headphones">🎧</span><span class="intercom-emoji-picker-emoji" title="musical_score">🎼</span><span class="intercom-emoji-picker-emoji" title="musical_note">🎵</span><span class="intercom-emoji-picker-emoji" title="notes">🎶</span><span class="intercom-emoji-picker-emoji" title="musical_keyboard">🎹</span><span class="intercom-emoji-picker-emoji" title="violin">🎻</span><span class="intercom-emoji-picker-emoji" title="trumpet">🎺</span><span class="intercom-emoji-picker-emoji" title="saxophone">🎷</span><span class="intercom-emoji-picker-emoji" title="guitar">🎸</span><span class="intercom-emoji-picker-emoji" title="space_invader">👾</span><span class="intercom-emoji-picker-emoji" title="video_game">🎮</span><span class="intercom-emoji-picker-emoji" title="black_joker">🃏</span><span class="intercom-emoji-picker-emoji" title="flower_playing_cards">🎴</span><span class="intercom-emoji-picker-emoji" title="mahjong">🀄</span><span class="intercom-emoji-picker-emoji" title="game_die">🎲</span><span class="intercom-emoji-picker-emoji" title="dart">🎯</span><span class="intercom-emoji-picker-emoji" title="football">🏈</span><span class="intercom-emoji-picker-emoji" title="basketball">🏀</span><span class="intercom-emoji-picker-emoji" title="soccer">⚽</span><span class="intercom-emoji-picker-emoji" title="baseball">⚾</span><span class="intercom-emoji-picker-emoji" title="tennis">🎾</span><span class="intercom-emoji-picker-emoji" title="8ball">🎱</span><span class="intercom-emoji-picker-emoji" title="bowling">🎳</span><span class="intercom-emoji-picker-emoji" title="golf">⛳</span><span class="intercom-emoji-picker-emoji" title="checkered_flag">🏁</span><span class="intercom-emoji-picker-emoji" title="trophy">🏆</span><span class="intercom-emoji-picker-emoji" title="ski">🎿</span><span class="intercom-emoji-picker-emoji" title="snowboarder">🏂</span><span class="intercom-emoji-picker-emoji" title="swimmer">🏊</span><span class="intercom-emoji-picker-emoji" title="surfer">🏄</span><span class="intercom-emoji-picker-emoji" title="fishing_pole_and_fish">🎣</span><span class="intercom-emoji-picker-emoji" title="tea">🍵</span><span class="intercom-emoji-picker-emoji" title="sake">🍶</span><span class="intercom-emoji-picker-emoji" title="beer">🍺</span><span class="intercom-emoji-picker-emoji" title="beers">🍻</span><span class="intercom-emoji-picker-emoji" title="cocktail">🍸</span><span class="intercom-emoji-picker-emoji" title="tropical_drink">🍹</span><span class="intercom-emoji-picker-emoji" title="wine_glass">🍷</span><span class="intercom-emoji-picker-emoji" title="fork_and_knife">🍴</span><span class="intercom-emoji-picker-emoji" title="pizza">🍕</span><span class="intercom-emoji-picker-emoji" title="hamburger">🍔</span><span class="intercom-emoji-picker-emoji" title="fries">🍟</span><span class="intercom-emoji-picker-emoji" title="poultry_leg">🍗</span><span class="intercom-emoji-picker-emoji" title="meat_on_bone">🍖</span><span class="intercom-emoji-picker-emoji" title="spaghetti">🍝</span><span class="intercom-emoji-picker-emoji" title="curry">🍛</span><span class="intercom-emoji-picker-emoji" title="fried_shrimp">🍤</span><span class="intercom-emoji-picker-emoji" title="bento">🍱</span><span class="intercom-emoji-picker-emoji" title="sushi">🍣</span><span class="intercom-emoji-picker-emoji" title="fish_cake">🍥</span><span class="intercom-emoji-picker-emoji" title="rice_ball">🍙</span><span class="intercom-emoji-picker-emoji" title="rice_cracker">🍘</span><span class="intercom-emoji-picker-emoji" title="rice">🍚</span><span class="intercom-emoji-picker-emoji" title="ramen">🍜</span><span class="intercom-emoji-picker-emoji" title="stew">🍲</span><span class="intercom-emoji-picker-emoji" title="oden">🍢</span><span class="intercom-emoji-picker-emoji" title="dango">🍡</span><span class="intercom-emoji-picker-emoji" title="egg">🍳</span><span class="intercom-emoji-picker-emoji" title="bread">🍞</span><span class="intercom-emoji-picker-emoji" title="doughnut">🍩</span><span class="intercom-emoji-picker-emoji" title="custard">🍮</span><span class="intercom-emoji-picker-emoji" title="icecream">🍦</span><span class="intercom-emoji-picker-emoji" title="ice_cream">🍨</span><span class="intercom-emoji-picker-emoji" title="shaved_ice">🍧</span><span class="intercom-emoji-picker-emoji" title="birthday">🎂</span><span class="intercom-emoji-picker-emoji" title="cake">🍰</span><span class="intercom-emoji-picker-emoji" title="cookie">🍪</span><span class="intercom-emoji-picker-emoji" title="chocolate_bar">🍫</span><span class="intercom-emoji-picker-emoji" title="candy">🍬</span><span class="intercom-emoji-picker-emoji" title="lollipop">🍭</span><span class="intercom-emoji-picker-emoji" title="honey_pot">🍯</span><span class="intercom-emoji-picker-emoji" title="apple">🍎</span><span class="intercom-emoji-picker-emoji" title="green_apple">🍏</span><span class="intercom-emoji-picker-emoji" title="tangerine">🍊</span><span class="intercom-emoji-picker-emoji" title="cherries">🍒</span><span class="intercom-emoji-picker-emoji" title="grapes">🍇</span><span class="intercom-emoji-picker-emoji" title="watermelon">🍉</span><span class="intercom-emoji-picker-emoji" title="strawberry">🍓</span><span class="intercom-emoji-picker-emoji" title="peach">🍑</span><span class="intercom-emoji-picker-emoji" title="melon">🍈</span><span class="intercom-emoji-picker-emoji" title="banana">🍌</span><span class="intercom-emoji-picker-emoji" title="pineapple">🍍</span><span class="intercom-emoji-picker-emoji" title="sweet_potato">🍠</span><span class="intercom-emoji-picker-emoji" title="eggplant">🍆</span><span class="intercom-emoji-picker-emoji" title="tomato">🍅</span><span class="intercom-emoji-picker-emoji" title="corn">🌽</span>
                                </div>
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">Places</div>
                                    <span class="intercom-emoji-picker-emoji" title="house">🏠</span><span class="intercom-emoji-picker-emoji" title="house_with_garden">🏡</span><span class="intercom-emoji-picker-emoji" title="school">🏫</span><span class="intercom-emoji-picker-emoji" title="office">🏢</span><span class="intercom-emoji-picker-emoji" title="post_office">🏣</span><span class="intercom-emoji-picker-emoji" title="hospital">🏥</span><span class="intercom-emoji-picker-emoji" title="bank">🏦</span><span class="intercom-emoji-picker-emoji" title="convenience_store">🏪</span><span class="intercom-emoji-picker-emoji" title="love_hotel">🏩</span><span class="intercom-emoji-picker-emoji" title="hotel">🏨</span><span class="intercom-emoji-picker-emoji" title="wedding">💒</span><span class="intercom-emoji-picker-emoji" title="church">⛪</span><span class="intercom-emoji-picker-emoji" title="department_store">🏬</span><span class="intercom-emoji-picker-emoji" title="city_sunrise">🌇</span><span class="intercom-emoji-picker-emoji" title="city_sunset">🌆</span><span class="intercom-emoji-picker-emoji" title="japanese_castle">🏯</span><span class="intercom-emoji-picker-emoji" title="european_castle">🏰</span><span class="intercom-emoji-picker-emoji" title="tent">⛺</span><span class="intercom-emoji-picker-emoji" title="factory">🏭</span><span class="intercom-emoji-picker-emoji" title="tokyo_tower">🗼</span><span class="intercom-emoji-picker-emoji" title="japan">🗾</span><span class="intercom-emoji-picker-emoji" title="mount_fuji">🗻</span><span class="intercom-emoji-picker-emoji" title="sunrise_over_mountains">🌄</span><span class="intercom-emoji-picker-emoji" title="sunrise">🌅</span><span class="intercom-emoji-picker-emoji" title="night_with_stars">🌃</span><span class="intercom-emoji-picker-emoji" title="statue_of_liberty">🗽</span><span class="intercom-emoji-picker-emoji" title="bridge_at_night">🌉</span><span class="intercom-emoji-picker-emoji" title="carousel_horse">🎠</span><span class="intercom-emoji-picker-emoji" title="ferris_wheel">🎡</span><span class="intercom-emoji-picker-emoji" title="fountain">⛲</span><span class="intercom-emoji-picker-emoji" title="roller_coaster">🎢</span><span class="intercom-emoji-picker-emoji" title="ship">🚢</span><span class="intercom-emoji-picker-emoji" title="boat">⛵</span><span class="intercom-emoji-picker-emoji" title="speedboat">🚤</span><span class="intercom-emoji-picker-emoji" title="rocket">🚀</span><span class="intercom-emoji-picker-emoji" title="seat">💺</span><span class="intercom-emoji-picker-emoji" title="station">🚉</span><span class="intercom-emoji-picker-emoji" title="bullettrain_side">🚄</span><span class="intercom-emoji-picker-emoji" title="bullettrain_front">🚅</span><span class="intercom-emoji-picker-emoji" title="metro">🚇</span><span class="intercom-emoji-picker-emoji" title="railway_car">🚃</span><span class="intercom-emoji-picker-emoji" title="bus">🚌</span><span class="intercom-emoji-picker-emoji" title="blue_car">🚙</span><span class="intercom-emoji-picker-emoji" title="car">🚗</span><span class="intercom-emoji-picker-emoji" title="taxi">🚕</span><span class="intercom-emoji-picker-emoji" title="truck">🚚</span><span class="intercom-emoji-picker-emoji" title="rotating_light">🚨</span><span class="intercom-emoji-picker-emoji" title="police_car">🚓</span><span class="intercom-emoji-picker-emoji" title="fire_engine">🚒</span><span class="intercom-emoji-picker-emoji" title="ambulance">🚑</span><span class="intercom-emoji-picker-emoji" title="bike">🚲</span><span class="intercom-emoji-picker-emoji" title="barber">💈</span><span class="intercom-emoji-picker-emoji" title="busstop">🚏</span><span class="intercom-emoji-picker-emoji" title="ticket">🎫</span><span class="intercom-emoji-picker-emoji" title="traffic_light">🚥</span><span class="intercom-emoji-picker-emoji" title="construction">🚧</span><span class="intercom-emoji-picker-emoji" title="beginner">🔰</span><span class="intercom-emoji-picker-emoji" title="fuelpump">⛽</span><span class="intercom-emoji-picker-emoji" title="izakaya_lantern">🏮</span><span class="intercom-emoji-picker-emoji" title="slot_machine">🎰</span><span class="intercom-emoji-picker-emoji" title="moyai">🗿</span><span class="intercom-emoji-picker-emoji" title="circus_tent">🎪</span><span class="intercom-emoji-picker-emoji" title="performing_arts">🎭</span><span class="intercom-emoji-picker-emoji" title="round_pushpin">📍</span><span class="intercom-emoji-picker-emoji" title="triangular_flag_on_post">🚩</span>
                                </div>
                                <div class="intercom-emoji-picker-group">
                                    <div class="intercom-emoji-picker-group-title">Symbols</div>
                                    <span class="intercom-emoji-picker-emoji" title="keycap_ten">🔟</span><span class="intercom-emoji-picker-emoji" title="1234">🔢</span><span class="intercom-emoji-picker-emoji" title="symbols">🔣</span><span class="intercom-emoji-picker-emoji" title="capital_abcd">🔠</span><span class="intercom-emoji-picker-emoji" title="abcd">🔡</span><span class="intercom-emoji-picker-emoji" title="abc">🔤</span><span class="intercom-emoji-picker-emoji" title="arrow_up_small">🔼</span><span class="intercom-emoji-picker-emoji" title="arrow_down_small">🔽</span><span class="intercom-emoji-picker-emoji" title="rewind">⏪</span><span class="intercom-emoji-picker-emoji" title="fast_forward">⏩</span><span class="intercom-emoji-picker-emoji" title="arrow_double_up">⏫</span><span class="intercom-emoji-picker-emoji" title="arrow_double_down">⏬</span><span class="intercom-emoji-picker-emoji" title="ok">🆗</span><span class="intercom-emoji-picker-emoji" title="new">🆕</span><span class="intercom-emoji-picker-emoji" title="up">🆙</span><span class="intercom-emoji-picker-emoji" title="cool">🆒</span><span class="intercom-emoji-picker-emoji" title="free">🆓</span><span class="intercom-emoji-picker-emoji" title="ng">🆖</span><span class="intercom-emoji-picker-emoji" title="signal_strength">📶</span><span class="intercom-emoji-picker-emoji" title="cinema">🎦</span><span class="intercom-emoji-picker-emoji" title="koko">🈁</span><span class="intercom-emoji-picker-emoji" title="u6307">🈯</span><span class="intercom-emoji-picker-emoji" title="u7a7a">🈳</span><span class="intercom-emoji-picker-emoji" title="u6e80">🈵</span><span class="intercom-emoji-picker-emoji" title="u5408">🈴</span><span class="intercom-emoji-picker-emoji" title="u7981">🈲</span><span class="intercom-emoji-picker-emoji" title="ideograph_advantage">🉐</span><span class="intercom-emoji-picker-emoji" title="u5272">🈹</span><span class="intercom-emoji-picker-emoji" title="u55b6">🈺</span><span class="intercom-emoji-picker-emoji" title="u6709">🈶</span><span class="intercom-emoji-picker-emoji" title="u7121">🈚</span><span class="intercom-emoji-picker-emoji" title="restroom">🚻</span><span class="intercom-emoji-picker-emoji" title="mens">🚹</span><span class="intercom-emoji-picker-emoji" title="womens">🚺</span><span class="intercom-emoji-picker-emoji" title="baby_symbol">🚼</span><span class="intercom-emoji-picker-emoji" title="wc">🚾</span><span class="intercom-emoji-picker-emoji" title="no_smoking">🚭</span><span class="intercom-emoji-picker-emoji" title="u7533">🈸</span><span class="intercom-emoji-picker-emoji" title="accept">🉑</span><span class="intercom-emoji-picker-emoji" title="cl">🆑</span><span class="intercom-emoji-picker-emoji" title="sos">🆘</span><span class="intercom-emoji-picker-emoji" title="id">🆔</span><span class="intercom-emoji-picker-emoji" title="no_entry_sign">🚫</span><span class="intercom-emoji-picker-emoji" title="underage">🔞</span><span class="intercom-emoji-picker-emoji" title="no_entry">⛔</span><span class="intercom-emoji-picker-emoji" title="negative_squared_cross_mark">❎</span><span class="intercom-emoji-picker-emoji" title="white_check_mark">✅</span><span class="intercom-emoji-picker-emoji" title="heart_decoration">💟</span><span class="intercom-emoji-picker-emoji" title="vs">🆚</span><span class="intercom-emoji-picker-emoji" title="vibration_mode">📳</span><span class="intercom-emoji-picker-emoji" title="mobile_phone_off">📴</span><span class="intercom-emoji-picker-emoji" title="ab">🆎</span><span class="intercom-emoji-picker-emoji" title="diamond_shape_with_a_dot_inside">💠</span><span class="intercom-emoji-picker-emoji" title="ophiuchus">⛎</span><span class="intercom-emoji-picker-emoji" title="six_pointed_star">🔯</span><span class="intercom-emoji-picker-emoji" title="atm">🏧</span><span class="intercom-emoji-picker-emoji" title="chart">💹</span><span class="intercom-emoji-picker-emoji" title="heavy_dollar_sign">💲</span><span class="intercom-emoji-picker-emoji" title="currency_exchange">💱</span><span class="intercom-emoji-picker-emoji" title="x">❌</span><span class="intercom-emoji-picker-emoji" title="exclamation">❗</span><span class="intercom-emoji-picker-emoji" title="question">❓</span><span class="intercom-emoji-picker-emoji" title="grey_exclamation">❕</span><span class="intercom-emoji-picker-emoji" title="grey_question">❔</span><span class="intercom-emoji-picker-emoji" title="o">⭕</span><span class="intercom-emoji-picker-emoji" title="top">🔝</span><span class="intercom-emoji-picker-emoji" title="end">🔚</span><span class="intercom-emoji-picker-emoji" title="back">🔙</span><span class="intercom-emoji-picker-emoji" title="on">🔛</span><span class="intercom-emoji-picker-emoji" title="soon">🔜</span><span class="intercom-emoji-picker-emoji" title="arrows_clockwise">🔃</span><span class="intercom-emoji-picker-emoji" title="clock12">🕛</span><span class="intercom-emoji-picker-emoji" title="clock1">🕐</span><span class="intercom-emoji-picker-emoji" title="clock2">🕑</span><span class="intercom-emoji-picker-emoji" title="clock3">🕒</span><span class="intercom-emoji-picker-emoji" title="clock4">🕓</span><span class="intercom-emoji-picker-emoji" title="clock5">🕔</span><span class="intercom-emoji-picker-emoji" title="clock6">🕕</span><span class="intercom-emoji-picker-emoji" title="clock7">🕖</span><span class="intercom-emoji-picker-emoji" title="clock8">🕗</span><span class="intercom-emoji-picker-emoji" title="clock9">🕘</span><span class="intercom-emoji-picker-emoji" title="clock10">🕙</span><span class="intercom-emoji-picker-emoji" title="clock11">🕚</span><span class="intercom-emoji-picker-emoji" title="heavy_plus_sign">➕</span><span class="intercom-emoji-picker-emoji" title="heavy_minus_sign">➖</span><span class="intercom-emoji-picker-emoji" title="heavy_division_sign">➗</span><span class="intercom-emoji-picker-emoji" title="white_flower">💮</span><span class="intercom-emoji-picker-emoji" title="100">💯</span><span class="intercom-emoji-picker-emoji" title="radio_button">🔘</span><span class="intercom-emoji-picker-emoji" title="link">🔗</span><span class="intercom-emoji-picker-emoji" title="curly_loop">➰</span><span class="intercom-emoji-picker-emoji" title="trident">🔱</span><span class="intercom-emoji-picker-emoji" title="small_red_triangle">🔺</span><span class="intercom-emoji-picker-emoji" title="black_square_button">🔲</span><span class="intercom-emoji-picker-emoji" title="white_square_button">🔳</span><span class="intercom-emoji-picker-emoji" title="red_circle">🔴</span><span class="intercom-emoji-picker-emoji" title="large_blue_circle">🔵</span><span class="intercom-emoji-picker-emoji" title="small_red_triangle_down">🔻</span><span class="intercom-emoji-picker-emoji" title="white_large_square">⬜</span><span class="intercom-emoji-picker-emoji" title="black_large_square">⬛</span><span class="intercom-emoji-picker-emoji" title="large_orange_diamond">🔶</span><span class="intercom-emoji-picker-emoji" title="large_blue_diamond">🔷</span><span class="intercom-emoji-picker-emoji" title="small_orange_diamond">🔸</span><span class="intercom-emoji-picker-emoji" title="small_blue_diamond">🔹</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intercom-composer-popover-caret"></div>
            </div>
        <!-- emojis dropdown -->
        <input id="typetext" class="form-control flex-grow-1" type="text" placeholder="Say something..." onkeydown="sendMessage(this)">
            <!-- buttons -->
        <div>
            <div class="d-inline-flex dropup">
                <button type="button" class="btn btn-outline-primary icon-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="simple-icon-paper-clip"></i>
                </button>
                <div class="dropdown-menu " style="min-width: unset !important;">
                    <a class="dropdown-item" data-toggle="modal" data-target="#audioRecord"><i class="simple-icon-microphone h3"></i></a>
                    <a class="dropdown-item" href="#" id="startcamera"><i class="simple-icon-camera h3"></i></a>
                    <a class="dropdown-item" href="#"><i class="iconsminds-video-tripod h3"></i></a>
                    <a class="dropdown-item" href="#" id="upload_link"><i class="iconsminds-add-file h3"></i></a>
                    <input id="uploadfile" type="file" name="chatfile" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"/>
                  <!-- Dropdown menu links -->
                </div>
            </div>
            <button type="button" class="btn btn-primary icon-button">
                <i class="simple-icon-arrow-right"></i>
            </button>
        </div>

    </div>
</main>
<div class="modal fade" id="audioRecord" tabindex="-1" role="dialog" aria-labelledby="audioRecordLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">

                <div class="call-container">
                    <div class="current-user">
                        <i class="simple-icon-microphone h3"></i>
                    </div>
                    <h5 class="calling-user-name">
                        Click Record to begin recording<span class="calling">Recording...</span>
                    </h5>
                    <div id="controls">
                        <button id="recordButton" class="btn default">Record</button>
                        <button id="pauseButton" disabled class="btn default">Pause</button>
                        <button id="stopButton" disabled class="btn default">Stop</button>
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
                    <div class="current-user">
                        <img src="{{asset('img/profile-pic-l.jpg')}}" alt="Avatar">
                    </div>
                    <h5 class="calling-user-name">
                        Amy Hood <span class="calling">Video Recording...</span>
                    </h5>
                    <div class="calling-btns">
                        <button class="btn btn-danger" data-dismiss="modal">
                            <i class="fa fa-times"></i>
                        </button>
                        <button class="btn btn-success" style="padding:6px 2px 0px 0px;">
                            <i class="simple-icon-call-out"></i>
                        </button>
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

                <div class="call-container">

                    <h5 class="calling-user-name">
                         <span class="calling">Image Capturing...</span>
                    </h5>
                    <div id="my_camera1"></div>
                    <button id="takepicture" type='button' class="btn btn-primary mt-2" onClick="take_snapshot1()">Take Snapshot</button>
                    <input type="hidden" name="image1" id="image1">
                    <div>
                        <button type='button' class="retakepicture btn btn-warning mt-2" onClick="retake()">Retake Snapshot</button>
                        <button type="button" class="retakepicture btn btn-success mt-2" id="sendCapture">
                            <span>Send</span><i class="fa fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script src="{{asset('js/emoji.js')}}"></script>
<script>
    var invoice = @JSON($invoice->id);
    function sendMessage(e){

        if(event.key === 'Enter' && e.value != ''){
            $.ajax({
                type:'POST',
                url:'/chat/sendMessage',
                data:{
                    '_token' : $('meta[name="csrf-token"]').attr('content'),
                    'message': e.value,
                    'invoice': invoice,
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
    // let delay = 5000;
    // var count = 0;

    // let timerId = setTimeout(function request() {
    //     $.ajax({
    //         type:'POST',
    //             url:'/chat/getMessage',
    //             data:{
    //                 '_token' : $('meta[name="csrf-token"]').attr('content'),
    //                 'invoice': invoice,
    //             },
    //             success:function(data) {
    //                 if(data != 403)
    //                 $('#converse').append(data);
    //             },
    //             error: function (data, textStatus, errorThrown) {
    //             console.log(data);
    //             delay *= 2;
    //             },
    //     });
    // timerId = setTimeout(request, delay);

    // }, delay);
</script>
<script>
    $(function(){
        $("#upload_link").on('click', function(e){
            e.preventDefault();
            $("#uploadfile:hidden").trigger('click');
        });

        $('#uploadfile').change(function () {
            var formData = new FormData();
            formData.append('file', $('#uploadfile')[0].files[0]);
            formData.append('invoice', @JSON($invoice->id));
            $.ajax({
                type:'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url:'/chat/sendFile',
                data: formData,
                processData: false,  // tell jQuery not to process the data
                contentType: false,  // tell jQuery not to set contentType
                success:function(data) {
                    $("#typetext").val('');
                    $('#converse').append(data);
                },
                error: function (data, textStatus, errorThrown) {
                console.log(data);
                },
            });
            $('#uploadfile').val('');// set the value to empty of myfile control.
        });
    });
</script>
<script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js"></script>
<script src="{{asset('js/siterecord.js')}}"></script>
<script src="{{asset('js/webcam.min.js')}}"></script>
<script>
    Webcam.set({
        width: 320,
        height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    $('.retakepicture').hide();

    $('#startcamera').click(function(){
        $("#imageCapture").modal()
        Webcam.attach( '#my_camera1' );
    });



        function take_snapshot1() {
			// take snapshot and get image data
			Webcam.snap( function(data_uri) {
                // display results in page
                var raw_image_data = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
                $("#image1").val(raw_image_data);
				document.getElementById('my_camera1').innerHTML ='<img src="'+data_uri+'"/>';
			} );
            $('#takepicture').hide();
            $('.retakepicture').show();
        }

        function retake(){
            document.getElementById('my_camera1').innerHTML ='';
            Webcam.attach( '#my_camera1' );
            $('.retakepicture').hide();
            $('#takepicture').show();
        }

    $('#sendCapture').click(function(){
        var invoice = @JSON($invoice->id);
        var captured = $('#image1').val();
        $.ajax({
            type:'POST',
            url:'/pinvoice/public/chat/sendCaptured',
            data:{
                '_token' : $('meta[name="csrf-token"]').attr('content'),
                'captured': captured,
                'invoice': invoice,
            },
            success:function(data) {
                $('#converse').append(data);
            },
            error: function (data, textStatus, errorThrown) {
            console.log(data);
            },
        });
    });

</script>
@endpush
