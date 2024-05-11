import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/product/product.model";
import { GetProductByIdQuery } from "./get-product-by-id.query";
import { IProductRepository } from "src/app/domain/product/product.repository";

@Injectable({
    providedIn: 'root'
})
export class GetProductByIdQueryHandler implements GetProductByIdQuery {

    constructor(
        private _productRepository: IProductRepository
    ) { }

    execute(idProduct: number): Promise<Product> {
        
        const product = this._productRepository.getProductById(idProduct)

        return product
    }

}