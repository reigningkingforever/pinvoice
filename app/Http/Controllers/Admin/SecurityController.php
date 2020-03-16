<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Blacklist;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SecurityController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index(){
        $blacklists = Blacklist::all();
        //$banned = Lockout::orderBy('created_at','DESC')->get();
        return view('admin.security',compact('blacklists'));
    }

    public function ipwhitelist(Request $request){
        //Blacklist::where('ipAddress',$request->ipAddress)->delete();
        return redirect()->back()->with(['flash_type' => 'success','flash_msg'=>'IP successfully whitelisted']);
    }

    public function whotoban(Request $request){
        $query = $request->input('query');
       // $users = User::where('firstname','LIKE',"%$query%")->orWhere('surname','LIKE',"%$query%")->get();
       // dd($users);
       if(Str::contains($request->input('query'), '@')){
           $users = User::whereEmail($request->query)->get();
       }
       else{
           $users = User::where('name','LIKE',"%$query%")
           ->orWhere('name','LIKE',"%$query%")
           ->orWhere('email','LIKE',"%$query%")
           ->get();
       }
       return $users;
   }

   public function userblacklist(Request $request){
       $user = User::whereEmail($request->newban)->first();
       $lockout = new Lockout;
       $lockout->user_id = $user->id;
       if($request->filled('reason')) $lockout->reason = $request->reason;
       if($request->filled('expiry')) $lockout->expire_at = Carbon::parse($request->expiry);
       $lockout->save();
       return redirect()->back()->with(['flash_type' => 'success','flash_msg'=>'User successfully banned']);
   }

   public function userwhitelist(){

   }


}
