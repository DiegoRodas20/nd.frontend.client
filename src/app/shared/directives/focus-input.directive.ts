import { Directive, ElementRef, Input, OnChanges } from "@angular/core";

@Directive({
    selector: '[focusInput]'
})
export class FocusInputDirective implements OnChanges {

    @Input() focusInput: boolean = false

    constructor(private _elementRef: ElementRef) { }

    ngOnChanges() {

        if (this.focusInput) {
            console.log('PRUEBA')
            this._elementRef.nativeElement.focus()
        }
    }
}