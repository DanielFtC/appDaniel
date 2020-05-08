<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isAdministrador',function($user){
            return $user->id_rol === 1;
        });

        Gate::define('isAdministrativo',function($user){
            return $user->id_rol === 2;
        });

        Gate::define('isAsesor',function($user){
            return $user->id_rol === 3;
        });

        Gate::define('isRecuperador',function($user){
            return $user->id_rol === 4;
        });
    }
}
