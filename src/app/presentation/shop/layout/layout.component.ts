import { AfterContentInit, Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
// import { mount } from "react_layout/Layout";

@Component({
    selector: 'layout',
    templateUrl: 'layout.component.html',
    // encapsulation: ViewEncapsulation.None
})

export class LayoutComponent implements AfterContentInit {

    // @ViewChild('reactLayout', { static: true }) reactLayoutRef!: ElementRef;

    constructor() { }

    ngOnInit() { }

    ngAfterContentInit() {
        // const element = this.reactLayoutRef.nativeElement
        // mount(element);
    }
}
