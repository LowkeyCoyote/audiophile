import { HTMLAttributes } from 'react';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

interface ProductGridImgProps extends HTMLAttributes<HTMLDivElement> {
    slug: string;
}

const ProductGridImg = ({ slug }: ProductGridImgProps) => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string, numberImg: string) => {
        return `/assets/shared/product/${slug}/image-gallery-${numberImg}-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className="md:my-30 my-40 grid grid-cols-10 grid-rows-2 gap-[30px] sm:my-[88px] sm:grid-cols-1 sm:grid-rows-4 ">
            <img
                className="col-span-4 row-span-1 h-full w-full rounded-lg object-cover sm:col-span-10 sm:row-span-1 sm:row-start-1"
                src={renderProductImages(slug, '1')}
                alt="first image"
            />
            <img
                className="col-span-4 col-start-1 row-span-1 h-full w-full rounded-lg object-cover sm:col-span-10 sm:row-span-1 sm:row-start-2"
                src={renderProductImages(slug, '2')}
                alt="second image"
            />
            <img
                className="col-span-6 col-start-5 row-span-2 row-start-1 h-full w-full rounded-lg object-cover sm:col-span-10 sm:row-span-2 sm:row-start-3"
                src={renderProductImages(slug, '3')}
                alt="third image"
            />
        </div>
    );
};

export default ProductGridImg;
