//step 2

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    image: {
        url: string,   
    }
}

// a product inside the cart = product + how many of it
export interface CartItem extends Product {
    qty: number
}

// state is kept flat like auth / category state
// cart count and total price are NOT stored here, they are calculated from items (see CartProvider)
// state is kept flat like auth / category state
// cart count and total price are NOT stored here, they are calculated from items (see CartProvider)
export interface CartStateType {
    items: CartItem[]
}

export interface CartContextType {
    cartState: CartStateType,
    cartCount: number,   // total quantity of all items (shown in Navbar)
    totalPrice: number,  // sum of price * qty
    handleAddItem: (product: Product) => void,
    handleRemoveItem: (id: number) => void,
    handleIncreaseQty: (id: number) => void,
    handleDecreaseQty: (id: number) => void
}