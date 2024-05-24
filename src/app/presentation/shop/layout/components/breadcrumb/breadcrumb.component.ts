import { Component, OnInit } from "@angular/core";
import { ActivationEnd, Event, Router } from "@angular/router";
import { filter, map } from "rxjs";

export interface BreadCrumb {
    name: string,
    url: string,
    isActive: boolean
}

@Component({
    selector: 'app-breadcrumb',
    templateUrl: 'breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})

export class BreadcrumbComponent implements OnInit {

    breadCrumb: BreadCrumb[] = []
    isActive: boolean = true

    constructor(
        private _router: Router
    ) {
        this.subscribeRoutes()
    }

    ngOnInit() { }

    subscribeRoutes() {

        this.getRoutes().subscribe(response => {

            this.initializeHome()

            const object: BreadCrumb = {
                name: response['name'],
                url: response['url'],
                isActive: response['isActive']
            }

            if (!object.isActive) {
                this.isActive = false
            }
            else {
                this.isActive = true
            }

            if (response['name'] !== 'Home') {
                this.breadCrumb.push(object);
            }
        })
    }

    initializeHome() {
        this.breadCrumb = [{
            name: 'Home',
            url: '/',
            isActive: false
        }];
    }

    getRoutes() {
        return this._router.events
            .pipe(
                filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
                filter((event: ActivationEnd) => event.snapshot.firstChild === null),
                map((event: ActivationEnd) => event.snapshot.data)
            )
    }

}
