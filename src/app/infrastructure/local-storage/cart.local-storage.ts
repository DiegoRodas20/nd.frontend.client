import { Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/domain/entities/cart.model';
import { CartRepository } from 'src/app/domain/repositories/cart.repository';

export class CartLocalStorage implements CartRepository {

    private localStorageKey: string = 'cart_products';
    private items = new BehaviorSubject<Cart[]>([]);
    private items$ = this.items.asObservable();
    private productsCart = signal<Cart[]>([])

    constructor() {
        this.setProductsCart();
    }

    private setProductsCart() {
        const storedData = localStorage.getItem(this.localStorageKey);

        if (storedData) {
            this.items.next(JSON.parse(storedData));
            this.productsCart.set(JSON.parse(storedData))
        }
    }

    public getProductsCart(): Observable<Cart[]> {
        return this.items$;
    }

    public getProductCartByProductId(idProduct: number): Cart | any {

        const productCart = this.items.value.find(
            (productCart: Cart) => productCart.idProduct === idProduct
        );

        return productCart;
    }

    public updateProductsCart(productsCart: Cart[]): Promise<boolean> {

        this.items.next(productsCart);

        localStorage.setItem(this.localStorageKey, JSON.stringify(productsCart));

        return new Promise((resolve) => resolve(true));
    }


    // Signals

    public getProductsCartSignal(): Signal<Cart[]> {

        return this.productsCart
    }

    public addProductsCartSignal(idProductCart: string): Promise<boolean> {

        this.productsCart.mutate(values => {

            values.forEach(productCart => {
                if (productCart.id === idProductCart) {
                    productCart.quantity = productCart.quantity + 1
                    productCart.priceCart = productCart.priceProduct * (productCart.quantity + 1)
                }
            })
        })

        localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsCart()))

        return new Promise(resolve => resolve(true))
    }

    public deleteProductCartSignal(idProductCart: string): Promise<boolean> {

        // debugger
        this.productsCart.update(() => this.productsCart().filter(value => value.id !== idProductCart))

        return new Promise(resolve => resolve(true))
    }
}
