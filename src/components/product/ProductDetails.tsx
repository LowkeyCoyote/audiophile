import { HTMLAttributes } from 'react';

type includesProduct = {
    quantity: number;
    item: string;
};

interface ProductGridImgProps extends HTMLAttributes<HTMLDivElement> {
    features: string;
    includes: includesProduct[];
}

const ProductDetails = ({ features, includes }: ProductGridImgProps) => {
    const featureParagraphs: string[] = features.split('\n\n');

    return (
        <div className="flex md:flex-col md:gap-28 sm:gap-20">
            <div className="w-3/5 md:w-full">
                <h3 className=" mb-8 sm:mb-6 ">Features</h3>
                {featureParagraphs.map((paragraph, index) => (
                    <div key={index}>
                        <p>{paragraph}</p>
                        <br />
                    </div>
                ))}
            </div>
            <div className="ml-16 w-2/5 md:ml-0 md:flex md:w-full md:text-left sm:flex sm:flex-col ">
                <h3 className="mb-8 md:w-1/2 sm:mb-6 sm:w-full ">In the box</h3>
                <div className=" md:w-1/2 sm:w-full">
                    {includes.map(({ quantity, item }, index) => (
                        <p className="mb-2 opacity-100" key={index}>
                            <span className="font-bold text-dark-peach ">
                                {quantity.toString()}x
                            </span>{' '}
                            <span className="ml-6 opacity-50">{item}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
