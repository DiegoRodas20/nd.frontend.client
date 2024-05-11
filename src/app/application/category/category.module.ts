import { NgModule } from "@angular/core";
import { GetCategoriesQuery } from "./queries/get-categories/get-categories.query";
import { GetCategoriesQueryHandler } from "./queries/get-categories/get-categories.query-handler";

@NgModule({
    providers: [
        { provide: GetCategoriesQuery, useClass: GetCategoriesQueryHandler }
    ]
})

export class CategoryModule { }