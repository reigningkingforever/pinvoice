<?php

namespace App;

use App\User;
use App\Currency;
use App\Conversation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at','expiry'];

    public function getSeller(){
        return $this->belongsTo(User::class,'seller');
    }
    public function getBuyer(){
        return $this->belongsTo(User::class,'buyer');
    }
    public function getCurrency(){
        return $this->belongsTo(Currency::class,'currency');
    }

    public function conversations()
    {
        return $this->morphMany(Conversation::class,'assetable');
    }
}
