import React from 'react';
import qrimg from '../assets/imges/qr.png';
import gp from '../assets/imges/gp.png';
import as from '../assets/imges/as.png';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-8 px-4 py-20 lg:py-12 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <h2 className="mb-6 text-xl font-black text-white">
                            Exclusive
                        </h2>
                        <p className='text-white font-bold'>Subscribe</p>
                        <p className='text-gray-200 mt-6 mb-2'>Get 10% off your first order</p>
                        <form className="flex flex-row gap-2 border border-white rounded-md">
                            <input type="email" className=" bg-transparent text-white w-full px-4 py-2 rounded-sm border-none focus:border-none focus:ring-0 focus:outline-none border-gray-300" placeholder="Enter your email" />
                            <button type="submit" className="px-4 py-2 text-white hover:text-Secondary transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} fill={"none"}>
                                    <path d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M11.5 12.5L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-white">Support</h2>
                        <ul className="text-gray-200">
                            <li className="mb-4">
                                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            </li>
                            <li className="mb-4">
                                <p>exclusive@gmail.com</p>
                            </li>
                            <li className="mb-4">
                                <p>+88015-88888-9999</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-white">Account</h2>
                        <ul className="text-gray-200">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    My Account
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Login / Register
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Cart
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Wishlist
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Shop
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-white">Quick Link</h2>
                        <ul className="text-gray-200">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Terms Of Use
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    FAQ
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-bold text-white">
                            Download App
                        </h2>
                        <p className='text-gray-400 mb-4'>Save $3 with App New User Only</p>
                        <div className="flex items-center gap-2">
                            <a href=""><img src={qrimg} alt="" /></a>
                            <div className='flex flex-col items-center gap-2'>
                                <a href=""><img src={gp} alt="" /></a>
                                <a href=""><img src={as} alt="" /></a>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 my-4'>
                            <a href="" className='text-white hover:text-Secondary '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="" className='text-white hover:text-Secondary '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="" className='text-white hover:text-Secondary '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="" className='text-white hover:text-Secondary '>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                                    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <span className="text-sm text-gray-200 flex items-center justify-center py-2">
                Copyright <a className='text-Secondary font-bold' href="https://www.linkedin.com/in/mohamed-gamal-1152992a4/"> Mohamed Gamal </a> 2022. All right reserved
                </span>
            </div>
        </footer>

    );
}

export default Footer;
