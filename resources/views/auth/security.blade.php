@extends('layouts.auth')
@section('head')
<style>
    .newsletter-input-container input {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;}
</style>
@endsection
@section('main')
<main>
    <div class="container">
        <div class="row h-100">
            <div class="col-12 col-sm-8 col-md-10 mx-auto my-auto">
                <div class="card index-card">
                    <div class="card-body text-center form-side"><a href="Dashboard.Default.html"><span class="logo-single"></span></a>
                        <p class="lead mb-5">Security Challenge!</p>
                        <div id="timer" class="mb-5"></div>
                        <div class="row">
                            <div class="col-12 offset-0 col-md-8 offset-md-2 mb-2">
                                <p>To receive our newsletter please complete the form below. We take your privacy seriously and we will not share your information with others.</p>
                            </div>
                            <div class="col-12 col-md-10 offset-md-1 newsletter-input-container">
                                <form action="{{route('user.setupcomplete')}}" method="POST">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label">
                                                <select class="form-control select2-single" data-width="100%" name="question1">
                                                    @foreach($questions->where('number',1) as $first)
                                                    <option value="{{$first->id}}">{{$first->question}}</option>
                                                    @endforeach
                                                </select>

                                                <span>Select First Question</span>
                                                @error('question1')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label mb-4">
                                                <input name="answer1" class="form-control" type="text" placeholder=""> <span>Answer</span>
                                                @error('answer1')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label">
                                                <select class="form-control select2-single" data-width="100%" name="question2">
                                                    @foreach($questions->where('number',2) as $second)
                                                    <option value="{{$second->id}}">{{$second->question}}</option>
                                                    @endforeach
                                                </select>

                                                <span>Select Second Question</span>
                                                @error('question2')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label mb-4">
                                                <input name="answer2" class="form-control" type="text" placeholder=""> <span>Answer</span>
                                                @error('answer2')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label">
                                                <select class="form-control select2-single" data-width="100%" name="question3">
                                                    @foreach($questions->where('number',3) as $third)
                                                    <option value="{{$third->id}}">{{$third->question}}</option>
                                                    @endforeach
                                                </select>
                                                <span>Select Third Question</span>
                                                @error('question3')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-group has-float-label mb-4">
                                                <input name="answer3" class="form-control" type="text" placeholder=""> <span>Answer</span>
                                                @error('answer3')
                                                    <p class="invalid-feedback d-block" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </p>
                                                @enderror
                                            </label>
                                        </div>

                                    </div>
                                    @if(Auth::user()->business)
                                    <label class="form-group has-float-label mb-4">
                                        <input name="profilepassword" class="form-control" type="text" required> <span>New Password for Enterprise Admin</span>
                                        @error('profilepassword')
                                            <p class="invalid-feedback d-block" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </p>
                                        @enderror
                                    </label>
                                    @endif

                                    <div class="col-md-8 offset-md-2 d-flex justify-content-between align-items-center">
                                        <button class="btn btn-primary btn-lg btn-block btn-shadow" type="submit">PROCEED TO DASHBOARD</button>
                                    </div>
                                </form>
                                {{-- <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="E-mail address">
                                    <div class="input-group-append">
                                        <button class="btn btn-secondary btn-xl" type="button">JOIN</button>
                                    </div>
                                </div> --}}
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

@endpush
