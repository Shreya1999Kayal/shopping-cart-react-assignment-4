import { useEffect, useReducer, type ReactNode } from "react"
import CartContext from "./CartContext"
import { CartInitialState, CartReducerfns } from "../../reducer/cart.reducer"
import { saveCart } from "../../services/helper/cartStorage"
import { getCartCount, getTotalPrice } from "../../services/helper/cart.helper"
import type { CartStateType, Product } from "../../types/interface/cart.interface"
import type { CartAction } from "../../types/type/cart.type"

//step4

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, cartDispatch] = useReducer<CartStateType, [CartAction]>(CartReducerfns, CartInitialState)

  // every time the cart changes, save it so it survives a refresh
  useEffect(() => {
    saveCart(cartState.items)
  }, [cartState.items])

  // calculated from items every render, not stored in state, so they can never go out of sync
  const cartCount = getCartCount(cartState.items)
  const totalPrice = getTotalPrice(cartState.items)

  const handleAddItem = (product: Product) => {
    cartDispatch({ type: "ADD_ITEM", payload: product })
  }

  const handleRemoveItem = (id: number) => {
    cartDispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const handleIncreaseQty = (id: number) => {
    cartDispatch({ type: "INCREASE_QTY", payload: id })
  }

  const handleDecreaseQty = (id: number) => {
    cartDispatch({ type: "DECREASE_QTY", payload: id })
  }

  return (
    <CartContext value={{
      cartState,
      cartCount,
      totalPrice,
      handleAddItem,
      handleRemoveItem,
      handleIncreaseQty,
      handleDecreaseQty
    }}>
      {children}
    </CartContext>
  )
}

export default CartProvider