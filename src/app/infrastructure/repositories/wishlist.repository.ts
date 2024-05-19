import { Signal, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wishlist } from 'src/app/domain/wishlist/wishlist.model';
import { IWishlistRepository } from 'src/app/domain/wishlist/wishlist.repository';

export class WishlistRepository implements IWishlistRepository {

    private localStorageKey: string = 'wishlist_products';
    private productsWishlist: WritableSignal<Wishlist[]> = signal([])

    private products = new BehaviorSubject<Wishlist[]>([]);
    private products$ = this.products.asObservable();

    constructor() {
        this.setProductsWishlist();
    }

    private setProductsWishlist() {

        const storedData = localStorage.getItem(this.localStorageKey);

        if (storedData) {
            this.productsWishlist.set(JSON.parse(storedData))
        }
    }

    public getProductsWishlist(): Signal<Wishlist[]> {

        return this.productsWishlist;
    }

    public getProductWishlistByProductId(idProduct: number): Wishlist | undefined {

        const productWishlist = this.productsWishlist().find(value => value.idProduct === idProduct)

        return productWishlist;
    }

    public registerProductWishlist(productWishlist: Wishlist): Promise<string> {

        this.productsWishlist().push(productWishlist)

        this.updateStorageProductsWishlist()

        return Promise.resolve(productWishlist.id)
    }

    public deleteProductWishlist(idProductWishlist: string): Promise<boolean> {

        this.productsWishlist.update(() => this.productsWishlist().filter(value => value.id !== idProductWishlist))

        this.updateStorageProductsWishlist()

        return Promise.resolve(true)
    }

    private updateStorageProductsWishlist() {

        localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsWishlist()))
    }
}
