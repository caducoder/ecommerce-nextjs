interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  discount?: number
}

interface CartItem {
  id: number,
  title: string,
  price: number,
  quantity: number
}

interface IContext {
  cart: CartItem[],
  addToCart: (item: CartItem) => void,
  removeFromCart: (id: number) => void
}
