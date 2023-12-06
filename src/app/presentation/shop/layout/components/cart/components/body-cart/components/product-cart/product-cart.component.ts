import { Component, Input, OnInit } from '@angular/core';
import { DecrementQuantityProductCartCommand } from 'src/app/application/cart/commands/decrement-quantity-product-cart/decrement-quantity-product-cart.command';
import { DeleteProductCartCommand } from 'src/app/application/cart/commands/delete-product-cart/delete-product-cart.command';
import { IncrementQuantityProductCartCommand } from 'src/app/application/cart/commands/increment-quantity-product-cart/increment-quantity-product-cart.command';
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
        private _incrementQuantityProductCart: IncrementQuantityProductCartCommand,
        private _decrementQuantityProductCart: DecrementQuantityProductCartCommand
    ) { }

    ngOnInit() { }

    public async deleteProductCart(idProductCart: string) {
        await this._deleteProductCart.execute(idProductCart);
    }

    public incrementQuantityProductCart(idProductCart: string) {
        this._incrementQuantityProductCart.execute(idProductCart);
    }

    public decrementQuantityProductCart(idProductCart: string) {
        this._decrementQuantityProductCart.execute(idProductCart);
    }
}
