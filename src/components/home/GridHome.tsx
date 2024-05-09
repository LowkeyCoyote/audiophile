import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

import Button from '@components/shared/ui/Buttton';

import zx9SpeakerDesktop from '@assets/home/image-speaker-zx9-desktop.png';
import zx9SpeakerTablet from '@assets/home/image-speaker-zx9-tablet.png';
import zx9SpeakerMobile from '@assets/home/image-speaker-zx9-mobile.png';



import yx1EarphonesDesktop from '@assets/home/image-earphones-yx1-desktop.jpg';

const GridHome = () => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    return (
        <div className="mb-[200px]">
            <div className="zx9-grid-home gap-24 bg-pattern-circle bg-[-12rem_1rem] ">
                <div className="max-h-[493px] max-w-[410px] relative -mb-2  ">
                    <img
                        className=" h-full w-full pt-24 pl-24 "
                        src={ !isMobile && isTablet ? zx9SpeakerTablet : (isMobile) ? zx9SpeakerMobile : zx9SpeakerDesktop }
                        alt="zx9 Speaker"
                    />
                </div>
                <div className="flex flex-col text-white pt-12 md:items-center ">
                    <h2 className="text-1 mb-8 w-1/2 text-h1 leading-10">
                        ZX9 SPEAKER
                    </h2>
                    <p className="opacity-75 mb-12 w-[60%]">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Button variant="black" className="w-fit">
                        See Product
                    </Button>
                </div>
            </div>
            <div className="text-black bg-grid-home-zx7-desktop bg-cover bg-no-repeat rounded-lg mb-8">
                <div className="py-24 pl-24">
                    <h4 className="mb-8 text-h2 font-bold">ZX7 SPEAKER</h4>
                    <Button variant="transparent">See Product</Button>
                </div>
            </div>
            <div className="flex max-h-[320px] gap-8">
                <img
                    className="flex-1 object-cover rounded-lg"
                    src={yx1EarphonesDesktop}
                    alt=""
                />
                <div className=" max-h-[320px] flex-1 bg-[#F1F1F1] rounded-lg py-24">
                    <h4 className="mb-8 pl-24 text-h2 font-bold">YX1 EARPHONES</h4>
                    <Button className='ml-24' variant="transparent">See Product</Button>
                </div>
            </div>
        </div>
    );
};

export default GridHome;
