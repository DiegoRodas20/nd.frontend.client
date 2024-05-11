import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { GetProductsByNameQuery } from "src/app/application/product/queries/get-product-by-name/get-products-by-name.query";
import { Product } from "src/app/domain/product/product.model";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-header-search',
    templateUrl: 'header-search.component.html',
    styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit {

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

    public onInputFocus() {
        this.inputSearchFocused = true
    }

    public onInputBlur() {
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