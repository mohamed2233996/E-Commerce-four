import React from 'react';
import Navbar from '../sectiones/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../sectiones/Footer';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='CheckOut py-16'>
                <div className="container m-auto">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to={"/"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">404 Not Found</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex items-center flex-col justify-center gap-4 my-20 '>
                        <h1 className='text-6xl font-bold text-center mt-10 mb-6'>404 Not Found</h1>
                        <p className='text-center text-gray-600 mb-10'>Your visited page not found. You may go home page.</p>
                        <Link to={"/"} className="text-white bg-Secondary py-2 px-8 rounded-sm border border-Secondary hover:bg-white hover:text-Secondary transition text-lg">Back to home page</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
