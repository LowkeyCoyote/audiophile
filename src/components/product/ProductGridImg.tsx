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
        return `/src/assets/shared/product/${slug}/image-gallery-${numberImg}-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className="grid grid-rows-2 grid-cols-10 gap-[30px] sm:grid-cols-1 sm:grid-rows-4 my-40 md:my-30 ">
            <img
                className="col-span-4 row-span-1 object-cover rounded-lg w-full h-full sm:row-span-1 sm:row-start-1 sm:col-span-10"
                src={renderProductImages(slug, "1")}
                alt="first image"
            />
            <img
                className="col-span-4 row-span-1 col-start-1 object-cover rounded-lg w-full h-full sm:row-span-1 sm:row-start-2 sm:col-span-10"
                src={renderProductImages(slug, "2")}
                alt="second image"
            />
            <img
                className="col-span-6 row-span-2 col-start-5 row-start-1 object-cover rounded-lg w-full h-full sm:row-span-2 sm:row-start-3 sm:col-span-10"
                src={renderProductImages(slug, "3")}
                alt="third image"
            />
        </div>
    );
};

export default ProductGridImg;
