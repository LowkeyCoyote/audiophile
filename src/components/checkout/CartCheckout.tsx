import { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import  {ItemState}  from "@types/types.ts"
import Button from '@components/shared/ui/Buttton';

const CartCheckout = ({ className }: HTMLAttributes<HTMLDivElement>) => {
    const cart = useSelector((state: RootState) => state.cart.items);
 

    const getTotalPrice = (cart : ItemState[]) => {
      return cart.reduce((acc : number, curval :ItemState) => (
          acc += parseInt(curval.price) * curval.quantity
      ), 0)
    }


    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/cart/image-${slug}.jpg`;
    };

    return (
        <div className="bg-white rounded-lg p-8 sm:px-6">
            <h6 className="text-[13px] uppercase tracking-[1.3px] leading-[24px] mb-8">
                Summary
            </h6>
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
                            <p className="text-[14px]  opacity-50 w-max">{`$ ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}</p>
                        </div>
                    </div>
                    <p className="text-[15px] opacity-50 font-bold">
                        x{quantity}
                    </p>
                </div>
            ))}
            <div className="flex justify-between mb-2">
                <p className="text-[15px] opacity-50">TOTAL</p>
                <p className=" text-[18px] font-bold">{`$ ${getTotalPrice(cart).toLocaleString('en-US')}`}</p>
            </div>
            <div className="flex justify-between mb-2">
                <p className="text-[15px] opacity-50">SHIPPING</p>
                <p className=" text-[18px] font-bold">$ 50</p>
            </div>
            <div className="flex justify-between mb-4">
                <p className="text-[15px] opacity-50">VAT INCLUDED</p>
                <p className=" text-[18px] font-bold">{`$ ${((getTotalPrice(cart)-50)*0.2).toFixed(1)}`}</p>
            </div>
            <div className="flex justify-between mb-8">
                <p className="text-[15px] opacity-50">GRAND TOTAL</p>
                <p className=" text-[18px] text-dark-peach font-bold">{`$ ${(getTotalPrice(cart)+50)}`}</p>
            </div>


            <Button
            className='w-full'
            >
                <p>Continue and pay</p>
            </Button>
        </div>
    );
};

export default CartCheckout;
