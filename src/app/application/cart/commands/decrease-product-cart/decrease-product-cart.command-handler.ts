import { Injectable } from "@angular/core";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";
import { DecreaseProductCartCommand } from "./decrease-product-cart.command";

@Injectable({
    providedIn: 'root'
})
export class DecreaseProductCartCommandHandler implements DecreaseProductCartCommand {

    constructor(
        private _cartRepository: CartRepository,
        private _purchaseOrder: PurchaseOrderRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.decreaseQuantityProductCart(idProductCart)

        if (result) {

            const updatedProductCart = await this._cartRepository.getProductCartById(idProductCart)

            this._purchaseOrder.updatePurchaseOrder(updatedProductCart)
        }

        return Promise.resolve(result)
    }
}