import { Component, OnInit } from "@angular/core";
import { DecrementQuantityProductCartCommand } from "src/app/application/cart/commands/decrement-quantity-product-cart/decrement-quantity-product-cart.command";
import { DeleteProductCartCommand } from "src/app/application/cart/commands/delete-product-cart/delete-product-cart.command";
import { IncrementQuantityProductCartCommand } from "src/app/application/cart/commands/increment-quantity-product-cart/increment-quantity-product-cart.command";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { Cart } from "src/app/domain/entities/cart.model";
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

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery,
        private _deleteProductCart: DeleteProductCartCommand,
        private _incrementQuantityProductCart: IncrementQuantityProductCartCommand,
        private _decrementQuantityProductCart: DecrementQuantityProductCartCommand
    ) { }

    ngOnInit() {
        this.getProductsCart()
    }

    public getProductsCart() {
        this._getProductsCart.execute().subscribe(result => {
            this.products = result
        })
    }

    public deleteProductCart(idProductCart: string) {
        this._deleteProductCart.execute(idProductCart)
    }

    public incrementQuantityProductCart(idProductCart: string) {
        this._incrementQuantityProductCart.execute(idProductCart);
    }

    public decrementQuantityProductCart(idProductCart: string) {
        this._decrementQuantityProductCart.execute(idProductCart);
    }
}