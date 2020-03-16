<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['iso_code','name','currency','currency_code','dialing_code'];
}
