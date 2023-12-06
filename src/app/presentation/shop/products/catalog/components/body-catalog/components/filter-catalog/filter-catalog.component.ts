import { Component, OnInit } from "@angular/core";
import { FilterCatalogService } from "./filter-catalog.service";

@Component({
    selector: 'app-filter-catalog',
    templateUrl: 'filter-catalog.component.html'
})

export class FilterCatalogComponent implements OnInit {

    viewFilter: boolean = false

    constructor(
        private _filterCatalogService: FilterCatalogService
    ) { }

    ngOnInit() {
        this.subscribeFilterView()
    }

    subscribeFilterView() {
        this._filterCatalogService.filterCatalogVisible$.subscribe(state => {
            this.viewFilter = state
        })
    }
}