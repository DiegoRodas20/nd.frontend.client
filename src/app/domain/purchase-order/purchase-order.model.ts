import { Cart } from "../cart/cart.model";

export interface PurchaseOrder {

    products: Cart[],
    totalPrice: number
}