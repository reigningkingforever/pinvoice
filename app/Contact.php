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

    public function user(){
        return $this->belongsTo(User::class);
    }
}
