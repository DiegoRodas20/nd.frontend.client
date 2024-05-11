import { Injectable } from "@angular/core";
import { GetCategoriesQuery } from "./get-categories.query";
import { Category } from "src/app/domain/category/category.model";
import { ICategoryRepository } from "src/app/domain/category/category.repository";

@Injectable({
    providedIn: 'root'
})

export class GetCategoriesQueryHandler implements GetCategoriesQuery {

    constructor(
        private _categoryRepository: ICategoryRepository
    ) { }

    execute(): Promise<Category[]> {

        var result = this._categoryRepository.getCategories()

        return Promise.resolve(result)
    }
}