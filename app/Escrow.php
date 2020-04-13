<?php

namespace App;

use App\User;
use App\Media;
use App\Product;
use App\Currency;
use App\Conversation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Escrow extends Model
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
    public function products(){
        return $this->morphToMany(Product::class,'productible');
    }
    public function media(){
        return $this->morphToMany(Media::class,'mediable');
    }
}
