import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/domain/product/product.model";
import { scaleFadeStagger } from "src/app/shared/animations/scale-fade-stagger.animation";

@Component({
    selector: 'app-body-store',
    templateUrl: 'body-store.component.html',
    styleUrls: ['body-store.component.scss'],
    animations: [scaleFadeStagger]
})

export class BodyStoreComponent implements OnInit {

    @Input() products: Product[] = []

    constructor() { }

    ngOnInit() { }
}