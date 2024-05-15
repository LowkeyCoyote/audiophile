import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalProps extends HTMLAttributes<HTMLDivElement>{
    modalClose : () => void;
    modalPosition ?: string;
}


const Modal = ({ children, modalClose, modalPosition }: ModalProps) => {
    return (
        <div className="fixed right-0 top-0 w-full h-full z-30">
            <div onClick={modalClose}  className="absolute right-0 top-0 w-full h-full z-40 bg-black/[0.5]"></div>
            <div
                className={twMerge(`z-50 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2
            max-h-[90%] overflow-auto bg-white box-border rounded-lg
            `, modalPosition)}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
