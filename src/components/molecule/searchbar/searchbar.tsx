import React from 'react'
import { IoSearch } from "react-icons/io5";
import Moon from '../moon/moon';
import City from '../city/city';
import Weather from '../previousweather/weather';


const Searchbar = () => {
  return (
    <div className='flex flex-row md:w-full'>
      <div>
        <div className="flex">
          <div className="w-full max-w-md p-4 relative">
            <IoSearch className="absolute top-7 left-6 text-[#909090]" />
            <input
              type="text"
              className="w-full p-2 pl-10 bg-[#34435f] rounded font-Poppins outline-none text-[#909090]"
              placeholder="Search For Places ..."
            />
          </div>
        </div>
        <Moon />
        <City />
      </div>
      <div className='hidden md:block md:w-full'>
        <Weather />
      </div>
    </div>
  )
}

export default Searchbar