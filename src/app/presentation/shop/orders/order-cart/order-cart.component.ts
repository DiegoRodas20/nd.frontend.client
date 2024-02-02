import { Component, OnInit, Signal, signal } from "@angular/core";
import { DecreaseProductCartCommand } from "src/app/application/cart/commands/decrease-product-cart/decrease-product-cart.command";
import { DeleteProductCartCommand } from "src/app/application/cart/commands/delete-product-cart/delete-product-cart.command";
import { IncreaseProductCartCommand } from "src/app/application/cart/commands/increase-product-cart/increase-product-cart.command";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { GetPurchaseOrderQuery } from "src/app/application/purchase-order/queries/get-purchase-order/get-purchase-order.query";
import { Cart } from "src/app/domain/entities/cart.model";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";
import { slideFadeLeft } from "src/app/shared/animations/slide-fade-left.animation";
import { slideTable } from "src/app/shared/animations/slide-table.animation";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-order-cart',
    templateUrl: 'order-cart.component.html',
    styleUrls: ['./order-cart.component.scss'],
    animations: [slideFadeLeft, slideTable]
})

export class OrderCartComponent implements OnInit {

    products: Signal<Cart[]> = signal([])
    purchaseOrder!: Signal<PurchaseOrder>

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery,
        private _getPurchaseOrder: GetPurchaseOrderQuery,
        private _deleteProductCart: DeleteProductCartCommand,
        private _increaseProductCart: IncreaseProductCartCommand,
        private _decreaseProductCart: DecreaseProductCartCommand
    ) { }

    ngOnInit() {
        this.getProductsCart()
        this.getPurchaseOrder()
    }

    public getProductsCart() {

        this.products = this._getProductsCart.execute()
    }

    public getPurchaseOrder() {
        this.purchaseOrder = this._getPurchaseOrder.execute()
    }

    public deleteProductCart(idProductCart: string) {

        this._deleteProductCart.execute(idProductCart)
    }

    public incrementQuantityProductCart(idProductCart: string) {

        this._increaseProductCart.execute(idProductCart)
    }

    public decrementQuantityProductCart(idProductCart: string) {

        this._decreaseProductCart.execute(idProductCart)
    }
}