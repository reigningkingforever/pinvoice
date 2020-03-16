@extends('layouts.auth')
@section('main')
<main>
    <div class="container">
        <div class="row h-100">
            <div class="col-12 col-md-10 mx-auto my-auto">
                <div class="card auth-card">
                    <div class="position-relative image-side">
                        <p class="text-white h2">MAGIC IS IN THE DETAILS</p>
                        <p class="white mb-0">Please use your credentials to login.
                            <br>If you are not a member, please
                            <a href="{{route('register')}}" class="white"><u>register</u></a>.
                        </p>
                    </div>
                    <div class="form-side">
                        <a href="Dashboard.Default.html"><span class="logo-single"></span></a>
                        <h6 class="mb-4">Welcome {{Auth::user()->name}}</h6>
                        <form action="{{route('enterpriseLogin')}}" method="POST">
                            @csrf
                            <label class="form-group has-float-label">
                                <select class="form-control select2-single" data-width="100%" name="profile">
                                    @foreach($profiles as $profile)
                                        <option value="{{$profile->id}}">{{$profile->name}}</option>
                                    @endforeach

                                </select>

                                <span>Sign in As</span>
                            </label>

                            <label class="form-group has-float-label mb-4">
                                <input name="password" class="form-control @error('password') is_invalid @enderror" type="password" placeholder=""> <span>Password</span>
                                @error('password')
                                    <p class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </p>
                                @enderror
                            </label>
                            <div class="d-flex justify-content-between align-items-center">
                                <a style="cursor:pointer;text-decoration:underline;" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>

                                <button class="btn btn-primary btn-lg btn-shadow" type="submit">Enter Dashboard</button>
                            </div>
                        </form>
                        <form id="logout-form" action="{{ route('logout')}}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
