import React from 'react'
import { createPortal } from 'react-dom';

export const CartPopover = ({ open, cart }: { open: boolean, cart: CartItem[] }) => {
    return (
        <>
            {open &&
                createPortal(
                    <div className="absolute w-[100vw] top-20">
                        <div className='border rounded-md m-2 bg-white'>
                            <p className="font-bold p-5">Cart</p>
                            <hr />
                            {Boolean(cart.length) ? (
                                cart.map(prod => (
                                    <p key={prod.id}>{prod.title}</p>
                                ))
                            ) : (
                                <div className='p-4 h-[200px] flex items-center justify-center'>
                                    <span className='text-gray-500 font-bold'>Your cart is empty</span>
                                </div>
                            )
                            }
                        </div>
                    </div>,
                    document.body // elemento html que irá ser o pai, ex: document.body
                )
            }
        </>
    )
}
