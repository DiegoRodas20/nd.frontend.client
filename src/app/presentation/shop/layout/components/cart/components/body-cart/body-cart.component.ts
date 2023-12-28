import { Component, OnInit } from "@angular/core";
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

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery
    ) { }

    ngOnInit() {
        this.getProductsCart()
    }

    public getProductsCart() {
        this._getProductsCart.execute().subscribe(result => {
            this.productsCart = result
        })
    }
}