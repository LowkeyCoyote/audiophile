import { HTMLAttributes } from 'react';

interface HeroHomeProps extends HTMLAttributes<HTMLDivElement> {
  categoryName?: string;
}

const HeroCategory = ({ categoryName }: HeroHomeProps) => {
  return (
    <div className="text-white text-center bg-[#191919] py-24 sm:py-8">
      <h2>{categoryName}</h2>
    </div>
  );
};

export default HeroCategory;
