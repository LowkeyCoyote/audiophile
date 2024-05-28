import { useState } from 'react';
import { CartState } from '../../types/types';
import getCartTotalPrice from '@utils/getCartTotalPrice';
import Button from '@components/shared/ui/Button';

import iconOrderConfirmation from '@assets/checkout/icon-order-confirmation.svg';

const renderProductImages = (slug: string) => {
  return `/assets/shared/cart/image-${slug}.jpg`;
};

const ConfirmationCheckout = ({ items }: CartState) => {
  const [showOtherItems, setShowOtherItems] = useState(false);

  const totalCartPrice = getCartTotalPrice(items);

  const toggleShowOtherItems = () => {
    setShowOtherItems(!showOtherItems);
  };

  return (
    <div className="w-[540px] p-12 sm:w-[327px] sm:p-8">
      <img src={iconOrderConfirmation} alt="confirmation" className="mb-8 sm:mb-6" />
      <h3 className="mb-8 sm:mb-6">
        Thank you <br /> for your order
      </h3>
      <p className="mb-8 sm:mb-6">You will receive an email confirmation shortly.</p>
      <div className="mb-12 flex w-full rounded-lg bg-very-light-grey sm:flex-col">
        <div className="flex w-[57%] flex-col p-6 sm:w-full">
          {!showOtherItems && (
            <div className="flex items-center justify-between border-b border-b-gray-border pb-3 font-bold">
              <div className="flex">
                <img className="w-[50px]" src={renderProductImages(items[0].slug)} alt="" />
                <div className="flex flex-col pl-4">
                  <p className="opacity-100">{items[0].cartName}</p>
                  <p className="text-[14px]">{`$ ${parseInt(items[0].price).toLocaleString('en-US')}`}</p>
                </div>
              </div>

              <p className="self-baseline text-[14px]">x{items[0].quantity}</p>
            </div>
          )}
          {showOtherItems && (
            <div className="mb-3 flex flex-col border-b border-b-gray-border font-bold">
              {items.map(({ idProduct, slug, cartName, price, quantity }) => (
                <div key={idProduct} className="flex items-center justify-between pb-3 text-left">
                  <div className="flex">
                    <img className="w-[50px]" src={renderProductImages(slug)} alt="" />
                    <div className="flex flex-col pl-4">
                      <p className="opacity-100">{cartName}</p>
                      <p className="text-[14px]">{`$ ${parseInt(price).toLocaleString('en-US')}`}</p>
                    </div>
                  </div>

                  <p className="self-baseline text-[14px]">x{quantity}</p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <p onClick={toggleShowOtherItems} className="mt-3 cursor-pointer text-[12px] font-bold">
              {!showOtherItems && `And ${items.length - 1} other item(s)`}
              {showOtherItems && `show less`}
            </p>
          </div>
        </div>
        <div className="w-[43%] content-center rounded-r-lg bg-black pl-8 sm:w-full sm:rounded-b-lg sm:rounded-r-none sm:py-4 sm:pl-6">
          <div>
            <p className="mb-2 text-gray-border opacity-100">GRAND TOTAL</p>
            <p className="font-bold text-white opacity-100">$ {totalCartPrice.toLocaleString('en-US')} </p>
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
