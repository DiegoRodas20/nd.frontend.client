import { Component, OnInit, Signal, signal } from "@angular/core";
import { GetProductsCartQuery } from "src/app/application/cart/queries/get-products-cart/get-products-cart.query";
import { GetProductsWishlistQuery } from "src/app/application/wishlist/queries/get-products-wishlist/get-products-wishlist.query";
import { Cart } from "src/app/domain/cart/cart.model";
import { RouteService } from "src/app/shared/services/route.service";
import { ShoppingCartService } from "../../../cart/cart.service";
import { Wishlist } from "src/app/domain/wishlist/wishlist.model";

@Component({
    selector: 'app-header-action',
    templateUrl: 'header-action.component.html',
    styleUrls: ['./header-action.component.scss']
})

export class HeaderActionComponent implements OnInit {

    countProductsCart: Signal<Cart[]> = signal([])
    countProductsWishlist: Signal<Wishlist[]> = signal([])

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
        this.countProductsCart = this._getProductsCart.execute()
    }

    private setProductsWishlist() {
        this.countProductsWishlist = this._getProductsWishlist.execute()
    }

    public openShoppingCart() {
        this._shoppingCartService.openShoppingCart()
    }
}