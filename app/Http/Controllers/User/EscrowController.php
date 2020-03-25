<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EscrowController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $sentEscrow = Auth::user()->sent_escrow;
        $receivedEscrow = Auth::user()->received_escrow;
        //dd($receivedInvoice);
        return view('user.escrow.escrow',compact('sentEscrow','receivedEscrow'));
    }
}
