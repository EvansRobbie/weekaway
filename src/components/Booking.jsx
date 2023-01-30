import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] w-full p-4 mx-auto'>
        <form className='lg:flex lg:justify-between text-center lg:gap-2 w-full items-center' >
            <div className='flex flex-col my-2 py-2'>
                <label htmlFor="destination">Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option>Granada Antigua</option>
                    <option>Key West</option>
                    <option>maldives</option>
                    <option>Cozumel</option>
                </select>
            </div>
            <div className='flex w-full gap-2'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                    <label htmlFor="">Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                    <label htmlFor="check-out">Check-Out</label>
                    <input className='border rounded-md p-2' type="date" id='check-out' />
                </div>
            </div>
            <div className='flex flex-col w-full my-2 py-2'>
                <label htmlFor="">Search</label>
                <button className='rounded-xl'>Rate & Availabilites</button>
            </div>
        </form>
    </div>
  )
}

export default Booking