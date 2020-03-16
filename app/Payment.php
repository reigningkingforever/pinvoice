<?php

namespace App;

use App\Currency;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function currency(){
        return $this->belongsTo(Currency::class);
    }
}
