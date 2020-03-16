<?php

namespace App;

use App\Role;
use App\Wallet;
use App\Contact;
use App\Invoice;
use App\Profile;
use App\Invitation;
use App\Conversation;
use App\PasswordHistory;
use App\SecurityQuestion;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','email', 'password','business','country'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function profiles(){
        return $this->hasMany(Profile::class);
    }
    public function wallets(){
        return $this->hasMany(Wallet::class);
    }
    public function role(){
        return $this->hasOne(Role::class);
    }
    public function isRole($value){
        return $this->role_id == Role::whereName($value)->first()->id? true:false;
    }
    public function sent_invoices(){
        return $this->hasMany(Invoice::class,'seller');
    }
    public function received_invoices(){
        return $this->hasMany(Invoice::class,'buyer');
    }
    public function sent_invitations(){
        return $this->hasMany(Invitation::class,'sender_id');
    }
    public function received_invitations(){
        return $this->hasMany(Invitation::class,'receiver_id');
    }
    public function conversations(){
        return $this->hasMany(Conversation::class);
    }
    public function contact(){
        return $this->hasOne(Contact::class);
    }
    public function password_histories(){
        return $this->hasMany(PasswordHistory::class);
    }

    public function getNameAttribute($value)
    {
        return ucwords($value);
    }

    public function setup(){
        return ($this->question1 && $this->question2 && $this->question3)? true:false;
    }

    public function securityQuestion1(){
        return $this->belongsTo(SecurityQuestion::class,'question1');
    }

    public function securityQuestion2(){
        return $this->belongsTo(SecurityQuestion::class,'question2');
    }
    public function securityQuestion3(){
        return $this->belongsTo(SecurityQuestion::class,'question3');
    }


}
