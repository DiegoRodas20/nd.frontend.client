import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CartRepository } from "src/app/domain/repositories/cart.repository";
import { DeleteProductCartCommand } from "./delete-product-cart.command";

@Injectable({
    providedIn: 'root'
})
export class DeleteProductCartCommandHandler implements DeleteProductCartCommand {

    constructor(
        private _cartRepository: CartRepository
    ) { }

    async execute(idProductCart: string): Promise<boolean> {

        const products = await firstValueFrom(this._cartRepository.getProductsCart())

        const productsFilter = products.filter(productCart => productCart.id != idProductCart)

        const isDeleted = await this._cartRepository.updateProductsCart(productsFilter)

        return isDeleted
    }
}