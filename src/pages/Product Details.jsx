import React, { useEffect, useState } from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import { Link, useParams } from 'react-router-dom';
import SectionTitle from '../components/sectionTitle';
import ScetionCarousel from '../components/scetionCarousel';
import ProductBox from '../components/product-box';

const ProductDetails = () => {
    const { productKay } = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        function getproduct() {
            fetch(`https://fakestoreapi.in/api/products/${productKay}`)
                .then(response => response.json())
                .then(data => setProduct(data.product))
                .catch(error => console.error('Error:', error))
        }
        getproduct();
    }, []);

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
            <>
                <Navbar />
                <div className='ProductDetails py-16'>
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
                                        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{product?.title.split(' ', 3).join(' ')}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className="grid grid-cols-1 lg:grid-cols-5 py-20 gap-8">
                            <div className="flex flex-row items-center md:justify-around gap-6 col-span-3">
                                <div className="hidden flex-col w-[150px] gap-4 md:flex h-full">
                                    <div className="cursor-pointer img-box bg-[#F5F5F5] rounded-md p-4">
                                        <img className="object-cover w-full" src={product?.image} alt={product?.title} />
                                    </div>
                                    <div className="cursor-pointer img-box bg-[#F5F5F5] rounded-md p-4">
                                        <img className="object-cover w-full" src={product?.image} alt={product?.title} />
                                    </div>
                                    <div className="cursor-pointer img-box bg-[#F5F5F5] rounded-md p-4">
                                        <img className="object-cover w-full" src={product?.image} alt={product?.title} />
                                    </div>
                                    <div className="cursor-pointer img-box bg-[#F5F5F5] rounded-md p-4">
                                        <img className="object-cover w-full" src={product?.image} alt={product?.title} />
                                    </div>
                                </div>
                                <div className="img-box bg-[#F5F5F5] rounded-md p-4 h-full flex items-center m-auto">
                                    <img className="object-cover w-96" src={product?.image} alt={product?.title} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start  col-span-2">
                                <h1 className="text-2xl font-bold text-gray-900">{product?.title.split(' ', 3).join(' ')}</h1>
                                <div className="flex items-center my-3">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-0.5 ms-3">
                                        {`(${product?.rating ?
                                            product.rating.count : 'N/A'})`}
                                    </span>
                                    <div className="stock border-l border-gray-300 pl-4 ml-4 text-[#00FF66]">In Stock</div>
                                </div>
                                <span className="text-3xl font-bold text-gray-900">${product?.price}</span>
                                <p className="text-sm mt-4 border-b border-gray-400 pb-4 mb-4">{product?.description}</p>
                                <div className="flex flex-row items-center">
                                    <h3 className='text-xl'>colors :</h3>
                                    <div className="flex flex-row gap-1">
                                        <div className={`w-5 h-5 ml-8 cursor-pointer rounded-full bg-black border-4 border-white shadow-md outline-2 outline-black outline-double`}></div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center my-4">
                                    <h3 className='text-xl'>Size :</h3>
                                    <div className="flex flex-row gap-1">
                                        <div className="w-8 justify-center p-1 ml-8 cursor-pointer rounded-md border border-gray-400 flex items-center font-bold hover:bg-Secondary hover:text-white"> XS</div>
                                        <div className="w-8 justify-center p-1 ml-2 cursor-pointer rounded-md border border-gray-400 flex items-center font-bold hover:bg-Secondary hover:text-white">S</div>
                                        <div className="w-8 justify-center p-1 ml-2 cursor-pointer rounded-md border border-gray-400 flex items-center font-bold hover:bg-Secondary hover:text-white">M</div>
                                        <div className="w-8 justify-center p-1 ml-2 cursor-pointer rounded-md border border-gray-400 flex items-center font-bold hover:bg-Secondary hover:text-white">L</div>
                                        <div className="w-8 justify-center p-1 ml-2 cursor-pointer rounded-md border border-gray-400 flex items-center font-bold hover:bg-Secondary hover:text-white">XL</div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="cont border border-gray-400 rounded-md overflow-hidden flex flex-row">
                                        <button className='p-2 hover:bg-Secondary'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            max={product?.stock}
                                            className="border border-gray-300 px-2 w-16 text-center"
                                            placeholder="1"
                                        />
                                        <button className='p-2 hover:bg-Secondary'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                                <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <a href='#' className='text-white bg-Secondary py-2 px-8 rounded-sm border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Buy Now</a>
                                    <button className='p-2 hover:bg-Secondary border border-gray-400 rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="border rounded-md px-2 py-6 flex flex-col gap-4 my-6">
                                    <div className="flex flex-row gap-4 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} color={"#000000"} fill={"none"}>
                                            <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 8H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 11H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="text-box">
                                            <h3 className="text-xl font-bold">Free Delivery</h3>
                                            <p>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center border-t pt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={45} height={45} color={"#000000"} fill={"none"}>
                                            <path d="M11 6H15.5C17.9853 6 20 8.01472 20 10.5C20 12.9853 17.9853 15 15.5 15H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6.99998 12C6.99998 12 4.00001 14.2095 4 15C3.99999 15.7906 7 18 7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="text-box">
                                            <h3 className="text-xl font-bold">Return Delivery</h3>
                                            <p>Free 30 Days Delivery Returns. Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-20">
                            <SectionTitle
                                title='Related Item'
                                titleColor="text-Secondary"
                            />
                            <ScetionCarousel
                                carouselItemsDiv={getproductsLimit()}
                                arrowsDisplay="hidden"
                                flexorgrid="flex"
                                justify="lg:justify-between lg:flex-nowrap justify-center flex-wrap"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    export default ProductDetails;
