import { useRef, RefObject, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '@redux/cartSlice';
import { RootState } from '@redux/store';

import CartCheckout from '@components/checkout/CartCheckout';
import FormCheckout from '@components/checkout/FormCheckout';
import ConfirmationCheckout from '@components/checkout/ConfirmationCheckout';
import Modal from '@components/shared/ui/Modal';

import { ItemState } from '../types/types';

import useModalScrollLock from '@hooks/useModalScrollLock';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const [openModal, setOpenModal] = useState(false);
    const [orderDetails, setOrderDetails] = useState<ItemState[]>(cart);

    useModalScrollLock(openModal);

    const submitRef = useRef<HTMLButtonElement>(null!);

    const submitForm = (submitRef: RefObject<HTMLButtonElement>) => {
        if (submitRef && submitRef.current) {
            submitRef.current.click();
        }
    };

    const successCommand = () => {
        setOpenModal(true);
        setOrderDetails(cart);
        dispatch(clearCart());
    };

    return (
        <section className=" bg-[#F2F2F2] px-40 pb-36 pt-20 md:px-10 md:pb-28 md:pt-12 sm:px-6 sm:pb-24 sm:pt-4">
            <Link to={'/'} className="block w-fit">
                <p className="w-fit opacity-50">Go back</p>
            </Link>
            <div className="flex gap-7 pt-14 md:flex-col md:gap-8 md:pt-6">
                <div className=" w-[68%] md:w-full">
                    <FormCheckout
                        submitRef={submitRef}
                        onSubmit={() => successCommand()}
                    />
                </div>
                <div className="w-[32%] md:w-full">
                    <CartCheckout submitForm={() => submitForm(submitRef)} />
                </div>
                {openModal && (
                    <Modal modalClose={() => setOpenModal(false)}>
                        <ConfirmationCheckout items={orderDetails} />
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default CheckoutPage;
