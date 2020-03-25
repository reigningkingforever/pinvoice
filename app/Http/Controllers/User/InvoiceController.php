<?php

namespace App\Http\Controllers\User;

use App\Conversation;
use App\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $sentInvoice = Auth::user()->sent_invoices;
        $receivedInvoice = Auth::user()->received_invoices;
        $all = Invoice::where('seller',Auth::id())->orWhere('buyer',Auth::id())->pluck('id');
        $recentMessages = Conversation::where('assetable_type','App\Invoice')->whereIn('assetable_id',$all)->where('user_id','!=',Auth::id())->where('status',false)->orderBy('created_at','DESC')->get()->unique('assetable_id');
        // $conversation = [];
        return view('user.invoice.invoice',compact('sentInvoice','receivedInvoice','recentMessages'));
    }

    public function showConversation(Request $request){
        $conversation = Conversation::where('assetable_type','App\Invoice')->where('assetable_id',$request->invoice_id)->orderBy('created_at','ASC')->get();
        foreach($conversation->where('user_id','!=',Auth::id()) as $converse){
            $converse->status = true;
            $converse->save();
        }
        return view('user.chat.conversation',compact('conversation'));
    }
}
