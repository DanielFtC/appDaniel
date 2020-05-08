@extends('layouts.app')

@section('content')
<section class="w3l-login-6">
		<div class="login-hny">
			<div class="form-content">
				<div class="form-right">
					<div class="overlay">
						<div class="grid-info-form">
                            <h4>Bienvenidos</h4>
							<h3>Fadel Desarrollo Ins S.A.C.</h3>
							<p>Encargados de Desarrollar Diversos Tipos de Aplicaciones ,
                            Atencion 24 Horas de Lunes a Sabado , 
								Excelentes Actualizaciones.</p>
							<a href="index.html" class="btn" id="read-more-1">Pagina Oficial</a>
						</div>
					</div>
				</div>
				<div class="form-left">
					<div class="middle">
						<h4>Iniciar Sesion</h4>
						<p>Si Tiene Problemas al Iniciar Sesion Comuniquese 926658451</p>
					</div>
					<form method="POST" action="{{ route('login') }}" class="signin-form">
                    @csrf
							<div class="form-input">
								<label>Usuario</label>
								<input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus/>
                                @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
							</div>
							<div class="form-input">
								<label>Contraseña</label>
								<input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password"/>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
							</div>
							<label class="container">Acepto(a) las <a href="#">Condiciones </a> para proteger su <a href="#">Privacidad</a>
								<input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
								<span class="checkmark"></span>
							</label>
							<button class="btn" type="submit">INGRESAR AL SISTEMA</button>
					</form>
					<div class="copy-right text-center">
						<p>© 2020 Todos los Derechos Reservados | Diseñado Por 
								<a href="http://w3layouts.com/" target="_blank">Daniel Caso</a></p>
					 </div>
				</div>
			</div>
			
		</div>
	</section>
@endsection
