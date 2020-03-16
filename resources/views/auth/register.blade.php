@extends('layouts.auth')
@section('main')
<main>
    <div class="container">
        <div class="row h-100">
            <div class="col-12 col-md-10 mx-auto my-auto">
                <div class="card auth-card">
                    <div class="position-relative image-side">
                        <p class="text-white h2">MAGIC IS IN THE DETAILS</p>
                        <p class="white mb-0">Please use this form to register.<br>If you are a member, please
                            <a href="#" class="white">login</a>.
                        </p>
                    </div>
                    <div class="form-side">
                        <a href="Dashboard.Default.html"><span class="logo-single"></span></a>
                        <h6 class="">Register</h6>
                        <div class="separator mb-5"></div>
                        <form action="{{route('register')}}" method="POST">
                            @csrf

                            <div class="mb-2 custom-control d-flex justify-content-between pl-0">
                                <p class="align-">Signup As:</p>
                                <div class=" custom-radio">
                                    <input type="radio" id="personal" name="as" value="personal" class="custom-control-input" checked>
                                    <label class="custom-control-label" for="personal" >Individual or SME</label>
                                </div>
                                <div class=" custom-radio">
                                    <input type="radio" id="enterprise" name="as" value="enterprise" class="custom-control-input">
                                    <label class="custom-control-label" for="enterprise">Business Enterprise</label>
                                </div>
                            </div>
                            <div class="alert alert-dark mb-4" id="info" role="alert" style="display:none;"></div>

                            <label class="form-group has-float-label mb-4">
                                <input name="name" value="{{ old('name') }}" class="form-control @error('name') is_invalid @enderror"> <span>Name</span>
                                @error('name')
                                    <p class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </p>
                                @enderror
                            </label>

                            <label class="form-group has-float-label mb-4">
                                <input name="email" value="{{ old('email') }}" class="form-control @error('email') is_invalid @enderror"> <span>E-mail</span>
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
                            <label class="form-group has-float-label mb-4">
                                <input name="password_confirmation" class="form-control" type="password" placeholder=""> <span>Repeat Password</span>
                            </label>
                            <div class="d-flex justify-content-between">
                                <a href="{{route('login')}}" >Already registered?</a>
                                <button class="btn btn-primary btn-lg btn-shadow" type="submit">REGISTER</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection
@push('scripts')
<script>
$('input:radio[name="as"]').change(
    function(){
        if ($(this).val() == 'enterprise') {
            $('input[name="name"]').next("span").html('Business Name');
            $('input[name="email"]').next("span").html('Business Email');
            $('#info').show().html('Suitable for large corporations where roles and responsibilities are divided amongst people ')
        }
        if ($(this).val() == 'personal') {
            $('input[name="name"]').next("span").html('Name');
            $('input[name="email"]').next("span").html('Email');
            $('#info').show().html('Suitable for individuals who manage every aspect of their business functions')
        }
    });
</script>
@endpush
