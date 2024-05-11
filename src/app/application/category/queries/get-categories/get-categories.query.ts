import { UseCasePromise } from "src/app/application/base/use-case-promise.base";
import { Category } from "src/app/domain/category/category.model";

export abstract class GetCategoriesQuery implements UseCasePromise<null, Category[]> {

    abstract execute(): Promise<Category[]>

}