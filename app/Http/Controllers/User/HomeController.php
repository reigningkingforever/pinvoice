<?php

namespace App\Http\Controllers\User;

use App\Profile;
use App\SecurityQuestion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function setup(){
        $questions = SecurityQuestion::all();
        return view('auth.security',compact('questions'));
    }
    public function setupComplete(Request $request){
        //dd($request->all());
        $user = Auth::user();
       //dd($user);
        $user->question1 = $request->question1;
        $user->question2 = $request->question2;
        $user->question3 = $request->question3;
        $user->answer1 = $request->answer1;
        $user->answer2 = $request->answer2;
        $user->answer3 = $request->answer3;
        $user->save();
        if($user->business){
            $profile = Profile::where('user_id',$user->id)->first();
            //dd($profile);
            $profile->password = Hash::make($request->profilepassword);
            $profile->save();
            $request->session()->put('enterprise', $profile);
        }

        return redirect()->route('home');

    }



    public function index(){
        // dd(Session('enterprise'));
        return view('user.dashboard');
    }

    public function profile(){
        $user = Auth::user();
        return view('user.profile',compact('user'));
    }

    public function updateprofile(Request $request){
        //add validation
        $user = Auth::user();
        $user->mobile = $request->mobile;
        $user->about = $request->about;
        $user->website = $request->website;
        $user->website = $request->website;
        $user->address = $request->address;
        $user->place = $request->place;
        $user->save();
        return redirect()->back()->with(['flash_type' => 'success','flash_title' => 'Success','flash_msg'=>'Profile Updated successfully']); //with success;
    }

    public function updatepassword(Request $request){
        $validator = Validator::make($request->all(), [
            'oldpassword' => 'required|string',
            'password' => 'required|string|confirmed',
        ]);
        if ($validator->fails()) {
            return redirect()->back()
                        ->withErrors($validator)
                        ->withInput();
        }
        if(Hash::check($request->oldpassword, Auth::user()->password)){
            $user = Auth::user();
            $user->password = Hash::make($request->password);
            $user->save();
            $user->password_histories()->create(['password'=> $user->password]);
            return redirect()->back()->with(['flash_type' => 'success','flash_msg'=>'Password changed successfully']); //with success
        }
        else return redirect()->back()->withErrors(['oldpassword' => 'Your old password is wrong']);
    }

    public function newEnterpriseProfile(Request $request){
        $user = Auth::user();
        $profile = new Profile;
        $profile->user_id = $user->id;
        $profile->name = $request->name;
        $profile->position = $request->position;
        $profile->password = Hash::make($request->password);
        $profile->save();
        return redirect()->back()->with(['flash_type' => 'primary','flash_title' => 'New Enterprise Profile','flash_msg'=>'Profile Created successfully']); //with success;
    }


    public function updateEnterpriseProfile(Request $request){
        $profile = Profile::find($request->profile);
        if($profile->user_id == Auth::id()){
            $profile->name = $request->name;
            $profile->position = $request->position;
            $profile->password = Hash::make($request->password);
            $profile->save();
        }
        return redirect()->back()->with(['flash_type' => 'primary','flash_title' => 'Update Enterprise Profile','flash_msg'=>'Profile Updated successfully']); //with success;
    }

    public function deleteEnterpriseProfile(Request $request){
        //make a popup before you delete this
    }



}
