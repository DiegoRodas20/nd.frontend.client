import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { RegisterProductCartCommand } from "src/app/application/cart/commands/register-product-cart/register-product-cart.command";
import { GetProductsByNameQuery } from "src/app/application/product/queries/get-product-by-name/get-products-by-name.query";
import { Product } from "src/app/domain/entities/product.model";
import { SearchModalService } from "./search-modal.service";

@Component({
    selector: 'app-search-modal',
    templateUrl: 'search-modal.component.html',
    styleUrls: ['./search-modal.component.scss']
})

export class SearchModalComponent implements OnInit {

    viewSearchModal: boolean = false
    inputSearch: FormControl = new FormControl()
    products: Product[] = []

    constructor(
        private _getProductsByName: GetProductsByNameQuery,
        private _searchModalService: SearchModalService,
        private _registerProductCart: RegisterProductCartCommand
    ) { }

    ngOnInit() {
        this.initializeInputSearch()
        this.subscribeSearchModal()
        this.subscribeSearchChanges()
    }

    private initializeInputSearch() {
        this.inputSearch.setValue('')
    }

    private subscribeSearchModal() {
        this._searchModalService.searchModalVisible$.subscribe(result => {

            this.viewSearchModal = result

            if (!result) {
                this.resetSearch()
            }
        })
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

    private resetSearch() {
        this.products = [];
        this.inputSearch.reset();
    }

    public registerProductCart(productCart: Product) {
        this._registerProductCart.execute(productCart.id)
    }

    closeSearchModal() {
        this._searchModalService.closeSearchModal()
    }

}