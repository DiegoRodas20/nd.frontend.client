import { Component, OnInit } from "@angular/core";
import { RouteService } from "src/app/shared/services/route.service";

@Component({
    selector: 'app-header-top',
    templateUrl: 'header-top.component.html',
    styleUrls: ['./header-top.component.scss']
})

export class HeaderTopComponent implements OnInit {

    viewCategories: boolean = false

    constructor(
        public routeService: RouteService
    ) { }

    ngOnInit() { }

}