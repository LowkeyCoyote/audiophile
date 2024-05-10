import { Link, useNavigate, useParams } from 'react-router-dom';
import dataProduct from '@datas/dataProduct.json';
import ProductCard from '@components/product/ProductCard';
import ProductGridImg from '@components/product/ProductGridImg';
import ProductDetails from '@components/product/ProductDetails';
import CategoryLinks from '@components/shared/CategoryLinks';
import ProductSuggestion from '@components/product/ProductSuggestion';

const ProductPage = () => {
    let navigate = useNavigate();
    let slugProduct : string;
    let productData : any = null;
    let param = useParams();

    if (
        !param.slug ||
        !dataProduct.find((e) => e.slug === param.slug)
    ) {
        navigate(`/category/${productData.category}`);
    } else {
        slugProduct = param.slug;
        productData = dataProduct.find((e) => e.slug === slugProduct)
        console.log(productData)
    }


    return (
        <section className="pt-20 pb-40 px-40 md:px-10 md:pt-20 sm:px-6">
            <Link
                to={'..'}
                className='block w-fit'
                onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
            >
                <p className="opacity-50 w-fit">Go back</p>
            </Link>
            <ProductCard
            slug={productData.slug}
            isNew={productData.isNew}
            name={productData.name}
            description={productData.description}
            price = {productData.price}
            idProduct={productData.idProduct}
            cartName={productData.cartName}
            className='pt-14 md:pt-6'
            /> 
            <ProductDetails
            features={productData.features}
            includes={productData.includes}
            
            />
            <ProductGridImg
            slug={productData.slug}
            />

            <ProductSuggestion
            others={productData.others}
            />
            <CategoryLinks
            />
        </section>
    );
};

export default ProductPage;
