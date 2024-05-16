import { Component, OnInit } from "@angular/core";
import { FilterStoreService } from "./filter-store.service";

@Component({
    selector: 'app-filter-store',
    templateUrl: 'filter-store.component.html'
})

export class FilterStoreComponent implements OnInit {

    viewFilter: boolean = false

    constructor(
        private _filterStoreService: FilterStoreService
    ) { }

    ngOnInit() {
        this.subscribeFilterView()
    }

    subscribeFilterView() {
        this._filterStoreService.filterCatalogVisible$.subscribe(state => {
            this.viewFilter = state
        })
    }
}