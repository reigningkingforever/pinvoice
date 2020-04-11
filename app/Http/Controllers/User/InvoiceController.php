<?php

namespace App\Http\Controllers\User;

use App\Contact;
use App\Conversation;
use App\Currency;
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
    public function create(){
        $contacts = Contact::where('user_id',Auth::id())->get();
        $currencies = Currency::all();
        return view('user.invoice.create',compact('contacts','currencies'));
    }
    public function save(Request $request){

        // dd($request->product['audio']);
        // file_put_contents('storage/chat/product.jpg', file_get_contents($request->product['capture'][0]));
        // return 'success';
    }

    public function showConversation(Request $request){
        $invoice_id = $request->invoice_id;
        $conversation = Conversation::where('assetable_type','App\Invoice')->where('assetable_id',$invoice_id)->orderBy('created_at','ASC')->get();
        //dd($conversation);
        if($conversation){
            foreach($conversation->where('user_id','!=',Auth::id()) as $converse){
                $converse->status = true;
                $converse->save();
            }
        }
        return view('user.chat.conversation',compact('conversation','invoice_id'));
    }
}
