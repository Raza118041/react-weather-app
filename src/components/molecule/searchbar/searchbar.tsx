import React from 'react'
import { IoSearch } from "react-icons/io5";
import Moon from '../moon/moon';
import City from '../city/city';


const Searchbar = () => {
  return (
    <>
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
    </>
  )
}

export default Searchbar