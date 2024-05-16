type HeroHomeProps = {
    categoryName?: string;
};

const HeroCategory = ({ categoryName }: HeroHomeProps) => {
    return (
        <div className="bg-[#191919] py-24 text-center text-white sm:py-8">
            <h2>{categoryName}</h2>
        </div>
    );
};

export default HeroCategory;
