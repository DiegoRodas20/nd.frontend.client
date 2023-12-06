import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { OverlayService } from "../overlay/overlay.service";

@Injectable({
    providedIn: 'root'
})

export class ShoppingCartService {

    private shoppingCartVisible = new BehaviorSubject<boolean>(false)
    shoppingCartVisible$ = this.shoppingCartVisible.asObservable()

    constructor(
        private _overlayService: OverlayService
    ) {
        this.subscribeToOverlay()
    }

    subscribeToOverlay() {
        this._overlayService.overlayVisible$.subscribe(() => this.shoppingCartVisible.next(false))
    }

    public openShoppingCart() {
        this._overlayService.openOverlay()
        this.shoppingCartVisible.next(true)
    }

    public closeShoppingCart() {
        this._overlayService.closeOverlay()
        this.shoppingCartVisible.next(false)
    }
}