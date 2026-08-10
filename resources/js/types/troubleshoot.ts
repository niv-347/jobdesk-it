export interface TroubleshootData {
    id: number;
    kode_tiketing: string;
    kategori_sistem: string;
    judul_masalah: string;
    deskripsi_masalah: string;
    gejala?: string | null;
    penyebab?: string | null;
    solusi_langkah: string;
    unit_pelapor?: string | null;
    status: string;
    tingkat_urgensi: string;
    petugas_it?: string | null;
    timeline?: Array<{
        aksi: string;
        catatan?: string;
        user: string;
        timestamp: string;
    }>;
    created_at?: string | null;
    updated_at?: string | null;
}
