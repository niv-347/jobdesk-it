export interface SopData {
    id: number;
    nomor_sop: string;
    judul: string;
    kategori: string;
    deskripsi?: string;
    pengertian?: string;
    tujuan?: string;
    kebijakan?: string;
    prosedur?: string;
    unit_terkait?: string;
    status?: string;
    file_path?: string;
    approved_by?: number;
    approved_at?: string;
    created_at?: string;
    updated_at?: string;
}
