<?php

namespace App\Http\Controllers\User;

use App\User;
use App\Contact;
use Carbon\Carbon;
use App\Invitation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $people = Contact::where('user_id',Auth::id())->get();
        //dd($people);
        $invitations = Invitation::where('receiver_id',Auth::id())->where('status','waiting')->where('expiry','>',Carbon::now())->get();
        return view('user.contact',compact('people','invitations'));
    }
    public function search(Request $request){
        $users = User::where('name','LIKE',"%$request->person%")->orWhere('email','LIKE',"%$request->person%")->orWhere('mobile','LIKE',"%$request->person%")->get();
        return view('user.searchcontact',['users'=>$users]);
    }

    public function sendRequest(Request $request){
        $invitation = new Invitation;
        $invitation->sender_id = Auth::id();
        $invitation->receiver_id = $request->person;
        $invitation->expiry = Carbon::now()->addDays(7);
        $user = User::find($request->person);
        if($user->auto_accept_invitation){
            $newContact = new Contact;
            $newContact->user_id = $request->person;
            $newContact->person = Auth::id();
            $newContact->status = true;
            $newContact->save();
        }
        $invitation->save();
        return response()->json(200);
    }

    public function acceptRequest(Request $request){
        $contact = new Contact;
        $contact->user_id = Auth::id();
        $contact->person = $request->person;
        $contact->status = true;
        $contact->save();
        $invitation = Invitation::where('sender_id',$request->person)->where('receiver_id',Auth::id())->delete();
        return response()->json(200);
    }

    public function rejectRequest(Request $request){
        $user = Auth::user();
        $invitation = Invitation::where('sender_id',$request->person)->where('receiver_id',Auth::id())->delete();
        return response()->json(200);
    }

    public function block(Request $request){
        $contact = Contact::where('user_id',Auth::id())->where('person',$request->person)->first();
        if($contact->status) $contact->status = false;
        else $contact->status = true;
        $contact->save();
        return response()->json(200);
    }

    public function remove(Request $request){
        $contact = Contact::where('user_id',Auth::id())->where('person',$request->person)->delete();
        return response()->json(200);
    }
}
