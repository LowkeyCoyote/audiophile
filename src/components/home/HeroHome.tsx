import Button from '@components/shared/ui/Buttton';

const HeroHome = () => {
  return (
    <div
      className="bg-hero-home-desktop bg-no-repeat  bg-[right_bottom] bg-[#191919] px-40 py-36 text-white 
    md:bg-hero-home-tablet  md:px-48 md:pt-40 md:bg-bottom md:bg-cover
    sm:bg-hero-home-mobile sm:px-6 sm:py-28
    "
    >
      <div className="md:text-center">
        <p className="overlineText opacity-50 mb-6">NEW PRODUCT</p>
        <h1 className="text-white mb-6 w-1/2 md:w-full sm:text-[40px] sm:leading-8">
          XX99 Mark II Headphones
        </h1>
        <p className="w-3/12 opacity-75 mb-10 md:w-full sm:px-6">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button 
        link="./product/xx99-mark-two-headphones">
            See Product</Button>
      </div>
    </div>
  );
};

export default HeroHome;
