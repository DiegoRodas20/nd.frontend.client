import { Injectable } from "@angular/core";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";
import { DeleteProductPurchaseOrderCommand } from "./delete-product-purchase-order.command";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductPurchaseOrderCommandHandler implements DeleteProductPurchaseOrderCommand {

    constructor(
        private _purchaseOrderRepository: PurchaseOrderRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._purchaseOrderRepository.deleteProductToPurchaseOrder(idProductCart)

        return result
    }

}