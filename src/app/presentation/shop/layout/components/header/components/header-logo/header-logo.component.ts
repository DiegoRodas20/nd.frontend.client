import { Component, OnInit } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-header-logo',
    templateUrl: 'header-logo.component.html',
    styleUrls: ['./header-logo.component.scss']
})

export class HeaderLogoComponent implements OnInit {

    constructor(
        public routeService: RouteService
    ) { }

    ngOnInit() { }

}