import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/product/product.model";
import { GetProductsByNameQuery } from "./get-products-by-name.query";
import { IProductRepository } from "src/app/domain/product/product.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsByNameQueryHandler implements GetProductsByNameQuery {

    constructor(
        private _productRepository: IProductRepository
    ) { }

    execute(productName: string): Promise<Product[]> {

        const products = this._productRepository.getProducts()
        const productsFilter = this.searchProducts(productName, products)

        return Promise.resolve(productsFilter)
    }

    private searchProducts(searchTerm: string, products: Product[]): Product[] {
        const productsFilter = products
            .filter(product => this.isSearchMatch(product.name, searchTerm))
            .slice(0, 6)

        return productsFilter
    }

    private isSearchMatch(productName: string, searchTerm: string): boolean {

        const normalizedProductName = this.normalizedTerm(productName)
        const normalizedSearchTerm = this.normalizedTerm(searchTerm)
        const isMatch = normalizedProductName.includes(normalizedSearchTerm)

        return isMatch
    }

    private normalizedTerm(term: string): string {
        return term.toLowerCase().trim()
    }
}