import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';


/**
 * @typedef {Object} LoginProps
 * @property {string} [status] - Status message from server
 * @property {boolean} canResetPassword - Whether password reset is available
 */

/**
 * Professional Login Page Component with Image Card
 *
 * Features:
 * - Static professional background
 * - Split-screen layout with image panel and form panel
 * - Logo and branding on image side
 * - Clean, modern form design
 * - Subtle entrance animations
 * - No public sign-up (admin-only account creation)
 *
 * @param {LoginProps} props - Component props
 */
export default function Login({ status }: { status?: string; canResetPassword: boolean }) {
    return (
        <>
            <Head title="Log in" />

            <PasskeyVerify />

            {/* Static professional background */}
            <div className="login-static-bg fixed inset-0 flex items-center justify-center p-4">
                {/* Main container - split layout */}
                <div className="login-card relative w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Image/Branding Panel */}
                        <div className="relative lg:w-1/2">
                            {/* Background image with overlay */}


                            {/* Content overlay */}
                            <div className="relative z-10 flex h-64 lg:h-full min-h-75 lg:min-h-150 flex-col justify-center p-8 lg:p-12">
                                <div className="login-slide-up login-stagger-1">
                                    {/* Logo */}
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                                        {/* <img
                                            src="/images/logo-rsud.png"
                                            alt="Logo"
                                            className="h-8 w-8 object-contain"
                                        /> */}
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                        Selamat Datang
                                    </h2>
                                    <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                                        Sistem Informasi Manajemen Jobdesk
                                    </p>
                                    <p className="mt-2 text-sm text-slate-400">
                                        Platform terintegrasi untuk pengelolaan tugas dan workflow organisasi
                                    </p>
                                </div>

                                {/* Bottom decoration */}
                                <div className="login-slide-up login-stagger-2 mt-8 lg:mt-12">
                                    <div className="flex items-center gap-3 text-sm text-slate-400">
                                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                        <span>Sistem Aktif</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Login Form Panel */}
                        <div className="relative lg:w-1/2 bg-slate-800 p-8 lg:p-12">
                            <div className="relative z-10">
                                {/* Form header */}
                                <div className="mb-8 login-slide-up login-stagger-2">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        Masuk ke Akun
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400">
                                        Masukkan kredensial Anda untuk melanjutkan
                                    </p>
                                </div>

                                <Form
                                    action={store()}
                                    //method="post"
                                    resetOnSuccess={['password']}
                                    className="flex flex-col gap-6"
                                >
                                    {({ processing, errors }) => (
                                        <>
                                            <div className="grid gap-5">
                                                {/* Email field */}
                                                <div className="grid gap-2 login-slide-up login-stagger-3">
                                                    <Label htmlFor="email" className="text-slate-300">
                                                        Alamat Email
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        name="email"
                                                        required
                                                        autoFocus
                                                        tabIndex={1}
                                                        autoComplete="email"
                                                        placeholder="nama@contoh.com"
                                                        className="login-form-input border-slate-600 bg-slate-700 text-white placeholder:text-slate-500"
                                                    />
                                                    <InputError message={errors.email} />
                                                </div>

                                                {/* Password field */}
                                                <div className="grid gap-2 login-slide-up login-stagger-4">
                                                    {/* <div className="flex items-center">
                                                        <Label htmlFor="password" className="text-slate-300">
                                                            Kata Sandi
                                                        </Label>
                                                        {canResetPassword && (
                                                            <TextLink
                                                                href={request()}
                                                                className="ml-auto text-sm text-indigo-400 hover:text-indigo-300"
                                                                tabIndex={5}
                                                            >
                                                                Lupa kata sandi?
                                                            </TextLink>
                                                        )}
                                                    </div> */}
                                                    <PasswordInput
                                                        id="password"
                                                        name="password"
                                                        required
                                                        tabIndex={2}
                                                        autoComplete="current-password"
                                                        placeholder="Masukkan kata sandi"
                                                        className="[::-ms-reveal]:hidden login-form-input border-slate-600 bg-slate-700 text-white placeholder:text-slate-500"
                                                    />
                                                    <InputError message={errors.password} />
                                                </div>

                                                {/* Remember me checkbox */}
                                                <div className="flex items-center space-x-3 login-slide-up login-stagger-5">
                                                    <Checkbox
                                                        id="remember"
                                                        name="remember"
                                                        tabIndex={3}
                                                        className="border-slate-500 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                                                    />
                                                    <Label htmlFor="remember" className="text-sm text-slate-300 cursor-pointer">
                                                        Ingat saya
                                                    </Label>
                                                </div>

                                                {/* Submit button */}
                                                <Button
                                                    type="submit"
                                                    className="login-submit-button login-slide-up login-stagger-5 w-full py-2.5 text-base font-semibold text-white"
                                                    tabIndex={4}
                                                    disabled={processing}
                                                    data-test="login-button"
                                                >
                                                    {processing && <Spinner className="mr-2 h-4 w-4" />}
                                                    {processing ? 'Masuk...' : 'Masuk'}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </Form>

                                {/* Footer */}
                                <div className="login-slide-up login-stagger-5 mt-8 text-center">
                                    <p className="text-xs text-slate-500">
                                        Hanya admin yang dapat mengakses sistem ini
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status message */}
            {status && (
                <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 animate-in slide-in-from-top fade-in duration-300">
                    <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-6 py-3 text-sm font-medium text-green-400 backdrop-blur-sm">
                        {status}
                    </div>
                </div>
            )}
        </>
    );
}
