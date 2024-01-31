import { Component, OnInit, Signal, computed, signal } from "@angular/core";
import { GetProductsCartSignalQuery } from "src/app/application/cart/queries/get-products-cart-signal/get-products-cart-signal.query";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { Cart } from "src/app/domain/entities/cart.model";
import { slideFadeLeft } from "src/app/shared/animations/slide-fade-left.animation";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-body-cart',
    templateUrl: 'body-cart.component.html',
    styleUrls: ['./body-cart.component.scss'],
    animations: [slideFadeLeft]
})

export class BodyCartComponent implements OnInit {

    productsCart: Cart[] = []

    productsCartSignal: Signal<Cart[]> = signal([])

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery,
        private _getProductsCartSignal: GetProductsCartSignalQuery
    ) { }

    ngOnInit() {
        // this.getProductsCart()

        this.productsCartSignal = this._getProductsCartSignal.execute()
    }

    public getProductsCart() {
        // this._getProductsCart.execute().subscribe(result => {
        //     this.productsCart = result
        // })

        const prueba = this._getProductsCartSignal.execute()

        this.productsCart = prueba()
        console.log('SIGNAL', prueba())
    }
}