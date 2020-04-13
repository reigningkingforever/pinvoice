<?php

namespace App;

use App\Escrow;
use App\Invoice;
use App\Product;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    public function invoices(){
        return $this->morphedByMany(Invoice::class,'mediable');
    }
    public function escrows(){
        return $this->morphedByMany(Escrow::class,'mediable');
    }
    // public function products(){
    //     return $this->morphedByMany(Product::class,'mediable');
    // }
}
