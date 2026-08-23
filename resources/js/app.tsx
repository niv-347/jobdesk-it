import { createInertiaApp } from '@inertiajs/react';

import 'goey-toast/styles.css';
import '../css/loading.css';

import { GooeyToaster } from 'goey-toast';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { ComponentType } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import { useFlashToast } from '@/hooks/use-flash-toast';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

function FlashToastListener() {
    useFlashToast();

    return null;
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) =>
        resolvePageComponent<ComponentType<any>>(
            `./pages/${name}.tsx`,
            import.meta.glob<ComponentType<any>>('./pages/**/*.tsx'),
        ),

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];

            default:
                return AppLayout;
        }
    },

    strictMode: false,

    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <GooeyToaster position="bottom-right" />
                <FlashToastListener />
            </TooltipProvider>
        );
    },

    progress: {
        color: '#4B5563',
    },
});

// Initialize theme only in browser to avoid SSR issues
if (typeof window !== 'undefined') {
    initializeTheme();
}

// HMR support for page components
if (import.meta.hot) {
    import.meta.hot.accept();
}
