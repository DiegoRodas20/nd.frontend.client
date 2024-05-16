import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouteService } from "src/app/shared/services/route.service";
import { SidebarService } from "./sidebar-menu.service";

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: 'sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss'],
})

export class SidebarMenuComponent implements OnInit {

    viewSidebar: boolean = false

    constructor(
        private _router: Router,
        private _routeService: RouteService,
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
        this._router.navigate([this._routeService.homeRoute])
    }

    public goToProducts() {
        this._router.navigate([this._routeService.storeRoute])
    }

    public goToPurchaseOrders() {
        this._router.navigate([this._routeService.checkOutRoute])
    }
}