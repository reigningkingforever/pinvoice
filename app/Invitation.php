<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invitation extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at','expiry'];

    public function sender(){
        return $this->belongsTo(User::class,'sender_id');
    }
}
