import { HTMLAttributes, useState } from 'react';
import Button from '@components/shared/ui/Buttton';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';
import {  useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducer/cartSlice';
import { twMerge } from 'tailwind-merge';
import { RootState } from '../../redux/store';
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


interface ProductHomeProps extends HTMLAttributes<HTMLDivElement> {
    idProduct: number;
    slug: string;
    isNew: boolean;
    description: string;
    name: string;
    price: number;
    cartName : string;
}

const ProductCard = ({
    idProduct,
    slug,
    isNew,
    description,
    name,
    cartName,
    price,
    className
}: ProductHomeProps) => {

    const cart = useSelector((state: RootState) => state.cart.items);
    console.log(cart)

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
        cartName : string,
    ) => {
        setQuantity(1);
        dispatch(
            addToCart({ idProduct, quantity, slug, price: price.toString(), cartName  }),
        );
        toast.success('Your order has been add to cart', {
            position: "bottom-right"
        })
    };

    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/product/${slug}/image-product-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className={twMerge(`flex items-center sm:flex-col mb-40 sm:mb-20`, className)}>
            <img
                className="rounded-lg w-[40%] sm:w-full"
                src={renderProductImages(slug)}
                alt=""
            />
            <div className="text-left w-[60%] px-32 md:pl-16 md:pr-0 sm:w-full sm:pl-0">
                {isNew ? (
                    <p className="overlineText text-peach mb-4 md:text-[12px] sm:text-[14px] sm:px-0 sm:mt-8  ">
                        New Product
                    </p>
                ) : (
                    ''
                )}
                <h2 className="mb-8 md:text-[28px] sm:w-1/2 sm:my-6">{name}</h2>
                <p className="mb-8 opacity-50 sm:mb-6">{description}</p>
                <p className="text-[25px] font-bold pb-12 sm:pb-8">{`$ ${price.toLocaleString('en-US')}`}</p>
                <div className="flex gap-4 items-center">
                    <div className=" w-fit bg-very-light-grey h-[48px] px-4 flex ">
                        <button
                            className="w-[24px] ] text-[13px] opacity-50"
                            onClick={decrementQuantity}
                        >
                            -
                        </button>
                        <input
                            readOnly
                            className="mx-auto w-[40px] text-[13px] font-bold text-center bg-very-light-grey focus:outline-none cursor-pointer border-none text-black p-0"
                            value={quantity}
                            type="number"
                            
                        />
                        <button
                            className="w-[24px] text-[13px] opacity-50"
                            onClick={incrementQuantity}
                        >
                            +
                        </button>
                    </div>
                    <Button
                        onClick={() =>
                            addProductToCart(idProduct, quantity, slug, price, cartName)
                        }
                        className='self-start max-h-[48px]'
                    >
                        Add to cart
                    </Button>
                </div>
               <ToastContainer
               />
            </div>
        </div>
    );
};

export default ProductCard;
