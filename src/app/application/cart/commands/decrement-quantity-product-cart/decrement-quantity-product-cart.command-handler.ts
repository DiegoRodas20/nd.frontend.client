import { Injectable } from "@angular/core";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { DecrementQuantityProductCartCommand } from "./decrement-quantity-product-cart.command";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DecrementQuantityProductCartCommandHandler implements DecrementQuantityProductCartCommand {

    constructor(
        private _cartRepository: CartRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const products = await firstValueFrom(this._cartRepository.getProductsCart())

        const updatedProducts = products.map(product => {

            if (product.id == idProductCart) {
                return { ...product, quantity: product.quantity - 1 }
            }

            return product
        })

        const isDecremented = await this._cartRepository.updateProductsCart(updatedProducts)

        return isDecremented
    }
}