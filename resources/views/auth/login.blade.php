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
                        <h6 class="mb-4">Login</h6>
                        <form action="{{route('login')}}" method="POST">
                            @csrf

                            <label class="form-group has-float-label mb-4">
                                <input name="email" class="form-control @error('email') is_invalid @enderror"> <span>E-mail</span>
                                @error('email')
                                    <p class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </p>
                                @enderror
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
                                {{-- {!! no_captcha()->display()->toHtml() !!} --}}
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <a href="{{ route('password.request') }}">Forget password?</a>
                                <button class="btn btn-primary btn-lg btn-shadow" type="submit">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
{{-- {!! no_captcha()->script() !!} --}}
@endsection
