import React from 'react'
import Cloud from '../../../../src/images/weather.png'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Highlights from '../highlight/highlights';

const Weather = () => {
    const today = new Date();
    const currentTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });
    return (
        <div className='bg-[#34435f] py-10'>
            <div className='flex justify-between px-5 pb-7'>
                <p className='font-Grotesk font-bold text-[24px] text-[#FFFFFF]'>Today</p>
                <p className='font-Poppins font-medium text-[15px] text-[#FFFFFF] rounded-full p-2 bg-[#1A1A1A]'>°C</p>
            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <div className='flex justify-center'>
                        <span className='text-[#FFFFFF] font-Grotesk text-[16px] font-normal'>{currentDay},&nbsp;</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>{currentTime}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <SlArrowLeft style={{ color: '#7F7F7F' }} />
                        <img src={Cloud} alt='weather' className='ml-3'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>few clouds</p>
                    <p className='text-[#FFFFFF] text-center font-Grotesk font-normal'>31°C</p>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <div className='flex justify-center'>
                        <span className='text-[#FFFFFF] font-Grotesk text-[16px] font-normal'>{currentDay},&nbsp;</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>{currentTime}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={Cloud} alt='weather' className='ml-4'></img>
                        <SlArrowRight style={{ color: '#7F7F7F' }} />
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>few clouds</p>
                    <p className='text-[#FFFFFF] text-center font-Grotesk font-normal'>31°C</p>
                </div>
            </div>
            <p className='font-Grotesk font-bold text-[#FFFFFF] my-5 px-5 text-[24px]'>Today's Highlights</p>
            <Highlights />
        </div>
    )
}

export default Weather