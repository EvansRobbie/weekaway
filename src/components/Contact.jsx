import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1140px] w-full m-auto py-16 px4' id='contact'>
        <h2 className='text-center text-gray-500'>Send us a Message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2 '>
            <img className='w-full md:h-full rounded-xl object-cover p-2 max-h-[500px] h-[200px]' src="https://images.pexels.com/photos/12012966/pexels-photo-12012966.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
            <form>
                <div className='grid grid-cols-2'>
                    <input className='rounded-xl border p-2 m-2' type="text" placeholder='First Name'/>
                    <input className='rounded-xl border p-2 m-2' type="text" placeholder='Last Name' />
                    <input className='rounded-xl border p-2 m-2' type="email" placeholder='Email' />
                    <input className='rounded-xl border p-2 m-2' type="tel" placeholder='Phone' />
                    <input className='rounded-xl border p-2 m-2 col-span-2' type="text" placeholder='Address' />
                    <textarea className='border rounded-xl p-2 m-2 col-span-2'  cols="30" rows="10" placeholder='Your Message..'/>
                    <button className='col-span-2 m-2 rounded-xl'> Submit</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Contact