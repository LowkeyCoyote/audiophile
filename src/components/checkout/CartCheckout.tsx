import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import Button from '@components/shared/ui/Button';

import getCartTotalPrice from '@utils/getCartTotalPrice';

type CartCheckoutProps = {
    submitForm: () => void;
};

const CartCheckout = ({ submitForm }: CartCheckoutProps) => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const totalPrice = getCartTotalPrice(cart);

    const renderProductImages = (slug: string) => {
        return `/assets/shared/cart/image-${slug}.jpg`;
    };

    return (
        <div className="rounded-lg bg-white p-8 sm:px-6">
            <h6 className="mb-8">Summary</h6>
            {cart.length === 0 && <h3>Your cart is empty </h3>}

            {cart.length > 0 && (
                <>
                    {cart.map(({ slug, price, quantity, cartName }, index) => (
                        <div
                            key={index}
                            className="mb-6 flex items-center justify-between rounded-lg "
                        >
                            <div className="flex items-center">
                                <img
                                    className="h-[64px] w-[64px] rounded-lg"
                                    src={renderProductImages(slug)}
                                    alt={slug}
                                />
                                <div className="flex flex-col self-center pl-4 font-bold">
                                    <p className="opacity-100">{cartName}</p>
                                    <p className="text-[14px]">{`$ ${parseInt(price).toLocaleString('en-US')}`}</p>
                                </div>
                            </div>
                            <p className="font-bold">x{quantity}</p>
                        </div>
                    ))}
                    <div className="mb-2 flex justify-between">
                        <p>TOTAL</p>
                        <h6 className="tracking-normal">{`$ ${totalPrice.toLocaleString('en-US')}`}</h6>
                    </div>
                    <div className="mb-2 flex justify-between">
                        <p>SHIPPING</p>
                        <h6>$ 50</h6>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <p>VAT INCLUDED</p>
                        <h6 className="tracking-normal">{`$ ${((totalPrice - 50) * 0.2).toLocaleString('en-US')}`}</h6>
                    </div>
                    <div className="mb-8 flex justify-between">
                        <p>GRAND TOTAL</p>
                        <h6 className=" tracking-normal text-dark-peach">{`$ ${(totalPrice + 50).toLocaleString('en-US')}`}</h6>
                    </div>

                    <Button className="w-full" onClick={submitForm}>
                        <p className="opacity-100">Continue and pay</p>
                    </Button>
                </>
            )}
        </div>
    );
};

export default CartCheckout;
