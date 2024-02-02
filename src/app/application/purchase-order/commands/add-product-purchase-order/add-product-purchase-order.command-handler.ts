import { Injectable } from "@angular/core";
import { Cart } from "src/app/domain/entities/cart.model";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";
import { AddProductPurchaseOrderCommand } from "./add-product-purchase-order.command";

@Injectable({
    providedIn: 'root'
})
export class AddProductPurchaseOrderCommandHandler implements AddProductPurchaseOrderCommand {

    constructor(
        private _purchaseOrderRepository: PurchaseOrderRepository
    ) { }

    async execute(productCart: Cart): Promise<boolean> {

        const result = await this._purchaseOrderRepository.addProductToPurchaseOrder(productCart)

        return result
    }

}