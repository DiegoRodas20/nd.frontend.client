import { Component, OnInit, Signal } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";
import { ShoppingCartService } from "../../cart.service";
import { GetPurchaseOrderQuery } from "src/app/application/purchase-order/queries/get-purchase-order/get-purchase-order.query";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";

@Component({
    selector: 'app-footer-cart',
    templateUrl: 'footer-cart.component.html',
    styleUrls: ['./footer-cart.component.scss'],
})

export class FooterCartComponent implements OnInit {

    purchaseOrder!: Signal<PurchaseOrder>

    constructor(
        public routeService: RouteService,
        private _shoppingCartService: ShoppingCartService,
        private _getPurchaseOrder: GetPurchaseOrderQuery
    ) { }

    ngOnInit() {
        this.getPurchaseOrder()
    }

    public closeShoppingCart() {
        this._shoppingCartService.closeShoppingCart()
    }

    public getPurchaseOrder() {

        this.purchaseOrder = this._getPurchaseOrder.execute()
    }
}