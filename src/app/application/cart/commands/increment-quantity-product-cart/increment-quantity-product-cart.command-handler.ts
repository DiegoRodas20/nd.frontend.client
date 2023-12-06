import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { IncrementQuantityProductCartCommand } from "./increment-quantity-product-cart.command";

@Injectable({
    providedIn: "root"
})
export class IncrementQuantityProductCartCommandHandler implements IncrementQuantityProductCartCommand {

    constructor(
        private _cartRepository: CartRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const products = await firstValueFrom(this._cartRepository.getProductsCart())

        const updatedProducts = products.map(product => {

            if (product.id == idProductCart) {
                return { ...product, quantity: product.quantity + 1 }
            }

            return product
        })

        const isDecremented = await this._cartRepository.updateProductsCart(updatedProducts)

        return isDecremented
    }
}