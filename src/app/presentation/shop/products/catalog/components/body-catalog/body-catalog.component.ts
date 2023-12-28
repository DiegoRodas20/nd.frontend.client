import { Component, OnInit } from "@angular/core";
import { GetProductsQuery } from "src/app/application/product/queries/get-products/get-products.query";
import { Product } from "src/app/domain/entities/product.model";
import { scaleFadeStagger } from "src/app/shared/animations/scale-fade-stagger.animation";

@Component({
    selector: 'app-body-catalog',
    templateUrl: 'body-catalog.component.html',
    animations: [scaleFadeStagger]
})

export class BodyCatalogComponent implements OnInit {

    products: Product[] = []

    constructor(
        private _getProductsQuery: GetProductsQuery,
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    public getProducts() {
        this.products = this._getProductsQuery.execute()
    }

}