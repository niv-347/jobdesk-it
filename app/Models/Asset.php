<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Asset extends Model
{
    protected $fillable = [
        'user_id',
        'nama_barang',
        'kode_barang',
        'kategori',
        'merk',
        'tipe',
        'serial_number',
        'spesifikasi',
        'tahun_perolehan',
        'harga_perolehan',
        'lokasi',
        'status',
        'keterangan',
        'file_path',
    ];

    protected $casts = [
        'harga_perolehan' => 'decimal:2',
        'tahun_perolehan' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
