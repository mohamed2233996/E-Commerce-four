import React from 'react';
import signUpImg from "../assets/imges/sign up.png"
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';
import iconG from "../assets/imges/Icon-Google.png"
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className="sign-up py-8">
                <div className="container m-auto">
                    <div className='grid grid-cols-2 justify-between'>
                        <img className='w-full' src={signUpImg} alt="" />
                        <div className='p-8 flex flex-col lg:ml-20'>
                            <div>
                                <h1 className='text-3xl text-black font-bold'>Create an account</h1>
                                <p className='text-black my-4'>
                                    Enter your details belowree.
                                </p>
                            </div>
                            <form className="flex flex-col mt-8">
                                <input type="text" className="w-full py-2 border-t-0 border-x-0 border-b border-gray-300 outline-none" placeholder="Email" />
                                <input type="number" className="w-full py-2 mt-4 border-t-0 border-x-0 border-b border-gray-300 outline-none" placeholder="Email or Phone Number" />
                                <input type="password" className="w-full py-2 mt-4 border-t-0 border-x-0 border-b border-gray-300 outline-none" placeholder="Password" />
                                <button type='submit' className='mt-8 bg-Secondary border border-Secondary text-white py-2 px-4 hover:bg-white hover:text-Secondary rounded-sm'>Create Account</button>
                                <div className='flex items-center justify-center mt-4 py-2 border border-gray-300'>
                                    <img className='w-6' src={iconG} alt="" />
                                    <span className='ml-2 text-sm'>Sign Up with Google</span>
                                </div>
                            </form>
                                <span className='text-sm text-gray-600 mt-6'>Already have an account? <Link to={"/Log in"} className='underline ml-4'>Login In</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;
