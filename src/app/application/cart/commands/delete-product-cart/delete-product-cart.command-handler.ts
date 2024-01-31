import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
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

        const value = await this._cartRepository.deleteProductCartSignal(idProductCart)

        // const products = await firstValueFrom(this._cartRepository.getProductsCart())

        // const productsFilter = products.filter(productCart => productCart.id != idProductCart)

        // const isDeleted = await this._cartRepository.updateProductsCart(productsFilter)

        // if (isDeleted) {
        //     this._setPurchaseOrder.execute(productsFilter)
        // }

        return value
    }
}