import React from 'react';
import Navbar from '../sectiones/Navbar';
import HomePage from '../pages/Home Page';
import Footer from '../sectiones/Footer';

const Root = () => {
    return (
        localStorage.getItem('login') === 'true' ?
            <>
                <Navbar />
                <HomePage />
                <Footer />
            </>
            : 
                window.location.href = "/Log-In"
            

    );
}

export default Root;
