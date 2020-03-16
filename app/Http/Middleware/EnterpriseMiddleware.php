<?php

namespace App\Http\Middleware;

use Closure;

class EnterpriseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!$request->user()->setup())
            return redirect()->route('user.setup');
        if($request->user()->isRole('user') && $request->user()->business && !$request->session()->has('enterprise')){
            return redirect()->route('enterpriseForm');
        }else
        return $next($request);

    }
}
