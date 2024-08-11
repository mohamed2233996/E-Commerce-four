import React, { useEffect, useState } from 'react';
import ProductBox from '../components/product-box';
import ScetionCarousel from '../components/scetionCarousel';
import SectionTitle from '../components/sectionTitle';

const Today = () => {
    const [countdown, setCountdown] = useState({
        days: 1,
        hours: 24,
        minutes: 60,
        seconds: 60,
    });
    const startCountdown = () => {
        const intervalId = setInterval(() => {
            if (countdown.seconds === 0) {
                if (countdown.minutes === 0) {
                    if (countdown.hours === 0) {
                        if (countdown.days === 0) {
                            clearInterval(intervalId);
                        } else {
                            setCountdown((prevCountdown) => ({
                                ...prevCountdown,
                                days: prevCountdown.days - 1,
                                hours: 24,
                                minutes: 60,
                                seconds: 60,
                            }));
                        }
                    } else {
                        setCountdown((prevCountdown) => ({
                            ...prevCountdown,
                            hours: prevCountdown.hours - 1,
                            minutes: 60,
                            seconds: 60,
                        }));
                    }
                } else {
                    setCountdown((prevCountdown) => ({
                        ...prevCountdown,
                        minutes: prevCountdown.minutes - 1,
                        seconds: 60,
                    }));
                }
            } else {
                setCountdown((prevCountdown) => ({
                    ...prevCountdown,
                    seconds: prevCountdown.seconds - 1,
                }));
            }
        }, 1000);

        return intervalId;
    };
    useEffect(() => {
        const intervalId = startCountdown();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const [products, setProducts] = useState()
    function getproducts() {
        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error:', error))
        }, []);

        return (
            products?.map((product) => {
                return (
                    <ProductBox
                        key={product.id}
                        productKay={product.id}
                        title={product.title.split(' ', 3).join(' ')}
                        price={product.price}
                        ratingCount={product.rating.count}
                        image={product.image}
                    />
                )
            })
        )
    }


    return (
        <div className="today">
            <div className='container m-auto py-20 border-b border-gray-300'>
                <SectionTitle
                    title='Today’s'
                    titleColor="text-Secondary"
                />
                <div className='flex flex-col items-start mb-16 md:mb-0 md:flex-row md:items-center gap-6 md:gap-14 mt-6'>
                    <h1 className='text-black font-bold text-4xl'> Flash Sales</h1>
                    <div className="timer">
                        <div className="time-container flex flex-row items-end">
                            <div className="time-digit px-4 flex flex-col items-center">
                                <p className='font-bold'>Days</p>
                                <div className='text-3xl font-black' id="days">{countdown.days}</div>
                            </div>
                            <span className='text-Secondary font-bold text-xl'>:</span>
                            <div className="time-digit px-4 flex flex-col items-center">
                                <p className='font-bold'>Hours</p>
                                <div className='text-3xl font-black' id="hours">{countdown.hours}</div>
                            </div>
                            <span className='text-Secondary font-bold text-xl'>:</span>
                            <div className="time-digit px-4 flex flex-col items-center">
                                <p className='font-bold'>Minutes</p>
                                <div className='text-3xl font-black' id="minutes">{countdown.minutes}</div>
                            </div>
                            <span className='text-Secondary font-bold text-xl'>:</span>
                            <div className="time-digit px-4 flex flex-col items-center">
                                <p className='font-bold'>Seconds</p>
                                <div className='text-3xl font-black' id="seconds">{countdown.seconds}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScetionCarousel
                    carouselItemsDiv={getproducts()}
                    arrowsDisplay =""
                    flexorgrid ="flex"
                    justify=""
                />
                <div className='flex justify-center'>
                    <a href='#' className='text-white bg-Secondary py-2 px-8 rounded-sm border border-Secondary hover:bg-white hover:text-Secondary transition text-lg'>View All Products</a>
                </div>
            </div>
        </div>
    );
}

export default Today;
