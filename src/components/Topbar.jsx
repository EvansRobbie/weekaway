import React from 'react'
import { AiFillPhone,AiOutlineClockCircle } from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'
const Topbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-4 '>
        <div className='flex items-center'>
            <BsChatSquareDots size={25} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-500'>Weekaway</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-small text-gray-700'>9AM - 5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-small text-gray-700'>+254 758 540 620</p>
            </div>
            <button>Get a free quote</button>
        </div>
    </div>
  )
}

export default Topbar