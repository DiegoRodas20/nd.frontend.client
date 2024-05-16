import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { GetProductsQuery } from "src/app/application/product/queries/get-products/get-products.query";
import { Product } from "src/app/domain/product/product.model";

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html',
    styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {

    products: Product[] = []
    paginatedProducts: Product[] = []

    constructor(
        private _getProductsQuery: GetProductsQuery,
        private _changeDetector: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    public getProducts() {
        this.products = this._getProductsQuery.execute()
    }

    public displayedProducts(event: Product[]) {
        this.paginatedProducts = event
        this._changeDetector.detectChanges()
    }
}
