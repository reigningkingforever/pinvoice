<?php

namespace App;

use App\User;
use App\Invoice;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = ['status'];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function invoice(){
        return $this->belongsTo(Invoice::class);
    }
}
