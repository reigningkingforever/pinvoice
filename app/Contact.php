<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $casts = [
        'people' => 'array',
    ];
    protected $fillable = ['people'];

    public function me(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function user(){
        return $this->belongsTo(User::class,'person');
    }
}
