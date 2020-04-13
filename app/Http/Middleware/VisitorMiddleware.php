<?php

namespace App\Http\Middleware;

use Closure;
use App\Country;
use App\Visitor;
use Illuminate\Support\Str;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Soumen\Agent\Agent;

class VisitorMiddleware
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
        if(!Auth::check() && !(Str::contains($request->path(), ['css', 'font','js']))){
            $location = Cache::rememberForever(request()->ip(), function () {
                $place = Curl::to('https://ipapi.co/'.request()->ip().'/json')
                ->withData( array( 'key' => 'o9Eapuw9PfrLzdrTDsaO2WlVnuSk2LyBcNoRoVaNVvb9ysYwVv' ) )
                ->asJsonResponse()
                ->get();
                if(isset($place->country_code))
                $temp = ['iso_code'=> $place->country_code,'country'=> $place->country_name,'state'=> $place->region ,'city'=> $place->city,'currency'=> $place->currency,'currency_name'=>$place->currency_name,'dialing_code'=> $place->country_calling_code];
                else
                $temp = ['iso_code'=> 'NG','country'=> 'Nigeria','state'=>'Lagos','city'=>'Lagos','currency'=>'NGN','currency_name'=>'Naira','dialing_code'=> '+234'];
                $country = Country::firstOrCreate(['iso_code'=>$temp['iso_code']], ['name'=> $temp['country'],'dialing_code'=>$temp['dialing_code'],'currency'=>$temp['currency_name'],'currency_code'=>$temp['currency'] ]);
                $visitor = Visitor::firstOrNew(
                    ['ip_address' => Agent::ip(),
                    'url' => Agent::server('httpHost').Agent::server('requestUri'),
                    'country'=> $temp['country'],
                    'state'=> $temp['state'],
                    'city'=> $temp['city'],
                    'user_id'=> request()->user() ? request()->user()->id : 0,

                    'device_type'=> Agent::device()->getType(),
                    'device_name'=> Agent::device('family').','.Agent::device('model'),
                    'platform'=> Agent::platform('name'),
                    'browser'=> Agent::browser('name'),
                    'language' => Agent::header('accept-language'),
                    'method' => Agent::server(  'requestMethod')
                    ]);
            $visitor->visit = $visitor->visit + 1;
            $visitor->save();
                $userinfo = ['country_id'=> $country->id,'country_code'=> $country->iso_code,'country_name'=> $country->name,'country_dialing_code' => $country->dialing_code,'country_currency'=> $country->currency,'country_currency_code'=> $country->currency_code ];
                return $userinfo;
            });
        }
        return $next($request);
    }
}
