import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className='flex flex-row items-center'>
            <span className='w-[20px] h-[40px] bg-Secondary rounded-lg'></span>
            <h2 className='text-Secondary font-bold ml-4'>{title}</h2>
        </div>
    );
}

export default SectionTitle;
