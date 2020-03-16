<?php

namespace App\Http\Controllers\User;

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
        //dd($receivedInvoice);
        return view('user.invoice.invoice',compact('sentInvoice','receivedInvoice'));
    }
}
