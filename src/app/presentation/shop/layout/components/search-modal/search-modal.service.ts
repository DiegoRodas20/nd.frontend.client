import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { OverlayService } from "../overlay/overlay.service";

@Injectable({
    providedIn: 'root'
})

export class SearchModalService {

    private searchModalVisible = new BehaviorSubject<boolean>(false)
    searchModalVisible$ = this.searchModalVisible.asObservable()

    constructor(
        private _overlayService: OverlayService
    ) {
        this.subscribeToOverlay()
    }

    private subscribeToOverlay() {
        this._overlayService.overlayVisible$.subscribe(() => this.searchModalVisible.next(false))
    }

    public openSearchModal() {
        this._overlayService.openOverlay()
        this.searchModalVisible.next(true)
    }

    public closeSearchModal() {
        this._overlayService.closeOverlay()
        this.searchModalVisible.next(false)
    }
}