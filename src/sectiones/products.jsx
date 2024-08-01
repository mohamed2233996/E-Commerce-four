import React, { useEffect, useState } from 'react';
import ProductBox from '../components/product-box';
import ScetionCarousel from '../components/scetionCarousel';
import SectionTitle from '../components/sectionTitle';

const Products = () => {


    const [products, setProducts] = useState()
    function getproducts() {
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error:', error))
        }, []);

        return (
            products?.map((product) => {
                return (
                    <ProductBox
                        key={product.id}
                        productKay={product.id}
                        title={product.title.split(' ', 3).join(' ')}
                        price={product.price}
                        ratingCount={product.rating.count}
                        image={product.image}
                    />
                )
            })
        )
    }
    return (
        <div className="OurProducts">
            <div className='container m-auto py-20'>
                <SectionTitle
                    title='Our Products'
                />
                <div className='flex flex-col items-start mb-16 md:mb-0 md:flex-row md:items-center gap-6 md:gap-14 mt-6'>
                    <h1 className='text-black font-bold text-4xl'>Explore Our Products</h1>
                </div>
                <ScetionCarousel
                    carouselItemsDiv={getproducts() }
                    arrowsDisplay =""
                    flexorgrid ="grid grid-rows-2 grid-flow-col"
                    justify=""
                />
                <div className='flex justify-center'>
                    <a href='#' className='text-white bg-Secondary py-2 px-8 rounded-sm border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>View All Products</a>
                </div>
            </div>
        </div>
    );
}

export default Products;
