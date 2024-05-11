import { Injectable } from "@angular/core";
import { Cart } from "src/app/domain/cart/cart.model";
import { AddProductPurchaseOrderCommand } from "./add-product-purchase-order.command";
import { IPurchaseOrderRepository } from "src/app/domain/purchase-order/purchase-order.repository";

@Injectable({
    providedIn: 'root'
})
export class AddProductPurchaseOrderCommandHandler implements AddProductPurchaseOrderCommand {

    constructor(
        private _purchaseOrderRepository: IPurchaseOrderRepository
    ) { }

    async execute(productCart: Cart): Promise<boolean> {

        const result = await this._purchaseOrderRepository.addProductToPurchaseOrder(productCart)

        return result
    }

}