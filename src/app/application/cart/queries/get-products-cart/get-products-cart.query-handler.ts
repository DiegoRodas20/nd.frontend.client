import { Injectable, Signal } from "@angular/core";
import { Cart } from "src/app/domain/entities/cart.model";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { GetProductsCartQuery } from "./get-products-cart.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsCartQueryHandler implements GetProductsCartQuery {

    constructor(
        private _cartRepository: CartRepository
    ) { }

    execute(): Signal<Cart[]> {

        return this._cartRepository.getProductsCart()
    }

}