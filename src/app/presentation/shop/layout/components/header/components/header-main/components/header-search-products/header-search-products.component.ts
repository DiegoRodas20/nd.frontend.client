import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { GetProductsByNameQuery } from "src/app/application/product/queries/get-product-by-name/get-products-by-name.query";
import { Product } from "src/app/domain/entities/product.model";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-header-search-products',
    templateUrl: 'header-search-products.component.html',
    styleUrls: ['./header-search-products.component.scss'],
})

export class HeaderSearchProductsComponent implements OnInit {

    products: Product[] = []
    inputSearch: FormControl = new FormControl()
    inputSearchFocused: boolean = false

    constructor(
        public routeService: RouteService,
        private _getProductsByName: GetProductsByNameQuery,
    ) { }

    ngOnInit() {
        this.subscribeSearchChanges()
    }

    onInputFocus() {
        this.inputSearchFocused = true
    }

    onInputBlur() {
        setTimeout(() => {
            this.inputSearchFocused = false;
        }, 200);
    }

    private subscribeSearchChanges() {
        this.inputSearch.valueChanges.subscribe(async searchTerm => {
            if (searchTerm) {
                this.products = await this._getProductsByName.execute(searchTerm)
            }
            else {
                this.products = []
            }
        })
    }
}