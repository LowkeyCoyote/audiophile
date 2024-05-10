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
                <h3 className="text-h3 uppercase font-bold mb-8 sm:text-h4 sm:mb-6 ">
                    Features
                </h3>
                {featureParagraphs.map((paragraph, index) => (
                    <div key={index} >
                        <p className="opacity-50">
                            {paragraph}
                        </p>
                        <br />
                    </div>
                ))}
            </div>
            <div className="w-2/5 ml-16 md:ml-0 md:w-full md:flex md:text-left sm:flex sm:flex-col ">
                <h3 className="text-h3 uppercase font-bold mb-8 md:w-1/2 sm:text-h4 sm:w-full sm:mb-6 ">
                    In the box
                </h3>
                <div className=" md:w-1/2 sm:w-full">
                    {includes.map(({ quantity, item }, index) => (
                        <p className="mb-2" key={index}>
                            <span className="opacity-100 text-dark-peach font-bold">
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
