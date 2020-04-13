@extends('layouts.user')
@section('head')
<link rel="stylesheet" href="{{asset('css/vendor/glide.core.min.css')}}">
@endsection
@section('main')
<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="mb-2">
                    <h1>Payments</h1>
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
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
            </div>
        </div>
        {{-- <div class="row">
            <div class="col-12">Wallet</div>
        </div> --}}
        <div class="row icon-cards-row mb-4">
            <div class="col-md-3 col-lg-2 col-sm-4 col-6 mb-4">
                <a href="#" class="card">
                    <div class="card-body text-center">
                        <span style="color: #145388; font-weight: normal; line-height: 47px; font-size: 32px;">₦</span>
                        <p class="card-text font-weight-semibold mb-0">Naira</p>
                        <p class="lead text-center">32000</p>
                    </div>
                </a>
            </div>
            <div class="col-md-3 col-lg-2 col-sm-4 col-6 mb-4">
                <a href="#" class="card">
                    <div class="card-body text-center">
                        <span style="color: #145388; font-weight: normal; line-height: 47px; font-size: 32px;">$</span>
                        <p class="card-text font-weight-semibold mb-0">Dollars</p>
                        <p class="lead text-center">1000</p>
                    </div>
                </a>
            </div>
            <div class="col-md-3 col-lg-2 col-sm-4 col-6 mb-4">
                <a href="#" class="card">
                    <div class="card-body text-center">
                        <span style="color: #145388; font-weight: normal; line-height: 47px; font-size: 32px;">€</span>
                        <p class="card-text font-weight-semibold mb-0">Euro</p>
                        <p class="lead text-center">500</p>
                    </div>
                </a>
            </div>
            <div class="col-md-3 col-lg-2 col-sm-4 col-6 mb-4">
                <a href="#" class="card">
                    <div class="card-body text-center">
                        <span style="color: #145388; font-weight: normal; line-height: 47px; font-size: 32px;">£</span>
                        <p class="card-text font-weight-semibold mb-0">Pounds</p>
                        <p class="lead text-center">1600</p>
                    </div>
                </a>
            </div>
            <div class="col-md-3 col-lg-2 col-sm-4 col-6 mb-4">
                <a href="#" class="card">
                    <div class="card-body text-center">
                        <span style="color: #145388; font-weight: normal; line-height: 47px; font-size: 32px;">₿</span>
                        <p class="card-text font-weight-semibold mb-0">Bitcoin</p>
                        <p class="lead text-center">800</p>
                    </div>
                </a>
            </div>
        </div>

        <div class="row equal-height-container">
            <div class="col-md-12 col-xl-6 mb-4 col-item">
                <div class="card">
                    <div class="card-body pt-5 pb-5 d-flex flex-column">
                        <div class="text-center"><i class="iconsminds-upload-1 large-icon"></i>
                            <h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">UPLOAD FUNDS</h5></div>
                        <div class="pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1">
                            <p class="text-muted mb-4">Systems thinking correlation, social impact; when revolutionary fully ethical life bandwidth and thought partnership.</p>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#" class="btn-link">Getting Started</a></li>
                                <li><a href="#" class="btn-link">Game Changing Features</a></li>
                                <li><a href="#" class="btn-link">Structure</a></li>
                                <li><a href="#" class="btn-link">Adding Content</a></li>
                                <li><a href="#" class="btn-link">Gulp & Package.json</a></li>
                                <li><a href="#" class="btn-link">Codebase</a></li>
                                <li><a href="#" class="btn-link">Styles and Themes</a></li>
                                <li><a href="#" class="btn-link">Fonts</a></li>
                                <li><a href="#" class="btn-link">Plugins</a></li>
                                <li><a href="#" class="btn-link">Changelog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-6 mb-4 col-item">
                <div class="card">
                    <div class="card-body pt-5 pb-5 d-flex flex-column">
                        <div class="text-center"><i class="iconsminds-download-1 large-icon"></i>
                            <h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">WITHDRAW FUNDS</h5></div>
                        <div class="pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1">
                            <p class="text-muted mb-4">Systems thinking correlation, social impact; when revolutionary fully ethical life bandwidth and thought partnership.</p>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#" class="btn-link">Securing Your Account</a></li>
                                <li><a href="#" class="btn-link">Privacy</a></li>
                                <li><a href="#" class="btn-link">Spam</a></li>
                                <li><a href="#" class="btn-link">Sensitive Content</a></li>
                                <li><a href="#" class="btn-link">Abuse</a></li>
                                <li><a href="#" class="btn-link">Blocking Users</a></li>
                                <li><a href="#" class="btn-link">Reporting</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
@push('scripts')
<script src="{{asset('js/vendor/glide.min.js')}}" style="opacity: 1;"></script>
@endpush
