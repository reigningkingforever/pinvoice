<?php

namespace App\Http\Controllers\User;

use App\Media;
use App\Contact;
use App\Escrow;
use App\Product;
use App\Currency;
use Carbon\Carbon;
use App\Conversation;
use App\Http\Traits\MediaProcessorTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EscrowController extends Controller
{
    use MediaProcessorTrait;

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $sentEscrow = Auth::user()->sent_escrows;
        $receivedEscrow = Auth::user()->received_escrows;
        $all = Escrow::where('seller',Auth::id())->orWhere('buyer',Auth::id())->pluck('id');
        $recentMessages = Conversation::where('assetable_type','App\Escrow')->whereIn('assetable_id',$all)->where('user_id','!=',Auth::id())->where('status',false)->orderBy('created_at','DESC')->get()->unique('assetable_id');
        //dd($sentEscrow[1]->products->sum('amount'));
        return view('user.escrow.list',compact('sentEscrow','receivedEscrow','recentMessages'));
    }
    public function create(){
        $contacts = Contact::where('user_id',Auth::id())->get();
        $currencies = Currency::all();
        return view('user.escrow.create',compact('contacts','currencies'));
    }
    public function view(Escrow $escrow){
        return view('user.escrow.view',compact('escrow'));
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
        //handle escrow files and media
        if($request->escrowfile && $request->has('escrowfile')) {
            $medianame = preg_replace('/\s+/', '_',$request->file("escrowfile")->getClientOriginalName());
            $media = new Media;
            $media->name = $medianame;
            $media->format = $request->file("escrowfile")->getClientOriginalExtension();
            $request->file("escrowfile")->storeAs('public/asset',$medianame);
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->escrowaudio) {
            $media = new Media;
            $medianame = $this->processImage($request->escrowaudio);
            $media->name = $medianame;
            $media->format ="audio";
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->escrowvideo) {
            $media = new Media;
            $medianame = $this->processImage($request->escrowvideo);
            $media->name = $medianame;
            $media->format = "video";
            $media->save();
            $all_media[] = $media->id;
        }
        if($request->escrowcamera) {
            $media = new Media;
            $medianame = $this->processImage($request->escrowcamera);
            $media->name = $medianame;
            $media->format = "jpg";
            $media->save();
            $all_media[] = $media->id;
        }
        //handle escrow
        foreach($request->receiver as $key => $receiver){
            $escrow = new Escrow;
            $escrow->template_id = 1;
            $escrow->seller = Auth::id();
            $escrow->buyer = $receiver;
            $escrow->amount = 0;
            $escrow->currency = $request->currency;
            if($request->tax) $escrow->tax = $request->tax;
            if($request->tax_type) $escrow->tax_type = $request->tax_type;
            if($request->discount) $escrow->discount = $request->discount;
            if($request->discount_type) $escrow->discount_type = $request->discount_type;
            if($request->discountexpiry) $escrow->discountexpiry = Carbon::now()->addDays($request->discountexpiry);
            if($request->penalty) $escrow->penalty = $request->penalty;
            if($request->penalty_type) $escrow->penalty_type = $request->penalty_type;
            if($request->penaltyperiod) $escrow->penaltyperiod = Carbon::now()->addDays($request->penaltyperiod);
            if($request->note) $escrow->note = $request->note;
            $escrow->save();
            $escrow->media()->attach($all_media);
            $escrow->products()->attach($all_products);
        }
        return redirect()->back()->with(['flash_type' => 'success','flash_title' => 'Success','flash_msg'=>'Escrow Created']); //with success;




        // dd($request->product['audio']);
        // file_put_contents('storage/asset/product.jpg', file_get_contents($request->product['capture'][0]));
        // return 'success';
    }

    public function showConversation(Request $request){
        $escrow_id = $request->escrow_id;
        $conversation = Conversation::where('assetable_type','App\Escrow')->where('assetable_id',$escrow_id)->orderBy('created_at','ASC')->get();
        //dd($conversation);
        if($conversation){
            foreach($conversation->where('user_id','!=',Auth::id()) as $converse){
                $converse->status = true;
                $converse->save();
            }
        }
        return view('user.chat.conversation',compact('conversation','escrow_id'));
    }
}
