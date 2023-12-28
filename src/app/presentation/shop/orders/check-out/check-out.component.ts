import { Component, OnInit } from "@angular/core";
import { GetPurchaseOrderQuery } from "src/app/application/purchase-order/queries/get-purchase-order/get-purchase-order.query";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";

@Component({
    selector: 'app-check-out',
    templateUrl: 'check-out.component.html',
    styleUrls: ['./check-out.component.scss'],
})

export class CheckOutComponent implements OnInit {

    purchaseOrder?: PurchaseOrder

    constructor(
        private _getPurchaseOrder: GetPurchaseOrderQuery
    ) { }

    ngOnInit() {
        this.getPurchaseOrder()
    }

    public getPurchaseOrder() {
        this._getPurchaseOrder.execute().subscribe(result => {
            this.purchaseOrder = result
        })
    }
}