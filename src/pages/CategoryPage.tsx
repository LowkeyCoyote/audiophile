import { useParams, useNavigate } from 'react-router-dom';
import HeroCategory from '@components/category/HeroCategory';
import dataProduct from '@datas/dataProduct.json';
import { ProductType } from '../types/types';
import { useEffect } from 'react';
import ProductCardCategory from '@components/category/ProductCardCategory';
import CategoryLinks from '@components/shared/CategoryLinks';
import BestGearCard from '@components/shared/BestGearCard';

const CategoryPage = () => {
    let param = useParams();
    let category = param.category;
    let navigate = useNavigate();

    useEffect(() => {
        if (dataProduct.filter((e) => e.category === category).length === 0) {
            navigate('/');
        }
    }, []);

    let products: ProductType[] = dataProduct
        .filter((e) => e.category === category)
        .sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));

    return (
        <section>
            <HeroCategory categoryName={category} />
            <div className="px-40 pt-40 md:px-10 md:pb-0 md:pt-[120px] sm:px-6">
                <div className=" flex flex-col gap-40 md:gap-[120px]">
                    {products.map(
                        (
                            { slug, isNew, name, description, idProduct },
                            index,
                        ) => (
                            <ProductCardCategory
                                slug={slug}
                                isNew={isNew}
                                key={index}
                                name={name}
                                description={description}
                                idProduct={idProduct}
                                reverse={index % 2 !== 0}
                            />
                        ),
                    )}
                </div>
                <CategoryLinks className="mb-40 mt-[200px] md:mb-24 md:mt-36 sm:mb-[120px] sm:mt-24" />
                <BestGearCard className="pb-[200px] md:pb-0" />
            </div>
        </section>
    );
};

export default CategoryPage;
