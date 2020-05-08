<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title> {{ env('APP_NAME') }}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta  content="{{ Auth::check() ? Auth::User()->id_rol : ''}}">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">
  @if(Auth::check())
    @if (Auth::user()->id_rol == 1)
        @include('Administrador.main')
    @elseif (Auth::user()->id_rol == 2)
        @include('Administrativo.main')
    @endif
  @endif
</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
