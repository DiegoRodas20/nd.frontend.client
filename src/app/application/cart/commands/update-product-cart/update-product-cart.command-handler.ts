import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SetPurchaseOrderCommand } from 'src/app/application/purchase-order/commands/set-purchase-order/set-purchase-order.command';
import { CartRepository } from 'src/app/domain/repositories/cart.repository';
import { UpdateProductCartCommand } from './update-product-cart.command';

@Injectable({
    providedIn: 'root',
})
export class UpdateProductCartCommandHandler implements UpdateProductCartCommand {

    constructor(
        private _cartRepository: CartRepository,
        private _setPurchaseOrder: SetPurchaseOrderCommand
    ) { }

    async execute(params: {
        idProductCart: string;
        increment: boolean;
    }): Promise<boolean> {

        // const products = await firstValueFrom(
        //     this._cartRepository.getProductsCart()
        // );

        // const updatedProducts = products.map((product) => {

        //     if (product.id === params.idProductCart) {

        //         const newQuantity = params.increment
        //             ? this.incrementQuantity(product.quantity)
        //             : this.decrementQuantity(product.quantity)

        //         return {
        //             ...product,
        //             quantity: newQuantity,
        //             priceCart: product.priceProduct * newQuantity,
        //         };
        //     }

        //     return product;
        // });

        // const isUpdated = await this._cartRepository.updateProductsCart(
        //     updatedProducts
        // );

        const updateSignal = await this._cartRepository.addProductsCartSignal(params.idProductCart)

        // if (isUpdated) {
        //     this._setPurchaseOrder.execute(updatedProducts);
        // }

        return updateSignal;
    }

    private incrementQuantity(quantity: number): number {
        return quantity + 1
    }

    private decrementQuantity(quantity: number): number {
        return quantity - 1
    }
}
