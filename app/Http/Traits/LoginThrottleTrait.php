<?php
namespace App\Http\Traits;

use App\User;
use App\Blacklist;
use Carbon\Carbon;
use App\FailedLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Validator;

trait LoginThrottleTrait
{
    protected function shouldBeDenied(Request $request){
        if($this->loginAttempts($request) > 7){
            $blacklist = new Blacklist;
            $blacklist->ipAddress = $request->ip();
            $blacklist->reason = 'too many failed login attempts';
            $user = User::where('email',$request->email)->orWhere('mobile',$request->email)->first();
            if($user->count() != 0)
            $blacklist->user_id = $user->id;
            $blacklist->save();
            return true;
        }
        if($this->loginAttempts($request) > 6 && $this->lastAttempt($request)->addMinutes(20) > Carbon::now())
        return true;
        elseif($this->loginAttempts($request) > 4 && $this->lastAttempt($request)->addMinutes(10) > Carbon::now())
        return true;
        elseif($this->loginAttempts($request) > 3 && $this->lastAttempt($request)->addMinutes(5) > Carbon::now())
        return true;
        else return false;
    }

    protected function addLoginAttempts(Request $request){
        $failedLogin = new FailedLogin;
        $failedLogin->ipAddress = $request->ip();
        $failedLogin->username = $request->email;
        $user = User::where('email',$request->email)->orWhere('mobile',$request->email)->first();
        if($user)
        $failedLogin->user_id = $user->id;
        $failedLogin->save();
    }
    protected function loginAttempts(Request $request){
        $failedattempt = FailedLogin::where('username',$request->email)->get();
        return $failedattempt->count();
    }

    protected function lastAttempt(Request $request){
        $failedattempt = FailedLogin::where('username',$request->email)->orderBy('created_at','desc')->first();
        return $failedattempt->created_at;
    }

    public function securityForm(){
        return view('auth.suspect');
    }
    public function securityPass(Request $request){
        // $validator = Validator::make($request->all(), [
        //     'answer1' => 'required|string',
        //     'answer2' => 'required|string',
        //     'answer3' => 'required|string',

        // ]);
        // if ($validator->fails()) {
        //     return redirect()->back()
        //                 ->withErrors($validator)
        //                 ->withInput();
        // }
        $user = $request->user();
        $checkbiz = true;
        if($user->business){
            if(!Hash::check($request->profilepassword,$user->profiles->where('position','admin')->first()->password))
            $checkbiz = false;
        }
        if($request->user()->answer1 == $request->answer1 && $request->user()->answer2 == $request->answer2 && $request->user()->answer3 == $request->answer3 && $checkbiz){
            FailedLogin::where('username',$request->user()->email)->delete();
            return $this->authenticated($request, $this->guard()->user());
        }else{
            if($request->session()->has('secqest')){
                $request->session()->forget('secqest');
                Auth::logout();
            }
            else {
                $request->session()->put('secqest',true);
                return redirect()->back()->withErrors(['suspect'=>'Some of your answers are incorrect']);
            }
        }
    }
}

