import React from 'react';
import SectionTitle from '../components/sectionTitle';
import fuImg1 from "../assets/imges/fu1.png"
import fuImg2 from "../assets/imges/fu2.png"
import fuImg3 from "../assets/imges/fu3.png"
import fuImg4 from "../assets/imges/fu4.png"

const Featured = () => {
    return (
        <div className="Featured">
            <div className='container m-auto py-20'>
                <SectionTitle
                    title='Featured'
                    titleColor="text-Secondary"
                />
                <div className='flex flex-col items-start mb-16 md:mb-0 md:flex-row md:items-center gap-6 md:gap-14 mt-6'>
                    <h1 className='text-black font-bold text-4xl'>New Arrival</h1>
                </div>
                <div className="flex flex-col md:flex-row items-stretch gap-6 py-16">
                    <div className='md:w-1/2'>
                        <a href="">
                            <img src={fuImg1} className='w-full hover:brightness-125' alt="" />
                        </a>
                    </div>
                    <div className='md:w-1/2 flex flex-col items-stretch gap-6'>
                        <div className=''>
                            <a href="">
                                <img src={fuImg2} className='w-full hover:brightness-125' alt="" />
                            </a>
                        </div>
                        <div className='flex flex-row items-stretch gap-6'>
                            <div>
                                <a href="">
                                    <img src={fuImg3} className='w-full hover:brightness-125' alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <img src={fuImg4} className='w-full hover:brightness-125' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
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
    );
}

export default Featured;
