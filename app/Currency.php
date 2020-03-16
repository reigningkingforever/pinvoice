<?php

namespace App;

use App\Wallet;
use App\Payment;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public function wallets(){
        return $this->hasMany(Wallet::class);
    }
    public function payments(){
        return $this->hasMany(Payment::class);
    }
}
