import { Signal } from "@angular/core";
import { Cart } from "../cart/cart.model";

export abstract class ICartRepository {

    abstract getProductsCart(): Signal<Cart[]>

    abstract getProductCartById(idProductCart: string): Promise<Cart | undefined>

    abstract getProductCartByProductId(idProduct: number): Cart | undefined

    abstract registerProductCart(productCart: Cart): Promise<boolean>

    abstract deleteProductCart(idProductCart: string): Promise<boolean>

    abstract increaseQuantityProductCart(idProductCart: string): Promise<boolean>

    abstract decreaseQuantityProductCart(idProductCart: string): Promise<boolean>

}