import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

import Button from '@components/shared/ui/Buttton';

interface OtherProduct {
    name: string;
    slug: string;
}

interface ProductSuggestionProps {
    others: OtherProduct[];
}

const ProductSuggestion: React.FC<ProductSuggestionProps> = ({ others }) => {
    let isMobile = useIsMobile();
    let isTablet = useIsTablet();

    const imageSizeSuffix =
        !isMobile && isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

    const renderProductImages = (slug: string) => {
        return `/src/assets/shared/product-others/${slug}/image-${slug}-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className='my-60 sm:my-32'>
            <h3 className='text-center text-h3 uppercase font-bold mb-16 md:mb-14 sm:text-h5'>You may also Like</h3>
            <div className="flex gap-8 my-16 text-center sm:flex-col sm:gap-14">
                {others.map(({ slug, name }, index) => (
                    <div key={index} className="flex flex-col">
                        <img
                            src={renderProductImages(slug)}
                            alt={slug}
                            className="rounded-lg mb-10 sm:mb-8"
                        />
                        <h4 className="font-semibold text-h4 mb-8 uppercase sm:text-h5">{name}</h4>
                        <Button
                            link={`/product/${slug}`}
                            className="w-fit mx-auto"
                        >
                            See Product
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSuggestion;
