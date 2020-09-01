<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InfoBox extends Model
{
    protected $fillable = [
        'id', 'title', 'image', 'textWidth'
    ];
}
