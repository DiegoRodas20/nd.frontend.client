import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RegisterProductCartCommand } from "src/app/application/cart/commands/register-product-cart/register-product-cart.command";
import { GetProductByIdQuery } from "src/app/application/product/queries/get-product-by-id/get-product-by-id.query";
import { Product } from "src/app/domain/entities/product.model";

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})

export class ProductDetailComponent implements OnInit {

    productId: number = 0
    product: Product = {
        id: 0,
        name: "",
        category: "",
        images: [""],
        price: 0,
        rating: 0,
        description: "",
        status: ""
    }

    constructor(
        private _route: ActivatedRoute,
        private _getProductById: GetProductByIdQuery,
        private _registerProductCart: RegisterProductCartCommand,
    ) { }

    ngOnInit() {
        this.subscribeChangesRouteParam()
    }

    private subscribeChangesRouteParam() {
        this._route.params.subscribe(params => {
            const productId = Number(params['id'])
            this.getProductById(productId)
        })
    }

    public async getProductById(productId: number) {
        this.product = await this._getProductById.execute(productId)
    }

    public registerProductCart() {
        this._registerProductCart.execute(this.product.id)
    }
}