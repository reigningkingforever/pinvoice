<?php

namespace App\Http\Controllers\Auth;


use App\Profile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\LoginThrottleTrait;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, LoginThrottleTrait;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except(['logout','enterpriseForm','enterpriseLogin','securityPass','securityForm']);
        $this->middleware(['auth'])->only(['enterpriseForm','enterpriseLogin','securityPass','securityForm']);
        $this->middleware(['suspicion'])->only(['enterpriseForm','enterpriseLogin']);
    }


    public function login(Request $request)
    {
        abort_if($this->shouldBeDenied($request),403);
        $this->validateLogin($request);
        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }
        $this->addLoginAttempts($request);
        return $this->sendFailedLoginResponse($request);
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            $this->username() => 'required|string',
            'password' => 'required|string',
            'g-recaptcha-response' => 'required|captcha'
        ]);
    }

    public function enterpriseForm(){
        $profiles = request()->user()->profiles;
        return view('auth.loginAs',compact('profiles'));
    }

    public function enterpriseLogin(Request $request){
        $profile = Profile::find($request->profile);
        if(Hash::check($request->password,$profile->password)){
            $request->session()->put('enterprise', $profile);
            return redirect()->route('home');
        }
        else return redirect()->back()->withErrors(['password' => 'Password Incorrect']);
    }

    protected function authenticated(Request $request, $user)
    {
        if($user->isRole('user'))
           return redirect()->intended($this->redirectPath());
        else
            return redirect()->intended(route('admin.dashboard'));
    }
}

