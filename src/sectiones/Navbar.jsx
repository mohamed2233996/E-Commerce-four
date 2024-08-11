'use client'
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const searchBarRef = useRef(null);
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const login = localStorage.getItem('login')


    const toggleSearchBarVisibility = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };



    const toggleDropdownVisibility = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    return (
        <>
            <div className="top-header bg-black">
                <div className="container m-auto text-white flex flex-col sm:flex-row justify-center items-center text-center py-2">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
                    <Link to={"/"} className='font-bold ml-2 underline'> ShopNow</Link>
                    <form className="max-w-sm ml-10">
                        <select id="countries" className="bg-black text-white text-sm ring-0 border-none focus:border-none focus:ring-0 block w-full p-2.5">
                            <option defaultValue={"en"}>English</option>
                            <option value={"ar"}>AR</option>
                            <option value={"FR"}>France</option>
                        </select>
                    </form>
                </div>
            </div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2 border-[rgba(0, 0, 0, 1) 30%]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Exclusive
                        </span>
                    </Link>
                    <div className="flex lg:order-2">
                        <div className="relative hidden lg:flex flex-row justify-center">
                            <div className="flex flex-row justify-center rounded-sm bg-[#F5F5F5] px-4 py-2">
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full text-sm text-gray-900 border-none bg-transparent"
                                    placeholder="What are you looking for?"
                                />
                                <button className='ml-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            {login ?
                                <div className="flex flex-row items-center space-x-4 ml-4">
                                    <Link to={"/Wishlist"} className="text-sm text-gray-900 dark:text-gray-400 hover:text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                    <Link to={"/Cart"} className="text-sm text-gray-900 dark:text-gray-400 hover:text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                            <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </Link>
                                    <div className='relative'>
                                        <button onClick={toggleDropdownVisibility} id="dropdownDefaultButton" className='flex items-center justify-center bg-Secondary p-1 rounded-full border border-Secondary text-white hover:bg-white hover:text-Secondary transition'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                                <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </button>
                                        {isDropdownVisible ?
                                            <div id="dropdown" class="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                    <li>
                                                        <Link to="My-Account" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Account</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            : ""
                                        }
                                    </div>

                                </div>
                                : ""
                            }
                        </div>
                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className={`transition inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100`}
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            onClick={toggleSearchBarVisibility}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${isSearchBarVisible ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}
                        id="navbar-search"
                        ref={searchBarRef}
                    >
                        <div className="relative mt-3 lg:hidden">
                            <div className='flex flex-row justify-center bg-gray-100 rounded-lg overflow-hidden'>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 bg-transparent"
                                    placeholder="Search..."
                                />
                                <button
                                    type="submit"
                                    className="flex items-center justify-center p-2 text-sm text-gray-900 hover:bg-fuchsia-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={"/"}
                                    className="block py-2 px-3 text-gray-900 rounded border-b hover:border-black border-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"/Contact"}
                                    className="block py-2 px-3 text-gray-900 rounded border-b hover:border-black border-transparent"
                                    aria-current="page"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to={"/About"}
                                    className="block py-2 px-3 text-gray-900 rounded border-b hover:border-black border-transparent"
                                >
                                    About
                                </Link>
                            </li>
                            {
                                login ? ""
                                    :
                                    <li>
                                        <Link to={"/Sign-Up"}
                                            href=""
                                            className="block py-2 px-3 text-gray-900 rounded border-b hover:border-black border-transparent"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
