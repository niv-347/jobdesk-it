<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sop extends Model
{
    use HasFactory;

    protected $fillable = [
        'nomor_sop',
        'judul',
        'kategori',
        'deskripsi',
        'pengertian',
        'tujuan',
        'kebijakan',
        'prosedur',
        'unit_terkait',
        'file_path',
        'status',
        'approved_by',
        'approved_at',
    ];

    protected $casts = [
        'approved_at' => 'datetime',
    ];
}
