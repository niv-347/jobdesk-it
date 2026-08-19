<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RadiologiShare extends Model
{
    protected $fillable = [
        'user_id',
        'radiologi_id',
        'token',
        'nama_pasien',
        'tgl_lahir',
        'tgl_pemeriksaan',
        'jenis_pemeriksaan',
        'file_path',
        'foto_rontgen_path',
        'qr_path',
        'expires_at',
    ];

    protected $casts = [
        'tgl_lahir' => 'date',
        'tgl_pemeriksaan' => 'date',
        'expires_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function radiologi(): BelongsTo
    {
        return $this->belongsTo(Radiologi::class);
    }
}
