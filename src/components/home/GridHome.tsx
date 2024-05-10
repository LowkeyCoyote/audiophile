import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

import Button from '@components/shared/ui/Buttton';

import zx9SpeakerDesktop from '@assets/home/image-speaker-zx9-desktop.png';
import zx9SpeakerTablet from '@assets/home/image-speaker-zx9-tablet.png';
import zx9SpeakerMobile from '@assets/home/image-speaker-zx9-mobile.png';

import yx1EarphonesDesktop from '@assets/home/image-earphones-yx1-desktop.jpg';
import yx1EarphonesTablet from '@assets/home/image-earphones-yx1-tablet.jpg';
import yx1EarphonesMobile from '@assets/home/image-earphones-yx1-mobile.jpg';

const GridHome = () => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    return (
        <div className="mb-[200px] md:mb-24">
            <div className="zx9-grid-home gap-24 bg-pattern-circle bg-[-12rem_1rem] md:bg-top md:text-center md:max-h-[720px] sm:max-h-[600px] sm:gap-8 ">
                <div className="max-h-[493px] max-w-[410px] relative -mb-2 md:max-h-[240px] md:max-w-[200px] md:mb-0 sm:max-h-[215px] sm:max-w-[180px]  ">
                    <img
                        className=" h-full w-full pt-24 pl-24 md:pl-0 md:pt-14 "
                        src={
                            !isMobile && isTablet
                                ? zx9SpeakerTablet
                                : isMobile
                                  ? zx9SpeakerMobile
                                  : zx9SpeakerDesktop
                        }
                        alt="zx9 Speaker"
                    />
                </div>
                <div className="flex flex-col text-white pt-12 md:items-center md:px-44 md:pt-12 md:pb-16 sm:pt-8 sm:px-2 ">
                    <h2 className="text-1 mb-8 w-1/2 text-h1 leading-10 md:w-full md:mb-4 sm:text-[36px]" >
                        ZX9 SPEAKER
                    </h2>
                    <p className="opacity-75 mb-12 w-[60%] md:w-full md:mb-10">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Button variant="black" className="w-fit" link='/product/xx99-mark-one-headphones'>
                        See Product
                    </Button>
                </div>
            </div>
            <div
                className="text-black bg-grid-home-zx7-desktop bg-cover bg-no-repeat rounded-lg mb-8
            md:bg-grid-home-zx7-tablet sm:bg-grid-home-zx7-mobile
            "
            >
                <div className="py-24 pl-24 md:pl-16 sm:pl-6">
                    <h4 className="mb-8 text-h2 font-bold md:text-[28px]">
                        ZX7 SPEAKER
                    </h4>
                    <Button variant="transparent" link='/product/zx7-speaker'>See Product</Button>
                </div>
            </div>
            <div className="flex max-h-[320px] sm:flex-col gap-8 md:max-h-full">
                <img
                    className="max-w-[50%] md:max-h-[320px] sm:max-h-[200px] flex-1 object-cover rounded-lg sm:max-w-full"
                    src={
                        !isMobile && isTablet
                            ? yx1EarphonesTablet
                            : isMobile
                              ? yx1EarphonesMobile
                              : yx1EarphonesDesktop
                    }
                    alt=""
                />
                <div className="max-w-[50%] max-h-[320px] flex-1 bg-[#F1F1F1] rounded-lg py-24 md:max-w-full sm:py-10 sm:max-h-[200px] ">
                    <h4 className="mb-8 pl-24 text-h2 font-bold md:pl-10 md:text-[28px] sm:pl-6">
                        YX1 EARPHONES
                    </h4>
                    <Button
                        className="ml-24 md:ml-8 sm:ml-6"
                        variant="transparent"
                        link='/product/yx1-earphones'
                    >
                        See Product
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GridHome;
