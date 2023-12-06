import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OverlayService {

    private overlayVisible = new BehaviorSubject<boolean>(false)
    overlayVisible$ = this.overlayVisible.asObservable()

    constructor() { }

    public openOverlay() {
        this.overlayVisible.next(true)
    }

    public closeOverlay() {
        this.overlayVisible.next(false)
    }
}