import { Injectable, Signal } from "@angular/core";
import { Cart } from "src/app/domain/entities/cart.model";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { GetProductsCartSignalQuery } from "./get-products-cart-signal.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsCartSignalQueryHandler implements GetProductsCartSignalQuery {

    constructor(
        private _cartRepository: CartRepository
    ) { }

    execute(): Signal<Cart[]> {

        return this._cartRepository.getProductsCartSignal()
    }

}