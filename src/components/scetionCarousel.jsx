import React from 'react';

const ScetionCarousel = ({ carouselItemsDiv, arrowsDisplay, flexorgrid, justify }) => {
    var carousel = document.querySelectorAll(".carousel-container")[0];

    const handlePrevClick = () => {
        carousel.scrollTo({
            left: carousel.scrollLeft - 100,
            behavior: 'smooth',
        });
    };

    const handleNextClick = () => {
        carousel.scrollTo({
            left: carousel.scrollLeft + 100,
            behavior: 'smooth',
        });
    };

    return (

        <div className='carousel py-16 w-full relative'>
            <div className={`carousel-container overflow-y-hidden ${flexorgrid} ${justify} gap-5`}>
                {carouselItemsDiv}
            </div>
            <div className={`carousel-actions flex flex-row gap-8 absolute -top-8 right-2 ${arrowsDisplay}`}>
                <button id="carousel-button-prev" onClick={handlePrevClick} className='bg-gray-200 rounded-full p-2 hover:text-Secondary' aria-label="Previous">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                        <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button id="carousel-button-next" onClick={handleNextClick} className='bg-gray-200 rounded-full p-2 hover:text-Secondary' aria-label="Next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
                        <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ScetionCarousel;
