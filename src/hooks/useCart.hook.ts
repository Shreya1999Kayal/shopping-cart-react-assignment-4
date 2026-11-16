import { useContext } from "react"
import CartContext from "../context/cart/CartContext"

const useCart = () => {
    const cartContext = useContext(CartContext)
    if (!cartContext) {
        throw new Error("Error - CartContext not provided ....")
    }
    return cartContext
}

export default useCart