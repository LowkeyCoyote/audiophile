import { HTMLAttributes } from 'react';
import Button from '@components/shared/ui/Buttton';

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
    return `/src/assets/shared/product/${slug}/image-category-page-preview-${imageSizeSuffix}.jpg`;
  };

  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse' : ''}
    md:flex-col
    `}>
      <img
        className="rounded-lg w-[46%] md:w-full md:h-[46%]"
        src={renderProductImages(slug)}
        alt=""
      />
      <div className={`text-left w-[54%] ${reverse ? 'pr-32' : 'pl-32'} md:w-full md:px-16 md:text-center
        md:pt-12 md:h-[54%] sm:pt-8 sm:px-0
      `}>
        {isNew ? (
          <p className="overlineText text-peach mb-4 sm:mb-6 sm:px-16 ">New Product</p>
        ) : (
          ''
        )}
        <h2 className="mb-8 sm:mb-6 sm:text-h2-mobile sm:leading-5 sm:px-16 ">{name}</h2>
        <p className="opacity-50 mb-10 md:mb-6 sm:mb-6">{description}</p>
        <Button link={`/product/${slug}`}>See Product</Button>
      </div>
    </div>
  );
};

export default ProductCardCategory;
