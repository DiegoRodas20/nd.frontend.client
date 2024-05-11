import { Category } from "src/app/domain/category/category.model";
import { ICategoryRepository } from "src/app/domain/category/category.repository";

export class CategoryRepository implements ICategoryRepository {

    private categories: Category[] = [
        {
            id: 1,
            name: "Headphones",
            image: "assets/img/product/category/product-cat-1.png",
            link: "shop-category.html",
            product_count: 20
        },
        {
            id: 2,
            name: "Mobile Phone",
            image: "assets/img/product/category/product-cat-2.png",
            link: "shop-category1.html",
            product_count: 25
        },
        {
            id: 3,
            name: "CPU Heat Pipes",
            image: "assets/img/product/category/product-cat-3.png",
            link: "shop-category.html",
            product_count: 57
        },
        {
            id: 4,
            name: "Smart Watch",
            image: "assets/img/product/category/product-cat-4.png",
            link: "shop-category.html",
            product_count: 44
        },
        {
            id: 5,
            name: "With Bluetooth",
            image: "assets/img/product/category/product-cat-5.png",
            link: "shop-category.html",
            product_count: 81
        }
    ]

    constructor() { }

    getCategories(): Promise<Category[]> {

        return Promise.resolve(this.categories)
    }

    getCategoryById(idCategory: number): Promise<Category> {
        throw new Error("Method not implemented.");
    }

}