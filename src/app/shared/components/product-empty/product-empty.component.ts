import { Component, Input, OnInit } from "@angular/core";
import { RouteService } from "../../services/route.service";

@Component({
    selector: 'app-product-empty',
    templateUrl: 'product-empty.component.html'
})

export class ProductEmptyComponent implements OnInit {

    @Input() name: string = ''

    constructor(
        public routeService: RouteService
    ) { }

    ngOnInit() { }

}