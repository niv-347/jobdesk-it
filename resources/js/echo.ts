import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
    interface Window {
        Echo: Echo<any>;
    }
}

if (typeof window !== 'undefined') {
    const pusher = new Pusher(import.meta.env.VITE_REVERB_APP_KEY ?? 'local', {
        cluster: 'mt1',
        forceTLS: false,
    });

    window.Echo = new Echo({
        broadcaster: 'reverb',
        client: pusher,
        key: import.meta.env.VITE_REVERB_APP_KEY ?? 'local',
        wsHost: import.meta.env.VITE_REVERB_HOST ?? 'localhost',
        wsPort: parseInt(import.meta.env.VITE_REVERB_PORT ?? '8080', 10),
        wssPort: parseInt(import.meta.env.VITE_REVERB_PORT ?? '8080', 10),
        forceTLS: import.meta.env.VITE_REVERB_SCHEME === 'https',
        enabledTransports: ['ws', 'wss'],
        disableStats: true,
    });
}
