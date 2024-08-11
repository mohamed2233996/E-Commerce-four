import React, { useEffect, useState } from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import { Link } from 'react-router-dom';

const MyAccount = () => {
    const [sidebar, setSidebar] = useState(false)

    const toggolSideBar = () => {
        setSidebar(!sidebar)
    }
    console.log(sidebar)




    return (
        <>
            <div className="MyAccount py-20">
                <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <Navbar />
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button onClick={toggolSideBar} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                <aside id="logo-sidebar" class=
                    {`${sidebar ? 'block' : '-translate-x-full'}
                        md:translate-x-0 fixed top-0 left-0 z-40 w-[70%] md:w-[25%] h-screen pt-48 transition-transform bg-white border-r border-gray-200`} aria-label="Sidebar">
                    <div class="h-full px-3 pb-4 overflow-y-auto my-auto bg-whit">
                        <h2 className='font-bold text-2xl'>Manage My Account</h2>
                        <ul class="space-y-1 font-medium pl-8 mt-4">
                            <li>
                                <a href="#" class="flex items-center p-2 text-Secondary rounded-lgbg-gray-100 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap">My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap">Address Book</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap">My Payment Options</span>
                                </a>
                            </li>
                        </ul>

                        <h2 className='font-bold text-2xl mt-8'>My Orders</h2>
                        <ul class="space-y-1 font-medium pl-8 mt-4">
                            <li>
                                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap">My Returns</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap">My Cancellations</span>
                                </a>
                            </li>
                        </ul>
                        <Link to={"/WishList"}><h2 className='font-bold text-2xl mt-8'>My WishList</h2></Link>
                    </div>
                </aside>

                <div class="pb-20 p-4 mt-44 sm:mt-28 md:mt-0 md:ml-[16rem] lg:ml-[20rem] xl:ml-[24rem] 2xl:ml-[29rem]">
                    <h1 className="text-3xl font-bold">Edit Your Profile</h1>
                    <form className="flex gap-8 mt-8 flex-wrap">
                        <div className="mb-4 w-full md:w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Enter your Name" />
                        </div>
                        <div className="mb-4 w-full md:w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Enter your Name" />
                        </div>
                        <div className="mb-4 w-full md:w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Enter your Email" />
                        </div>
                        <div className="mb-4 w-full md:w-[40%]">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" className="mt-1 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Kingston, 5236, United State" />
                        </div>
                        <div className="mb-4 w-full flex flex-col">
                            <label className="block text-sm font-medium text-gray-700">Password Changes</label>
                            <input type="password" className="mt-2 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Current Password" />
                            <input type="password" className="mt-2 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="New Password" />
                            <input type="password" className="mt-2 block w-full px-3 py-2 rounded-sm border-0 bg-[#F5F5F5] ring-0 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Confirm New Passwod" />
                        </div>
                    </form>
                    <div className="flex justify-end flex-col md:flex-row items-center mt-6">
                        <Link to={"/MyAccount"} className="text-sm font-medium py-2 px-8 text-gray-900 hover:text-gray-900 focus:outline-none focus:ring-0">Cancel</Link>
                        <button type="submit" className='text-white bg-Secondary py-2 px-8 rounded-md border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>Save Changes</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyAccount;
