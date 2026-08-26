import { Form, Head } from '@inertiajs/react';
import { Eye, EyeOff, Info, Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import PasskeyVerify from '@/components/passkey-verify';
import TextLink from '@/components/text-link';
import { store } from '@/routes/login';
import { loginOptions, login as passkeyLogin } from '@/routes/passkey';
import password from '@/routes/password';

type Props = {
    canResetPassword?: boolean;
    status?: string | null;
};

export default function Login({ canResetPassword, status }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="login-status-enter mb-6 flex items-start rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/60 dark:text-emerald-200">
                    <Info className="me-3 mt-0.5 size-4 shrink-0" />
                    <span>{status}</span>
                </div>
            )}

            <div className="login-glass-card w-full">
                <div className="p-8">
                    <PasskeyVerify
                        routes={{
                            options: loginOptions.get(),
                            submit: passkeyLogin.post(),
                        }}
                        label="Continue with passkey"
                        loadingLabel="Authenticating..."
                        separator="Or continue with email"
                    />

                    <Form
                        action={store.url()}
                        method="post"
                        resetOnSuccess={['password']}
                        disableWhileProcessing
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="login-float-group mb-5">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        autoComplete="email"
                                        placeholder=" "
                                        className="login-float-input w-full"
                                    />
                                    <label htmlFor="email" className="login-float-label">
                                        Email address
                                    </label>
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <div className="login-float-group login-password-wrapper mb-5">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        required
                                        autoComplete="current-password"
                                        placeholder=" "
                                        className="login-float-input w-full"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                    <label htmlFor="password" className="login-float-label">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        tabIndex={-1}
                                        className="login-password-toggle"
                                        onClick={() => setShowPassword((v) => !v)}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                    {errors.password && (
                                        <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            name="remember"
                                            value="1"
                                            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span>Remember me</span>
                                    </label>

                                    {canResetPassword && (
                                        <TextLink
                                            href={password.request.url()}
                                            className="text-sm"
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="login-shimmer-btn flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                                    data-test="login-submit-button"
                                >
                                    {processing && <Loader2 className="h-4 w-4 animate-spin" />}
                                    <span>Log in</span>
                                </button>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}

Login.layout = {
    title: 'Sign in to your account',
    description: 'Enter your email and password to continue',
};
