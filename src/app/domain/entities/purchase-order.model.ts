import { Cart } from "./cart.model";

export interface PurchaseOrder {

    products: Cart[],
    totalPrice: number
}