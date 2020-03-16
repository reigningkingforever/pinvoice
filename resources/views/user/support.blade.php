@extends('layouts.user')
@section('head')

@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row app-row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Support</h1>
                    <div class="top-right-button-container">
                        <button type="button" class="btn btn-outline-primary btn-lg top-right-button mr-1" data-toggle="modal" data-backdrop="static" data-target="#exampleModal">ADD NEW</button>
                        <div class="modal fade modal-right" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add New</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="{{route('newsupport')}}" method="POST">
                                            @csrf
                                            <div class="form-group">
                                                <label>Subject</label>
                                                <input type="text" name="subject" class="form-control" placeholder="" required>
                                            </div>
                                            <div class="form-group">
                                                <label>Category</label>
                                                <select class="form-control select2-single" data-width="100%" name="category" required>
                                                    <option value="Invoice">Invoice Related</option>
                                                    <option value="Escrow">Escrow Related</option>
                                                    <option value="Dispute">Dispute</option>
                                                    <option value="Payment">Payment Related</option>
                                                    <option value="General">Others</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Details</label>
                                                <textarea name="message" class="form-control" rows="4" required></textarea>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancel</button>

                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="btn-group">
                            <div class="btn btn-primary btn-lg pl-4 pr-0 check-button">
                                <label class="custom-control custom-checkbox mb-0 d-inline-block">
                                    <input type="checkbox" class="custom-control-input" id="checkAll"> <span class="custom-control-label">&nbsp;</span></label>
                            </div>
                            <button type="button" class="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></button>
                            <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                        </div>
                    </div>
                </div>
                <div class="mb-2"><a class="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">Display Options <i class="simple-icon-arrow-down align-middle"></i></a>
                    <div class="collapse d-md-block" id="displayOptions">
                        <div class="d-block d-md-inline-block">
                            <div class="btn-group float-md-left mr-1 mb-1">
                                <button class="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Order By</button>
                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a></div>
                            </div>
                            <div class="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                <input placeholder="Search...">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="separator mb-5"></div>
                <div class="list disable-text-selection" data-check-all="checkAll">
                    @forelse ($supports as $support)
                        <div class="card d-flex flex-row mb-3">
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                    <a class="list-item-heading mb-0 truncate w-40 w-xs-100 mt-0" href="Apps.Todo.Details.html">
                                        <i class="simple-icon-refresh heading-icon"></i>
                                        <span class="align-middle d-inline-block">{{$support->subject}}</span></a>
                                    <p class="mb-0 text-muted text-small w-15 w-xs-100">{{$support->category}}</p>
                                    <p class="mb-0 text-muted text-small w-15 w-xs-100">{{date_format($support->created_at,'d.m.Y')}}</p>
                                    <div class="w-15 w-xs-100"><span class="badge badge-pill badge-secondary">OPEN</span></div>
                                </div>
                                <label class="custom-control custom-checkbox mb-0 align-self-center mr-4 mb-1">
                                    <input type="checkbox" class="custom-control-input"> <span class="custom-control-label">&nbsp;</span></label>
                            </div>
                        </div>
                    @empty
                        <div class="card d-flex flex-row mb-3">
                            <div class="d-flex flex-grow-1 min-width-zero">
                                <div class="card-body">
                                    <p class="mb-0 text-muted text-center text-small w-100 w-xs-100">No support tickets</p>
                                </div>

                            </div>
                        </div>
                    @endforelse



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
        </div>
        <a class="app-menu-button d-inline-block d-xl-none" href="#">
            <i class="simple-icon-options"></i>
        </a>
    </div>
</main>
@endsection
@push('scripts')

@endpush
