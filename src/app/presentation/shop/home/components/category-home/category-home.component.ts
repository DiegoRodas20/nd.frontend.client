import { Component, OnInit } from "@angular/core";
import { GetCategoriesQuery } from "src/app/application/category/queries/get-categories/get-categories.query";
import { Category } from "src/app/domain/category/category.model";

@Component({
    selector: 'app-category-home',
    templateUrl: 'category-home.component.html',
    styleUrls: ['./category-home.component.scss'],
})

export class CategoryHomeComponent implements OnInit {

    categories!: Category[]

    constructor(
        private _getCategories: GetCategoriesQuery
    ) { }

    ngOnInit() {
        this.getCategories()
    }

    private async getCategories() {
        this.categories = await this._getCategories.execute()
    }
}
