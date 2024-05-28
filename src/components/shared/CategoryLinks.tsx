import Button from './ui/Button';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import imageCategoryHeadphones from '@assets/shared/image-category-thumbnail-headphones-desktop.png';
import imageCategorySpeakers from '@assets/shared/image-category-thumbnail-speakers-desktop.png';
import imageCategoryEarphones from '@assets/shared/image-category-thumbnail-earphones-desktop.png';

import iconRight from '@assets/shared/icons/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

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

interface categoryLinksProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const CategoryLinks = ({ className, onClick }: categoryLinksProps) => {
  return (
    <div className={twMerge(`grid grid-cols-3 gap-8 md:gap-2.5 sm:grid-cols-1 sm:gap-16`, className)}>
      {categoryLinkArray.map(({ img, altText, text, link }, index) => (
        <Link
          to={link}
          key={index}
          className="group relative rounded-lg bg-very-light-grey pb-8 pt-28
                     text-center md:pb-5 md:pt-[88px]"
          onClick={onClick}
        >
          <img
            src={img}
            alt={altText}
            className="absolute left-1/2 top-4 w-1/2 -translate-x-1/2 -translate-y-1/2 transform sm:top-6 sm:w-1/2"
          />
          <h6 className="md:text-[15px]">{text}</h6>
          <Button variant="shop" link={link} className="sm:pb-0 sm:pt-4">
            <p className="subtitle duration-75 !opacity-50 group-hover:text-dark-peach">SHOP</p>{' '}
            <img src={iconRight} className="pl-3" alt="right orange arrow" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryLinks;
