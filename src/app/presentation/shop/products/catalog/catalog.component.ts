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
    currentPage: number = 1;
    itemsPerPage: number = 2;

    constructor(
        private _getProductsQuery: GetProductsQuery,
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    public getProducts() {
        this.products = this._getProductsQuery.execute()
    }

    public onPageChange(page: number) {
        this.currentPage = page
    }

    get displayedProducts(): Product[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.products.slice(startIndex, endIndex);
    }
}
