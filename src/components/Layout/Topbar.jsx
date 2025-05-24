import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TbBrandMeta } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";




const Topbar = () => {
  return (
    <div className='bg-rabbit-red  text-white '>
        <div className='container mx-auto flex  justify-between items-center py-3 px-4 '>
          <div className='hidden md:flex  items-center space-x-4'>
            <a href="" className='hover:text-gray-300'>
              <TbBrandMeta className='h-5 w-5' />
            </a>
            <a href="" className='hover:text-gray-300'>
              <FaInstagram  className='h-5  w-5'/>
            </a>
            <a href="" className='hover:text-gray-300'>
              <FaXTwitter  className='h-5 w-4'/>
            </a>
          </div>
          <div className='flex-grow text-center text-sm '>
            <span>We ship world - Fast and reliable shipping!</span>
          </div>
          <div className='text-sm hidden md:block'>
            <a href="tel:9643641854" className='hover:text-gray-300'>9643641854</a>
          </div>
        </div>
    </div>
  )
}

export default Topbar