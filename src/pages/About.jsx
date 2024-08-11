import React from 'react';
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import { Link } from 'react-router-dom';
import SideImage from "../assets/imges/Side Image.png"
import AboutBox1 from '../components/aboutBox1';
import EmployeeBox from '../components/employeeBox';
import emp1 from "../assets/imges/emp1.png"
import emp2 from "../assets/imges/emp2.png"
import emp3 from "../assets/imges/emp3.png"


const About = () => {
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
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">About</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className='flex flex-row gap-8'>
                        <div className='my-20 w-full lg:w-1/2'>
                            <h2 className='text-black text-4xl font-bold mb-10'>Our Story</h2>
                            <p className='mb-8'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        <div className='w-0 lg:w-1/2'>
                            <img src={SideImage} className='' alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
                        <AboutBox1
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M2.97659 10.5146V15.009C2.97659 17.8339 2.97659 19.2463 3.85624 20.1239C4.73588 21.0015 6.15165 21.0015 8.98318 21.0015H12.9876" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M6.98148 17.0066H10.9859" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M18.4941 13.5107C20.4292 13.5107 21.998 15.0464 21.998 16.9408C21.998 19.0836 19.8799 20.1371 18.8695 21.7433C18.6542 22.0857 18.3496 22.0857 18.1187 21.7433C17.0768 20.1981 14.9903 19.0389 14.9903 16.9408C14.9903 15.0464 16.559 13.5107 18.4941 13.5107Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M18.4942 17.0066H18.5032" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.7957 2.00254L6.14986 2.03002C4.41169 1.94542 3.96603 3.2116 3.96603 3.83056C3.96603 4.38414 3.89058 5.19117 2.82527 6.70798C1.75996 8.22478 1.84001 8.67537 2.44074 9.72544C2.93931 10.5969 4.20744 10.9374 4.86865 10.9946C6.96886 11.0398 7.99068 9.32381 7.99068 8.1178C9.03254 11.1481 11.9956 11.1481 13.3158 10.8016C14.6386 10.4545 15.7717 9.2118 16.0391 8.1178C16.195 9.47735 16.6682 10.2707 18.0663 10.8158C19.5145 11.3805 20.7599 10.5174 21.3848 9.9642C22.0097 9.41096 22.4107 8.18278 21.2968 6.83288C20.5286 5.90195 20.2084 5.02494 20.1033 4.11599C20.0423 3.58931 19.9888 3.02336 19.5972 2.66323C19.0248 2.13691 18.2036 1.97722 17.7957 2.00254Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>}
                            num="10.5k "
                            text="Sallers active our site"
                        />
                        <AboutBox1
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>}
                            num="15.9k "
                            text="Mopnthly Produduct Sale"
                        />
                        <AboutBox1
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M7.5 8V6.36364C7.5 3.95367 9.51472 2 12 2C14.4853 2 16.5 3.95367 16.5 6.36364V8" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M13.8816 7.5H10.1184C6.22973 7.5 4.7255 8.48796 3.6501 12.2373C2.68147 15.6144 2.19716 17.3029 2.70352 18.6124C3.01361 19.4143 3.56418 20.1097 4.28549 20.6104C6.8944 22.4216 16.9865 22.5043 19.7145 20.6104C20.4358 20.1097 20.9864 19.4143 21.2965 18.6124C21.8028 17.3029 21.3185 15.6144 20.3499 12.2373C19.3173 8.63723 17.9313 7.5 13.8816 7.5Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M11 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>}
                            num="13.6k "
                            text="Customer active in our site"
                        />
                        <AboutBox1
                            svg={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M22 12L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>}
                            num="35.0k "
                            text="Anual gross sale in our site"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                        <EmployeeBox
                            img={emp2}
                            Name="Tom Cruise"
                            Position="Founder & Chairman"
                        />
                        
                        <EmployeeBox
                            img={emp1}
                            Name="Emma Watson"
                            Position="Managing Director"
                        />

                        <EmployeeBox
                            img={emp3}
                            Name="Will Smith"
                            Position="Product Designer"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16">
                    <div className='flex flex-col items-center md:mb-0 mb-4'>
                        <div className='flex justify-center items-center bg-black rounded-full p-4 shadow-[0_0_0_10px_#c1c0c1]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"white"} fill={"none"}>
                                <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 8H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 11H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-bold text-xl'>FREE AND FAST DELIVERY</h2>
                            <p className='text-sm'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:mb-0 mb-4'>
                        <div className='flex justify-center items-center bg-black rounded-full p-4 shadow-[0_0_0_10px_#c1c0c1]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"white"} fill={"none"}>
                                <path d="M17 10.8045C17 10.4588 17 10.286 17.052 10.132C17.2032 9.68444 17.6018 9.51076 18.0011 9.32888C18.45 9.12442 18.6744 9.02219 18.8968 9.0042C19.1493 8.98378 19.4022 9.03818 19.618 9.15929C19.9041 9.31984 20.1036 9.62493 20.3079 9.87302C21.2513 11.0188 21.7229 11.5918 21.8955 12.2236C22.0348 12.7334 22.0348 13.2666 21.8955 13.7764C21.6438 14.6979 20.8485 15.4704 20.2598 16.1854C19.9587 16.5511 19.8081 16.734 19.618 16.8407C19.4022 16.9618 19.1493 17.0162 18.8968 16.9958C18.6744 16.9778 18.45 16.8756 18.0011 16.6711C17.6018 16.4892 17.2032 16.3156 17.052 15.868C17 15.714 17 15.5412 17 15.1955V10.8045Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M7 10.8046C7 10.3694 6.98778 9.97821 6.63591 9.6722C6.50793 9.5609 6.33825 9.48361 5.99891 9.32905C5.55001 9.12458 5.32556 9.02235 5.10316 9.00436C4.43591 8.9504 4.07692 9.40581 3.69213 9.87318C2.74875 11.019 2.27706 11.5919 2.10446 12.2237C1.96518 12.7336 1.96518 13.2668 2.10446 13.7766C2.3562 14.6981 3.15152 15.4705 3.74021 16.1856C4.11129 16.6363 4.46577 17.0475 5.10316 16.996C5.32556 16.978 5.55001 16.8757 5.99891 16.6713C6.33825 16.5167 6.50793 16.4394 6.63591 16.3281C6.98778 16.0221 7 15.631 7 15.1957V10.8046Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M5 9C5 5.68629 8.13401 3 12 3C15.866 3 19 5.68629 19 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
                                <path d="M19 17V17.8C19 19.5673 17.2091 21 15 21H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-bold text-xl'>24/7 CUSTOMER SERVICE</h2>
                            <p className='text-sm'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:mb-0 mb-4'>
                        <div className='flex justify-center items-center bg-black rounded-full p-4 shadow-[0_0_0_10px_#c1c0c1]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={36} height={36} color={"#ffffff"} fill={"none"}>
                                <path d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className='text-center mt-6'>
                            <h2 className='font-bold text-xl'>MONEY BACK GUARANTEE</h2>
                            <p className='text-sm'>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
