import { Observable } from "rxjs";
import { Wishlist } from "../wishlist/wishlist.model";

export abstract class IWishlistRepository {

    abstract getProductsWishlist(): Observable<Wishlist[]>

    abstract getProductWishlistByProductId(idProduct: number): Wishlist | undefined

    abstract registerProductWishlist(productWishlist: Wishlist): Promise<string>

    abstract deleteProductWishlist(idProductWishlist: string): Promise<boolean>

}