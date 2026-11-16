import { getStoredCart } from "../services/helper/cartStorage"
import type { CartStateType } from "../types/interface/cart.interface"

import type { CartAction } from "../types/type/cart.type"

//step 1  



export const CartInitialState: CartStateType = {
    // saved cart is read once when the app loads, so a page refresh does not empty the cart
    items: getStoredCart()
}

export const CartReducerfns = (state: CartStateType, action: CartAction): CartStateType => {

    switch (action.type) {
        case "ADD_ITEM":
            // product already in cart -> only increase its qty, never create a second row
            return {
                ...state,
                items: state.items.some((item) => item.id === action.payload.id)
                    ? state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.items, { ...action.payload, qty: 1 }]
            }
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) }
        case "INCREASE_QTY":
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item)
            }
        case "DECREASE_QTY":
            // qty never goes below 1, removing a product is the job of REMOVE_ITEM
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)
            }

        default:
            return state

    }



}