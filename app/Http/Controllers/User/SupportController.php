<?php

namespace App\Http\Controllers\User;

use App\Ticket;
use App\TicketMessage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SupportController extends Controller
{
    public function index(){
        $supports = Ticket::where('user_id',Auth::id())->orderby('created_at','desc')->get();
        return view('user.support',compact('supports'));
    }
    public function details(Ticket $ticket){
        return view('user.supportdetails',compact('ticket'));
    }
    public function newSupport(Request $request){
        $ticket = Ticket::create(['user_id'=> Auth::id(),'subject'=>$request->subject,'category'=>$request->category]);
        $message = TicketMessage::create(['ticket_id'=>$ticket->id,'body'=>$request->message,'type'=>'user','user_id'=> Auth::id()]);
        //event(new UserRequestingSupport($message));
        return redirect()->route('supportdetails',$ticket);

    }
    public function updateSupport(Request $request){
        $ticket = Ticket::find($request->ticket_id);
        $message = new TicketMessage;
        $message->ticket_id = $ticket->id;
        //check for format
        $message->body = $request->message;
        $message->type = 'user';
        $message->user_id = Auth::id();
        $message->save();
        //event(new UserRequestingSupport($message));
        return redirect()->back(); //with success
    }
    public function close(Ticket $ticket){
        $ticket->status = 'closed';
        $ticket->save();
        return redirect()->route('user.support.index')->with(['flash_type' => 'success','flash_msg'=>'Ticket closed successfully']);
    }
    public function category($category){
        //all support
        $tickets = Ticket::where('category',$category)->orderBy('created_at','DESC')->get();
        return view('user.support.ticket',compact('tickets'));
    }

}
