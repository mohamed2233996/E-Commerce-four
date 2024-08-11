import React, { useEffect, useState } from 'react';
import signUpImg from "../assets/imges/sign up.png"
import Navbar from '../sectiones/Navbar';
import Footer from '../sectiones/Footer';

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let login = false

    // Fetch stored email and password from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');


    const handleSubmit = (e) => {
        e.preventDefault();
        // If credentials are incorrect, display an error message
        if (email === "m@me.com" && password === "123" ||
            email === storedEmail && password === storedPassword) {

            //seve login
            login = true;
            localStorage.setItem("login", login);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Redirect to home page
            window.location.href = "/";

        } else {
            
            alert("Invalid credentials. Please try again.");
        }

    }


    return (
        <>
            <Navbar />
            <div className="sign-up pt-8 pb-14">
                <div className="container m-auto">
                    <div className='grid grid-cols-2 justify-between'>
                        <img className='w-full' src={signUpImg} alt="" />
                        <div className='p-8 flex flex-col lg:ml-20'>
                            <div>
                                <h1 className='text-3xl text-black font-bold'>Log in to Exclusive</h1>
                                <p className='text-black my-4'>Enter your details below</p>
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col mt-8">
                                <input type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full py-2 mt-4 border-t-0 border-x-0 border-b border-gray-300 outline-none" placeholder="Email or Phone Number" />
                                <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full py-2 mt-4 border-t-0 border-x-0 border-b border-gray-300 outline-none" placeholder="Password" />
                                <div className='flex flex-row justify-between items-center mt-8'>
                                    <button type='submit' className='bg-Secondary border border-Secondary text-white py-2 px-8 hover:bg-white hover:text-Secondary rounded-sm'>Log In</button>
                                    <a href='Forget-Password' className='text-Secondary'>Forget Password?</a>
                                </div>
                            </form>
                            <div className='mt-8'>
                                <p>email :<span className='text-Secondary font-bold'> m@me.com </span></p>
                                <p>password :<span className='text-Secondary font-bold'> 123 </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LogIn;
