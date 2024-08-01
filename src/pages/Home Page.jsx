import React from 'react';
import Hero from '../sectiones/Hero';
import Categories from '../sectiones/Categories';
import Month from '../sectiones/Month';
import BannerAdvertisement from '../sectiones/BannerAdvertisement';
import Products from '../sectiones/products';
import Featured from '../sectiones/Featured';
import Today from '../sectiones/today';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Today />
            <Categories />
            <Month />
            <BannerAdvertisement />
            <Products />
            <Featured />
        </>
    );
}

export default HomePage;
