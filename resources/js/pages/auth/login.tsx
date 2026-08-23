import { Form, Head } from '@inertiajs/react';
import { Eye, EyeOff, Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';

function usePasswordStrength(password: string) {
    return useMemo(() => {
        if (!password) {

            return { score: 0, label: '', color: '' };
            }

        let score = 0;

        if (password.length >= 8) {
            score++;
            }

        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            score++;
        }

        if (/\d/.test(password)) {
            score++;
        }

        if (/[^a-zA-Z\d]/.test(password)) {
            score++;
        }

        const levels = [
            { threshold: 0, label: '', color: '' },
            { threshold: 1, label: 'Lemah', color: 'weak' },
            { threshold: 2, label: 'Sedang', color: 'medium' },
            { threshold: 3, label: 'Kuat', color: 'medium' },
            { threshold: 4, label: 'Sangat Kuat', color: 'strong' },
        ];

        const level = levels[score];

        return { score, label: level.label, color: level.color };
    }, [password]);
}

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mousePosition;
}

export default function Login({ status }: { status?: string; canResetPassword: boolean }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [isFocused, setIsFocused] = useState<'email' | 'password' | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const mousePosition = useMousePosition();

    const strength = usePasswordStrength(password);

    useEffect(() => {
        const timer = setTimeout(() => {
            cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const cardTransform = {
        transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) translateY(0px)`,
    };

    return (
        <>
            <Head title="Masuk" />

            <PasskeyVerify />

            {/* Animated Background */}
            <div className="login-bg fixed inset-0 flex items-center justify-center p-4">
                {/* Interactive Floating Shapes */}
                <div className="login-interactive-shapes">
                    <div
                        className="login-shape login-shape-1"
                        style={{
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
                        }}
                    />
                    <div
                        className="login-shape login-shape-2"
                        style={{
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.015}px, ${(mousePosition.y - window.innerHeight / 2) * -0.015}px)`
                        }}
                    />
                    <div
                        className="login-shape login-shape-3"
                        style={{
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
                        }}
                    />
                    <div
                        className="login-shape login-shape-4"
                        style={{
                            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.025}px, ${(mousePosition.y - window.innerHeight / 2) * -0.025}px)`
                        }}
                    />
                </div>

                {/* Floating Orbs */}
                <div className="login-orb login-orb-1" />
                <div className="login-orb login-orb-2" />
                <div className="login-orb login-orb-3" />

                {/* Main Card with 3D Tilt */}
                <div
                    ref={cardRef}
                    className="login-glass-card relative w-full max-w-md rounded-3xl p-8 md:p-10"
                    style={cardTransform}
                >
                    {/* Branding */}
                    <div className="mb-8 text-center">
                        <div className="login-brand-icon mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-cyan-500 shadow-xl">
                            <ShieldCheck className="h-10 w-10 text-white" />
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-3">
                            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
                                Sistem Terpadu
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                            Selamat Datang
                        </h1>
                        <p className="text-sm text-slate-500 font-medium">
                            Masuk ke Sistem Informasi Manajemen Jobdesk
                        </p>
                    </div>

                    <Form
                        action={store()}
                        resetOnSuccess={['password']}
                        className="space-y-5"
                    >
                        {({ processing, errors }) => (
                            <>
                                {/* Email Field */}
                                <div className="login-input-wrapper">
                                    <div className="login-float-group">
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder=" "
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setIsFocused('email')}
                                            onBlur={() => setIsFocused(null)}
                                            className="login-float-input"
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`login-float-label ${isFocused === 'email' || email ? 'top-0 text-xs text-indigo-600' : ''}`}
                                        >
                                            <Mail className="inline-block h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                                            Alamat Email
                                        </label>
                                        <InputError message={errors.email} />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="login-input-wrapper">
                                    <div className="login-float-group">
                                        <div className="login-password-wrapper">
                                            <Input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder=" "
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setIsFocused('password')}
                                                onBlur={() => setIsFocused(null)}
                                                className="login-float-input pr-12"
                                            />
                                            <label
                                                htmlFor="password"
                                                className={`login-float-label ${isFocused === 'password' || password ? 'top-0 text-xs text-indigo-600' : ''}`}
                                            >
                                                <Lock className="inline-block h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                                                Kata Sandi
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="login-password-toggle"
                                                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                                                tabIndex={-1}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>

                                        {/* Password Strength Indicator */}
                                        {password && (
                                            <div className="mt-2.5 space-y-1.5">
                                                <div className="login-strength-bar">
                                                    {[1, 2, 3, 4].map((level) => (
                                                        <div
                                                            key={level}
                                                            className={`login-strength-segment ${strength.score >= level ? `active ${strength.color}` : ''}`}
                                                        />
                                                    ))}
                                                </div>
                                                {strength.label && (
                                                    <p className="text-xs text-slate-500 font-medium">
                                                        Kekuatan kata sandi: <span className="text-slate-700 font-semibold">{strength.label}</span>
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        <InputError message={errors.password} />
                                    </div>
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2.5">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                            checked={remember}
                                            onCheckedChange={(checked) => setRemember(checked === true)}
                                            tabIndex={3}
                                            className="border-slate-300 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                                        />
                                        <Label
                                            htmlFor="remember"
                                            className="text-sm text-slate-600 cursor-pointer select-none font-medium"
                                        >
                                            Ingat saya
                                        </Label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="login-shimmer-btn w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing ? (
                                        <>
                                            <Spinner className="mr-2 h-4 w-4" />
                                            Memverifikasi...
                                        </>
                                    ) : (
                                        'Masuk'
                                    )}
                                </Button>
                            </>
                        )}
                    </Form>

                    {/* Footer */}
                    <div className="login-divider">
                        <div className="login-divider-line" />
                        <span className="login-divider-text">Akses Terbatas</span>
                        <div className="login-divider-line" />
                    </div>
                    <p className="text-center text-xs text-slate-400 font-medium">
                        Hanya admin yang dapat mengakses sistem ini
                    </p>
                </div>
            </div>

            {/* Status Message */}
            {status && (
                <div className="login-status-enter fixed top-6 left-1/2 z-50">
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 backdrop-blur-md shadow-lg">
                        {status}
                    </div>
                </div>
            )}
        </>
    );
}
