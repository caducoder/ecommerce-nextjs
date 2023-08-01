import React, { useState } from 'react'
import Image from 'next/image'

export const Details = () => {
  const [itemQuantity, setItemQuantity] = useState(0);
  return (
    <div className='flex flex-col p-4 gap-3'>
      <p className='uppercase text-orange text-xs tracking-widest font-bold'>Sneaker Company</p>
      <h2 className='text-3xl font-bold'>Fall Limited Edition Sneakers</h2>
      <p className='text-gray-500 text-sm'>
        These low-profile sneakers are your perfect casual wear companion. Featuring
        a durable rubber outer sole, they&apos;ll withstand everything the weather
        can offer.
      </p>
      <div className='flex flex-row justify-between text-center'>
        <div className='flex flex-row gap-4 text-center'>
          <span className='text-xl font-bold'>$125.00</span>
          <div className='text-sm my-1 px-2 text-orange font-bold bg-pale-orange rounded-md'>
            50%
          </div>
        </div>
        <div className='line-through text-xs text-gray-400 py-1'>$250.00</div>
      </div>
      <div className='flex flex-row justify-between p-2 bg-light-blue rounded-md'>
        <button className='p-2' onClick={() => setItemQuantity(prev => prev - 1)}>
          <Image src={'/images/icon-minus.svg'} alt='' width={10} height={10} />
        </button>
        <span className='font-bold'>{itemQuantity}</span>
        <button className='p-2' onClick={() => setItemQuantity(prev => prev + 1)}>
          <Image src={'/images/icon-plus.svg'} alt='' width={10} height={10} />
        </button>
      </div>
      <button
        className='p-2 bg-orange rounded-md text-white font-bold'
        onClick={() => console.log('Added to cart')}
      >
        Add to cart
      </button>
    </div>
  )
}