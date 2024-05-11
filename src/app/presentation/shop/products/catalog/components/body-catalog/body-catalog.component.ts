import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/domain/product/product.model";
import { scaleFadeStagger } from "src/app/shared/animations/scale-fade-stagger.animation";

@Component({
    selector: 'app-body-catalog',
    templateUrl: 'body-catalog.component.html',
    styleUrls: ['body-catalog.component.scss'],
    animations: [scaleFadeStagger]
})

export class BodyCatalogComponent implements OnInit {

    @Input() products: Product[] = []

    constructor() { }

    ngOnInit() { }

    // public getProducts() {
    //     this.products = this._getProductsQuery.execute()
    // }

}