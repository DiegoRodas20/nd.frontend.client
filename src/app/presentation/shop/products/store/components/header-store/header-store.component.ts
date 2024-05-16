import { Component, OnInit } from "@angular/core";
import { FilterStoreService } from "../body-store/components/filter-store/filter-store.service";

@Component({
    selector: 'app-header-store',
    templateUrl: 'header-store.component.html',
    styleUrls: ['./header-store.component.scss']

})

export class HeaderStoreComponent implements OnInit {

    constructor(
        private _filterStoreService: FilterStoreService
    ) { }

    ngOnInit() { }

    public openFilterCatalog() {
        this._filterStoreService.openFilterCatalog()
    }

    public closeFilterCatalog() {
        this._filterStoreService.closeFilterCatalog()
    }
}