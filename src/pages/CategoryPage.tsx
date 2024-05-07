import { useParams, useNavigate } from 'react-router-dom';
import HeroCategory from '@components/category/HeroCategory';
import dataProduct from '@datas/dataProduct.json';
import {ProductType} from "../types/types"
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
      <div className='p-40 md:px-10 md:py-[120px] sm:px-6'>
      <div className=" flex flex-col gap-40  md:gap-[120px]">
        {products.map(({ slug, isNew, name, description, idProduct }, index) => (
          <ProductCardCategory 
          slug={slug} 
          isNew={isNew} 
          key={index}
          name={name}
          description={description}
          idProduct={idProduct}
          reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <CategoryLinks className="mt-[200px] mb-40 md:mt-36 md:mb-24 sm:mt-24 sm:mb-[120px]" />
      <BestGearCard />

      </div>

    </section>
  );
};

export default CategoryPage;
