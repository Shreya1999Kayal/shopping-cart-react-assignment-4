import type { CartItem } from "../../types/interface/cart.interface"

// total quantity of all items (shown in Navbar)
export const getCartCount = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.qty, 0)
}

// sum of price * qty
export const getTotalPrice = (items: CartItem[]): number => {
    const total = items.reduce((sum, item) => sum + (item.price * item.qty), 0)
    return Math.round(total * 100) / 100 // avoids 0.1 + 0.2 style decimal errors
}