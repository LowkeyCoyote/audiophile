import { useSelector, useDispatch } from 'react-redux';
import { clearCart, increase, decrease } from '../../redux/reducer/cartSlice';
import { RootState } from 'src/redux/store';
import Button from '@components/shared/ui/Buttton';
import getCartTotalPrice from '@utils/getCartTotalPrice';


type CartProps = {
    goToCheckout : () => void
}

const Cart = ({goToCheckout} : CartProps) => {


    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/cart/image-${slug}.jpg`;
    };

    return (
        <div className="p-8 rounded-lg text-black w-[377px]">
            <div className="flex justify-between items-center pb-8">
                <p className="text-[18px] font-semibold tracking-wide uppercase">{`cart ( ${cart.length} )`}</p>
                <p
                    className="text-[15px] font-semibold uppercase text-dark-peach"
                    onClick={() => dispatch(clearCart())}
                >
                    Remove all
                </p>
            </div>
            {cart.length === 0 && (
                <p className="text-[20px] uppercase font-bold tracking-wide">
                    Your cart is empty
                </p>
            )}

            {cart.length !== 0 &&
                cart.map((item) => (
                    <div
                        key={item.idProduct}
                        className=" flex items-center justify-between mb-6"
                    >
                        <div className="flex items-center">
                            <img
                                className="w-[64px] rounded-lg"
                                src={renderProductImages(item.slug)}
                                alt=""
                            />
                            <div className="flex flex-col ml-4">
                                <p className="text-[15px] font-bold">
                                    {item.cartName}
                                </p>
                                <p className="text-[14px] font-bold opacity-50">{`$ ${parseInt(item.price).toLocaleString('en-US')}`}</p>
                            </div>
                        </div>
                        <div className=" w-fit bg-very-light-grey h-[48px] px-4 flex  ">
                            <button
                                className="w-[24px] ] text-[14px] opacity-50 hover:text-dark-peach"
                                onClick={() =>
                                    dispatch(decrease(item.idProduct))
                                }
                            >
                                -
                            </button>
                            <input
                                readOnly
                                className="mx-auto w-[40px] text-[14px] font-bold text-center bg-very-light-grey focus:outline-none cursor-pointer border-none text-black p-0"
                                value={item.quantity}
                                type="number"
                            />
                            <button
                                className="w-[24px] text-[13px] opacity-50 hover:text-dark-peach "
                                onClick={() =>
                                    dispatch(increase(item.idProduct))
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}

            <div className="flex justify-between items-center mt-2 mb-6">
                <p className="text-[15px] opacity-50 uppercase">Total</p>
                <p className="text-[18px] font-bold">{`$ ${getCartTotalPrice(cart).toLocaleString('en-US')}`}</p>
            </div>

            <Button 
            className="w-full"
            onClick={goToCheckout}
            >
                Checkout
            </Button>
        </div>
    );
};

export default Cart;
