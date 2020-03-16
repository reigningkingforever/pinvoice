<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from dore-jquery.coloredstrategies.com/Pages.Auth.Login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Feb 2020 22:14:41 GMT -->
<head>
	<meta charset="UTF-8">
	<title>PinVoice</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
	<link rel="stylesheet" href="{{asset('font/iconsmind-s/css/iconsminds.css')}}">
	<link rel="stylesheet" href="{{asset('font/simple-line-icons/css/simple-line-icons.css')}}">
	<link rel="stylesheet" href="{{asset('css/vendor/bootstrap.min.css')}}">
	<link rel="stylesheet" href="{{asset('css/vendor/bootstrap.rtl.only.min.css')}}">
	<link rel="stylesheet" href="{{asset('css/vendor/bootstrap-float-label.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    @yield('head')
</head>
<body class="background show-spinner no-footer">
	<div class="fixed-background"></div>
	@yield('main')
    <script src="{{asset('js/vendor/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('js/vendor/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('js/dore.script.js')}}"></script>
    <script src="{{asset('js/scripts.js')}}"></script>
    @stack('scripts')
</body>

</html>
