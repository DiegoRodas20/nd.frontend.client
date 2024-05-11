import { Injectable } from "@angular/core";
import { IncreaseProductCartCommand } from "./increase-product-cart.command";
import { ICartRepository } from "src/app/domain/cart/cart.repository";
import { IPurchaseOrderRepository } from "src/app/domain/purchase-order/purchase-order.repository";

@Injectable({
    providedIn: 'root'
})
export class IncreaseProductCartCommandHandler implements IncreaseProductCartCommand {

    constructor(
        private _cartRepository: ICartRepository,
        private _purchaseOrder: IPurchaseOrderRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.increaseQuantityProductCart(idProductCart)

        if (result) {

            const updatedProductCart = await this._cartRepository.getProductCartById(idProductCart)
            this._purchaseOrder.updatePurchaseOrder(updatedProductCart)
        }

        return Promise.resolve(result)
    }
}