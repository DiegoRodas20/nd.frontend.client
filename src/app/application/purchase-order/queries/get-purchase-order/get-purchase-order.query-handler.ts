import { Injectable, Signal } from "@angular/core";
import { PurchaseOrder } from "src/app/domain/purchase-order/purchase-order.model";
import { GetPurchaseOrderQuery } from "./get-purchase-order.query";
import { IPurchaseOrderRepository } from "src/app/domain/purchase-order/purchase-order.repository";

@Injectable({
    providedIn: 'root'
})
export class GetPurchaseOrderQueryHandler implements GetPurchaseOrderQuery {

    constructor(
        private _purchaseOrderRepository: IPurchaseOrderRepository
    ) { }

    execute(): Signal<PurchaseOrder> {

        const purchaseOrder = this._purchaseOrderRepository.getPurchaseOrder()

        return purchaseOrder
    }

}