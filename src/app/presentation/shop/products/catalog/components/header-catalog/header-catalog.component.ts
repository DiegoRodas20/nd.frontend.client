import { Component, OnInit } from "@angular/core";
import { FilterCatalogService } from "../body-catalog/components/filter-catalog/filter-catalog.service";

@Component({
    selector: 'app-header-catalog',
    templateUrl: 'header-catalog.component.html'
})

export class HeaderCatalogComponent implements OnInit {

    constructor(
        private _filterCatalogService: FilterCatalogService
    ) { }

    ngOnInit() { }

    public openFilterCatalog() {
        this._filterCatalogService.openFilterCatalog()
    }

    public closeFilterCatalog() {
        this._filterCatalogService.closeFilterCatalog()
    }
}