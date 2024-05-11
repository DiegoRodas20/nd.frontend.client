import { Injectable, Signal } from "@angular/core";
import { Cart } from "src/app/domain/cart/cart.model";
import { GetProductsCartQuery } from "./get-products-cart.query";
import { ICartRepository } from "src/app/domain/cart/cart.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsCartQueryHandler implements GetProductsCartQuery {

    constructor(
        private _cartRepository: ICartRepository
    ) { }

    execute(): Signal<Cart[]> {

        return this._cartRepository.getProductsCart()
    }

}