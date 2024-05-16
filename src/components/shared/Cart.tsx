import { useSelector, useDispatch } from 'react-redux';
import { clearCart, increase, decrease } from '../../redux/reducer/cartSlice';
import { RootState } from 'src/redux/store';
import Button from '@components/shared/ui/Buttton';
import getCartTotalPrice from '@utils/getCartTotalPrice';

type CartProps = {
    goToCheckout: () => void;
};

const Cart = ({ goToCheckout }: CartProps) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const renderProductImages = (slug: string) => {
        return `/assets/shared/cart/image-${slug}.jpg`;
    };

    return (
        <div className="w-[377px] rounded-lg p-8 text-black sm:w-[327px] sm:p-7">
            <div className="flex items-center justify-between pb-8">
                <p className="tracking-wide text-[18px] font-semibold uppercase">{`cart ( ${cart.length} )`}</p>
                <p
                    className="text-[15px] font-semibold uppercase text-dark-peach"
                    onClick={() => dispatch(clearCart())}
                >
                    Remove all
                </p>
            </div>
            {cart.length === 0 && (
                <p className="tracking-wide text-[20px] font-bold uppercase">
                    Your cart is empty
                </p>
            )}

            {cart.length !== 0 &&
                cart.map((item) => (
                    <div
                        key={item.idProduct}
                        className=" mb-6 flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <img
                                className="w-[64px] rounded-lg"
                                src={renderProductImages(item.slug)}
                                alt=""
                            />
                            <div className="ml-4 flex flex-col">
                                <p className="font-bold opacity-100">
                                    {item.cartName}
                                </p>
                                <p className="text-[14px] font-bold opacity-50">{`$ ${parseInt(item.price).toLocaleString('en-US')}`}</p>
                            </div>
                        </div>
                        <div className=" flex  h-[48px] w-fit items-center bg-very-light-grey px-4  ">
                            <button
                                className="w-[24px] text-[13px] opacity-50 hover:text-dark-peach"
                                onClick={() =>
                                    dispatch(decrease(item.idProduct))
                                }
                            >
                                -
                            </button>
                            <label
                                htmlFor={item.cartName}
                                style={{
                                    visibility: 'hidden',
                                    fontSize: '0',
                                    width: '0',
                                }}
                            >
                                quantity
                            </label>
                            <input
                                readOnly
                                className="mx-auto w-[40px] cursor-pointer border-none bg-very-light-grey p-0 text-center text-[14px] font-bold text-black focus:outline-none"
                                value={item.quantity}
                                type="number"
                                name={item.cartName}
                                id={item.cartName}
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

            <div className="mb-6 mt-2 flex items-center justify-between">
                <p className="uppercase">Total</p>
                <h6 className="font-bold tracking-normal">{`$ ${getCartTotalPrice(cart).toLocaleString('en-US')}`}</h6>
            </div>

            <Button className="w-full" onClick={goToCheckout}>
                Checkout
            </Button>
        </div>
    );
};

export default Cart;
