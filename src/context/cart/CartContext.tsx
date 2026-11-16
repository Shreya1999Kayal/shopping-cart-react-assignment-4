import { createContext } from "react"
import type { CartContextType } from "../../types/interface/cart.interface"

//step 4
const CartContext = createContext<CartContextType | null>(null)

export default CartContext