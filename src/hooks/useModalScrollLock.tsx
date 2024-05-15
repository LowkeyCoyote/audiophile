import { useEffect } from 'react';

const useModalScrollLock = (isOpen: boolean) => {
    useEffect(() => {
        const originalOverflowStyle = document.body.style.overflow;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalOverflowStyle;
        }

        return () => {
            document.body.style.overflow = originalOverflowStyle;
        };
    }, [isOpen]);
};

export default useModalScrollLock;