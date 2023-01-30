import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      <div className='absolute w-full h-[90vh] bg-black/40 top-16 left-0 '/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:top-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='text-4xl font-bold'>Find you special trip </h1>
          <h2 className='text-4xl italic py-4'>With Weekaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem, modi debitis sed quos, nesciunt libero eaque atque quod placeat esse porro obcaecati? Magni itaque porro eligendi, cum similique officiis?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero