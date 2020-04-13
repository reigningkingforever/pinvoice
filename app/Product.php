<?php

namespace App;

use App\Invoice;
use App\Escrow;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function invoices(){
        return $this->morphedByMany(Invoice::class,'productible');
    }
    public function escrows(){
        return $this->morphedByMany(Escrow::class,'productible');
    }
    
}
