import Button from '@components/shared/ui/Button';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

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
            <div className="first-section-grid-home bg-pattern-circle">
                <div className="first-section-grid-home-img">
                    <img
                        className=" h-full w-full pl-24 pt-24 md:pl-0 md:pt-14"
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
                <div className="flex flex-col pt-12 text-white md:items-center md:px-44 md:pb-16 md:pt-12 sm:px-2 sm:pt-8">
                    <h1 className=" mb-8 w-1/2 md:mb-4 md:w-full">
                        ZX9 SPEAKER
                    </h1>
                    <p className="mb-12 w-[60%] opacity-75 md:mb-10 md:w-full">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Button
                        variant="black"
                        className="w-fit"
                        link="/product/xx99-mark-one-headphones"
                    >
                        See Product
                    </Button>
                </div>
            </div>
            <div
                className="mb-8 rounded-lg bg-grid-home-zx7-desktop bg-cover bg-no-repeat text-black
            md:bg-grid-home-zx7-tablet sm:bg-grid-home-zx7-mobile
            "
            >
                <div className="py-24 pl-24 md:pl-16 sm:pl-6">
                    <h4 className="mb-8">ZX7 SPEAKER</h4>
                    <Button variant="transparent" link="/product/zx7-speaker">
                        See Product
                    </Button>
                </div>
            </div>
            <div className="flex max-h-[320px] gap-8 md:max-h-full sm:flex-col">
                <img
                    className="max-w-[50%] flex-1 rounded-lg object-cover md:max-h-[320px] sm:max-h-[200px] sm:max-w-full"
                    src={
                        !isMobile && isTablet
                            ? yx1EarphonesTablet
                            : isMobile
                              ? yx1EarphonesMobile
                              : yx1EarphonesDesktop
                    }
                    alt=""
                />
                <div className="max-h-[320px] max-w-[50%] flex-1 rounded-lg bg-[#F1F1F1] py-24 md:max-w-full sm:max-h-[200px] sm:py-10">
                    <h4 className="mb-8 pl-24 md:pl-10 sm:pl-6">
                        YX1 EARPHONES
                    </h4>
                    <Button
                        className="ml-24 md:ml-8 sm:ml-6"
                        variant="transparent"
                        link="/product/yx1-earphones"
                    >
                        See Product
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GridHome;
