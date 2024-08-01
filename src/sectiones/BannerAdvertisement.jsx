import React, { useEffect, useState } from 'react';
import adImg from "../assets/imges/ad-img.png"

const BannerAdvertisement = () => {
    const [countdown, setCountdown] = useState({
        days: 1,
        hours: 3,
        minutes: 22,
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





    return (
        <div className='Banner py-14'>
            <div className='container m-auto bg-black'>
                <div className='flex flex-col lg:flex-row items-center justify-between p-14'>
                    <div className='lg:w-1/2'>
                        <p className='text-greenBtn mb-4'>Categories</p>
                        <h1 className='text-5xl text-white font-bold'>Enhance Your Music Experience</h1>
                        <div className="timer py-8 mb-8">
                            <div className="time-container flex flex-row items-end">
                                <div className="time-digit w-20 h-20 p-2 mr-6 flex flex-col items-center bg-gray-300 rounded-full">
                                    <div className='text-2xl font-black' id="days">{countdown.days}</div>
                                    <p className='font-bold'>Days</p>
                                </div>
                                <div className="time-digit w-20 h-20 p-2 mr-6 flex flex-col items-center bg-gray-300 rounded-full">
                                    <div className='text-2xl font-black' id="hours">{countdown.hours}</div>
                                    <p className='font-bold'>Hours</p>
                                </div>
                                <div className="time-digit w-20 h-20 p-2 mr-6 flex flex-col items-center bg-gray-300 rounded-full">
                                    <div className='text-2xl font-black' id="minutes">{countdown.minutes}</div>
                                    <p className='font-bold'>Minutes</p>
                                </div>
                                <div className="time-digit w-20 h-20 p-2 flex flex-col items-center bg-gray-300 rounded-full">
                                    <div className='text-2xl font-black' id="seconds">{countdown.seconds}</div>
                                    <p className='font-bold'>Seconds</p>
                                </div>
                            </div>
                        </div>
                            <a href='#' className='text-white bg-greenBtn py-4 px-6 rounded-sm border border-greenBtn hover:bg-transparent hover:text-greenBtn transition text-lg'>View All Products</a>
                    </div>
                    <div className='lg:block hidden w-1/2'>
                    <img src={adImg} alt='Advertisement' className='drop-shadow-[0px_0px_35px_white] hover:rotate-6 transition' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerAdvertisement;
