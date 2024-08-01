'use client'
import React, { useRef, useState } from 'react';
import carouselImg1 from '../assets/imges/1.jpg'
import carouselImg2 from '../assets/imges/2.jpg'
import carouselImg3 from '../assets/imges/3.jpg'
import carouselImg4 from '../assets/imges/4.png'
import Carousel from '../components/heroCarousel';





const Hero = () => {
    const openlinks = useRef(null);
    const [isopenW, setisopenW] = useState(false);
    const toggleopenw = () => {
        setisopenW(!isopenW);
    };

    const [isopenM, setisopenM] = useState(false);
    const toggleopenm = () => {
        setisopenM(!isopenM);
    };

    const slides = [
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4
    ]


    return (
        <div className='hero'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col'>
                    <ul className='lg:w-1/3 p-4 lg:border-r-2 border-[rgba(0, 0, 0, 1) 30%]'>
                        <li>
                            <button onClick={toggleopenw} type="button" className="mt-2 flex items-center justify-between w-full">
                                <span className='text-2xl font-medium'>Woman’s Fashion</span>
                                <svg data-accordion-icon className={`${isopenW ? 'rotate-180' : 'rotate-90'} transition w-3 h-3 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                            <div className={`${isopenW ? 'block' : 'hidden'} flex flex-col transition`} ref={openlinks}>
                                <a className='text-2xl font-medium mt-2 pl-3' href="">Tops</a>
                                <a className='text-2xl font-medium mt-2 pl-3' href="">Dresses</a>
                            </div>
                        </li>
                        <li>
                            <button onClick={toggleopenm} type="button" className="mt-2 flex items-center justify-between w-full">
                                <span className='text-2xl font-medium'>Men’s Fashion</span>
                                <svg data-accordion-icon className={`${isopenM ? 'rotate-180' : 'rotate-90'} transition w-3 h-3 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                            <div className={`${isopenM ? 'block' : 'hidden'} flex flex-col transition`} ref={openlinks}>
                                <a className='text-2xl font-medium mt-2 pl-3' href="">Shirts</a>
                                <a className='text-2xl font-medium mt-2 pl-3' href="">Shorts</a>
                            </div>
                        </li>
                        <li className='text-2xl font-medium mt-2'><a href="">Electronics</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Home & Lifestyle</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Medicine</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Sports & Outdoor</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Baby’s & Toys</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Groceries & Pets</a></li>
                        <li className='text-2xl font-medium mt-2'><a href="">Health & Beauty</a></li>
                    </ul>
                    <div className='p-6 lg:w-2/3 mx-auto'>
                    <Carousel autoSlide={true} >
                        {[...slides.map((s) => (
                            <img src={s} />
                        ))]}
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
