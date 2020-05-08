<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
	<link rel="stylesheet" href="/demo/demo/css/style.css" type="text/css" media="all" />
    <title>{{ env('APP_NAME')}}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <meta name="robots" content="noindex">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <main>
            @yield('content')
        </main>
    </div>
</body>
<script src="https://codefund.io/properties/441/funder.js" async="async"></script>
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
<script src="//m.servedby-buysellads.com/monetization.js" type="text/javascript"></script>
<script async src='https://www.googletagmanager.com/gtag/js?id=UA-149859901-1'></script>
</html>
