import { Injectable } from "@angular/core";
import { SetPurchaseOrderCommand } from "src/app/application/purchase-order/commands/set-purchase-order/set-purchase-order.command";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { DecreaseProductCartCommand } from "./decrease-product-cart.command";

@Injectable({
    providedIn: 'root'
})
export class DecreaseProductCartCommandHandler implements DecreaseProductCartCommand {

    constructor(
        private _cartRepository: CartRepository,
        private _setPurchaseOrder: SetPurchaseOrderCommand
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.decreaseQuantityProductCart(idProductCart)

        // if (isDeleted) {
        //     this._setPurchaseOrder.execute(productsFilter)
        // }

        return Promise.resolve(result)
    }
}