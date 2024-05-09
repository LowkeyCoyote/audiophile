import bestGearDesktop from '@assets/shared/image-best-gear-desktop.jpg';
import bestGearTablet from '@assets/shared/image-best-gear-tablet.jpg';
import bestGearMobile from '@assets/shared/image-best-gear-mobile.jpg';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const BestGearCard = ({ className }: HTMLAttributes<HTMLDivElement>) => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    return (
        <div className={twMerge(`flex items-center justify-between md:flex-col-reverse`, className)}>
            <div className="pr-32 py-36 md:px-14 md:pb-24 md:pt-16 md:text-center sm:px-0 sm:pt-10">
                <h2>
                    Bringing you the <span className="text-peach">best </span>
                    audio gear
                </h2>
                <p className="pt-8 ">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
            <img
                className="rounded-lg"
                src={
                    !isMobile && isTablet
                        ? bestGearTablet
                        : isMobile
                          ? bestGearMobile
                          : bestGearDesktop
                }
                alt={
                    !isMobile && isTablet
                        ? 'best gear  tablet'
                        : isMobile
                          ? 'best gear mobile'
                          : 'best gear desktop'
                }
            />
        </div>
    );
};

export default BestGearCard;
