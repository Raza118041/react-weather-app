import React from 'react'
import NightMoon from '../../../assets/moon.svg'
import Cloud from '../../../assets/cloud.svg'

const Moon = () => {
    return (
        <div className=''>
            <div className='mt-10 px-4'>
                <img src={NightMoon} alt=''></img>
            </div>
            <span className='text-[#FFFFFF] flex justify-center items-center text-[100px] font-light font-Poppins '>30&deg;C</span>
            <p className='text-[#7F7F7F] flex justify-center text-[16px] items-center font-Grotesk'>Feels like 37&deg;C</p>
            <div className='flex justify-center gap-1'>
                <img src={Cloud} alt='cloud'></img>
                <span className='text-[#FFFFFF] text-[18px] flex justify-center items-center font-light font-Poppins'>Mist</span>
            </div>
            <div className='w-4/5 mx-auto pt-5'>
                <hr className='border-t-1 border-solid border-[#3B435E]' />
            </div>

        </div>
    )
}

export default Moon