import Image from 'next/image';
import React from 'react'
import { createPortal } from 'react-dom';

export const CartPopover = ({ open, cart, removeFromCart }: { open: boolean, cart: CartItem[], removeFromCart: (id: number) => void }) => {
    return (
        <>
            {open &&
                createPortal(
                    <div className="absolute w-[100vw] top-20 sm:w-[375px] sm:right-8">
                        <div className='rounded-md shadow-xl m-2 bg-white'>
                            <p className="font-bold p-5">Cart</p>
                            <hr />
                            <div className='p-4'>
                                {Boolean(cart.length) ? (
                                    <>
                                        {cart.map(prod => (
                                            <div key={prod.id} className='flex flex-row justify-between'>
                                                <div>
                                                    <Image src={'https://fakeimg.pl/50x50/'} width={50} height={50} alt='Image placeholder' />
                                                </div>
                                                <div className='text-gray-500 text-md'>
                                                    <p>{prod.title}</p>
                                                    <p>
                                                        ${prod.price.toFixed(2)} x {prod.quantity}
                                                        <span className='text-black font-bold'> ${(prod.price * prod.quantity).toFixed(2)}</span>
                                                    </p>
                                                </div>
                                                <button className='p-2' onClick={() => removeFromCart(prod.id)}>
                                                    <Image src={'/images/icon-delete.svg'} alt='Delete icon' width={15} height={15} />
                                                </button>
                                            </div>
                                        )
                                        )}
                                        <button className='bg-orange p-4 text-white rounded-lg font-bold mt-4 w-full hover:bg-opacity-80'>
                                            Checkout
                                        </button>
                                    </>
                                ) : (
                                    <div className='h-[120px] flex items-center justify-center'>
                                        <span className='text-gray-500 font-bold'>Your cart is empty</span>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </div>,
                    document.body // elemento html que irá ser o pai
                )
            }
        </>
    )
}
