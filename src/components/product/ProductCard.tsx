import { HTMLAttributes, useState } from 'react';

import Button from '@components/shared/ui/Button';

import { useDispatch } from 'react-redux';
import { addToCart } from '@redux/cartSlice';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

import { twMerge } from 'tailwind-merge';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


interface ProductHomeProps extends HTMLAttributes<HTMLDivElement> {
    idProduct: number;
    slug: string;
    isNew: boolean;
    description: string;
    name: string;
    price: number;
    cartName: string;
}

const ProductCard = ({
    idProduct,
    slug,
    isNew,
    description,
    name,
    cartName,
    price,
    className,
}: ProductHomeProps) => {

    const dispatch = useDispatch();
    let [quantity, setQuantity] = useState<number>(1);

    const incrementQuantity = () => {
        if (quantity < 9) {
            quantity = quantity + 1;
            setQuantity(quantity);
        }
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            quantity = quantity - 1;
            setQuantity(quantity);
        }
    };

    const addProductToCart = (
        idProduct: number,
        quantity: number,
        slug: string,
        price: number,
        cartName: string,
    ) => {
        setQuantity(1);
        dispatch(
            addToCart({
                idProduct,
                quantity,
                slug,
                price: price.toString(),
                cartName,
            }),
        );
        toast.success('Your order has been added to the cart', {
            position: 'bottom-right',
        });
    };

    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string) => {
        return `/assets/shared/product/${slug}/image-product-${imageSizeSuffix}.jpg`;
    };
    return (
        <div
            className={twMerge(
                `mb-40 flex items-center sm:mb-20 sm:flex-col`,
                className,
            )}
        >
            <img
                className="w-[40%] rounded-lg sm:w-full"
                src={renderProductImages(slug)}
                alt=""
            />
            <div className="w-[60%] px-32 text-left md:pl-16 md:pr-0 sm:w-full sm:pl-0">
                {isNew ? (
                    <p className="overlineText !opacity-100 mb-4 sm:mt-8 sm:px-0  ">
                        New Product
                    </p>
                ) : (
                    ''
                )}
                <h2 className="mb-8 sm:my-6 sm:w-1/2">{name}</h2>
                <p className="mb-8 opacity-50 sm:mb-6">{description}</p>
                <h6 className="pb-12 sm:pb-8">{`$ ${price.toLocaleString('en-US')}`}</h6>
                <div className="flex items-center gap-4">
                    <div className=" flex h-[48px] w-fit bg-very-light-grey px-4 ">
                        <button
                            className="w-[24px] text-[13px] opacity-50"
                            onClick={decrementQuantity}
                        >-</button>

                        <label
                            htmlFor="quantity"
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
                            className=" w-[40px] cursor-pointer border-none bg-very-light-grey text-center text-[13px] font-bold text-black focus:outline-none "
                            value={quantity}
                            type="number"
                            id="quantity"
                            name="quantity"
                        />

                        <button
                            className="w-[24px] text-[13px] opacity-50"
                            onClick={incrementQuantity}
                        >+</button>
                    </div>
                    <Button
                        onClick={() =>
                            addProductToCart(
                                idProduct,
                                quantity,
                                slug,
                                price,
                                cartName,
                            )
                        }
                        className="max-h-[48px] self-start"
                    >
                        Add to cart
                    </Button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ProductCard;
