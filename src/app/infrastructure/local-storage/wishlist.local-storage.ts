import { BehaviorSubject, Observable } from 'rxjs';
import { Wishlist } from 'src/app/domain/entities/wishlist.model';
import { WishlistRepository } from 'src/app/domain/repositories/wishlist.repository';

export class WishlistLocalStorage implements WishlistRepository {
    private localStorageKey: string = 'wishlist_products';
    private products = new BehaviorSubject<Wishlist[]>([]);
    private products$ = this.products.asObservable();

    constructor() {
        this.setProductsWishlist();
    }

    private setProductsWishlist() {
        const storedData = localStorage.getItem(this.localStorageKey);

        if (storedData) this.products.next(JSON.parse(storedData));
    }

    public getProductsWishlist(): Observable<Wishlist[]> {
        return this.products$;
    }

    public getProductWishlistByProductId(idProduct: number): Wishlist | undefined {

        var result = this.products.value.find(
            (productWishlist) => productWishlist.idProduct === idProduct
        );

        return result;
    }

    public registerProductWishlist(productWishlist: Wishlist): Promise<string> {

        const value = this.products.getValue();

        value.push(productWishlist);
        this.products.next(value);

        localStorage.setItem(this.localStorageKey, JSON.stringify(value));

        return Promise.resolve(productWishlist.id)
    }

    public deleteProductWishlist(idProductWishlist: string): Promise<boolean> {

        const value = this.products.getValue()
            .filter(productWishlist => productWishlist.id != idProductWishlist);

        this.products.next(value);
        localStorage.setItem(this.localStorageKey, JSON.stringify(value));

        return Promise.resolve(true)
    }
}
