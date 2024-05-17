import Button from '@components/shared/ui/Button';

import useIsMobile from '@hooks/useIsMobile';
import useIsTablet from '@hooks/useIsTablet';

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
        return `/assets/shared/product-others/${slug}/image-${slug}-${imageSizeSuffix}.jpg`;
    };
    return (
        <div className="my-60 sm:my-32 text-center">
            <h3 className="mb-16  md:mb-14">You may also Like</h3>
            <div className="my-16 flex gap-8 sm:flex-col sm:gap-14">
                {others.map(({ slug, name }, index) => (
                    <div key={index} className="flex flex-col">
                        <img
                            src={renderProductImages(slug)}
                            alt={slug}
                            className="mb-10 rounded-lg sm:mb-8"
                        />
                        <h5 className="mb-8">{name}</h5>
                        <Button
                            link={`/product/${slug}`}
                            className="mx-auto w-fit"
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
