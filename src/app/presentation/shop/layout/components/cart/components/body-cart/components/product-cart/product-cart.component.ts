import { Component, Input, OnInit } from '@angular/core';
import { DeleteProductCartCommand } from 'src/app/application/cart/commands/delete-product-cart/delete-product-cart.command';
import { UpdateProductCartCommand } from 'src/app/application/cart/commands/update-product-cart/update-product-cart.command';
import { Cart } from 'src/app/domain/entities/cart.model';

@Component({
    selector: 'app-product-cart',
    templateUrl: 'product-cart.component.html',
    styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {

    @Input() productCart!: Cart;

    constructor(
        private _deleteProductCart: DeleteProductCartCommand,
        private _updateProductCart: UpdateProductCartCommand
    ) { }

    ngOnInit() { }

    public async deleteProductCart(idProductCart: string) {
        await this._deleteProductCart.execute(idProductCart);
    }

    public incrementQuantityProductCart(idProductCart: string) {
        this._updateProductCart.execute({
            idProductCart: idProductCart,
            increment: true,
        });
    }

    public decrementQuantityProductCart(idProductCart: string) {
        this._updateProductCart.execute({
            idProductCart: idProductCart,
            increment: false,
        });
    }
}
