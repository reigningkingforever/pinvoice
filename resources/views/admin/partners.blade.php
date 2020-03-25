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
                    <h1>Partners</h1>

                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>

                            <li class="breadcrumb-item active" aria-current="page">Partners</li>
                        </ol>
                    </nav>
                </div>
                <ul class="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="banks-tab" data-toggle="tab" href="#banks" role="tab" aria-controls="banks" aria-selected="true">BANKS</a></li>
                    <li class="nav-item"><a class="nav-link" id="shippers-tab" data-toggle="tab" href="#shippers" role="tab" aria-controls="shippers" aria-selected="false">SHIPPERS </a></li>
                    <li class="nav-item"><a class="nav-link" id="arbitrator-tab" data-toggle="tab" href="#arbitrator" role="tab" aria-controls="arbitrator" aria-selected="false">ARBITRATORS </a></li>

                </ul>
                <div class="tab-content">
                    <div class="tab-pane show active" id="banks" role="tabpanel" aria-labelledby="banks-tab">
                        <div class="row">
                            <div class="col-12">
                                <h5>Banks</h5>

                                <table class="table table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Bank Name</th>
                                            <th>Country</th>
                                            <th>Code</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr><td colspan="4" class="text-center">No Banks</td></tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="shippers" role="tabpanel" aria-labelledby="shippers-tab">
                        <div class="row">
                            <div class="col-12">
                                <h5>Shippers</h5>
                                <table class="table table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Website</th>
                                                <th>Track url</th>
                                                <th>Action</th>
                                            </tr>
                                        </tr>
                                    </thead>
                                    <tbody>

                                            <tr><td colspan="6" class="text-center">No Shipper</td></tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="arbitrator" role="tabpanel" aria-labelledby="arbitrator-tab">
                        <div class="row">
                            <div class="col-12">
                                <h5>Arbitrator</h5>
                                <table class="table table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <tr>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Website</th>
                                                <th>Action</th>
                                            </tr>
                                        </tr>
                                    </thead>
                                    <tbody>

                                            <tr><td colspan="6" class="text-center">No Arbitrator</td></tr>

                                    </tbody>

                                </table>
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
{{-- <script src="{{asset('js/vendor/select2.full.js')}}"></script> --}}

@endpush
