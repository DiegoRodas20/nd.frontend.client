import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FilterCatalogService {

    private filterCatalogVisible = new BehaviorSubject<boolean>(false)
    filterCatalogVisible$ = this.filterCatalogVisible.asObservable()

    constructor() { }

    public openFilterCatalog(){
        this.filterCatalogVisible.next(true)
    }

    public closeFilterCatalog(){
        this.filterCatalogVisible.next(false)
    }
}