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
  }
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

  const handleImgClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className='w-full relative h-[296px] z-0 flex flex-row items-center justify-between md:flex-col md:w-[500px] xl:h-[350px]'>
      <div className='relative w-full h-full md:h-296px'>
        <Image src={slides[currentIndex].url} alt="Product images" fill className='md:rounded-lg' />
      </div>
      <div className='hidden w-full mt-4 md:visible md:flex flex-row justify-between'>
        {slides.map((img, i) => (
          <Image
            role='button'
            key={i}
            src={img.url}
            alt='Item photo'
            className={`relative rounded-md cursor-pointer border border-transparent ${currentIndex == i && 'border-orange'} hover:opacity-50`}
            width={60}
            height={60}
            onClick={() => handleImgClick(i)}
          />
        ))}
      </div>
      <button
        className='flex items-center justify-center absolute p-2 bg-white rounded-full right-3 w-8 h-8 md:hidden'
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
        className='flex items-center justify-center absolute p-2 bg-white rounded-full left-3 w-8 h-8 md:hidden'
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
