import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { OverlayService } from "../overlay/overlay.service";

@Injectable({
    providedIn: 'root'
})

export class SidebarService {

    private sidebarVisible = new BehaviorSubject<boolean>(false)
    sidebarVisible$ = this.sidebarVisible.asObservable()

    constructor(
        private _overlayService: OverlayService
    ) { 
        this.subscribeToOverlay()
    }

    subscribeToOverlay() {
        this._overlayService.overlayVisible$.subscribe(state => {
            this.sidebarVisible.next(false)
        })
    }

    public openSidebar() {

        this._overlayService.openOverlay()
        this.sidebarVisible.next(true)
    }

    public closeSidebar() {

        this._overlayService.closeOverlay()
        this.sidebarVisible.next(false)
    }
}