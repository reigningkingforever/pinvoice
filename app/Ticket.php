<?php

namespace App;

use App\User;
use App\TicketMessage;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['user_id','subject','category'];

    public function ticketmessages(){
        return $this->hasMany(TicketMessage::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
