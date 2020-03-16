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
        $contact = Contact::where('user_id',Auth::id())->first()->people;
        $people = User::whereIn('id',array_keys($contact))->get();
        $invitations = Invitation::where('receiver_id',Auth::id())->where('status','waiting')->where('expiry','>',Carbon::now())->get();
        return view('user.contact',compact('people','contact','invitations'));
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
            $new = array(Auth::user()->id =>'on');
            if($user->contact){
                $user->contact->people = $user->contact->people + $new;
                $user->contact->save();
            }else{
                $contact = new Contact;
                $contact->user_id = $user->id;
                $contact->people = $new;
                $contact->save();
            }
            $invitation->status = 'accepted';
        }
        $invitation->save();
        return response()->json(200);
    }

    public function acceptRequest(Request $request){
        $user = Auth::user();
        $new = array($request->person =>'on');
        if($user->contact){
            $user->contact->people = $user->contact->people + $new;
            $user->contact->save();
        }else{
            $contact = new Contact;
            $contact->user_id = $user->id;
            $contact->people = $new;
            $contact->save();
        }
        $invitation = Invitation::where('sender_id',$request->person)->where('receiver_id',$user->id)->where('expiry','>',Carbon::now())->first();
        $invitation->status = 'accepted';
        $invitation->save();
        return response()->json(200);
    }

    public function rejectRequest(Request $request){
        $user = Auth::user();
        $invitation = Invitation::where('sender_id',$request->person)->where('receiver_id',Auth::id())->where('expiry','>',Carbon::now())->first();
        $invitation->status = 'rejected';
        $invitation->saved();
        return response()->json(200);
    }

    public function block(Request $request){
        $contact = Contact::where('user_id',Auth::id())->first();
        $removal = array($request->person => $contact->people[$request->person]);
        $newarray = array_diff_assoc($contact->people,$removal);
        if($removal[$request->person] == "on"){
            $removal = array($request->person => 'off');
            $button = 'Block';
        }
        else{
            $removal = array($request->person => 'on');
            $button = 'Unblock';
        }

        $contact->people = $newarray + $removal;
        $contact->save();
        return response()->json(['button'=> $button]);
    }

    public function remove(Request $request){
        $contact = Contact::where('user_id',Auth::id())->first();
        $removal = array($request->person => $contact->people[$request->person]);
        $contact->people = array_diff_assoc($contact->people,$removal);
        $contact->save();
        return response()->json(200);
    }
}
