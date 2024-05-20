import { Signal, WritableSignal, signal } from '@angular/core';
import { Cart } from 'src/app/domain/cart/cart.model';
import { ICartRepository } from 'src/app/domain/cart/cart.repository';

export class CartRepository implements ICartRepository {

    private localStorageKey: string = 'cart_products';
    private productsCart: WritableSignal<Cart[]> = signal([])

    constructor() {
        this.setProductsCart();
    }

    private setProductsCart() {

        const storedData = localStorage.getItem(this.localStorageKey);

        if (storedData) {
            this.productsCart.set(JSON.parse(storedData))
        }
    }

    private updateStorageProductsCart() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsCart()))
    }

    public getProductsCart(): Signal<Cart[]> {

        return this.productsCart
    }

    public getProductCartById(idProductCart: string): Promise<Cart | undefined> {

        const productCart = this.productsCart().find(value => value.id === idProductCart)

        return Promise.resolve(productCart)
    }

    public getProductCartByProductId(idProduct: number): Cart | undefined {

        const productCart = this.productsCart().find(
            product => product.idProduct === idProduct
        )

        return productCart
    }

    public registerProductCart(productCart: Cart): Promise<boolean> {

        this.productsCart().push(productCart)

        this.updateStorageProductsCart()

        return Promise.resolve(true)
    }

    public deleteProductCart(idProductCart: string): Promise<boolean> {

        this.productsCart.update(() => this.productsCart().filter(value => value.id !== idProductCart))

        this.updateStorageProductsCart()

        return Promise.resolve(true)
    }

    public increaseQuantityProductCart(idProductCart: string): Promise<boolean> {

        this.productsCart().forEach(productCart => {

            if (productCart.id === idProductCart) {
                productCart.quantity = productCart.quantity + 1
                productCart.priceCart = productCart.priceProduct * productCart.quantity
            }
        })

        // this.productsCart.mutate(values => {

        //     values.forEach(productCart => {

        //         if (productCart.id === idProductCart) {
        //             productCart.quantity = productCart.quantity + 1
        //             productCart.priceCart = productCart.priceProduct * productCart.quantity
        //         }

        //     })
        // })

        this.updateStorageProductsCart()

        return Promise.resolve(true)
    }

    public decreaseQuantityProductCart(idProductCart: string): Promise<boolean> {

        const productCart = this.productsCart().find(item => item.id === idProductCart)

        if (productCart!.quantity <= 1) {

            return Promise.resolve(false)
        }

        this.productsCart().forEach(productCart => {

            if (productCart.id === idProductCart) {
                productCart.quantity = productCart.quantity - 1
                productCart.priceCart = productCart.priceProduct * productCart.quantity
            }
        })

        // this.productsCart.mutate(values => {
        //     values.forEach(productCart => {

        //         if (productCart.id === idProductCart) {
        //             productCart.quantity = productCart.quantity - 1
        //             productCart.priceCart = productCart.priceProduct * productCart.quantity
        //         }
        //     })
        // })

        this.updateStorageProductsCart()

        return Promise.resolve(true)
    }
}
