import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/sectionTitle';
import ScetionCarousel from '../components/scetionCarousel';
import ProductBox from '../components/product-box';

const Month = () => {

    const [productsLimit, setProductsLimit] = useState()
    function getproductsLimit() {
        useEffect(() => {
            fetch('https://fakestoreapi.in/api/products?limit=4')
                .then(response => response.json())
                .then(data => setProductsLimit(data.products))
                .catch(error => console.error('Error:', error))
        }, []);

        return (
            productsLimit?.map((product) => {
                return (
                    <ProductBox
                        key={product.id}
                        productKay={product.id}
                        title={product.title.split(' ', 2).join(' ')}
                        price={product.price}
                        ratingCount="+100"
                        image={product.image}
                    />
                )
            })
        )
    }

    return (
        <div className="month">
            <div className='container m-auto py-20'>
                <SectionTitle
                    title='This Month'
                />
                <div className='flex flex-col justify-between md:flex-row md:items-center gap-6 md:gap-14 mt-6'>
                    <h1 className='text-black text-center font-bold text-4xl'>Best Selling Products</h1>
                    <div className='flex justify-center'>
                        <a href='#' className='text-white bg-Secondary py-2 px-8 rounded-sm border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>View All</a>
                    </div>
                </div>
                <ScetionCarousel
                    carouselItemsDiv={getproductsLimit()}
                    arrowsDisplay="hidden"
                    flexorgrid ="flex"
                    justify="lg:justify-between lg:flex-nowrap justify-center flex-wrap"
                />

            </div>
        </div>
    );
}

export default Month;
