import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/domain/entities/cart.model';
import { Product } from 'src/app/domain/entities/product.model';
import { CartRepository } from 'src/app/domain/repositories/cart.repository';
import { ProductRepository } from 'src/app/domain/repositories/product.repository';
import { v4 as uuidv4 } from 'uuid';
import { RegisterProductCartCommand } from './register-product-cart.command';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RegisterProductCartCommandHandler implements RegisterProductCartCommand {

    constructor(
        private _alertService: ToastrService,
        private _cartRepository: CartRepository,
        private _productRepository: ProductRepository
    ) { }

    async execute(idProduct: number): Promise<boolean> {

        if (this.isProductAlreadyInCart(idProduct)) {
            
            this._alertService.warning(`Ya se encuentra en el carrito`);
            return false;
        }

        const product = await this._productRepository.getProductById(idProduct);

        const productCart = this.createProductCartFromProduct(product);

        const products = await firstValueFrom(this._cartRepository.getProductsCart())

        products.push(productCart)

        const isRegister = await this._cartRepository.updateProductsCart(products);

        if (isRegister) {
            this._alertService.success('Se añadio correctamente');
        }

        return isRegister;
    }

    private isProductAlreadyInCart(idProduct: number): boolean {

        const productCartExist = this._cartRepository.getProductCartByProductId(idProduct)
            ? true
            : false;

        return productCartExist;
    }

    private createProductCartFromProduct(product: Product): Cart {

        const productCart: Cart = {
            id: uuidv4(),
            idProduct: product.id,
            image: product.images[0],
            name: product.name,
            price: product.price,
            quantity: 1,
            rating: product.rating,
        };

        return productCart;
    }
}
