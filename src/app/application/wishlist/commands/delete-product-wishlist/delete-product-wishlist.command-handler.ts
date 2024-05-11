import { Injectable } from "@angular/core";
import { DeleteProductWishlistCommand } from "./delete-product-wishlist.command";
import { IWishlistRepository } from "src/app/domain/wishlist/wishlist.repository";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductWishlistCommandHandler implements DeleteProductWishlistCommand {

    constructor(
        private _wishlistRepository: IWishlistRepository
    ) { }

    async execute(idProductWishlist: string): Promise<boolean> {

        var result = await this._wishlistRepository.deleteProductWishlist(idProductWishlist)

        return result
    }
}