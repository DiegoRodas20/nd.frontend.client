import { Observable } from "rxjs";
import { Cart } from "../entities/cart.model";

export abstract class CartRepository {

    abstract getProductsCart(): Observable<Cart[]>

    abstract getProductCartByProductId(idProduct: number): Cart

    abstract updateProductsCart(productsCart: Cart[]): Promise<boolean>
}