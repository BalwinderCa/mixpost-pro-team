<?php

namespace Inovector\Mixpost\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostVersion extends Model
{
    use HasFactory;

    public $table = 'mixpost_post_versions';

    public $timestamps = false;

    protected $fillable = [
        'account_id',
        'is_original',
        'content',
        'options'
    ];

    protected $casts = [
        'is_original' => 'boolean',
        'content' => 'array',
        'options' => 'array'
    ];
}
