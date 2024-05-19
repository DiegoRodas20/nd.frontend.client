import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})

export class PaginationComponent implements OnInit {

    @Input() items: any[] = []
    @Output() displayedItems: EventEmitter<any[]> = new EventEmitter();

    pages: number[] = []
    currentPage: number = 1
    itemsPerPage: number = 4

    constructor() { }

    ngOnInit() {
        this.getPages(this.items.length)
        this.paginateItems(this.currentPage)
    }

    public paginateItems(currentPage: number) {
        const startIndex = (currentPage - 1) * this.itemsPerPage
        const endIndex = startIndex + this.itemsPerPage

        const paginatedItems = this.items.slice(startIndex, endIndex)

        this.currentPage = currentPage
        this.displayedItems.emit(paginatedItems)
    }

    public nextPage() {
        if (this.currentPage < this.pages.length) {
            this.paginateItems(this.currentPage + 1)
        }
    }

    public backPage() {
        if (this.currentPage >= 2) {
            this.paginateItems(this.currentPage - 1)
        }
    }

    public getPages(itemsCount: number) {

        const totalPages = Math.ceil(itemsCount / this.itemsPerPage)

        this.pages = Array.from(
            { length: totalPages },
            (_, index) => index + 1
        )
    }
}