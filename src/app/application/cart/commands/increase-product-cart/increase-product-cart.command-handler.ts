import { Injectable } from "@angular/core";
import { SetPurchaseOrderCommand } from "src/app/application/purchase-order/commands/set-purchase-order/set-purchase-order.command";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { IncreaseProductCartCommand } from "./increase-product-cart.command";

@Injectable({
    providedIn: 'root'
})
export class IncreaseProductCartCommandHandler implements IncreaseProductCartCommand {

    constructor(
        private _cartRepository: CartRepository,
        private _setPurchaseOrder: SetPurchaseOrderCommand
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.increaseQuantityProductCart(idProductCart)

        // if (isDeleted) {
        //     this._setPurchaseOrder.execute(productsFilter)
        // }

        return Promise.resolve(result)
    }
}