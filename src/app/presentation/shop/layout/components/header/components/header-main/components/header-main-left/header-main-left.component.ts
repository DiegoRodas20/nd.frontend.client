import { Component, OnInit } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-header-main-left',
    templateUrl: 'header-main-left.component.html',
    styleUrls: ['./header-main-left.component.scss'],
})

export class HeaderMainLeftComponent implements OnInit {

    constructor(
        public routeService: RouteService
    ) { }

    ngOnInit() { }

}