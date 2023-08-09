import Image from 'next/image'
import React, { useState } from 'react'
import { slides } from './index'

export const Lightbox = ({ isOpen, close }: { isOpen: boolean, close: () => void }) => {
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
    <div
      className={`
        ${isOpen ? 'visible' : 'hidden'} z-10 w-full h-full 
        bg-black/70 fixed top-0 right-0 
        flex items-center justify-center
      `}
    >
      <div className='relative z-20 flex flex-col gap-4'>
        <button onClick={close} className='self-end'>
          <Image
            src='/images/icon-close.svg'
            alt='Close icon'
            width={20}
            height={20}

          />
        </button>
        <div className='relative h-[400px] w-[400px]'>
          <Image
            src={slides[currentIndex].url}
            alt=''
            width={400}
            height={400}
            className='rounded-lg'
          />
          <div className='absolute w-full h-full top-0 flex flex-row-reverse justify-between self-center items-center'>
            <button
              className='relative flex items-center justify-center p-2 bg-white rounded-full -right-4 w-8 h-8'
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
              className='relative flex items-center justify-center p-2 bg-white rounded-full -left-4 w-8 h-8'
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
        </div>
        <div className='flex flex-row justify-evenly'>
          {slides.map((img, i) => (
            <Image
              role='button'
              key={i}
              src={img.url}
              alt='Item photo'
              className={`relative rounded-md cursor-pointer border border-transparent ${currentIndex == i && 'border-orange'} hover:bg-orange`}
              width={60}
              height={60}
              onClick={() => handleImgClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
