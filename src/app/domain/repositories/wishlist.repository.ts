import { Observable } from "rxjs";
import { Wishlist } from "../entities/wishlist.model";

export abstract class WishlistRepository {

    abstract getProductsWishlist(): Observable<Wishlist[]>

    abstract getProductWishlistByProductId(idProduct: number): Wishlist

    abstract registerProductWishlist(productWishlist: Wishlist): Promise<string>

    abstract deleteProductWishlist(idProductWishlist: string): Promise<boolean>

}