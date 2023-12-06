import { Component, OnInit } from "@angular/core";
import { OverlayService } from "./overlay.service";

@Component({
    selector: 'app-overlay',
    templateUrl: 'overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})

export class OverlayComponent implements OnInit {

    viewOverlay: boolean = false

    constructor(
        private _overlayService: OverlayService
    ) { }

    ngOnInit() {
        this.subscribeOverlayVisible()
    }

    subscribeOverlayVisible() {
        this._overlayService.overlayVisible$.subscribe(
            state => {
                this.viewOverlay = state
            }
        )
    }

    public closeOverlay() {
        this._overlayService.closeOverlay()
    }
}