import { Category } from "../category/category.model";

export abstract class ICategoryRepository {

    abstract getCategories(): Promise<Category[]>

    abstract getCategoryById(idCategory: number): Promise<Category>
    
}