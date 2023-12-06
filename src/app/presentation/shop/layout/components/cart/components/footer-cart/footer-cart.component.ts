import { Component, OnInit } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-footer-cart',
    templateUrl: 'footer-cart.component.html',
    styleUrls: ['./footer-cart.component.scss'],
})

export class FooterCartComponent implements OnInit {

    constructor(
        public routeService: RouteService
    ) { }

    ngOnInit() { }

}