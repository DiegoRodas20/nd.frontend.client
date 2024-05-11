import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wishlist } from "src/app/domain/wishlist/wishlist.model";
import { GetProductsWishlistQuery } from "./get-products-wishlist.query";
import { IWishlistRepository } from "src/app/domain/wishlist/wishlist.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsWishlistQueryHandler implements GetProductsWishlistQuery {

    constructor(
        private _wishlistRepository: IWishlistRepository
    ) { }

    execute(): Observable<Wishlist[]> {

        return this._wishlistRepository.getProductsWishlist()
    }
}