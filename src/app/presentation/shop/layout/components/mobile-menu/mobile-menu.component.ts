import { Component, OnInit } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";
import { SearchModalService } from "../search-modal/search-modal.service";

@Component({
    selector: 'app-mobile-menu',
    templateUrl: 'mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss'],
})

export class MobileMenuComponent implements OnInit {

    constructor(
        public routeService: RouteService,
        private _searchModalService: SearchModalService
    ) { }

    ngOnInit() { }

    public openSearchModal(){
        this._searchModalService.openSearchModal()
    }
}