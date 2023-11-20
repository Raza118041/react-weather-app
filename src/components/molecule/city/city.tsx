import React from 'react'
import Location from '../../../assets/location.svg'
import Weather from '../previousweather/weather';


const City = () => {
    const today = new Date();
    const currentTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <>
            <div className='flex justify-center items-center mt-3 md:justify-start md:w-1/4 md:px-5'>
                <span className='text-[#FFFFFF] font-Grotesk text-[18px] font-normal'>{currentDay},&nbsp;</span><span className='text-[#7F7F7F] font-Grotesk text-[18px] font-normal'>{currentTime}</span>
            </div>
            <div className='flex justify-center mt-3 gap-3 mb-5 md:justify-start md:w-1/4 md:px-5'>
                <img src={Location} alt=''></img>
                <p className='font-Grotesk font-normal text-[18px] text-[#FFFFFF]'>Lahore, PK</p>
            </div>
            <div className='md:hidden'>
                <Weather />
            </div>
        </>
    )
}

export default City