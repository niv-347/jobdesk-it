<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Radiologi extends Model
{
    protected $fillable = [
        'user_id',
        'nama_pasien',
        'no_rm',
        'tgl_lahir',
        'tgl_pemeriksaan',
        'jenis_pemeriksaan',
        'hasil_ekpertise',
        'file_path',
        'foto_rontgen_path',
        'keterangan',
    ];

    protected $casts = [
        'tgl_pemeriksaan' => 'date',
        'tgl_lahir' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
