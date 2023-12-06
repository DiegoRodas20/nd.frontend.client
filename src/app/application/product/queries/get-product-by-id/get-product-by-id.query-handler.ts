import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/entities/product.model";
import { ProductRepository } from "src/app/domain/repositories/product.repository";
import { GetProductByIdQuery } from "./get-product-by-id.query";

@Injectable({
    providedIn: 'root'
})
export class GetProductByIdQueryHandler implements GetProductByIdQuery {

    constructor(
        private _productRepository: ProductRepository
    ) { }

    execute(idProduct: number): Promise<Product> {
        
        const product = this._productRepository.getProductById(idProduct)

        return product
    }

}