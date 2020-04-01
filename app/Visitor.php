<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $fillable = [
        'ip_address',
        'url',
        'country',
        'state',
        'city',
        'user_id',
        'device_type',
        'device_name',
        'platform',
        'browser',
        'language' ,
        'method'
    ];
}
