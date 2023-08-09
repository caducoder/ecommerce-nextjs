import React, { useState } from 'react'
import Image from 'next/image'
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery'
import { Lightbox } from './Lightbox';

export const slides = [
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const isLarge = useMediaQuery('(min-width: 768px)');
  const closeLightbox = () => setIsLightboxOpen(false);
  const openLightbox = () => {
    if (!isLarge) return;
    setIsLightboxOpen(true);
  }

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
    <div className='w-full relative h-[296px] z-0 flex flex-row items-center justify-between md:flex-col md:max-w-sm xl:h-[450px]'>
      <div className='relative w-full h-full md:h-296px'>
        <Image src={slides[currentIndex].url} alt="Product images" fill className='md:rounded-lg md:cursor-pointer' onClick={openLightbox} />
      </div>
      <div className='hidden md:visible w-full mt-4 md:flex flex-row justify-between'>
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
      <Lightbox isOpen={isLightboxOpen} close={closeLightbox} />
    </div>
  )
}
