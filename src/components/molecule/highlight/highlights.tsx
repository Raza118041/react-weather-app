import React from 'react'
import Humidity from '../../../assets/humidity.svg'
import Wind from '../../../assets/windnight.svg'
import Sunrise from '../../../images/sunrise.png'
import Sunset from '../../../images/sunset.png'
import Cloud from '../../../assets/clouds.svg'
import Wave from '../../../assets/wave.svg'
import Pressure from '../../../assets/pressure.svg'

const Highlights = () => {
    return (
        <div className='space-y-4'>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Humidity</p>
                    <div className='flex justify-center items-center'>
                        <img src={Humidity} alt='weather'></img>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[30px] gap-1'>94</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>%</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Wind Speed</p>
                    <div className='flex justify-center items-center'>
                        <img src={Wind} alt='weather'></img>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[30px]'>1.5</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>m/s</span>
                    </div>
                </div>

            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4 flex justify-center'>
                    <div className='flex justify-around items-center'>
                        <div className='flex flex-col'>
                            <img src={Sunrise} alt='sunrise' className=''></img>
                            <img src={Sunset} alt='sunset' className=''></img>
                        </div>
                        <div className='h-40'></div>
                        <div className='flex flex-col'>
                            <div>
                                <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>5:52 AM</p>
                                <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>Sunrise</p>
                            </div>
                            <div>
                                <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>6:56 PM</p>
                                <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>Sunset</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Clouds</p>
                    <div className='flex justify-center items-center'>
                        <img src={Cloud} alt='weather' className='ml-4'></img>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[30px]'>20</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>%</span>
                    </div>
                </div>

            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>UV Index</p>
                    <div className='flex justify-center items-center'>
                        <img src={Wave} alt='weather' className='ml-4'></img>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[30px]'>0</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Pressure</p>
                    <div className='flex justify-center items-center'>
                        <img src={Pressure} alt='weather' className='ml-4'></img>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[30px]'>1005</span><span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>hPa</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Highlights