import { Link, useNavigate, useParams } from 'react-router-dom';
import dataProduct from '@datas/dataProduct.json';
import ProductCard from '@components/product/ProductCard';
import ProductGridImg from '@components/product/ProductGridImg';

const ProductPage = () => {
    let navigate = useNavigate();
    let idProduct : number;
    let productData : any = null;
    let param = useParams();


    if (
        !param.id ||
        isNaN(parseInt(param.id)) ||
        !dataProduct.find((e) => e.idProduct.toString() === param.id)
    ) {
        navigate('/');
    } else {
        idProduct = parseInt(param.id);
        productData = dataProduct.find((e) => e.idProduct === idProduct)
    }
    console.log(productData.gallery)


    return (
        <section className="pt-20 pb-40 px-40 md:px-10 md:pt-20 sm:px-6">
            <Link
                to={'..'}
                onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}
            >
                <p className="opacity-50 pb-14 md:pb-6 w-fit">Go back</p>
            </Link>
            <ProductCard
            slug={productData.slug}
            isNew={productData.isNew}
            name={productData.name}
            description={productData.description}
            price = {productData.price}
            />    
            <ProductGridImg
            slug={productData.slug}
            />
        </section>
    );
};

export default ProductPage;
