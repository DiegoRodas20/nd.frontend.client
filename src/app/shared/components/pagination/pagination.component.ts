import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})

export class PaginationComponent implements OnInit {

    @Input() itemsPerPage: number = 1
    @Input() totalItems: number = 1
    @Output() pageChanged: EventEmitter<number> = new EventEmitter()

    constructor() { }

    ngOnInit() { }

    get getPages() {

        const totalPages = Math.round(this.totalItems / this.itemsPerPage)

        const pages: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);

        return pages
    }

    public changePage(page: number) {
        this.pageChanged.emit(page)
    }
}