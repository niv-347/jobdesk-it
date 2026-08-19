import { router } from '@inertiajs/react';
import { gooeyToast } from 'goey-toast';
import { useEffect } from 'react';
import type { FlashToast } from '@/types/ui';

export function useFlashToast(): void {
    useEffect(() => {
        return router.on('flash', (event) => {
            const flash = (event as CustomEvent).detail?.flash;
            const data = flash?.toast as FlashToast | undefined;

            if (!data) {
                return;
            }

            gooeyToast[data.type](data.message);
        });
    }, []);
}
