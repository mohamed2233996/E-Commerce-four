import React, { useEffect, useState } from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import { Link } from 'react-router-dom';
import visaImg from "../assets/imges/Visa.png"
import NagadImg from "../assets/imges/Nagad.png"
import MastercardImg from "../assets/imges/Mastercard.png"
import BkashImg from "../assets/imges/Bkash.png"


const CheckOut = () => {
    const [dataFromCart, setDataFromCart] = useState([])

    //get product from cart


    useEffect(() => {
        setDataFromCart(JSON.parse(localStorage.getItem("cartProducts")))

        return () => {
            dataFromCart
        };
    }, []);



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
                            <li className="inline-flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link to={"/Cart"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    Cart
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Check Out</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-16'>
                        <div>
                            <h2 className='font-bold mb-4 text-4xl'>Billing Details</h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Full Name</label>
                                    <input type="text" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Street Address*</label>
                                    <input type="text" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Apartment, floor, etc. (optional)</label>
                                    <input type="text" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Town/City*</label>
                                    <input type="text" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Phone Number*</label>
                                    <input type="number" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium text-gray-600 mb-2">Email Address*</label>
                                    <input type="email" className="w-full px-3 py-2 bg-[#F5F5F5]  rounded-sm text-sm ring-0 border-0" />
                                </div>
                            </div>
                            <div class="flex items-center mt-10">
                                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-Secondary bg-gray-100 border-gray-300 rounded-sm" />
                                <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this information for faster check-out next time</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            {
                                dataFromCart.response?.map((product) => (
                                    <div className='flex flex-row justify-between items-center' key={product.id}>
                                        <div className='start-div flex flex-row items-center'>
                                            <div className='w-16 h-16 overflow-hidden m-1'>
                                                <img src={product.image} alt={product.name} className='object-cover rounded-sm' />
                                            </div>
                                            <h3 className='font-bold ml-3'>{product.title.split(' ', 2).join(' ')}</h3>
                                        </div>
                                        <span className="text-md font-medium">{product.price * product.quantity}$ </span>
                                    </div>
                                ))
                            }
                            <div className='mb-2 flex flex-row items-center justify-between border-b border-gray-300 py-2 mt-4'>
                                <span className="text-xl font-medium">Subtotal: </span>
                                <span className="text-xl font-medium">{dataFromCart.response?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
                            </div>
                            <div className='mb-2 flex flex-row items-center justify-between border-b border-gray-300 py-2'>
                                <span className="text-xl font-medium">Shipping: </span>
                                <span className="text-xl font-medium">Free</span>
                            </div>
                            <div className='mb-2 flex flex-row items-center justify-between py-2'>
                                <span className="text-xl font-medium">Total: </span>
                                <span className="text-xl font-medium">{dataFromCart.response?.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div class="flex items-center mt-2">
                                    <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-Secondary bg-gray-100 border-gray-300 rounded-sm" />
                                    <label for="checked-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Bank</label>
                                </div>
                                <div className='flex flex-row'>
                                    <img src={visaImg} alt="" />

                                    <img src={MastercardImg} alt="" />

                                    <img src={BkashImg} alt="" />

                                    <img src={NagadImg} alt="" />
                                </div>
                            </div>
                            <div class="flex items-center mt-2">
                                <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-Secondary bg-gray-100 border-gray-300 rounded-sm" />
                                <label for="checked-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Cash on delivery</label>
                            </div>
                            <div className='Coupon-Input mt-2 flex flex-col lg:flex-row items-center lg:items-start'>
                                <input type="text" className='py-2 px-8 rounded-md text-center lg:text-start text-lg lg:mr-4 mb-4 lg:mb-0' placeholder="Coupon Code" />
                                <button href='#' className='text-white bg-Secondary py-2 px-8 rounded-md border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Apply Coupon</button>
                            </div>
                            <button href='#' className=' w-fit text-white bg-Secondary py-2 px-8 rounded-md border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default CheckOut;
