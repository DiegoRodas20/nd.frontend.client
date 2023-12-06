import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../cart.service";

@Component({
    selector: 'app-header-cart',
    templateUrl: 'header-cart.component.html',
    styleUrls: ['./header-cart.component.scss'],
})

export class HeaderCartComponent implements OnInit {

    constructor(
        private _shoppingCartService: ShoppingCartService,
    ) { }

    ngOnInit() { }

    public closeShoppingCart() {
        this._shoppingCartService.closeShoppingCart()
    }

}