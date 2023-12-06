import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "./cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    viewCart: boolean = false

    constructor(
        private _shoppingCartService: ShoppingCartService,
    ) { }

    ngOnInit() {
        this.subscribeCartVisible()
    }

    subscribeCartVisible() {
        this._shoppingCartService.shoppingCartVisible$.subscribe(state => this.viewCart = state)
    }

}