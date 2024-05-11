import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DecreaseProductCartCommand } from "./decrease-product-cart.command";
import { ICartRepository } from "src/app/domain/cart/cart.repository";
import { IPurchaseOrderRepository } from "src/app/domain/purchase-order/purchase-order.repository";

@Injectable({
    providedIn: 'root'
})
export class DecreaseProductCartCommandHandler implements DecreaseProductCartCommand {

    constructor(
        private _alertService: ToastrService,
        private _cartRepository: ICartRepository,
        private _purchaseOrder: IPurchaseOrderRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._cartRepository.decreaseQuantityProductCart(idProductCart)

        if (!result) {
            this._alertService.error('La cantidad minima es de un producto')

            return Promise.resolve(result)
        }

        const updatedProductCart = await this._cartRepository.getProductCartById(idProductCart)
        this._purchaseOrder.updatePurchaseOrder(updatedProductCart)

        return Promise.resolve(result)
    }
}