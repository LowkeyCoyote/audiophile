import Button from '@components/shared/ui/Button';

const HeroHome = () => {
  return (
    <div
      className="bg-[#191919] bg-hero-home-desktop  bg-[right_bottom] bg-no-repeat px-40 py-36 text-white 
    md:bg-hero-home-tablet  md:bg-cover md:bg-bottom md:px-48 md:pt-40
    sm:bg-hero-home-mobile sm:px-6 sm:py-28
    "
    >
      <div className="md:text-center">
        <p className="overlineText text-white mb-6">NEW PRODUCT</p>
        <h1 className="mb-6 w-1/2 md:w-full">XX99 Mark II Headphones</h1>
        <p className="mb-10 w-3/12 opacity-75 md:w-full sm:px-6">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Button link="./product/xx99-mark-two-headphones">See Product</Button>
      </div>
    </div>
  );
};

export default HeroHome;
