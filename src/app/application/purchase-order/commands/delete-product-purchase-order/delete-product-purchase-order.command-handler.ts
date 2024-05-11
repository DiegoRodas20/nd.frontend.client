import { Injectable } from "@angular/core";
import { DeleteProductPurchaseOrderCommand } from "./delete-product-purchase-order.command";
import { IPurchaseOrderRepository } from "src/app/domain/purchase-order/purchase-order.repository";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductPurchaseOrderCommandHandler implements DeleteProductPurchaseOrderCommand {

    constructor(
        private _purchaseOrderRepository: IPurchaseOrderRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const result = await this._purchaseOrderRepository.deleteProductToPurchaseOrder(idProductCart)

        return result
    }

}