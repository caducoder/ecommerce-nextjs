import Image from 'next/image'
import { CartPopover } from './CartPopover'
import { useState } from 'react'

const pages = [
    'Collections',
    'Men',
    'Women',
    'About',
    'Contact'
]

export default function Navbar() {
    const [isOpenPopover, setIsOpenPopover] = useState(false)
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

    const handleOpenPopover = () => {
        setIsOpenPopover((prev: boolean) => !prev)
    }

    const handleOpenMenu = () => {
        setIsOpenPopover(false)
        setIsOpenMobileMenu(true)
    }
    return (
        <header className="md:container mx-auto flex flex-row items-center justify-between p-4 md:px-0 border-b">
            <div className='flex flex-row items-center gap-2'>
                <button className='p-2 md:hidden' onClick={handleOpenMenu}>
                    <Image
                        src={"/images/icon-menu.svg"}
                        alt='Menu icon'
                        width={15}
                        height={20}
                    />
                </button>
                <h1 className='text-3xl font-bold font-kumbh mb-1'>sneakers</h1>
                <nav className='hidden md:block ml-4'>
                    <ul className='flex flex-row gap-1'>
                        {pages.map((pg, i) => (
                            <li key={i} className='p-2 text-dark-grayish-blue cursor-pointer border-2 border-transparent hover:text-black hover:border-b-orange'>{pg}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <button className='p-2' onClick={handleOpenPopover}>
                    <Image
                        src={"/images/icon-cart.svg"}
                        alt='Menu icon'
                        width={15}
                        height={20}
                    />
                </button>
                <CartPopover open={isOpenPopover} />
                <div className="rounded-full hover:border-orange border-white border-2">
                    <Image src={"/images/image-avatar.png"} alt='' width={25} height={25} />
                </div>
            </div>
            <div className={`absolute bottom-0 left-0 h-[100vh] z-99 w-full bg-stone-700/50 ${isOpenMobileMenu ? 'block' : 'hidden'}`}></div>
            <div className={`transition absolute bottom-0 left-0 ease-in-out duration-300 bg-white w-2/3 h-full p-5 ${!isOpenMobileMenu ? '-translate-x-[100%]' : 'translate-x-0'}`}>
                <button className='p-2 mb-6' onClick={() => setIsOpenMobileMenu(false)}>
                    <Image
                        src={"/images/icon-close.svg"}
                        alt='Close mobile menu icon'
                        width={15}
                        height={20}
                    />
                </button>
                <nav>
                    <ul>
                        {pages.map((pg, i) => (
                            <li key={i} className='p-2 font-bold cursor-pointer'>{pg}</li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}