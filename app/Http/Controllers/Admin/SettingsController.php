<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        return view('admin.settings');
    }

    public function global(Request $request){

    }

    public function throttle(Request $request){

    }

    public function notification(Request $request){

    }

    public function payments(Request $request){}
}
