import { HTMLAttributes, useState } from 'react';
import Button from '@components/shared/ui/Buttton';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

interface ProductHomeProps extends HTMLAttributes<HTMLDivElement> {
    slug: string;
    isNew: boolean;
    description: string;
    name: string;
    price: number;
}

const ProductCard = ({slug,isNew,description,name,price,}: ProductHomeProps) => {

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

    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/product/${slug}/image-product-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className="flex items-center sm:flex-col">
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
                <p className="text-[25px] font-bold pb-12 sm:pb-8">{`$ ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}</p>
                <div className="flex gap-4">
                    <div className=" w-fit bg-very-light-grey p-4 ">
                        <button
                            className="w-[24px] text-[13px] opacity-50"
                            onClick={decrementQuantity}
                        >
                            -
                        </button>
                        <input
                            readOnly
                            className="mx-auto w-[40px] font-bold text-center bg-very-light-grey focus:outline-none cursor-pointer"
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
                    <Button>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
