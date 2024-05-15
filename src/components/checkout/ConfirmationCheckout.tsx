import iconOrderConfirmation from '@assets/checkout/icon-order-confirmation.svg';
import { CartState } from '../../types/types';
import { useState } from 'react';
import getCartTotalPrice from '@utils/getCartTotalPrice';
import Button from '@components/shared/ui/Buttton';

const renderProductImages = (slug: string) => {
    return `/src/assets/shared/cart/image-${slug}.jpg`;
};

const ConfirmationCheckout = ({ items }: CartState) => {
    const [showOtherItems, setShowOtherItems] = useState(true);

    const totalCartPrice = getCartTotalPrice(items);

    const toggleShowOtherItems = () => {
        setShowOtherItems(!showOtherItems);
    };

    return (
        <div className="p-12 w-[540px] sm:w-[327px] sm:p-8">
            <img
                src={iconOrderConfirmation}
                alt="confirmation"
                className="mb-8 sm:mb-6"
            />
            <h3 className="text-[32px] uppercase font-bold tracking-wide mb-8 sm:text-[24px] sm:mb-6">
                Thank you <br /> for your order
            </h3>
            <p className="text-[15px] opacity-50 mb-8 sm:mb-6">
                You will receive an email confirmation shortly.
            </p>
            <div className="flex w-full bg-very-light-grey rounded-lg mb-12 sm:flex-col">
                <div className="flex flex-col w-[57%] p-6 sm:w-full">
                    {!showOtherItems && (
                        <div className="flex items-center justify-between pb-3 border-b border-b-gray-border ">
                            <img
                                className="w-[50px]"
                                src={renderProductImages(items[0].slug)}
                                alt=""
                            />
                            <div className="flex flex-col">
                                <p className="text-[15px] font-bold">
                                    {items[0].cartName}
                                </p>
                                <p className="text-[14px] opacity-50">{`$ ${parseInt(items[0].price).toLocaleString('en-US', { minimumFractionDigits: 2 })}`}</p>
                            </div>
                            <p className="text-[14px] opacity-50 font-bold self-baseline">
                                x{items[0].quantity}
                            </p>
                        </div>
                    )}
                    {showOtherItems && (
                        <div className="flex flex-col mb-3 border-b border-b-gray-border">
                            {items.map((item) => (
                                <div className="flex items-center justify-between pb-3 text-left  ">
                                    <img
                                        className="w-[50px]"
                                        src={renderProductImages(item.slug)}
                                        alt=""
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[15px] font-bold">
                                            {item.cartName}
                                        </p>
                                        <p className="text-[14px] opacity-50 font-bold">{`$ ${parseInt(item.price).toLocaleString('en-US')}`}</p>
                                    </div>
                                    <p className="text-[14px] opacity-50 font-bold self-baseline">
                                        x{item.quantity}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="text-center">
                        <p
                            onClick={toggleShowOtherItems}
                            className="text-[12px] opacity-50 font-semibold mt-3 cursor-pointer"
                        >
                            {!showOtherItems &&
                                `And ${items.length - 1} other item(s)`}
                            {showOtherItems && `show less`}
                        </p>
                    </div>
                </div>
                <div className="w-[43%] bg-black rounded-r-lg pl-8 content-center sm:w-full sm:pl-6 sm:py-4 sm:rounded-r-none sm:rounded-b-lg">
                    <div>
                        <p className="text-[15px] text-gray-border mb-2">
                            GRAND TOTAL
                        </p>
                        <p className="text-white font-bold">
                            $ {totalCartPrice.toLocaleString('en-US')}{' '}
                        </p>
                    </div>
                </div>
            </div>
            <Button link="/" className="w-full">
                Back to home
            </Button>
        </div>
    );
};

export default ConfirmationCheckout;
