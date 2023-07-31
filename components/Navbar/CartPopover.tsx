import React from 'react'
import { createPortal } from 'react-dom';
import Image from 'next/image'

export const CartPopover = ({ open }: { open: boolean }) => {
    return (
        <>
            {open &&
                createPortal(
                    <div className="relative w-[100vw]">
                        <div className='border rounded-md m-2 '>
                            <p className="font-bold p-5">Cart</p>
                            <hr />
                            <div className='p-4 h-[240px] flex items-center justify-center'>
                                <span className='text-gray-500 font-bold'>Your cart is empty</span>
                            </div>

                        </div>
                    </div>,
                    document.body // elemento html que irá ser o pai, ex: document.body
                )
            }
        </>
    )
}
