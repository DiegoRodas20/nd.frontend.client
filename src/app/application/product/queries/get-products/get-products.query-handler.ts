import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/product/product.model";
import { GetProductsQuery } from "./get-products.query";
import { IProductRepository } from "src/app/domain/product/product.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductsQueryHandler implements GetProductsQuery {

    constructor(
        private _productRepository: IProductRepository
    ) { }

    execute(): Product[] {

        return this._productRepository.getProducts()
    }
}