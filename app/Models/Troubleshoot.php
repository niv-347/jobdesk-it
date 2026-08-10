<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Troubleshoot extends Model
{
    use HasFactory;

    protected $table = 'troubleshoots';

    protected $fillable = [
        'kode_tiketing',
        'kategori_sistem',
        'judul_masalah',
        'deskripsi_masalah',
        'gejala',
        'penyebab',
        'solusi_langkah',
        'unit_pelapor',
        'status',
        'tingkat_urgensi',
        'petugas_it',
        'timeline',
    ];

    protected $casts = [
        'timeline' => 'array',
    ];

    /**
     * Auto-generate Kode Tiketing unik saat pembuatan data baru
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($troubleshoot) {
            if (empty($troubleshoot->kode_tiketing)) {
                $year = date('Y');
                $lastId = static::max('id') + 1;
                $troubleshoot->kode_tiketing = 'TRB-' . $year . '-' . str_pad($lastId, 4, '0', STR_PAD_LEFT);
            }
        });
    }
}
