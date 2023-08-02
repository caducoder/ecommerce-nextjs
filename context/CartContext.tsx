import { useState, createContext } from "react";

export const CartContext = createContext({} as IContext)

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    // if product already is in the cart, does not add
    if (!!cart.find(p => p.id == item.id))
      return
    setCart(prev => [...prev, item])
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

