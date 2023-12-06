import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/entities/product.model";
import { ProductRepository } from "src/app/domain/repositories/product.repository";
import { GetProductsByNameQuery } from "./get-products-by-name.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductsByNameQueryHandler implements GetProductsByNameQuery {

    constructor(
        private _productRepository: ProductRepository
    ) { }

    execute(productName: string): Promise<Product[]> {

        const products = this._productRepository.getProducts()
        const productsFilter = this.searchProducts(productName, products)

        return new Promise(resolve => {
            resolve(productsFilter)
        })
    }

    private searchProducts(searchTerm: string, products: Product[]): Product[] {
        const productsFilter = products.filter(product => this.isSearchMatch(product.name, searchTerm))
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