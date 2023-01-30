import React, {useState} from 'react'
import {FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li> 
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      {/* Humbuger icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer'/>
      </div>
      {/*  Mobile Menu */}
      <div className={`${nav ? 'left-0': '-left-full duration-500' } overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 bg-black/90 px-4 py-7 flex flex-col w-full h-screen`}>
        <ul className='w-full h-full text-center py-12'>
          <li className='text-2xl py-8'>
            <a href="/">Home</a>
          </li>
          <li className='text-2xl py-8'>
            <a href="#gallery">Gallery</a>
          </li>
          <li className='text-2xl py-8'>
            <a href="#deals">Deals</a>
          </li> 
          <li className='text-2xl py-8'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar