import { gooeyToast  } from 'goey-toast';
import type {GooeyToastOptions} from 'goey-toast';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export function useToast() {
    const showToast = (
        type: ToastType,
        message: string,
        description?: string,
        duration: number = 4000,
    ) => {
        const options: GooeyToastOptions = {
            description,
            duration,
        };

        switch (type) {
            case 'success':
                gooeyToast.success(message, options);
                break;
            case 'error':
                gooeyToast.error(message, options);
                break;
            case 'warning':
                gooeyToast.warning(message, options);
                break;
            case 'info':
                gooeyToast.info(message, options);
                break;
        }
    };

    return {
        success: (message: string, description?: string) => showToast('success', message, description),
        error: (message: string, description?: string) => showToast('error', message, description),
        warning: (message: string, description?: string) => showToast('warning', message, description),
        info: (message: string, description?: string) => showToast('info', message, description),
    };
}
