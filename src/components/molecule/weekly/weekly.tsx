import React from 'react'
import Rain from '../../../assets/rainy.svg'
import Sunset from '../../../assets/sunset.svg'

const Weekly = () => {
    return (
        <div className='space-y-4'>
            <span className='px-5 text-[#FFFFFF] font-Grotesk font-bold text-[24px]'>This Week</span>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Sunday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>38°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>30°C</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Monday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>38°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>30°C</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Tuesday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>30°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>28°C</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Wednusday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>35°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>27°C</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Thursday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Sunset} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>clear sky</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>39°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>30°C</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Friday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>38°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>30°C</span>
                    </div>
                </div>

            </div>
            <div className='flex justify-between px-5'>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Satureday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>37°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>28°C</span>
                    </div>
                </div>
                <div className='bg-[#19202D] w-[45%] rounded-lg py-4'>
                    <p className='text-[#FFFFFF] font-Grotesk font-normal text-[16px] text-center'>Sunday</p>
                    <div className='flex justify-center items-center'>
                        <img src={Rain} alt='weather'></img>
                    </div>
                    <p className='text-[#7F7F7F] font-Grotesk font-normal text-[13px] text-center'>light rain</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-[#FFFFFF] font-bold font-Grotesk text-[16px] gap-1'>38°C</span>
                        <span className='text-[#7F7F7F] font-Grotesk text-[16px] font-normal'>27°C</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Weekly