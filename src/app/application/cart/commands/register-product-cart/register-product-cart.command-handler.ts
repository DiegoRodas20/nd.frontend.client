import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SetPurchaseOrderCommand } from 'src/app/application/purchase-order/commands/set-purchase-order/set-purchase-order.command';
import { Cart } from 'src/app/domain/entities/cart.model';
import { CartRepository } from 'src/app/domain/repositories/cart.repository';
import { ProductRepository } from 'src/app/domain/repositories/product.repository';
import { v4 as uuidv4 } from 'uuid';
import { RegisterProductCartCommand } from './register-product-cart.command';

@Injectable({
    providedIn: 'root',
})
export class RegisterProductCartCommandHandler implements RegisterProductCartCommand {

    constructor(
        private _alertService: ToastrService,
        private _cartRepository: CartRepository,
        private _productRepository: ProductRepository,
        private _setPurchaseOrder: SetPurchaseOrderCommand
    ) { }

    public async execute(idProduct: number): Promise<boolean> {

        const productCart = this._cartRepository.getProductCartByProductId(idProduct)

        if (productCart) {
            
            this._alertService.warning(`Ya se encuentra en el carrito`);
            return Promise.resolve(false)
        }

        const productCartRegister = await this.createProductCartFromProduct(idProduct)

        const isRegister = await this._cartRepository.registerProductCart(productCartRegister);

        if (isRegister) {
            this._alertService.success('Se añadio correctamente');
            // this._setPurchaseOrder.execute(products)
        }

        return Promise.resolve(isRegister);
    }

    private async createProductCartFromProduct(idProduct: number): Promise<Cart> {

        const product = await this._productRepository.getProductById(idProduct)

        const productCart: Cart = {
            id: uuidv4(),
            idProduct: product.id,
            image: product.images[0],
            name: product.name,
            priceCart: product.price,
            priceProduct: product.price,
            quantity: 1,
            rating: product.rating,
        };

        return productCart;
    }
}
