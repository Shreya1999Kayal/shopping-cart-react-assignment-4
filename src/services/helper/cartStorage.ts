import type { CartItem } from "../../types/interface/cart.interface"
import { cartItemSchema } from "../validation/cart.validation"

const CART_KEY = "cartItems"

export const getStoredCart = (): CartItem[] => {
    try {
        const stored = localStorage.getItem(CART_KEY)
        if (!stored) return []
        const parsed = JSON.parse(stored)
        if (!Array.isArray(parsed)) return []

        // keep only the rows that match the schema
        return parsed.filter((item) => cartItemSchema.isValidSync(item)) as CartItem[]
    }
    catch {
        return [] // storage blocked or text is not valid json -> start with an empty cart
    }
}

export const saveCart = (items: CartItem[]) => {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(items))
    }
    catch {
        // storage full or blocked -> the cart still works for this session
    }
}