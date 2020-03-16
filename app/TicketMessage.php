<?php

namespace App;

use App\User;
use App\Ticket;
use Illuminate\Database\Eloquent\Model;

class TicketMessage extends Model
{
    protected $fillable = ['ticket_id','body','format','type','user_id'];


    protected $touches = ['ticket'];

    public function ticket(){
        return $this->belongsTo(Ticket::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
