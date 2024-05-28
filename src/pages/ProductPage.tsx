import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ProductCard from '@components/product/ProductCard';
import ProductGridImg from '@components/product/ProductGridImg';
import ProductDetails from '@components/product/ProductDetails';
import CategoryLinks from '@components/shared/CategoryLinks';
import ProductSuggestion from '@components/product/ProductSuggestion';

import dataProduct from '@datas/dataProduct.json';

const ProductPage = () => {
  let navigate = useNavigate();
  let productData: any = null;
  let param = useParams();

  useEffect(() => {
    if (dataProduct.filter((e) => e.slug === param.slug).length === 0) {
      navigate('/');
    }
  }, []);

  productData = dataProduct.find((e) => e.slug === param.slug);

  return (
    <section className="px-40 pb-40 pt-20 md:px-10 md:pt-20 sm:px-6">
      <Link
        to={'..'}
        className="block w-fit"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <p className="w-fit">Go back</p>
      </Link>
      {productData && (
        <>
          <ProductCard
            slug={productData.slug}
            isNew={productData.isNew}
            name={productData.name}
            description={productData.description}
            price={productData.price}
            idProduct={productData.idProduct}
            cartName={productData.cartName}
            className="pt-14 md:pt-6"
          />
          <ProductDetails features={productData.features} includes={productData.includes} />
          <ProductGridImg slug={productData.slug} />
          <ProductSuggestion others={productData.others} />
        </>
      )}
      <CategoryLinks />
    </section>
  );
};

export default ProductPage;
