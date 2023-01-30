import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1140px] m-auto py-16 px-4 w-full' id='gallery'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='col-span-2 sm:col-span-3 row-span-2'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
        <div>
          <img className='w-full h-[200px] object-cover' src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div>
          <img className='w-full h-[200px] object-cover' src="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=300" alt="/" />
        </div>
        <div>
          <img className='w-full h-[200px] object-cover' src="https://images.pexels.com/photos/4946903/pexels-photo-4946903.jpeg?auto=compress&cs=tinysrgb&w=300" alt="/" />
        </div>
        <div>
          <img className='w-full h-[200px] object-cover' src="https://images.pexels.com/photos/4916509/pexels-photo-4916509.jpeg?auto=compress&cs=tinysrgb&w=300" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallery