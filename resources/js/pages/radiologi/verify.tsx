import { Head, useForm } from '@inertiajs/react';
import { Search } from 'lucide-react';

export default function VerifyRadiologi() {
    const { data, setData, post, processing, errors } = useForm({
        no_rm: '',
        tgl_lahir: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/radiologi/verify');
    };

    return (
        <>
            <Head title="Verifikasi Ekspertise Radiologi" />

            <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-slate-50 p-4">
                <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-lg">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl font-bold text-slate-900">Verifikasi Ekspertise Radiologi</h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Masukkan No RM dan Tanggal Lahir untuk melihat hasil
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="no_rm" className="mb-1 block text-sm font-medium text-slate-700">
                                No RM *
                            </label>
                            <input
                                id="no_rm"
                                type="text"
                                value={data.no_rm}
                                onChange={(e) => setData('no_rm', e.target.value)}
                                placeholder="Masukkan No RM"
                                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                            {errors.no_rm && <p className="mt-1 text-xs text-red-500">{errors.no_rm}</p>}
                        </div>

                        <div>
                            <label htmlFor="tgl_lahir" className="mb-1 block text-sm font-medium text-slate-700">
                                Tanggal Lahir *
                            </label>
                            <input
                                id="tgl_lahir"
                                type="date"
                                value={data.tgl_lahir}
                                onChange={(e) => setData('tgl_lahir', e.target.value)}
                                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
                            />
                            {errors.tgl_lahir && <p className="mt-1 text-xs text-red-500">{errors.tgl_lahir}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing || !data.no_rm || !data.tgl_lahir}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
                        >
                            {processing && <Search className="h-4 w-4 animate-spin" />}
                            Verifikasi
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
