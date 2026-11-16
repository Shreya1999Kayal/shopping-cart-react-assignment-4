//step 1 - every cart operation is one action, the payload is what the reducer needs to find / add the item

import type { Product } from "../interface/cart.interface";

export type CartAction =
    { type: "ADD_ITEM", payload: Product }       // whole product, because it may be a new row in the cart
    | { type: "REMOVE_ITEM", payload: number }   // product id
    | { type: "INCREASE_QTY", payload: number }  // product id
    | { type: "DECREASE_QTY", payload: number }  // product id