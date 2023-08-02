import React, { useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    url: "/images/image-product-1.jpg"
  },
  {
    url: "/images/image-product-2.jpg"
  },
  {
    url: "/images/image-product-3.jpg"
  },
  {
    url: "/images/image-product-4.jpg"
  },
]

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='w-full relative h-[296px] z-0 flex flex-row items-center justify-between'>
      <div className='relative w-full h-full'>
        <Image src={slides[currentIndex].url} alt="Product images" fill />
      </div>
      <button
        className='flex items-center justify-center absolute p-2 bg-white rounded-full right-3 w-8 h-8'
        onClick={nextSlide}
      >
        <Image
          src={"/images/icon-next.svg"}
          alt='Next icon'
          width={9}
          height={9}
        />
      </button>
      <button
        className='flex items-center justify-center absolute p-2 bg-white rounded-full left-3 w-8 h-8'
        onClick={prevSlide}
      >
        <Image
          src={"/images/icon-previous.svg"}
          alt='Previous icon'
          width={9}
          height={9}
          className='mr-0.5'
        />
      </button>
    </div>
  )
}
