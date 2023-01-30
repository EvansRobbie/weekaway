import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  const today = new Date()
  return (
    <div className='max-w-[1140px] w-full m-auto py-4 border-t-4'>
      <div className='flex items-center justify-center m-auto'>
        <BsChatSquareDots size={25} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl text-gray-700 font-bold mr-2'>WEEKAWAY</h1>
        <p className='text-gray-500 text-sm'>&copy; Robbievans {today.getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer