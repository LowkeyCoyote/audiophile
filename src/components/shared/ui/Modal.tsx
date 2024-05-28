import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  modalClose: () => void;
  modalPosition?: string;
}

const Modal = ({ children, modalClose, modalPosition }: ModalProps) => {
  return (
    <div className="fixed right-0 top-0 z-30 h-full w-full">
      <div onClick={modalClose} className="absolute right-0 top-0 z-40 h-full w-full bg-black/[0.5]"></div>
      <div
        className={twMerge(
          `absolute right-1/2 top-1/2 z-50 box-border max-h-[90%]
            -translate-y-1/2 translate-x-1/2 overflow-auto rounded-lg bg-white
            `,
          modalPosition
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
