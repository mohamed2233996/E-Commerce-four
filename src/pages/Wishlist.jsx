import React, { useEffect, useState } from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import ProductBox from '../components/product-box';
import SectionTitle from '../components/sectionTitle';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishItems, setWishItems] = useState([]);
    const [foryouProduct, setforyouProduct] = useState([]);


    // Fetch data from local storage for wishlist items
    const wishlistItems = JSON.parse(localStorage.getItem('wishList')) || [];

    // Remove Duplicates
    const uniqueWishlistItems = [...new Set(wishlistItems)];

    function getItems() {
        // Fetch product data from API
        const fetchItems = async () => {
            const response = await Promise.all(
                uniqueWishlistItems.map(async (item) => {
                    const response = await fetch(`https://fakestoreapi.com/products/${item}`);
                    return await response.json();
                })
            );
            setWishItems(response);
        };
        fetchItems();
    }

    useEffect(() => {
        getItems();
    }, []);

    useEffect(() => {
        // Fetch data from API for 'Just For You' section
        const fetchForYouProduct = async () => {
            const response = await fetch('https://fakestoreapi.in/api/products?limit=4');
            const data = await response.json();
            setforyouProduct(data.products);
        };
        fetchForYouProduct();
    })


    return (
        <>
            <Navbar />
            <div className='wishlist py-20'>
                <div className="container m-auto">
                    <div className='flex flex-row items-center justify-between'>
                        <h1 className='text-black font-bold text-3xl'>Wishlist <span>{`(${uniqueWishlistItems.length})`}</span></h1>
                        <a href='#' className='text-black border border-black py-2 px-8 rounded-sm hover:border-Secondary transition'>Move All To Bag</a>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 justify-center'>
                        {/* Render product boxes with fetched data */}
                        {wishItems.map((wishItem) => (
                            <ProductBox
                                key={wishItem.id}
                                productKay={wishItem.id}
                                title={wishItem.title?.split(' ', 3).join(' ')}
                                price={wishItem.price}
                                ratingCount={wishItem.rating?.count}
                                image={wishItem.image}
                            />
                        ))}
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <SectionTitle
                            title='Just For You'
                            titleColor="black"
                        />
                        <Link to={"/"} className='text-black border border-black py-2 px-8 rounded-sm hover:border-Secondary transition'>See All</Link>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 justify-center'>
                        {foryouProduct.map((wishItem) => (
                            <ProductBox
                                key={wishItem.id}
                                productKay={wishItem.id}
                                title={wishItem.title?.split(' ', 3).join(' ')}
                                price={wishItem.price}
                                ratingCount={wishItem.rating?.count}
                                image={wishItem.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Wishlist;
