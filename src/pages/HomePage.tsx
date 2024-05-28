import GridHome from '@components/home/GridHome';
import HeroHome from '@components/home/HeroHome';
import BestGearCard from '@components/shared/BestGearCard';
import CategoryLinks from '@components/shared/CategoryLinks';

const HomePage = () => {
  return (
    <section>
      <HeroHome />
      <div className="px-40 md:px-10 sm:px-6">
        <CategoryLinks className="mb-40 mt-[200px] md:mb-24 md:mt-36 sm:mb-[120px] sm:mt-24" />
        <GridHome />
        <BestGearCard className="pb-[200px] md:pb-0" />
      </div>
    </section>
  );
};

export default HomePage;
