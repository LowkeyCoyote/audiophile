import { HTMLAttributes } from 'react';

import Button from '@components/shared/ui/Button';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

interface ProductCardCategoryProps extends HTMLAttributes<HTMLDivElement> {
    slug: string;
    isNew: boolean;
    name: string;
    description: string;
    idProduct: number;
    reverse: boolean;
}

const ProductCardCategory = ({
    slug,
    isNew,
    name,
    description,
    reverse,
}: ProductCardCategoryProps) => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string) => {
        return `/assets/shared/product/${slug}/image-category-page-preview-${imageSizeSuffix}.jpg`;
    };

    return (
        <div
            className={`flex items-center ${reverse ? 'flex-row-reverse' : ''} md:flex-col`}
        >
            <img
                className="w-[46%] rounded-lg md:h-[46%] md:w-full"
                src={renderProductImages(slug)}
                alt=""
            />
            <div
                className={`w-[54%] text-left ${reverse ? 'pr-32' : 'pl-32'} md:h-[54%] md:w-full md:px-16 md:pt-12 md:text-center sm:px-0 sm:pt-8`}
            >
                {isNew ? (
                    <p className="overlineText !opacity-100 mb-4 sm:mb-6 sm:px-16 ">
                        New Product
                    </p>
                ) : (
                    ''
                )}
                <h2 className="mb-8 sm:mb-6 sm:px-16 ">{name}</h2>
                <p className="mb-10 md:mb-6 sm:mb-6"> {description}</p>
                <Button link={`/product/${slug}`}>See Product</Button>
            </div>
        </div>
    );
};

export default ProductCardCategory;
