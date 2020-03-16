<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Invoice;
use App\Template;
use Illuminate\Http\Request;

class AssetController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function invoice(){
        $invoices = Invoice::all();
        return view('admin.invoice',compact('invoices'));
    }

    public function escrow(){
        $invoices = Invoice::all();
        return view('admin.escrow',compact('invoices'));
    }

    public function disputes(){
        $invoices = Invoice::all();
        return view('admin.disputes',compact('invoices'));
    }

    public function templates(){
        $invoices = Template::all();
        return view('admin.templates',compact('templates'));
    }
    public function saveTemplate(Request $request){
        
    }
}
