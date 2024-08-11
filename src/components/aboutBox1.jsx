import React from 'react';

const AboutBox1 = ({svg ,num ,text}) => {
    return (
        <div>
            <div className='box1About border border-[#0000004D] rounded-md px-6 py-8 flex flex-col items-center md:mb-0 mb-4 hover:bg-Secondary hover:border-Secondary'>
                <div className='icon-div flex justify-center items-center bg-black rounded-full p-4 shadow-[0_0_0_10px_#c1c0c1]'>
                    {svg}
                </div>
                <div className='textDiv text-center mt-6'>
                    <h2 className='font-bold text-xl'>{num}</h2>
                    <p className='text-sm'>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutBox1;
