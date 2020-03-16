@extends('layouts.user')
@section('head')

@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12" data-check-all="checkAll">
                <div class="mb-2">
                    <h1><i class="simple-icon-refresh heading-icon"></i> <span class="align-middle d-inline-block pt-1">Creating Wireframes</span></h1>
                    <div class="float-md-right">
                        <button type="button" class="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ACTIONS</button>
                        <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                    </div>
                </div>

                <div class="row">
                    {{-- <div class="col-lg-4 col-12 mb-4">
                        <div class="card mb-4">
                            <div class="position-absolute card-top-buttons">
                                <button class="btn btn-header-light icon-button"><i class="simple-icon-pencil"></i></button>
                            </div>
                            <div class="card-body">
                                <p class="list-item-heading mb-4">Summary</p>
                                <p class="text-muted text-small mb-2">Info</p>
                                <p class="mb-3">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly. If we are able to properly define a wireframe for our project, then we can share it with your entire.
                                    <br>
                                    <br>Development team and we can benefit from their feedback and ideas and work towards refining our final product.</p>
                                <p class="text-muted text-small mb-2">Date</p>
                                <p class="mb-3">12.05.2018 - 18.05.2018</p>
                                <p class="text-muted text-small mb-2">Asigned To</p>
                                <div class="mb-3">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Sarah Kortney"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"> </a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Latarsha Gama"><img alt="Profile Picture" src="{{asset('img/profile-pic-l-4.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                </div>
                                <p class="text-muted text-small mb-2">Labels</p>
                                <div>
                                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span></a></p>
                                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <h6 class="mb-0">Project Status</h6>
                                <div role="progressbar" class="progress-bar-circle position-relative" data-color="#922c88" data-trailcolor="#d7d7d7" aria-valuemax="100" aria-valuenow="40" data-show-percent="true"></div>
                            </div>
                        </div>
                    </div> --}}
                    <div class="col-12 col-lg-12">
                        <div class="card">
                            <div class="position-absolute card-top-buttons">
                                <button class="btn btn-header-light icon-button"><i class="simple-icon-refresh"></i></button>
                            </div>
                            <div class="card-body">
                                <p class="list-item-heading mb-4">Subject: {{$ticket->subject}}</p>
                                @foreach($ticket->ticketmessages->sortBy('created_at') as $message)
                                <div class="d-flex flex-row mb-3 py-3 border-top">
                                    <a href="#"><img alt="Profile Picture" src="{{asset('img/profile-pic-l.jpg')}}" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"></a>
                                    <div class="pl-3">
                                        <p class="font-weight-medium mb-0">@if($message->type == 'user') {{$ticket->user->name}} @else Customer Care @endif</p>
                                        <p class="text-muted mb-2 text-small">{{date_format($message->created_at,'d.m.Y - h:i')}}</p>
                                        @if($message->format == 'text')
                                        <p class="text-semi-muted mb-0">{{$message->body}}.</p>
                                        @else
                                         <a href="#">view attachment </a>
                                        @endif
                                    </div>
                                </div>
                                @endforeach
                                <div class="comment-contaiener">
                                    <form action="{{route('updatesupport')}}" method="POST">@csrf
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-light" type="button" style="border-radius: 5px;">
                                                    <i class="simple-icon-paper-clip text-dark"></i>
                                                </button>
                                            </div>

                                            <textarea class="form-control" name="message" placeholder="Add a comment" required></textarea>
                                            <input type="hidden" value="{{$ticket->id}}" name="ticket_id">
                                            <div class="input-group-append">
                                                <button class="btn btn-secondary" type="submit">
                                                    <span class="d-inline-block">Send</span>
                                                    <i class="simple-icon-arrow-right ml-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="app-menu">
        <div class="p-4 h-100">
            <div class="scroll">
                <p class="text-muted text-small">Status</p>
                <ul class="list-unstyled mb-5">
                    <li class="active"><a href="#"><i class="simple-icon-refresh"></i> Pending Tasks <span class="float-right">12</span></a></li>
                    <li><a href="#"><i class="simple-icon-check"></i> Completed Tasks <span class="float-right">24</span></a></li>
                </ul>
                <p class="text-muted text-small">Categories</p>
                <ul class="list-unstyled mb-5">
                    <li>
                        <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="category1">
                            <label class="custom-control-label" for="category1">Flexbox</label>
                        </div>
                    </li>
                    <li>
                        <div class="custom-control custom-checkbox mb-2">
                            <input type="checkbox" class="custom-control-input" id="category2">
                            <label class="custom-control-label" for="category2">Sass</label>
                        </div>
                    </li>
                    <li>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="category3">
                            <label class="custom-control-label" for="category3">React</label>
                        </div>
                    </li>
                </ul>
                <p class="text-muted text-small">Labels</p>
                <div>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-primary mb-1">NEW FRAMEWORK</span></a></p>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span></a></p>
                    <p class="d-sm-inline-block mb-1"><a href="#"><span class="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span></a></p>
                </div>
            </div>
        </div><a class="app-menu-button d-inline-block d-xl-none" href="#"><i class="simple-icon-options"></i></a></div>
</main>
@endsection
@push('scripts')

@endpush

