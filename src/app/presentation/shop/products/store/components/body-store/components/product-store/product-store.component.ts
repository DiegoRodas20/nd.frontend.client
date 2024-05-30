import { Component, Input, OnInit } from "@angular/core";
import { RegisterProductCartCommand } from "src/app/application/cart/commands/register-product-cart/register-product-cart.command";
import { RegisterProductWishlistCommand } from "src/app/application/wishlist/commands/register-product-wishlist/register-product-wishlist.command";
import { Product } from "src/app/domain/product/product.model";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-product-store',
    templateUrl: 'product-store.component.html',
    styleUrls: ['./product-store.component.scss']
})

export class ProductStoreComponent implements OnInit {

    @Input() product!: Product

    constructor(
        public routeService: RouteService,
        private _registerProductCart: RegisterProductCartCommand,
        private _registerProductWishlist: RegisterProductWishlistCommand
    ) { }

    ngOnInit() { }

    public async registerProductCart(product: Product) {

        await this._registerProductCart.execute(product.id)
    }

    public async registerProductWishlist(product: Product) {

        await this._registerProductWishlist.execute(product.id)
    }

}
