<?php

namespace App\Http\Controllers\User;

use App\Conversation;
use App\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request){
        $user = Auth::user();
        $conversations = Conversation::where('invoice_id',$request->invoice)->get();
        Conversation::where('invoice_id',$request->invoice)->where('user_id','!=',$user->id)->update(['status'=> 'read']);
        $invoice = Invoice::find($request->invoice);
        if($invoice->status == 'closed')
            return redirect()->back();
        if($invoice->seller == $user->id && $conversations->isEmpty())
            return redirect()->back();
        return view('user.chat',compact('invoice','conversations'));
    }
    public function sendMessage(Request $request){
        $conversation = new Conversation;
        $conversation->invoice_id = $request->invoice;
        $conversation->user_id = Auth::id();
        $conversation->format = 'text';
        $conversation->body = $request->message;
        $conversation->save();
        return view('user.conversation',['conversation'=> $conversation]);
    }
    public function sendFile(Request $request){
        //dd($request->all());
        $fileName = $request->file('file')->getClientOriginalName().$request->file('file')->getClientOriginalExtension();
        $fileType = $request->file('file')->getClientOriginalExtension();
        $request->file('file')->storeAs('public/chat',$fileName);
        $conversation = new Conversation;
        $conversation->invoice_id = $request->invoice;
        $conversation->user_id = Auth::id();
        $conversation->format = $fileType;
        $conversation->body = $fileName;
        $conversation->save();

        return view('user.conversation',['conversation'=> $conversation]);
    }
    public function sendCaptured(Request $request){
        $fileName = time().'.jpg';
        $fileType = 'jpg';
        file_put_contents('storage/chat/'.$fileName, base64_decode($request->image1));
        $conversation = new Conversation;
        $conversation->invoice_id = $request->invoice;
        $conversation->user_id = Auth::id();
        $conversation->format = $fileType;
        $conversation->body = $fileName;
        $conversation->save();

        return view('user.conversation',['conversation'=> $conversation]);
    }


    public function getMessage(Request $request){
        $conversation = Conversation::where('invoice_id',$request->invoice)->where('user_id','!=',Auth::id())->where('status','sent')->first();
        if(blank($conversation))
        return response()->json(403);
        else
        return view('user.conversation',['conversation'=> $conversation]);
    }
}
