import { Injectable } from "@angular/core";
import { DeleteProductPurchaseOrderCommand } from "src/app/application/purchase-order/commands/delete-product-purchase-order/delete-product-purchase-order.command";
import { DeleteProductCartCommand } from "./delete-product-cart.command";
import { ICartRepository } from "src/app/domain/cart/cart.repository";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductCartCommandHandler implements DeleteProductCartCommand {

    constructor(
        private _cartRepository: ICartRepository,
        private _deleteProductPurchaseOrder: DeleteProductPurchaseOrderCommand,
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.deleteProductCart(idProductCart)

        if (result) {

            this._deleteProductPurchaseOrder.execute(idProductCart)
        }

        return Promise.resolve(result)
    }
}