import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wishlist } from "src/app/domain/entities/wishlist.model";
import { WishlistRepository } from "src/app/domain/repositories/wishlist.repository";
import { GetProductsWishlistQuery } from "./get-products-wishlist.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsWishlistQueryHandler implements GetProductsWishlistQuery {

    constructor(
        private _wishlistRepository: WishlistRepository
    ) { }

    execute(): Observable<Wishlist[]> {

        return this._wishlistRepository.getProductsWishlist()
    }
}