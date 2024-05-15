import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Button from '@components/shared/ui/Buttton';
import getCartTotalPrice from '@utils/getCartTotalPrice';

type CartCheckoutProps = {
    submitForm : () => void
} 

const CartCheckout = ({submitForm} : CartCheckoutProps ) => {
  
    const cart = useSelector((state: RootState) => state.cart.items);
    const totalPrice = getCartTotalPrice(cart)

    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/cart/image-${slug}.jpg`;
    };

    return (
        <div className="bg-white rounded-lg p-8 sm:px-6">
            <h6 className="text-[13px] uppercase tracking-[1.3px] leading-[24px] mb-8">
                Summary
            </h6>
            {cart.length === 0 && (
              <p className='text-[25px]'>Your cart is empty </p>
            )}

            {cart.length > 0 && (
              <>
                {cart.map(({ slug, price, quantity, cartName }, index) => (
                  <div
                      key={index}
                      className="flex rounded-lg mb-6 items-center justify-between "
                  >
                      <div className="flex items-center">
                          <img
                              className="h-[64px] w-[64px] rounded-lg"
                              src={renderProductImages(slug)}
                              alt={slug}
                          />
                          <div className="flex flex-col font-bold pl-4 self-center">
                              <p className="text-[15px] w-max">{cartName}</p>
                              <p className="text-[14px]  opacity-50 w-max">{`$ ${parseInt(price).toLocaleString('en-US')}`}</p>
                          </div>
                      </div>
                      <p className="text-[15px] opacity-50 font-bold">
                          x{quantity}
                      </p>
                  </div>
              ))}
              <div className="flex justify-between mb-2">
                  <p className="text-[15px] opacity-50">TOTAL</p>
                  <p className=" text-[18px] font-bold">{`$ ${totalPrice.toLocaleString('en-US')}`}</p>
              </div>
              <div className="flex justify-between mb-2">
                  <p className="text-[15px] opacity-50">SHIPPING</p>
                  <p className=" text-[18px] font-bold">$ 50</p>
              </div>
              <div className="flex justify-between mb-4">
                  <p className="text-[15px] opacity-50">VAT INCLUDED</p>
                  <p className=" text-[18px] font-bold">{`$ ${((totalPrice-50)*0.2).toLocaleString('en-US')}`}</p>
              </div>
              <div className="flex justify-between mb-8">
                  <p className="text-[15px] opacity-50">GRAND TOTAL</p>
                  <p className=" text-[18px] text-dark-peach font-bold">{`$ ${(totalPrice+50).toLocaleString('en-US')}`}</p>
              </div>
  
              <Button
              className='w-full'  
              onClick={(submitForm)} 
              >
                  <p>Continue and pay</p>
              </Button>
              </>
            )}
          
          
        </div>
    );
};

export default CartCheckout;
