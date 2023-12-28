import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";
import { PurchaseOrderRepository } from "src/app/domain/repositories/purchase-order.repository";
import { GetPurchaseOrderQuery } from "./get-purchase-order.query";

@Injectable({
    providedIn: 'root'
})
export class GetPurchaseOrderQueryHandler implements GetPurchaseOrderQuery {

    constructor(
        private _purchaseOrderRepository: PurchaseOrderRepository
    ) { }

    execute(): Observable<PurchaseOrder> {

        return this._purchaseOrderRepository.getPurchaseOrder()
    }

}