import { Injectable } from "@angular/core";
import { SetPurchaseOrderCommand } from "src/app/application/purchase-order/commands/set-purchase-order/set-purchase-order.command";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { DeleteProductCartCommand } from "./delete-product-cart.command";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductCartCommandHandler implements DeleteProductCartCommand {

    constructor(
        private _cartRepository: CartRepository,
        private _setPurchaseOrder: SetPurchaseOrderCommand
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.deleteProductCart(idProductCart)

        // if (isDeleted) {
        //     this._setPurchaseOrder.execute(productsFilter)
        // }

        return Promise.resolve(result)
    }
}