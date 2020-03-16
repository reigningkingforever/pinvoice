<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from dore-jquery.coloredstrategies.com/Blank.Page.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Feb 2020 22:14:40 GMT -->
<head>
    <meta charset="UTF-8">
    <title>PinVoice</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{asset('font/iconsmind-s/css/iconsminds.css')}}">
    <link rel="stylesheet" href="{{asset('font/simple-line-icons/css/simple-line-icons.css')}}">
    <link rel="stylesheet" href="{{asset('css/fontawesome.css')}}">
    <link rel="stylesheet" href="{{asset('css/vendor/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/vendor/bootstrap.rtl.only.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/vendor/component-custom-switch.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/vendor/perfect-scrollbar.css')}}">
    <link rel="stylesheet" href="{{asset('css/dore.light.blue.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">

    @yield('head')
</head>
<body id="app-container" class="menu-default show-spinner">
    @if(Auth::user()->isRole('user')) @include('layouts.menu_user')
    @else @include('layouts.menu_admin') @endif

    @yield('main')
    @if (session('flash_msg'))
        <div class="d-none">
            <span id="flash_type">{{ session('flash_type') }}</span>
            <span id="flash_msg">{{ session('flash_msg') }}</span>
            <span id="flash_title">{{ session('flash_title') }}</span>
        </div>
    @endif
    {{-- <footer class="page-footer">
        <div class="footer-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <p class="mb-0 text-muted">ColoredStrategies 2019</p>
                    </div>
                    <div class="col-sm-6 d-none d-sm-block">
                        <ul class="breadcrumb pt-0 pr-0 float-right">
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Review</a>
                            </li>
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Purchase</a>
                            </li>
                            <li class="breadcrumb-item mb-0">
                                <a href="#" class="btn-link">Docs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer> --}}
    <script src="{{asset('js/vendor/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('js/vendor/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('js/vendor/perfect-scrollbar.min.js')}}"></script>
    <script src="{{asset('js/vendor/bootstrap-notify.min.js')}}"></script>
    <script src="{{asset('js/vendor/mousetrap.min.js')}}"></script>
    <script src="{{asset('js/dore.script.js')}}"></script>
    <script src="{{asset('js/scripts.js')}}"></script>
    @stack('scripts')
</body>
<!-- Mirrored from dore-jquery.coloredstrategies.com/Blank.Page.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Feb 2020 22:14:40 GMT -->
</html>
