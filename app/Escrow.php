<?php

namespace App;

use App\Media;
use App\Product;
use Illuminate\Database\Eloquent\Model;

class Escrow extends Model
{
    public function products(){
        return $this->morphToMany(Product::class,'productible');
    }
    public function media(){
        return $this->morphToMany(Media::class,'mediable');
    }
}
