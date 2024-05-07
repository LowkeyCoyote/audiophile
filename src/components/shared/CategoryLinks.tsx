import Button from './ui/Buttton';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import imageCategoryHeadphones from '@assets/shared/image-category-thumbnail-headphones-desktop.png';
import imageCategorySpeakers from '@assets/shared/image-category-thumbnail-speakers-desktop.png';
import imageCategoryEarphones from '@assets/shared/image-category-thumbnail-earphones-desktop.png';

import iconRight from '@assets/shared/icons/icon-arrow-right.svg';

const categoryLinkArray = [
  {
    img: imageCategoryHeadphones,
    altText: 'headphones category',
    text: 'headphones',
    link: '/category/headphones',
  },
  {
    img: imageCategorySpeakers,
    altText: 'speakers category',
    text: 'speakers',
    link: '/category/speakers',
  },
  {
    img: imageCategoryEarphones,
    altText: 'earphones category',
    text: 'earphones',
    link: '/category/earphones',
  },
];

const CategoryLinks = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        `grid grid-cols-3 gap-8 md:gap-2.5 sm:grid-cols-1 sm:gap-16`,
        className
      )}
    >
      {categoryLinkArray.map(({ img, altText, text, link }, index) => (
        <div
          key={index}
          className="relative bg-very-light-grey rounded-lg text-center px-28 pb-8 pt-28
                     md:pb-5 md:pt-[88px] md:px-14">
          <img
            src={img}
            alt={altText}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4 w-2/3 sm:w-1/2 sm:top-6"
          />
          <h6 className="uppercase">{text}</h6>
          <Button variant="shop" link={link}>
            SHOP <img src={iconRight} className="pl-3" alt="right" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryLinks;
