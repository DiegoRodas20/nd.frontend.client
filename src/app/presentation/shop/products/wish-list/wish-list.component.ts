import { Component, OnInit } from "@angular/core";
import { RegisterProductCartCommand } from "src/app/application/cart/commands/register-product-cart/register-product-cart.command";
import { DeleteProductWishlistCommand } from "src/app/application/wishlist/commands/delete-product-wishlist/delete-product-wishlist.command";
import { GetProductsWishlistQuery } from "src/app/application/wishlist/queries/get-products-wishlist/get-products-wishlist.query";
import { Wishlist } from "src/app/domain/entities/wishlist.model";
import { slideFadeLeft } from "src/app/shared/animations/slide-fade-left.animation";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-wish-list',
    templateUrl: 'wish-list.component.html',
    styleUrls: ['./wish-list.component.scss'],
    animations: [slideFadeLeft]
})

export class WishlistComponent implements OnInit {

    productsWishlist: Wishlist[] = []

    constructor(
        public routeService: RouteService,
        private _getProductsWishlist: GetProductsWishlistQuery,
        private _registerProductCart: RegisterProductCartCommand,
        private _deleteProductWishlist: DeleteProductWishlistCommand
    ) { }

    ngOnInit() {
        this.getProductsWishlist()
    }

    public getProductsWishlist() {
        
        this._getProductsWishlist.execute().subscribe(result => {
            this.productsWishlist = result
        })
    }

    public registerProductCart(productWishlist: Wishlist) {

        this._registerProductCart.execute(productWishlist.idProduct)
    }

    public deleteProductWishlist(idProductWishlist: string) {

        this._deleteProductWishlist.execute(idProductWishlist)
    }
}
