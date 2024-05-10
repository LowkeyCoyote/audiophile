import { HTMLAttributes } from 'react';

const Modal = ({children} : HTMLAttributes<HTMLDivElement> ) => {
  return (
    <div className=' w-screen h-screen top-24 left-0 fixed  bg-black bg-opacity-50'>
        <div className='w-screen h-5/6 top-24 left-0 right-0 bottom-0 fixed overflow-y-auto '>
            <div className='fixed !w-screen justify-center top-24 left-1/2 -translate-x-1/2  bg-white'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
