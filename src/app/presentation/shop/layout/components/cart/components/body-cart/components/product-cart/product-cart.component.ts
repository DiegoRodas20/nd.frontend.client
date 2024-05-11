import { Component, Input, OnInit } from '@angular/core';
import { DecreaseProductCartCommand } from 'src/app/application/cart/commands/decrease-product-cart/decrease-product-cart.command';
import { DeleteProductCartCommand } from 'src/app/application/cart/commands/delete-product-cart/delete-product-cart.command';
import { IncreaseProductCartCommand } from 'src/app/application/cart/commands/increase-product-cart/increase-product-cart.command';
import { Cart } from 'src/app/domain/cart/cart.model';

@Component({
    selector: 'app-product-cart',
    templateUrl: 'product-cart.component.html',
    styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {

    @Input() productCart!: Cart;

    constructor(
        private _deleteProductCart: DeleteProductCartCommand,
        private _increaseProductCart: IncreaseProductCartCommand,
        private _decreaseProductCart: DecreaseProductCartCommand
    ) { }

    ngOnInit() { }

    public async deleteProductCart(idProductCart: string) {
        await this._deleteProductCart.execute(idProductCart);
    }

    public incrementQuantityProductCart(idProductCart: string) {

        this._increaseProductCart.execute(idProductCart);
    }

    public decrementQuantityProductCart(idProductCart: string) {

        this._decreaseProductCart.execute(idProductCart);

    }
}
