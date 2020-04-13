<?php

namespace App\Http\Controllers\User;

use App\Media;
use App\Contact;
use App\Invoice;
use App\Product;
use App\Currency;
use Carbon\Carbon;
use App\Conversation;
use App\Http\Traits\MediaProcessorTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    use MediaProcessorTrait;

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $sentInvoice = Auth::user()->sent_invoices;
        $receivedInvoice = Auth::user()->received_invoices;
        $all = Invoice::where('seller',Auth::id())->orWhere('buyer',Auth::id())->pluck('id');
        $recentMessages = Conversation::where('assetable_type','App\Invoice')->whereIn('assetable_id',$all)->where('user_id','!=',Auth::id())->where('status',false)->orderBy('created_at','DESC')->get()->unique('assetable_id');
        //dd($sentInvoice[1]->products->sum('amount'));
        return view('user.invoice.list',compact('sentInvoice','receivedInvoice','recentMessages'));
    }
    public function create(){
        $contacts = Contact::where('user_id',Auth::id())->get();
        $currencies = Currency::all();
        return view('user.invoice.create',compact('contacts','currencies'));
    }
    public function view(Invoice $invoice){
        return view('user.invoice.view',compact('invoice'));
    }
    public function save(Request $request){
        //dd($request->all());
        //dd($request->file('product.file.0'));
        $all_media = [];
        $all_products = [];
        //now handle the products
        for($i = 0; $i < count($request->product['amount']); $i++){
            $product = new Product;
            if(array_key_exists('name',$request->product)) $product->name = $request->product['name'][$i];
            if(array_key_exists('description',$request->product)) $product->description = $request->product['description'][$i];
            if(array_key_exists('video',$request->product) && $request->product['video'][$i]){
                $videoname = $this->processVideo($request->product['video'][$i]);
                $product->video = $videoname;
            }
            if(array_key_exists('audio',$request->product) && $request->product['audio'][$i]){
                $audioname = $this->processAudio($request->product['audio'][$i]);
                $product->audio = $audioname;
            }
            if(array_key_exists('capture',$request->product) && $request->product['capture'][$i]){
                $imagename = $this->processImage($request->product['capture'][$i]);
                $product->image = $imagename;
            }
            if(array_key_exists('file',$request->product) && $request->product['file'][$i]) {
                $fileName = preg_replace('/\s+/', '_',$request->file("product.file.$i")->getClientOriginalName());
                $request->file("product.file.$i")->storeAs('public/asset',$fileName);
                $product->file = $fileName;
            }
            $product->cost = $request->product['cost'][$i];
            $product->quantity = $request->product['quantity'][$i];
            $product->amount = $request->product['amount'][$i];
            $product->save();
            $all_products[] = $product->id;
        }
        //handle invoice files and media
        if($request->invoicefile && $request->has('invoicefile')) {
            $medianame = preg_replace('/\s+/', '_',$request->file("invoicefile")->getClientOriginalName());
            $media = new Media;
            $media->name = $medianame;
            $media->format = $request->file("invoicefile")->getClientOriginalExtension();
            $request->file("invoicefile")->storeAs('public/asset',$medianame);
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->invoiceaudio) {
            $media = new Media;
            $medianame = $this->processImage($request->invoiceaudio);
            $media->name = $medianame;
            $media->format ="audio";
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->invoicevideo) {
            $media = new Media;
            $medianame = $this->processImage($request->invoicevideo);
            $media->name = $medianame;
            $media->format = "video";
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->invoicecamera) {
            $media = new Media;
            $medianame = $this->processImage($request->invoicecamera);
            $media->name = $medianame;
            $media->format = "jpg";
            $media->save();
            $all_media[] = $media->id;
        }
        //handle invoice
        foreach($request->receiver as $key => $receiver){
            $invoice = new Invoice;
            $invoice->template_id = 1;
            $invoice->seller = Auth::id();
            $invoice->buyer = $receiver;
            $invoice->amount = 0;
            $invoice->currency = $request->currency;
            if($request->tax) $invoice->tax = $request->tax;
            if($request->tax_type) $invoice->tax_type = $request->tax_type;
            if($request->discount) $invoice->discount = $request->discount;
            if($request->discount_type) $invoice->discount_type = $request->discount_type;
            if($request->discountexpiry) $invoice->discountexpiry = Carbon::now()->addDays($request->discountexpiry);
            if($request->penalty) $invoice->penalty = $request->penalty;
            if($request->penalty_type) $invoice->penalty_type = $request->penalty_type;
            if($request->penaltyperiod) $invoice->penaltyperiod = Carbon::now()->addDays($request->penaltyperiod);
            if($request->note) $invoice->note = $request->note;
            $invoice->save();
            $invoice->media()->attach($all_media);
            $invoice->products()->attach($all_products);
        }
        return redirect()->back()->with(['flash_type' => 'success','flash_title' => 'Success','flash_msg'=>'Invoice Created']); //with success;




        // dd($request->product['audio']);
        // file_put_contents('storage/asset/product.jpg', file_get_contents($request->product['capture'][0]));
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
