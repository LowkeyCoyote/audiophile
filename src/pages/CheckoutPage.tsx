import { Link } from 'react-router-dom';
import CartCheckout from '@components/checkout/CartCheckout';
import FormCheckout from '@components/checkout/FormCheckout';
import { useRef, MutableRefObject } from 'react';

const CheckoutPage = () => {
    const submitRef = useRef<HTMLButtonElement>();
    const submitForm = (submitRef : MutableRefObject<HTMLButtonElement | undefined> ) => {
        console.log(submitRef.current)
        if (submitRef.current) {
            submitRef.current.click();
        }
    };

    return (
        <section className=" bg-[#F2F2F2] px-40 pt-20 pb-36 md:px-10 md:pt-12 md:pb-28 sm:pt-4 sm:px-6 sm:pb-24">
            <Link to={'/'} className="block w-fit">
                <p className="opacity-50 w-fit">Go back</p>
            </Link>
            <div className="flex pt-14 md:pt-6 gap-7 md:flex-col md:gap-8">
                <div className=" w-[68%] md:w-full">
                    <FormCheckout submitRef={submitRef} />
                </div>
                <div className="w-[32%] md:w-full">
                    <CartCheckout submitForm={() => submitForm(submitRef)} />
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
