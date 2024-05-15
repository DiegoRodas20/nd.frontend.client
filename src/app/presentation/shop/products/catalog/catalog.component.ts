import { Component, OnInit } from "@angular/core";
import { GetProductsQuery } from "src/app/application/product/queries/get-products/get-products.query";
import { Product } from "src/app/domain/product/product.model";

@Component({
    selector: 'app-catalog',
    templateUrl: 'catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

    products: Product[] = []
    paginatedProducts: Product[] = []

    constructor(
        private _getProductsQuery: GetProductsQuery
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    public getProducts() {
        this.products = this._getProductsQuery.execute()
    }

    public displayedProducts(event: Product[]) {
        this.paginatedProducts = event
    }
}
