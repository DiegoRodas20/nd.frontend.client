import { Injectable } from "@angular/core";
import { WishlistRepository } from "src/app/domain/repositories/wishlist.repository";
import { DeleteProductWishlistCommand } from "./delete-product-wishlist.command";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductWishlistCommandHandler implements DeleteProductWishlistCommand {

    constructor(
        private _wishlistRepository: WishlistRepository
    ) { }

    async execute(idProductWishlist: string): Promise<boolean> {

        var result = await this._wishlistRepository.deleteProductWishlist(idProductWishlist)

        return result
    }
}