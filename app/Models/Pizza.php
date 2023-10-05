<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'chef',
    ];

    public function getChefAttribute(): string 
    {
        return $this->user->name;
    }
    
    //relacao via model
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
