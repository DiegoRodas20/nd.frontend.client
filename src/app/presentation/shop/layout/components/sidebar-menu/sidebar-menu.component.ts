import { Component, OnInit } from "@angular/core";
import { SidebarService } from "./sidebar-menu.service";
import { Router } from "@angular/router";
import { STORE_ROUTE, CHECK_OUT_ROUTE, HOME_ROUTE } from "src/app/shared/routes/app.routes";

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: 'sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss'],
})

export class SidebarMenuComponent implements OnInit {

    viewSidebar: boolean = false

    constructor(
        private _router: Router,
        private _sidebarService: SidebarService
    ) { }

    ngOnInit() {
        this.subscribeSidebarVisible()
    }

    subscribeSidebarVisible() {

        this._sidebarService.sidebarVisible$.subscribe(state => {
            this.viewSidebar = state
        })
    }

    public closeSidebar() {
    }

    public goToHome() {
        this._router.navigate([HOME_ROUTE])
    }

    public goToProducts() {
        this._router.navigate([STORE_ROUTE])
    }

    public goToPurchaseOrders() {
        this._router.navigate([CHECK_OUT_ROUTE])
    }
}