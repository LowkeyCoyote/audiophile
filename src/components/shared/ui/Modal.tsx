import React from 'react'
import { HTMLAttributes } from 'react';

const Modal = ({children} : HTMLAttributes<HTMLDivElement> ) => {
  return (
    <div className='w-screen h-screen top-0 left-0 right-0 bottom-0 fixed overflow-y-auto'>
        <div className='w-screen h-screen top-0 left-0 right-0 bottom-0 fixed overflow-y-auto bg-black bg-opacity-50'>
            <div className='absolute justify-center top-1/2 left-1/2 -translate-x-1/2 - translate-y-1/2 bg-white'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
