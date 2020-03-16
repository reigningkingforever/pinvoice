<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{
    use SoftDeletes;
    protected $fillable = ['user_id','name','position','password'];
    protected $dates = ['deleted_at'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
