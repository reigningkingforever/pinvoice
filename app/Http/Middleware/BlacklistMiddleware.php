<?php

namespace App\Http\Middleware;

use Closure;
use App\Blacklist;

class BlacklistMiddleware
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
        if($request->user())
        $blacklist = Blacklist::where('user_id',$request->user()->id)->get();
        else
        $blacklist = Blacklist::where('ipAddress',$request->ip())->get();
        \abort_if($blacklist->isNotEmpty(),500);

        return $next($request);
    }
}
