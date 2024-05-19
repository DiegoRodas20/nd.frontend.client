import { Injectable, Signal } from "@angular/core";
import { Wishlist } from "src/app/domain/wishlist/wishlist.model";
import { IWishlistRepository } from "src/app/domain/wishlist/wishlist.repository";
import { GetProductsWishlistQuery } from "./get-products-wishlist.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsWishlistQueryHandler implements GetProductsWishlistQuery {

    constructor(
        private _wishlistRepository: IWishlistRepository
    ) { }

    execute(): Signal<Wishlist[]> {

        return this._wishlistRepository.getProductsWishlist()
    }
}