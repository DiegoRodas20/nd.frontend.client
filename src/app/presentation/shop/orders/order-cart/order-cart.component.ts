import { Component, OnInit } from "@angular/core";
import { DeleteProductCartCommand } from "src/app/application/cart/commands/delete-product-cart/delete-product-cart.command";
import { UpdateProductCartCommand } from "src/app/application/cart/commands/update-product-cart/update-product-cart.command";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { GetPurchaseOrderQuery } from "src/app/application/purchase-order/queries/get-purchase-order/get-purchase-order.query";
import { Cart } from "src/app/domain/entities/cart.model";
import { PurchaseOrder } from "src/app/domain/entities/purchase-order.model";
import { slideFadeLeft } from "src/app/shared/animations/slide-fade-left.animation";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-order-cart',
    templateUrl: 'order-cart.component.html',
    styleUrls: ['./order-cart.component.scss'],
    animations: [slideFadeLeft]
})

export class OrderCartComponent implements OnInit {

    products: Cart[] = []
    purchaseOrder!: PurchaseOrder

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery,
        private _getPurchaseOrder: GetPurchaseOrderQuery,
        private _deleteProductCart: DeleteProductCartCommand,
        private _updateProductCart: UpdateProductCartCommand
    ) { }

    ngOnInit() {
        this.getProductsCart()
        this.getPurchaseOrder()
    }

    public getProductsCart() {
        this._getProductsCart.execute().subscribe(result => {
            this.products = result
        })
    }

    public getPurchaseOrder() {
        this._getPurchaseOrder.execute().subscribe(result => {
            this.purchaseOrder = result
        })
    }

    public deleteProductCart(idProductCart: string) {
        this._deleteProductCart.execute(idProductCart)
    }

    public incrementQuantityProductCart(idProductCart: string) {
        this._updateProductCart.execute({
            idProductCart: idProductCart,
            increment: true,
        });
    }

    public decrementQuantityProductCart(idProductCart: string) {
        this._updateProductCart.execute({
            idProductCart: idProductCart,
            increment: false,
        });
    }
}