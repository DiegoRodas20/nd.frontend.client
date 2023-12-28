import { Component, OnInit } from "@angular/core";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { GetProductsWishlistQuery } from "src/app/application/wishlist/queries/get-products-wishlist/get-products-wishlist.query";
import { RouteService } from "src/app/shared/services/route.service";
import { ShoppingCartService } from "../../../cart/cart.service";

@Component({
    selector: 'app-header-action',
    templateUrl: 'header-action.component.html',
    styleUrls: ['./header-action.component.scss']
})

export class HeaderActionComponent implements OnInit {

    countProductsCart: number = 0
    countProductsWishlist: number = 0

    constructor(
        public routeService: RouteService,
        private _getProductsCart: GetProductsCartQuery,
        private _getProductsWishlist: GetProductsWishlistQuery,
        private _shoppingCartService: ShoppingCartService
    ) { }

    ngOnInit() {
        this.setProductsCart()
        this.setProductsWishlist()
    }

    private setProductsCart() {
        this._getProductsCart.execute().subscribe(result => this.countProductsCart = result.length)
    }

    private setProductsWishlist() {
        this._getProductsWishlist.execute().subscribe(products => this.countProductsWishlist = products.length)
    }

    public openShoppingCart() {
        this._shoppingCartService.openShoppingCart()
    }
}