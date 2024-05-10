import { Link } from "react-router-dom";
import CartCheckout from "@components/checkout/CartCheckout";
import FormCheckout from "@components/checkout/FormCheckout";






const CheckoutPage = () => {
    return (
        <section className=" bg-[#F2F2F2] px-40 pt-20 pb-36 md:px-10 md:pt-12 md:pb-28 sm:pt-4 sm:px-6 sm:pb-24" >
            <Link
                to={'/'}
                className="block w-fit"
            >
                <p className="opacity-50 w-fit">Go back</p>
                </Link>
                <div className="flex pt-14 md:pt-6 gap-7 md:flex-col md:gap-8">
                    <div className=" w-[68%] md:w-full">
                        <FormCheckout />

                    </div>
                    <div className="w-[32%] md:w-full">
                        <CartCheckout />
                    </div>

                </div>

        </section>
    );
};

export default CheckoutPage;
